import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Share2 } from "lucide-react";
import journalData from "@/data/journal.json";
import profileData from "@/data/profile.json";
import { Article } from "@/types";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return (journalData as Article[]).map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = (journalData as Article[]).find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found | Praweena NS",
    };
  }

  return {
    title: `${article.title} | Praweena NS - Atelier Journal`,
    description: article.excerpt,
    alternates: {
      canonical: `/journal/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Praweena NS - Atelier Journal`,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 800,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Praweena NS - Atelier Journal`,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articles = journalData as Article[];
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Related articles (all except current)
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 2);

  // Parse structured markdown content into sections
  const contentBlocks = article.content.split("\n\n");

  return (
    <>
      <ArticleJsonLd article={article} />
      <article className="pt-28 sm:pt-32 pb-24 md:pt-36 md:pb-32 w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 selection:bg-lavender selection:text-ink">
        {/* Back Link */}
        <div className="max-w-3xl mx-auto mb-10">
          <Link
            href="/journal"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-ink/70 dark:text-[#F5F1E8]/70 hover:text-ink dark:hover:text-[#F5F1E8] transition-colors group font-sans"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>Back to Journal</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink/60 dark:text-[#B5AFA6] mb-6">
            <span className="border border-champagne text-ink dark:text-[#F5F1E8] px-3.5 py-1 rounded-full uppercase tracking-widest bg-champagne/10">
              {article.category}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar size={13} />
              <span>{article.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock size={13} />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink dark:text-[#F5F1E8] tracking-tight leading-[1.08] mb-8">
            {article.title}
          </h1>

          <p className="font-editorial italic text-2xl sm:text-3xl text-ink/85 dark:text-[#F5F1E8]/90 leading-relaxed border-l-2 border-lavender pl-5 py-1 mb-8">
            {article.excerpt}
          </p>

          {/* Author Byline */}
          <div className="flex items-center justify-between pt-6 border-t border-champagne/25">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#EBE5D8] dark:bg-[#1B1920] border border-champagne/30">
                <Image
                  src={
                    profileData.portraitImage ||
                    "/images/founder/praweena-about.png"
                  }
                  alt="Praweena NS"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-base text-ink dark:text-[#F5F1E8] font-medium">Praweena</p>
                <p className="font-sans text-[11px] uppercase tracking-wider text-ink/60 dark:text-[#B5AFA6]">
                  Founder, KHAIRA • Co-Founder, Floral Fusion
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-ink/50 dark:text-[#B5AFA6]/70 uppercase tracking-wider">
              <Share2 size={15} />
              <span className="hidden sm:inline">Editorial Dispatch</span>
            </div>
          </div>
        </header>

        {/* Cover Image with zero-CLS background */}
        <div className="max-w-4xl mx-auto relative aspect-[16/9] w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-[#EBE5D8] mb-16 sm:mb-20 border border-champagne/20">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1100px"
            className="object-cover"
          />
        </div>

        {/* Editorial Article Body */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-ink/85 dark:text-[#F5F1E8]/85 font-sans text-lg sm:text-xl font-light leading-[1.8]">
            {contentBlocks.map((block, idx) => {
              const trimmed = block.trim();

              if (trimmed.startsWith("### ")) {
                return (
                  <h2
                    key={idx}
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink dark:text-[#F5F1E8] font-normal pt-8 pb-2 tracking-tight"
                  >
                    {trimmed.replace("### ", "")}
                  </h2>
                );
              }

              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote
                    key={idx}
                    className="my-10 p-6 sm:p-8 rounded-2xl bg-ink/[0.03] dark:bg-white/[0.04] border-l-4 border-champagne font-editorial italic text-2xl sm:text-3xl text-ink dark:text-[#F5F1E8] leading-relaxed"
                  >
                    {trimmed.replace(/^> "?/, "").replace(/"?$/, "")}
                  </blockquote>
                );
              }

              return (
                <p key={idx} className="leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Article Author Footer Note */}
          <div className="mt-16 pt-10 border-t border-champagne/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-serif text-lg text-ink dark:text-[#F5F1E8]">Atelier KHAIRA</p>
              <p className="font-sans text-xs text-ink/60 dark:text-[#B5AFA6] uppercase tracking-widest mt-0.5">
                Poetry in Thread, Modern in Silhouette.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-ink dark:text-[#F5F1E8] hover:text-lavender dark:hover:text-lavender transition-colors font-sans"
            >
              <span>Explore Related Designs</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Related Articles Footer */}
        {relatedArticles.length > 0 && (
          <section className="max-w-5xl mx-auto mt-24 sm:mt-32 pt-16 border-t border-champagne/25">
            <div className="mb-10 flex items-center justify-between">
              <h3 className="font-serif text-2xl sm:text-3xl text-ink">
                Related Inquiries
              </h3>
              <Link
                href="/journal"
                className="text-xs uppercase font-sans tracking-widest text-ink hover:text-lavender transition-colors"
              >
                All Essays →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/journal/${rel.slug}`}
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EBE5D8] mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500 border border-champagne/20">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 text-[10px] uppercase font-mono tracking-widest bg-[#F5F1E8]/95 dark:bg-[#1B1920]/95 px-2.5 py-0.5 rounded-full text-[#1C1A20] dark:text-[#F5F1E8] border border-champagne/30 shadow-sm">
                      {rel.category}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors mb-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="font-sans text-xs text-[#57525E] dark:text-[#B5AFA6] font-light line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
