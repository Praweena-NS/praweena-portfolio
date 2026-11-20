"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Compass, Layers, Feather, ZoomIn } from "lucide-react";

interface Swatch {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  textureFeel: string;
  drapeWeight: string;
  dyeProvenance: string;
  silhouetteApplication: string;
  threadCount: string;
}

const SWATCHES: Swatch[] = [
  {
    id: "ahimsa-silk",
    name: "Ahimsa Peace Silk",
    subtitle: "Cruelty-Free Handspun Filament",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80",
    textureFeel: "Discontinuous slubbed grain, soft breathable tooth, cloud-like thermal warmth",
    drapeWeight: "85 g/m²",
    dyeProvenance: "Himalayan Marigold & Wild Madder Root fermentation vats",
    silhouetteApplication: "Kinetic Evening Capes & Bias-Cut Cowl Necklines",
    threadCount: "120 ends / inch (Drop Spindle)",
  },
  {
    id: "kanjeevaram-brocade",
    name: "Kanjeevaram Pit-Loom Brocade",
    subtitle: "Heirloom Zari Jacquard",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    textureFeel: "Dense structural heirloom weave interlaced with pure silver metallic filament",
    drapeWeight: "240 g/m²",
    dyeProvenance: "Fermented Indigofera, Pomegranate Peel & Lac extracts",
    silhouetteApplication: "Architectural Ceremonial Lehengas & Tailored Suiting Lapels",
    threadCount: "280 ends / inch (Triple Warp)",
  },
  {
    id: "botanical-organza",
    name: "Botanical Silk Organza",
    subtitle: "Zero-Chemical Gossamer Sheer",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
    textureFeel: "Crisp architectural transparency with gentle prismatic light refraction",
    drapeWeight: "42 g/m²",
    dyeProvenance: "Sun-bleached Wild Sappanwood bark & rainwater rinse",
    silhouetteApplication: "Cascading Pre-Pleated Pallus, Fluted Ruffles & Sculptural Peplums",
    threadCount: "95 ends / inch (High Twist Filament)",
  },
  {
    id: "zardozi-mesh",
    name: "Zardozi Metallic Wire Mesh",
    subtitle: "Micro-Bullion Hand Embroidery",
    image: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=1200&q=80",
    textureFeel: "Pliable hand-embossed bullion coil network engineered to capture evening candlelight",
    drapeWeight: "165 g/m²",
    dyeProvenance: "Electroplated Dull Antique Gold & Platinum wire coils",
    silhouetteApplication: "Anatomical Collarbone Accents, Back Cutout Frames & Kinetic Cuffs",
    threadCount: "1,400 stitches / dm² (Hand Ari Needle)",
  },
];

