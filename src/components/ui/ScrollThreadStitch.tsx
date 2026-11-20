"use client";

import { useScroll, useSpring, useTransform, motion, useReducedMotion } from "framer-motion";

export default function ScrollThreadStitch() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // pathLength drives the thread draw-on
  const pathLength = smoothProgress;

  // The SVG path's total length is used to position the needle.
  // We map progress [0,1] to a translateY along the viewport height.
  // The path spans from y=0 to y=100% of the viewBox (0 → 960).
  const needleY = useTransform(smoothProgress, [0, 1], [0, 960]);
  // Subtle horizontal sway matching the S-curve of the path
  const needleX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [12, 18, 6, 18, 12]);
  // Slight rotation so the needle tilts along the curve tangent
  const needleRotate = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [0, 8, -8, 8, 0]);

  // Glow opacity pulses slightly with progress
  const glowOpacity = useTransform(smoothProgress, [0, 0.1, 1], [0, 0.7, 0.9]);

  // Disable continuous spring/sway needle animation when prefers-reduced-motion is active
  if (shouldReduceMotion) {
    return (
      <div className="hidden xl:block fixed left-6 top-0 bottom-0 w-6 pointer-events-none z-30">
        <svg
          viewBox="0 0 24 960"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 12 0 C 18 120, 6 240, 12 360 C 18 480, 6 600, 12 720 C 18 840, 12 960, 12 960"
            stroke="#B6A17A"
            strokeWidth={1.5}
            strokeOpacity={0.25}
            fill="none"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="hidden xl:block fixed left-6 top-0 bottom-0 w-6 pointer-events-none z-30">
      <svg
        viewBox="0 0 24 960"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Lavender glow filter for the needle tip */}
          <filter id="needle-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feFlood floodColor="#9281CE" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Radial gradient for an extra lavender glow halo */}
          <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9281CE" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9281CE" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background ghost path (faint guide line) */}
        <path
          d="M 12 0 C 18 120, 6 240, 12 360 C 18 480, 6 600, 12 720 C 18 840, 12 960, 12 960"
          stroke="#B6A17A"
          strokeWidth={1.5}
          strokeOpacity={0.1}
          fill="none"
        />

        {/* Animated golden thread that draws on with scroll */}
        <motion.path
          d="M 12 0 C 18 120, 6 240, 12 360 C 18 480, 6 600, 12 720 C 18 840, 12 960, 12 960"
          stroke="#B6A17A"
          strokeWidth={1.5}
          strokeLinecap="round"
          fill="none"
          style={{
            pathLength,
          }}
          strokeDashoffset={0}
          initial={{ pathLength: 0 }}
        />

        {/* Lavender glow halo behind the needle */}
        <motion.circle
          r={8}
          fill="url(#glow-gradient)"
          style={{
            cx: needleX,
            cy: needleY,
            opacity: glowOpacity,
          }}
        />

        {/* Sewing needle — elongated diamond shape (0ms GPU repaint, no feGaussianBlur) */}
        <motion.g
          style={{
            x: needleX,
            y: needleY,
            rotate: needleRotate,
          }}
          className="will-change-transform"
        >
          {/* Needle body: elongated diamond with champagne / silver gleam */}
          <path
            d="M 0 -7 L 1.8 0 L 0 7 L -1.8 0 Z"
            stroke="#D4AF37"
            strokeWidth={0.8}
            fill="#EBE5D8"
            fillOpacity={0.85}
          />
          {/* Needle eye: tiny oval */}
          <circle
            cx={0}
            cy={-3.5}
            r={0.65}
            stroke="#9281CE"
            strokeWidth={0.6}
            fill="#9281CE"
            fillOpacity={0.6}
          />
        </motion.g>
      </svg>
    </div>
  );
}
