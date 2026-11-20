import type { Metadata } from "next";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import portfolioData from "@/data/portfolio.json";
import { Project } from "@/types";

export const metadata: Metadata = {
  title: "Portfolio | Praweena NS - KHAIRA",
  description:
    "Curated fashion collections across haute couture, textile engineering, surface ornamentation, and contemporary draping from Praweena NS (KHAIRA).",
  alternates: {
    canonical: "/portfolio",
  },
  keywords: [
    "Praweena NS Portfolio",
    "KHAIRA Collections",
    "Haute Couture Archive",
    "Ahimsa Silk Gowns",
    "Zardozi Embroidery",
    "Indo-Western Draping",
  ],
  openGraph: {
    title: "Portfolio | Praweena NS - KHAIRA",
    description:
      "Curated fashion collections across haute couture, textile engineering, surface ornamentation, and contemporary draping from Praweena NS (KHAIRA).",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Praweena NS - Curated Portfolio",
      },
    ],
  },
};

export default function PortfolioPage() {
  const projects = portfolioData as Project[];

  return <PortfolioGallery projects={projects} />;
}
