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
  { label: "Exames", href: "#exames" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Espaço", href: "#galeria" },
  { label: "Equipe", href: "#profissionais" },
  { label: "Localização", href: "#localizacao" },
  { label: "Dúvidas", href: "#faq" },
] as const;

// ---------------------------------------------------------------------------
// Specialties
// ---------------------------------------------------------------------------

export type IconKey =
  | "AudioLines"
  | "Baby"
  | "Brain"
  | "BrainCircuit"
  | "CheckCircle2"
  | "ClipboardList"
  | "Ear"
  | "GraduationCap"
  | "HeartHandshake"
  | "HelpCircle"
  | "MapPin"
  | "MessageCircle"
  | "Mic"
  | "PersonStanding"
  | "Puzzle"
  | "Salad"
  | "Stethoscope"
  | "Users";

export type Specialty = {
  /** Identificador estável — usado como key e para rotular o diálogo (aria). */
  slug: string;
  title: string;
  /** Frase curta e acolhedora exibida no card. */
  tagline: string;
  /** Camada 1 — "Conhecer": visão breve e introdutória. */
  brief: string;
  /** Camada 2 — "Entender a especialidade": um parágrafo por item. */
  deep: string[];
  icon: IconKey;
  whatsappMessage: string;
};

export const specialties: Specialty[] = [
  {
    slug: "fonoaudiologia",
    title: "Fonoaudiologia",
    tagline:
      "Cuidado com a fala, a linguagem, a voz, a audição e a comunicação em cada fase da vida.",
    brief:
      "Atua na prevenção, avaliação e tratamento das dificuldades relacionadas à fala, linguagem, comunicação, voz, audição e deglutição, contribuindo para uma comunicação mais eficiente e para o desenvolvimento integral.",
    deep: [
      "A Fonoaudiologia é a especialidade que cuida da comunicação humana em diferentes fases da vida. Atua na prevenção, avaliação e tratamento de questões relacionadas à fala, linguagem, audição, voz, motricidade orofacial e deglutição.",
      "Seu trabalho é essencial para crianças, adolescentes e adultos que apresentam dificuldades para se comunicar, compreender, ouvir, falar com clareza, mastigar, engolir ou desenvolver habilidades importantes para o convívio, a aprendizagem e a qualidade de vida.",
      "Com um olhar atento e acolhedor, a Fonoaudiologia busca compreender as necessidades de cada paciente e oferecer um acompanhamento individualizado, respeitando seu desenvolvimento e sua singularidade.",
    ],
    icon: "Mic",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Fonoaudiologia na Espaço Vida.",
  },
  {
    slug: "psicologia",
    title: "Psicologia",
    tagline:
      "Um espaço de escuta e acolhimento para o cuidado emocional e a saúde mental.",
    brief:
      "Oferece acolhimento e acompanhamento emocional, auxiliando crianças, adolescentes e suas famílias no enfrentamento de desafios, no desenvolvimento das habilidades socioemocionais e na promoção da saúde mental.",
    deep: [
      "A Psicologia é uma área voltada ao cuidado emocional, ao autoconhecimento e ao fortalecimento da saúde mental. Por meio de escuta qualificada e acompanhamento humanizado, auxilia crianças, adolescentes e suas famílias no enfrentamento de dificuldades emocionais, comportamentais e relacionais.",
      "Também contribui para o desenvolvimento das habilidades socioemocionais, para a construção de estratégias de enfrentamento e para a promoção do bem-estar no dia a dia.",
      "É um espaço de acolhimento, compreensão e cuidado, no qual cada história é respeitada e cada processo é conduzido com sensibilidade e responsabilidade.",
    ],
    icon: "Brain",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Psicologia na Espaço Vida.",
  },
  {
    slug: "psicopedagogia",
    title: "Psicopedagogia",
    tagline:
      "Estratégias personalizadas para superar dificuldades de aprendizagem.",
    brief:
      "Tem como foco identificar e intervir nas dificuldades de aprendizagem, desenvolvendo estratégias que favoreçam o processo de ensino e aprendizagem de forma personalizada.",
    // TODO: texto "Entender a especialidade" redigido pela Numkode — a cliente enviou
    // apenas o texto curto para Psicopedagogia. Validar com ela antes de publicar.
    deep: [
      "A Psicopedagogia é a área que estuda como cada pessoa aprende e o que pode estar dificultando esse processo. Seu foco é identificar as barreiras que aparecem na leitura, na escrita, no raciocínio, na organização e na rotina de estudos.",
      "A partir de uma avaliação cuidadosa, são construídas estratégias personalizadas que respeitam o ritmo, o histórico e a forma de aprender de cada criança ou adolescente, sempre em parceria com a família e, quando necessário, com a escola.",
      "O objetivo não é apenas melhorar o desempenho escolar, mas devolver a confiança de quem aprende — para que aprender volte a ser uma experiência possível e mais leve.",
    ],
    icon: "GraduationCap",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Psicopedagogia na Espaço Vida.",
  },
  {
    slug: "neuropsicopedagogia",
    title: "Neuropsicopedagogia",
    tagline:
      "Compreender como cada criança aprende para apoiar seu desenvolvimento com segurança.",
    brief:
      "Integra conhecimentos da educação, da psicologia e das neurociências para compreender como o cérebro aprende, avaliando e intervindo em alterações que impactam o desenvolvimento cognitivo e a aprendizagem.",
    deep: [
      "A Neuropsicopedagogia é uma área que une educação, psicologia e neurociências para compreender os processos de aprendizagem e identificar fatores que podem interferir no desenvolvimento cognitivo e escolar.",
      "Seu trabalho busca avaliar e intervir em dificuldades que envolvem atenção, memória, raciocínio, organização, leitura, escrita e outros aspectos importantes para aprender com mais segurança e autonomia.",
      "Com um olhar acolhedor e individualizado, a Neuropsicopedagogia ajuda a construir estratégias que favorecem o desenvolvimento do potencial de cada criança e adolescente, respeitando seu ritmo e suas necessidades.",
    ],
    icon: "Puzzle",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Neuropsicopedagogia na Espaço Vida.",
  },
  {
    slug: "psiquiatria-infantil",
    title: "Psiquiatria Infantil",
    tagline:
      "Acompanhamento médico especializado para a saúde mental de crianças e adolescentes.",
    brief:
      "Especialidade médica voltada à avaliação, diagnóstico e tratamento dos transtornos mentais e do neurodesenvolvimento em crianças e adolescentes, sempre considerando as necessidades individuais de cada paciente.",
    deep: [
      "A Psiquiatria Infantil é uma especialidade médica dedicada à saúde mental de crianças e adolescentes. Atua na avaliação, no diagnóstico e no tratamento de condições que podem impactar o desenvolvimento emocional, comportamental, social e cognitivo.",
      "O cuidado é realizado de forma individualizada, considerando a história, o contexto e as necessidades de cada paciente e de sua família.",
      "Com um olhar técnico e ao mesmo tempo acolhedor, a Psiquiatria Infantil pode auxiliar em situações que envolvem sofrimento emocional, alterações de comportamento, transtornos do neurodesenvolvimento e outras questões que merecem acompanhamento especializado.",
    ],
    icon: "Stethoscope",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre Psiquiatria Infantil na Espaço Vida.",
  },
  {
    slug: "fisioterapia",
    title: "Fisioterapia",
    tagline:
      "Movimento, equilíbrio e autonomia para viver o dia a dia com mais liberdade.",
    brief:
      "Promove a prevenção, reabilitação e o desenvolvimento das funções motoras, auxiliando na melhora da mobilidade, da coordenação, do equilíbrio e da independência funcional.",
    deep: [
      "A Fisioterapia é uma especialidade voltada à prevenção, à reabilitação e ao aprimoramento das funções motoras. Seu objetivo é promover mais movimento, funcionalidade, conforto e qualidade de vida.",
      "Pode auxiliar no desenvolvimento da coordenação, do equilíbrio, da mobilidade e da independência funcional, sempre de forma individualizada e respeitosa.",
      "Com um atendimento acolhedor e centrado nas necessidades de cada paciente, a Fisioterapia contribui para o desenvolvimento motor e para o ganho de autonomia nas atividades do dia a dia.",
    ],
    icon: "PersonStanding",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Fisioterapia na Espaço Vida.",
  },
  {
    slug: "nutricao",
    title: "Nutrição",
    tagline:
      "Alimentação orientada com escuta e cuidado, respeitando a rotina de cada pessoa.",
    brief:
      "Desenvolve planos alimentares individualizados, promovendo hábitos saudáveis, crescimento adequado, prevenção de doenças e melhor qualidade de vida por meio de uma alimentação equilibrada.",
    deep: [
      "A Nutrição é a área responsável por orientar e acompanhar a alimentação de forma individualizada, considerando as necessidades, a rotina, a fase da vida e os objetivos de cada paciente.",
      "Seu trabalho contribui para a formação de hábitos saudáveis, para o crescimento e desenvolvimento adequados, para a prevenção de doenças e para a promoção de mais saúde e qualidade de vida.",
      "Com escuta, cuidado e orientação personalizada, a Nutrição busca construir uma relação mais equilibrada e positiva com a alimentação.",
    ],
    icon: "Salad",
    whatsappMessage: "Olá! Gostaria de saber mais sobre Nutrição na Espaço Vida.",
  },
];

