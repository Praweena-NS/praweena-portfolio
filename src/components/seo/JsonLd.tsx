import profileData from "@/data/profile.json";
import { Project, Article } from "@/types";

export function GlobalJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.name,
    alternateName: profileData.shortName || "Praweena",
    url: "https://praweenans.com",
    image: "https://praweenans.com/images/founder/praweena-hero.png",
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
        url: "https://praweenans.com",
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
    url: "https://praweenans.com",
    logo: "https://praweenans.com/brand/khaira-logo.png",
    image: "https://praweenans.com/images/founder/praweena-hero.png",
    founder: {
      "@type": "Person",
      name: profileData.name,
    },
    slogan: profileData.tagline,
    email: profileData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore & Tiruppur",
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
      url: "https://praweenans.com",
    },
    publisher: {
      "@type": "Organization",
      name: "KHAIRA Atelier",
      logo: {
        "@type": "ImageObject",
        url: "https://praweenans.com/brand/khaira-logo.png",
      },
    },
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://praweenans.com/journal/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
    />
  );
}
