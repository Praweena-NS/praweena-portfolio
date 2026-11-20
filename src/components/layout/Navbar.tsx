"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import profileData from "@/data/profile.json";
import SpoolMenuIcon from "@/components/layout/SpoolMenuIcon";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F5F1E8]/95 dark:bg-[#121115]/95 border-b border-champagne/25 shadow-sm transition-colors duration-300"
    >
      <div className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-3 whitespace-nowrap tracking-widest text-ink dark:text-ivory focus:outline-none"
        >
          {profileData.logoUrl ? (
            <>
              <div className="relative h-11 w-11 flex-shrink-0">
                <Image
                  src={profileData.logoUrl}
                  alt={profileData.name}
                  fill
                  unoptimized
                  className="object-contain transition-all duration-300 dark:invert"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-semibold tracking-[0.2em] uppercase transition-colors text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender">
                  Praweena NS
                </span>
                <span className="text-[9px] uppercase font-sans tracking-[0.3em] text-[#57525E] dark:text-[#C9B38C] -mt-0.5 group-hover:text-champagne transition-colors">
                  Khaira Atelier
                </span>
              </div>
            </>
          ) : (
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-[0.2em] uppercase transition-colors text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender">
                Praweena NS
              </span>
              <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-[#57525E] dark:text-[#C9B38C] -mt-1 group-hover:text-champagne transition-colors">
                Khaira Atelier
              </span>
            </div>
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-sans text-xs uppercase tracking-[0.25em] text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 hover:text-lavender dark:hover:text-[#A998E6] transition-colors duration-200 py-1 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-lavender dark:bg-[#A998E6] transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions: Day/Night Theme Toggle & Mobile Menu */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />

          {/* Mobile & Tablet Spool + Needle + Heart Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open atelier menu"}
          >
            <SpoolMenuIcon isOpen={mobileMenuOpen} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden border-b border-champagne/25 bg-[#F5F1E8] dark:bg-[#121115] shadow-xl px-8 py-6 space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-serif text-xl text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender dark:hover:text-[#A998E6] tracking-wider py-2 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-champagne/20 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-mono text-[#57525E] dark:text-[#B5AFA6]">
                Atelier Mood
              </span>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
