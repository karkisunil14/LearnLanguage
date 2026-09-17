// Types for the hardcoded learning content system: languages, units, lessons,
// and the pieces a lesson is built from (vocabulary, phrases, activities, and
// the prompts a future audio-based Vision Agent AI teacher will speak).

export type LanguageCode = "es" | "fr" | "ja" | "ko" | "de" | "zh";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  /** Remote flag image URL (flagcdn.com). */
  flag: string;
  /** Display label for the active learner count, e.g. "28.4M learners". */
  learners: string;
  /** Native-language greeting used on the Home screen, e.g. "Hola". */
  greeting: string;
}

export interface VocabularyWord {
  id: string;
  term: string;
  translation: string;
  /** What the AI teacher should say aloud when introducing this word. */
  audioPrompt: string;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
}

export interface LessonGoal {
  id: string;
  description: string;
}

export type ActivityType = "multipleChoice" | "translate" | "listen";

export interface Activity {
  id: string;
  type: ActivityType;
  prompt: string;
  /** Answer choices, for `multipleChoice` and `listen` activities. */
  options?: string[];
  correctAnswer: string;
}

export interface AITeacherPrompt {
  /** Opening line the AI teacher speaks when the lesson starts. */
  intro: string;
  /** Short explanation of what this lesson is teaching. */
  explanation: string;
  /** Lines the AI teacher can use to react to a correct/incorrect answer. */
  encouragement: string[];
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  /** Thumbnail shown on the lesson's card in the Lessons screen. */
  image: string;
  xpReward: number;
  goals: LessonGoal[];
  vocabulary: VocabularyWord[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacherPrompt: AITeacherPrompt;
}

export interface Unit {
  id: string;
  languageCode: LanguageCode;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
  /** Banner image shown at the top of the Lessons screen for this unit. */
  heroImage: string;
}
