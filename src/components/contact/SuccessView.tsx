"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function SuccessView({ onReset }: { onReset: () => void }): JSX.Element {
  const { t } = useLanguage();

  return (
    <motion.div
      className="py-6 text-center"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative mx-auto mb-6 h-24 w-24">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px solid rgba(147,51,234,0.2)",
            borderTopColor: "rgba(147,51,234,0.8)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2.5 rounded-full"
          style={{
            border: "1px solid rgba(59,130,246,0.15)",
            borderRightColor: "rgba(59,130,246,0.7)",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.svg
            className="h-9 w-9 text-nx-purple"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 220, damping: 14 }}
          >
            <motion.path
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            />
          </motion.svg>
        </div>
      </div>

      <motion.p
        className="mb-2 font-mono text-[9px] tracking-[0.3em] text-nx-purple uppercase"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        // TRANSMISSION COMPLETE
      </motion.p>
      <p className="text-lg font-semibold text-white">{t("contact.submitSuccess")}</p>
      <p className="mt-1 text-sm text-zinc-500">
        {t("contact.quickResponse")}
      </p>

      <motion.button
        className="mt-8 font-mono text-[9px] tracking-[0.25em] text-zinc-600 uppercase transition-colors hover:text-nx-purple cursor-pointer"
        onClick={onReset}
        whileHover={{ letterSpacing: "0.35em" }}
        transition={{ duration: 0.2 }}
      >
        // NEW_TRANSMISSION
      </motion.button>
    </motion.div>
  );
}
