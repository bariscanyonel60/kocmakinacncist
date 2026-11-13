import type { MetadataRoute } from "next";
import { images } from "@/data/media";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KOC Makina CNC",
    short_name: "KOC Makina",
    description: "İstanbul’da CNC torna, CNC işleme ve hassas talaşlı imalat.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0D10",
    theme_color: "#0B0D10",
    lang: "tr",
    icons: [
      { src: images.favicon16, sizes: "16x16", type: "image/png" },
      { src: images.favicon32, sizes: "32x32", type: "image/png" },
      { src: images.icon192, sizes: "192x192", type: "image/png", purpose: "any" },
      { src: images.icon512, sizes: "512x512", type: "image/png", purpose: "any" },
      { src: images.logoOnDark, sizes: "676x364", type: "image/png", purpose: "any" },
    ],
  };
}
