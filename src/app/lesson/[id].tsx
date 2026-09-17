import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/constants/theme";
import { getLanguageByCode } from "@/data/languages";
import { getLessonById } from "@/data/lessons";
import { getUnitById } from "@/data/units";
import { useProgressStore } from "@/store/progressStore";

const SESSION_FEEDBACK: { label: string; value: string; colorClassName: string }[] = [
  { label: "Speaking", value: "Excellent", colorClassName: "text-success" },
  { label: "Pronunciation", value: "Great", colorClassName: "text-brand-blue" },
  { label: "Grammar", value: "Good", colorClassName: "text-brand-purple" },
];

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = id ? getLessonById(id) : undefined;
  const unit = lesson ? getUnitById(lesson.unitId) : undefined;
  const language = unit ? getLanguageByCode(unit.languageCode) : undefined;

  const completeLesson = useProgressStore((state) => state.completeLesson);

  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setElapsedSeconds((value) => value + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!lesson || !unit || !language) return null;

  // The lines the AI teacher "speaks" during the session: its opening line,
  // then the lesson's target phrases (with translations for subtitles), then
  // its encouragement lines - tap the bubble to hear the next one.
  const teacherLines = [
    { text: lesson.aiTeacherPrompt.intro },
    ...lesson.phrases.map((phrase) => ({ text: phrase.text, translation: phrase.translation })),
    ...lesson.aiTeacherPrompt.encouragement.map((line) => ({ text: line })),
  ];
  const currentLine = teacherLines[lineIndex % teacherLines.length];

  const handleNextLine = () => setLineIndex((value) => value + 1);

  const showLessonInfo = () => {
    Alert.alert(
      lesson.title,
      [
        `${language.name} • Goal: ${lesson.goals.map((goal) => goal.description).join(", ")}`,
        "",
        "Key phrases:",
        ...lesson.phrases.map((phrase) => `• ${phrase.text} — ${phrase.translation}`),
      ].join("\n"),
    );
  };

  const handleEndCall = () => {
    Alert.alert("End session?", `You'll earn +${lesson.xpReward} XP for completing this lesson.`, [
      { text: "Cancel", style: "cancel" },
      {
        text: "End Call",
        style: "destructive",
        onPress: () => {
          completeLesson(lesson.id, lesson.xpReward);
          router.back();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.neutral.background }} edges={["top", "bottom"]}>
      {/* Header */}
      <View className="flex-row items-center px-5 pb-3 pt-2">
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color={colors.neutral.textPrimary} />
        </TouchableOpacity>

        <View className="ml-3 flex-1">
          <Text className="font-poppins-semibold text-body-lg text-text-primary">AI Teacher</Text>
          <View className="mt-0.5 flex-row items-center gap-1.5">
            <View className="h-2 w-2 rounded-full bg-success" />
            <Text className="font-poppins-medium text-body-sm text-text-secondary">Online</Text>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setCameraOn((value) => !value)}
          className="h-10 w-10 items-center justify-center rounded-full border border-border bg-white"
        >
          <Ionicons
            name={cameraOn ? "videocam-outline" : "videocam-off-outline"}
            size={18}
            color={colors.neutral.textPrimary}
          />
        </TouchableOpacity>

        <View className="ml-2 h-10 min-w-10 items-center justify-center rounded-full border border-border bg-white px-2.5">
          <Text className="font-poppins-semibold text-body-sm text-text-primary">
            {formatDuration(elapsedSeconds)}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={showLessonInfo}
          className="ml-2 h-10 w-10 items-center justify-center rounded-full border border-border bg-white"
        >
          <Ionicons name="information-circle-outline" size={20} color={colors.neutral.textPrimary} />
        </TouchableOpacity>
      </View>

      {/* Teacher preview card (audio-only session - this is a visual placeholder, not a real camera) */}
      <View className="mx-5 mb-4 flex-1 overflow-hidden rounded-[28px] bg-chat-purple-bg">
        <View className="absolute left-4 top-4 z-10 flex-row items-center rounded-full bg-white/80 px-3 py-1.5">
          <Image source={{ uri: language.flag }} className="rounded-full" style={{ width: 16, height: 16 }} />
          <Text className="ml-1.5 font-poppins-medium text-caption text-brand-deep-purple">
            {language.name} • {lesson.title}
          </Text>
        </View>

        <View className="flex-1 items-center justify-end pb-2">
          {cameraOn ? (
            <Image source={images.mascotWelcome} style={{ width: 400, height: 400 }} resizeMode="contain" />
          ) : (
            <View className="h-24 w-24 items-center justify-center rounded-full bg-white/60">
              <Ionicons name="videocam-off-outline" size={32} color={colors.brand.deepPurple} />
            </View>
          )}
        </View>

        <View className="px-5 pb-5">
          <View className="ml-6 h-4 w-4 rotate-45 self-start rounded-sm bg-white" style={{ marginBottom: -9 }} />
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleNextLine}
            className="rounded-2xl bg-white px-4 py-3 shadow-lg"
          >
            <View className="flex-row items-center">
              <Text className="flex-1 font-poppins-semibold text-body-lg text-text-primary">
                {currentLine.text}
              </Text>
              <Ionicons name="volume-high" size={22} color={colors.brand.purple} style={{ marginLeft: 8 }} />
            </View>
            {subtitlesOn && currentLine.translation ? (
              <Text className="mt-1 font-poppins-regular text-body-sm text-text-secondary">
                {currentLine.translation}
              </Text>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>

      {/* Controls */}
      <View className="flex-row items-center justify-around px-5 py-5">
        <ControlButton
          icon={cameraOn ? "videocam" : "videocam-off"}
          label="Camera"
          active={cameraOn}
          onPress={() => setCameraOn((value) => !value)}
        />
        <ControlButton
          icon={micOn ? "mic" : "mic-off"}
          label="Mic"
          active={micOn}
          onPress={() => setMicOn((value) => !value)}
        />
        <ControlButton
          icon="language"
          iconText="Aa"
          label="Subtitles"
          active={subtitlesOn}
          onPress={() => setSubtitlesOn((value) => !value)}
        />
        <ControlButton icon="call" label="End Call" variant="danger" onPress={handleEndCall} />
      </View>

      {/* Session feedback */}
      <View className="mx-5 mb-5 flex-row rounded-2xl border border-border bg-white py-4 shadow-sm">
        {SESSION_FEEDBACK.map((item, index) => (
          <View key={item.label} className={`flex-1 items-center ${index > 0 ? "border-l border-border" : ""}`}>
            <Text className="font-poppins-semibold text-body-sm text-text-primary">{item.label}</Text>
            <Text className={`mt-1 font-poppins-semibold text-body-md ${item.colorClassName}`}>{item.value}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

function ControlButton({
  icon,
  iconText,
  label,
  onPress,
  active = true,
  variant = "default",
}: {
  icon: keyof typeof Ionicons.glyphMap;
  iconText?: string;
  label: string;
  onPress: () => void;
  active?: boolean;
  variant?: "default" | "danger";
}) {
  const isDanger = variant === "danger";
  const iconColor = isDanger ? "#ffffff" : colors.neutral.textPrimary;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} className="items-center">
      <View
        className={`h-14 w-14 items-center justify-center rounded-full shadow-sm ${
          isDanger ? "bg-error" : active ? "bg-white" : "bg-text-primary/10"
        }`}
      >
        {iconText ? (
          <Text className="font-poppins-semibold text-body-lg text-text-primary">{iconText}</Text>
        ) : (
          <Ionicons
            name={icon}
            size={22}
            color={iconColor}
            style={isDanger ? { transform: [{ rotate: "135deg" }] } : undefined}
          />
        )}
      </View>
      <Text className="mt-1.5 font-poppins-medium text-caption text-text-secondary">{label}</Text>
    </TouchableOpacity>
  );
}
