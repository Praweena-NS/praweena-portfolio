"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Layers,
  Palette,
  Scissors,
  Users,
  Calendar,
} from "lucide-react";
import { Project } from "@/types";

interface ProjectDetailViewProps {
  project: Project;
  prevProject?: Project;
  nextProject?: Project;
  relatedProjects?: Project[];
}

export default function ProjectDetailView({
  project,
  prevProject,
  nextProject,
  relatedProjects = [],
}: ProjectDetailViewProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const triggerRef = useRef<HTMLElement | null>(null);
  const lightboxRef = useRef<HTMLDivElement | null>(null);

  const images = project.images && project.images.length > 0 ? project.images : [project.coverImage];
  const imageAlts = project.imageAlts && project.imageAlts.length === images.length
    ? project.imageAlts
    : images.map((_, i) => `${project.title} — Look ${i + 1}`);

  const handleOpenLightbox = (index: number, e?: React.MouseEvent<HTMLElement>) => {
    if (e) triggerRef.current = e.currentTarget;
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((curr) => {
      if (curr === null) return null;
      return (curr - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((curr) => {
      if (curr === null) return null;
      return (curr + 1) % images.length;
    });
  }, [images.length]);

  // Keyboard controls & focus trap for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleCloseLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Tab") {
        // Simple focus trap inside lightbox
        if (!lightboxRef.current) return;
        const focusables = lightboxRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <article className="pt-28 sm:pt-32 pb-24 md:pt-36 md:pb-32 w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 selection:bg-lavender selection:text-ink">
      {/* Back to Portfolio Breadcrumb */}
      <div className="mb-10">
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1C1A20]/70 dark:text-[#F5F1E8]/70 hover:text-[#1C1A20] dark:hover:text-[#F5F1E8] transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Back to All Collections</span>
        </Link>
      </div>

      {/* Project Header */}
      <header className="mb-16 max-w-6xl xl:max-w-7xl">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
          {/* Category Badge */}
          <span className="border border-champagne text-[#1C1A20] dark:text-[#F5F1E8] px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.25em] bg-champagne/10">
            {project.category}
          </span>
          {project.season && (
            <span className="inline-flex items-center space-x-1.5 border border-champagne/40 text-[#6E5D3F] dark:text-[#C9B38C] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-white/40 dark:bg-[#1B1920]/60">
              <Calendar size={12} />
              <span>{project.season}</span>
            </span>
          )}
          <span className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
            Realization: {project.year}
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight leading-[1.05] mb-8">
          {project.title}
        </h1>

        <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 font-light leading-relaxed max-w-4xl xl:max-w-5xl">
          {project.description}
        </p>
      </header>

      {/* Project Hero Cover Image — portrait editorial frame or full-bleed landscape */}
      {project.orientation === "portrait" ? (
        /* Portrait: centred editorial frame, full outfit from headpiece to hem */
        <div className="mb-20 flex justify-center">
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-[#EFE9DC] dark:bg-[#1B1920] shadow-2xl border border-champagne/30 aspect-[3/4]">
            <Image
              src={project.coverImage}
              alt={imageAlts[0]}
              fill
              priority
              sizes="(max-width: 640px) 100vw, 576px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      ) : (
        /* Landscape: full-bleed 16/10 frame — fits all 4 models + props */
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#1B1920] mb-20 shadow-2xl border border-champagne/30 aspect-[16/10]">
          <Image
            src={project.coverImage}
            alt={imageAlts[0]}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Narrative & Atelier Specifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
        {/* Left Column: Conceptual Framework */}
        <div className="lg:col-span-7 space-y-12">
          {project.objective && (
            <section>
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-3 font-display font-semibold">
                <Sparkles size={13} />
                <span>Atelier Objective</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8] mb-4">
                Sculptural Intention
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed">
                {project.objective}
              </p>
            </section>
          )}

          {project.inspiration && (
            <section>
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-3 font-display font-semibold">
                <Layers size={13} />
                <span>Creative Provenance</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8] mb-4">
                Inspiration & Roots
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed">
                {project.inspiration}
              </p>
            </section>
          )}

          {/* Primary Consultation Callout */}
          <div className="p-8 rounded-2xl bg-champagne/10 border border-champagne/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6E5D3F] dark:text-[#C9B38C] block mb-1">
                Bespoke Acquisition &amp; Archival Commission
              </span>
              <h3 className="font-serif text-xl text-[#1C1A20] dark:text-[#F5F1E8]">
                Interested in this silhouette?
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#1C1A20] text-[#F5F1E8] dark:bg-champagne dark:text-[#121115] hover:bg-lavender hover:text-ink transition-colors font-sans text-xs uppercase tracking-[0.2em] shadow-md flex-shrink-0"
            >
              <span>Start a Consultation</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: Technical Ledger (Materials, Techniques, Credits) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Materials Ledger */}
          {project.materials && project.materials.length > 0 && (
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-[#1B1920]/80 border border-champagne/30 shadow-sm">
              <span className="font-mono text-xs uppercase tracking-widest text-[#6E5D3F] dark:text-[#C9B38C] block mb-4">
                Material Provenance
              </span>
              <ul className="space-y-3 font-sans text-sm text-[#1C1A20]/85 dark:text-[#F5F1E8]/85">
                {project.materials.map((mat) => (
                  <li key={mat} className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Techniques Ledger */}
          {project.techniques && project.techniques.length > 0 && (
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-[#1B1920]/80 border border-champagne/30 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#6E5D3F] dark:text-[#C9B38C] mb-4">
                <Scissors size={14} />
                <span>Atelier Techniques</span>
              </div>
              <ul className="space-y-3 font-sans text-sm text-[#1C1A20]/85 dark:text-[#F5F1E8]/85">
                {project.techniques.map((tech) => (
                  <li key={tech} className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-lavender flex-shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Credits Ledger */}
          {project.credits && project.credits.length > 0 && (
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-[#1B1920]/80 border border-champagne/30 shadow-sm">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#6E5D3F] dark:text-[#C9B38C] mb-4">
                <Users size={14} />
                <span>Atelier Credits</span>
              </div>
              <div className="space-y-3 text-sm">
                {project.credits.map((credit, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#57525E] dark:text-[#B5AFA6]">
                      {credit.role}
                    </span>
                    <span className="font-serif text-sm text-[#1C1A20] dark:text-[#F5F1E8] font-medium">
                      {credit.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Collection Color Story & Pigment Swatches Section */}
      {project.colorStory && project.colorStory.length > 0 && (
        <section className="mb-20 sm:mb-28 p-8 sm:p-10 rounded-3xl bg-ink/[0.025] dark:bg-[#1B1920]/60 border border-champagne/30">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-6 border-b border-ink/10 dark:border-champagne/20">
            <div>
              <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-2 font-display font-semibold">
                <Palette size={13} />
                <span>Atelier Chromatics</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8]">
                Collection Color Story
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
              Interactive Dye Swatches • Click to explore palette
            </div>
          </div>

          {/* Interactive Swatch Bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6">
            {project.colorStory.map((swatch, idx) => {
              const isSelected = selectedColor === idx;
              return (
                <button
                  key={swatch.name}
                  type="button"
                  onClick={() => setSelectedColor(idx)}
                  className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                    isSelected ? "scale-105" : "hover:scale-102 opacity-85 hover:opacity-100"
                  }`}
                  aria-label={`Select ${swatch.name} (${swatch.hex})`}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-md border-2 transition-all duration-300 relative overflow-hidden ${
                      isSelected
                        ? "border-champagne ring-4 ring-champagne/30 scale-105"
                        : "border-black/10 group-hover:border-champagne/60"
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 pointer-events-none" />
                  </div>
                  <span className="mt-2 text-[10px] font-mono uppercase tracking-wider text-ink/70 dark:text-[#F5F1E8]/70 max-w-[80px] text-center truncate">
                    {swatch.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Swatch Details Display Pill */}
          {project.colorStory[selectedColor] && (
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full bg-[#F5F1E8] dark:bg-[#1B1920] border border-champagne/40 shadow-sm">
              <span
                className="w-3.5 h-3.5 rounded-full border border-black/20"
                style={{ backgroundColor: project.colorStory[selectedColor].hex }}
              />
              <span className="font-serif text-xs text-ink dark:text-[#F5F1E8] font-medium">
                {project.colorStory[selectedColor].name}
              </span>
              <span className="font-mono text-[11px] text-ink/50 dark:text-[#B5AFA6]/70 uppercase tracking-wider">
                {project.colorStory[selectedColor].hex}
              </span>
            </div>
          )}
        </section>
      )}

      {/* Lookbook & Technical Gallery */}
      <section className="mb-24 sm:mb-32">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] font-mono font-semibold">
              Visual Documentation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A20] dark:text-[#F5F1E8] mt-2">
              Lookbook &amp; Case Study Frames
            </h2>
          </div>
          <p className="text-xs font-mono text-[#57525E] dark:text-[#B5AFA6] uppercase tracking-widest">
            Click any frame for accessible lightbox view
          </p>
        </div>

        {/* Interactive Image Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((imgUrl, idx) => (
            <button
              key={`${imgUrl}-${idx}`}
              type="button"
              onClick={(e) => handleOpenLightbox(idx, e)}
              className={`group relative w-full overflow-hidden rounded-2xl bg-[#EBE5D8] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-champagne/20 text-left focus:outline-none focus:ring-2 focus:ring-[#59469C] dark:focus:ring-[#A998E6] ${
                project.orientation === "landscape" ? "aspect-[16/10]" : "aspect-[3/4]"
              }`}
              aria-label={`Enlarge look ${idx + 1}: ${imageAlts[idx]}`}
            >
              <Image
                src={imgUrl}
                alt={imageAlts[idx]}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className={
                  project.orientation === "landscape"
                    ? "object-contain object-center bg-[#1B1920] transition-transform duration-700 ease-out group-hover:scale-102"
                    : "object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                }
              />
              <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/30 transition-colors duration-300" />
              
              {/* Zoom Trigger Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 text-ink dark:text-ivory flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform border border-champagne/30">
                  <Maximize2 size={20} />
                </div>
              </div>

              {/* Look number badge */}
              <span className="absolute bottom-3 left-3 text-[10px] font-mono tracking-widest uppercase bg-ink/70 text-ivory px-2.5 py-1 rounded">
                Look 0{idx + 1}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Related Collections Row */}
      {relatedProjects.length > 0 && (
        <section className="mb-24 sm:mb-32 pt-12 border-t border-champagne/30">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E5D3F] dark:text-[#C9B38C] block mb-2 font-semibold">
                Explore The Atelier
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8]">
                Related Collections
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="text-xs uppercase tracking-widest text-[#6E5D3F] dark:text-[#C9B38C] hover:text-lavender transition-colors font-mono hidden sm:inline"
            >
              View All Works →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                href={`/portfolio/${rel.id}`}
                className="group flex flex-col rounded-2xl overflow-hidden"
              >
                <div className={`relative w-full overflow-hidden rounded-2xl bg-[#EBE5D8] mb-3 border border-champagne/20 shadow-sm group-hover:shadow-md transition-shadow ${
                    rel.orientation === "landscape" ? "aspect-[16/10]" : "aspect-[3/4]"
                  }`}>
                  <Image
                    src={rel.coverImage}
                    alt={rel.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={rel.orientation === "landscape"
                      ? "object-contain object-center bg-[#1B1920] transition-transform duration-500 group-hover:scale-105"
                      : "object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    }
                  />
                  <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wider bg-black/60 backdrop-blur-sm text-[#F5F1E8] px-2.5 py-0.5 rounded-full font-mono">
                    {rel.category}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors">
                  {rel.title}
                </h3>
                <span className="font-mono text-[11px] text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                  {rel.year}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Project Pagination Footer */}
      <footer className="pt-12 border-t border-ink/10 dark:border-champagne/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        {prevProject ? (
          <Link
            href={`/portfolio/${prevProject.id}`}
            className="group flex items-center space-x-3 text-left"
          >
            <div className="w-10 h-10 rounded-full border border-ink/20 dark:border-champagne/30 flex items-center justify-center group-hover:border-lavender group-hover:bg-lavender/10 transition-colors text-[#1C1A20] dark:text-[#F5F1E8]">
              <ArrowLeft size={16} />
            </div>
            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                Previous Project
              </span>
              <span className="font-serif text-base text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/portfolio/${nextProject.id}`}
            className="group flex items-center space-x-3 text-right"
          >
            <div>
              <span className="block text-[10px] font-sans uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                Next Project
              </span>
              <span className="font-serif text-base text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full border border-ink/20 dark:border-champagne/30 flex items-center justify-center group-hover:border-lavender group-hover:bg-lavender/10 transition-colors text-[#1C1A20] dark:text-[#F5F1E8]">
              <ArrowRight size={16} />
            </div>
          </Link>
        ) : (
          <div />
        )}
      </footer>

      {/* Full-screen Accessible Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Image gallery for ${project.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseLightbox}
            className="fixed inset-0 z-50 bg-[#121115]/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Top Toolbar */}
            <div
              className="absolute top-6 left-6 right-6 flex items-center justify-between text-[#F5F1E8] z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3">
                <span className="font-serif text-base sm:text-lg tracking-wide">
                  {project.title}
                </span>
                <span className="text-xs font-mono text-[#F5F1E8]/70 bg-white/10 px-2.5 py-1 rounded-full">
                  {lightboxIndex + 1} / {images.length}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCloseLightbox}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F1E8] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A998E6]"
                aria-label="Close fullscreen lightbox"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F1E8] transition-all z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A998E6]"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Central High-Res Image View */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative max-w-5xl max-h-[76vh] w-full h-[72vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={imageAlts[lightboxIndex]}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Navigation Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F1E8] transition-all z-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A998E6]"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Bottom Caption */}
            <div
              className="absolute bottom-6 max-w-2xl text-center px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-sm font-sans text-[#F5F1E8]/90 font-light mb-1">
                {imageAlts[lightboxIndex]}
              </p>
              <p className="text-[10px] font-mono tracking-widest text-[#F5F1E8]/50 uppercase">
                Use arrow keys to navigate • Press ESC or click outside to exit
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
