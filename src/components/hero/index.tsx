"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { GlitchText } from "./GlitchText";
import { ScanLine } from "./ScanLine";
import { HeroHud } from "./HeroHud";
import { HeroStats } from "./HeroStats";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: (i * 37 + 13) % 97,
  top: (i * 53 + 7) % 91,
  delay: (i * 0.31) % 4,
  duration: 3 + (i * 0.7) % 3,
}));

export function Hero(): JSX.Element {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="cyber-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.12),transparent_65%)]" />

      {/* Ambient background glows */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-nx-purple/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-nx-blue/15 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <ScanLine />
      <HeroHud />

      {/* Floating cyber particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-nx-purple"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: [-15, 15, -15], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main hero content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.3em] text-nx-purple/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ◆ {t("hero.badge")} ◆
        </motion.p>

        <motion.h1
          className="mb-3 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <GlitchText text="Nengxiong" />
        </motion.h1>

        <motion.h2
          className="mb-6 text-2xl font-semibold tracking-widest text-zinc-300 sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
        >
          {t("hero.subtitle")}
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-nx-purple to-nx-blue px-8 py-4 text-base font-semibold text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147,51,234,0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {t("hero.viewProjects")}
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(147,51,234,0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {t("hero.contactMe")}
          </motion.a>
        </motion.div>

        <HeroStats />
      </div>
    </section>
  );
}

export default Hero;
