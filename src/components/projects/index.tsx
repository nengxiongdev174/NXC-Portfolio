"use client";

import type { JSX } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type ProjectCategoryKey } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { CategoryFilter } from "./CategoryFilter";

export function Projects(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryKey>("all");
  const { dictionary, t } = useLanguage();

  const filterOptions: Array<{ key: ProjectCategoryKey; label: string }> = [
    { key: "all", label: dictionary.projects.categories.all },
    { key: "web", label: dictionary.projects.categories.web },
    { key: "mobile", label: dictionary.projects.categories.mobile },
    { key: "design", label: dictionary.projects.categories.design },
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.07),transparent_50%)]" />

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
            ◆ {t("projects.badge")} ◆
          </motion.p>
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("projects.headingPrefix")}{" "}
            <span className="gradient-text">{t("projects.headingHighlight")}</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-lg text-sm text-zinc-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>

        {/* Category filter */}
        <CategoryFilter
          categories={filterOptions}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Projects grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
