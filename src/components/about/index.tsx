"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { BioCard } from "./BioCard";
import { RoleCard } from "./RoleCard";
import { EducationCard } from "./EducationCard";
import { LanguagesCard } from "./LanguagesCard";

export function About(): JSX.Element {
  const { dictionary, t } = useLanguage();

  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.06),transparent_50%)]" />

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
            ◆ {t("about.badge")} ◆
          </motion.p>
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("about.headingPrefix")}{" "}
            <span className="gradient-text">{t("about.headingHighlight")}</span>
          </motion.h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left — Personal Bio */}
          <BioCard />

          {/* Right — Roles, Academic Education, and Languages */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {dictionary.about.roles.map((role, i) => (
                <RoleCard key={role.name} role={role} index={i} />
              ))}
            </div>

            <EducationCard />
            <LanguagesCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
