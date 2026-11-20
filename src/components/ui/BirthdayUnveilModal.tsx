"use client";

import { useEffect, useState, Suspense, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, X } from "lucide-react";

/* ── Lightweight Particle Helpers for 60fps Couture Burst ── */
interface Particle {
  id: number;
  color: string;
  angle: number;
  distance: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    color: i % 2 === 0 ? "#B6A17A" : "#9281CE",
    angle: (i / count) * 2 * Math.PI + (Math.random() * 0.3 - 0.15),
    distance: Math.random() * 140 + 90,
  }));
}

/* ── 3D-Styled Couture Gold Wax Seal with Embossed Luxury Birthday Cake Symbol ── */
function WaxSeal({ breaking }: { breaking: boolean }) {
  return (
    <motion.div
      className="relative flex items-center justify-center will-change-transform"
      initial={{ scale: 1, opacity: 1, rotate: 0 }}
      animate={
        breaking
          ? { scale: [1, 1.25, 0], opacity: [1, 1, 0], rotate: [0, 15, 15] }
          : { scale: 1, opacity: 1, rotate: 0 }
      }
      transition={breaking ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] } : {}}
    >
      {/* Subtle pulsing champagne halo */}
      <div className="absolute -inset-3 rounded-full bg-[#B6A17A]/30 blur-md animate-pulse pointer-events-none" />

      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl relative z-10 transition-transform duration-300 group-hover:scale-105"
      >
        <defs>
          <radialGradient id="waxGrad" cx="38%" cy="32%" r="65%">
            <stop offset="0%" stopColor="#DFD0A8" />
            <stop offset="45%" stopColor="#B6A17A" />
            <stop offset="85%" stopColor="#8C7752" />
            <stop offset="100%" stopColor="#685736" />
          </radialGradient>
          <radialGradient id="innerWax" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CBB78D" />
            <stop offset="100%" stopColor="#9E885F" />
          </radialGradient>
          <filter id="waxShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Outer Wax Ring with Organic Irregularities */}
        <circle
          cx="48"
          cy="48"
          r="44"
          fill="url(#waxGrad)"
          filter="url(#waxShadow)"
          stroke="#A08C63"
          strokeWidth="1.5"
        />

        {/* Inner Stamped Rim */}
        <circle
          cx="48"
          cy="48"
          r="36"
          fill="url(#innerWax)"
          stroke="#7C6842"
          strokeWidth="1.2"
        />
        <circle
          cx="48"
          cy="48"
          r="32"
          fill="none"
          stroke="#D8C8A3"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* ── Embossed Luxury Birthday Cake Vector Relief ── */}
        <g style={{ filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.38))" }}>
          {/* Cake Platter Pedestal */}
          <line
            x1="32"
            y1="64"
            x2="64"
            y2="64"
            stroke="#F5F1E8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Tier 1 (Bottom Tier) */}
          <rect
            x="34"
            y="52"
            width="28"
            height="11"
            rx="1.5"
            fill="#F5F1E8"
            stroke="#A08C63"
            strokeWidth="0.8"
          />
          {/* Tier 1 Decorative Piping Drapes */}
          <path
            d="M 35 56 Q 39 59 43 56 Q 48 59 53 56 Q 57 59 61 56"
            fill="none"
            stroke="#8C7752"
            strokeWidth="0.8"
          />

          {/* Tier 2 (Top Tier) */}
          <rect
            x="39"
            y="42"
            width="18"
            height="9"
            rx="1.5"
            fill="#F5F1E8"
            stroke="#A08C63"
            strokeWidth="0.8"
          />
          {/* Tier 2 Decorative Piping */}
          <path
            d="M 40 46 Q 44 48.5 48 46 Q 52 48.5 56 46"
            fill="none"
            stroke="#8C7752"
            strokeWidth="0.8"
          />

          {/* Slender Candle */}
          <rect
            x="47.2"
            y="34"
            width="1.6"
            height="8"
            rx="0.5"
            fill="#F5F1E8"
            stroke="#A08C63"
            strokeWidth="0.5"
          />

          {/* Ambient Candle Halo */}
          <circle cx="48" cy="31" r="4" fill="#FFE89E" opacity="0.4" />

          {/* Flickering Candle Flame with Smooth Micro-Animation */}
          <motion.path
            d="M 48 27 C 46.5 29.8 45.8 31.6 46.6 33 C 47.3 34.1 48.7 34.1 49.4 33 C 50.2 31.6 49.5 29.8 48 27 Z"
            fill="#FFF2C2"
            stroke="#E8C868"
            strokeWidth="0.6"
            animate={{
              scaleY: [1, 1.25, 0.9, 1.2, 1],
              scaleX: [1, 0.9, 1.1, 0.95, 1],
              opacity: [0.92, 1, 0.85, 1, 0.92],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transformOrigin: "48px 33px" }}
          />

          {/* Star Sparkle Accents on Left & Right */}
          <path
            d="M 29 44.5 L 30 46.5 L 32 47.5 L 30 48.5 L 29 50.5 L 28 48.5 L 26 47.5 L 28 46.5 Z"
            fill="#F5F1E8"
            opacity="0.9"
          />
          <path
            d="M 67 44.5 L 68 46.5 L 70 47.5 L 68 48.5 L 67 50.5 L 66 48.5 L 64 47.5 L 66 46.5 Z"
            fill="#F5F1E8"
            opacity="0.9"
          />
        </g>
      </svg>
    </motion.div>
  );
}

