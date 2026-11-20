import { MetadataRoute } from "next";
import portfolioData from "@/data/portfolio.json";
import journalData from "@/data/journal.json";
import { Project, Article } from "@/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://praweena-portfolio.vercel.app";

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journal`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic portfolio project routes — only published projects
  const projectRoutes: MetadataRoute.Sitemap = (portfolioData as Project[])
    .filter((project) => project.status === "published")
    .map((project) => ({
      url: `${baseUrl}/portfolio/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  // Dynamic journal article routes — only published articles go into the sitemap
  const journalRoutes: MetadataRoute.Sitemap = (journalData as Article[])
    .filter((article) => article.status === "published")
    .map((article) => ({
      url: `${baseUrl}/journal/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    }));

  return [...staticRoutes, ...projectRoutes, ...journalRoutes];
}
