import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Praweena NS | KHAIRA Atelier",
    short_name: "KHAIRA",
    description: "Poetry in Thread, Modern in Silhouette.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F1E8",
    theme_color: "#1C1A20",
    icons: [
      {
        src: "/brand/khaira-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
