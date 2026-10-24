"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export interface ThemeToggleProps {
  className?: string;
  isMobile?: boolean;
}

export function ThemeToggle({
  className = "",
  isMobile = false,
}: ThemeToggleProps): JSX.Element {
  const { theme, toggleTheme, mounted } = useTheme();
  const { t } = useLanguage();

  const isDark = theme === "dark";
  const title = isDark ? t("theme.toggleToLight") : t("theme.toggleToDark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={title}
      title={title}
      className={`relative inline-flex items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur-md transition-colors duration-200 hover:bg-muted hover:text-foreground cursor-pointer shadow-xs ${
        isMobile ? "h-9 w-9" : "h-8 w-8"
      } ${className}`}
    >
      <span className="sr-only">{title}</span>
      {mounted ? (
        <motion.div
          key={theme}
          initial={{ rotate: -90, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-purple-400" />
          ) : (
            <Sun className="h-4 w-4 text-amber-500" />
          )}
        </motion.div>
      ) : (
        <div className="h-4 w-4 opacity-0" />
      )}
    </button>
  );
}

export default ThemeToggle;