// ---------------------------------------------------------------------------
// Exames audiológicos
// ---------------------------------------------------------------------------

export type AudiologyExam = {
  slug: string;
  title: string;
  /** Texto curto do card. */
  tagline: string;
  /** Texto complementar — só o exame em destaque usa. */
  complement?: string;
  /** Conteúdo completo da mini janela. */
  deep?: string[];
  /** Fechamento acolhedor da mini janela. */
  closing?: string;
  featured: boolean;
  icon: IconKey;
  whatsappMessage: string;
};

export const audiologyIntro = {
  title: "Exames audiológicos para crianças e adultos",
  subtitle:
    "A avaliação audiológica ajuda a compreender como está a audição, identificar possíveis alterações e orientar o cuidado mais adequado para cada pessoa.",
  text:
    "A avaliação audiológica é um conjunto de exames que permite analisar como está a audição, identificando possíveis alterações e auxiliando no diagnóstico e no tratamento adequado.",
};

export const audiologyExams: AudiologyExam[] = [
  {
    slug: "audiometria-tonal-e-vocal",
    title: "Audiometria Tonal e Vocal",
    tagline:
      "Avalia a capacidade de ouvir diferentes sons e frequências, além de verificar como a pessoa compreende e reconhece a fala no dia a dia.",
    featured: false,
    icon: "AudioLines",
    whatsappMessage:
      "Olá! Gostaria de agendar uma Audiometria Tonal e Vocal na Espaço Vida.",
  },
  {
    slug: "imitanciometria",
    title: "Imitanciometria",
    tagline:
      "Examina o funcionamento da orelha média, avaliando a mobilidade do tímpano e dos ossículos, além de pesquisar os reflexos auditivos. É um exame importante para identificar alterações como otites, disfunções da tuba auditiva e outras condições.",
    featured: false,
    icon: "Ear",
    whatsappMessage: "Olá! Gostaria de agendar uma Imitanciometria na Espaço Vida.",
  },
  {
    slug: "processamento-auditivo-central",
    title: "Processamento Auditivo Central — PAC",
    tagline:
      "Avalia como o cérebro interpreta e organiza os sons, mesmo quando a audição está normal.",
    complement:
      "É indicado para crianças, adolescentes e adultos com queixas de atenção, aprendizagem, compreensão auditiva ou dificuldade para entender a fala em ambientes com ruído.",
    deep: [
      "O exame de Processamento Auditivo Central — PAC — avalia como o cérebro organiza e interpreta os sons, mesmo quando a audição está normal.",
      "Ele é realizado por um fonoaudiólogo, em cabine acústica, com fones de ouvido. Durante a avaliação, o paciente escuta sons, sílabas, palavras ou frases e responde conforme as instruções, como repetir, apontar, identificar ou diferenciar sons.",
      "Os testes analisam habilidades como localização sonora, discriminação auditiva, memória auditiva, atenção auditiva e compreensão da fala no ruído.",
      "É um exame simples, indolor e não invasivo, indicado para crianças, adolescentes e adultos com queixas de atenção, aprendizagem ou dificuldade de compreensão auditiva.",
    ],
    closing:
      "Com uma avaliação adequada, é possível compreender melhor as dificuldades auditivas e construir estratégias mais direcionadas para o desenvolvimento, a aprendizagem e a comunicação.",
    featured: true,
    icon: "BrainCircuit",
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação de Processamento Auditivo Central (PAC) na Espaço Vida.",
  },
];

