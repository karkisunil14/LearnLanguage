import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white">
      <Text className="h3 text-brand-purple">Language app!!</Text>
      <Link href="/onboarding" className="body-lg text-brand-purple underline">
        Open onboarding is here
      </Link>
    </View>
  );
}
