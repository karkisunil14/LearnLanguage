# vision-agent

The AI language teacher: a voice-only [Vision Agents](https://visionagents.ai) service that
joins a lesson's Stream call and teaches the selected language entirely through English,
using OpenAI Realtime as the LLM and Stream's edge network for transport.

It reads `STREAM_API_KEY` / `STREAM_API_SECRET` from the parent repo's `.env` (no separate
copy needed) and only needs one extra key: `OPENAI_API_KEY`. Add it to the parent `.env`.

## Setup

```bash
cd vision-agent
uv sync
```

## Run

```bash
# Console mode: creates a call, joins it, greets the student, and exits when the call ends.
uv run agent.py run --call-id test-lesson

# Server mode: exposes POST /calls/{call_id}/sessions and DELETE
# /calls/{call_id}/sessions/{session_id}, which the Expo API routes
# (src/app/api/vision-agent/start+api.ts, stop+api.ts) proxy to in order to
# spawn and end a teacher session in a lesson call that already exists.
uv run agent.py serve
```

The Expo app reads the server's base URL from `VISION_AGENT_URL` in the parent `.env` (see
`.env.example`) - point it at wherever `serve` is running (defaults to `http://localhost:8000`
for local development).

## How the lesson content is chosen

The Expo app creates each lesson's call with `custom` data set to the lesson's language, goals,
vocabulary, phrases, and AI teacher prompt (see `src/app/api/stream/call+api.ts`). `agent.py`
reads that data right after joining the call and rebuilds the LLM instructions around it, so the
teacher always speaks English but teaches whichever language and lesson content the student
selected. Running `agent.py run` locally without a matching call falls back to
`DEFAULT_TARGET_LANGUAGE` in `agent.py` and generic instructions.
