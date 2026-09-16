import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/onboarding" />;

  return (
    <View className="flex-1 items-center justify-center gap-6 bg-surface">
      <Text className="font-poppins-bold text-h2 text-brand-purple">
        Lingua
      </Text>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push("/language-selection")}
        className="items-center justify-center rounded-full bg-brand-purple px-8 py-4 shadow-lg"
      >
        <Text className="font-poppins-semibold text-body-lg text-white">
          Choose a Language
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => signOut()}
        className="items-center justify-center rounded-full bg-brand-deep-purple px-8 py-4 shadow-lg"
      >
        <Text className="font-poppins-semibold text-body-lg text-white">
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
