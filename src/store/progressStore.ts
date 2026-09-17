import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ProgressState = {
  xp: number;
  dailyGoalXp: number;
  streak: number;
  completedLessonIds: string[];
  hasHydrated: boolean;
  completeLesson: (lessonId: string, xpReward: number) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      dailyGoalXp: 20,
      streak: 0,
      completedLessonIds: [],
      hasHydrated: false,
      completeLesson: (lessonId, xpReward) => {
        if (get().completedLessonIds.includes(lessonId)) return;
        set((state) => ({
          xp: state.xp + xpReward,
          completedLessonIds: [...state.completedLessonIds, lessonId],
        }));
      },
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "progress-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
