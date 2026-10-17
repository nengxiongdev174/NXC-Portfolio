"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

export function ScanLine(): JSX.Element {
  return (
    <motion.div
      className="pointer-events-none absolute left-0 right-0 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(147,51,234,0.5), rgba(59,130,246,0.5), transparent)",
      }}
      animate={{ top: ["0%", "100%"] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    />
  );
}
