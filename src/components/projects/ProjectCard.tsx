"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { type Project } from "@/data/projects";
import { ExternalLink, GitBranch } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): JSX.Element {
  const { locale, t } = useLanguage();

  const title =
    locale === "th"
      ? project.titleTh
      : locale === "lo"
      ? project.titleLo
      : project.titleEn;

  const description =
    locale === "th"
      ? project.descriptionTh
      : locale === "lo"
      ? project.descriptionLo
      : project.descriptionEn;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card/90 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-md dark:border-white/8 dark:bg-zinc-900/60"
      whileHover={{ y: -4, borderColor: "rgba(147,51,234,0.4)" }}
    >
      {/* Thumbnail area */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${project.accent}33 1px, transparent 1px), linear-gradient(90deg, ${project.accent}33 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Floating orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full blur-2xl"
          style={{ backgroundColor: `${project.accent}40` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Year badge */}
        <div className="absolute top-3 right-3 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-sm dark:border-white/10 dark:bg-black/40 dark:text-zinc-400">
          {project.year}
        </div>

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 rounded-full px-2.5 py-1 font-mono text-[10px] backdrop-blur-sm"
          style={{
            backgroundColor: `${project.accent}22`,
            color: project.accent,
            border: `1px solid ${project.accent}44`,
          }}
        >
          {project.category}
        </div>

        {/* Hover overlay with links */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={12} /> {t("projects.liveDemo")}
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm cursor-pointer"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <GitBranch size={12} /> {t("projects.sourceCode")}
            </motion.a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="font-mono text-[10px] tracking-widest text-zinc-400">
              // PRIVATE PROJECT
            </span>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-1 font-semibold text-foreground group-hover:text-nx-purple transition-colors duration-200">
          {title}
        </h3>
        {locale !== "en" && (
          <p className="mb-1 font-mono text-[11px] text-muted-foreground">{project.titleEn}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground dark:border-white/8 dark:bg-white/4"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
