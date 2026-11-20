"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      try {
        sessionStorage.setItem("atelier_theme_override", "dark");
      } catch {}
    } else {
      document.documentElement.classList.remove("dark");
      try {
        sessionStorage.setItem("atelier_theme_override", "light");
      } catch {}
    }
  };

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-champagne/30 bg-surface/80 flex items-center justify-center opacity-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to Warm Silk Atelier Day Mode"
          : "Switch to Midnight Haute Couture Night Mode"
      }
      title={
        isDark
          ? "Switch to Warm Silk Atelier (Day)"
          : "Switch to Midnight Haute Couture (Night)"
      }
      className={`group relative flex items-center justify-center w-9 h-9 rounded-full border border-champagne/40 bg-[#F5F1E8]/90 dark:bg-[#1B1920]/90 text-ink dark:text-ivory shadow-sm hover:border-lavender hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-1 focus:ring-lavender ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center text-champagne"
          >
            <Sun size={15} strokeWidth={2} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex items-center justify-center text-ink/70 group-hover:text-lavender transition-colors"
          >
            <Moon size={14} strokeWidth={2} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
