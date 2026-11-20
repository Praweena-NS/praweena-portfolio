import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Calendar, Mail, Sparkles, FileText, Compass, Scissors, Layers } from "lucide-react";
import journalData from "@/data/journal.json";
import { Article } from "@/types";

export const metadata: Metadata = {
  title: "Journal | Praweena NS - KHAIRA",
  description:
    "Editorial reflections, design philosophy, and atelier chronicles on sustainable haute couture, Tamil Nadu textile heritage, and craftsmanship from Praweena NS (KHAIRA).",
  alternates: {
    canonical: "/journal",
  },
  keywords: [
    "Praweena NS Journal",
    "KHAIRA Chronicles",
    "Textile Philosophy",
    "Tamil Nadu Handloom",
    "Kovai Kora Silk",
    "Tiruppur Sustainable Knitwear",
    "Temple Geometry Zari",
    "Modern Indo-Western Draping",
  ],
  openGraph: {
    title: "Journal | Praweena NS - KHAIRA",
    description:
      "Editorial reflections, design philosophy, and atelier chronicles on sustainable haute couture, Tamil Nadu textile heritage, and craftsmanship from Praweena NS (KHAIRA).",
    type: "website",
    images: [
      {
        url: "/images/founder/praweena-hero.png",
        width: 1200,
        height: 800,
        alt: "Praweena NS - The Atelier Journal",
      },
    ],
  },
};

const forthcomingMonographs = [
  {
    number: "01",
    category: "TEXTILE HERITAGE",
    title: "From Kovai Kora to Contemporary Couture: Reimagining Coimbatore’s Handloom Legacy",
    abstract:
      "Investigating the structural physics of Kovai Kora cotton-silk blends, exploring how Coimbatore's GI-tagged handloom weave provides breathability and crisp architectural hold for modern silhouettes.",
    status: "In Preparation",
    focus: "Regional Handloom • Kovai Kora",
    icon: Compass,
  },
  {
    number: "02",
    category: "SUSTAINABLE CRAFT",
    title: "Tiruppur’s Knitwear & Zero-Waste Pattern Drafting for Modern Silhouettes",
    abstract:
      "Bridging Tiruppur's world-class circular knitting infrastructure with couture zero-waste cutting algorithms, transforming industrial fabric offcuts into seamless kinetic draping.",
    status: "In Preparation",
    focus: "Zero-Waste Drafting • Circularity",
    icon: Scissors,
  },
  {
    number: "03",
    category: "SURFACE ORNAMENTATION",
    title: "Temple Geometry & Zari: Translating South Indian Architecture into 3D Embroidery",
    abstract:
      "Deconstructing the sacred gopuram stone reliefs of Dravidian architecture into bullion coil Zardozi, micro-sequin lattices, and kinetic 3D floral appliqués for the runway.",
    status: "In Preparation",
    focus: "Architectural Zari • Dravidian Forms",
    icon: Layers,
  },
  {
    number: "04",
    category: "RUNWAY NOTES",
    title: "Behind the Curtain: Proportion Scaling & Movement Across Three Runway Showcases",
    abstract:
      "A candid retrospective on the technical challenges of staging couture: drafting twinning adult-child tulle, sculpting bell-cuff organza pompoms, and fabricating wire sunburst millinery.",
    status: "In Preparation",
    focus: "Runway Construction • Millinery",
    icon: FileText,
  },
];