export default function InteractiveAtelierStudio() {
  const [activeSwatch, setActiveSwatch] = useState<Swatch>(SWATCHES[0]);
  const [isLoupeActive, setIsLoupeActive] = useState(false);
  const [loupePos, setLoupePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLoupePos({ x, y });
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      nextIndex = (index + 1) % SWATCHES.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      nextIndex = (index - 1 + SWATCHES.length) % SWATCHES.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = SWATCHES.length - 1;
    }

    if (nextIndex !== index) {
      setActiveSwatch(SWATCHES[nextIndex]);
      const nextTab = document.getElementById(`swatch-tab-${SWATCHES[nextIndex].id}`);
      nextTab?.focus();
    }
  };

  return (
    <section className="py-16 md:py-24 border-t border-champagne/25 bg-[#F5F1E8] dark:bg-[#121115] relative overflow-hidden transition-colors duration-300">
      <div className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2.5 text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-3 font-display font-semibold">
            <Sparkles size={13} className="text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0" />
            <span>The Atelier Laboratory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink dark:text-ivory tracking-tight mb-4">
            Textile &amp; Craftsmanship Loupe
          </h2>
          <p className="font-sans text-sm sm:text-base text-ink/75 dark:text-ivory/75 font-light leading-relaxed">
            Every KHAIRA silhouette begins at the loom. Interactively inspect our 4 foundational substrates, exploring their tactile gravity, botanical dye provenance, and engineering specifications.
          </p>
        </div>

        {/* Swatch Selector Tabs */}
        <div
          role="tablist"
          aria-label="Textile swatches"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 pb-6 border-b border-champagne/20"
        >
          {SWATCHES.map((swatch, idx) => {
            const isActive = activeSwatch.id === swatch.id;
            return (
              <button
                key={swatch.id}
                id={`swatch-tab-${swatch.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`swatch-panel-${swatch.id}`}
                tabIndex={isActive ? 0 : -1}
                data-active-swatch={isActive ? "true" : undefined}
                onClick={() => setActiveSwatch(swatch)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-[#1C1A20] dark:bg-[#F5F1E8] border-champagne shadow-md"
                    : "bg-white/40 dark:bg-[#1B1920] hover:bg-white/80 dark:hover:bg-[#232029] border-champagne/30 text-[#1C1A20] dark:text-[#F5F1E8]"
                }`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest block mb-1 transition-colors ${
                    isActive
                      ? "text-[#6E5D3F] dark:text-[#8C7752]"
                      : "text-[#6E5D3F] dark:text-[#C9B38C]"
                  }`}
                >
                  0{idx + 1} • {swatch.drapeWeight}
                </span>
                <h3
                  className={`font-serif text-base sm:text-lg font-medium leading-snug transition-colors ${
                    isActive
                      ? "text-[#F5F1E8] dark:text-[#121115]"
                      : "text-[#1C1A20] dark:text-[#F5F1E8]"
                  }`}
                >
                  {swatch.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Interactive Loupe Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white/50 dark:bg-[#1B1920]/80 rounded-3xl p-6 sm:p-10 border border-champagne/30 shadow-sm transition-colors duration-300">
          
          {/* Left Column: Interactive Loupe Frame */}
          <div className="lg:col-span-6 flex flex-col">
            <div
              role="button"
              tabIndex={0}
              aria-label={`Interactive Textile Loupe: ${activeSwatch.name}. Press Enter or Space to toggle magnification.`}
              aria-pressed={isLoupeActive}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#EBE5D8] border border-champagne/40 cursor-crosshair group shadow-inner focus:outline-none focus:ring-2 focus:ring-[#59469C] dark:focus:ring-[#A998E6]"
              onMouseEnter={() => setIsLoupeActive(true)}
              onMouseLeave={() => setIsLoupeActive(false)}
              onMouseMove={handleMouseMove}
              onClick={() => setIsLoupeActive((prev) => !prev)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsLoupeActive((prev) => !prev);
                }
              }}
              onTouchStart={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const touch = e.touches[0];
                if (touch) {
                  const x = ((touch.clientX - rect.left) / rect.width) * 100;
                  const y = ((touch.clientY - rect.top) / rect.height) * 100;
                  setLoupePos({ x, y });
                  setIsLoupeActive(true);
                }
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const touch = e.touches[0];
                if (touch) {
                  const x = ((touch.clientX - rect.left) / rect.width) * 100;
                  const y = ((touch.clientY - rect.top) / rect.height) * 100;
                  setLoupePos({ x, y });
                }
              }}
            >
              {/* Base Swatch Image with descriptive alt text */}
              <Image
                src={activeSwatch.image}
                alt={`High-magnification textile specimen of ${activeSwatch.name}: ${activeSwatch.subtitle}, displaying weave architecture and botanical dye pigmentation`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-300"
              />

              {/* Magnified Loupe Viewport on Hover / Touch */}
              {isLoupeActive && (
                <div
                  aria-hidden="true"
                  className="absolute pointer-events-none w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-champagne shadow-2xl overflow-hidden block"
                  style={{
                    left: `${loupePos.x}%`,
                    top: `${loupePos.y}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundImage: `url(${activeSwatch.image})`,
                    backgroundPosition: `${loupePos.x}% ${loupePos.y}%`,
                    backgroundSize: "320%",
                    boxShadow: "0 0 0 4px rgba(28, 26, 32, 0.4), 0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-champagne/80" />
                  </div>
                </div>
              )}

              {/* Top Banner Tag */}
              <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 px-3 py-1 rounded-full border border-champagne/40 text-[10px] font-mono uppercase tracking-widest text-ink dark:text-ivory shadow-sm">
                <ZoomIn size={12} className="text-[#6E5D3F] dark:text-[#C9B38C]" />
                <span>Hover / Tap to Magnify</span>
              </div>

              {/* Thread Count Indicator */}
              <div className="absolute bottom-4 right-4 bg-ink/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-ivory">
                {activeSwatch.threadCount}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Spec Sheet */}
          <div
            id={`swatch-panel-${activeSwatch.id}`}
            role="tabpanel"
            aria-labelledby={`swatch-tab-${activeSwatch.id}`}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSwatch.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6"
              >
                <div>
                  <span className="font-display text-[10px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] block mb-1">
                    {activeSwatch.subtitle}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1A20] dark:text-[#F5F1E8]">
                    {activeSwatch.name}
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-champagne/15 text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0 mt-0.5">
                      <Feather size={16} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                        Texture &amp; Tactile Feel
                      </h4>
                      <p className="font-sans text-sm text-[#1C1A20]/85 dark:text-[#F5F1E8]/85 font-light leading-relaxed mt-0.5">
                        {activeSwatch.textureFeel}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-lavender/15 text-[#59469C] dark:text-[#A998E6] flex-shrink-0 mt-0.5">
                      <Layers size={16} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                        Weight &amp; Fabric Architecture
                      </h4>
                      <p className="font-sans text-sm text-[#1C1A20]/85 dark:text-[#F5F1E8]/85 font-light leading-relaxed mt-0.5">
                        <strong className="font-medium text-[#1C1A20] dark:text-[#F5F1E8]">{activeSwatch.drapeWeight}</strong> • {activeSwatch.threadCount}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-champagne/15 text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0 mt-0.5">
                      <Compass size={16} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                        Botanical Provenance
                      </h4>
                      <p className="font-sans text-sm text-[#1C1A20]/85 dark:text-[#F5F1E8]/85 font-light leading-relaxed mt-0.5">
                        {activeSwatch.dyeProvenance}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg bg-lavender/15 text-[#59469C] dark:text-[#A998E6] flex-shrink-0 mt-0.5">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                        Silhouette Application
                      </h4>
                      <p className="font-sans text-sm text-[#1C1A20]/85 dark:text-[#F5F1E8]/85 font-light leading-relaxed mt-0.5">
                        {activeSwatch.silhouetteApplication}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
