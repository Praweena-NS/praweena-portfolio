import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 lg:px-12 selection:bg-lavender selection:text-ink relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[28vw] text-ink/[0.025] leading-none tracking-tighter">
          404
        </span>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Atelier Label */}
        <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-champagne mb-6 font-mono">
          <Sparkles size={14} />
          <span>Atelier Archive • Undefined Coordinate</span>
        </div>

        {/* Large Serif Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight leading-[1.08] mb-6">
          404 — This Silhouette Does Not Exist
        </h1>

        <div className="w-20 h-[1px] bg-champagne/40 mx-auto mb-8" />

        {/* Poetic Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed max-w-xl mx-auto mb-12">
          The collection, garment, or editorial dispatch you are seeking has been
          archived, altered, or remains an unwritten sketch in Praweena&apos;s atelier memory.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <Link
            href="/"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-ink text-ivory dark:bg-champagne dark:text-[#121115] hover:bg-lavender hover:text-ink transition-all duration-300 font-sans text-xs uppercase tracking-[0.25em] shadow-lg shadow-ink/10 group cursor-pointer"
          >
            <ArrowLeft
              size={15}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            <span>Return to Atelier Home</span>
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full border border-ink/20 dark:border-champagne/40 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em]"
          >
            <span>Explore Collections</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Helpful Direct Links */}
        <div className="pt-8 border-t border-ink/10 dark:border-champagne/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
          <Link href="/about" className="hover:text-lavender transition-colors">
            About & Manifesto
          </Link>
          <span>•</span>
          <Link href="/journal" className="hover:text-lavender transition-colors">
            Journal Dispatches
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-lavender transition-colors">
            Private Inquiries
          </Link>
        </div>
      </div>
    </div>
  );
}
