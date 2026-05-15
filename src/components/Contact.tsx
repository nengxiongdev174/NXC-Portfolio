"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

interface CyberInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

function CyberInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: CyberInputProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-2 block text-sm font-medium transition-colors duration-200 ${
          active ? "text-white" : "text-zinc-400"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full border-0 border-b bg-transparent pb-3 pt-1 text-sm text-white placeholder:text-zinc-700 focus:outline-none"
          style={{
            borderBottomColor: focused
              ? "rgba(147,51,234,0.6)"
              : "rgba(255,255,255,0.08)",
            transition: "border-color 0.25s",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-linear-to-r from-nx-purple to-nx-blue"
          animate={{ width: focused ? "100%" : "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

interface CyberTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  rows?: number;
}

function CyberTextarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  required,
  rows = 4,
}: CyberTextareaProps) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-2 block text-sm font-medium transition-colors duration-200 ${
          active ? "text-white" : "text-zinc-400"
        }`}
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full resize-none rounded border bg-white/3 px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none transition-all duration-200"
        style={{
          borderColor: focused
            ? "rgba(147,51,234,0.45)"
            : "rgba(255,255,255,0.06)",
          boxShadow: focused
            ? "0 0 24px rgba(147,51,234,0.08), inset 0 0 16px rgba(147,51,234,0.03)"
            : "none",
        }}
      />
    </div>
  );
}

function LoadingDots() {
  return (
    <span className="inline-flex items-center gap-1.5">
      {[0, 0.18, 0.36].map((delay, i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-white"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: 0.7,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}

function SuccessView({ onReset }: { onReset: () => void }) {
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
      <p className="text-lg font-semibold text-white">ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ!</p>
      <p className="mt-1 text-sm text-zinc-500">
        ທີມງານຈະຕິດຕໍ່ກັບທ່ານໄວໆນີ້
      </p>

      <motion.button
        className="mt-8 font-mono text-[9px] tracking-[0.25em] text-zinc-600 uppercase transition-colors hover:text-nx-purple"
        onClick={onReset}
        whileHover={{ letterSpacing: "0.35em" }}
        transition={{ duration: 0.2 }}
      >
        // NEW_TRANSMISSION
      </motion.button>
    </motion.div>
  );
}

export default function Contact() {
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
    <section id="ຕິດຕໍ່" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.07),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.05),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.p
          className="mb-6 tracking-[0.3em] text-nx-purple uppercase"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ◆ ຕິດຕໍ່ເຮົາ ◆
        </motion.p>
        <motion.h2
          className="mb-4 text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ພ້ອມທີ່ຈະ<span className="gradient-text">ເລີ່ມຕົ້ນ</span>ແລ້ວບໍ?
        </motion.h2>
        <motion.p
          className="mx-auto mb-12 max-w-lg text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ຝາກຂໍ້ມູນໄວ້ ແລ້ວທີມງານຂອງເຮົາຈະຕິດຕໍ່ກັບໄວທີ່ສຸດ
        </motion.p>

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
                        label="ຊື່"
                        placeholder="ຊື່ຂອງເຈົ້າ"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      <CyberInput
                        id="email"
                        type="email"
                        label="ອີເມລ"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <CyberTextarea
                      id="message"
                      label="ລາຍລະອຽດໂປຣເຈັກ"
                      placeholder="ເລົ່າກ່ຽວກັບໂປຣເຈັກຂອງເຈົ້າ..."
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
                        // ERROR: ເກີດຂໍ້ຜິດພາດ ກະລຸນາລອງໃຫມ່
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-full bg-linear-to-r from-nx-purple to-nx-blue py-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
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
                      {status === "loading" ? <LoadingDots /> : "ສົ່ງຂໍ້ຄວາມ"}
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
