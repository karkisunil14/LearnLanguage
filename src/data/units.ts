import { getLessonById } from "@/data/lessons";
import type { LanguageCode, Lesson, Unit } from "@/types/learning";

export const UNITS: Unit[] = [
  {
    id: "es-unit-1",
    languageCode: "es",
    title: "Basics 1",
    description: "Greet people and introduce yourself.",
    order: 1,
    lessonIds: ["es-1-1", "es-1-2"],
    heroImage: "https://picsum.photos/seed/es-basics-1/800/500",
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    title: "Basics 2",
    description: "Talk about food and order at a restaurant.",
    order: 2,
    lessonIds: ["es-2-1"],
    heroImage: "https://picsum.photos/seed/es-basics-2/800/500",
  },
  {
    id: "fr-unit-1",
    languageCode: "fr",
    title: "Basics 1",
    description: "Greet people, talk about your day, and get around town.",
    order: 1,
    lessonIds: ["fr-1-1", "fr-1-2", "fr-1-3", "fr-1-4", "fr-1-5", "fr-1-6"],
    heroImage: "https://picsum.photos/seed/fr-basics-1/800/500",
  },
  {
    id: "zh-unit-1",
    languageCode: "zh",
    title: "Basics 1",
    description: "Greet people, talk about your day, and get around town.",
    order: 1,
    lessonIds: ["zh-1-1", "zh-1-2", "zh-1-3", "zh-1-4", "zh-1-5", "zh-1-6"],
    heroImage: "https://picsum.photos/seed/zh-basics-1/800/500",
  },
  {
    id: "ja-unit-1",
    languageCode: "ja",
    title: "Basics 1",
    description: "Greet people, talk about your day, and get around town.",
    order: 1,
    lessonIds: ["ja-1-1", "ja-1-2", "ja-1-3", "ja-1-4", "ja-1-5", "ja-1-6"],
    heroImage: "https://picsum.photos/seed/ja-basics-1/800/500",
  },
  {
    id: "ko-unit-1",
    languageCode: "ko",
    title: "Basics 1",
    description: "Greet people, talk about your day, and get around town.",
    order: 1,
    lessonIds: ["ko-1-1", "ko-1-2", "ko-1-3", "ko-1-4", "ko-1-5", "ko-1-6"],
    heroImage: "https://picsum.photos/seed/ko-basics-1/800/500",
  },
  {
    id: "de-unit-1",
    languageCode: "de",
    title: "Basics 1",
    description: "Greet people, talk about your day, and get around town.",
    order: 1,
    lessonIds: ["de-1-1", "de-1-2", "de-1-3", "de-1-4", "de-1-5", "de-1-6"],
    heroImage: "https://picsum.photos/seed/de-basics-1/800/500",
  },
];

export function getUnitsByLanguage(languageCode: string) {
  return UNITS.filter((unit) => unit.languageCode === languageCode).sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string) {
  return UNITS.find((unit) => unit.id === id);
}

export type CurrentLesson = {
  lesson: Lesson;
  unit: Unit;
  lessonNumber: number;
};

/** The next lesson a learner hasn't completed yet, in unit order. */
export function getCurrentLesson(
  languageCode: LanguageCode,
  completedLessonIds: string[],
): CurrentLesson | null {
  const units = getUnitsByLanguage(languageCode);

  for (const unit of units) {
    for (let i = 0; i < unit.lessonIds.length; i++) {
      const lesson = getLessonById(unit.lessonIds[i]);
      if (lesson && !completedLessonIds.includes(lesson.id)) {
        return { lesson, unit, lessonNumber: i + 1 };
      }
    }
  }

  // Every lesson is complete - show the last lesson of the last unit.
  const lastUnit = units[units.length - 1];
  const lastLesson = lastUnit && getLessonById(lastUnit.lessonIds[lastUnit.lessonIds.length - 1]);
  return lastUnit && lastLesson
    ? { lesson: lastLesson, unit: lastUnit, lessonNumber: lastUnit.lessonIds.length }
    : null;
}
