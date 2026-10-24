"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function BioCard(): JSX.Element {
  const { dictionary, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card/90 p-8 backdrop-blur-sm shadow-xs transition-all duration-300 dark:border-white/8 dark:bg-zinc-900/60">
        <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-nx-purple/40" />
        <div className="absolute top-3 right-3 h-4 w-4 border-t border-r border-nx-purple/40" />
        <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-nx-purple/40" />
        <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-nx-purple/40" />

        <p className="mb-4 font-mono text-[9px] tracking-[0.3em] text-nx-purple uppercase">
          {t("about.bioCardTitle")}
        </p>

        {/* Name display */}
        <div className="mb-5">
          <div className="shimmer-text mb-1 text-xl font-black tracking-tight">
            Nengxiong WANGTOUAXIONG
          </div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Full-Stack Developer · Designer · Builder
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {t("about.bioP1")}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {t("about.bioP2")}
        </p>

        {/* Highlights */}
        <div className="mt-6 space-y-3">
          {dictionary.about.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <span className="mt-0.5 text-xs text-nx-purple">{h.icon}</span>
              <div>
                <span className="text-sm font-semibold text-foreground">{h.title}</span>
                <span className="ml-2 text-sm text-muted-foreground">— {h.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
