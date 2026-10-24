"use client";

import type { JSX } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogoBrand } from "@/components/shared/LogoBrand";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { MobileMenu } from "./MobileMenu";

export const navLinks = [
  { key: "nav.projects", href: "#projects" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.experience", href: "#experience" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
] as const;

export function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-xs dark:border-nx-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <LogoBrand href="#" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((item) => (
            <li key={item.key} className="relative">
              <motion.a
                href={item.href}
                className="relative block py-1 transition-colors hover:text-zinc-950 dark:hover:text-white"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {t(item.key)}
                <motion.span
                  className="absolute bottom-0 left-0 h-px bg-linear-to-r from-nx-purple to-nx-blue"
                  variants={{
                    rest: { width: "0%" },
                    hover: { width: "100%" },
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions: Theme Toggle + Language Switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            asChild
            className="rounded-full bg-linear-to-r from-nx-purple to-nx-blue px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 cursor-pointer shadow-xs shadow-nx-purple/20"
          >
            <a href="#contact">{t("nav.contactCta")}</a>
          </Button>
        </div>

        {/* Mobile menu button & quick switcher */}
        <div className="flex md:hidden items-center gap-2.5">
          <ThemeToggle isMobile />
          <LanguageSwitcher isMobile />
          <button
            className="text-foreground p-1 cursor-pointer"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <MobileMenu
        isOpen={menuOpen}
        navLinks={navLinks}
        onClose={() => setMenuOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
