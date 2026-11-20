import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import BirthdayUnveilModal from "@/components/ui/BirthdayUnveilModal";
import CoutureParticles from "@/components/ui/CoutureParticles";
import ScrollThreadStitch from "@/components/ui/ScrollThreadStitch";
import { GlobalJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://praweena-portfolio.vercel.app"),
  title: {
    default: "Praweena NS | Fashion Designer & Founder of KHAIRA Atelier — Coimbatore & Tiruppur",
    template: "%s | Praweena NS — KHAIRA Atelier",
  },
  description:
    "Official haute couture portfolio of Praweena NS, contemporary fashion designer and founder of KHAIRA Atelier. Specializing in Tamil Nadu textile heritage, Ahimsa silk architecture, bespoke bridal heirlooms, and avant-garde runway silhouettes — based in Coimbatore & Tiruppur, India.",
  keywords: [
    "Praweena NS",
    "KHAIRA Atelier",
    "Fashion Designer Coimbatore",
    "Tiruppur Fashion Studio",
    "Tamil Nadu Haute Couture",
    "Costume Design and Fashion",
    "KPR College of Arts Science and Research",
    "Ahimsa Silk Gowns",
    "Floral Fusion Co-Founder",
    "Indian Avant-Garde Couture",
    "Bespoke Bridal Wear",
    "Textile Architecture",
    "Kinetic Draping",
  ],
  authors: [{ name: "Praweena NS", url: "https://praweena-portfolio.vercel.app" }],
  creator: "Praweena NS",
  publisher: "KHAIRA Atelier",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://praweena-portfolio.vercel.app",
    siteName: "Praweena NS — KHAIRA Atelier",
    title: "Praweena NS | Fashion Designer & Founder of KHAIRA Atelier — Coimbatore & Tiruppur",
    description:
      "Official haute couture portfolio of Praweena NS, contemporary fashion designer and founder of KHAIRA Atelier. Poetry in Thread, Modern in Silhouette.",
    images: [
      {
        url: "/images/founder/praweena-hero.png",
        width: 1200,
        height: 1600,
        alt: "Praweena NS — Founder of KHAIRA Atelier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praweena NS | Fashion Designer & Founder of KHAIRA Atelier — Coimbatore & Tiruppur",
    description:
      "Official haute couture portfolio of Praweena NS, contemporary fashion designer and founder of KHAIRA Atelier. Poetry in Thread, Modern in Silhouette.",
    images: ["/images/founder/praweena-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Cinzel:wght@400..900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Italiana&family=Plus+Jakarta+Sans:wght@200..800&display=swap"
          rel="stylesheet"
        />
        {/* 0ms Pre-Paint Blocking Gate for Theme & Birthday Dedication Modal */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // ── Theme: sessionStorage override > time-based Day/Night ──
                  var manualOverride = null;
                  try { manualOverride = sessionStorage.getItem("atelier_theme_override"); } catch(e) {}

                  if (manualOverride === "dark") {
                    document.documentElement.classList.add("dark");
                  } else if (manualOverride === "light") {
                    document.documentElement.classList.remove("dark");
                  } else {
                    // No manual override — use time-based Day/Night default
                    // Night Mode: 6:00 PM (18:00) to 5:59 AM (05:59)
                    // Day Mode:   6:00 AM (06:00) to 5:59 PM (17:59)
                    var hour = new Date().getHours();
                    var isNight = hour >= 18 || hour < 6;
                    if (isNight) {
                      document.documentElement.classList.add("dark");
                    } else {
                      document.documentElement.classList.remove("dark");
                    }
                  }

                  // ── Birthday Dedication Modal Gate (?gift=minion23 or ?reset=minion23) ──
                  // Always open whenever the special gift URL is visited
                  var search = window.location.search || "";
                  var isGift = search.indexOf("gift=minion23") !== -1;
                  var isReset = search.indexOf("reset=minion23") !== -1;
                  
                  if (isGift || isReset) {
                    document.documentElement.classList.add("birthday-unveil-active");
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased bg-[#F5F1E8] dark:bg-[#121115] text-[#1C1A20] dark:text-[#F5F1E8] relative selection:bg-lavender selection:text-ink transition-colors duration-300">
        {/* Visually hidden Skip to main content link for WCAG AA compliance */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-[#1C1A20] focus:text-[#F5F1E8] dark:focus:bg-[#F5F1E8] dark:focus:text-[#121115] focus:outline-none focus:ring-2 focus:ring-[#6E5D3F] dark:focus:ring-[#C9B38C] focus:rounded-full font-sans text-xs uppercase tracking-widest transition-all shadow-2xl"
        >
          Skip to main content
        </a>

        {/* Live Scroll-Stitching Golden Thread Margin (Desktop XL) */}
        <ScrollThreadStitch />

        {/* Global JSON-LD Rich SEO Structured Data */}
        <GlobalJsonLd />

        {/* Secret November 23 Birthday Unveil Modal (?gift=minion23) */}
        <BirthdayUnveilModal />

        {/* 3D Animated Silk Dust & Floating Gold Particles (Strictly at z-0 behind content) */}
        <CoutureParticles />

        {/* Lenis Smooth Inertial Scroll Provider */}
        <SmoothScrollProvider>
          <div className="min-h-screen flex flex-col justify-between relative z-10">
            <Navbar />
            <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">{children}</main>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
