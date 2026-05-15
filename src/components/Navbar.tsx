"use client";

import type { JSX } from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogoBrand } from "@/components/LogoBrand";

const menuItems = ["ຜົນງານ", "ທັກສະ", "ກ່ຽວກັບ", "ຕິດຕໍ່"];

export default function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-nx-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <LogoBrand href="#" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {menuItems.map((item) => (
            <li key={item} className="relative">
              <motion.a
                href={`#${item}`}
                className="relative block py-1 transition-colors hover:text-white"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {item}
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

        {/* CTA Button */}
        <Button
          asChild
          className="hidden md:inline-flex rounded-full bg-linear-to-r from-nx-purple to-nx-blue px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 cursor-pointer"
        >
          <a href="#ຕິດຕໍ່">ຕິດຕໍ່ຂ້ອຍ</a>
        </Button>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          aria-label="ເມນູ"
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

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md"
          >
            <ul className="flex flex-col items-center gap-4 px-6 py-6 text-sm font-medium text-zinc-400">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="transition-colors hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="w-full pt-2">
                <Button
                  asChild
                  className="w-full rounded-full bg-linear-to-r from-nx-purple to-nx-blue text-white cursor-pointer"
                >
                  <a href="#ຕິດຕໍ່" onClick={() => setMenuOpen(false)}>
                    ຕິດຕໍ່ຂ້ອຍ
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
