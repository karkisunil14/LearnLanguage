import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { LanguageCode } from "@/types/learning";

type LanguageState = {
  selectedLanguage: LanguageCode | null;
  hasHydrated: boolean;
  setSelectedLanguage: (code: LanguageCode) => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: null,
      hasHydrated: false,
      setSelectedLanguage: (code) => set({ selectedLanguage: code }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
