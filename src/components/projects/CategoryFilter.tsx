"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { type ProjectCategoryKey } from "@/data/projects";

interface CategoryFilterProps {
  categories: Array<{ key: ProjectCategoryKey; label: string }>;
  activeCategory: ProjectCategoryKey;
  onSelectCategory: (key: ProjectCategoryKey) => void;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps): JSX.Element {
  return (
    <motion.div
      className="mb-10 flex flex-wrap items-center justify-center gap-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {categories.map((cat) => (
        <motion.button
          key={cat.key}
          onClick={() => onSelectCategory(cat.key)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeCategory === cat.key
              ? "bg-linear-to-r from-nx-purple to-nx-blue text-white shadow-lg shadow-nx-purple/20"
              : "border border-white/10 bg-white/5 text-zinc-400 hover:border-nx-purple/30 hover:text-white"
          }`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {cat.label}
        </motion.button>
      ))}
    </motion.div>
  );
}
