import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initial = (navigator.language || "en-US").includes("es") ? "es" : "en";

const useLanguageStore = create(
    devtools((set) => ({
        lang: initial,
        setLang: (lang) => set({ lang }),
        toggle: () => set((state) => ({ lang: state.lang === "en" ? "es" : "en" })),
    })),
);

export default useLanguageStore;