/* ── Main Birthday Unveil Content ── */
function BirthdayUnveilContent() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<"sealed" | "letter">("sealed");
  const [isUnsealing, setIsUnsealing] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const particles = useMemo(() => generateParticles(24), []);

  /* ── Activation: ALWAYS open when ?gift=minion23 or ?reset=minion23 is present ── */
  useEffect(() => {
    setMounted(true);

    const reset = searchParams.get("reset");
    const gift = searchParams.get("gift");

    if (reset === "minion23" || gift === "minion23") {
      // Always open the modal every time the gift link is visited
      document.documentElement.classList.add("birthday-unveil-active");
      setStage("sealed");
      setIsOpen(true);
      return;
    }

    // Public visitors never see the birthday message
    document.documentElement.classList.remove("birthday-unveil-active");
    setIsOpen(false);
  }, [searchParams]);

  /* ── Wax Seal Click Handler (Butter-Smooth 60fps Transition Stage 1 -> Stage 2) ── */
  const handleUnseal = useCallback(() => {
    if (isUnsealing) return;
    setIsUnsealing(true);
    setShowParticles(true);

    setTimeout(() => {
      setStage("letter");
      setIsUnsealing(false);
      setShowParticles(false);
    }, 550);
  }, [isUnsealing]);

  /* ── Dismiss Handler: Close modal & clean URL so refresh shows portfolio ── */
  const handleDismiss = useCallback(() => {
    if (typeof window !== "undefined") {
      // Strip query params from URL without reload
      window.history.replaceState({}, "", window.location.pathname);
    }

    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("birthday-unveil-active");
    }

    setIsOpen(false);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-birthday-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-[#121115]/95 backdrop-blur-md select-none will-change-opacity overflow-hidden"
        >
          {/* Radial Ambient Glows (Static GPU composited) */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B6A17A]/15 rounded-full blur-3xl pointer-events-none will-change-transform" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#9281CE]/20 rounded-full blur-3xl pointer-events-none will-change-transform" />

          {/* Close button (top right) */}
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute top-6 right-6 p-3 rounded-full text-[#F5F1E8]/60 hover:text-[#F5F1E8] hover:bg-white/10 transition-colors z-40 cursor-pointer"
            aria-label="Close dedication"
          >
            <X size={24} />
          </button>

          {/* Lightweight Particle Burst System (Pure GPU translate3d) */}
          <AnimatePresence>
            {showParticles &&
              particles.map((p) => {
                const targetX = Math.cos(p.angle) * p.distance;
                const targetY = Math.sin(p.angle) * p.distance;
                return (
                  <motion.div
                    key={p.id}
                    className="absolute w-2 h-2 rounded-full pointer-events-none z-40 will-change-transform"
                    style={{
                      backgroundColor: p.color,
                      left: "50%",
                      top: "50%",
                      marginLeft: -4,
                      marginTop: -4,
                    }}
                    initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    animate={{
                      opacity: 0,
                      scale: 0.2,
                      x: targetX,
                      y: targetY,
                    }}
                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  />
                );
              })}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {stage === "sealed" ? (
              /* ═══════════════════════════════════════════════════════════════
                 STAGE 1: THE SEALED COUTURE ENVELOPE (With Cake Wax Seal)
                 ═══════════════════════════════════════════════════════════════ */
              <motion.div
                key="stage-sealed"
                initial={{ scale: 0.96, opacity: 0, y: 12 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-xl w-full aspect-[16/11] min-h-[380px] sm:min-h-[400px] bg-[#F5F1E8] rounded-2xl shadow-2xl border border-[#B6A17A]/50 overflow-hidden flex flex-col items-center justify-between p-6 sm:p-8 text-center will-change-transform"
              >
                {/* Outer Decorative Architectural Hairline */}
                <div className="absolute inset-3 rounded-xl border border-[#B6A17A]/30 pointer-events-none" />

                {/* Top of Envelope Header */}
                <div className="relative z-20 flex flex-col items-center space-y-1.5 pt-2 px-4 py-1 rounded-2xl bg-[#F5F1E8]">
                  <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#6E5D3F] font-display font-semibold px-3 py-1 rounded-full bg-[#B6A17A]/10 border border-[#B6A17A]/30 whitespace-nowrap">
                    <Sparkles size={11} className="text-[#6E5D3F]" />
                    <span>NOVEMBER 23 • FIVE YEARS OF FRIENDSHIP</span>
                  </div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#4A4550] font-sans font-medium whitespace-nowrap">
                    FOR MY BEST FRIEND, MINION 💗
                  </span>
                </div>

                {/* ── Intersecting Silk Ribbons ── */}
                <motion.div
                  className="absolute left-0 h-2 bg-gradient-to-r from-[#B6A17A]/70 via-[#9281CE] to-[#B6A17A]/70 pointer-events-none shadow-sm z-10 will-change-transform"
                  style={{ top: "50%", width: "50%", marginTop: -4 }}
                  initial={{ x: 0, opacity: 1 }}
                  animate={isUnsealing ? { x: "-120%", opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={isUnsealing ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] } : {}}
                />
                <motion.div
                  className="absolute right-0 h-2 bg-gradient-to-l from-[#B6A17A]/70 via-[#9281CE] to-[#B6A17A]/70 pointer-events-none shadow-sm z-10 will-change-transform"
                  style={{ top: "50%", width: "50%", marginTop: -4 }}
                  initial={{ x: 0, opacity: 1 }}
                  animate={isUnsealing ? { x: "120%", opacity: 0 } : { x: 0, opacity: 1 }}
                  transition={isUnsealing ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] } : {}}
                />

                <motion.div
                  className="absolute top-0 w-2 bg-gradient-to-b from-[#B6A17A]/70 via-[#9281CE] to-[#B6A17A]/70 pointer-events-none shadow-sm z-10 will-change-transform"
                  style={{ left: "50%", height: "50%", marginLeft: -4 }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={isUnsealing ? { y: "-120%", opacity: 0 } : { y: 0, opacity: 1 }}
                  transition={isUnsealing ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] } : {}}
                />
                <motion.div
                  className="absolute bottom-0 w-2 bg-gradient-to-t from-[#B6A17A]/70 via-[#9281CE] to-[#B6A17A]/70 pointer-events-none shadow-sm z-10 will-change-transform"
                  style={{ left: "50%", height: "50%", marginLeft: -4 }}
                  initial={{ y: 0, opacity: 1 }}
                  animate={isUnsealing ? { y: "120%", opacity: 0 } : { y: 0, opacity: 1 }}
                  transition={isUnsealing ? { duration: 0.55, ease: [0.22, 1, 0.36, 1] } : {}}
                />

                {/* ── Center: Interactive 3D Gold Wax Seal ── */}
                <div className="relative z-30 my-auto">
                  <button
                    type="button"
                    onClick={handleUnseal}
                    aria-label="Tap the cake seal to open your birthday gift"
                    className="group cursor-pointer p-2 rounded-full focus:outline-none transition-transform active:scale-95"
                  >
                    <WaxSeal breaking={isUnsealing} />
                  </button>
                </div>

                {/* Bottom of Envelope: Subtle Italic Prompt */}
                <div className="relative z-20 pb-2 px-5 py-1 rounded-full bg-[#F5F1E8]">
                  <p className="font-editorial italic text-sm sm:text-base text-[#4A4550] tracking-wide">
                    Tap the Cake Seal to Open Your Birthday Gift ✦
                  </p>
                </div>
              </motion.div>
            ) : (
              /* ═══════════════════════════════════════════════════════════════
                 STAGE 2: THE UNFOLDED DEDICATION LETTER (100% Visible Text)
                 ═══════════════════════════════════════════════════════════════ */
              <motion.div
                key="stage-letter"
                initial={{ scale: 0.96, opacity: 0, y: 12 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.96, opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-xl w-full max-h-[90dvh] overflow-y-auto bg-[#F5F1E8] rounded-2xl shadow-2xl border border-[#B6A17A]/50 flex flex-col items-center p-4 sm:p-6 md:p-8 text-center will-change-transform"
              >
                {/* Outer Decorative Architectural Hairline */}
                <div className="absolute inset-3 rounded-xl border border-[#B6A17A]/30 pointer-events-none" />

                {/* Atelier Crest / Logo */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex-shrink-0">
                  <Image
                    src="/brand/khaira-logo.png"
                    alt="KHAIRA Atelier"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>

                {/* Dedication Header Badge */}
                <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#6E5D3F] font-display font-semibold mb-2 sm:mb-3 px-3 py-1 rounded-full bg-[#B6A17A]/10 border border-[#B6A17A]/30">
                  <Sparkles size={11} className="text-[#6E5D3F]" />
                  <span>NOVEMBER 23 • LUCKY NUMBER 5 EDITION</span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1A20] tracking-tight mb-1.5 sm:mb-2">
                  Happy Birthday, Minion 💗
                </h2>

                {/* Subtitle in Cormorant Italic */}
                <p className="font-editorial italic text-base sm:text-lg md:text-xl text-[#4A4550] mb-2">
                  &ldquo;To Praweena — my best friend since 2021.&rdquo;
                </p>

                {/* Clean Champagne Hairline Divider */}
                <div className="w-16 h-[1px] bg-[#B6A17A]/60 mx-auto my-3 sm:my-4 flex-shrink-0" />

                {/* Body Copy — explicit dark ink colors, never rely on CSS variables */}
                <div className="space-y-2.5 font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed mb-4 sm:mb-5 max-w-md mx-auto">
                  <p className="text-[#2A2730]">
                    Five years since our very first conversation in 2021—and in the year of your lucky number 5, here is a keepsake woven exclusively for you. Watching your quiet grace, relentless artistry, and dreams blossom into KHAIRA has been the rarest privilege of my life.
                  </p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-[#2A2730]/85 font-light leading-relaxed">
                    Every iconic fashion house begins with a soul who dares to turn threads into poetry. May this new chapter surround you with celestial joy, boundless inspiration, and every triumph your heart envisions.
                  </p>
                </div>

                {/* Signature Line */}
                <p className="font-editorial italic text-xs sm:text-sm md:text-base text-[#1C1A20] font-medium mb-5 sm:mb-6">
                  A birthday present, crafted with endless gratitude by Sinchan 💗
                </p>

                {/* Bottom CTA Button */}
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#1C1A20] text-[#F5F1E8] hover:bg-[#59469C] transition-all duration-300 font-sans text-xs uppercase tracking-[0.25em] shadow-xl group cursor-pointer flex-shrink-0 mb-1"
                >
                  <Heart size={14} className="text-[#B6A17A] group-hover:scale-125 transition-transform" />
                  <span>Unfold Your Portfolio ✦</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BirthdayUnveilModal() {
  return (
    <Suspense fallback={null}>
      <BirthdayUnveilContent />
    </Suspense>
  );
}
