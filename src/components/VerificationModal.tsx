import { Ionicons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
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
  /** Resolve with an error message to show, or `null` on success. */
  onVerify: (code: string) => Promise<string | null>;
  /** Resolve with an error message to show, or `null` on success. */
  onResend: () => Promise<string | null>;
};

export function VerificationModal({
  visible,
  email,
  onClose,
  onVerify,
  onResend,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleShow = () => {
    setCode("");
    setError(null);
    // Focusing the instant the modal reports "shown" races its own mount
    // animation, so the keyboard can silently fail to appear. Waiting two
    // frames lets the sheet actually finish painting first.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => inputRef.current?.focus());
    });
  };

  const handleChangeCode = async (text: string) => {
    const digitsOnly = text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH);
    setCode(digitsOnly);
    setError(null);

    if (digitsOnly.length === CODE_LENGTH) {
      setIsVerifying(true);
      try {
        const verifyError = await onVerify(digitsOnly);
        if (verifyError) {
          setError(verifyError);
          setCode("");
        }
      } catch (err) {
        console.error("Verification error:", JSON.stringify(err, null, 2));
        setError("Something went wrong. Please try again.");
        setCode("");
      } finally {
        setIsVerifying(false);
      }
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      setError(await onResend());
    } catch (err) {
      console.error("Resend error:", JSON.stringify(err, null, 2));
      setError("Couldn't resend the code. Please try again.");
    } finally {
      setIsResending(false);
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
                    error ? "border-error" : index === code.length ? "border-brand-purple" : "border-border"
                  }`}
                >
                  <Text className="font-poppins-semibold text-h3 text-text-primary">
                    {code[index] ?? ""}
                  </Text>
                </View>
              ))}
            </Pressable>

            {isVerifying && <ActivityIndicator className="mt-4" color="#6C4EF5" />}

            {error && (
              <Text className="mt-4 text-center font-poppins-medium text-body-sm text-error">
                {error}
              </Text>
            )}

            <TextInput
              ref={inputRef}
              value={code}
              onChangeText={handleChangeCode}
              editable={!isVerifying}
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              style={{ position: "absolute", top: 0, left: 0, opacity: 0, height: 10, width: 10 }}
            />

            <TouchableOpacity
              onPress={handleResend}
              disabled={isResending}
              hitSlop={8}
              className="mt-6 items-center"
            >
              <Text className="font-poppins-semibold text-body-md text-brand-purple">
                {isResending ? "Sending..." : "Resend code"}
              </Text>
            </TouchableOpacity>
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
