"use client";

import Reveal from "@/components/utils/Reveal";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const team = [
  {
    name: "Ana Cláudia Pfleger",
    designation: "Fonoaudióloga — CRFa 3-11234",
    quote:
      "Atendo crianças com foco no desenvolvimento da comunicação e no cuidado individualizado, respeitando o ritmo e as necessidades de cada paciente.",
    src: "/images/team/ana-claudia-pfleger.jpeg",
  },
  {
    name: "Poliana Souza",
    designation: "Nutricionista — CRN 6398",
    quote:
      "Realizo um atendimento nutricional humanizado, com foco em saúde, qualidade de vida e nutrição com afeto, respeitando a individualidade de cada pessoa.",
    src: "/images/team/poliana-souza.jpeg",
  },
];

export default function TeamMembers() {
  return (
    <section
      id="profissionais"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--lilac)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          left: -200,
          top: -100,
          background:
            "radial-gradient(circle, rgba(35,183,174,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          right: -160,
          bottom: -120,
          background:
            "radial-gradient(circle, rgba(75,11,107,0.07), transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <Reveal className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="eyebrow">Quem cuida de você</span>
          <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
            Conheça nossa equipe.
          </h2>
          <p
            className="text-base leading-[1.7] m-0"
            style={{ color: "var(--muted)" }}
          >
            Profissionais comprometidos com o cuidado integral, que unem
            formação técnica e escuta humanizada em cada atendimento.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex items-center justify-center">
            <CircularTestimonials
              testimonials={team}
              autoplay={true}
              colors={{
                name: "#25182F",
                designation: "#23B7AE",
                testimony: "#74687D",
                arrowBackground: "#4B0B6B",
                arrowForeground: "#F8FBFC",
                arrowHoverBackground: "#23B7AE",
              }}
              fontSizes={{
                name: "26px",
                designation: "15px",
                quote: "17px",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
