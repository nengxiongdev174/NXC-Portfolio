"use client";

import type { JSX } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export interface CyberInputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

export function CyberInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: CyberInputProps): JSX.Element {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div>
      <label
        htmlFor={id}
        className={`mb-2 block text-sm font-medium transition-colors duration-200 ${
          active ? "text-foreground font-semibold" : "text-muted-foreground"
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
          className="w-full border-0 border-b bg-transparent pb-3 pt-1 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
          style={{
            borderBottomColor: focused
              ? "rgba(147,51,234,0.7)"
              : "var(--border)",
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
