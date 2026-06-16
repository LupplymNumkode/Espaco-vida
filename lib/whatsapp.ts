/**
 * Central WhatsApp utility for Espaço Vida Reabilitação.
 *
 * TODO: Replace WHATSAPP_NUMBER with the real number confirmed by the client.
 * Current value is a placeholder — do NOT publish without confirming.
 * See: 08-clientes/espacovida/CHECKLIST_DADOS_PENDENTES.md
 */

// TODO: confirmar com cliente — número atual é placeholder
const WHATSAPP_NUMBER: string | null = null;

/**
 * Returns a wa.me link if the number is confirmed, otherwise returns "#" (safe placeholder).
 * When the link is "#", the button should also receive aria-disabled="true".
 */
export function buildWhatsappUrl(message: string): string {
  if (!WHATSAPP_NUMBER) {
    return "#";
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const isWhatsappConfigured = WHATSAPP_NUMBER !== null;

export const whatsappMessages = {
  default: "Olá! Gostaria de falar com a Espaço Vida.",
  avaliation: "Olá! Gostaria de agendar uma avaliação na Espaço Vida.",
  location: "Olá! Gostaria de saber como chegar na Espaço Vida.",
  specialty: (name: string) =>
    `Olá! Gostaria de saber mais sobre ${name} na Espaço Vida.`,
  workWithUs: (fields: {
    nome: string;
    email: string;
    telefone: string;
    area: string;
    mensagem: string;
  }) =>
    [
      "Olá! Gostaria de enviar meu interesse para trabalhar com a Espaço Vida.",
      "",
      `Nome: ${fields.nome}`,
      `E-mail: ${fields.email}`,
      `Telefone: ${fields.telefone}`,
      `Área: ${fields.area}`,
      `Mensagem: ${fields.mensagem}`,
    ].join("\n"),
} as const;
