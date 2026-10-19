"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
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
  const { t, locale } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
        {cvList.map((cv, index) => {
          const isCurrent = locale === cv.code;
          return (
            <motion.div
              key={cv.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className={`relative overflow-hidden rounded-2xl border p-4 backdrop-blur-md transition-all duration-300 text-left flex flex-col justify-between ${
                isCurrent
                  ? "border-nx-purple/60 bg-zinc-900/90 shadow-lg shadow-nx-purple/15 ring-1 ring-nx-purple/40"
                  : "border-white/8 bg-zinc-950/60 hover:border-white/20 hover:bg-zinc-900/50"
              }`}
            >
              {isCurrent && (
                <div className="absolute top-0 right-0 h-10 w-10 overflow-hidden pointer-events-none">
                  <div className="absolute top-2 -right-5 w-16 rotate-45 bg-linear-to-r from-nx-purple to-nx-blue py-0.5 text-center text-[8px] font-bold text-white shadow-xs tracking-wider">
                    ACTIVE
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                      isCurrent
                        ? "bg-linear-to-br from-nx-purple to-nx-blue text-white shadow-xs"
                        : "bg-white/10 text-zinc-300"
                    }`}
                  >
                    {cv.code.toUpperCase()}
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white leading-tight truncate">
                      {cv.label}
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-medium truncate">
                      {cv.nativeLabel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: View & Download */}
              <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/5">
                <motion.a
                  href={cv.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${t("experience.viewCv")} (${cv.label})`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-2 text-xs font-medium text-zinc-300 backdrop-blur-xs transition-colors hover:border-nx-purple/40 hover:bg-white/10 hover:text-white cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={13} />
                  <span>{t("experience.viewCv")}</span>
                </motion.a>

                <motion.a
                  href={cv.href}
                  download={cv.downloadName}
                  title={`${t("experience.downloadCv")} (${cv.label})`}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-white transition-all cursor-pointer ${
                    isCurrent
                      ? "bg-linear-to-r from-nx-purple to-nx-blue shadow-md shadow-nx-purple/25 hover:brightness-110"
                      : "bg-white/10 hover:bg-white/20"
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

