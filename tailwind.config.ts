import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F5F1E8",
        ink: "#1C1A20",
        lavender: "#9281CE",
        champagne: "#B6A17A",
        canvas: "var(--bg-canvas)",
        surface: "var(--bg-surface)",
        primary: "var(--text-primary)",
        muted: "var(--text-muted)",
        gold: "var(--accent-gold)",
        shimmer: "#EBE5D8",
        Ivory: "#F5F1E8",
        Ink: "#1C1A20",
        Lavender: "#9281CE",
        Champagne: "#B6A17A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-careny)", "var(--font-bodoni)", "Georgia", "serif"],
        couture: ["var(--font-luxca)", "var(--font-couture)", "var(--font-bodoni)", "Georgia", "serif"],
        luxca: ["var(--font-luxca)", "var(--font-couture)", "var(--font-bodoni)", "Georgia", "serif"],
        careny: ["var(--font-careny)", "var(--font-bodoni)", "Georgia", "serif"],
        karimun: ["var(--font-karimun)", "var(--font-cormorant)", "Georgia", "serif"],
        editorial: ["var(--font-karimun)", "var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-luxca)", "var(--font-couture)", "var(--font-display)", "Georgia", "serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
