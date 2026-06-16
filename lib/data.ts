/**
 * Central data file for Espaço Vida Reabilitação.
 * Migrated from: previews/EspacoVida/site/espacoVidaSiteData.ts
 *
 * Fields marked with TODO require confirmation from the client before publishing.
 * See: 08-clientes/espacovida/CHECKLIST_DADOS_PENDENTES.md
 */

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Guia interativo", href: "#guia" },
  { label: "Quem somos", href: "#sobre" },
  { label: "Equipe", href: "#equipe" },
  { label: "Localização", href: "#localizacao" },
  { label: "Trabalhe conosco", href: "#trabalhe" },
  { label: "Dúvidas", href: "#faq" },
] as const;

// ---------------------------------------------------------------------------
// Specialties
// ---------------------------------------------------------------------------

export type IconKey =
  | "Baby"
  | "Brain"
  | "CheckCircle2"
  | "ClipboardList"
  | "HeartHandshake"
  | "HelpCircle"
  | "MapPin"
  | "MessageCircle"
  | "Mic"
  | "Stethoscope"
  | "Users";

export type Specialty = {
  title: string;
  text: string;
  icon: IconKey;
  cta: string;
  whatsappMessage: string;
};

export const specialties: Specialty[] = [
  {
    title: "Fonoaudiologia",
    text: "Atendimento voltado para fala, linguagem, voz, comunicação, deglutição e desenvolvimento infantil.",
    icon: "Mic",
    cta: "Tenho interesse",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Fonoaudiologia na Espaço Vida.",
  },
  {
    title: "Psicologia",
    text: "Acolhimento emocional, orientação familiar, saúde mental, desenvolvimento e acompanhamento terapêutico.",
    icon: "Brain",
    cta: "Tenho interesse",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Psicologia na Espaço Vida.",
  },
  {
    title: "Psiquiatria",
    text: "Avaliação e acompanhamento especializado para diagnóstico, tratamento e evolução do paciente.",
    icon: "Stethoscope",
    cta: "Tenho interesse",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Psiquiatria na Espaço Vida.",
  },
  {
    title: "Reabilitação",
    text: "Recuperação funcional, fortalecimento, orientação e cuidado individualizado para melhora da qualidade de vida.",
    icon: "HeartHandshake",
    cta: "Tenho interesse",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Reabilitação na Espaço Vida.",
  },
  {
    title: "Atendimento infantil",
    text: "Acompanhamento para fala, comportamento, aprendizagem, desenvolvimento e suporte às famílias.",
    icon: "Baby",
    cta: "Tenho interesse",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Atendimento infantil na Espaço Vida.",
  },
  {
    title: "Avaliações",
    text: "Primeira escuta, direcionamento e construção de um plano de cuidado personalizado para cada necessidade.",
    icon: "ClipboardList",
    cta: "Começar avaliação",
    whatsappMessage: "Olá! Gostaria de começar uma avaliação na Espaço Vida.",
  },
];

// ---------------------------------------------------------------------------
// Trust Rail
// NOTE: these indicators need confirmation from the client.
// Do not publish placeholder numbers as real facts.
// ---------------------------------------------------------------------------

export type TrustItem = {
  value: string;
  label: string;
  confirmed: boolean;
};

// TODO: confirmar todos os valores abaixo com o cliente
export const trustItems: TrustItem[] = [
  { value: "5.0", label: "avaliação no Google", confirmed: false },
  { value: "4+", label: "áreas de cuidado integradas", confirmed: true },
  { value: "Centro", label: "Palhoça/SC", confirmed: true },
  { value: "Escuta", label: "primeiro contato com clareza", confirmed: true },
];

// ---------------------------------------------------------------------------
// Audiences
// ---------------------------------------------------------------------------

export type AudienceItem = {
  title: string;
  text: string;
  icon: IconKey;
};

export const audiences: AudienceItem[] = [
  {
    title: "Famílias",
    text: "Orientação para quem busca entender sinais, comportamentos e caminhos de cuidado.",
    icon: "Users",
  },
  {
    title: "Crianças",
    text: "Acompanhamento do desenvolvimento, fala, aprendizagem, rotina e comportamento.",
    icon: "Baby",
  },
  {
    title: "Adultos",
    text: "Suporte para saúde mental, reabilitação, desafios emocionais e qualidade de vida.",
    icon: "Brain",
  },
  {
    title: "Primeira avaliação",
    text: "Para quem ainda não sabe exatamente qual especialidade procurar e precisa de direcionamento.",
    icon: "HelpCircle",
  },
];

// ---------------------------------------------------------------------------
// Journey
// ---------------------------------------------------------------------------

