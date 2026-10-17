"use client";

import type { JSX } from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { LogoBrand } from "@/components/shared/LogoBrand";
import { useLanguage } from "@/context/LanguageContext";

export function Footer(): JSX.Element {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/6 px-6 pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-32 bg-linear-to-r from-transparent via-nx-purple/40 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <LogoBrand animateOnView />
            <p className="mt-1 text-sm text-zinc-500">
              Nengxiong WANGTOUAXIONG
            </p>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500">
            {[
              { label: "Facebook", href: "https://www.facebook.com/ChengLarXiong/" },
              { label: "GitHub", href: "https://github.com/nengxiongdev174" },
              { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=8562057492472" },
              { label: "Line", href: "https://line.me/ti/p/BNpe9xpQkL" },
            ].map(({ label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors cursor-pointer"
                whileHover={{ y: -2, color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        <Separator className="bg-white/10" />

        <p className="mt-8 text-center text-sm text-zinc-700">
          &copy; {new Date().getFullYear()} Nengxiong WANGTOUAXIONG. {t("footer.allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
