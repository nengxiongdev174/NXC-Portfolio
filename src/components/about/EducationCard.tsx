"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function EducationCard(): JSX.Element {
  const { dictionary } = useLanguage();
  const { education } = dictionary.about;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-5 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-md dark:border-white/8 dark:bg-zinc-900/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -3, borderColor: "rgba(59,130,246,0.4)" }}
    >
      {/* Corner brackets */}
      <div className="absolute top-2.5 left-2.5 h-3 w-3 border-t border-l border-nx-blue/40" />
      <div className="absolute top-2.5 right-2.5 h-3 w-3 border-t border-r border-nx-blue/40" />
      <div className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l border-nx-blue/40" />
      <div className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b border-r border-nx-blue/40" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-nx-blue/10 text-nx-blue dark:bg-nx-blue/20">
            <GraduationCap size={18} />
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-nx-blue">
              // ACADEMIC_BACKGROUND
            </span>
            <h4 className="text-sm font-semibold text-foreground">
              {education.title}
            </h4>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground dark:border-white/10 dark:bg-white/5">
          <Calendar size={10} />
          {education.graduatedYear}
        </span>
      </div>

      {/* Content */}
      <div className="mt-2 space-y-1.5">
        <div className="flex items-start gap-2">
          <Award size={14} className="mt-0.5 shrink-0 text-nx-blue" />
          <p className="text-xs font-semibold text-foreground leading-snug">
            {education.degree}
          </p>
        </div>
        <p className="pl-5 text-xs text-muted-foreground leading-relaxed">
          {education.institution}
        </p>
      </div>
    </motion.div>
  );
}

export default EducationCard;
