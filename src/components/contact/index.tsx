"use client";

import type { JSX } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CyberInput } from "./CyberInput";
import { CyberTextarea } from "./CyberTextarea";
import { LoadingDots } from "./LoadingDots";
import { SuccessView } from "./SuccessView";

type Status = "idle" | "loading" | "success" | "error";

export function Contact(): JSX.Element {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.07),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Section Header */}
        <motion.p
          className="mb-6 tracking-[0.3em] text-nx-purple uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ◆ {t("contact.badge")} ◆
        </motion.p>
        <motion.h2
          className="mb-4 text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("contact.headingPrefix")}{" "}
          <span className="gradient-text">{t("contact.headingHighlight")}</span>
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-lg text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("contact.subtitle")}
        </motion.p>

        {/* Transmission Terminal Card */}
        <motion.div
          className="mx-auto max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative overflow-hidden rounded-xl border border-nx-purple/20 bg-zinc-900/70 backdrop-blur-sm">
            <div className="absolute top-3 left-3 h-4 w-4 border-t border-l border-nx-purple/50" />
            <div className="absolute top-3 right-3 h-4 w-4 border-t border-r border-nx-purple/50" />
            <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-nx-purple/50" />
            <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-nx-purple/50" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-3">
              <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-600 uppercase">
                // SEND_TRANSMISSION
              </span>
              <div className="flex gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-nx-purple/70" />
                <div className="h-1.5 w-1.5 rounded-full bg-nx-blue/70" />
                <motion.div
                  className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SuccessView onReset={() => setStatus("idle")} />
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-7 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid gap-7 sm:grid-cols-2">
                      <CyberInput
                        id="name"
                        label={t("contact.nameLabel")}
                        placeholder={t("contact.namePlaceholder")}
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <CyberInput
                        id="email"
                        type="email"
                        label={t("contact.emailLabel")}
                        placeholder={t("contact.emailPlaceholder")}
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <CyberTextarea
                      id="message"
                      label={t("contact.messageLabel")}
                      placeholder={t("contact.messagePlaceholder")}
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                    />

                    {status === "error" && (
                      <motion.p
                        className="font-mono text-xs text-red-400"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {t("contact.submitError")}
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-full bg-linear-to-r from-nx-purple to-nx-blue py-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                      whileHover={
                        status !== "loading"
                          ? {
                              scale: 1.02,
                              boxShadow: "0 0 40px rgba(147,51,234,0.45)",
                            }
                          : {}
                      }
                      whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {status === "loading" ? <LoadingDots /> : t("contact.submitIdle")}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