export default function JournalPage() {
  // Only surface published essays — draft articles are invisible to public visitors
  const articles = (journalData as Article[]).filter(
    (a) => a.status === "published"
  );
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="pt-28 sm:pt-32 pb-20 md:pt-36 md:pb-28 w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 selection:bg-lavender selection:text-ink">
      {/* ── Top Header Split: Aligns Seamlessly Across Full Desktop Width ── */}
      <header className="mb-14 sm:mb-16 pb-8 border-b border-champagne/25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-[#6E5D3F] dark:text-[#C9B38C] mb-4 font-mono font-semibold">
              <BookOpen size={14} className="text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0" />
              <span>THE ATELIER JOURNAL &amp; CHRONICLES</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight leading-[1.02]">
              Dispatches from the Loom
            </h1>
          </div>

          {/* Right Column (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#6E5D3F] dark:text-[#C9B38C] border border-champagne/40 px-3.5 py-1 rounded-full bg-champagne/10 w-fit">
              <Sparkles size={11} className="text-[#6E5D3F] dark:text-[#C9B38C]" />
              <span>Volume I • Tamil Nadu Textile &amp; Couture Research</span>
            </div>
            <p className="font-sans text-sm sm:text-base text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed">
              Essays and philosophical inquiries exploring kinetic draping, ancestral Tamil Nadu textile preservation, and the architecture of modern luxury.
            </p>
          </div>
        </div>
      </header>

      {articles.length === 0 ? (
        <div className="space-y-16 sm:space-y-20">
          {/* ── Full-Width Horizontal Lead Dispatch Card (w-full) ── */}
          <section className="w-full relative rounded-3xl bg-[#EFE9DC]/65 dark:bg-[#1B1920]/80 border border-champagne/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-sm">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne/10 dark:bg-champagne/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-lavender/10 dark:bg-lavender/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left/Main Column: Typography & Narrative (lg:col-span-8) */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#6E5D3F] dark:text-[#C9B38C] border border-champagne/40 px-3.5 py-1 rounded-full bg-white/50 dark:bg-[#121115]/60 mb-6 w-fit">
                  <span>ATELIER CHRONICLES • INAUGURAL EDITION</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A20] dark:text-[#F5F1E8] leading-[1.1] mb-5">
                  Inaugural Tamil Nadu Textile &amp; Couture Dispatches{" "}
                  <em className="not-italic text-[#6E5D3F] dark:text-[#C9B38C]">
                    Arriving Soon
                  </em>
                </h2>

                <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed max-w-3xl xl:max-w-4xl">
                  Praweena&rsquo;s inaugural essays on Tamil Nadu textile philosophy, Kovai &amp; Tiruppur craft traditions, and modern silhouette construction are being handcrafted with the same care as every stitch in her collections. Check back soon — or begin a conversation now.
                </p>
              </div>

              {/* Right Column: Dual CTAs (lg:col-span-4) */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-[#1C1A20] text-[#F5F1E8] dark:bg-champagne dark:text-[#121115] hover:bg-[#59469C] dark:hover:bg-[#A998E6] hover:text-[#F5F1E8] transition-colors font-sans text-xs uppercase tracking-[0.2em] shadow-md group w-full sm:w-auto text-center"
                >
                  <Mail size={15} />
                  <span>Start a Consultation</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-champagne/50 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender transition-all font-sans text-xs uppercase tracking-[0.2em] bg-transparent w-full sm:w-auto text-center"
                >
                  <span>Explore Collections</span>
                </Link>
              </div>
            </div>
          </section>

          {/* ── 4-Column Forthcoming Monograph Grid ── */}
          <section>
            <div className="mb-8 pb-4 border-b border-champagne/25 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#6E5D3F] dark:text-[#C9B38C] font-semibold block mb-1">
                  SCHOLARLY INQUIRIES &amp; ESSAYS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8]">
                  Forthcoming Monograph Series &bull; Volume I
                </h3>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                4 Monographs In Preparation
              </span>
            </div>

            {/* 4-Column Grid Across Full Width */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {forthcomingMonographs.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.number}
                    className="group relative rounded-2xl bg-[#EFE9DC]/45 dark:bg-[#1B1920]/80 border border-champagne/30 hover:border-lavender/50 dark:hover:border-lavender/40 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md"
                  >
                    <div>
                      {/* Card Header: Category & Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#6E5D3F] dark:text-[#C9B38C] font-semibold">
                          {item.number} &bull; {item.category}
                        </span>
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-champagne/15 text-[#6E5D3F] dark:text-[#C9B38C] border border-champagne/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                          <span>{item.status}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="font-serif text-lg sm:text-xl text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors mb-3 leading-snug">
                        {item.title}
                      </h4>

                      {/* Abstract */}
                      <p className="font-sans text-xs text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed mb-6">
                        {item.abstract}
                      </p>
                    </div>

                    {/* Card Footer: Focus Area & Volume Indicator */}
                    <div className="border-t border-champagne/20 pt-3.5 flex items-center justify-between text-[10px] font-mono text-[#57525E] dark:text-[#B5AFA6]">
                      <div className="flex items-center space-x-1.5 truncate mr-2">
                        <Icon size={12} className="text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0" />
                        <span className="truncate">{item.focus}</span>
                      </div>
                      <span className="text-[#6E5D3F] dark:text-[#C9B38C] uppercase tracking-wider font-semibold flex-shrink-0">
                        Vol. I
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      ) : (
        <>
          {/* Featured Lead Article (Magazine Style Banner) */}
          {featuredArticle && (
            <section className="mb-20 sm:mb-28">
              <Link
                href={`/journal/${featuredArticle.slug}`}
                className="group block bg-[#EBE5D8]/40 dark:bg-[#1B1920]/80 border border-champagne/30 rounded-2xl lg:rounded-3xl overflow-hidden hover:border-lavender/50 transition-all duration-500 shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Cover Image */}
                  <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-[#EBE5D8]">
                    <Image
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase font-mono tracking-widest bg-ink text-ivory px-3 py-1 rounded-full">
                      Lead Editorial
                    </span>
                  </div>

                  {/* Lead Content */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-12 lg:pl-0 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#57525E] dark:text-[#B5AFA6] mb-4">
                      <span className="text-[#6E5D3F] dark:text-[#C9B38C] font-medium uppercase tracking-widest border border-champagne/40 px-2.5 py-0.5 rounded-full bg-champagne/5">
                        {featuredArticle.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{featuredArticle.date}</span>
                      </div>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors leading-[1.1] mb-6">
                      {featuredArticle.title}
                    </h2>

                    <p className="font-sans text-sm sm:text-base text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed mb-8 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender font-sans transition-colors">
                      <span>Read Full Essay</span>
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* 2-Column Grid for Remaining Articles */}
          {remainingArticles.length > 0 && (
            <section>
              <div className="mb-10 pb-4 border-b border-ink/10 dark:border-champagne/20 flex items-center justify-between">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8]">
                  Archived Inquiries &amp; Notes
                </h2>
                <span className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                  {remainingArticles.length} Articles
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {remainingArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/journal/${article.slug}`}
                    className="group flex flex-col cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#EBE5D8] mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500 border border-champagne/20">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
                      <span className="absolute top-4 left-4 text-[10px] uppercase font-mono tracking-widest bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 px-3 py-1 rounded-full text-[#1C1A20] dark:text-[#F5F1E8] border border-champagne/30 shadow-sm">
                        {article.category}
                      </span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs font-mono text-[#57525E] dark:text-[#B5AFA6] mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{article.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="font-sans text-sm text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors mt-auto font-sans">
                      <span>Read Essay</span>
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