export const audiologyWhy = {
  title: "Você sabe o que é uma avaliação audiológica?",
  paragraphs: [
    "A avaliação audiológica é fundamental para crianças, adolescentes e adultos que apresentam dificuldades para ouvir, compreender a fala, aprender, se comunicar ou que possuem suspeita de alterações auditivas.",
    "Cuidar da audição é essencial para aprender, se comunicar e viver com mais qualidade de vida.",
  ],
};

// ---------------------------------------------------------------------------
// Aquisição dos fonemas da fala — bloco educativo
// ---------------------------------------------------------------------------

export const phonemesBlock = {
  title: "Aquisição dos fonemas da fala",
  subtitle:
    "Observar o desenvolvimento da fala é um cuidado importante para identificar quando a criança pode precisar de acompanhamento.",
  text:
    "Os sons da fala, chamados fonemas, são adquiridos em uma sequência esperada ao longo do desenvolvimento infantil. Cada fonema costuma surgir em uma determinada fase, e conhecer esse processo é fundamental para identificar quando há necessidade de acompanhamento.",
  checklistTitle: "É importante observar se a criança:",
  checklist: [
    "Troca ou omite sons que já deveriam estar presentes na fala.",
    "Apresenta dificuldade para produzir determinados fonemas.",
    "Tem a fala pouco compreensível para a idade.",
    "Encontra dificuldade para se comunicar com outras pessoas.",
  ],
  closing: [
    "A identificação precoce de alterações na aquisição dos fonemas favorece uma intervenção mais eficaz, contribuindo para o desenvolvimento da comunicação, da aprendizagem e das habilidades sociais.",
    "Na dúvida, procure um fonoaudiólogo. Uma avaliação especializada pode identificar se o desenvolvimento da fala está dentro do esperado e orientar a família sobre os próximos passos.",
    "Acompanhar o desenvolvimento da fala é um cuidado que faz toda a diferença no futuro da criança.",
  ],
  whatsappMessage:
    "Olá! Gostaria de agendar uma avaliação fonoaudiológica do desenvolvimento da fala na Espaço Vida.",
};

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

