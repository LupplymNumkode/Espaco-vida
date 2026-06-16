import {
  Brain,
  HeartHandshake,
  Mic,
  Stethoscope,
  Baby,
  ClipboardList,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

const areas: { Icon: LucideIcon; area: string; description: string }[] = [
  {
    Icon: Mic,
    area: "Fonoaudiologia",
    description:
      "Atuação em fala, linguagem, comunicação, deglutição e desenvolvimento infantil, com escuta atenta para crianças e famílias.",
  },
  {
    Icon: Brain,
    area: "Psicologia",
    description:
      "Acolhimento emocional, orientação familiar e acompanhamento terapêutico para diferentes fases da vida.",
  },
  {
    Icon: Stethoscope,
    area: "Psiquiatria",
    description:
      "Avaliação especializada, orientação diagnóstica e acompanhamento para cuidado integral em saúde mental.",
  },
  {
    Icon: HeartHandshake,
    area: "Reabilitação",
    description:
      "Acompanhamento para reabilitação, fortalecimento, funcionalidade e melhora progressiva da qualidade de vida.",
  },
  {
    Icon: Baby,
    area: "Atendimento infantil",
    description:
      "Suporte ao desenvolvimento global com atenção à criança e orientação à família ao longo do processo.",
  },
  {
    Icon: ClipboardList,
    area: "Avaliações",
    description:
      "Avaliação inicial para entender qual especialidade faz mais sentido para cada necessidade e momento de vida.",
  },
];

export default function Team() {
  return (
    <section
      id="equipe"
      className="relative py-24 overflow-hidden"
      style={{ background: "#F8FBFC" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 520,
          height: 520,
          right: -180,
          top: -80,
          background: "radial-gradient(circle, rgba(35,183,174,0.10), transparent 70%)",
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
          background: "radial-gradient(circle, rgba(75,11,107,0.07), transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <Reveal className="text-center mb-12 max-w-[600px] mx-auto">
          <span className="eyebrow">Equipe multidisciplinar</span>
          <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
            Nossa equipe de cuidado.
          </h2>
          <p className="text-base leading-[1.7] m-0" style={{ color: "var(--muted)" }}>
            Profissionais preparados para acolher, avaliar e acompanhar cada
            paciente com escuta, responsabilidade e atenção individualizada.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((item, i) => {
            const Icon = item.Icon;
            return (
              <Reveal key={item.area} delay={i * 55}>
                <article
                  className="card-hover flex flex-col gap-4 p-6 rounded-[24px] border h-full"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#E7DDEC",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center"
                    style={{ background: "var(--teal-soft)", color: "var(--purple)" }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="m-0 font-black"
                    style={{ color: "var(--plum)", fontSize: "1rem" }}
                  >
                    {item.area}
                  </h3>
                  <p
                    className="text-sm leading-[1.65] flex-1 m-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 max-w-[580px] mx-auto text-center">
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
            <p className="text-sm leading-[1.7] m-0" style={{ color: "var(--muted)" }}>
              As especialidades se conectam para compreender cada paciente de
              forma mais completa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
