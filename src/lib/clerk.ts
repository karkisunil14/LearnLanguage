import { router, type Href } from "expo-router";

type NavigateAfterAuthParams = {
  session?: { currentTask?: unknown } | null;
  decorateUrl: (url: string) => string;
};

/**
 * Clerk's `ClerkAPIResponseError` carries the actual, user-facing reason(s) inside
 * `errors[]` (one per invalid field, e.g. "email taken" + "password too short" at
 * once) - the top-level `message`/`longMessage` is just a generic summary. This
 * joins the field-level messages so nothing useful gets dropped, and logs the raw
 * error for whoever is watching the Metro logs.
 */
export function getClerkErrorMessage(error: unknown, fallback: string) {
  console.error("Clerk error:", JSON.stringify(error, null, 2));

  const clerkError = error as
    | { errors?: { longMessage?: string; message?: string }[]; longMessage?: string; message?: string }
    | null
    | undefined;

  const fieldMessages = clerkError?.errors
    ?.map((e) => e.longMessage || e.message)
    .filter((message): message is string => Boolean(message))
    .join(" ");

  return fieldMessages || clerkError?.longMessage || clerkError?.message || fallback;
}

/**
 * Shared `finalize({ navigate })` handler for sign-in and sign-up.
 * A pending session task (e.g. forced MFA enrollment) is left for Clerk's own UI to resolve.
 */
export function navigateAfterAuth({ session, decorateUrl }: NavigateAfterAuthParams) {
  if (session?.currentTask) return;

  router.replace(decorateUrl("/") as Href);
}

export function isSessionExistsError(error: unknown) {
  const clerkError = error as { errors?: { code?: string }[] } | null | undefined;
  return clerkError?.errors?.some((e) => e.code === "session_exists") ?? false;
}

/**
 * The device can end up with a stale active session that `useAuth()` hasn't caught up with yet
 * (e.g. right after a sign-out, or after a previous test run), which makes the next sign-in/
 * sign-up attempt fail with `session_exists` - and there's no way to reach a "sign out" button
 * while stuck on an auth screen. This clears that stale session automatically and retries the
 * attempt once. Some Clerk methods resolve with `{ error }`, others (like `startSSOFlow`) throw
 * instead, so both shapes are handled here.
 */
export async function withSessionRecovery<T>(
  attempt: () => Promise<T>,
  signOut: () => Promise<void>,
): Promise<T> {
  try {
    const result = await attempt();
    if (isSessionExistsError((result as { error?: unknown }).error)) {
      await signOut();
      return attempt();
    }
    return result;
  } catch (err) {
    if (isSessionExistsError(err)) {
      await signOut();
      return attempt();
    }
    throw err;
  }
}

/**
 * Sign-up runs Clerk's bot-protection challenge (the invisible `clerk-captcha` widget) before
 * it will resolve, and that challenge has no built-in timeout - if it fails to load (blocked
 * network, slow connection), the sign-up call hangs forever with zero feedback. This gives up
 * after `ms` and surfaces a real error instead.
 *
 * Rejecting early doesn't cancel `promise` itself - the Clerk SDK exposes no cancellation for
 * requests like `signIn.password()` / `signUp.password()`, so it keeps running in the background.
 * Pass `onSettled` to find out when that original request actually finishes, so a caller can keep
 * its submit button locked until then instead of letting the user fire a second request that
 * races the first one against the same auth resource.
 */
export function withTimeout<T>(
  promise: Promise<T>,
  ms: number,
  timeoutMessage: string,
  onSettled?: () => void,
): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(timeoutMessage)), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        onSettled?.();
        resolve(value);
      },
      (err) => {
        clearTimeout(timer);
        onSettled?.();
        reject(err);
      },
    );
  });
}
