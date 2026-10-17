"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";
import { ExperienceCard } from "./ExperienceCard";
import { CvDownloadActions } from "./CvDownloadActions";

export function Experience(): JSX.Element {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <motion.p
            className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.3em] text-nx-purple"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ◆ {t("experience.badge")} ◆
          </motion.p>

          <motion.h2
            className="mb-4 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("experience.headingPrefix")}{" "}
            <span className="gradient-text">
              {t("experience.headingHighlight")}
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("experience.subtitle")}
          </motion.p>

          <CvDownloadActions />
        </div>

        {/* Timeline Spine & Cards */}
        <div className="relative mt-12">
          {/* Vertical central glowing spine */}
          <div
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 opacity-70"
            style={{
              background:
                "linear-gradient(180deg, #9333ea 0%, #3b82f6 50%, #10b981 100%)",
              boxShadow: "0 0 12px rgba(147,51,234,0.5)",
            }}
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
