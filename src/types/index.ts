export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
  description: string;
  year: string;
  /** Controls hero frame aspect ratio and object-fit strategy across all views */
  orientation?: "portrait" | "landscape";
  objective?: string;
  inspiration?: string;
  materials?: string[];
  colorStory?: { name: string; hex: string }[];
  status?: "published" | "draft";
  featured?: boolean;
  season?: string;
  techniques?: string[];
  processImages?: string[];
  sketches?: string[];
  credits?: { role: string; name: string }[];
  imageAlts?: string[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string; // for markdown/mdx
  slug: string;
  category: string;
  readTime: string;
  status?: "published" | "draft";
  tags?: string[];
  updatedAt?: string;
  relatedSlugs?: string[];
  seoDescription?: string;
}

export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  behance?: string;
  pinterest?: string;
  [key: string]: string | undefined;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface PhilosophyPillar {
  title: string;
  subtitle: string;
  description: string;
}

export interface Philosophy {
  heading: string;
  pullQuote: string;
  manifesto: string[];
  pillars: PhilosophyPillar[];
}

export interface MilestoneItem {
  year: string;
  title: string;
  category: string;
  description: string;
}

export interface BrandStory {
  headline: string;
  narrative: string[];
  milestones: MilestoneItem[];
}

export interface FloralFusionDetails {
  title: string;
  role: string;
  foundingDate?: string;
  instagram: string;
  tagline: string;
  description: string;
  bouquets: string[];
  hampers: string[];
}

export interface Profile {
  name: string;
  shortName?: string;
  tagline: string;
  shortBio?: string;
  availabilityText?: string;
  bio: string;
  email: string;
  personalEmail?: string;
  location?: string;
  logoUrl?: string;
  portraitImage?: string;
  socialLinks: SocialLinks;
  education?: EducationItem[];
  philosophy?: Philosophy;
  brandStory?: BrandStory;
  floralFusion?: FloralFusionDetails;
}

