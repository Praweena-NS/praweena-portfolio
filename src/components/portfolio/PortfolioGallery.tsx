"use client";

import { useState, useMemo, useTransition, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Printer } from "lucide-react";
import { Project } from "@/types";

interface PortfolioGalleryProps {
  projects: Project[];
}

function PortfolioGalleryContent({ projects }: PortfolioGalleryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique];
  }, [projects]);

  const paramCategory = searchParams.get("category");
  const initialCategory = paramCategory && categories.includes(paramCategory) ? paramCategory : "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const currentParam = searchParams.get("category");
    if (currentParam && categories.includes(currentParam)) {
      setActiveCategory(currentParam);
    } else if (!currentParam) {
      setActiveCategory("All");
    }
  }, [searchParams, categories]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const handleCategoryChange = (cat: string) => {
    startTransition(() => {
      setActiveCategory(cat);
      const params = new URLSearchParams(window.location.search);
      if (cat === "All") {
        params.delete("category");
      } else {
        params.set("category", cat);
      }
      const newQuery = params.toString() ? `?${params.toString()}` : "";
      router.push(`/portfolio${newQuery}`, { scroll: false });
    });
  };

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 selection:bg-lavender selection:text-ink">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="max-w-4xl xl:max-w-5xl">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-4 font-display font-semibold">
            <Sparkles size={13} className="text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0" />
            <span>Atelier Archive & Collections</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight mb-6">
            Curated Portfolio
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed">
            An exploration of tactile luxury, sculptural form, and artisanal heritage.
            Each project embodies the dialogue between ancient Indian textile techniques
            and modern silhouette construction.
          </p>
        </div>

        {/* One-Click Export Lookbook PDF Button */}
        <div className="flex-shrink-0 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center space-x-2.5 px-6 py-3.5 rounded-full border border-champagne/40 bg-white/40 dark:bg-[#1B1920]/80 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender hover:bg-white/80 dark:hover:bg-[#1B1920] transition-all font-sans text-xs uppercase tracking-[0.2em] shadow-sm cursor-pointer group"
            aria-label="Export Atelier Lookbook to PDF"
          >
            <Printer size={15} className="text-champagne group-hover:text-lavender transition-colors" />
            <span>Export Lookbook (PDF)</span>
          </button>
        </div>
      </div>

      {/* Filter Pills with URL sync and non-blocking INP transition */}
      <div
        role="tablist"
        aria-label="Filter portfolio by category"
        className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 sm:mb-16 pb-4 border-b border-champagne/25"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-sans uppercase tracking-[0.18em] sm:tracking-[0.2em] transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#1C1A20] text-[#F5F1E8] dark:bg-champagne dark:text-[#121115] shadow-md shadow-ink/10 scale-[1.02]"
                  : "border border-champagne/40 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender bg-transparent"
              } ${isPending ? "opacity-75" : "opacity-100"}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Animated Project Grid: 1-col mobile, 2-col iPad, 3-col desktop */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col"
            >
              <Link href={`/portfolio/${project.id}`} className="block overflow-hidden rounded-2xl">
                <div className={`relative w-full overflow-hidden rounded-2xl bg-[#EBE5D8] mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-champagne/20 ${
                  project.orientation === "landscape" ? "aspect-[16/10]" : "aspect-[3/4]"
                }`}>
                  <Image
                    src={project.coverImage}
                    alt={project.imageAlts?.[0] || project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={
                      project.orientation === "landscape"
                        ? "object-contain object-center bg-[#1B1920] transition-transform duration-700 ease-out group-hover:scale-102"
                        : "object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    }
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
                  
                  {/* Category Pill Badge (Single Clean Pill Badge at Top-Left) */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 px-3.5 py-1 rounded-full text-[#1C1A20] dark:text-[#F5F1E8] font-mono border border-champagne/30 shadow-sm">
                    {project.category}
                  </span>

                  {/* Editorial Index Number */}
                  <span className="absolute bottom-4 right-4 text-[10px] font-mono tracking-widest uppercase bg-ink/75 text-ivory px-2.5 py-1 rounded">
                    0{idx + 1} / 0{filteredProjects.length}
                  </span>
                </div>

                <div className="flex items-baseline justify-between mt-1">
                  <h2 className="font-serif text-xl sm:text-2xl text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors">
                    {project.title}
                  </h2>
                  <span className="font-mono text-xs text-[#57525E] dark:text-[#B5AFA6] flex-shrink-0 ml-2">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#57525E] dark:text-[#B5AFA6] line-clamp-2 font-sans font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Subtle View Collection link */}
                <div className="inline-flex items-center space-x-1.5 mt-3 text-xs uppercase tracking-widest text-[#6E5D3F] dark:text-[#C9B38C] font-mono group-hover:text-lavender transition-colors">
                  <span>View Case Study</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function PortfolioGallery({ projects }: PortfolioGalleryProps) {
  return (
    <Suspense
      fallback={
        <div className="pt-36 pb-24 w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 text-center font-mono text-xs uppercase tracking-widest text-champagne">
          Loading Curated Portfolio Archive...
        </div>
      }
    >
      <PortfolioGalleryContent projects={projects} />
    </Suspense>
  );
}