// Destaques rápidos do Hero — refletem o que a clínica oferece hoje.
// A antiga "5.0 avaliação no Google" foi removida: estava com confirmed: false
// e mesmo assim sendo publicada. Não republicar nota sem confirmar no Google.
export const trustItems: TrustItem[] = [
  { value: "7", label: "especialidades integradas", confirmed: true },
  { value: "3", label: "exames audiológicos", confirmed: true },
  { value: "PAC", label: "Processamento Auditivo Central", confirmed: true },
  { value: "Todas as idades", label: "crianças, adolescentes e adultos", confirmed: true },
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
// Team
//
// ORIGEM: documento enviado pela cliente em 2026-07-14 ("Imgs profissionais").
//
// ⚠️ O conteúdo de `bio` é TEXTO LITERAL da cliente. NÃO resumir, NÃO reescrever,
// NÃO cortar e NÃO "melhorar" a redação. Cada item do array é um parágrafo do
// documento original, na ordem original. Alterações só com autorização dela.
//
// `role` e `registration` foram apenas separados em campos distintos — as
// palavras e a grafia dos registros seguem exatamente como ela enviou.
// ---------------------------------------------------------------------------

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  registration: string;
  /** Texto literal da cliente — um item por parágrafo. Não resumir. */
  bio: string[];
  photoSrc: string;
  confirmed: boolean;
  whatsappMessage: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "leticia-oliveira",
    name: "Letícia Oliveira",
    role: "Psicóloga",
    registration: "CRP 12/20750",
    bio: [
      "Formada em Psicologia pela UNIBAVE. Especialista em Terapia Cognitiva Comportamental e Neuropsicologia. Pós graduanda em Psicologia Infantil.",
      "Direcionando os atendimentos para crianças, adolescentes e jovens adultos, orientação parental e reabilitação cognitiva.",
    ],
    photoSrc: "/images/team/leticia-oliveira.jpeg",
    confirmed: true,
    whatsappMessage:
      "Olá! Gostaria de agendar um atendimento com a psicóloga Letícia Oliveira na Espaço Vida.",
  },
  {
    slug: "poliana-souza",
    name: "Poliana Souza",
    role: "Nutricionista",
    registration: "CRN 6398",
    bio: [
      "Pós-graduada em Fitoterapia e Suplementação Clínica e Esportiva E Modulação Intestinal.",
      "Atuou na área clínica no Instituto de Cardiologia de SC, com experiência em pesquisa no Laboratório de Comportamento e Consumo Alimentar (CAAFE/UFSC). Também possui experiência como Responsável Técnica em produção alimentícia e em unidades escolares.",
      "Realiza um atendimento nutricional humanizado, com foco em saúde, qualidade de vida, nutrição com afeto e acompanhamento individualizado.",
    ],
    photoSrc: "/images/team/poliana-souza.jpeg",
    confirmed: true,
    whatsappMessage:
      "Olá! Gostaria de agendar um atendimento com a nutricionista Poliana Souza na Espaço Vida.",
  },
  {
    slug: "ana-claudia-pfleger",
    name: "Ana Cláudia Pfleger",
    role: "Fonoaudióloga",
    registration: "CRFª 3 - 11234",
    bio: [
      "Formada pela Universidade Federal de Santa Catarina no ano de 2018. Especialista em Atenção Básica/Saúde da Família pela Univali. Pós-graduada em Análise do Comportamento Aplicado ao TEA pela faculdade Censupeg. Pós-graduada em Fonoaudiologia na Avaliação e Intervenção em Linguagem Infantil pela faculdade Unyleya. Possui formação em Comunicação Alternativa Aumentativa.",
      "Atendimentos voltados para o público infantil, com foco no atendimento individualizado e desenvolvimento da comunicação.",
    ],
    photoSrc: "/images/team/ana-claudia-pfleger.jpeg",
    confirmed: true,
    whatsappMessage:
      "Olá! Gostaria de agendar um atendimento com a fonoaudióloga Ana Cláudia Pfleger na Espaço Vida.",
  },
  {
    slug: "ana-beatriz-silveira-zacchi-pereira",
    name: "Ana Beatriz Silveira Zacchi Pereira",
    role: "Fonoaudióloga",
    registration: "CRFa 8131- SC",
    bio: [
      "Fonoaudióloga formada pela Universidade do Vale do Itajaí (UNIVALI) em 2001, com 25 anos de atuação clínica dedicados à promoção da saúde, da comunicação e da qualidade de vida de seus pacientes.",
      "Possui ampla experiência nas áreas de Audiologia Clínica, com ênfase em avaliação audiológica, avaliação e terapia do Transtorno do Processamento Auditivo Central (TPAC), além de atuação nas áreas de voz, fala e linguagem.",
      "É especialista em Motricidade Orofacial pelo CEFAC, em Curitiba, desde 2003, e ao longo de sua trajetória profissional realizou diversos cursos de aperfeiçoamento, mantendo-se em constante atualização para oferecer atendimentos baseados em conhecimento científico, escuta individualizada e cuidado humanizado.",
      "Seu trabalho é voltado para a realização de avaliações clínicas precisas e para o desenvolvimento de planos terapêuticos personalizados, contribuindo para o aprimoramento das habilidades auditivas, comunicativas e funcionais de crianças, adolescentes, adultos e idosos.",
    ],
    photoSrc: "/images/team/ana-beatriz-silveira-zacchi-pereira.jpeg",
    confirmed: true,
    whatsappMessage:
      "Olá! Gostaria de agendar um atendimento com a fonoaudióloga Ana Beatriz Silveira Zacchi Pereira na Espaço Vida.",
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
    question: "Precisa de encaminhamento médico?",
    answer:
      "Em geral, não é necessário encaminhamento para dar início ao processo. O primeiro passo pode ser uma avaliação inicial, onde a equipe orienta o melhor caminho a seguir.",
  },
  {
    question: "A clínica atende por convênio?",
    answer:
      "Não. O atendimento é exclusivamente particular — a clínica não trabalha com convênios. Pelo WhatsApp, a equipe pode passar valores e formas de pagamento e orientar sobre o melhor caminho para o seu atendimento.",
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
// mapsDirectionsUrl is a search-based URL used only by the directions button.
// ---------------------------------------------------------------------------

export const locationData = {
  address: "Rua José Maria da Luz, 2891, 3º andar",
  building: "Centro Empresarial Zacchi & Costa",
  city: "Palhoça",
  state: "SC",
  // TODO: confirmar CEP com cliente
  postalCode: null as string | null,
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.2558789985937!2d-48.6669!3d-27.647554000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735f4ce237015%3A0xa17f5b45dea3c2e4!2zRXNwYcOnbyBWaWRhIFJlYWJpbGl0YcOnw6Nv!5e0!3m2!1spt-BR!2sbr!4v1784165305739!5m2!1spt-BR!2sbr",
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
  "Fonoaudiologia",
  "Psicologia",
  "Psicopedagogia",
  "Neuropsicopedagogia",
  "Psiquiatria Infantil",
  "Fisioterapia",
  "Nutrição",
  "Administrativo / Recepção",
  "Outra área",
] as const;
