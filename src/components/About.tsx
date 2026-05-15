"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";

const roles = [
  { emoji: "⚡", name: "Full-Stack Developer", desc: "ພັດທະນາ web app ຄົບຄ້ວນ ທັ້ງ frontend ແລະ backend ດ້ວຍ React, Next.js ແລະ Node.js" },
  { emoji: "🎨", name: "UI/UX Designer", desc: "ອອກແບບ interface ທີ່ສວຍງາມ ໃຊ້ງ່າຍ ແລະ ສ້າງ experience ທີ່ດີ ດ້ວຍ Figma" },
  { emoji: "📱", name: "Mobile Developer", desc: "ສ້າງ mobile app ສຳລັບທັ້ງ iOS ແລະ Android ດ້ວຍ React Native" },
  { emoji: "🚀", name: "Founder @ NX CREATIONS", desc: "ຜູ້ກໍ່ຕັ້ງ NX CREATIONS ສຳດັບ digital studio ສ້າງ solutions ທີ່ມີຄຸນນະພາບ" },
];

const highlights = [
  { icon: "◆", title: "Passionate", desc: "ຮັກໃນການ code ແລະ design — ທຸກໂປຣເຈັກຄືໂອກາດໃຫ້ຮຽນຮູ້ສິ່ງໃໝ່" },
  { icon: "◆", title: "Detail-oriented", desc: "ໃສ່ໃຈທຸກ pixel ແລະ ທຸກ function — ຄຸນນະພາບຕ້ອງດີເທົ່ານັ້ນ" },
  { icon: "◆", title: "Problem Solver", desc: "ສິ່ງທ້າທາຍ = ໂອກາດ — ຫາທາງອອກຈາກທຸກ challenge ສະເໝີ" },
];

export default function About(): JSX.Element {
  return (
    <section id="ກ່ຽວກັບ" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.06),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.p
            className="mb-6 tracking-[0.3em] text-nx-purple uppercase"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ◆ ກ່ຽວກັບຂ້ອຍ ◆
          </motion.p>
          <motion.h2
            className="mb-4 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            ຂ້ອຍ<span className="gradient-text">ຄືໃຜ</span>
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left — personal bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-xl border border-white/8 bg-zinc-900/60 p-8 backdrop-blur-sm">
              <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-nx-purple/40" />
              <div className="absolute top-3 right-3 h-4 w-4 border-t border-r border-nx-purple/40" />
              <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-nx-purple/40" />
              <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-nx-purple/40" />

              <p className="mb-4 font-mono text-[9px] tracking-[0.3em] text-nx-purple uppercase">
                // MY_STORY
              </p>

              {/* Name display */}
              <div className="mb-5">
                <div className="shimmer-text mb-1 text-xl font-black tracking-tight">
                  Nengxiong WANGTOUAXIONG
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
                  Full-Stack Developer · Designer · Builder
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                ສະບາຍດີ! ຂ້ອຍຊື່ <span className="text-white font-medium">Nengxiong</span> — developer ແລະ designer
                ທີ່ຫຼົງໄຫຼໃນການສ້າງ digital experiences ທີ່ສວຍງາມ ແລະ ໃຊ້ງານໄດ້ຈິງ
              </p>
              <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                ດ້ວຍປະສົບການ 3+ ປີໃນ web development ຂ້ອຍຍັງເປັນ founder ຂອງ
                <span className="text-nx-purple font-medium"> NX CREATIONS</span> — digital studio
                ທີ່ຊ່ວຍທຸລະກິດ ແລະ ບຸກຄົນ ສ້າງ digital presence ທີ່ເຂັ້ມແຂງ
              </p>

              {/* Highlights */}
              <div className="mt-6 space-y-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  >
                    <span className="mt-0.5 text-xs text-nx-purple">{h.icon}</span>
                    <div>
                      <span className="text-sm font-semibold text-white">{h.title}</span>
                      <span className="ml-2 text-sm text-zinc-500">— {h.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — roles */}
          <div className="grid gap-4 sm:grid-cols-2">
            {roles.map((role, i) => (
              <motion.div
                key={role.name}
                className="group relative overflow-hidden rounded-xl border border-white/8 bg-zinc-900/60 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, borderColor: "rgba(147,51,234,0.3)" }}
              >
                {/* Spinning rings */}
                <div className="relative mb-4 h-14 w-14">
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "1px solid rgba(147,51,234,0.2)", borderTopColor: "rgba(147,51,234,0.6)" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-1.5 rounded-full"
                    style={{ border: "1px solid rgba(59,130,246,0.15)", borderRightColor: "rgba(59,130,246,0.5)" }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-2xl">
                    {role.emoji}
                  </div>
                </div>

                <h4 className="mb-1 text-sm font-semibold text-white group-hover:text-nx-purple transition-colors">
                  {role.name}
                </h4>
                <p className="text-xs leading-relaxed text-zinc-500">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
