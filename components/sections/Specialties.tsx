"use client";

import { useCallback, useState } from "react";
import { BookOpen, HelpCircle, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { specialties, type Specialty } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import { whatsappMessages } from "@/lib/whatsapp";
import Modal from "@/components/ui/Modal";
import SpecialtyCard, { type SpecialtyView } from "@/components/ui/SpecialtyCard";
import WhatsappLink from "@/components/ui/WhatsappLink";
import Reveal from "@/components/utils/Reveal";

const TITLE_ID = "especialidade-dialogo-titulo";

type Active = { specialty: Specialty; view: SpecialtyView };

export default function Specialties() {
  const [active, setActive] = useState<Active | null>(null);
  const close = useCallback(() => setActive(null), []);

  const Icon = active ? iconMap[active.specialty.icon] : null;
  const isDeep = active?.view === "deep";

  return (
    <section className="py-24" id="especialidades">
      <div className="container">
        <Reveal className="text-center max-w-[620px] mx-auto mb-14">
          <span className="eyebrow">Especialidades</span>
          <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
            Nossas Especialidades
          </h2>
          <p className="text-base leading-[1.7] m-0" style={{ color: "var(--muted)" }}>
            Um cuidado multiprofissional, acolhedor e personalizado para apoiar o
            desenvolvimento, a comunicação, a saúde emocional, a aprendizagem e a
            qualidade de vida.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((specialty, index) => (
            <Reveal key={specialty.slug} delay={index * 55}>
              <SpecialtyCard
                specialty={specialty}
                icon={iconMap[specialty.icon]}
                index={index}
                onOpen={(view) => setActive({ specialty, view })}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <WhatsappLink
            message={whatsappMessages.guidance}
            aria-label="Falar com a equipe para saber qual especialidade procurar"
            className="inline-flex items-center gap-2 h-[50px] px-6 rounded-full text-sm font-[900] border transition-all duration-200 hover:-translate-y-0.5"
            style={{
              color: "var(--purple)",
              borderColor: "var(--line)",
              background: "#FFFFFF",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <HelpCircle size={17} />
            Não sei qual escolher — falar com a equipe
          </WhatsappLink>
        </Reveal>
      </div>

      <Modal open={active !== null} onClose={close} labelledBy={TITLE_ID}>
        {active && Icon && (
          <div className="p-7 sm:p-9 pt-6">
            <div
              className="w-12 h-12 rounded-xl grid place-items-center mb-5"
              style={{ background: "var(--teal-soft)", color: "var(--purple)" }}
            >
              <Icon size={23} />
            </div>

            <span className="eyebrow flex items-center gap-1.5">
              {isDeep ? <BookOpen size={13} /> : <Sparkles size={13} />}
              {isDeep ? "Sobre a especialidade" : "Visão geral"}
            </span>

            <h3
              id={TITLE_ID}
              className="m-0 mb-4 text-[clamp(1.4rem,2.4vw,1.75rem)]"
              style={{ color: "var(--plum)" }}
            >
              {active.specialty.title}
            </h3>

            <div className="flex flex-col gap-4">
              {(isDeep ? active.specialty.deep : [active.specialty.brief]).map(
                (paragraph, index) => (
                  <p
                    key={`${active.specialty.slug}-${index}`}
                    className="text-sm leading-[1.75] m-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Ponte para a camada profunda — sem forçar quem só queria a visão rápida */}
            {!isDeep && (
              <button
                type="button"
                onClick={() => setActive({ ...active, view: "deep" })}
                className="inline-flex items-center gap-2 mt-5 text-sm font-[900] transition-all duration-200 hover:gap-3"
                style={{ color: "var(--purple)" }}
              >
                <BookOpen size={15} />
                Entender a especialidade
              </button>
            )}

            <div
              className="mt-7 pt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between"
              style={{ borderTop: "1px solid var(--line)" }}
            >
              <p className="text-sm leading-[1.55] m-0" style={{ color: "var(--muted)" }}>
                Precisa de orientação?
                <br className="hidden sm:block" /> Fale com nossa equipe.
              </p>

              <WhatsappLink
                message={active.specialty.whatsappMessage}
                aria-label={`Agendar atendimento — ${active.specialty.title}`}
                className="inline-flex items-center justify-center gap-2 h-[46px] px-5 rounded-full text-sm font-[900] text-white shrink-0 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--purple)",
                  boxShadow: "0 14px 36px rgba(75, 11, 107, 0.24)",
                }}
              >
                <FaWhatsapp size={16} />
                Agendar atendimento
              </WhatsappLink>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
