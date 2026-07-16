import type { Metadata } from "next";

/**
 * SEO configuration for Espaço Vida Reabilitação.
 *
 * TODOs before publishing:
 * - Confirm official Google Business Profile name (googleBusinessName)
 * - Confirm final domain (url)
 * - Add real OG image: /assets/espaco-vida/og-image.jpg (1200×630)
 * - Replace mapsEmbedUrl with real Google Maps embed src
 *
 * See: 08-clientes/espacovida/CHECKLIST_DADOS_PENDENTES.md
 */

export const siteConfig = {
  name: "Espaço Vida Reabilitação",
  // TODO: confirmar nome oficial no Google Business Profile
  googleBusinessName: null as string | null,
  tagline: "Cuidado humano para cada fase da vida.",
  description:
    "Clínica multidisciplinar e exames audiológicos em Palhoça/SC. Fonoaudiologia, Psicologia, Nutrição e avaliação PAC. Agende pelo WhatsApp.",
  // TODO: confirmar domínio real com cliente
  url: "https://espacovidareabilitacao.com.br",
  locale: "pt_BR",
  city: "Palhoça",
  state: "SC",
  region: "SC",
  country: "BR",
  address: "Rua José Maria da Luz, 2891, 3º andar — Centro Empresarial Zacchi & Costa",
  // TODO: confirmar CEP
  postalCode: null as string | null,
  instagram: "https://www.instagram.com/espacovidareabilitacao/",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.2558789985937!2d-48.6669!3d-27.647554000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735f4ce237015%3A0xa17f5b45dea3c2e4!2zRXNwYcOnbyBWaWRhIFJlYWJpbGl0YcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1784165305739!5m2!1spt-BR!2sbr",
  mapsDirectionsUrl: "https://maps.app.goo.gl/akhsTRsYmH8r7w468",
};

export const defaultMetadata: Metadata = {
  title: {
    default: `Clínica e exames em Palhoça | Espaço Vida`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    // Exames — foco comercial atual da clínica
    "processamento auditivo central Palhoça",
    "exame PAC Palhoça",
    "PAC fonoaudiologia Palhoça SC",
    "exames audiológicos Palhoça",
    "audiometria Palhoça SC",
    "imitanciometria Palhoça",
    "avaliação audiológica infantil Palhoça",
    "teste de processamento auditivo Palhoça",
    // Especialidades
    "fonoaudiologia Palhoça SC",
    "psicologia Palhoça SC",
    "psicopedagogia Palhoça",
    "neuropsicopedagogia Palhoça",
    "psiquiatria infantil Palhoça",
    "fisioterapia Palhoça SC",
    "nutrição Palhoça SC",
    // Marca e genéricos
    "clínica multidisciplinar Palhoça",
    "Espaço Vida Reabilitação",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{
      url: "/assets/espaco-vida/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Espaço Vida Reabilitação em Palhoça",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/assets/espaco-vida/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    // TODO: confirmar URL canônica após domínio definido
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
