import { Stack } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 px-6 pb-4">
        <View className="flex-row items-center justify-center gap-2 pt-2">
          <Image
            source={images.mascotLogo}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <Text className="h1">muolingo</Text>
        </View>

        <View className="mt-10">
          <Text className="font-poppins-bold text-[2.125rem] leading-[1.2] text-text-primary">
            Your AI language{"\n"}
            <Text className="text-brand-purple">teacher.</Text>
          </Text>
          <Text className="mt-3 font-poppins-regular text-lg text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View style={{ flex: 2 }} />

        <View className="relative h-96 items-center justify-center">
          <View className="chat-bubble chat-bubble--blue absolute left-0 top-10 z-10">
            <Text className="chat-bubble__text text-chat-blue-text">Hello!</Text>
          </View>
          <View className="chat-bubble chat-bubble--purple absolute right-4 top-4 z-10">
            <Text className="chat-bubble__text text-chat-purple-text">¡Hola!</Text>
          </View>
          <View className="chat-bubble chat-bubble--peach absolute right-0 top-24 z-10">
            <Text className="chat-bubble__text text-chat-peach-text">你好!</Text>
          </View>

          <Image
            source={images.mascotWelcome}
            style={{ width: 400, height: 400 }}
            resizeMode="contain"
          />
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          activeOpacity={0.85}
          className="flex-row items-center justify-center gap-2 rounded-full bg-brand-deep-purple py-4 shadow-lg"
        >
          <Text className="font-poppins-semibold text-body-lg text-white">Get Started</Text>
          <Text className="font-poppins-bold text-body-lg text-white">›</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
