#!/usr/bin/env bash

# Execute a Clerk Backend API request with scope enforcement.
#
# Usage: bash execute-request.sh [--admin] <METHOD> <PATH> [BODY]
#
# Scope enforcement:
#   GET     — always allowed
#   POST, PUT, PATCH — requires CLERK_BAPI_SCOPES="write" or --admin flag
#   DELETE  — requires CLERK_BAPI_SCOPES="write,delete" or --admin flag

set -euo pipefail

# Walk up from $PWD to find .env/.env.local (mirrors Clerk CLI behavior).
# Stops at the first directory that provides CLERK_SECRET_KEY.
# Parsed as plain KEY=VALUE data, never `source`d, so a crafted .env file
# cannot execute arbitrary shell code.
_dir="$PWD"
while true; do
  for _envfile in "$_dir/.env" "$_dir/.env.local"; do
    if [[ -f "$_envfile" ]]; then
      for _var in CLERK_SECRET_KEY CLERK_BAPI_SCOPES CLERK_REST_API_URL; do
        if [[ -z "${!_var:-}" ]]; then
          _line=$(grep -E "^${_var}=" "$_envfile" | tail -n 1 || true)
          if [[ -n "$_line" ]]; then
            _value="${_line#*=}"
            _value="${_value%$'\r'}"
            _value="${_value%\"}"; _value="${_value#\"}"
            _value="${_value%\'}"; _value="${_value#\'}"
            export "$_var=$_value"
          fi
        fi
      done
    fi
  done
  [[ -n "${CLERK_SECRET_KEY:-}" ]] && break
  _parent="$(dirname "$_dir")"
  [[ "$_parent" == "$_dir" ]] && break
  _dir="$_parent"
done
unset _dir _parent _envfile _var _line _value

# Parse --admin flag
ADMIN=false
if [[ "${1:-}" == "--admin" ]]; then
  ADMIN=true
  shift
fi

METHOD="${1:?Usage: execute-request.sh [--admin] <METHOD> <PATH> [BODY]}"
PATH_ARG="${2:?Usage: execute-request.sh [--admin] <METHOD> <PATH> [BODY]}"
BODY="${3:-}"

METHOD_UPPER=$(echo "$METHOD" | tr '[:lower:]' '[:upper:]')
SCOPES="${CLERK_BAPI_SCOPES:-}"

# Scope check
if [[ "$ADMIN" == false ]]; then
  case "$METHOD_UPPER" in
    GET)
      ;; # always allowed
    POST|PUT|PATCH)
      _has_write=false
      IFS=',' read -ra _scope_tokens <<< "$SCOPES"
      for _tok in "${_scope_tokens[@]}"; do
        [[ "$(echo "$_tok" | xargs)" == "write" ]] && _has_write=true
      done
      if [[ "$_has_write" == false ]]; then
        echo "ERROR: $METHOD_UPPER requests require CLERK_BAPI_SCOPES=\"write\" or --admin flag." >&2
        echo "Current CLERK_BAPI_SCOPES: \"$SCOPES\"" >&2
        exit 1
      fi
      ;;
    DELETE)
      _has_write=false
      _has_delete=false
      IFS=',' read -ra _scope_tokens <<< "$SCOPES"
      for _tok in "${_scope_tokens[@]}"; do
        _tok_trimmed="$(echo "$_tok" | xargs)"
        [[ "$_tok_trimmed" == "write" ]] && _has_write=true
        [[ "$_tok_trimmed" == "delete" ]] && _has_delete=true
      done
      if [[ "$_has_write" == false ]] || [[ "$_has_delete" == false ]]; then
        echo "ERROR: DELETE requests require CLERK_BAPI_SCOPES=\"write,delete\" or --admin flag." >&2
        echo "Current CLERK_BAPI_SCOPES: \"$SCOPES\"" >&2
        exit 1
      fi
      ;;
    *)
      echo "ERROR: Unknown HTTP method: $METHOD_UPPER" >&2
      exit 1
      ;;
  esac
fi

# Base URL: default to production. A custom CLERK_REST_API_URL is only honored
# when the caller opts in via CLERK_ALLOW_CUSTOM_API_URL=1, so a stray or
# malicious env value can't silently redirect requests (and the secret key)
# to an untrusted host.
BASE_URL="https://api.clerk.com"
if [[ -n "${CLERK_REST_API_URL:-}" ]]; then
  if [[ "${CLERK_ALLOW_CUSTOM_API_URL:-}" == "1" ]]; then
    BASE_URL="$CLERK_REST_API_URL"
  else
    echo "WARNING: CLERK_REST_API_URL is set but ignored (set CLERK_ALLOW_CUSTOM_API_URL=1 to use a custom host). Using $BASE_URL." >&2
  fi
fi

# Build curl command
CURL_ARGS=(
  -s
  -X "$METHOD_UPPER"
  "${BASE_URL}/v1${PATH_ARG}"
  -H "Authorization: Bearer ${CLERK_SECRET_KEY:?CLERK_SECRET_KEY is not set}"
  -H "Content-Type: application/json"
)

if [[ -n "$BODY" ]]; then
  CURL_ARGS+=(-d "$BODY")
fi

curl "${CURL_ARGS[@]}"
