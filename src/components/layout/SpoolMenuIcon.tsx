"use client";

import { motion } from "framer-motion";

interface SpoolMenuIconProps {
  isOpen: boolean;
}

export default function SpoolMenuIcon({ isOpen }: SpoolMenuIconProps) {
  return (
    <div className="flex items-center space-x-2.5 group">
      <span className="font-display text-[10px] uppercase tracking-[0.25em] text-ink/70 group-hover:text-lavender transition-colors hidden xs:inline">
        {isOpen ? "CLOSE" : "ATELIER MENU"}
      </span>

      <div className="relative w-8 h-8 flex items-center justify-center">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 overflow-visible"
        >
          {/* Heart-Shaped Looping Thread floating above the spool */}
          <motion.path
            d="M 16 9 C 14 5, 8 6, 9.5 10.5 C 10.5 13.5, 16 16.5, 16 16.5 C 16 16.5, 21.5 13.5, 22.5 10.5 C 24 6, 18 5, 16 9 Z"
            stroke="#9281CE"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 1, opacity: 0.9 }}
            animate={{
              pathLength: isOpen ? [0.2, 1] : 1,
              scale: isOpen ? [1, 1.15, 1] : 1,
              stroke: isOpen ? "#B6A17A" : "#9281CE",
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Thread trailing down from heart to spool barrel */}
          <motion.path
            d="M 16 16.5 L 16 18"
            stroke="#9281CE"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Wooden Spool: Top Flange Rim */}
          <rect
            x="9"
            y="17"
            width="14"
            height="2.5"
            rx="1"
            fill="#B6A17A"
            stroke="#8C7A58"
            strokeWidth="0.6"
          />

          {/* Spool Barrel: Wrapped with Lavender Silk Thread */}
          <rect
            x="11"
            y="19.5"
            width="10"
            height="7"
            rx="0.5"
            fill="#9281CE"
          />
          {/* Thread winding lines */}
          <line x1="11" y1="21" x2="21" y2="21" stroke="#B8A9E8" strokeWidth="0.6" />
          <line x1="11" y1="23" x2="21" y2="23" stroke="#7A68B3" strokeWidth="0.6" />
          <line x1="11" y1="25" x2="21" y2="25" stroke="#B8A9E8" strokeWidth="0.6" />

          {/* Wooden Spool: Bottom Flange Rim */}
          <rect
            x="9"
            y="26.5"
            width="14"
            height="2.5"
            rx="1"
            fill="#B6A17A"
            stroke="#8C7A58"
            strokeWidth="0.6"
          />

          {/* Diagonal Silver Sewing Needle with Eyelet */}
          <motion.g
            animate={{
              rotate: isOpen ? 45 : 0,
              originX: "16px",
              originY: "23px",
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Needle shaft */}
            <line
              x1="6"
              y1="28"
              x2="26"
              y2="14"
              stroke="#E2E8F0"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Needle tip point */}
            <circle cx="26" cy="14" r="0.6" fill="#F8FAFC" />
            {/* Needle Eyelet */}
            <ellipse
              cx="7.5"
              cy="27"
              rx="0.8"
              ry="0.5"
              transform="rotate(-35 7.5 27)"
              stroke="#64748B"
              strokeWidth="0.5"
              fill="#F5F1E8"
            />
          </motion.g>

          {/* If open, secondary crossing needle to form couture X */}
          {isOpen && (
            <motion.line
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              x1="6"
              y1="14"
              x2="26"
              y2="28"
              stroke="#B6A17A"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          )}
        </svg>
      </div>
    </div>
  );
}
