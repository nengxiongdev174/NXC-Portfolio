"use client";

import type { JSX } from "react";
import { useState } from "react";

export interface CyberTextareaProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
  rows?: number;
}

export function CyberTextarea({
  id,
  label,
  placeholder,
  value,
  onChange,
  required,
  rows = 4,
}: CyberTextareaProps): JSX.Element {
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
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full resize-none rounded-lg border bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all duration-200"
        style={{
          borderColor: focused
            ? "rgba(147,51,234,0.6)"
            : "var(--border)",
          boxShadow: focused
            ? "0 0 24px rgba(147,51,234,0.12), inset 0 0 16px rgba(147,51,234,0.04)"
            : "none",
        }}
      />
    </div>
  );
}
