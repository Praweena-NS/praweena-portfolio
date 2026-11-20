import type { Metadata } from "next";
import profileData from "@/data/profile.json";
import { Profile } from "@/types";
import AboutPageView from "@/components/about/AboutPageView";

export const metadata: Metadata = {
  title: "About Praweena NS | Founder of KHAIRA - Design Philosophy",
  description:
    "The story, educational journey, and design philosophy of Praweena NS, founder of KHAIRA. Poetry in Thread, Modern in Silhouette.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "Praweena NS",
    "KHAIRA Atelier",
    "Fashion Designer Biography",
    "Costume Design and Fashion",
    "KPR College of Arts Science and Research",
    "Floral Fusion Co-Founder",
    "Ahimsa Silk Research",
  ],
  openGraph: {
    title: "About Praweena NS | Founder of KHAIRA - Design Philosophy",
    description:
      "The story, educational journey, and design philosophy of Praweena NS, founder of KHAIRA. Poetry in Thread, Modern in Silhouette.",
    type: "profile",
    images: [
      {
        url: "/images/founder/praweena-about.png",
        width: 1200,
        height: 1600,
        alt: "Praweena NS - Atelier Founder",
      },
    ],
  },
};

export default function AboutPage() {
  const profile = profileData as Profile;

  return <AboutPageView profile={profile} />;
}
