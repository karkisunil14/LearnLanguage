import { useClerk, useSignUp } from "@clerk/expo";
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
import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";
import { getClerkErrorMessage, navigateAfterAuth, withSessionRecovery, withTimeout } from "@/lib/clerk";
import { posthog } from "@/lib/posthog";

const REQUEST_TIMEOUT_MS = 15000;
const TIMEOUT_MESSAGE =
  "That's taking too long. Check your connection - or the bot protection challenge - and try again.";

export default function SignUp() {
  const { signUp, errors } = useSignUp();
  const { signOut } = useClerk();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSignUp = async () => {
    setFormError(null);
    setIsSubmitting(true);
    setIsRequestPending(true);

    try {
      const { error } = await withSessionRecovery(
        () =>
          withTimeout(
            signUp.password({ emailAddress: email, password }),
            REQUEST_TIMEOUT_MS,
            TIMEOUT_MESSAGE,
            () => setIsRequestPending(false),
          ),
        signOut,
      );
      if (error) {
        setFormError(getClerkErrorMessage(error, "Couldn't create your account. Please try again."));
        return;
      }

      const { error: codeError } = await withTimeout(
        signUp.verifications.sendEmailCode(),
        REQUEST_TIMEOUT_MS,
        TIMEOUT_MESSAGE,
      );
      if (codeError) {
        setFormError(getClerkErrorMessage(codeError, "Couldn't send a verification code. Please try again."));
        return;
      }

      setIsVerifying(true);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerify = async (code: string) => {
    try {
      const { error } = await withTimeout(
        signUp.verifications.verifyEmailCode({ code }),
        REQUEST_TIMEOUT_MS,
        TIMEOUT_MESSAGE,
      );
      if (error) return getClerkErrorMessage(error, "That code didn't work. Please try again.");

      if (signUp.status === "complete") {
        // Close the sheet ourselves before navigating away - leaving it marked
        // visible while the screen underneath unmounts can crash the native Modal.
        setIsVerifying(false);
        await signUp.finalize({ navigate: navigateAfterAuth });
        posthog?.capture("auth_signup_completed");
        return null;
      }

      return "Something went wrong. Please try again.";
    } catch (err) {
      return err instanceof Error ? err.message : "Something went wrong. Please try again.";
    }
  };

  const handleResend = async () => {
    try {
      const { error } = await withTimeout(
        signUp.verifications.sendEmailCode(),
        REQUEST_TIMEOUT_MS,
        TIMEOUT_MESSAGE,
      );
      return error ? getClerkErrorMessage(error, "Couldn't resend the code. Please try again.") : null;
    } catch (err) {
      return err instanceof Error ? err.message : "Something went wrong. Please try again.";
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

          <Text className="mt-4 h1">Create your account</Text>
          <Text className="mt-2 font-poppins-regular text-body-lg text-text-secondary">
            Start your language journey today ✨
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
            {errors.fields.emailAddress && (
              <Text className="font-poppins-regular text-body-sm text-error">
                {errors.fields.emailAddress.message}
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

          <View nativeID="clerk-captcha" />

          {formError && (
            <Text className="mt-4 text-center font-poppins-medium text-body-sm text-error">
              {formError}
            </Text>
          )}

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleSignUp}
            disabled={isSubmitting || isRequestPending}
            className="mt-6 items-center justify-center rounded-full bg-brand-deep-purple py-4 shadow-lg"
          >
            <Text className="font-poppins-semibold text-body-lg text-white">
              {isSubmitting ? "Creating account..." : "Sign Up"}
            </Text>
          </TouchableOpacity>

          <View style={{ flex: 1 }} />

          <View className="mb-4 mt-8 flex-row justify-center gap-1">
            <Text className="font-poppins-regular text-body-md text-text-secondary">
              Already have an account?
            </Text>
            <Link href="/sign-in" className="font-poppins-semibold text-body-md text-brand-purple">
              Log in
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={isVerifying}
        email={email || "your email"}
        onClose={() => setIsVerifying(false)}
        onVerify={handleVerify}
        onResend={handleResend}
      />
    </SafeAreaView>
  );
}
