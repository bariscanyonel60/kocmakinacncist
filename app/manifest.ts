import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KOC Makina CNC",
    short_name: "KOC Makina",
    description: "İstanbul'da CNC torna, CNC işleme ve talaşlı imalat.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0D10",
    theme_color: "#0B0D10",
    lang: "tr",
  };
}
