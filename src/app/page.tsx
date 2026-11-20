import Hero from "@/components/home/Hero";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import EditorialMarquee from "@/components/home/EditorialMarquee";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, BookOpen } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import profileData from "@/data/profile.json";
import { Project } from "@/types";

export default function Home() {
  const projects = portfolioData as Project[];

  return (
    <>
      <Hero />

      {/* Architectural Credibility Strip */}
      <CredibilityStrip />

      {/* Infinite Slow-Moving Editorial Marquee Ribbon */}
      <EditorialMarquee />

      {/* Curated Works Teaser Section - Balanced responsive spacing & iPad 2-col grid */}
      <section className="py-14 md:py-20 lg:py-24 bg-[#F5F1E8] dark:bg-[#121115] border-t border-champagne/25 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] font-display font-semibold">
                Curated Archive
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A20] dark:text-[#F5F1E8] mt-2">
                Selected Works
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender transition-colors group font-sans"
            >
              <span>View Full Catalog</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* Responsive Editorial Grid: 1-col on mobile, 2-col on iPad, 3-col on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.id}`}
                className="group flex flex-col cursor-pointer"
              >
                {/* Aspect Container with zero-CLS shimmer background */}
                <div className={`relative w-full overflow-hidden rounded-2xl bg-[#EBE5D8] mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500 border border-champagne/20 ${
                  project.orientation === "landscape" ? "aspect-[16/10]" : "aspect-[3/4]"
                }`}>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={
                      project.orientation === "landscape"
                        ? "object-contain object-center bg-[#1B1920] transition-transform duration-700 ease-out group-hover:scale-102"
                        : "object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    }
                  />
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
                  
                  {/* Category Pill Badge */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 px-3.5 py-1 rounded-full text-[#1C1A20] dark:text-[#F5F1E8] font-mono border border-champagne/30 shadow-sm">
                    {project.category}
                  </span>

                  {/* Editorial Index Number */}
                  <span className="absolute bottom-4 right-4 text-[10px] font-mono tracking-widest uppercase bg-ink/75 text-ivory px-2.5 py-1 rounded">
                    0{idx + 1} / 0{projects.length}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[#57525E] dark:text-[#B5AFA6]">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#57525E] dark:text-[#B5AFA6] line-clamp-2 font-sans font-light leading-relaxed">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Chronicles Section (Replaces InteractiveAtelierStudio) */}
      <section className="py-16 md:py-24 bg-[#F5F1E8] dark:bg-[#121115] border-t border-champagne/25 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-3 font-mono font-semibold">
              <BookOpen size={13} className="text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0" />
              <span>✦ THE ATELIER JOURNAL &amp; CHRONICLES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight mb-4">
              Dispatches from the Loom
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed">
              Essays and philosophical inquiries exploring Tamil Nadu textile heritage, kinetic draping, and the architecture of modern couture.
            </p>
          </div>

          {/* Featured Editorial Card */}
          <div className="relative rounded-3xl bg-[#EFE9DC]/70 dark:bg-[#1B1920]/80 border border-champagne/30 p-8 sm:p-12 lg:p-16 shadow-sm overflow-hidden">
            {/* Ambient gold/lavender glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/10 dark:bg-champagne/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-lavender/10 dark:bg-lavender/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#6E5D3F] dark:text-[#C9B38C] border border-champagne/40 px-3.5 py-1 rounded-full bg-white/40 dark:bg-[#121115]/60 mb-6">
                <span>ATELIER CHRONICLES • INAUGURAL EDITION</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1C1A20] dark:text-[#F5F1E8] leading-tight mb-5">
                Inaugural Tamil Nadu Textile &amp; Couture Dispatches Arriving Soon
              </h3>

              <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed mb-8">
                Praweena’s inaugural essays on Tamil Nadu textile philosophy, Kovai &amp; Tiruppur craft traditions, and modern silhouette construction are being handcrafted with the same care as every stitch in her collections.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/journal"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#1C1A20] text-[#F5F1E8] dark:bg-champagne dark:text-[#121115] hover:bg-[#59469C] dark:hover:bg-[#A998E6] hover:text-[#F5F1E8] transition-all font-sans text-xs uppercase tracking-[0.2em] shadow-md group"
                >
                  <span>Explore the Journal</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-full border border-champagne/50 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender transition-all font-sans text-xs uppercase tracking-[0.2em] bg-transparent"
                >
                  <span>Start a Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Philosophy Teaser Section (Full-Width High Contrast) */}
      <section className="w-full bg-[#1C1A20] text-[#F5F1E8] py-16 md:py-24 lg:py-28 relative overflow-hidden">
        {/* Subtle Ambient Gradients */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-lavender/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.35em] text-champagne mb-6 font-display">
            <Sparkles size={13} />
            <span>Philosophy &amp; Manifesto</span>
          </div>

          <h2 className="font-editorial italic text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] leading-[1.25] mb-8 font-normal max-w-4xl mx-auto">
            &ldquo;{profileData.tagline}&rdquo;
          </h2>

          <div className="w-20 h-[1px] bg-champagne/40 mx-auto mb-8" />

          <p className="font-sans text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            At KHAIRA, I reject the ephemeral churn of fast fashion. Instead, I anchor each silhouette in sculptural permanence, marrying the structural precision of bespoke tailoring with the fluid, unstitched grace of historical Indian drapery.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-champagne hover:text-ivory transition-colors group font-sans"
          >
            <span>Discover The Atelier Story</span>
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      {/* Minimalist Atelier Consultation CTA Banner */}
      <section className="py-14 md:py-20 lg:py-24 bg-[#F5F1E8] dark:bg-[#121115] border-t border-champagne/25 relative transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] font-display block mb-3 font-semibold">
            Bespoke Commissions &amp; Collaborations
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight mb-5">
            Sculpting Your Personal Silhouette
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            I accept a limited calendar of private couture commissions, bridal heirlooms, and bespoke salon appointments each season. Every garment is an individual dialogue in thread, movement, and form.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-ink text-ivory dark:bg-champagne dark:text-[#121115] hover:bg-lavender hover:text-ink transition-all duration-300 font-sans text-xs uppercase tracking-[0.25em] shadow-lg shadow-ink/10 group cursor-pointer"
            >
              <span>Start a Consultation</span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 rounded-full border border-champagne/40 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em]"
            >
              Explore All Collections
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
