"use client";

import { FaWhatsapp } from "react-icons/fa";
import { teamMembers } from "@/lib/data";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import WhatsappLink from "@/components/ui/WhatsappLink";
import { whatsappMessages } from "@/lib/whatsapp";
import Reveal from "@/components/utils/Reveal";

/**
 * Apresentação da equipe com o componente AnimatedTestimonials.
 *
 * Cada profissional vira um "slide": foto, nome, cargo · registro e todos os
 * parágrafos enviados pela cliente (bio, texto literal — ver lib/data.ts).
 * São pessoas reais da clínica; não há conteúdo fabricado.
 */
export default function TeamMembers() {
  const members = teamMembers.filter((member) => member.confirmed);
  if (members.length === 0) return null;

  const testimonials = members.map((member) => ({
    quote: member.bio,
    name: member.name,
    designation: `${member.role} · ${member.registration}`,
    src: member.photoSrc,
  }));

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
          background: "radial-gradient(circle, rgba(35,183,174,0.08), transparent 70%)",
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
          background: "radial-gradient(circle, rgba(75,11,107,0.07), transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        <Reveal className="text-center mb-4 max-w-[620px] mx-auto">
          <span className="eyebrow">Quem cuida de você</span>
          <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
            Conheça nossa equipe.
          </h2>
          <p className="text-base leading-[1.7] m-0" style={{ color: "var(--muted)" }}>
            Profissionais comprometidos com o cuidado integral, que unem formação
            técnica e escuta humanizada em cada atendimento.
          </p>
        </Reveal>

        <Reveal>
          <AnimatedTestimonials testimonials={testimonials} />
        </Reveal>

        <div className="flex justify-center mt-2">
          <WhatsappLink
            message={whatsappMessages.avaliation}
            aria-label="Agendar avaliação com a equipe da Espaço Vida"
            className="inline-flex items-center justify-center gap-2 h-[46px] px-6 rounded-full text-sm font-[900] text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--purple)",
              boxShadow: "0 14px 36px rgba(75, 11, 107, 0.24)",
            }}
          >
            <FaWhatsapp size={16} />
            Agendar avaliação
          </WhatsappLink>
        </div>
      </div>
    </section>
  );
}
