import type { Language } from "@/types/learning";

export const LANGUAGES: Language[] = [
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "https://flagcdn.com/w320/es.png",
    learners: "28.4M learners",
    greeting: "Hola",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "https://flagcdn.com/w320/fr.png",
    learners: "19.4M learners",
    greeting: "Bonjour",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flag: "https://flagcdn.com/w320/jp.png",
    learners: "12.7M learners",
    greeting: "こんにちは",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flag: "https://flagcdn.com/w320/kr.png",
    learners: "9.3M learners",
    greeting: "안녕하세요",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "https://flagcdn.com/w320/de.png",
    learners: "8.1M learners",
    greeting: "Hallo",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "https://flagcdn.com/w320/cn.png",
    learners: "7.4M learners",
    greeting: "你好",
  },
];

export function getLanguageByCode(code: string) {
  return LANGUAGES.find((language) => language.code === code);
}
