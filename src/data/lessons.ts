import type { Lesson } from "@/types/learning";

export const LESSONS: Lesson[] = [
  {
    id: "es-1-1",
    unitId: "es-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in Spanish.",
    image: "https://picsum.photos/seed/es-1-1/200/200",
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
    image: "https://picsum.photos/seed/es-1-2/200/200",
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
    image: "https://picsum.photos/seed/es-2-1/200/200",
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
    image: "https://picsum.photos/seed/fr-1-1/200/200",
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
    id: "fr-1-2",
    unitId: "fr-unit-1",
    title: "Daily Life",
    description: "Talk about your morning and evening routine.",
    image: "https://picsum.photos/seed/fr-1-2/200/200",
    xpReward: 10,
    goals: [
      { id: "fr-1-2-g1", description: "Talk about your day" },
      { id: "fr-1-2-g2", description: "Say when you work and eat" },
    ],
    vocabulary: [
      { id: "fr-1-2-v1", term: "Le matin", translation: "Morning", audioPrompt: "Le matin" },
      { id: "fr-1-2-v2", term: "Je travaille", translation: "I work", audioPrompt: "Je travaille" },
      { id: "fr-1-2-v3", term: "Je mange", translation: "I eat", audioPrompt: "Je mange" },
      { id: "fr-1-2-v4", term: "Le soir", translation: "Evening", audioPrompt: "Le soir" },
    ],
    phrases: [
      { id: "fr-1-2-p1", text: "Je travaille le matin.", translation: "I work in the morning." },
    ],
    activities: [
      {
        id: "fr-1-2-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Morning'?",
        options: ["Le matin", "Le soir", "Je mange"],
        correctAnswer: "Le matin",
      },
      {
        id: "fr-1-2-a2",
        type: "translate",
        prompt: "Translate: I eat",
        correctAnswer: "Je mange",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's talk about your daily routine in French.",
      explanation: "'Le matin' means 'morning' and 'le soir' means 'evening'. Use 'je' before a verb to say 'I'.",
      encouragement: ["Très bien!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "fr-1-3",
    unitId: "fr-unit-1",
    title: "At the Café",
    description: "Order a coffee and ask for the bill.",
    image: "https://picsum.photos/seed/fr-1-3/200/200",
    xpReward: 10,
    goals: [
      { id: "fr-1-3-g1", description: "Order a drink" },
      { id: "fr-1-3-g2", description: "Ask for the bill" },
    ],
    vocabulary: [
      { id: "fr-1-3-v1", term: "Un café", translation: "A coffee", audioPrompt: "Un café" },
      { id: "fr-1-3-v2", term: "L'addition", translation: "The bill", audioPrompt: "L'addition" },
      { id: "fr-1-3-v3", term: "S'il vous plaît", translation: "Please", audioPrompt: "S'il vous plaît" },
      { id: "fr-1-3-v4", term: "Un croissant", translation: "A croissant", audioPrompt: "Un croissant" },
    ],
    phrases: [
      { id: "fr-1-3-p1", text: "Un café, s'il vous plaît.", translation: "A coffee, please." },
    ],
    activities: [
      {
        id: "fr-1-3-a1",
        type: "multipleChoice",
        prompt: "Which word means 'The bill'?",
        options: ["Un café", "L'addition", "Un croissant"],
        correctAnswer: "L'addition",
      },
      {
        id: "fr-1-3-a2",
        type: "translate",
        prompt: "Translate: A coffee, please.",
        correctAnswer: "Un café, s'il vous plaît.",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's order something at a French café.",
      explanation: "Add 's'il vous plaît' (please) after a request to sound polite.",
      encouragement: ["Très bien!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "fr-1-4",
    unitId: "fr-unit-1",
    title: "Travel & Directions",
    description: "Ask for and understand directions.",
    image: "https://picsum.photos/seed/fr-1-4/200/200",
    xpReward: 10,
    goals: [
      { id: "fr-1-4-g1", description: "Ask where something is" },
      { id: "fr-1-4-g2", description: "Understand basic directions" },
    ],
    vocabulary: [
      { id: "fr-1-4-v1", term: "Où est...?", translation: "Where is...?", audioPrompt: "Où est...?" },
      { id: "fr-1-4-v2", term: "Tout droit", translation: "Straight ahead", audioPrompt: "Tout droit" },
      { id: "fr-1-4-v3", term: "À gauche", translation: "To the left", audioPrompt: "À gauche" },
      { id: "fr-1-4-v4", term: "À droite", translation: "To the right", audioPrompt: "À droite" },
    ],
    phrases: [
      { id: "fr-1-4-p1", text: "Où est la gare?", translation: "Where is the train station?" },
    ],
    activities: [
      {
        id: "fr-1-4-a1",
        type: "multipleChoice",
        prompt: "Which phrase means 'Where is...?'",
        options: ["Où est...?", "Tout droit", "À droite"],
        correctAnswer: "Où est...?",
      },
      {
        id: "fr-1-4-a2",
        type: "translate",
        prompt: "Translate: To the left",
        correctAnswer: "À gauche",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's learn how to find your way around town in French.",
      explanation: "Start with 'Où est...?' to ask where something is, then listen for 'gauche' (left) or 'droite' (right).",
      encouragement: ["Très bien!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "fr-1-5",
    unitId: "fr-unit-1",
    title: "Shopping",
    description: "Ask about prices while shopping.",
    image: "https://picsum.photos/seed/fr-1-5/200/200",
    xpReward: 10,
    goals: [
      { id: "fr-1-5-g1", description: "Ask how much something costs" },
      { id: "fr-1-5-g2", description: "Describe price" },
    ],
    vocabulary: [
      { id: "fr-1-5-v1", term: "Combien ça coûte?", translation: "How much does it cost?", audioPrompt: "Combien ça coûte?" },
      { id: "fr-1-5-v2", term: "Cher", translation: "Expensive", audioPrompt: "Cher" },
      { id: "fr-1-5-v3", term: "Pas cher", translation: "Cheap", audioPrompt: "Pas cher" },
      { id: "fr-1-5-v4", term: "J'achète", translation: "I buy", audioPrompt: "J'achète" },
    ],
    phrases: [
      { id: "fr-1-5-p1", text: "Combien ça coûte?", translation: "How much does it cost?" },
    ],
    activities: [
      {
        id: "fr-1-5-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Expensive'?",
        options: ["Cher", "Pas cher", "J'achète"],
        correctAnswer: "Cher",
      },
      {
        id: "fr-1-5-a2",
        type: "translate",
        prompt: "Translate: I buy",
        correctAnswer: "J'achète",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's go shopping and talk about prices in French.",
      explanation: "'Combien ça coûte?' is how you ask 'How much does it cost?'.",
      encouragement: ["Très bien!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "fr-1-6",
    unitId: "fr-unit-1",
    title: "Family & Friends",
    description: "Introduce your family and friends.",
    image: "https://picsum.photos/seed/fr-1-6/200/200",
    xpReward: 10,
    goals: [
      { id: "fr-1-6-g1", description: "Introduce a family member" },
      { id: "fr-1-6-g2", description: "Introduce a friend" },
    ],
    vocabulary: [
      { id: "fr-1-6-v1", term: "Ma famille", translation: "My family", audioPrompt: "Ma famille" },
      { id: "fr-1-6-v2", term: "Mon ami", translation: "My friend", audioPrompt: "Mon ami" },
      { id: "fr-1-6-v3", term: "Mon frère", translation: "My brother", audioPrompt: "Mon frère" },
      { id: "fr-1-6-v4", term: "Ma sœur", translation: "My sister", audioPrompt: "Ma sœur" },
    ],
    phrases: [
      { id: "fr-1-6-p1", text: "Voici mon frère et ma sœur.", translation: "This is my brother and my sister." },
    ],
    activities: [
      {
        id: "fr-1-6-a1",
        type: "multipleChoice",
        prompt: "Which word means 'My friend'?",
        options: ["Mon ami", "Ma famille", "Mon frère"],
        correctAnswer: "Mon ami",
      },
      {
        id: "fr-1-6-a2",
        type: "translate",
        prompt: "Translate: My sister",
        correctAnswer: "Ma sœur",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's introduce your family and friends in French.",
      explanation: "Use 'mon' before a masculine word and 'ma' before a feminine word to say 'my'.",
      encouragement: ["Très bien!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "zh-1-1",
    unitId: "zh-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in Chinese.",
    image: "https://picsum.photos/seed/zh-1-1/200/200",
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
  {
    id: "zh-1-2",
    unitId: "zh-unit-1",
    title: "Daily Life",
    description: "Talk about your morning and evening routine.",
    image: "https://picsum.photos/seed/zh-1-2/200/200",
    xpReward: 10,
    goals: [
      { id: "zh-1-2-g1", description: "Talk about your day" },
      { id: "zh-1-2-g2", description: "Say when you work and eat" },
    ],
    vocabulary: [
      { id: "zh-1-2-v1", term: "早上", translation: "Morning", audioPrompt: "Zǎoshang" },
      { id: "zh-1-2-v2", term: "我工作", translation: "I work", audioPrompt: "Wǒ gōngzuò" },
      { id: "zh-1-2-v3", term: "我吃饭", translation: "I eat", audioPrompt: "Wǒ chīfàn" },
      { id: "zh-1-2-v4", term: "晚上", translation: "Evening", audioPrompt: "Wǎnshang" },
    ],
    phrases: [
      { id: "zh-1-2-p1", text: "我早上工作。", translation: "I work in the morning." },
    ],
    activities: [
      {
        id: "zh-1-2-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Morning'?",
        options: ["早上", "晚上", "我吃饭"],
        correctAnswer: "早上",
      },
      {
        id: "zh-1-2-a2",
        type: "translate",
        prompt: "Translate: I eat",
        correctAnswer: "我吃饭",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's talk about your daily routine in Chinese.",
      explanation: "'早上' (zǎoshang) means 'morning' and '晚上' (wǎnshang) means 'evening'.",
      encouragement: ["很好!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "zh-1-3",
    unitId: "zh-unit-1",
    title: "At the Café",
    description: "Order a coffee and ask for the bill.",
    image: "https://picsum.photos/seed/zh-1-3/200/200",
    xpReward: 10,
    goals: [
      { id: "zh-1-3-g1", description: "Order a drink" },
      { id: "zh-1-3-g2", description: "Ask for the bill" },
    ],
    vocabulary: [
      { id: "zh-1-3-v1", term: "咖啡", translation: "Coffee", audioPrompt: "Kāfēi" },
      { id: "zh-1-3-v2", term: "买单", translation: "The bill", audioPrompt: "Mǎidān" },
      { id: "zh-1-3-v3", term: "请", translation: "Please", audioPrompt: "Qǐng" },
      { id: "zh-1-3-v4", term: "面包", translation: "Bread", audioPrompt: "Miànbāo" },
    ],
    phrases: [
      { id: "zh-1-3-p1", text: "请给我一杯咖啡。", translation: "Please give me a coffee." },
    ],
    activities: [
      {
        id: "zh-1-3-a1",
        type: "multipleChoice",
        prompt: "Which word means 'The bill'?",
        options: ["咖啡", "买单", "面包"],
        correctAnswer: "买单",
      },
      {
        id: "zh-1-3-a2",
        type: "translate",
        prompt: "Translate: Please give me a coffee.",
        correctAnswer: "请给我一杯咖啡。",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's order something at a café in Chinese.",
      explanation: "'请' (qǐng) means 'please' and goes at the start of a polite request.",
      encouragement: ["很好!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "zh-1-4",
    unitId: "zh-unit-1",
    title: "Travel & Directions",
    description: "Ask for and understand directions.",
    image: "https://picsum.photos/seed/zh-1-4/200/200",
    xpReward: 10,
    goals: [
      { id: "zh-1-4-g1", description: "Ask where something is" },
      { id: "zh-1-4-g2", description: "Understand basic directions" },
    ],
    vocabulary: [
      { id: "zh-1-4-v1", term: "在哪里", translation: "Where is", audioPrompt: "Zài nǎlǐ" },
      { id: "zh-1-4-v2", term: "直走", translation: "Go straight", audioPrompt: "Zhí zǒu" },
      { id: "zh-1-4-v3", term: "左边", translation: "Left", audioPrompt: "Zuǒbiān" },
      { id: "zh-1-4-v4", term: "右边", translation: "Right", audioPrompt: "Yòubiān" },
    ],
    phrases: [
      { id: "zh-1-4-p1", text: "火车站在哪里?", translation: "Where is the train station?" },
    ],
    activities: [
      {
        id: "zh-1-4-a1",
        type: "multipleChoice",
        prompt: "Which phrase means 'Where is'?",
        options: ["在哪里", "直走", "右边"],
        correctAnswer: "在哪里",
      },
      {
        id: "zh-1-4-a2",
        type: "translate",
        prompt: "Translate: Left",
        correctAnswer: "左边",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's learn how to find your way around town in Chinese.",
      explanation: "Use '在哪里' (zài nǎlǐ) to ask where something is.",
      encouragement: ["很好!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "zh-1-5",
    unitId: "zh-unit-1",
    title: "Shopping",
    description: "Ask about prices while shopping.",
    image: "https://picsum.photos/seed/zh-1-5/200/200",
    xpReward: 10,
    goals: [
      { id: "zh-1-5-g1", description: "Ask how much something costs" },
      { id: "zh-1-5-g2", description: "Describe price" },
    ],
    vocabulary: [
      { id: "zh-1-5-v1", term: "多少钱", translation: "How much", audioPrompt: "Duōshǎo qián" },
      { id: "zh-1-5-v2", term: "贵", translation: "Expensive", audioPrompt: "Guì" },
      { id: "zh-1-5-v3", term: "便宜", translation: "Cheap", audioPrompt: "Piányi" },
      { id: "zh-1-5-v4", term: "我买", translation: "I buy", audioPrompt: "Wǒ mǎi" },
    ],
    phrases: [
      { id: "zh-1-5-p1", text: "这个多少钱?", translation: "How much is this?" },
    ],
    activities: [
      {
        id: "zh-1-5-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Expensive'?",
        options: ["贵", "便宜", "我买"],
        correctAnswer: "贵",
      },
      {
        id: "zh-1-5-a2",
        type: "translate",
        prompt: "Translate: I buy",
        correctAnswer: "我买",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's go shopping and talk about prices in Chinese.",
      explanation: "'多少钱' (duōshǎo qián) is how you ask 'How much does it cost?'.",
      encouragement: ["很好!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "zh-1-6",
    unitId: "zh-unit-1",
    title: "Family & Friends",
    description: "Introduce your family and friends.",
    image: "https://picsum.photos/seed/zh-1-6/200/200",
    xpReward: 10,
    goals: [
      { id: "zh-1-6-g1", description: "Introduce a family member" },
      { id: "zh-1-6-g2", description: "Introduce a friend" },
    ],
    vocabulary: [
      { id: "zh-1-6-v1", term: "我的家人", translation: "My family", audioPrompt: "Wǒ de jiārén" },
      { id: "zh-1-6-v2", term: "我的朋友", translation: "My friend", audioPrompt: "Wǒ de péngyǒu" },
      { id: "zh-1-6-v3", term: "哥哥", translation: "Older brother", audioPrompt: "Gēge" },
      { id: "zh-1-6-v4", term: "姐姐", translation: "Older sister", audioPrompt: "Jiějie" },
    ],
    phrases: [
      { id: "zh-1-6-p1", text: "这是我的哥哥和姐姐。", translation: "This is my older brother and older sister." },
    ],
    activities: [
      {
        id: "zh-1-6-a1",
        type: "multipleChoice",
        prompt: "Which word means 'My friend'?",
        options: ["我的朋友", "我的家人", "哥哥"],
        correctAnswer: "我的朋友",
      },
      {
        id: "zh-1-6-a2",
        type: "translate",
        prompt: "Translate: Older sister",
        correctAnswer: "姐姐",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's introduce your family and friends in Chinese.",
      explanation: "'我的' (wǒ de) means 'my', used before a family member or friend.",
      encouragement: ["很好!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ja-1-1",
    unitId: "ja-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in Japanese.",
    image: "https://picsum.photos/seed/ja-1-1/200/200",
    xpReward: 10,
    goals: [
      { id: "ja-1-1-g1", description: "Greet someone" },
      { id: "ja-1-1-g2", description: "Say your name" },
    ],
    vocabulary: [
      { id: "ja-1-1-v1", term: "こんにちは", translation: "Hello", audioPrompt: "Konnichiwa" },
      { id: "ja-1-1-v2", term: "さようなら", translation: "Goodbye", audioPrompt: "Sayōnara" },
      { id: "ja-1-1-v3", term: "私は…です", translation: "I am...", audioPrompt: "Watashi wa ... desu" },
      { id: "ja-1-1-v4", term: "ありがとう", translation: "Thank you", audioPrompt: "Arigatō" },
    ],
    phrases: [
      { id: "ja-1-1-p1", text: "こんにちは、私はユキです。", translation: "Hello, I am Yuki." },
    ],
    activities: [
      {
        id: "ja-1-1-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Hello'?",
        options: ["こんにちは", "さようなら", "ありがとう"],
        correctAnswer: "こんにちは",
      },
      {
        id: "ja-1-1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "ありがとう",
      },
    ],
    aiTeacherPrompt: {
      intro: "こんにちは! Let's learn how to greet someone in Japanese.",
      explanation: "'こんにちは' (Konnichiwa) means 'Hello', and '私は…です' is how you say 'I am...'.",
      encouragement: ["とても良い! (Very good!)", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ja-1-2",
    unitId: "ja-unit-1",
    title: "Daily Life",
    description: "Talk about your morning and evening routine.",
    image: "https://picsum.photos/seed/ja-1-2/200/200",
    xpReward: 10,
    goals: [
      { id: "ja-1-2-g1", description: "Talk about your day" },
      { id: "ja-1-2-g2", description: "Say when you work and eat" },
    ],
    vocabulary: [
      { id: "ja-1-2-v1", term: "朝", translation: "Morning", audioPrompt: "Asa" },
      { id: "ja-1-2-v2", term: "働きます", translation: "I work", audioPrompt: "Hatarakimasu" },
      { id: "ja-1-2-v3", term: "食べます", translation: "I eat", audioPrompt: "Tabemasu" },
      { id: "ja-1-2-v4", term: "夜", translation: "Evening", audioPrompt: "Yoru" },
    ],
    phrases: [
      { id: "ja-1-2-p1", text: "朝、働きます。", translation: "I work in the morning." },
    ],
    activities: [
      {
        id: "ja-1-2-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Morning'?",
        options: ["朝", "夜", "食べます"],
        correctAnswer: "朝",
      },
      {
        id: "ja-1-2-a2",
        type: "translate",
        prompt: "Translate: I eat",
        correctAnswer: "食べます",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's talk about your daily routine in Japanese.",
      explanation: "'朝' (asa) means 'morning' and '夜' (yoru) means 'evening'.",
      encouragement: ["とても良い!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ja-1-3",
    unitId: "ja-unit-1",
    title: "At the Café",
    description: "Order a coffee and ask for the bill.",
    image: "https://picsum.photos/seed/ja-1-3/200/200",
    xpReward: 10,
    goals: [
      { id: "ja-1-3-g1", description: "Order a drink" },
      { id: "ja-1-3-g2", description: "Ask for the bill" },
    ],
    vocabulary: [
      { id: "ja-1-3-v1", term: "コーヒー", translation: "Coffee", audioPrompt: "Kōhī" },
      { id: "ja-1-3-v2", term: "お会計", translation: "The bill", audioPrompt: "O-kaikei" },
      { id: "ja-1-3-v3", term: "お願いします", translation: "Please", audioPrompt: "Onegaishimasu" },
      { id: "ja-1-3-v4", term: "パン", translation: "Bread", audioPrompt: "Pan" },
    ],
    phrases: [
      { id: "ja-1-3-p1", text: "コーヒーをお願いします。", translation: "Coffee, please." },
    ],
    activities: [
      {
        id: "ja-1-3-a1",
        type: "multipleChoice",
        prompt: "Which word means 'The bill'?",
        options: ["コーヒー", "お会計", "パン"],
        correctAnswer: "お会計",
      },
      {
        id: "ja-1-3-a2",
        type: "translate",
        prompt: "Translate: Coffee, please.",
        correctAnswer: "コーヒーをお願いします。",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's order something at a café in Japanese.",
      explanation: "Add 'お願いします' (onegaishimasu) after a request to say 'please'.",
      encouragement: ["とても良い!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ja-1-4",
    unitId: "ja-unit-1",
    title: "Travel & Directions",
    description: "Ask for and understand directions.",
    image: "https://picsum.photos/seed/ja-1-4/200/200",
    xpReward: 10,
    goals: [
      { id: "ja-1-4-g1", description: "Ask where something is" },
      { id: "ja-1-4-g2", description: "Understand basic directions" },
    ],
    vocabulary: [
      { id: "ja-1-4-v1", term: "どこですか", translation: "Where is it?", audioPrompt: "Doko desu ka" },
      { id: "ja-1-4-v2", term: "まっすぐ", translation: "Straight", audioPrompt: "Massugu" },
      { id: "ja-1-4-v3", term: "左", translation: "Left", audioPrompt: "Hidari" },
      { id: "ja-1-4-v4", term: "右", translation: "Right", audioPrompt: "Migi" },
    ],
    phrases: [
      { id: "ja-1-4-p1", text: "駅はどこですか?", translation: "Where is the station?" },
    ],
    activities: [
      {
        id: "ja-1-4-a1",
        type: "multipleChoice",
        prompt: "Which phrase means 'Where is it?'",
        options: ["どこですか", "まっすぐ", "右"],
        correctAnswer: "どこですか",
      },
      {
        id: "ja-1-4-a2",
        type: "translate",
        prompt: "Translate: Left",
        correctAnswer: "左",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's learn how to find your way around town in Japanese.",
      explanation: "Use 'どこですか' (doko desu ka) to ask where something is.",
      encouragement: ["とても良い!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ja-1-5",
    unitId: "ja-unit-1",
    title: "Shopping",
    description: "Ask about prices while shopping.",
    image: "https://picsum.photos/seed/ja-1-5/200/200",
    xpReward: 10,
    goals: [
      { id: "ja-1-5-g1", description: "Ask how much something costs" },
      { id: "ja-1-5-g2", description: "Describe price" },
    ],
    vocabulary: [
      { id: "ja-1-5-v1", term: "いくらですか", translation: "How much is it?", audioPrompt: "Ikura desu ka" },
      { id: "ja-1-5-v2", term: "高い", translation: "Expensive", audioPrompt: "Takai" },
      { id: "ja-1-5-v3", term: "安い", translation: "Cheap", audioPrompt: "Yasui" },
      { id: "ja-1-5-v4", term: "買います", translation: "I buy", audioPrompt: "Kaimasu" },
    ],
    phrases: [
      { id: "ja-1-5-p1", text: "これはいくらですか?", translation: "How much is this?" },
    ],
    activities: [
      {
        id: "ja-1-5-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Expensive'?",
        options: ["高い", "安い", "買います"],
        correctAnswer: "高い",
      },
      {
        id: "ja-1-5-a2",
        type: "translate",
        prompt: "Translate: I buy",
        correctAnswer: "買います",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's go shopping and talk about prices in Japanese.",
      explanation: "'いくらですか' (ikura desu ka) is how you ask 'How much is it?'.",
      encouragement: ["とても良い!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ja-1-6",
    unitId: "ja-unit-1",
    title: "Family & Friends",
    description: "Introduce your family and friends.",
    image: "https://picsum.photos/seed/ja-1-6/200/200",
    xpReward: 10,
    goals: [
      { id: "ja-1-6-g1", description: "Introduce a family member" },
      { id: "ja-1-6-g2", description: "Introduce a friend" },
    ],
    vocabulary: [
      { id: "ja-1-6-v1", term: "家族", translation: "Family", audioPrompt: "Kazoku" },
      { id: "ja-1-6-v2", term: "友達", translation: "Friend", audioPrompt: "Tomodachi" },
      { id: "ja-1-6-v3", term: "兄", translation: "Older brother", audioPrompt: "Ani" },
      { id: "ja-1-6-v4", term: "姉", translation: "Older sister", audioPrompt: "Ane" },
    ],
    phrases: [
      { id: "ja-1-6-p1", text: "これは私の兄と姉です。", translation: "This is my older brother and older sister." },
    ],
    activities: [
      {
        id: "ja-1-6-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Friend'?",
        options: ["友達", "家族", "兄"],
        correctAnswer: "友達",
      },
      {
        id: "ja-1-6-a2",
        type: "translate",
        prompt: "Translate: Older sister",
        correctAnswer: "姉",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's introduce your family and friends in Japanese.",
      explanation: "'家族' (kazoku) means 'family' and '友達' (tomodachi) means 'friend'.",
      encouragement: ["とても良い!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ko-1-1",
    unitId: "ko-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in Korean.",
    image: "https://picsum.photos/seed/ko-1-1/200/200",
    xpReward: 10,
    goals: [
      { id: "ko-1-1-g1", description: "Greet someone" },
      { id: "ko-1-1-g2", description: "Say your name" },
    ],
    vocabulary: [
      { id: "ko-1-1-v1", term: "안녕하세요", translation: "Hello", audioPrompt: "Annyeonghaseyo" },
      { id: "ko-1-1-v2", term: "안녕히 가세요", translation: "Goodbye", audioPrompt: "Annyeonghi gaseyo" },
      { id: "ko-1-1-v3", term: "저는 ...예요", translation: "I am...", audioPrompt: "Jeoneun ... yeyo" },
      { id: "ko-1-1-v4", term: "감사합니다", translation: "Thank you", audioPrompt: "Gamsahamnida" },
    ],
    phrases: [
      { id: "ko-1-1-p1", text: "안녕하세요, 저는 민수예요.", translation: "Hello, I am Minsu." },
    ],
    activities: [
      {
        id: "ko-1-1-a1",
        type: "multipleChoice",
        prompt: "Which phrase means 'Hello'?",
        options: ["안녕하세요", "안녕히 가세요", "감사합니다"],
        correctAnswer: "안녕하세요",
      },
      {
        id: "ko-1-1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "감사합니다",
      },
    ],
    aiTeacherPrompt: {
      intro: "안녕하세요! Let's learn how to greet someone in Korean.",
      explanation: "'안녕하세요' means 'Hello', and '저는 ...예요' is how you say 'I am...'.",
      encouragement: ["아주 좋아요! (Very good!)", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ko-1-2",
    unitId: "ko-unit-1",
    title: "Daily Life",
    description: "Talk about your morning and evening routine.",
    image: "https://picsum.photos/seed/ko-1-2/200/200",
    xpReward: 10,
    goals: [
      { id: "ko-1-2-g1", description: "Talk about your day" },
      { id: "ko-1-2-g2", description: "Say when you work and eat" },
    ],
    vocabulary: [
      { id: "ko-1-2-v1", term: "아침", translation: "Morning", audioPrompt: "Achim" },
      { id: "ko-1-2-v2", term: "일해요", translation: "I work", audioPrompt: "Ilhaeyo" },
      { id: "ko-1-2-v3", term: "먹어요", translation: "I eat", audioPrompt: "Meogeoyo" },
      { id: "ko-1-2-v4", term: "저녁", translation: "Evening", audioPrompt: "Jeonyeok" },
    ],
    phrases: [
      { id: "ko-1-2-p1", text: "아침에 일해요.", translation: "I work in the morning." },
    ],
    activities: [
      {
        id: "ko-1-2-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Morning'?",
        options: ["아침", "저녁", "먹어요"],
        correctAnswer: "아침",
      },
      {
        id: "ko-1-2-a2",
        type: "translate",
        prompt: "Translate: I eat",
        correctAnswer: "먹어요",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's talk about your daily routine in Korean.",
      explanation: "'아침' (achim) means 'morning' and '저녁' (jeonyeok) means 'evening'.",
      encouragement: ["아주 좋아요!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ko-1-3",
    unitId: "ko-unit-1",
    title: "At the Café",
    description: "Order a coffee and ask for the bill.",
    image: "https://picsum.photos/seed/ko-1-3/200/200",
    xpReward: 10,
    goals: [
      { id: "ko-1-3-g1", description: "Order a drink" },
      { id: "ko-1-3-g2", description: "Ask for the bill" },
    ],
    vocabulary: [
      { id: "ko-1-3-v1", term: "커피", translation: "Coffee", audioPrompt: "Keopi" },
      { id: "ko-1-3-v2", term: "계산서", translation: "The bill", audioPrompt: "Gyesanseo" },
      { id: "ko-1-3-v3", term: "주세요", translation: "Please give me", audioPrompt: "Juseyo" },
      { id: "ko-1-3-v4", term: "빵", translation: "Bread", audioPrompt: "Ppang" },
    ],
    phrases: [
      { id: "ko-1-3-p1", text: "커피 주세요.", translation: "Coffee, please." },
    ],
    activities: [
      {
        id: "ko-1-3-a1",
        type: "multipleChoice",
        prompt: "Which word means 'The bill'?",
        options: ["커피", "계산서", "빵"],
        correctAnswer: "계산서",
      },
      {
        id: "ko-1-3-a2",
        type: "translate",
        prompt: "Translate: Coffee, please.",
        correctAnswer: "커피 주세요.",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's order something at a café in Korean.",
      explanation: "Add '주세요' (juseyo) after what you want to politely ask for it.",
      encouragement: ["아주 좋아요!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ko-1-4",
    unitId: "ko-unit-1",
    title: "Travel & Directions",
    description: "Ask for and understand directions.",
    image: "https://picsum.photos/seed/ko-1-4/200/200",
    xpReward: 10,
    goals: [
      { id: "ko-1-4-g1", description: "Ask where something is" },
      { id: "ko-1-4-g2", description: "Understand basic directions" },
    ],
    vocabulary: [
      { id: "ko-1-4-v1", term: "어디예요", translation: "Where is it?", audioPrompt: "Eodiyeyo" },
      { id: "ko-1-4-v2", term: "직진", translation: "Straight", audioPrompt: "Jikjin" },
      { id: "ko-1-4-v3", term: "왼쪽", translation: "Left", audioPrompt: "Oenjjok" },
      { id: "ko-1-4-v4", term: "오른쪽", translation: "Right", audioPrompt: "Oreunjjok" },
    ],
    phrases: [
      { id: "ko-1-4-p1", text: "역이 어디예요?", translation: "Where is the station?" },
    ],
    activities: [
      {
        id: "ko-1-4-a1",
        type: "multipleChoice",
        prompt: "Which phrase means 'Where is it?'",
        options: ["어디예요", "직진", "오른쪽"],
        correctAnswer: "어디예요",
      },
      {
        id: "ko-1-4-a2",
        type: "translate",
        prompt: "Translate: Left",
        correctAnswer: "왼쪽",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's learn how to find your way around town in Korean.",
      explanation: "Use '어디예요' (eodiyeyo) to ask where something is.",
      encouragement: ["아주 좋아요!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ko-1-5",
    unitId: "ko-unit-1",
    title: "Shopping",
    description: "Ask about prices while shopping.",
    image: "https://picsum.photos/seed/ko-1-5/200/200",
    xpReward: 10,
    goals: [
      { id: "ko-1-5-g1", description: "Ask how much something costs" },
      { id: "ko-1-5-g2", description: "Describe price" },
    ],
    vocabulary: [
      { id: "ko-1-5-v1", term: "얼마예요", translation: "How much is it?", audioPrompt: "Eolmayeyo" },
      { id: "ko-1-5-v2", term: "비싸요", translation: "Expensive", audioPrompt: "Bissayo" },
      { id: "ko-1-5-v3", term: "싸요", translation: "Cheap", audioPrompt: "Ssayo" },
      { id: "ko-1-5-v4", term: "사요", translation: "I buy", audioPrompt: "Sayo" },
    ],
    phrases: [
      { id: "ko-1-5-p1", text: "이거 얼마예요?", translation: "How much is this?" },
    ],
    activities: [
      {
        id: "ko-1-5-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Expensive'?",
        options: ["비싸요", "싸요", "사요"],
        correctAnswer: "비싸요",
      },
      {
        id: "ko-1-5-a2",
        type: "translate",
        prompt: "Translate: I buy",
        correctAnswer: "사요",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's go shopping and talk about prices in Korean.",
      explanation: "'얼마예요' (eolmayeyo) is how you ask 'How much is it?'.",
      encouragement: ["아주 좋아요!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "ko-1-6",
    unitId: "ko-unit-1",
    title: "Family & Friends",
    description: "Introduce your family and friends.",
    image: "https://picsum.photos/seed/ko-1-6/200/200",
    xpReward: 10,
    goals: [
      { id: "ko-1-6-g1", description: "Introduce a family member" },
      { id: "ko-1-6-g2", description: "Introduce a friend" },
    ],
    vocabulary: [
      { id: "ko-1-6-v1", term: "가족", translation: "Family", audioPrompt: "Gajok" },
      { id: "ko-1-6-v2", term: "친구", translation: "Friend", audioPrompt: "Chingu" },
      { id: "ko-1-6-v3", term: "형", translation: "Older brother", audioPrompt: "Hyeong" },
      { id: "ko-1-6-v4", term: "누나", translation: "Older sister", audioPrompt: "Nuna" },
    ],
    phrases: [
      { id: "ko-1-6-p1", text: "이 사람은 제 형이에요.", translation: "This is my older brother." },
    ],
    activities: [
      {
        id: "ko-1-6-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Friend'?",
        options: ["친구", "가족", "형"],
        correctAnswer: "친구",
      },
      {
        id: "ko-1-6-a2",
        type: "translate",
        prompt: "Translate: Family",
        correctAnswer: "가족",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's introduce your family and friends in Korean.",
      explanation: "'가족' (gajok) means 'family' and '친구' (chingu) means 'friend'.",
      encouragement: ["아주 좋아요!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "de-1-1",
    unitId: "de-unit-1",
    title: "Say Hello",
    description: "Learn how to greet someone in German.",
    image: "https://picsum.photos/seed/de-1-1/200/200",
    xpReward: 10,
    goals: [
      { id: "de-1-1-g1", description: "Greet someone" },
      { id: "de-1-1-g2", description: "Say your name" },
    ],
    vocabulary: [
      { id: "de-1-1-v1", term: "Hallo", translation: "Hello", audioPrompt: "Hallo" },
      { id: "de-1-1-v2", term: "Auf Wiedersehen", translation: "Goodbye", audioPrompt: "Auf Wiedersehen" },
      { id: "de-1-1-v3", term: "Ich heiße", translation: "My name is", audioPrompt: "Ich heiße" },
      { id: "de-1-1-v4", term: "Danke", translation: "Thank you", audioPrompt: "Danke" },
    ],
    phrases: [
      { id: "de-1-1-p1", text: "Hallo, ich heiße Max.", translation: "Hello, my name is Max." },
    ],
    activities: [
      {
        id: "de-1-1-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Hello'?",
        options: ["Hallo", "Auf Wiedersehen", "Danke"],
        correctAnswer: "Hallo",
      },
      {
        id: "de-1-1-a2",
        type: "translate",
        prompt: "Translate: Thank you",
        correctAnswer: "Danke",
      },
    ],
    aiTeacherPrompt: {
      intro: "Hallo! Let's learn how to greet someone in German.",
      explanation: "'Hallo' means 'Hello', and 'Ich heiße' is how you say 'My name is'.",
      encouragement: ["Sehr gut!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "de-1-2",
    unitId: "de-unit-1",
    title: "Daily Life",
    description: "Talk about your morning and evening routine.",
    image: "https://picsum.photos/seed/de-1-2/200/200",
    xpReward: 10,
    goals: [
      { id: "de-1-2-g1", description: "Talk about your day" },
      { id: "de-1-2-g2", description: "Say when you work and eat" },
    ],
    vocabulary: [
      { id: "de-1-2-v1", term: "Der Morgen", translation: "Morning", audioPrompt: "Der Morgen" },
      { id: "de-1-2-v2", term: "Ich arbeite", translation: "I work", audioPrompt: "Ich arbeite" },
      { id: "de-1-2-v3", term: "Ich esse", translation: "I eat", audioPrompt: "Ich esse" },
      { id: "de-1-2-v4", term: "Der Abend", translation: "Evening", audioPrompt: "Der Abend" },
    ],
    phrases: [
      { id: "de-1-2-p1", text: "Ich arbeite am Morgen.", translation: "I work in the morning." },
    ],
    activities: [
      {
        id: "de-1-2-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Morning'?",
        options: ["Der Morgen", "Der Abend", "Ich esse"],
        correctAnswer: "Der Morgen",
      },
      {
        id: "de-1-2-a2",
        type: "translate",
        prompt: "Translate: I eat",
        correctAnswer: "Ich esse",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's talk about your daily routine in German.",
      explanation: "'Der Morgen' means 'morning' and 'der Abend' means 'evening'.",
      encouragement: ["Sehr gut!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "de-1-3",
    unitId: "de-unit-1",
    title: "At the Café",
    description: "Order a coffee and ask for the bill.",
    image: "https://picsum.photos/seed/de-1-3/200/200",
    xpReward: 10,
    goals: [
      { id: "de-1-3-g1", description: "Order a drink" },
      { id: "de-1-3-g2", description: "Ask for the bill" },
    ],
    vocabulary: [
      { id: "de-1-3-v1", term: "Ein Kaffee", translation: "A coffee", audioPrompt: "Ein Kaffee" },
      { id: "de-1-3-v2", term: "Die Rechnung", translation: "The bill", audioPrompt: "Die Rechnung" },
      { id: "de-1-3-v3", term: "Bitte", translation: "Please", audioPrompt: "Bitte" },
      { id: "de-1-3-v4", term: "Ein Brötchen", translation: "A bread roll", audioPrompt: "Ein Brötchen" },
    ],
    phrases: [
      { id: "de-1-3-p1", text: "Ein Kaffee, bitte.", translation: "A coffee, please." },
    ],
    activities: [
      {
        id: "de-1-3-a1",
        type: "multipleChoice",
        prompt: "Which word means 'The bill'?",
        options: ["Ein Kaffee", "Die Rechnung", "Ein Brötchen"],
        correctAnswer: "Die Rechnung",
      },
      {
        id: "de-1-3-a2",
        type: "translate",
        prompt: "Translate: A coffee, please.",
        correctAnswer: "Ein Kaffee, bitte.",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's order something at a café in German.",
      explanation: "Add 'bitte' (please) after a request to sound polite.",
      encouragement: ["Sehr gut!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "de-1-4",
    unitId: "de-unit-1",
    title: "Travel & Directions",
    description: "Ask for and understand directions.",
    image: "https://picsum.photos/seed/de-1-4/200/200",
    xpReward: 10,
    goals: [
      { id: "de-1-4-g1", description: "Ask where something is" },
      { id: "de-1-4-g2", description: "Understand basic directions" },
    ],
    vocabulary: [
      { id: "de-1-4-v1", term: "Wo ist...?", translation: "Where is...?", audioPrompt: "Wo ist...?" },
      { id: "de-1-4-v2", term: "Geradeaus", translation: "Straight ahead", audioPrompt: "Geradeaus" },
      { id: "de-1-4-v3", term: "Links", translation: "Left", audioPrompt: "Links" },
      { id: "de-1-4-v4", term: "Rechts", translation: "Right", audioPrompt: "Rechts" },
    ],
    phrases: [
      { id: "de-1-4-p1", text: "Wo ist der Bahnhof?", translation: "Where is the train station?" },
    ],
    activities: [
      {
        id: "de-1-4-a1",
        type: "multipleChoice",
        prompt: "Which phrase means 'Where is...?'",
        options: ["Wo ist...?", "Geradeaus", "Rechts"],
        correctAnswer: "Wo ist...?",
      },
      {
        id: "de-1-4-a2",
        type: "translate",
        prompt: "Translate: Left",
        correctAnswer: "Links",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's learn how to find your way around town in German.",
      explanation: "Start with 'Wo ist...?' to ask where something is, then listen for 'links' (left) or 'rechts' (right).",
      encouragement: ["Sehr gut!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "de-1-5",
    unitId: "de-unit-1",
    title: "Shopping",
    description: "Ask about prices while shopping.",
    image: "https://picsum.photos/seed/de-1-5/200/200",
    xpReward: 10,
    goals: [
      { id: "de-1-5-g1", description: "Ask how much something costs" },
      { id: "de-1-5-g2", description: "Describe price" },
    ],
    vocabulary: [
      { id: "de-1-5-v1", term: "Wie viel kostet das?", translation: "How much does it cost?", audioPrompt: "Wie viel kostet das?" },
      { id: "de-1-5-v2", term: "Teuer", translation: "Expensive", audioPrompt: "Teuer" },
      { id: "de-1-5-v3", term: "Günstig", translation: "Cheap", audioPrompt: "Günstig" },
      { id: "de-1-5-v4", term: "Ich kaufe", translation: "I buy", audioPrompt: "Ich kaufe" },
    ],
    phrases: [
      { id: "de-1-5-p1", text: "Wie viel kostet das?", translation: "How much does it cost?" },
    ],
    activities: [
      {
        id: "de-1-5-a1",
        type: "multipleChoice",
        prompt: "Which word means 'Expensive'?",
        options: ["Teuer", "Günstig", "Ich kaufe"],
        correctAnswer: "Teuer",
      },
      {
        id: "de-1-5-a2",
        type: "translate",
        prompt: "Translate: I buy",
        correctAnswer: "Ich kaufe",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's go shopping and talk about prices in German.",
      explanation: "'Wie viel kostet das?' is how you ask 'How much does it cost?'.",
      encouragement: ["Sehr gut!", "Nice work!", "Almost, try once more."],
    },
  },
  {
    id: "de-1-6",
    unitId: "de-unit-1",
    title: "Family & Friends",
    description: "Introduce your family and friends.",
    image: "https://picsum.photos/seed/de-1-6/200/200",
    xpReward: 10,
    goals: [
      { id: "de-1-6-g1", description: "Introduce a family member" },
      { id: "de-1-6-g2", description: "Introduce a friend" },
    ],
    vocabulary: [
      { id: "de-1-6-v1", term: "Meine Familie", translation: "My family", audioPrompt: "Meine Familie" },
      { id: "de-1-6-v2", term: "Mein Freund", translation: "My friend", audioPrompt: "Mein Freund" },
      { id: "de-1-6-v3", term: "Mein Bruder", translation: "My brother", audioPrompt: "Mein Bruder" },
      { id: "de-1-6-v4", term: "Meine Schwester", translation: "My sister", audioPrompt: "Meine Schwester" },
    ],
    phrases: [
      { id: "de-1-6-p1", text: "Das ist mein Bruder und meine Schwester.", translation: "This is my brother and my sister." },
    ],
    activities: [
      {
        id: "de-1-6-a1",
        type: "multipleChoice",
        prompt: "Which word means 'My friend'?",
        options: ["Mein Freund", "Meine Familie", "Mein Bruder"],
        correctAnswer: "Mein Freund",
      },
      {
        id: "de-1-6-a2",
        type: "translate",
        prompt: "Translate: My sister",
        correctAnswer: "Meine Schwester",
      },
    ],
    aiTeacherPrompt: {
      intro: "Let's introduce your family and friends in German.",
      explanation: "Use 'mein' before a masculine word and 'meine' before a feminine word to say 'my'.",
      encouragement: ["Sehr gut!", "Nice work!", "Almost, try once more."],
    },
  },
];

export function getLessonById(id: string) {
  return LESSONS.find((lesson) => lesson.id === id);
}

export function getLessonsByUnit(unitId: string) {
  return LESSONS.filter((lesson) => lesson.unitId === unitId);
}