export type JourneyStep = {
  title: string;
  text: string;
  icon: IconKey;
};

export const journeySteps: JourneyStep[] = [
  {
    title: "Você encontra a clínica",
    text: "Pelo Google, Instagram, indicação ou link na bio, você chega a uma página clara e acolhedora.",
    icon: "MapPin",
  },
  {
    title: "Entende as possibilidades",
    text: "Você conhece as especialidades e identifica qual caminho faz mais sentido para sua necessidade.",
    icon: "ClipboardList",
  },
  {
    title: "Conversa pelo WhatsApp",
    text: "A equipe orienta sobre horários, avaliação, endereço e próximos passos do atendimento.",
    icon: "MessageCircle",
  },
  {
    title: "Inicia o cuidado",
    text: "A primeira avaliação ajuda a construir um plano de acompanhamento personalizado.",
    icon: "HeartHandshake",
  },
];

// ---------------------------------------------------------------------------
// Team
// NOTE: All team cards are placeholder — awaiting real data from client.
// Do NOT publish without real names, specialties and professional registrations.
// ---------------------------------------------------------------------------

export type TeamMember = {
  name: string | null;
  role: string;
  registration: string | null;
  bio: string;
  photoSrc: string | null;
  confirmed: boolean;
};

// TODO: confirmar nome, especialidade, registro (CRP/CRFa/CRM) e foto de cada profissional
export const teamMembers: TeamMember[] = [
  {
    name: null,
    role: "Psicologia / Saúde mental",
    registration: null,
    bio: "Espaço reservado para formação, área de atuação e forma de cuidado do profissional.",
    photoSrc: null,
    confirmed: false,
  },
  {
    name: null,
    role: "Fonoaudiologia / Desenvolvimento",
    registration: null,
    bio: "Campo preparado para público atendido, abordagem e diferenciais do profissional.",
    photoSrc: null,
    confirmed: false,
  },
  {
    name: null,
    role: "Reabilitação / Avaliações",
    registration: null,
    bio: "Apresentação breve para transmitir confiança antes do primeiro contato pelo WhatsApp.",
    photoSrc: null,
    confirmed: false,
  },
];

// ---------------------------------------------------------------------------
// Reviews
// NOTE: Placeholder reviews — must be replaced with real, authorized testimonials.
// ---------------------------------------------------------------------------

export type Review = {
  text: string;
  author: string | null;
  confirmed: boolean;
};

// TODO: substituir por depoimentos reais com autorização dos pacientes
export const reviews: Review[] = [
  {
    text: "Atendimento acolhedor, equipe cuidadosa e ambiente que transmite confiança.",
    author: null,
    confirmed: false,
  },
  {
    text: "Desde o primeiro contato, a orientação acontece com calma e respeito.",
    author: null,
    confirmed: false,
  },
  {
    text: "Profissionais atenciosos, explicações claras e acompanhamento humano.",
    author: null,
    confirmed: false,
  },
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Como sei qual especialidade procurar?",
    answer:
      "Você pode usar o guia interativo do site ou chamar no WhatsApp. A equipe orienta qual caminho faz mais sentido conforme a necessidade apresentada — sem julgamento, com calma.",
  },
  {
    question: "A clínica atende crianças e adultos?",
    answer:
      "Sim. A Espaço Vida atende diferentes fases da vida: crianças em desenvolvimento, adolescentes, adultos e famílias. Cada atendimento é ajustado à necessidade e ao momento de cada pessoa.",
  },
  {
    question: "É necessário encaminhamento médico?",
    answer:
      "Em geral, não é necessário encaminhamento para dar início ao processo. O primeiro passo pode ser uma avaliação inicial, onde a equipe orienta o melhor caminho a seguir.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "O paciente ou familiar chama pelo WhatsApp, informa a necessidade principal e recebe orientação sobre avaliação, disponibilidade e próximos passos do atendimento.",
  },
  {
    question: "A clínica atende por convênio?",
    // TODO: confirmar com cliente se há convênios aceitos
    answer:
      "A confirmação sobre convênios aceitos pode ser feita diretamente com a equipe da clínica pelo WhatsApp. Eles orientam sobre as opções disponíveis.",
  },
  {
    question: "Onde fica o Espaço Vida Reabilitação?",
    answer:
      "A clínica fica no Centro Empresarial Zacchi & Costa, na Rua José Maria da Luz, 2891, 3º andar, em Palhoça/SC. A localização exata pode ser encontrada pelo Google Maps.",
  },
  {
    question: "Como agendar uma avaliação?",
    answer:
      "O agendamento é feito diretamente pelo WhatsApp. A equipe orienta sobre a melhor data, horário e qual profissional é mais indicado para a sua necessidade.",
  },
  {
    question: "Como enviar currículo ou interesse em trabalhar na clínica?",
    answer:
      "Você pode enviar seu interesse pela seção 'Trabalhe Conosco' neste site. Preencha o formulário e sua mensagem chegará à equipe pelo WhatsApp.",
  },
];

