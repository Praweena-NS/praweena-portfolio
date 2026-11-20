import { GraduationCap, Sparkles, Flower2, MapPin } from "lucide-react";

export default function CredibilityStrip() {
  const credentials = [
    {
      icon: GraduationCap,
      eyebrow: "ACADEMIC FORMATION",
      title: "B.Sc. Costume Design & Fashion",
      subtitle: "KPR College of Arts Science and Research",
    },
    {
      icon: Sparkles,
      eyebrow: "ATELIER GENESIS",
      title: "Founder — KHAIRA Atelier",
      subtitle: "Established 2025 • Haute Couture",
    },
    {
      icon: Flower2,
      eyebrow: "CO-FOUNDED VENTURE",
      title: "Co-Founder — Floral Fusion",
      subtitle: "Established Sept 2026 • Curated Gifting",
    },
    {
      icon: MapPin,
      eyebrow: "ATELIER BASE",
      title: "Coimbatore & Tiruppur",
      subtitle: "Tamil Nadu, India • Worldwide Virtual",
    },
  ];

  return (
    <section className="w-full bg-[#EFE9DC] dark:bg-[#16141B] border-y border-champagne/30 py-8 sm:py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-champagne/20">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.title}
                className={`flex items-start space-x-4 pt-4 sm:pt-0 ${
                  idx !== 0 ? "sm:pl-6 lg:pl-8" : ""
                }`}
              >
                <div className="p-2.5 rounded-xl bg-champagne/15 text-[#6E5D3F] dark:text-[#C9B38C] flex-shrink-0 mt-0.5">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#6E5D3F] dark:text-[#C9B38C] mb-1 font-semibold">
                    {cred.eyebrow}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base text-[#1C1A20] dark:text-[#F5F1E8] font-medium leading-snug">
                    {cred.title}
                  </h3>
                  <p className="font-sans text-xs text-[#57525E] dark:text-[#B5AFA6] mt-0.5 font-light">
                    {cred.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
