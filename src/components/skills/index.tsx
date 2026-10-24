"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/context/LanguageContext";
import { SkillGroupCard } from "./SkillGroupCard";

export function Skills(): JSX.Element {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.p
            className="mb-6 tracking-[0.3em] text-nx-purple uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ◆ {t("skills.badge")} ◆
          </motion.p>
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("skills.headingPrefix")}{" "}
            <span className="gradient-text">{t("skills.headingHighlight")}</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-lg text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("skills.subtitle")}
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
