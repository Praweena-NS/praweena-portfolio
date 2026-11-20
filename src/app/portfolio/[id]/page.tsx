import type { Metadata } from "next";
import { notFound } from "next/navigation";
import portfolioData from "@/data/portfolio.json";
import { Project } from "@/types";
import ProjectDetailView from "@/components/portfolio/ProjectDetailView";
import { ProjectJsonLd } from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return (portfolioData as Project[]).map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = (portfolioData as Project[]).find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Praweena NS",
    };
  }

  return {
    title: `${project.title} | Praweena NS - KHAIRA Atelier`,
    description: project.description,
    alternates: {
      canonical: `/portfolio/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Praweena NS - KHAIRA Atelier`,
      description: project.description,
      type: "article",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Praweena NS - KHAIRA Atelier`,
      description: project.description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projects = portfolioData as Project[];
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    notFound();
  }

  const project = projects[index];
  const prevProject = index > 0 ? projects[index - 1] : undefined;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : undefined;
  const relatedProjects = projects.filter((p) => p.id !== id && p.category === project.category).slice(0, 3);

  return (
    <>
      <ProjectJsonLd project={project} />
      <ProjectDetailView
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
        relatedProjects={relatedProjects.length > 0 ? relatedProjects : projects.filter((p) => p.id !== id).slice(0, 3)}
      />
    </>
  );
}
