"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { type ExperienceItem } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}): JSX.Element {
  const { locale, t } = useLanguage();

  const role =
    locale === "th"
      ? item.roleTh
      : locale === "lo"
      ? item.roleLo
      : item.roleEn;

  const description =
    locale === "th"
      ? item.descriptionTh
      : locale === "lo"
      ? item.descriptionLo
      : item.descriptionEn;

  const highlights =
    locale === "th"
      ? item.highlightsTh
      : locale === "lo"
      ? item.highlightsLo
      : item.highlightsEn;

  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Spacer for desktop 2-column alternating layout */}
      <div className="hidden md:block w-1/2" />

      {/* Center glowing node on the timeline */}
      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <div
          className="relative flex h-10 w-10 items-center justify-center rounded-full border bg-zinc-950 shadow-lg"
          style={{
            borderColor: item.accentColor,
            boxShadow: `0 0 20px ${item.accentColor}60`,
          }}
        >
          {item.periodType === "current" && (
            <motion.div
              className="absolute -inset-1 rounded-full opacity-60"
              style={{ backgroundColor: item.accentColor }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.1, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <Briefcase size={16} style={{ color: item.accentColor }} />
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        className="ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-1/2"
        initial={{ opacity: 0, x: isEven ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      >
        <motion.div
          className="group relative overflow-hidden rounded-xl border border-white/8 bg-zinc-900/70 p-6 md:p-7 backdrop-blur-sm transition-all duration-300"
          whileHover={{
            y: -4,
            borderColor: `${item.accentColor}55`,
            backgroundColor: "rgba(24,24,27,0.85)",
            boxShadow: `0 12px 30px -10px ${item.accentColor}25`,
          }}
        >
          {/* Cyberpunk corner accents */}
          <div
            className="absolute top-2.5 left-2.5 h-3 w-3 border-t border-l"
            style={{ borderColor: `${item.accentColor}60` }}
          />
          <div
            className="absolute top-2.5 right-2.5 h-3 w-3 border-t border-r"
            style={{ borderColor: `${item.accentColor}60` }}
          />
          <div
            className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b border-l"
            style={{ borderColor: `${item.accentColor}60` }}
          />
          <div
            className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b border-r"
            style={{ borderColor: `${item.accentColor}60` }}
          />

          {/* Period Badge & Status */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] font-medium backdrop-blur-sm"
              style={{
                backgroundColor: `${item.accentColor}18`,
                color: item.accentColor,
                border: `1px solid ${item.accentColor}40`,
              }}
            >
              <Calendar size={12} />
              {item.period}
            </span>

            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-zinc-500">
              <MapPin size={12} />
              {item.location}
            </span>
          </div>

          {/* Role and Company */}
          <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-white">
            {role}
          </h3>
          <p
            className="mt-0.5 font-mono text-xs font-semibold tracking-wide"
            style={{ color: item.accentColor }}
          >
            {item.company}
          </p>

          {/* Summary */}
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>

          {/* Highlights */}
          <div className="mt-4 border-t border-white/5 pt-4">
            <p className="mb-2.5 font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
              // {t("experience.keyAchievements")}
            </p>
            <ul className="space-y-2">
              {highlights.map((highlight, hIdx) => (
                <li
                  key={hIdx}
                  className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 shrink-0"
                    style={{ color: item.accentColor }}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/6 bg-white/3 px-2.5 py-0.5 font-mono text-[10px] text-zinc-400 transition-colors group-hover:border-white/10 group-hover:text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom subtle glow line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-20 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
