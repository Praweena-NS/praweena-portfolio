"use client";

import { useEffect, useState, Suspense, useCallback, useMemo, useRef } from "react";
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
/* ── Adorable Custom Animated Shih Tzu Puppy ("Twix") Keepsake Card ── */
function TwixPuppyCard() {
  const [isHopping, setIsHopping] = useState(false);
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleTwixClick = () => {
    setIsHopping(true);
    const newBursts = [
      { id: Date.now() + 1, x: -45 + Math.random() * 20, y: -50 - Math.random() * 25 },
      { id: Date.now() + 2, x: -5 + Math.random() * 10, y: -65 - Math.random() * 25 },
      { id: Date.now() + 3, x: 35 + Math.random() * 20, y: -50 - Math.random() * 25 },
      { id: Date.now() + 4, x: -25 + Math.random() * 15, y: -30 - Math.random() * 20 },
      { id: Date.now() + 5, x: 25 + Math.random() * 15, y: -30 - Math.random() * 20 },
    ];
    setBursts(newBursts);
    setTimeout(() => setIsHopping(false), 500);
    setTimeout(() => setBursts([]), 1400);
  };

  return (
    <div
      onClick={handleTwixClick}
      className="relative w-full h-auto min-h-fit overflow-visible mx-auto my-3 sm:my-4 p-5 sm:p-6 rounded-2xl bg-[#EFE9DC]/95 border border-[#B6A17A]/50 shadow-md cursor-pointer group hover:border-[#9281CE]/70 transition-all select-none"
    >
      {/* Floating Paw Print Bursts on Click */}
      <AnimatePresence>
        {bursts.map((b) => (
          <motion.div
            key={b.id}
            initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 1.35, x: b.x, y: b.y }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-16 pointer-events-none text-lg z-30"
          >
            🐾
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Top Eyebrow */}
      <div className="flex items-center justify-center space-x-1.5 mb-3.5">
        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-[#59469C] font-semibold px-3 py-1 rounded-full bg-[#9281CE]/15 border border-[#9281CE]/30">
          🐾 SPECIAL PAW-PRINT WISH FROM TWIX
        </span>
      </div>

      {/* Shih Tzu Puppy Center Showcase */}
      <div className="flex flex-col items-center text-center">
        {/* Animated Twix Image with Idle Bob/Tilt & Click Hop */}
        <motion.div
          animate={
            isHopping
              ? { scale: [1, 1.08, 1], y: [0, -10, 0] }
              : { y: [0, -4, 0], rotate: [-1.5, 1.5, -1.5] }
          }
          transition={
            isHopping
              ? { duration: 0.45, ease: "easeOut" }
              : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative w-28 h-28 sm:w-32 sm:h-32 mb-3 cursor-pointer will-change-transform flex items-center justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/shih_tzu/Shih_Tzu.png"
            alt="Twix the Shih Tzu puppy"
            className="w-full h-full object-contain select-none drop-shadow-[0_10px_18px_rgba(28,26,32,0.18)] transition-transform group-hover:scale-105 duration-300"
            draggable={false}
          />
        </motion.div>

        {/* Note Content directly below Twix */}
        <div className="w-full max-w-md mx-auto space-y-2">
          <h4 className="font-serif text-xl sm:text-2xl text-[#1C1A20] font-semibold tracking-tight">
            Happy Birthday, Mummy! 🐶💗
          </h4>
          <p className="font-sans text-sm sm:text-base text-[#3A3540] italic leading-relaxed px-1">
            &ldquo;Woof! Sending a million tail wags, warm puppy cuddles, and endless love to the sweetest Mummy in the world. Have the most magical birthday! — Your little fur baby, Twix 🐾✨&rdquo;
          </p>
          <div className="pt-1">
            <span className="inline-block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#6E5D3F]">
              (TAP TWIX FOR BIRTHDAY TAIL WAGS 🐾)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Target Birthday Timestamp (Nov 23, 2026 12:00 AM IST) ── */
const UNLOCK_TIMESTAMP = new Date("2026-11-23T00:00:00+05:30").getTime();

function formatCountdown(ms: number): string {
  if (ms <= 0) return "00H : 00M : 00S";
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  if (days > 0) {
    return `${pad(days)}D : ${pad(hours)}H : ${pad(minutes)}M : ${pad(seconds)}S`;
  }
  return `${pad(hours)}H : ${pad(minutes)}M : ${pad(seconds)}S`;
}

function BirthdayUnveilContent() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<"sealed" | "letter">("sealed");
  const [isUnsealing, setIsUnsealing] = useState(false);
  const [showParticles, setShowParticles] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  /* ── Countdown & Lock States ── */
  const [targetTimestamp, setTargetTimestamp] = useState<number>(UNLOCK_TIMESTAMP);
  const [remainingMs, setRemainingMs] = useState<number>(() => UNLOCK_TIMESTAMP - Date.now());
  const [isShaking, setIsShaking] = useState(false);
  const [showLockNotice, setShowLockNotice] = useState(false);
  const [showRevealPopup, setShowRevealPopup] = useState(false);

  const prevRemainingRef = useRef<number>(UNLOCK_TIMESTAMP - Date.now());
  const lockNoticeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const particles = useMemo(() => generateParticles(24), []);

  /* ── Activation & Target Time Initialization ── */
  useEffect(() => {
    setMounted(true);

    const reset = searchParams.get("reset");
    const gift = searchParams.get("gift");
    const demo = searchParams.get("demo");

    let target = UNLOCK_TIMESTAMP;
    if (demo === "10s") {
      target = Date.now() + 10_000;
    }
    setTargetTimestamp(target);
    const initialRemaining = target - Date.now();
    setRemainingMs(initialRemaining);
    prevRemainingRef.current = initialRemaining;

    if (initialRemaining <= 0) {
      setShowRevealPopup(true);
      setBurstKey((k) => k + 1);
      setShowParticles(true);
      setTimeout(() => setShowParticles(false), 1500);
    }

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

  /* ── Live Countdown Timer (Ticks Every 250ms) ── */
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTimestamp - now;
      setRemainingMs(diff);

      // Moment timer transitions from > 0 to <= 0
      if (prevRemainingRef.current > 0 && diff <= 0) {
        setShowRevealPopup(true);
        setBurstKey((k) => k + 1);
        setShowParticles(true);
        setTimeout(() => setShowParticles(false), 2000);
      }
      prevRemainingRef.current = diff;
    }, 250);

    return () => clearInterval(interval);
  }, [isOpen, targetTimestamp]);

  /* ── Wax Seal Click Handler (Stage 1 -> Stage 2) ── */
  const handleUnseal = useCallback(() => {
    if (isUnsealing) return;
    setIsUnsealing(true);
    setBurstKey((k) => k + 1);
    setShowParticles(true);

    setTimeout(() => {
      setStage("letter");
      setIsUnsealing(false);
      setShowParticles(false);
    }, 550);
  }, [isUnsealing]);

  /* ── Seal Interaction Handler: Locked vs Unlocked ── */
  const handleSealClick = useCallback(() => {
    if (isUnsealing) return;

    if (remainingMs > 0) {
      // Trigger subtle shake animation & inline lock notice
      setIsShaking(true);
      setShowLockNotice(true);
      if (lockNoticeTimerRef.current) clearTimeout(lockNoticeTimerRef.current);
      lockNoticeTimerRef.current = setTimeout(() => {
        setShowLockNotice(false);
      }, 2500);
      setTimeout(() => setIsShaking(false), 450);
      return;
    }

    // Unlocked -> Open
    handleUnseal();
  }, [isUnsealing, remainingMs, handleUnseal]);

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
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#121115]/95 backdrop-blur-md overflow-y-auto overscroll-contain select-none will-change-opacity"
        >
          {/* Radial Ambient Glows (Fixed GPU composited) */}
          <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#B6A17A]/15 rounded-full blur-3xl pointer-events-none will-change-transform" />
          <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-[#9281CE]/20 rounded-full blur-3xl pointer-events-none will-change-transform" />

          {/* Close button (top right fixed) */}
          <button
            type="button"
            onClick={handleDismiss}
            className="fixed top-5 right-5 sm:top-6 sm:right-6 p-3 rounded-full text-[#F5F1E8]/70 hover:text-[#F5F1E8] hover:bg-white/10 transition-colors z-50 cursor-pointer"
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
                    key={`${p.id}-${burstKey}`}
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

          {/* Centering wrapper allowing natural document flow & vertical scroll when card overflows */}
          <div className="min-h-[100dvh] w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
            <AnimatePresence mode="wait">
              {stage === "sealed" ? (
                /* ═══════════════════════════════════════════════════════════════
                   STAGE 1: THE SEALED COUTURE ENVELOPE (With Cake Wax Seal)
                   ═══════════════════════════════════════════════════════════════ */
                <motion.div
                  key="stage-sealed-wrapper"
                  className="relative w-full max-w-xl my-auto flex flex-col items-center"
                >
                  {/* Glowing Champagne-Gold Popup Banner right above envelope */}
                  <AnimatePresence>
                    {(remainingMs <= 0 || showRevealPopup) && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.9 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-3 sm:mb-4 px-5 sm:px-6 py-2 rounded-full bg-gradient-to-r from-[#DFD0A8]/30 via-[#F5F1E8] to-[#DFD0A8]/30 border-2 border-[#B6A17A] shadow-[0_0_28px_rgba(182,161,122,0.55)] flex items-center space-x-2 text-[#1C1A20] z-30 select-none will-change-transform"
                      >
                        <Sparkles size={16} className="text-[#8C7752] animate-pulse" />
                        <span className="font-editorial italic font-semibold text-sm sm:text-base md:text-lg tracking-wide text-[#1C1A20]">
                          ✨ It&apos;s time to reveal! ✨
                        </span>
                        <Sparkles size={16} className="text-[#8C7752] animate-pulse" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    key="stage-sealed"
                    initial={{ scale: 0.96, opacity: 0, y: 12 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.96, opacity: 0, y: -8 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full aspect-[16/11] min-h-[380px] sm:min-h-[400px] bg-[#F5F1E8] rounded-2xl shadow-2xl border border-[#B6A17A]/50 overflow-hidden flex flex-col items-center justify-between p-6 sm:p-8 text-center will-change-transform"
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
                    <div className="relative z-30 my-auto flex flex-col items-center">
                      <AnimatePresence>
                        {showLockNotice && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -4, scale: 0.92 }}
                            transition={{ duration: 0.2 }}
                            className="absolute -top-10 whitespace-nowrap px-3.5 py-1 rounded-full bg-[#1C1A20] text-[#F5F1E8] border border-[#B6A17A]/70 text-[10px] sm:text-xs font-mono font-medium shadow-xl pointer-events-none z-40 flex items-center space-x-1.5"
                          >
                            <span>🔒 Unlocks Nov 23 at 12:00 AM</span>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <motion.div
                        animate={isShaking ? { x: [-5, 5, -4, 4, 0] } : { x: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="relative flex items-center justify-center"
                      >
                        {/* Soft golden pulse ring when unlocked */}
                        {remainingMs <= 0 && (
                          <motion.div
                            className="absolute -inset-2.5 rounded-full border-2 border-[#B6A17A]/80 pointer-events-none"
                            animate={{
                              scale: [1, 1.15, 1],
                              opacity: [0.8, 0.25, 0.8],
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        )}

                        <button
                          type="button"
                          onClick={handleSealClick}
                          aria-label={
                            remainingMs <= 0
                              ? "Tap the cake seal to open your birthday gift"
                              : "Locked until November 23 at 12:00 AM"
                          }
                          className="group cursor-pointer p-2 rounded-full focus:outline-none transition-transform active:scale-95"
                        >
                          <WaxSeal breaking={isUnsealing} />
                        </button>
                      </motion.div>
                    </div>

                    {/* Bottom of Envelope: Live Countdown or Unlocked Prompt */}
                    <div className="relative z-20 pb-2 px-3 flex items-center justify-center">
                      {remainingMs > 0 ? (
                        <div className="text-[#1C1A20] font-mono text-xs sm:text-sm tracking-[0.18em] bg-[#EFE9DC] border border-[#B6A17A]/60 px-4 py-1.5 rounded-full tabular-nums shadow-sm select-none flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B6A17A] animate-pulse inline-block" />
                          <span>{formatCountdown(remainingMs)}</span>
                        </div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          className="px-5 py-1 rounded-full bg-[#F5F1E8]"
                        >
                          <p className="font-editorial italic text-sm sm:text-base text-[#4A4550] tracking-wide">
                            Tap the Cake Seal to Open Your Birthday Gift ✦
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
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
                  className="relative w-full max-w-2xl my-auto bg-[#F5F1E8] rounded-2xl shadow-2xl border border-[#B6A17A]/50 flex flex-col items-center p-6 sm:p-8 md:p-10 text-center will-change-transform space-y-4"
                >
                  {/* Outer Decorative Architectural Hairline */}
                  <div className="absolute inset-3 rounded-xl border border-[#B6A17A]/30 pointer-events-none" />

                  {/* Atelier Crest / Logo */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-1 flex-shrink-0">
                    <Image
                      src="/brand/khaira-logo.png"
                      alt="KHAIRA Atelier"
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>

                  {/* Dedication Header Badge */}
                  <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#6E5D3F] font-display font-semibold px-3 py-1 rounded-full bg-[#B6A17A]/10 border border-[#B6A17A]/30">
                    <Sparkles size={11} className="text-[#6E5D3F]" />
                    <span>NOVEMBER 23 • LUCKY NUMBER 5 EDITION</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1A20] tracking-tight">
                    Happy Birthday, Minion 💗
                  </h2>

                  {/* Subtitle in Cormorant Italic */}
                  <p className="font-editorial italic text-base sm:text-lg md:text-xl text-[#4A4550]">
                    &ldquo;To Praweena — my best friend since 2021.&rdquo;
                  </p>

                  {/* Clean Champagne Hairline Divider */}
                  <div className="w-16 h-[1px] bg-[#B6A17A]/60 mx-auto flex-shrink-0" />

                  {/* Body Copy — explicit dark ink colors, never rely on CSS variables */}
                  <div className="space-y-2.5 font-sans text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md mx-auto">
                    <p className="text-[#2A2730]">
                      Five years since our very first conversation in 2021—and in the year of your lucky number 5, here is a keepsake woven exclusively for you. Watching your quiet grace, relentless artistry, and dreams blossom into KHAIRA has been the rarest privilege of my life.
                    </p>
                    <p className="text-[11px] sm:text-xs md:text-sm text-[#2A2730]/85 font-light leading-relaxed">
                      Every iconic fashion house begins with a soul who dares to turn threads into poetry. May this new chapter surround you with celestial joy, boundless inspiration, and every triumph your heart envisions.
                    </p>
                  </div>

                  {/* Shih Tzu Puppy Twix Keepsake Card */}
                  <TwixPuppyCard />

                  {/* Signature Line */}
                  <p className="font-editorial italic text-xs sm:text-sm md:text-base text-[#1C1A20] font-medium">
                    A birthday present, crafted with endless gratitude by Sinchan 💗
                  </p>

                  {/* Bottom CTA Button */}
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="inline-flex items-center space-x-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#1C1A20] text-[#F5F1E8] hover:bg-[#59469C] transition-all duration-300 font-sans text-xs uppercase tracking-[0.25em] shadow-xl group cursor-pointer flex-shrink-0"
                  >
                    <Heart size={14} className="text-[#B6A17A] group-hover:scale-125 transition-transform" />
                    <span>Unfold Your Portfolio ✦</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
