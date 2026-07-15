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
    "Clínica multidisciplinar em Palhoça/SC. Especialidades: Fonoaudiologia, Psicologia, " +
    "Psicopedagogia, Neuropsicopedagogia, Psiquiatria Infantil, Fisioterapia e Nutrição. " +
    "Exames audiológicos: Audiometria Tonal e Vocal, Imitanciometria e Processamento " +
    "Auditivo Central (PAC). Atendimento acolhedor para crianças, adolescentes, adultos e famílias.",
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
  // TODO: inserir src real do embed do Google Maps (iframe)
  mapsEmbedUrl: null as string | null,
  // Fallback de busca — usar apenas para botão de direções
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Centro+Empresarial+Zacchi+%26+Costa+Rua+Jos%C3%A9+Maria+da+Luz+2891+Palho%C3%A7a+SC",
};

export const defaultMetadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
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
    // TODO: adicionar og-image quando disponível:
    // images: [{ url: "/assets/espaco-vida/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    // TODO: adicionar twitter:image quando og-image estiver pronto
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
    // TODO: adicionar apple-touch-icon
  },
};
