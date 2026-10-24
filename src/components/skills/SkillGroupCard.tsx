"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { type SkillGroup } from "@/data/skills";
import { SkillBar } from "./SkillBar";

export function SkillGroupCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}): JSX.Element {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl border border-border bg-card/90 p-6 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-md dark:border-white/8 dark:bg-zinc-900/60"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ borderColor: `${group.color}66`, scale: 1.01 }}
    >
      {/* Corner decoration */}
      <div
        className="absolute top-3 right-3 h-3 w-3 border-t border-r"
        style={{ borderColor: `${group.color}50` }}
      />
      <div
        className="absolute bottom-3 left-3 h-3 w-3 border-b border-l"
        style={{ borderColor: `${group.color}50` }}
      />

      {/* Header */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg text-lg"
          style={{ backgroundColor: `${group.color}15`, border: `1px solid ${group.color}30` }}
        >
          {group.icon}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{group.category}</h3>
          <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
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
