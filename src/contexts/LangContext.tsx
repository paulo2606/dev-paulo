"use client";

import { createContext, useContext, useState } from "react";
import { pt } from "@/translations/pt";
import { en } from "@/translations/en";

type Lang = "pt" | "en";
type Translations = typeof pt;

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const t = lang === "pt" ? pt : (en as unknown as Translations);
  const toggleLang = () => setLang((prev) => (prev === "pt" ? "en" : "pt"));

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
