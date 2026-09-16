import type { Unit } from "@/types/learning";

export const UNITS: Unit[] = [
  {
    id: "es-unit-1",
    languageCode: "es",
    title: "Basics 1",
    description: "Greet people and introduce yourself.",
    order: 1,
    lessonIds: ["es-1-1", "es-1-2"],
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    title: "Basics 2",
    description: "Talk about food and order at a restaurant.",
    order: 2,
    lessonIds: ["es-2-1"],
  },
  {
    id: "fr-unit-1",
    languageCode: "fr",
    title: "Basics 1",
    description: "Greet people and introduce yourself.",
    order: 1,
    lessonIds: ["fr-1-1"],
  },
  {
    id: "zh-unit-1",
    languageCode: "zh",
    title: "Basics 1",
    description: "Greet people and introduce yourself.",
    order: 1,
    lessonIds: ["zh-1-1"],
  },
];

export function getUnitsByLanguage(languageCode: string) {
  return UNITS.filter((unit) => unit.languageCode === languageCode).sort((a, b) => a.order - b.order);
}
