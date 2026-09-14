import { Text, TouchableOpacity } from "react-native";

type SocialAuthButtonProps = {
  label: string;
  icon: React.ReactNode;
  onPress?: () => void;
};

export function SocialAuthButton({ label, icon, onPress }: SocialAuthButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center gap-3 rounded-2xl border border-border px-4 py-3.5"
    >
      {icon}
      <Text className="font-poppins-medium text-body-lg text-text-primary">{label}</Text>
    </TouchableOpacity>
  );
}
