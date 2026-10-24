"use client";

import type { JSX } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { projects, type ProjectCategoryKey } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCard } from "./ProjectCard";
import { CategoryFilter } from "./CategoryFilter";

const INITIAL_LIMIT = 6;

export function Projects(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryKey>("all");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
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

  const visibleProjects = isExpanded ? filtered : filtered.slice(0, INITIAL_LIMIT);
  const hasMore = filtered.length > INITIAL_LIMIT;

  const handleSelectCategory = (cat: ProjectCategoryKey) => {
    setActiveCategory(cat);
    setIsExpanded(false);
  };

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
            className="mx-auto max-w-lg text-sm text-muted-foreground"
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
          onSelectCategory={handleSelectCategory}
        />

        {/* Projects grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expand / Show More Button */}
        {hasMore && (
          <motion.div
            layout
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="group relative inline-flex items-center gap-2.5 rounded-full border border-border bg-card/85 px-6 py-3 font-mono text-xs font-semibold text-foreground backdrop-blur-md shadow-xs transition-all duration-300 hover:border-nx-purple/60 hover:bg-card hover:shadow-md hover:shadow-nx-purple/15 active:scale-95 dark:border-white/10 dark:bg-zinc-900/80 cursor-pointer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>
                {isExpanded
                  ? t("projects.showLess")
                  : `${t("projects.showMore")} (${filtered.length})`}
              </span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${
                  isExpanded
                    ? "rotate-180 text-nx-purple"
                    : "text-muted-foreground group-hover:translate-y-0.5"
                }`}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
