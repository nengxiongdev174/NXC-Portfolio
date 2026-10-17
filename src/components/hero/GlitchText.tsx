"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

export function GlitchText({ text }: { text: string }): JSX.Element {
  return (
    <span className="relative inline-block">
      <span className="gradient-text">{text}</span>
      <motion.span
        aria-hidden
        className="absolute inset-0 text-cyan-400"
        style={{ clipPath: "inset(0 0 60% 0)" }}
        animate={{
          x: [0, -4, 3, 0],
          clipPath: [
            "inset(0 0 60% 0)",
            "inset(20% 0 40% 0)",
            "inset(60% 0 10% 0)",
            "inset(0 0 60% 0)",
          ],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 4.6, ease: "linear" }}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute inset-0 text-purple-400"
        style={{ clipPath: "inset(40% 0 30% 0)" }}
        animate={{
          x: [0, 5, -3, 0],
          clipPath: [
            "inset(40% 0 30% 0)",
            "inset(10% 0 70% 0)",
            "inset(80% 0 5% 0)",
            "inset(40% 0 30% 0)",
          ],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 4.6, delay: 0.05, ease: "linear" }}
      >
        {text}
      </motion.span>
    </span>
  );
}
