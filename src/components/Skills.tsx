"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }): JSX.Element {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="font-mono text-xs text-zinc-500">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

function SkillGroupCard({ group, index }: { group: typeof skillGroups[0]; index: number }): JSX.Element {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-white/8 bg-zinc-900/60 p-6 backdrop-blur-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ borderColor: `${group.color}44`, backgroundColor: "rgba(24,24,27,0.8)" }}
    >
      {/* Corner decoration */}
      <div className="absolute top-3 right-3 h-3 w-3 border-t border-r" style={{ borderColor: `${group.color}50` }} />
      <div className="absolute bottom-3 left-3 h-3 w-3 border-b border-l" style={{ borderColor: `${group.color}50` }} />

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
          style={{ backgroundColor: `${group.color}15`, border: `1px solid ${group.color}30` }}
        >
          {group.icon}
        </div>
        <div>
          <h3 className="font-semibold text-white">{group.category}</h3>
          <p className="font-mono text-[10px] tracking-widest text-zinc-600">
            {group.skills.length} SKILLS
          </p>
        </div>
      </div>

      {/* Skill bars */}
      <div>
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={group.color}
            index={i}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div
        className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: group.color }}
      />
    </motion.div>
  );
}

export default function Skills(): JSX.Element {
  return (
    <section id="ທັກສະ" className="relative px-6 py-24 md:py-32">
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
            ◆ ທັກສະ ◆
          </motion.p>
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ເຕັກໂນໂລຊີທີ່<span className="gradient-text">ເຮົາໃຊ້</span>
          </motion.h2>
          <motion.p
            className="mx-auto max-w-lg text-sm text-zinc-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stack ທີ່ເຮົາເລືອກໃຊ້ ລ້ວນຜ່ານການທົດສອບຈາກໂປຣເຈັກຈິງ
          </motion.p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Tech tags cloud */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mb-6 font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
            // ALSO FAMILIAR WITH
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "GraphQL", "Redis", "Prisma", "tRPC", "Zustand",
              "TanStack Query", "Jest", "Playwright", "Storybook", "Nx",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 font-mono text-xs text-zinc-500"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                whileHover={{ borderColor: "rgba(147,51,234,0.4)", color: "#c084fc" }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
