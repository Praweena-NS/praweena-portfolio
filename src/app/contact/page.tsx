import type { Metadata } from "next";
import { Mail, MapPin, Clock, Sparkles } from "lucide-react";
import profileData from "@/data/profile.json";
import ContactForm from "@/components/contact/ContactForm";
import {
  InstagramIcon,
  LinkedInIcon,
  BehanceIcon,
  FloralFusionEmblem,
} from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Contact & Bespoke Inquiries | Praweena NS - KHAIRA",
  description:
    "Initiate a private consultation, bespoke commission, or collaboration inquiry with Praweena NS at Atelier KHAIRA.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "Contact Praweena NS",
    "KHAIRA Atelier Inquiries",
    "Bespoke Bridal Consultation",
    "Coimbatore Atelier",
    "Tiruppur Fashion Studio",
  ],
  openGraph: {
    title: "Contact & Bespoke Inquiries | Praweena NS - KHAIRA",
    description:
      "Initiate a private consultation, bespoke commission, or collaboration inquiry with Praweena NS at Atelier KHAIRA.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 800,
        alt: "Praweena NS - Atelier Inquiries",
      },
    ],
  },
};

export default function ContactPage() {
  const socialLinks = [
    {
      name: "Instagram",
      href: profileData.socialLinks.instagram || "https://www.instagram.com/praweena._.05",
      icon: InstagramIcon,
      handle: "@praweena._.05",
    },
    {
      name: "LinkedIn",
      href: profileData.socialLinks.linkedin || "https://www.linkedin.com/in/praweena-ns/",
      icon: LinkedInIcon,
      handle: "Praweena",
    },
    {
      name: "Behance",
      href: profileData.socialLinks.behance || "https://www.behance.net/praweena-ns",
      icon: BehanceIcon,
      handle: "praweena-ns",
    },
    {
      name: "Floral Fusion",
      href: profileData.socialLinks.floralFusion || "https://www.instagram.com/floral_fusion.in",
      icon: FloralFusionEmblem,
      handle: "@floral_fusion.in",
    },
  ];

  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 selection:bg-lavender selection:text-ink">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Direct Atelier Information */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-champagne mb-4 font-mono">
              <Sparkles size={14} />
              <span>Private Appointments & Commissions</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl text-[#1C1A20] dark:text-[#F5F1E8] tracking-tight mb-6">
              Initiate a Dialogue
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#1C1A20]/75 dark:text-[#F5F1E8]/75 font-light leading-relaxed mb-10">
              Whether you are commissioning a bespoke bridal silhouette, inquiring
              about textile collaborations, or seeking press commentary, I
              approach every correspondence with undivided devotion.
            </p>

            {/* Direct Details Grid */}
            <div className="space-y-6 pt-4 border-t border-ink/10 dark:border-champagne/20 mb-10">
              {/* Official Atelier Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-champagne/15 text-champagne flex-shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                    KHAIRA Atelier Official
                  </p>
                  <a
                    href={`mailto:${profileData.email}`}
                    className="font-serif text-lg sm:text-xl text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender transition-colors"
                  >
                    {profileData.email}
                  </a>
                  <p className="font-sans text-[11px] text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                    For bespoke commissions, couture orders & brand collaborations
                  </p>
                </div>
              </div>

              {/* Direct Founder Email */}
              {profileData.personalEmail && (
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-lavender/15 text-lavender flex-shrink-0 mt-0.5">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                      Founder Correspondence
                    </p>
                    <a
                      href={`mailto:${profileData.personalEmail}`}
                      className="font-serif text-base sm:text-lg text-[#1C1A20] dark:text-[#F5F1E8] hover:text-lavender transition-colors"
                    >
                      {profileData.personalEmail}
                    </a>
                    <p className="font-sans text-[11px] text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                      Direct academic inquiries & research dialogue
                    </p>
                  </div>
                </div>
              )}

              {/* Authentic Regional Grounding */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-lavender/15 text-lavender flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                    Atelier Location & Appointments
                  </p>
                  <p className="font-serif text-lg text-[#1C1A20] dark:text-[#F5F1E8]">
                    Coimbatore & Tiruppur, Tamil Nadu
                  </p>
                  <p className="font-sans text-xs text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                    Private Atelier & Virtual Consultations Worldwide
                  </p>
                </div>
              </div>

              {/* Hours / Appointment Protocol */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-champagne/15 text-champagne flex-shrink-0 mt-0.5">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#57525E] dark:text-[#B5AFA6]">
                    Consultation Protocol
                  </p>
                  <p className="font-serif text-base text-[#1C1A20] dark:text-[#F5F1E8]">
                    Strictly by Private Appointment
                  </p>
                  <p className="font-sans text-xs text-[#57525E] dark:text-[#B5AFA6] mt-0.5">
                    Tuesday through Saturday, 10:00 — 18:00 IST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Channels List */}
          <div className="pt-8 border-t border-ink/10">
            <p className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-4">
              Connect Across Platforms
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-ink/15 hover:border-lavender text-ink hover:text-lavender transition-all bg-white/40 text-xs font-sans uppercase tracking-wider"
                  >
                    <Icon size={14} />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-[#F5F1E8] dark:bg-[#1B1920] border border-ink/10 dark:border-champagne/20 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm transition-colors duration-300">
          <div className="mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1A20] dark:text-[#F5F1E8] mb-2">
              Atelier Enquiry Form
            </h2>
            <p className="font-sans text-sm text-[#57525E] dark:text-[#B5AFA6] font-light">
              Kindly complete the details below. All inquiries are held in strict confidence.
            </p>
          </div>

          <ContactForm />
        </div>

      </div>
    </div>
  );
}
