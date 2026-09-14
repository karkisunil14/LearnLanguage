import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const CODE_LENGTH = 6;

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
};

export function VerificationModal({ visible, email, onClose }: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleShow = () => {
    setCode("");
    inputRef.current?.focus();
  };

  const handleChangeCode = (text: string) => {
    const digitsOnly = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digitsOnly);

    if (digitsOnly.length === CODE_LENGTH) {
      onClose();
      router.replace("/");
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      onShow={handleShow}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Pressable className="flex-1 justify-end bg-black/40" onPress={onClose}>
          <Pressable
            className="rounded-t-3xl bg-white px-6 pb-10 pt-4"
            onPress={(event) => event.stopPropagation()}
          >
            <View className="flex-row justify-end">
              <TouchableOpacity onPress={onClose} hitSlop={8}>
                <Ionicons name="close" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <Text className="h3 text-center">Check your email</Text>
            <Text className="mt-2 text-center font-poppins-regular text-body-md text-text-secondary">
              We sent a 6-digit verification code to{"\n"}
              <Text className="font-poppins-semibold text-text-primary">{email}</Text>
            </Text>

            <Pressable
              onPress={() => inputRef.current?.focus()}
              className="mt-8 flex-row justify-center gap-2"
            >
              {Array.from({ length: CODE_LENGTH }).map((_, index) => (
                <View
                  key={index}
                  className={`h-14 w-11 items-center justify-center rounded-2xl border ${
                    index === code.length ? "border-brand-purple" : "border-border"
                  }`}
                >
                  <Text className="font-poppins-semibold text-h3 text-text-primary">
                    {code[index] ?? ""}
                  </Text>
                </View>
              ))}
            </Pressable>

            <TextInput
              ref={inputRef}
              value={code}
              onChangeText={handleChangeCode}
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              style={{ position: "absolute", opacity: 0, height: 0, width: 0 }}
            />
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
