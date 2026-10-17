"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

export function LoadingDots(): JSX.Element {
  return (
    <span className="inline-flex items-center gap-1.5">
      {[0, 0.18, 0.36].map((delay, i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}
