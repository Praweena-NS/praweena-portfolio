"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import profileData from "@/data/profile.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-28 pb-10 lg:min-h-[calc(100svh-1rem)] lg:flex lg:items-center overflow-hidden bg-[#F5F1E8] dark:bg-[#121115] transition-colors duration-300">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-lavender/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-champagne/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Viewport-Optimized Staggered Editorial Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Atelier Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-2 sm:mb-2.5 font-display font-semibold"
            >
              <Sparkles size={12} className="text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0" />
              <span>Haute Couture &amp; Textile Architecture</span>
            </motion.div>

            {/* Large Serif Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-[2.65rem] sm:text-6xl xl:text-[5rem] text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight leading-[1.02] mb-2 sm:mb-2.5"
            >
              Praweena NS
            </motion.h1>

            {/* Subheading (Sans) */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg md:text-xl lg:text-xl text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 font-light tracking-wide mb-2 sm:mb-3"
            >
              Fashion Designer &amp; Founder of KHAIRA
            </motion.p>

            {/* Short Bio (~80 words) */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-xs sm:text-sm text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 font-light leading-relaxed mb-3 sm:mb-3.5 max-w-2xl"
            >
              {profileData.shortBio}
            </motion.p>

            {/* Availability Badge */}
            {profileData.availabilityText && (
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] px-3.5 py-1 rounded-full border border-champagne/40 bg-champagne/10 text-[#6E5D3F] dark:text-[#C9B38C] mb-3 sm:mb-3.5 font-mono w-fit"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{profileData.availabilityText}</span>
              </motion.div>
            )}

            {/* Editorial Tagline / Narrative Quote */}
            <motion.blockquote
              variants={itemVariants}
              className="font-editorial italic text-base sm:text-lg md:text-xl text-[#1C1A20]/85 dark:text-[#F5F1E8]/85 border-l-2 border-lavender pl-3.5 mb-4 sm:mb-5 max-w-xl"
            >
              &ldquo;{profileData.tagline}&rdquo;
            </motion.blockquote>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3 rounded-full bg-ink text-ivory dark:bg-champagne dark:text-[#121115] hover:bg-lavender hover:text-ink transition-all duration-300 font-sans text-xs uppercase tracking-[0.22em] group shadow-lg shadow-ink/10 cursor-pointer text-center"
              >
                <span>Start a Consultation</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-champagne/40 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender dark:hover:border-[#A998E6] dark:hover:text-[#A998E6] transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] text-center"
              >
                View Catalog
              </Link>
            </motion.div>

            {/* Editorial Mini Metrics Strip (100% Above-the-Fold on Desktop) */}
            <motion.div
              variants={itemVariants}
              className="mt-5 sm:mt-6 pt-4 border-t border-champagne/25 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg"
            >
              <div>
                <p className="font-serif text-lg sm:text-xl text-[#1C1A20] dark:text-[#F5F1E8]">KHAIRA</p>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                  Label Founded
                </p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl text-[#1C1A20] dark:text-[#F5F1E8]">Ahimsa</p>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                  Cruelty-Free Silk
                </p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl text-[#1C1A20] dark:text-[#F5F1E8]">Bespoke</p>
                <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                  Custom Silhouettes
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Centered Editorial Portrait Card with Zero Fold Clipping */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[440px] aspect-[4/5] max-h-[480px]">
              {/* Outer Decorative Architectural Hairline Frame */}
              <div className="absolute -inset-2.5 sm:-inset-3 rounded-2xl lg:rounded-[2rem] border border-champagne/30 -rotate-1 pointer-events-none transition-transform duration-700" />
              
              {/* Image Container with 4:5 aspect ratio & max-h-[480px] constraint */}
              <div className="relative aspect-[4/5] max-h-[480px] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl shadow-ink/15 bg-[#EBE5D8] group cursor-pointer">
                <Image
                  src="/images/founder/praweena-hero.png"
                  alt="Praweena NS - Founder of KHAIRA Atelier"
                  fill
                  priority
                  fetchPriority="high"
                  quality={85}
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />

                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Bottom Frosted Atelier Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 sm:p-3.5 rounded-xl bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 border border-champagne/30 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="font-serif text-xs sm:text-sm text-ink dark:text-ivory font-semibold">Praweena</p>
                    <p className="font-sans text-[9px] sm:text-[10px] tracking-wider uppercase text-ink/70 dark:text-ivory/70">
                      Founder, KHAIRA • Co-Founder, Floral Fusion
                    </p>
                  </div>
                  <span className="font-display text-[9px] sm:text-[10px] text-champagne font-semibold tracking-[0.25em]">
                    ATELIER
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
