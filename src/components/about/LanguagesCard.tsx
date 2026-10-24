"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function LanguagesCard(): JSX.Element {
  const { dictionary } = useLanguage();
  const { languages } = dictionary.about;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-5 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-md dark:border-white/8 dark:bg-zinc-900/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ y: -3, borderColor: "rgba(147,51,234,0.4)" }}
    >
      {/* Corner brackets */}
      <div className="absolute top-2.5 left-2.5 h-3 w-3 border-t border-l border-nx-purple/40" />
      <div className="absolute top-2.5 right-2.5 h-3 w-3 border-t border-r border-nx-purple/40" />
      <div className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-nx-purple/40" />
      <div className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b border-r border-nx-purple/40" />

      {/* Header */}
      <div className="flex items-center gap-2.5 mb-3.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-nx-purple/10 text-nx-purple dark:bg-nx-purple/20">
          <Globe size={18} />
        </div>
        <div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-nx-purple">
            // LINGUISTIC_CAPABILITIES
          </span>
          <h4 className="text-sm font-semibold text-foreground">
            {languages.title}
          </h4>
        </div>
      </div>

      {/* Languages List with 10-dot Rating System from CV */}
      <div className="space-y-2.5">
        {languages.items.map((lang) => (
          <div key={lang.name} className="flex items-center justify-between gap-3 text-xs">
            <div className="min-w-24">
              <span className="font-medium text-foreground">{lang.name}</span>
              <span className="block font-mono text-[10px] text-muted-foreground">
                {lang.level}
              </span>
            </div>

            {/* 10 dots representation */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 10 }).map((_, dotIdx) => {
                const isFilled = dotIdx < lang.score;
                return (
                  <span
                    key={dotIdx}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      isFilled
                        ? "bg-nx-purple shadow-xs shadow-nx-purple/40 dark:bg-purple-400"
                        : "bg-muted-foreground/20 dark:bg-white/10"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default LanguagesCard;
