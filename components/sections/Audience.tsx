import {
  Baby, Brain, HelpCircle, Users, HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

type AudienceCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const audienceCards: AudienceCard[] = [
  {
    icon: Baby,
    title: "Crianças em desenvolvimento",
    text: "Fala, aprendizagem, comportamento e rotina.",
  },
  {
    icon: Users,
    title: "Adolescentes",
    text: "Saúde emocional, comportamento e desafios da fase.",
  },
  {
    icon: Brain,
    title: "Adultos",
    text: "Saúde mental, reabilitação funcional e bem-estar.",
  },
  {
    icon: Users,
    title: "Famílias e responsáveis",
    text: "Orientação para quem acompanha o processo de cuidado.",
  },
  {
    icon: HeartHandshake,
    title: "Pessoas em reabilitação",
    text: "Recuperação, fortalecimento e qualidade de vida.",
  },
  {
    icon: HelpCircle,
    title: "Não sei por onde começar",
    text: "A equipe orienta o primeiro passo pelo WhatsApp.",
  },
];

export default function Audience() {
  return (
    <section
      id="para-quem"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2D083F 0%, #4B0B6B 55%, #5E1680 100%)",
      }}
    >
      {/* Radial glow discreto */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 600, height: 600, right: -180, top: -120,
          background: "radial-gradient(circle, rgba(35,183,174,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 400, height: 400, left: -120, bottom: -80,
          background: "radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span
              className="inline-block mb-3 text-xs font-[900] tracking-[0.18em] uppercase"
              style={{ color: "var(--mint)" }}
            >
              Para quem é
            </span>
            <h2 className="m-0 text-white">
              Cuidado para crianças,{" "}
              <br className="hidden sm:block" />
              adultos e famílias.
            </h2>
          </div>
          <p
            className="md:max-w-[340px] text-base leading-[1.65]"
            style={{ color: "rgba(255,255,255,0.68)" }}
          >
            Cada pessoa chega com uma necessidade. A primeira escuta ajuda a indicar o
            melhor caminho.
          </p>
        </Reveal>

        {/* Cards — glass cards todos iguais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {audienceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 60}>
                <article
                  className="card-hover flex flex-col gap-4 p-6 h-full"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: "24px",
                    backdropFilter: "blur(12px)",
                    transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  {/* Ícone em turquesa */}
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center shrink-0"
                    style={{ background: "rgba(35,183,174,0.20)", color: "var(--mint)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="m-0 leading-snug text-white"
                    style={{ fontSize: "1rem" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-[1.65] m-0"
                    style={{ color: "rgba(255,255,255,0.68)" }}
                  >
                    {card.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
