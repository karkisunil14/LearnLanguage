import AsyncStorage from "@react-native-async-storage/async-storage";
import { useClerk } from "@clerk/expo";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { getLanguageByCode } from "@/data/languages";
import { useLanguageStore } from "@/store/languageStore";

export default function ProfileScreen() {
  const { signOut } = useClerk();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const selectedLanguageInfo = selectedLanguage ? getLanguageByCode(selectedLanguage) : null;

  const handleClearAsyncStorage = async () => {
    await AsyncStorage.clear();
    useLanguageStore.setState({ selectedLanguage: null });
  };

  return (
    <View className="flex-1 items-center justify-center gap-6 bg-surface px-6">
      <Text className="h2">Profile</Text>

      {selectedLanguageInfo ? (
        <View className="flex-row items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
          <Image
            source={{ uri: selectedLanguageInfo.flag }}
            style={{ width: 28, height: 28, borderRadius: 14 }}
            resizeMode="cover"
          />
          <Text className="font-poppins-medium text-body-md text-text-primary">
            Learning {selectedLanguageInfo.name}
          </Text>
        </View>
      ) : null}

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => signOut()}
        className="items-center justify-center rounded-full bg-brand-deep-purple px-8 py-4 shadow-lg"
      >
        <Text className="font-poppins-semibold text-body-lg text-white">Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={handleClearAsyncStorage}
        className="items-center justify-center rounded-full border-2 border-error bg-white px-8 py-4"
      >
        <Text className="font-poppins-semibold text-body-lg text-error">
          Clear Storage (Test)
        </Text>
      </TouchableOpacity>
    </View>
  );
}
