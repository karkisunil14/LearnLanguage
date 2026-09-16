import type { Lesson } from "@/types/learning";

export const LESSONS: Lesson[] = [
  {
    id: "es-1-1",
    unitId: "es-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in Spanish.",
    xpReward: 10,
    goals: [
      { id: "es-1-1-g1", description: "Greet someone" },
      { id: "es-1-1-g2", description: "Say your name" },
    ],
    vocabulary: [
      { id: "es-1-1-v1", term: "Hola", translation: "Hello", audioPrompt: "Hola" },
      { id: "es-1-1-v2", term: "Buenos días", translation: "Good morning", audioPrompt: "Buenos días" },
      { id: "es-1-1-v3", term: "Adiós", translation: "Goodbye", audioPrompt: "Adiós" },
      { id: "es-1-1-v4", term: "Yo soy", translation: "I am", audioPrompt: "Yo soy" },
    ],
    phrases: [
      { id: "es-1-1-p1", text: "Hola, ¿cómo estás?", translation: "Hello, how are you?" },
      { id: "es-1-1-p2", text: "Yo soy Ana.", translation: "I am Ana." },
    ],
    activities: [
      {
        id: "es-1-1-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Hello'?",
        options: ["Hola", "Adiós", "Gracias"],
        correctAnswer: "Hola",
      },
      {
        id: "es-1-1-a2",
        type: "translate",
        prompt: "Translate: Goodbye",
        correctAnswer: "Adiós",
      },
      {
        id: "es-1-1-a3",
        type: "listen",
        prompt: "Listen and choose what you hear.",
        options: ["Hola", "Buenos días", "Yo soy"],
        correctAnswer: "Buenos días",
      },
    ],
    aiTeacherPrompt: {
      intro: "¡Hola! Let's learn how to say hello and introduce yourself in Spanish.",
      explanation:
        "In Spanish, 'Hola' means 'Hello' and 'Yo soy' means 'I am', used right before your name.",
      encouragement: ["¡Muy bien!", "That's it, keep going!", "Not quite, let's try that again."],
    },
  },
  {
    id: "es-1-2",
    unitId: "es-unit-1",
    title: "Meeting People",
    description: "Ask someone's name and how they are.",
    xpReward: 10,
    goals: [
      { id: "es-1-2-g1", description: "Ask how someone is" },
      { id: "es-1-2-g2", description: "Ask someone's name" },
    ],
    vocabulary: [
      { id: "es-1-2-v1", term: "¿Cómo estás?", translation: "How are you?", audioPrompt: "¿Cómo estás?" },
      { id: "es-1-2-v2", term: "¿Cómo te llamas?", translation: "What is your name?", audioPrompt: "¿Cómo te llamas?" },
      { id: "es-1-2-v3", term: "Bien", translation: "Good/Well", audioPrompt: "Bien" },
      { id: "es-1-2-v4", term: "Mucho gusto", translation: "Nice to meet you", audioPrompt: "Mucho gusto" },
    ],
    phrases: [
      { id: "es-1-2-p1", text: "Estoy bien, gracias.", translation: "I'm good, thank you." },
      { id: "es-1-2-p2", text: "¿Cómo te llamas?", translation: "What is your name?" },
    ],
    activities: [
      {
        id: "es-1-2-a1",
        type: "multipleChoice",
        prompt: "Which phrase means 'What is your name?'",
        options: ["¿Cómo estás?", "¿Cómo te llamas?", "Mucho gusto"],
        correctAnswer: "¿Cómo te llamas?",
      },
      {
        id: "es-1-2-a2",
        type: "translate",
        prompt: "Translate: Nice to meet you",
        correctAnswer: "Mucho gusto",
      },
    ],
    aiTeacherPrompt: {
      intro: "Now let's practice meeting someone new in Spanish.",
      explanation: "Use '¿Cómo te llamas?' to ask for a name, and 'Mucho gusto' when you meet someone.",
      encouragement: ["¡Perfecto!", "You're getting the hang of it!", "Close, give it another try."],
    },
  },
  {
    id: "es-2-1",
    unitId: "es-unit-2",
    title: "Ordering Food",
    description: "Order a simple meal at a restaurant.",
    xpReward: 15,
    goals: [
      { id: "es-2-1-g1", description: "Order food and drink" },
      { id: "es-2-1-g2", description: "Say please and thank you" },
    ],
    vocabulary: [
      { id: "es-2-1-v1", term: "Quiero", translation: "I want", audioPrompt: "Quiero" },
      { id: "es-2-1-v2", term: "Agua", translation: "Water", audioPrompt: "Agua" },
      { id: "es-2-1-v3", term: "Por favor", translation: "Please", audioPrompt: "Por favor" },
      { id: "es-2-1-v4", term: "Gracias", translation: "Thank you", audioPrompt: "Gracias" },
    ],
    phrases: [
      { id: "es-2-1-p1", text: "Quiero agua, por favor.", translation: "I want water, please." },
    ],
    activities: [
      {
        id: "es-2-1-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Water'?",
        options: ["Agua", "Gracias", "Quiero"],
        correctAnswer: "Agua",
      },
      {
        id: "es-2-1-a2",
        type: "translate",
        prompt: "Translate: I want water, please.",
        correctAnswer: "Quiero agua, por favor.",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's order some food together. Are you hungry?",
      explanation: "Start a request with 'Quiero' (I want), and add 'por favor' (please) to be polite.",
      encouragement: ["¡Excelente!", "Great order!", "Let's try that phrase again."],
    },
  },
  {
    id: "fr-1-1",
    unitId: "fr-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in French.",
    xpReward: 10,
    goals: [
      { id: "fr-1-1-g1", description: "Greet someone" },
      { id: "fr-1-1-g2", description: "Say your name" },
    ],
    vocabulary: [
      { id: "fr-1-1-v1", term: "Bonjour", translation: "Hello", audioPrompt: "Bonjour" },
      { id: "fr-1-1-v2", term: "Au revoir", translation: "Goodbye", audioPrompt: "Au revoir" },
      { id: "fr-1-1-v3", term: "Je m'appelle", translation: "My name is", audioPrompt: "Je m'appelle" },
      { id: "fr-1-1-v4", term: "Merci", translation: "Thank you", audioPrompt: "Merci" },
    ],
    phrases: [
      { id: "fr-1-1-p1", text: "Bonjour, je m'appelle Léo.", translation: "Hello, my name is Léo." },
    ],
    activities: [
      {
        id: "fr-1-1-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Hello'?",
        options: ["Bonjour", "Au revoir", "Merci"],
        correctAnswer: "Bonjour",
      },
      {
        id: "fr-1-1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "Merci",
      },
    ],
    aiTeacherPrompt: {
      intro: "Bonjour! Let's learn how to greet someone in French.",
      explanation: "'Bonjour' means 'Hello', and 'Je m'appelle' is how you say 'My name is'.",
      encouragement: ["Très bien!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "zh-1-1",
    unitId: "zh-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in Chinese.",
    xpReward: 10,
    goals: [
      { id: "zh-1-1-g1", description: "Greet someone" },
      { id: "zh-1-1-g2", description: "Say your name" },
    ],
    vocabulary: [
      { id: "zh-1-1-v1", term: "你好", translation: "Hello", audioPrompt: "Nǐ hǎo" },
      { id: "zh-1-1-v2", term: "再见", translation: "Goodbye", audioPrompt: "Zài jiàn" },
      { id: "zh-1-1-v3", term: "我叫", translation: "My name is", audioPrompt: "Wǒ jiào" },
      { id: "zh-1-1-v4", term: "谢谢", translation: "Thank you", audioPrompt: "Xiè xiè" },
    ],
    phrases: [
      { id: "zh-1-1-p1", text: "你好，我叫李明。", translation: "Hello, my name is Li Ming." },
    ],
    activities: [
      {
        id: "zh-1-1-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Hello'?",
        options: ["你好", "再见", "谢谢"],
        correctAnswer: "你好",
      },
      {
        id: "zh-1-1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "谢谢",
      },
    ],
    aiTeacherPrompt: {
      intro: "你好! Let's learn how to greet someone in Chinese.",
      explanation: "'你好' (Nǐ hǎo) means 'Hello', and '我叫' (Wǒ jiào) is how you say 'My name is'.",
      encouragement: ["很好! (Very good!)", "Nice work!", "Almost, try once more."],
    },
  },
];

export function getLessonById(id: string) {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function getLessonsByUnit(unitId: string) {
  return LESSONS.filter((lesson) => lesson.unitId === unitId);
}
