import { siteConfig } from "./seo";
import { locationData, audiologyExams } from "./data";
import { WHATSAPP_E164 } from "./whatsapp";

/**
 * Schema.org JSON-LD for Espaço Vida Reabilitação.
 *
 * Only confirmed data is included. Fields with pending confirmation
 * are omitted entirely to avoid publishing incorrect information.
 *
 * TODOs:
 * - Add openingHours when locationData.hours is confirmed
 * - Add aggregateRating when real Google reviews are collected
 * - Add employee array when team data is confirmed
 * - Add sameAs additional profiles if any
 *
 * See: 08-clientes/espacovida/CHECKLIST_DADOS_PENDENTES.md
 */
export function buildClinicSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: WHATSAPP_E164,
    logo: `${siteConfig.url}/assets/espaco-vida/espaco-vida-logo-transparent.png`,
    image: `${siteConfig.url}/assets/espaco-vida/ImagemHero.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address,
      addressLocality: locationData.city,
      addressRegion: locationData.state,
      addressCountry: siteConfig.country,
      ...(locationData.postalCode && { postalCode: locationData.postalCode }),
    },
    geo: {
      "@type": "GeoCoordinates",
      // TODO: substituir pelas coordenadas reais da clínica
      latitude: null,
      longitude: null,
    },
    medicalSpecialty: [
      "Fonoaudiologia",
      "Psicologia",
      "Psicopedagogia",
      "Neuropsicopedagogia",
      "Psiquiatria Infantil",
      "Fisioterapia",
      "Nutrição",
    ],
    // Exames audiológicos oferecidos — o PAC é o destaque comercial da clínica.
    availableService: audiologyExams.map((exam) => ({
      "@type": "MedicalTest",
      name: exam.title,
      description: exam.tagline,
    })),
    sameAs: [
      siteConfig.instagram,
      // TODO: adicionar Google Business Profile URL quando confirmado
    ],
    // TODO: adicionar quando horários forem confirmados pelo cliente:
    // openingHoursSpecification: [...],

    // TODO: adicionar quando reviews reais forem coletadas:
    // aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "N" },
  };

  // Remove geo entirely if coordinates are not set
  if (!schema.geo || (schema.geo as Record<string, unknown>).latitude === null) {
    delete schema.geo;
  }

  return schema;
}
