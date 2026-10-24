"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function BioCard(): JSX.Element {
  const { dictionary, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card/90 p-7 md:p-8 backdrop-blur-sm shadow-xs transition-all duration-300 dark:border-white/8 dark:bg-zinc-900/60">
        <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-nx-purple/40" />
        <div className="absolute top-3 right-3 h-4 w-4 border-t border-r border-nx-purple/40" />
        <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-nx-purple/40" />
        <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-nx-purple/40" />

        <p className="mb-4 font-mono text-[9px] tracking-[0.3em] text-nx-purple uppercase">
          {t("about.bioCardTitle")}
        </p>

        {/* Name display matching official CV */}
        <div className="mb-5">
          <div className="shimmer-text mb-1 text-2xl font-black tracking-tight">
            Nengxiong WANGTUANXIONG
          </div>
          <div className="font-mono text-xs tracking-[0.15em] text-muted-foreground uppercase">
            Full-Stack Developer & UX/UI Designer
          </div>
        </div>

        {/* Contact & Location Quick Pills */}
        <div className="mb-5 flex flex-wrap gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 font-mono text-[11px] text-muted-foreground dark:border-white/10 dark:bg-white/5">
            <MapPin size={12} className="text-nx-purple" />
            {dictionary.about.locationValue}
          </span>
          <a
            href="mailto:nengxiong.wtx195@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-nx-purple/50 hover:text-foreground dark:border-white/10 dark:bg-white/5"
          >
            <Mail size={12} className="text-nx-blue" />
            nengxiong.wtx195@gmail.com
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=8562077426238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-emerald-500/50 hover:text-foreground dark:border-white/10 dark:bg-white/5"
          >
            <Phone size={12} className="text-emerald-500" />
            +856 20 77 426 238
          </a>
        </div>

        {/* Bio Paragraphs */}
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {t("about.bioP1")}
        </p>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          {t("about.bioP2")}
        </p>

        {/* Personal Skills / Highlights (6 items from CV) */}
        <div className="border-t border-border pt-6 dark:border-white/5">
          <p className="mb-4 font-mono text-[10px] tracking-widest text-nx-purple uppercase">
            // PERSONAL_SKILLS
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {dictionary.about.highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="flex items-start gap-2.5 rounded-lg border border-border/50 bg-background/50 p-2.5 backdrop-blur-xs transition-colors hover:border-nx-purple/30 dark:border-white/5 dark:bg-white/5"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              >
                <span className="text-sm shrink-0">{h.icon}</span>
                <div className="min-w-0">
                  <span className="block text-xs font-semibold text-foreground truncate">
                    {h.title}
                  </span>
                  <span className="block text-[11px] leading-snug text-muted-foreground">
                    {h.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BioCard;
