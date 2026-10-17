"use client";

import { motion } from "framer-motion";

const LETTERS = "CREATIONS".split("");

export interface LogoBrandProps {
  href?: string;
  animateOnView?: boolean;
}

export function LogoBrand({ href = "#", animateOnView = false }: LogoBrandProps) {
  return (
    <motion.a
      href={href}
      className="flex items-baseline gap-2"
      whileHover={{ filter: "drop-shadow(0 0 14px rgba(147,51,234,0.6))" }}
      transition={{ duration: 0.2 }}
    >
      {/* NX — shimmer + periodic glitch */}
      <span className="relative inline-block">
        <span className="shimmer-text text-2xl font-black tracking-tight">NX</span>

        <motion.span
          aria-hidden
          className="absolute inset-0 text-cyan-400 text-2xl font-black tracking-tight"
          style={{ clipPath: "inset(15% 0 55% 0)" }}
          animate={{ x: [0, -4, 2, 0], opacity: [0, 1, 0.8, 0] }}
          transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 5.2, ease: "linear" }}
        />
        <motion.span
          aria-hidden
          className="absolute inset-0 text-purple-400 text-2xl font-black tracking-tight"
          style={{ clipPath: "inset(55% 0 15% 0)" }}
          animate={{ x: [0, 4, -2, 0], opacity: [0, 1, 0.8, 0] }}
          transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 5.2, delay: 0.08, ease: "linear" }}
        />
      </span>

      {/* CREATIONS — letter-by-letter stagger */}
      <span className="flex font-mono text-[11px]" style={{ letterSpacing: "0.3em" }}>
        {LETTERS.map((letter, i) =>
          animateOnView ? (
            <motion.span
              key={i}
              className="gradient-text"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          ) : (
            <motion.span
              key={i}
              className="gradient-text"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.07, ease: "easeOut" }}
            >
              {letter}
            </motion.span>
          )
        )}
      </span>
    </motion.a>
  );
}

export default LogoBrand;
