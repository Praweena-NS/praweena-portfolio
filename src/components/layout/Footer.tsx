import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import profileData from "@/data/profile.json";
import {
  InstagramIcon,
  LinkedInIcon,
  BehanceIcon,
  FloralFusionEmblem,
} from "@/components/ui/BrandIcons";

export default function Footer() {
  const currentYear = 2026;

  const socialLinks = [
    {
      name: "Instagram",
      href: profileData.socialLinks.instagram || "https://www.instagram.com/praweena._.05",
      icon: InstagramIcon,
    },
    {
      name: "LinkedIn",
      href: profileData.socialLinks.linkedin || "https://www.linkedin.com/in/praweena-ns/",
      icon: LinkedInIcon,
    },
    {
      name: "Behance",
      href: profileData.socialLinks.behance || "https://www.behance.net/praweena-ns",
      icon: BehanceIcon,
    },
    {
      name: "Floral Fusion",
      href: profileData.socialLinks.floralFusion || "https://www.instagram.com/floral_fusion.in",
      icon: FloralFusionEmblem,
    },
    {
      name: "Email",
      href: `mailto:${profileData.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full bg-[#F5F1E8] dark:bg-[#121115] border-t border-ink/10 dark:border-champagne/20 py-16 sm:py-20 transition-colors duration-300">
      <div className="w-full max-w-[1760px] mx-auto px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link
            href="/"
            className="group flex items-center space-x-3.5 focus:outline-none mb-1"
          >
            {profileData.logoUrl ? (
              <>
                <div className="relative h-12 w-12 flex-shrink-0">
                  <Image
                    src={profileData.logoUrl}
                    alt="KHAIRA Atelier"
                    fill
                    unoptimized
                    className="object-contain transition-all duration-300 dark:invert"
                  />
                </div>
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] uppercase text-[#1C1A20] dark:text-[#F5F1E8] group-hover:text-lavender transition-colors">
                  KHAIRA
                </span>
              </>
            ) : (
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.3em] uppercase text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender transition-colors">
                KHAIRA
              </span>
            )}
          </Link>
          <p className="mt-2 font-sans text-xs uppercase tracking-[0.2em] text-[#57525E] dark:text-[#B5AFA6]">
            {profileData.tagline}
          </p>
        </div>

        {/* Social Links with Lucide icons */}
        <div className="flex items-center space-x-6 sm:space-x-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="group flex items-center space-x-2 text-[#1C1A20]/70 dark:text-[#F5F1E8]/70 hover:text-lavender dark:hover:text-[#A998E6] transition-colors p-2"
              >
                <div className="p-2 rounded-full border border-ink/10 dark:border-champagne/30 group-hover:border-lavender dark:group-hover:border-[#A998E6] group-hover:bg-lavender/10 group-hover:text-lavender dark:group-hover:text-[#A998E6] transition-all">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
                <span className="hidden sm:inline font-sans text-xs uppercase tracking-wider text-[#1C1A20]/70 dark:text-[#F5F1E8]/70 group-hover:text-lavender dark:group-hover:text-[#A998E6] transition-colors">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Copyright notice */}
        <div className="text-center md:text-right text-xs font-sans tracking-widest text-[#57525E] dark:text-[#B5AFA6] uppercase">
          <p>© {currentYear} KHAIRA Atelier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
