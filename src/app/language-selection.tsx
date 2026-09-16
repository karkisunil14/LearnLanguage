import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useMemo, useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LanguageCard from "@/components/LanguageCard";
import { images } from "@/constants/images";
import { LANGUAGES } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";
import type { LanguageCode } from "@/types/learning";

export default function LanguageSelection() {
  const storedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const setSelectedLanguage = useLanguageStore((state) => state.setSelectedLanguage);
  const [query, setQuery] = useState("");
  const [selectedCode, setSelectedCode] = useState<LanguageCode>(storedLanguage ?? LANGUAGES[0].code);

  const filteredLanguages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return LANGUAGES;
    return LANGUAGES.filter(
      (language) =>
        language.name.toLowerCase().includes(normalizedQuery) ||
        language.nativeName.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center px-6 pt-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.back()}
          className="h-9 w-9 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={24} color="#0D132B" />
        </TouchableOpacity>
        <Text className="h3 flex-1 text-center">Choose a language</Text>
        <View className="h-9 w-9" />
      </View>

      <View className="mx-6 mt-4 flex-row items-center gap-2 rounded-full bg-surface px-4 py-3">
        <Ionicons name="search" size={18} color="#6B7280" />
        <TextInput
          value={query}
          onChangeText={setQuery}
          placeholder="Search languages"
          placeholderTextColor="#6B7280"
          className="flex-1 font-poppins-regular text-body-md text-text-primary"
        />
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="h4 mb-3">Popular</Text>

        {filteredLanguages.map((language) => (
          <LanguageCard
            key={language.code}
            language={language}
            selected={language.code === selectedCode}
            onPress={() => setSelectedCode(language.code)}
          />
        ))}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            setSelectedLanguage(selectedCode);
            router.replace("/");
          }}
          className="mt-2 items-center justify-center rounded-full bg-brand-deep-purple py-4 shadow-lg"
        >
          <Text className="font-poppins-semibold text-body-lg text-white">Confirm</Text>
        </TouchableOpacity>

        <Image
          source={images.earth}
          style={{ width: "100%", height: 220, marginTop: 20 }}
          resizeMode="contain"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
