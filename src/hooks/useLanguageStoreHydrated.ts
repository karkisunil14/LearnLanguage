import { useSyncExternalStore } from "react";

import { useLanguageStore } from "@/store/languageStore";

function subscribe(callback: () => void) {
  const unsubHydrate = useLanguageStore.persist.onHydrate(callback);
  const unsubFinishHydration = useLanguageStore.persist.onFinishHydration(callback);

  return () => {
    unsubHydrate();
    unsubFinishHydration();
  };
}

function getSnapshot() {
  return useLanguageStore.persist.hasHydrated();
}

export function useLanguageStoreHydrated() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
