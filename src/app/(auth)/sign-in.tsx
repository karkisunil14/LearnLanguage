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
import { SocialAuthButton } from "@/components/SocialAuthButton";
import { VerificationModal } from "@/components/VerificationModal";
import { images } from "@/constants/images";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

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
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setIsVerifying(true)}
            className="mt-6 items-center justify-center rounded-full bg-brand-deep-purple py-4 shadow-lg"
          >
            <Text className="font-poppins-semibold text-body-lg text-white">Sign In</Text>
          </TouchableOpacity>

          <View className="mt-6 flex-row items-center gap-3">
            <View className="h-px flex-1 bg-border" />
            <Text className="font-poppins-regular text-body-sm text-text-secondary">
              or continue with
            </Text>
            <View className="h-px flex-1 bg-border" />
          </View>

          <View className="mt-6 gap-3">
            <SocialAuthButton
              label="Continue with Google"
              icon={<Ionicons name="logo-google" size={20} color="#4285F4" />}
            />
            <SocialAuthButton
              label="Continue with Facebook"
              icon={<Ionicons name="logo-facebook" size={20} color="#1877F2" />}
            />
            <SocialAuthButton
              label="Continue with Apple"
              icon={<Ionicons name="logo-apple" size={20} color="#000000" />}
            />
          </View>

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

      <VerificationModal
        visible={isVerifying}
        email={email || "your email"}
        onClose={() => setIsVerifying(false)}
      />
    </SafeAreaView>
  );
}
