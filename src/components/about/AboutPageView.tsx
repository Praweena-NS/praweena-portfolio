"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  GraduationCap,
  Milestone,
  CheckCircle2,
  Compass,
  Feather,
  Scissors,
  Flower2,
  Gift,
  ExternalLink,
} from "lucide-react";
import { Profile } from "@/types";

interface AboutPageViewProps {
  profile: Profile;
}

const fadeInScale = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function AboutPageView({ profile }: AboutPageViewProps) {
  const education = profile.education || [];
  const philosophy = profile.philosophy;
  const brandStory = profile.brandStory;
  const floralFusion = profile.floralFusion;

  const pillarIcons = [Feather, Scissors, Compass];

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden selection:bg-lavender selection:text-ink">
      {/* ============================================================== */}
      {/* SECTION 1: EDITORIAL INTRO (Asymmetrical Two-Column) */}
      {/* ============================================================== */}
      <section className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 mb-16 lg:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Praweena's Portrait (3:4 Editorial Aspect) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative mt-0"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer Decorative Champagne Frame */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl lg:rounded-[2.5rem] border border-champagne/40 rotate-1 pointer-events-none" />

              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl bg-[#EBE5D8] group cursor-pointer border border-champagne/20">
                <Image
                  src={
                    profile.portraitImage ||
                    "/images/founder/praweena-about.png"
                  }
                  alt={profile.name}
                  fill
                  priority
                  fetchPriority="high"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 560px"
                  className="object-cover object-top grayscale-0 transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-50 pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 border border-champagne/30 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-semibold text-[#1C1A20] dark:text-[#F5F1E8]">
                      {profile.shortName || "Praweena"}
                    </p>
                    <p className="font-sans text-[10px] tracking-wider uppercase text-[#57525E] dark:text-[#B5AFA6]">
                      Founder, KHAIRA • Co-Founder, Floral Fusion
                    </p>
                  </div>
                  <span className="font-mono text-xs text-champagne font-medium tracking-widest">
                    ATELIER
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Personal Introduction & Tagline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerChildren}
            className="md:col-span-7 flex flex-col justify-start"
          >
            {/* Atelier Label */}
            <motion.div
              variants={fadeInScale}
              className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.3em] text-champagne mb-4 font-display font-semibold"
            >
              <Sparkles size={13} />
              <span>The Founder & Atelier Vision</span>
            </motion.div>

            {/* Founder Heading */}
            <motion.h1
              variants={fadeInScale}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ink dark:text-[#F5F1E8] tracking-tight leading-[0.95] mb-4"
            >
              {profile.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInScale}
              className="font-sans text-xl sm:text-2xl text-ink/80 dark:text-[#F5F1E8]/85 font-light tracking-wide mb-6"
            >
              Fashion Designer, Founder of KHAIRA & Co-Founder of Floral Fusion
            </motion.p>

            {/* Brand Tagline Callout */}
            <motion.blockquote
              variants={fadeInScale}
              className="font-editorial italic text-2xl sm:text-3xl text-ink/90 dark:text-[#F5F1E8]/90 border-l-2 border-lavender pl-5 py-1 mb-8 bg-lavender/[0.04] dark:bg-lavender/[0.08] rounded-r-xl"
            >
              &ldquo;{profile.tagline}&rdquo;
            </motion.blockquote>

            {/* Narrative Bio */}
            <motion.div
              variants={fadeInScale}
              className="space-y-4 text-ink/75 dark:text-[#F5F1E8]/80 font-sans text-base sm:text-lg font-light leading-relaxed mb-8"
            >
              <p>{profile.bio}</p>
              <p>
                Currently deepening my craft in Costume Design and Fashion at KPR College of Arts
                Science and Research, I treat garment creation as a kinetic, sculptural discipline.
                From handloom Ahimsa silks to botanical aesthetics in Floral Fusion, my creative journey
                bridges ancestral craftsmanship with modern lifestyle silhouettes.
              </p>
            </motion.div>

            {/* Key Atelier Accolades */}
            <motion.div
              variants={fadeInScale}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-ink/10 dark:border-white/10"
            >
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 size={16} className="text-lavender mt-1 flex-shrink-0" />
                <div>
                  <p className="font-serif text-sm text-ink dark:text-[#F5F1E8] font-medium">Bespoke Couture</p>
                  <p className="font-sans text-[11px] text-ink/60 dark:text-[#B5AFA6]">KHAIRA Atelier</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 size={16} className="text-lavender mt-1 flex-shrink-0" />
                <div>
                  <p className="font-serif text-sm text-ink dark:text-[#F5F1E8] font-medium">Floral Fusion</p>
                  <p className="font-sans text-[11px] text-ink/60 dark:text-[#B5AFA6]">Co-Founder & Styling</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 size={16} className="text-lavender mt-1 flex-shrink-0" />
                <div>
                  <p className="font-serif text-sm text-ink dark:text-[#F5F1E8] font-medium">KPR College</p>
                  <p className="font-sans text-[11px] text-ink/60 dark:text-[#B5AFA6]">B.Sc. Costume Design</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 2: DESIGN PHILOSOPHY MANIFESTO (Full-Width High Contrast) */}
      {/* ============================================================== */}
      {philosophy && (
        <section className="w-full bg-[#1C1A20] text-[#F5F1E8] py-16 md:py-24 my-14 md:my-20 relative overflow-hidden">
          {/* Subtle Ambient Light Gradients */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-lavender/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 relative z-10">
            {/* Section Tag */}
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.35em] text-champagne font-mono">
                Artistic Philosophy & Manifesto
              </span>
            </div>

            {/* Playfair Display Pull-Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto text-center mb-16 sm:mb-20"
            >
              <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-[#F5F1E8] leading-[1.25] mb-8 font-normal">
                &ldquo;{philosophy.pullQuote}&rdquo;
              </h2>
              {/* Champagne Divider */}
              <div className="w-24 h-[1px] bg-champagne/40 mx-auto" />
            </motion.div>

            {/* Manifesto Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="max-w-3xl mx-auto text-center space-y-6 text-ivory/80 font-sans text-base sm:text-lg font-light leading-relaxed mb-20 sm:mb-28"
            >
              {philosophy.manifesto.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            {/* 3-Column Breakdown of Core Artistic Pillars */}
            <div className="border-t border-champagne/30 pt-16 sm:pt-20">
              <div className="text-center mb-12">
                <h3 className="font-serif text-2xl sm:text-3xl text-ivory">
                  The Three Pillars of KHAIRA
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {philosophy.pillars.map((pillar, idx) => {
                  const Icon = pillarIcons[idx % pillarIcons.length];
                  return (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, delay: idx * 0.15 }}
                      className="group p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-champagne/40 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Header with Index & Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="font-mono text-xs uppercase tracking-widest text-champagne">
                            Pillar 0{idx + 1}
                          </span>
                          <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:border-champagne/40 group-hover:text-champagne transition-colors text-ivory/80">
                            <Icon size={18} />
                          </div>
                        </div>

                        {/* Pillar Subtitle Badge */}
                        <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-lavender font-mono mb-2">
                          {pillar.subtitle}
                        </span>

                        {/* Pillar Title */}
                        <h4 className="font-serif text-2xl text-ivory mb-4 group-hover:text-champagne transition-colors">
                          {pillar.title}
                        </h4>

                        {/* Description */}
                        <p className="font-sans text-sm text-ivory/70 font-light leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-ivory/40">
                        <span>ATELIER STANDARD</span>
                        <span>0{idx + 1} / 03</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* CO-FOUNDED VENTURE: FLORAL FUSION */}
      {/* ============================================================== */}
      {floralFusion && (
        <section className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 my-14 md:my-20">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-ink/[0.025] border border-champagne/30 shadow-sm relative overflow-hidden">
            {/* Subtle floral background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-champagne/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 pb-8 border-b border-ink/10">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-champagne mb-3 font-mono">
                  <Flower2 size={15} />
                  <span>Co-Founded Venture • Est. September 2026</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl text-ink dark:text-[#F5F1E8] tracking-tight mb-3">
                  {floralFusion.title}
                </h2>
                <p className="font-serif italic text-lg sm:text-xl text-ink/80 dark:text-[#F5F1E8]/80">
                  &ldquo;{floralFusion.tagline}&rdquo;
                </p>
                <p className="font-sans text-sm sm:text-base text-ink/70 dark:text-[#B5AFA6] font-light mt-4 max-w-2xl leading-relaxed">
                  {floralFusion.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href={floralFusion.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-ink text-ivory dark:bg-champagne dark:text-[#121115] hover:bg-lavender hover:text-ink transition-all font-sans text-xs uppercase tracking-widest group shadow-md"
                >
                  <span>Visit @floral_fusion.in</span>
                  <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Offerings Grid: Bouquets & Hampers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left Column: Bouquets */}
              <div className="bg-white/60 dark:bg-[#1B1920] p-6 sm:p-8 rounded-2xl border border-ink/10 dark:border-champagne/30 transition-colors duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2.5 mb-6 text-[#1C1A20] dark:text-[#F5F1E8]">
                    <Flower2 size={18} className="text-champagne" />
                    <h3 className="font-serif text-xl sm:text-2xl">Bespoke Bouquets</h3>
                    <span className="text-[10px] font-mono text-[#57525E] dark:text-[#B5AFA6] uppercase tracking-widest ml-auto">
                      Fresh Flowers • Smiles
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {floralFusion.bouquets.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 text-xs font-sans text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 bg-ink/[0.03] dark:bg-white/[0.05] px-3.5 py-2 rounded-lg border border-ink/5 dark:border-white/10"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Hampers */}
              <div className="bg-white/60 dark:bg-[#1B1920] p-6 sm:p-8 rounded-2xl border border-ink/10 dark:border-champagne/30 transition-colors duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2.5 mb-6 text-[#1C1A20] dark:text-[#F5F1E8]">
                    <Gift size={18} className="text-lavender" />
                    <h3 className="font-serif text-xl sm:text-2xl">Curated Hampers</h3>
                    <span className="text-[10px] font-mono text-[#57525E] dark:text-[#B5AFA6] uppercase tracking-widest ml-auto">
                      Thoughtful Gifts • Joy
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {floralFusion.hampers.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 text-xs font-sans text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 bg-ink/[0.03] dark:bg-white/[0.05] px-3.5 py-2 rounded-lg border border-ink/5 dark:border-white/10"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-lavender flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================== */}
      {/* SECTION 3: THE KHAIRA BRAND STORY & ACADEMIC JOURNEY */}
      {/* ============================================================== */}
      <section className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 my-14 md:my-20">
        {/* Brand Story Narrative */}
        {brandStory && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
            className="max-w-4xl mx-auto mb-24 sm:mb-32 text-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-champagne font-mono block mb-3">
              Brand Origin & Vision
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight mb-8">
              {brandStory.headline}
            </h2>
            <div className="space-y-6 text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-sans text-base sm:text-lg font-light leading-relaxed text-left sm:text-justify border-l-2 border-champagne/50 pl-6 sm:pl-8">
              {brandStory.narrative.map((storyParagraph, idx) => (
                <p key={idx}>{storyParagraph}</p>
              ))}
            </div>
          </motion.div>
        )}

        {/* Academic Journey & Creative Milestones Section Header */}
        <div className="text-center mb-14 pt-12 border-t border-champagne/25">
          <span className="text-[11px] uppercase tracking-[0.3em] text-champagne font-display font-semibold block mb-3">
            Formation & Trajectory
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A20] dark:text-[#F5F1E8]">
            Academic Formation & Creative Evolution
          </h2>
        </div>

        {/* Academic Journey & Creative Milestones Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Academic Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-ink/10 dark:border-champagne/20">
              <div className="p-2 rounded-full bg-champagne/15 text-champagne">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8]">
                  Academic Formation
                </h3>
                <p className="font-sans text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                  Degree & College
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative pl-6 border-l-2 border-ink/15 dark:border-white/10 hover:border-lavender dark:hover:border-lavender transition-colors pb-6 last:border-l-transparent"
                >
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#F5F1E8] dark:bg-[#121115] border-2 border-lavender" />
                  <span className="text-xs font-mono text-champagne uppercase tracking-widest block mb-1">
                    {edu.year}
                  </span>
                  <h4 className="font-serif text-2xl text-[#1C1A20] dark:text-[#F5F1E8] font-semibold">
                    {edu.degree}
                  </h4>
                  <p className="font-sans text-sm uppercase tracking-wider text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 font-medium mt-1 mb-3">
                    {edu.institution}
                  </p>
                  {edu.details && (
                    <p className="font-sans text-sm text-[#57525E] dark:text-[#B5AFA6] font-light leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Creative Evolution Milestones */}
          {brandStory && brandStory.milestones && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-ink/10 dark:border-champagne/20">
                <div className="p-2 rounded-full bg-lavender/15 text-lavender">
                  <Milestone size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A20] dark:text-[#F5F1E8]">
                    Creative Evolution
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                    Chronology of Milestones & Collections
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {brandStory.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 border-l-2 border-ink/15 dark:border-white/10 hover:border-champagne dark:hover:border-champagne transition-colors pb-6 last:border-l-transparent"
                  >
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#F5F1E8] dark:bg-[#121115] border-2 border-champagne" />
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-xs font-mono text-[#1C1A20]/80 dark:text-[#F5F1E8]/80 font-bold">
                        {milestone.year}
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider bg-ink/5 dark:bg-white/10 text-[#1C1A20]/70 dark:text-[#F5F1E8]/70 px-2.5 py-0.5 rounded-full border border-ink/10 dark:border-white/10">
                        {milestone.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-xl text-[#1C1A20] dark:text-[#F5F1E8] font-semibold">
                      {milestone.title}
                    </h4>
                    <p className="font-sans text-sm text-[#57525E] dark:text-[#B5AFA6] font-light leading-relaxed mt-1.5">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Editorial Bottom Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85 }}
          className="mt-24 pt-16 border-t border-ink/10 dark:border-champagne/20 text-center max-w-2xl mx-auto"
        >
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1A20] dark:text-[#F5F1E8] mb-4">
            Explore the Living Archive
          </h3>
          <p className="font-sans text-base text-[#57525E] dark:text-[#B5AFA6] font-light mb-8">
            Discover the collections sculpted under my creative direction,
            or contact the atelier for private commissions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-ink text-ivory dark:bg-champagne dark:text-[#121115] hover:bg-lavender hover:text-ink transition-all duration-300 font-sans text-xs uppercase tracking-[0.25em] shadow-lg shadow-ink/10 group cursor-pointer"
            >
              <span>View Portfolio</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full border border-ink/20 dark:border-champagne/40 text-[#1C1A20] dark:text-[#F5F1E8] hover:border-lavender hover:text-lavender transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em]"
            >
              Private Consultation
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
