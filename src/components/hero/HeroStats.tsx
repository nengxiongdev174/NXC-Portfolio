"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function HeroStats(): JSX.Element {
  const { t } = useLanguage();

  const stats = [
    { value: "10+", label: t("hero.stats.projects") },
    { value: "2+", label: t("hero.stats.experience") },
    { value: "10+", label: t("hero.stats.techStack") },
    { value: "4.9", label: t("hero.stats.rating") },
  ];

  return (
    <motion.div
      className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 gap-3.5 sm:gap-6 sm:grid-cols-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.85 }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          className="relative rounded-xl border border-border bg-card/75 p-4 backdrop-blur-sm shadow-xs transition-colors dark:border-white/8 dark:bg-white/3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
          whileHover={{
            borderColor: "rgba(147,51,234,0.4)",
            scale: 1.02,
          }}
        >
          <div className="shimmer-text text-2xl font-black">{stat.value}</div>
          <div className="mt-1 text-xs text-muted-foreground font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
