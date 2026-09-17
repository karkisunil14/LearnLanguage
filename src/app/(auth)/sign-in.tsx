import { useClerk, useSignIn } from "@clerk/expo";
import { Ionicons } from "@expo/vector-icons";
import { Link, router, Stack } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthTextField } from "@/components/AuthTextField";
import { images } from "@/constants/images";
import { getClerkErrorMessage, navigateAfterAuth, withSessionRecovery, withTimeout } from "@/lib/clerk";
import { posthog } from "@/lib/posthog";

const REQUEST_TIMEOUT_MS = 15000;
const TIMEOUT_MESSAGE = "That's taking too long. Check your connection and try again.";

export default function SignIn() {
  const { signIn, errors } = useSignIn();
  const { signOut } = useClerk();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSignIn = async () => {
    setFormError(null);
    setIsSubmitting(true);
    setIsRequestPending(true);

    try {
      const { error } = await withSessionRecovery(
        () =>
          withTimeout(
            signIn.password({ emailAddress: email, password }),
            REQUEST_TIMEOUT_MS,
            TIMEOUT_MESSAGE,
            () => setIsRequestPending(false),
          ),
        signOut,
      );
      if (error) {
        setFormError(getClerkErrorMessage(error, "Couldn't sign in. Please check your email and password."));
        return;
      }

      if (signIn.status === "complete") {
        await signIn.finalize({ navigate: navigateAfterAuth });
        posthog?.capture("auth_signin_completed");
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          className="px-6"
        >
          <TouchableOpacity onPress={() => router.back()} hitSlop={8} className="mt-2 self-start">
            <Ionicons name="chevron-back" size={26} color="#0D132B" />
          </TouchableOpacity>

          <Text className="mt-4 h1">Welcome back</Text>
          <Text className="mt-2 font-poppins-regular text-body-lg text-text-secondary">
            Continue your language journey ✨
          </Text>

          <View className="mt-4 items-center">
            <View className="relative h-52 w-52 items-center justify-center">
              <Text className="absolute left-2 top-2 font-poppins-bold text-warning">✦</Text>
              <Text className="absolute right-4 top-6 font-poppins-bold text-brand-blue">✦</Text>
              <Text className="absolute right-0 top-24 font-poppins-bold text-brand-purple">✦</Text>
              <Image source={images.mascotAuth} style={{ width: 208, height: 208 }} resizeMode="contain" />
            </View>
          </View>

          <View className="gap-3">
            <AuthTextField
              label="Email"
              placeholder="alex@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            {errors.fields.identifier && (
              <Text className="font-poppins-regular text-body-sm text-error">
                {errors.fields.identifier.message}
              </Text>
            )}
            <AuthTextField
              label="Password"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              isPassword
            />
            {errors.fields.password && (
              <Text className="font-poppins-regular text-body-sm text-error">
                {errors.fields.password.message}
              </Text>
            )}
          </View>

          {formError && (
            <Text className="mt-4 text-center font-poppins-medium text-body-sm text-error">
              {formError}
            </Text>
          )}

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleSignIn}
            disabled={isSubmitting || isRequestPending}
            className="mt-6 items-center justify-center rounded-full bg-brand-deep-purple py-4 shadow-lg"
          >
            <Text className="font-poppins-semibold text-body-lg text-white">
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Text>
          </TouchableOpacity>

          <View style={{ flex: 1 }} />

          <View className="mb-4 mt-8 flex-row justify-center gap-1">
            <Text className="font-poppins-regular text-body-md text-text-secondary">
              Don&apos;t have an account?
            </Text>
            <Link href="/sign-up" className="font-poppins-semibold text-body-md text-brand-purple">
              Sign up
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
