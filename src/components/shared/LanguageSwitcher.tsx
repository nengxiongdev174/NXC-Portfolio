"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/locales/types";

export interface LanguageSwitcherProps {
  className?: string;
  isMobile?: boolean;
}

const languages: Array<{ code: Locale; label: string; name: string }> = [
  { code: "en", label: "EN", name: "English" },
  { code: "th", label: "TH", name: "ไทย" },
  { code: "lo", label: "LO", name: "ລາວ" },
];

export function LanguageSwitcher({
  className = "",
  isMobile = false,
}: LanguageSwitcherProps): JSX.Element {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`relative inline-flex items-center rounded-full border border-border bg-card/80 p-1 backdrop-blur-md shadow-xs dark:border-white/10 dark:bg-zinc-950/80 ${className}`}
    >
      {languages.map((lang) => {
        const isActive = locale === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLocale(lang.code)}
            aria-pressed={isActive}
            title={lang.name}
            className={`relative z-10 flex items-center justify-center rounded-full font-mono font-medium transition-colors duration-200 cursor-pointer ${
              isMobile
                ? "px-3.5 py-1.5 text-xs"
                : "px-2.5 py-1 text-[11px]"
            } ${
              isActive
                ? "text-white font-semibold"
                : "text-muted-foreground hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            {/* Sliding highlight indicator */}
            {isActive && (
              <motion.div
                layoutId={isMobile ? "active-lang-mobile" : "active-lang-desktop"}
                className="absolute inset-0 rounded-full bg-linear-to-r from-nx-purple to-nx-blue shadow-md shadow-nx-purple/30"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-20 tracking-wider">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