// ---------------------------------------------------------------------------
// Location
// NOTE: mapsEmbedSrc is null — awaiting real Google Maps embed URL from client.
// mapsDirectionsUrl is a search-based URL, not a direct embed. Do NOT use as embed.
// ---------------------------------------------------------------------------

export const locationData = {
  address: "Rua José Maria da Luz, 2891, 3º andar",
  building: "Centro Empresarial Zacchi & Costa",
  city: "Palhoça",
  state: "SC",
  // TODO: confirmar CEP com cliente
  postalCode: null as string | null,
  // TODO: inserir src real do embed do Google Maps (iframe)
  mapsEmbedSrc: null as string | null,
  // Fallback URL para botão "Abrir no Maps"
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Centro+Empresarial+Zacchi+%26+Costa+Rua+Jos%C3%A9+Maria+da+Luz+2891+Palho%C3%A7a+SC",
  // TODO: confirmar horários de atendimento com cliente
  hours: null as string | null,
};

// ---------------------------------------------------------------------------
// WorkWithUs
// ---------------------------------------------------------------------------

export const workWithUsAreas = [
  "Psicologia",
  "Fonoaudiologia",
  "Psiquiatria",
  "Fisioterapia / Reabilitação",
  "Administrativo / Recepção",
  "Outra área",
] as const;

// ---------------------------------------------------------------------------
// CareGuide steps
// ---------------------------------------------------------------------------

export type GuideStep = {
  key: string;
  question: string;
  options: string[];
};

export const careGuideSteps: GuideStep[] = [
  {
    key: "publico",
    question: "Para quem é o atendimento?",
    options: ["Criança", "Adolescente", "Adulto", "Família", "Ainda não sei"],
  },
  {
    key: "necessidade",
    question: "O que você percebe ou busca neste momento?",
    options: [
      "Fala, linguagem ou comunicação",
      "Saúde emocional ou comportamento",
      "Avaliação psiquiátrica",
      "Desenvolvimento infantil",
      "Reabilitação ou autonomia",
      "Não sei por onde começar",
    ],
  },
  {
    key: "objetivo",
    question: "O que você gostaria de fazer agora?",
    options: [
      "Conversar com a equipe",
      "Entender as especialidades",
      "Ver localização",
      "Agendar uma avaliação inicial",
    ],
  },
];

export function getCareGuideResult(necessidade: string): string {
  if (necessidade.includes("Fala") || necessidade.includes("linguagem") || necessidade.includes("comunicação")) {
    return "Pelo que você informou, a Fonoaudiologia pode ser um bom primeiro caminho. A equipe da Espaço Vida pode orientar com calma sobre avaliação e próximos passos.";
  }
  if (necessidade.includes("emocional") || necessidade.includes("comportamento")) {
    return "Pelo que você informou, a Psicologia pode ser um bom primeiro contato. A equipe pode orientar com clareza sobre o processo de avaliação.";
  }
  if (necessidade.includes("psiquiátrica")) {
    return "Pelo que você informou, a Psiquiatria pode ser o primeiro passo. A equipe orienta sobre avaliação inicial e próximos passos.";
  }
  if (necessidade.includes("infantil") || necessidade.includes("Desenvolvimento")) {
    return "Pelo que você informou, o Atendimento infantil pode ser o caminho mais indicado. A equipe orienta com atenção às necessidades da criança e da família.";
  }
  if (necessidade.includes("Reabilitação") || necessidade.includes("autonomia")) {
    return "Pelo que você informou, a Reabilitação pode ser um bom primeiro caminho. A equipe orienta sobre avaliação e plano de cuidado.";
  }
  return "O melhor primeiro passo é conversar com a equipe para uma orientação inicial. A Espaço Vida ajuda a identificar qual caminho faz mais sentido para você.";
}

export function getCareGuideWhatsappMessage(values: {
  publico: string;
  necessidade: string;
  objetivo: string;
}): string {
  return [
    "Olá! Vim pelo site da Espaço Vida e gostaria de orientação.",
    "",
    `Atendimento para: ${values.publico || "Não informado"}`,
    `O que estou buscando/percebendo: ${values.necessidade || "Não informado"}`,
    `Meu objetivo agora: ${values.objetivo || "Não informado"}`,
    "",
    "Gostaria de saber qual seria o melhor primeiro caminho.",
  ].join("\n");
}
