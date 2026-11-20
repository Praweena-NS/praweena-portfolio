import profileData from "@/data/profile.json";
import { Project, Article } from "@/types";

export function GlobalJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    alternateName: profileData.shortName || "Praweena",
    url: "https://praweena-portfolio.vercel.app",
    image: "https://praweena-portfolio.vercel.app/images/founder/praweena-hero.png",
    jobTitle: "Fashion Designer & Founder",
    description: profileData.bio,
    affiliation: {
      "@type": "EducationalOrganization",
      name: "KPR College of Arts Science and Research",
    },
    owns: [
      {
        "@type": "Organization",
        name: "KHAIRA Atelier",
        url: "https://praweena-portfolio.vercel.app",
        slogan: profileData.tagline,
        email: profileData.email,
      },
      {
        "@type": "Organization",
        name: "Floral Fusion",
        url: profileData.socialLinks.floralFusion,
        foundingDate: "2026-09",
      },
    ],
    sameAs: [
      profileData.socialLinks.instagram,
      profileData.socialLinks.linkedin,
      profileData.socialLinks.behance,
      profileData.socialLinks.floralFusion,
    ].filter(Boolean),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FashionStore",
    name: "KHAIRA Atelier",
    url: "https://praweena-portfolio.vercel.app",
    logo: "https://praweena-portfolio.vercel.app/brand/khaira-logo.png",
    image: "https://praweena-portfolio.vercel.app/images/founder/praweena-hero.png",
    founder: {
      "@type": "Person",
      name: profileData.name,
    },
    slogan: profileData.tagline,
    email: profileData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tiruppur & Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const artworkSchema = {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: project.title,
    image: project.coverImage,
    creator: {
      "@type": "Person",
      name: profileData.name,
    },
    description: project.description,
    artform: project.category,
    dateCreated: project.year,
    material: project.materials?.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkSchema) }}
    />
  );
}

export function ArticleJsonLd({ article }: { article: Article }) {
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: article.coverImage,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: profileData.name,
      url: "https://praweena-portfolio.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "KHAIRA Atelier",
      logo: {
        "@type": "ImageObject",
        url: "https://praweena-portfolio.vercel.app/brand/khaira-logo.png",
      },
    },
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://praweena-portfolio.vercel.app/journal/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
    />
  );
}
