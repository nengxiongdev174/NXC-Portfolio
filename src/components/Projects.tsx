"use client";

import type { JSX } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, type Category } from "@/data/projects";
import { ExternalLink, GitBranch } from "lucide-react";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }): JSX.Element {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-white/8 bg-zinc-900/60 backdrop-blur-sm"
      whileHover={{ y: -4, borderColor: "rgba(147,51,234,0.3)" }}
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
        <div className="absolute top-3 right-3 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[10px] text-zinc-400 backdrop-blur-sm">
          {project.year}
        </div>

        {/* Category badge */}
        <div
          className="absolute top-3 left-3 rounded-full px-2.5 py-1 font-mono text-[10px] backdrop-blur-sm"
          style={{ backgroundColor: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}44` }}
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
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={12} /> Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <GitBranch size={12} /> GitHub
            </motion.a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="font-mono text-[10px] tracking-widest text-zinc-400">// PRIVATE PROJECT</span>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-1 font-semibold text-white group-hover:text-nx-purple transition-colors duration-200">
          {project.title}
        </h3>
        <p className="mb-1 text-xs text-zinc-500">{project.titleLao}</p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 font-mono text-[10px] text-zinc-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
        initial={{ scaleX: 0, opacity: 0 }}
        whileHover={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function Projects(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<Category>("ທັງໝົດ");

  const filtered = activeCategory === "ທັງໝົດ"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="ຜົນງານ" className="relative px-6 py-24 md:py-32">
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
            ◆ ຜົນງານຂອງເຮົາ ◆
          </motion.p>
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ໂປຣເຈັກທີ່<span className="gradient-text">ສ້າງສັນ</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-lg text-sm text-zinc-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ຜົນງານຈິງທີ່ເຮົາໄດ້ສ້າງດ້ວຍ passion ແລະ ຄວາມຮູ້ຄວາມສາມາດ
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-linear-to-r from-nx-purple to-nx-blue text-white shadow-lg shadow-nx-purple/20"
                  : "border border-white/10 bg-white/5 text-zinc-400 hover:border-nx-purple/30 hover:text-white"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
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
