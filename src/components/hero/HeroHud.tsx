"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

export function HeroHud(): JSX.Element {
  return (
    <>
      {/* Top Left HUD */}
      <div className="absolute top-24 left-6 hidden opacity-40 md:block pointer-events-none">
        <div className="flex items-start gap-2 font-mono text-xs text-zinc-500">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-nx-purple"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              />
              <span className="tracking-widest">PORTFOLIO v1.0</span>
            </div>
            <span className="mt-0.5 tracking-widest text-zinc-600">NENGXIONG.DEV</span>
          </div>
          <div className="flex flex-col items-start gap-1 pt-0.5">
            <div className="h-px w-12 bg-nx-purple/40" />
            <div className="h-px w-6 bg-nx-blue/40" />
          </div>
        </div>
      </div>

      {/* Top Right HUD */}
      <div className="absolute top-24 right-6 hidden opacity-40 md:block pointer-events-none">
        <div className="flex items-start gap-2 font-mono text-xs text-zinc-500 flex-row-reverse">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-nx-blue"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.6 }}
              />
              <span className="tracking-widest">SHOWCASE ◆</span>
            </div>
            <span className="mt-0.5 tracking-widest text-zinc-600">DIGITAL WORKS</span>
          </div>
          <div className="flex flex-col items-end gap-1 pt-0.5">
            <div className="h-px w-12 bg-nx-purple/40 ml-auto" />
            <div className="h-px w-6 bg-nx-blue/40 ml-auto" />
          </div>
        </div>
      </div>
    </>
  );
}
