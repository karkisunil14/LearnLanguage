import { Ionicons } from "@expo/vector-icons";
import { useUser } from "@clerk/expo";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/constants/theme";
import { getLanguageByCode } from "@/data/languages";
import { getCurrentLesson, type CurrentLesson } from "@/data/units";
import { useLanguageStore } from "@/store/languageStore";
import { useProgressStore } from "@/store/progressStore";
import type { Language } from "@/types/learning";

const AI_TEACHER_AVATAR =
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&q=80";

export default function HomeScreen() {
  const { user } = useUser();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const xp = useProgressStore((state) => state.xp);
  const dailyGoalXp = useProgressStore((state) => state.dailyGoalXp);
  const streak = useProgressStore((state) => state.streak);
  const completedLessonIds = useProgressStore((state) => state.completedLessonIds);

  if (!selectedLanguage) return null;

  const language = getLanguageByCode(selectedLanguage);
  if (!language) return null;

  const current = getCurrentLesson(selectedLanguage, completedLessonIds);
  const goalProgress = dailyGoalXp > 0 ? Math.min(100, Math.round((xp / dailyGoalXp) * 100)) : 0;
  const firstName = user?.firstName ?? "there";

  const goToLearn = () => router.push("/(tabs)/learn");
  const goToAiTeacher = () => router.push("/(tabs)/ai-teacher");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.surface }} edges={["top"]}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="flex-row items-center">
          <Image
            source={{ uri: language.flag }}
            className="rounded-full"
            style={{ width: 40, height: 40 }}
            resizeMode="cover"
          />
          <Text className="ml-3 flex-1 font-poppins-semibold text-body-lg text-text-primary">
            {language.greeting}, {firstName}! 👋
          </Text>
          <View className="flex-row items-center gap-1">
            <Ionicons name="flame" size={20} color={colors.semantic.streak} />
            <Text className="font-poppins-semibold text-body-lg text-text-primary">{streak}</Text>
          </View>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={colors.neutral.textPrimary}
            className="ml-4"
          />
        </View>

        {/* Daily goal */}
        <View className="mt-5 flex-row items-center justify-between rounded-2xl bg-chat-peach-bg p-4">
          <View className="flex-1">
            <Text className="body-sm">Daily goal</Text>
            <Text className="mt-1 font-poppins-bold text-h2 text-text-primary">
              {xp} <Text className="font-poppins-medium text-body-md text-text-secondary">/ {dailyGoalXp} XP</Text>
            </Text>
            <View className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/60">
              <View className="h-2 rounded-full bg-streak" style={{ width: `${goalProgress}%` }} />
            </View>
          </View>
          <View className="ml-4 h-14 w-14 items-center justify-center rounded-2xl bg-white/50">
            <Ionicons name="gift" size={28} color={colors.semantic.streak} />
          </View>
        </View>

        {current ? (
          <ContinueLearning
            language={language}
            current={current}
            completedLessonIds={completedLessonIds}
            onPress={goToLearn}
          />
        ) : (
          <View className="mt-6 items-center rounded-2xl bg-white p-8">
            <Ionicons name="construct-outline" size={36} color={colors.neutral.textSecondary} />
            <Text className="h4 mt-3 text-center">Lessons coming soon</Text>
            <Text className="body-sm mt-1 text-center">
              We&apos;re still building {language.name} lessons. Check back soon!
            </Text>
          </View>
        )}

        {/* Next up */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={goToAiTeacher}
          className="mt-6 flex-row items-center justify-between rounded-2xl bg-success/10 p-4"
        >
          <View className="flex-1">
            <Text className="body-sm">Next up</Text>
            <Text className="mt-0.5 font-poppins-semibold text-body-lg text-text-primary">AI Audio Call</Text>
            <Text className="body-sm">Practice speaking</Text>
          </View>

          <View className="flex-row items-center">
            <Image
              source={{ uri: AI_TEACHER_AVATAR }}
              className="-mr-3 rounded-full"
              style={{ width: 44, height: 44 }}
              resizeMode="cover"
            />
            <View className="h-9 w-9 items-center justify-center rounded-full bg-success">
              <Ionicons name="mic" size={18} color="#ffffff" />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function ContinueLearning({
  language,
  current,
  completedLessonIds,
  onPress,
}: {
  language: Language;
  current: CurrentLesson;
  completedLessonIds: string[];
  onPress: () => void;
}) {
  const { lesson, unit, lessonNumber } = current;
  const lessonDone = completedLessonIds.includes(lesson.id);

  return (
    <>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <LinearGradient
          colors={[colors.brand.purple, colors.brand.deepPurple]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="mt-4 overflow-hidden rounded-[20px] p-5"
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="font-poppins-medium text-body-md text-white/80">Continue learning</Text>
              <Text className="mt-1 font-poppins-bold text-h2 text-white">{language.name}</Text>
              <Text className="mt-0.5 font-poppins-regular text-body-sm text-white/80">
                Unit {unit.order} • Lesson {lessonNumber} of {unit.lessonIds.length}
              </Text>

              <View className="mt-4 self-start rounded-full bg-white px-6 py-2.5">
                <Text className="font-poppins-semibold text-body-md text-brand-deep-purple">Continue</Text>
              </View>
            </View>

            <Image
              source={{ uri: language.flag }}
              className="ml-3 rounded-full"
              style={{ width: 64, height: 64 }}
              resizeMode="cover"
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <View className="mt-6 flex-row items-center justify-between">
        <Text className="h4">Today&apos;s plan</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
          <Text className="font-poppins-medium text-body-sm text-brand-deep-purple">View all</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-3">
        <PlanItem
          icon="book"
          iconBgClassName="bg-brand-purple"
          title="Lesson"
          subtitle={lesson.title}
          done={lessonDone}
        />
        <PlanItem
          icon="headset"
          iconBgClassName="bg-brand-purple"
          title="AI Conversation"
          subtitle={`Talk about "${lesson.title}"`}
          done={false}
        />
        <PlanItem
          icon="chatbubbles"
          iconBgClassName="bg-error"
          title="New words"
          subtitle={`${lesson.vocabulary.length} words`}
          done={false}
          isLast
        />
      </View>
    </>
  );
}

function PlanItem({
  icon,
  iconBgClassName,
  title,
  subtitle,
  done,
  isLast,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  iconBgClassName: string;
  title: string;
  subtitle: string;
  done: boolean;
  isLast?: boolean;
}) {
  return (
    <View className={`flex-row items-center py-3 ${isLast ? "" : "border-b border-border"}`}>
      <View className={`h-11 w-11 items-center justify-center rounded-xl ${iconBgClassName}`}>
        <Ionicons name={icon} size={20} color="#ffffff" />
      </View>

      <View className="ml-3 flex-1">
        <Text className="font-poppins-medium text-body-md text-text-primary">{title}</Text>
        <Text className="body-sm">{subtitle}</Text>
      </View>

      {done ? (
        <Ionicons name="checkmark-circle" size={26} color={colors.brand.purple} />
      ) : (
        <Ionicons name="ellipse-outline" size={24} color={colors.neutral.border} />
      )}
    </View>
  );
}
