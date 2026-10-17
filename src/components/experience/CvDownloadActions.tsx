"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Download, ExternalLink } from "lucide-react";

export function CvDownloadActions(): JSX.Element {
  const { t } = useLanguage();

  return (
    <motion.div
      className="flex flex-wrap items-center justify-center gap-3.5"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <motion.a
        href="/resume.pdf"
        download="Nengxiong_Resume.pdf"
        className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-nx-purple to-nx-blue px-6 py-3 text-xs md:text-sm font-semibold text-white shadow-lg shadow-nx-purple/25 cursor-pointer"
        whileHover={{
          scale: 1.04,
          boxShadow: "0 0 35px rgba(147,51,234,0.5)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        <Download size={15} />
        <span>{t("experience.downloadCv")}</span>
      </motion.a>

      <motion.a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs md:text-sm font-medium text-zinc-300 backdrop-blur-sm hover:border-nx-purple/40 hover:text-white cursor-pointer"
        whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.08)" }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
      >
        <ExternalLink size={14} />
        <span>{t("experience.viewCv")}</span>
      </motion.a>
    </motion.div>
  );
}
