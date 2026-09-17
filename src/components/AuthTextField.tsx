import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

type AuthTextFieldProps = TextInputProps & {
  label: string;
  isPassword?: boolean;
};

export function AuthTextField({ label, isPassword, ...inputProps }: AuthTextFieldProps) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View className="flex-row items-center rounded-2xl border border-border px-4 py-3">
      <View className="flex-1">
        <Text className="font-poppins-regular text-body-sm text-text-secondary">{label}</Text>
        <TextInput
          className="mt-1 p-0 font-poppins-medium text-body-lg text-text-primary"
          placeholderTextColor="#9CA3AF"
          autoCapitalize="none"
          secureTextEntry={isSecure}
          {...inputProps}
        />
      </View>

      {isPassword && (
        <TouchableOpacity
          onPress={() => setIsSecure((prev) => !prev)}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel={isSecure ? "Show password" : "Hide password"}
        >
          <Ionicons name={isSecure ? "eye-outline" : "eye-off-outline"} size={22} color="#6B7280" />
        </TouchableOpacity>
      )}
    </View>
  );
}
