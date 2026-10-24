"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

interface RoleCardProps {
  role: {
    emoji: string;
    name: string;
    desc: string;
  };
  index: number;
}

export function RoleCard({ role, index }: RoleCardProps): JSX.Element {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-border bg-card/90 p-5 backdrop-blur-sm shadow-xs transition-all duration-300 hover:shadow-md dark:border-white/8 dark:bg-zinc-900/60"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -3, borderColor: "rgba(147,51,234,0.4)" }}
    >
      {/* Spinning rings */}
      <div className="relative mb-4 h-14 w-14">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(147,51,234,0.2)",
            borderTopColor: "rgba(147,51,234,0.6)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-1.5 rounded-full"
          style={{
            border: "1px solid rgba(59,130,246,0.15)",
            borderRightColor: "rgba(59,130,246,0.5)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-2xl">
          {role.emoji}
        </div>
      </div>

      <h4 className="mb-1 text-sm font-semibold text-foreground group-hover:text-nx-purple transition-colors">
        {role.name}
      </h4>
      <p className="text-xs leading-relaxed text-muted-foreground">{role.desc}</p>
    </motion.div>
  );
}
