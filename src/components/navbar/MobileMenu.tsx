"use client";

import type { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface NavLinkItem {
  key: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: readonly NavLinkItem[];
  onClose: () => void;
}

export function MobileMenu({
  isOpen,
  navLinks,
  onClose,
}: MobileMenuProps): JSX.Element {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md"
        >
          <ul className="flex flex-col items-center gap-4 px-6 py-6 text-sm font-medium text-zinc-400">
            {navLinks.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-white"
                  onClick={onClose}
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
            <li className="w-full pt-2">
              <Button
                asChild
                className="w-full rounded-full bg-linear-to-r from-nx-purple to-nx-blue text-white cursor-pointer"
              >
                <a href="#contact" onClick={onClose}>
                  {t("nav.contactCta")}
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
