"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,
  left: (i * 37 + 13) % 97,
  top: (i * 53 + 7) % 91,
  delay: (i * 0.31) % 4,
  duration: 3 + (i * 0.7) % 3,
}));

function GlitchText({ text }: { text: string }): JSX.Element {
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

function ScanLine(): JSX.Element {
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

const stats = [
  { value: "50+", label: "ໂປຣເຈັກສຳເລັດ" },
  { value: "3+", label: "ປີປະສົບການ" },
  { value: "10+", label: "Tech Stack" },
  { value: "4.9", label: "ຄະແນນສະເລ່ຍ" },
];

export default function Hero(): JSX.Element {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="cyber-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.12),transparent_65%)]" />

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

      {/* HUD corner decorations */}
      <div className="absolute top-24 left-6 hidden opacity-40 md:block">
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
      <div className="absolute top-24 right-6 hidden opacity-40 md:block">
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

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-nx-purple"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{ y: [-15, 15, -15], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.3em] text-nx-purple/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ◆ Full-Stack Developer & Designer ◆
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
          WANGTOUAXIONG
        </motion.h2>

        <motion.p
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          ນັກພັດທະນາ ແລະ ນັກອອກແບບທີ່ຫຼົງໄຫຼໃນ digital creation —
          ສ້າງທຸກ idea ໃຫ້ກາຍເປັນ product ທີ່ໃຊ້ງານໄດ້ຈິງ
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#ຜົນງານ"
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-nx-purple to-nx-blue px-8 py-4 text-base font-semibold text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(147,51,234,0.5)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            ເບິ່ງຜົນງານ
          </motion.a>
          <motion.a
            href="#ຕິດຕໍ່"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(147,51,234,0.4)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            ຕິດຕໍ່ຂ້ອຍ
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative rounded-xl border border-white/8 bg-white/3 p-4 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
              whileHover={{ borderColor: "rgba(147,51,234,0.3)", backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div className="shimmer-text text-2xl font-black">{stat.value}</div>
              <div className="mt-1 text-xs text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">SCROLL</span>
        <motion.div
          className="h-8 w-px"
          style={{ background: "linear-gradient(to bottom, rgba(147,51,234,0.6), transparent)" }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
