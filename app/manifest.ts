import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Espaço Vida Reabilitação",
    short_name: "Espaço Vida",
    description: "Clínica multidisciplinar e exames audiológicos em Palhoça/SC.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8FBFC",
    theme_color: "#4B0B6B",
    lang: "pt-BR",
    icons: [{ src: "/assets/espaco-vida/logo-192.png", sizes: "192x192", type: "image/png" }],
  };
}
