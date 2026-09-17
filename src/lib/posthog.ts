import PostHog from "posthog-react-native";

const projectToken = process.env.EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.EXPO_PUBLIC_POSTHOG_HOST;

function getPostHogConfiguration() {
  if (!projectToken) {
    if (__DEV__) {
      throw new Error(
        "EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN is configured",
      );
    }

    return null;
  }

  if (!host) {
    if (__DEV__) {
      throw new Error(
        "EXPO_PUBLIC_POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once EXPO_PUBLIC_POSTHOG_HOST is configured",
      );
    }

    return null;
  }

  return { projectToken, host };
}

const configuration = getPostHogConfiguration();

export const posthog = configuration
  ? new PostHog(configuration.projectToken, {
      host: configuration.host,
      errorTracking: {
        autocapture: {
          uncaughtExceptions: true,
          unhandledRejections: true,
        },
      },
    })
  : undefined;
