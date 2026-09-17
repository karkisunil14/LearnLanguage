import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import LessonCard, { type LessonStatus } from "@/components/LessonCard";
import { colors } from "@/constants/theme";
import { getLessonById } from "@/data/lessons";
import { getCurrentLesson } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import type { Lesson } from "@/types/learning";

type Tab = "lessons" | "practice";

export default function LearnScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("lessons");
  const [bookmarked, setBookmarked] = useState(false);

  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);

  if (!selectedLanguage) return null;

  const current = getCurrentLesson(selectedLanguage, completedLessonIds);

  if (!current) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.surface }} edges={["top"]}>
        <View className="flex-1 items-center justify-center px-8">
          <Ionicons name="construct-outline" size={36} color={colors.neutral.textSecondary} />
          <Text className="h4 mt-3 text-center">Lessons coming soon</Text>
          <Text className="body-sm mt-1 text-center">We&apos;re still building lessons for this language.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const { unit } = current;
  const lessons = unit.lessonIds
    .map(getLessonById)
    .filter((lesson): lesson is Lesson => lesson != null);
  const completedInUnit = lessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length;

  const getStatus = (lessonId: string): LessonStatus => {
    if (completedLessonIds.includes(lessonId)) return "completed";
    if (lessonId === current.lesson.id) return "current";
    return "upcoming";
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.surface }} edges={["top"]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-2">
          <TouchableOpacity activeOpacity={0.7} onPress={() => router.push("/(tabs)/home")}>
            <Ionicons name="chevron-back" size={26} color={colors.neutral.textPrimary} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} onPress={() => setBookmarked((value) => !value)}>
            <Ionicons
              name={bookmarked ? "bookmark" : "bookmark-outline"}
              size={24}
              color={colors.brand.purple}
            />
          </TouchableOpacity>
        </View>

        <View className="px-5">
          <Text className="h3">{unit.title}</Text>
          <Text className="body-sm mt-0.5">
            Unit {unit.order} • {completedInUnit} / {lessons.length} lessons
          </Text>
        </View>

        <Image
          source={{ uri: unit.heroImage }}
          className="mt-4"
          style={{ width: "100%", height: 200 }}
          resizeMode="cover"
        />

        {/* Tabs */}
        <View className="mt-5 flex-row px-5">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setActiveTab("lessons")}
            className={`mr-6 pb-2 ${activeTab === "lessons" ? "border-b-2 border-brand-purple" : ""}`}
          >
            <Text
              className={`font-poppins-semibold text-body-lg ${
                activeTab === "lessons" ? "text-brand-deep-purple" : "text-text-secondary"
              }`}
            >
              Lessons
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setActiveTab("practice")}
            className={`pb-2 ${activeTab === "practice" ? "border-b-2 border-brand-purple" : ""}`}
          >
            <Text
              className={`font-poppins-semibold text-body-lg ${
                activeTab === "practice" ? "text-brand-deep-purple" : "text-text-secondary"
              }`}
            >
              Practice
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 px-5">
          {activeTab === "lessons" ? (
            lessons.map((lesson, index) => (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                lessonNumber={index + 1}
                status={getStatus(lesson.id)}
                onPress={() => router.push(`/lesson/${lesson.id}`)}
              />
            ))
          ) : (
            <View className="items-center rounded-2xl bg-white p-8">
              <Ionicons name="barbell-outline" size={32} color={colors.neutral.textSecondary} />
              <Text className="h4 mt-3 text-center">Practice coming soon</Text>
              <Text className="body-sm mt-1 text-center">
                Review vocabulary and quiz yourself once practice mode is ready.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
