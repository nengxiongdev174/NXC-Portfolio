"use client";

import type { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import { Download, ExternalLink } from "lucide-react";

interface CvItem {
  code: "en" | "th" | "lo";
  label: string;
  nativeLabel: string;
  href: string;
  downloadName: string;
}

const cvList: CvItem[] = [
  {
    code: "en",
    label: "English CV",
    nativeLabel: "International Edition",
    href: "/nengxiong-wtx-cv-en.pdf",
    downloadName: "Nengxiong_CV_EN.pdf",
  },
  {
    code: "th",
    label: "Thai CV",
    nativeLabel: "ฉบับภาษาไทย",
    href: "/nengxiong-wtx-cv-th.pdf",
    downloadName: "Nengxiong_CV_TH.pdf",
  },
  {
    code: "lo",
    label: "Lao CV",
    nativeLabel: "ສະບັບພາສາລາວ",
    href: "/nengxiong-wtx-cv-la.pdf",
    downloadName: "Nengxiong_CV_LA.pdf",
  },
];

export function CvDownloadActions(): JSX.Element {
  const { t } = useLanguage();
  const [selectedCv, setSelectedCvState] = useState<"en" | "th" | "lo">("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nx_portfolio_selected_cv") as
        | "en"
        | "th"
        | "lo"
        | null;
      if (saved && (saved === "en" || saved === "th" || saved === "lo")) {
        setSelectedCvState(saved);
      }
    } catch {
      // ignore storage access errors
    }
  }, []);

  const selectCv = (code: "en" | "th" | "lo") => {
    setSelectedCvState(code);
    try {
      localStorage.setItem("nx_portfolio_selected_cv", code);
    } catch {
      // ignore storage access errors
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid grid-cols-1 gap-4 py-2 sm:grid-cols-3">
        {cvList.map((cv, index) => {
          const isSelected = selectedCv === cv.code;
          return (
            <motion.div
              key={cv.code}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                scale: isSelected ? 1.03 : 1,
                y: isSelected ? -4 : 0,
              }}
              whileTap={{ scale: 0.99 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 26,
              }}
              onClick={() => selectCv(cv.code)}
              className={`relative overflow-hidden rounded-2xl border p-4 backdrop-blur-md transition-colors duration-300 text-left flex flex-col justify-between cursor-pointer select-none ${
                isSelected
                  ? "z-10 border-nx-purple/70 bg-card/95 shadow-xl shadow-nx-purple/20 ring-2 ring-nx-purple/50 dark:bg-zinc-900/95"
                  : "z-0 border-border bg-card/75 hover:border-nx-purple/40 hover:bg-card shadow-xs dark:border-white/8 dark:bg-zinc-950/60 dark:hover:bg-zinc-900/50"
              }`}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="absolute top-0 right-0 h-10 w-10 overflow-hidden pointer-events-none"
                  >
                    <div className="absolute top-2 -right-5 w-16 rotate-45 bg-linear-to-r from-nx-purple to-nx-blue py-0.5 text-center text-[8px] font-bold text-white shadow-xs tracking-wider">
                      ACTIVE
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                      isSelected
                        ? "bg-linear-to-br from-nx-purple to-nx-blue text-white shadow-xs"
                        : "bg-muted text-foreground/80 dark:bg-white/10 dark:text-zinc-300"
                    }`}
                  >
                    {cv.code.toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-foreground leading-tight truncate">
                      {cv.label}
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-medium truncate">
                      {cv.nativeLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: View & Download */}
              <div className="mt-4 flex items-center gap-2 pt-3 border-t border-border dark:border-white/5">
                <motion.a
                  href={cv.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    selectCv(cv.code);
                  }}
                  title={`${t("experience.viewCv")} (${cv.label})`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border bg-muted/60 px-2.5 py-2 text-xs font-medium text-foreground backdrop-blur-xs transition-colors hover:border-nx-purple/40 hover:bg-muted dark:border-white/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-nx-purple/40 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={13} />
                  <span>{t("experience.viewCv")}</span>
                </motion.a>

                <motion.a
                  href={cv.href}
                  download={cv.downloadName}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectCv(cv.code);
                  }}
                  title={`${t("experience.downloadCv")} (${cv.label})`}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-linear-to-r from-nx-purple to-nx-blue text-white shadow-md shadow-nx-purple/25 hover:brightness-110"
                      : "bg-muted text-foreground hover:bg-muted/80 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={13} />
                  <span>{t("experience.downloadCv")}</span>
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default CvDownloadActions;

