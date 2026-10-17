"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { Locale, TranslationSchema } from "@/locales/types";
import { en } from "@/locales/en";
import { th } from "@/locales/th";
import { lo } from "@/locales/lo";

const dictionaries: Record<Locale, TranslationSchema> = {
  en,
  th,
  lo,
};

const STORAGE_KEY = "nx_portfolio_lang";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: TranslationSchema;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved && (saved === "en" || saved === "th" || saved === "lo")) {
        setLocaleState(saved);
      }
    } catch {
      // localStorage unavailable or restricted
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // ignore storage write errors
    }
  };

  const dictionary = useMemo(() => dictionaries[locale] || dictionaries.en, [locale]);

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: unknown = dictionary;
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        current = undefined;
        break;
      }
    }

    if (typeof current === "string") {
      return current;
    }

    // Fallback to English dictionary
    let fallback: unknown = dictionaries.en;
    for (const key of keys) {
      if (fallback && typeof fallback === "object" && key in fallback) {
        fallback = (fallback as Record<string, unknown>)[key];
      } else {
        fallback = undefined;
        break;
      }
    }

    if (typeof fallback === "string") {
      return fallback;
    }

    return path;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dictionary, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
