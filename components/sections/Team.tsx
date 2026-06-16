import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import Reveal from "@/components/utils/Reveal";

// TODO: substituir src pelas fotos reais da equipe quando a clínica enviar.
// TODO: substituir name e designation pelos dados reais (nome, especialidade/registro).
const teamMembers = [
  {
    quote:
      "Atuação voltada para fala, linguagem, comunicação, deglutição e desenvolvimento infantil, com acolhimento para crianças e famílias.",
    name: "Profissional de Fonoaudiologia",
    designation: "Fonoaudiologia",
    src: "/images/team/fonoaudiologia.svg",
  },
  {
    quote:
      "Acolhimento emocional, orientação familiar e acompanhamento terapêutico para diferentes fases da vida.",
    name: "Profissional de Psicologia",
    designation: "Psicologia",
    src: "/images/team/psicologia.svg",
  },
  {
    quote:
      "Avaliação especializada, orientação diagnóstica e acompanhamento para cuidado integral em saúde mental.",
    name: "Profissional de Psiquiatria",
    designation: "Psiquiatria",
    src: "/images/team/psiquiatria.svg",
  },
  {
    quote:
      "Acompanhamento voltado para reabilitação, fortalecimento, funcionalidade e melhora progressiva da qualidade de vida.",
    name: "Profissional de Reabilitação",
    designation: "Reabilitação",
    src: "/images/team/reabilitacao.svg",
  },
];

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative py-[112px] overflow-hidden"
      style={{ background: "#F8FBFC" }}
    >
      {/* Glow orbs sutis, mesmo padrão do Hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          right: -180,
          top: -80,
          background:
            "radial-gradient(circle, rgba(35,183,174,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          left: -160,
          bottom: -100,
          background:
            "radial-gradient(circle, rgba(75,11,107,0.07), transparent 70%)",
        }}
      />

      <div className="container relative z-10 flex flex-col items-center">
        {/* Header */}
        <Reveal className="text-center mb-12 max-w-[640px]">
          <span className="eyebrow">Equipe multidisciplinar</span>
          <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
            Nossa equipe de cuidado.
          </h2>
          <p
            className="text-base leading-[1.7] m-0"
            style={{ color: "var(--muted)" }}
          >
            Profissionais preparados para acolher, avaliar e acompanhar cada
            paciente com escuta, responsabilidade e atenção individualizada.
          </p>
        </Reveal>

        {/* Texto de apoio */}
        <Reveal className="text-center max-w-[560px] mb-14">
          <p
            className="text-sm leading-[1.75] m-0"
            style={{ color: "var(--muted)" }}
          >
            Na Espaço Vida, o cuidado é construído por diferentes olhares. Cada
            profissional contribui para um acompanhamento mais completo, humano
            e alinhado às necessidades de cada fase da vida.
          </p>
        </Reveal>

        {/* Componente circular */}
        <Reveal className="w-full flex justify-center">
          <CircularTestimonials
            testimonials={teamMembers}
            autoplay={true}
            colors={{
              name: "#25182F",
              designation: "#4B0B6B",
              testimony: "#74687D",
              arrowBackground: "#4B0B6B",
              arrowForeground: "#FFFFFF",
              arrowHoverBackground: "#23B7AE",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "1rem",
              quote: "1.05rem",
            }}
          />
        </Reveal>

        {/* Rodapé integrado */}
        <Reveal className="mt-14 w-full max-w-[620px] text-center">
          <div
            className="px-8 py-6 rounded-[20px] border"
            style={{
              background: "var(--teal-soft)",
              borderColor: "rgba(35, 183, 174, 0.30)",
            }}
          >
            <p
              className="text-sm font-[900] uppercase tracking-[0.12em] mb-2"
              style={{ color: "var(--mint-dark)" }}
            >
              Cuidado integrado em cada etapa
            </p>
            <p
              className="text-sm leading-[1.7] m-0"
              style={{ color: "var(--muted)" }}
            >
              As especialidades se conectam para compreender cada paciente de
              forma mais completa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
