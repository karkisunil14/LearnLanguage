import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import type { Language } from "@/types/learning";

interface LanguageCardProps {
  language: Language;
  selected: boolean;
  onPress: () => void;
}

export default function LanguageCard({ language, selected, onPress }: LanguageCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className={`mb-3 flex-row items-center rounded-2xl px-4 py-3 ${
        selected ? "border-2 border-brand-purple bg-chat-purple-bg" : "border border-border"
      }`}
    >
      <View className="h-11 w-11 overflow-hidden rounded-full bg-surface">
        <Image
          source={{ uri: language.flag }}
          style={{ width: 44, height: 44 }}
          resizeMode="cover"
        />
      </View>

      <View className="ml-3 flex-1">
        <Text className="font-poppins-semibold text-body-lg text-text-primary">
          {language.name}
        </Text>
        <Text className="body-sm">{language.learners}</Text>
      </View>

      {selected ? (
        <View className="h-6 w-6 items-center justify-center rounded-full bg-brand-purple">
          <Ionicons name="checkmark" size={16} color="#ffffff" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#6B7280" />
      )}
    </TouchableOpacity>
  );
}
