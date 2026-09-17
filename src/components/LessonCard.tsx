import { Ionicons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { colors } from "@/constants/theme";
import type { Lesson } from "@/types/learning";

export type LessonStatus = "completed" | "current" | "upcoming";

interface LessonCardProps {
  lesson: Lesson;
  lessonNumber: number;
  status: LessonStatus;
  onPress: () => void;
}

export default function LessonCard({ lesson, lessonNumber, status, onPress }: LessonCardProps) {
  const isCurrent = status === "current";

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className={`mb-3 flex-row items-center rounded-2xl p-3 ${
        isCurrent ? "border-2 border-brand-purple bg-chat-purple-bg" : "border border-border bg-background"
      }`}
    >
      <Image
        source={{ uri: lesson.image }}
        className="rounded-xl"
        style={{ width: 48, height: 48 }}
        resizeMode="cover"
      />

      <View className="ml-3 flex-1">
        <Text className={`font-poppins-medium text-body-sm ${isCurrent ? "text-brand-deep-purple" : "text-text-secondary"}`}>
          Lesson {lessonNumber}
        </Text>
        <Text className="font-poppins-semibold text-body-lg text-text-primary">{lesson.title}</Text>
        {isCurrent ? (
          <Text className="mt-0.5 font-poppins-medium text-body-sm text-brand-deep-purple">In progress</Text>
        ) : null}
      </View>

      {status === "completed" ? (
        <Ionicons name="checkmark-circle" size={26} color={colors.semantic.success} />
      ) : isCurrent ? (
        <View className="h-9 w-9 items-center justify-center rounded-full bg-brand-purple">
          <Ionicons name="play" size={16} color="#ffffff" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={22} color={colors.neutral.border} />
      )}
    </TouchableOpacity>
  );
}
