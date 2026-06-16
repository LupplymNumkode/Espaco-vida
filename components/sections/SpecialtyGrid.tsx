"use client";

import { useState } from "react";
import {
  Baby, Brain, CheckCircle2, ClipboardList,
  HeartHandshake, HelpCircle, MapPin, MessageCircle,
  Mic, Stethoscope, Users, ArrowRight, X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { specialties, type IconKey } from "@/lib/data";
import { buildWhatsappUrl, isWhatsappConfigured } from "@/lib/whatsapp";

const iconMap: Record<IconKey, LucideIcon> = {
  Baby, Brain, CheckCircle2, ClipboardList, HeartHandshake,
  HelpCircle, MapPin, MessageCircle, Mic, Stethoscope, Users,
};

type SpecialtyDetail = {
  title: string;
  subtitle: string;
  when: string;
  how: string;
  whatsappMessage: string;
};

const specialtyDetails: Record<string, SpecialtyDetail> = {
  Fonoaudiologia: {
    title: "Fonoaudiologia",
    subtitle: "Fala, linguagem, audição e comunicação",
    when: "Dificuldades na fala, linguagem, comunicação, audição ou desenvolvimento da comunicação.",
    how: "A avaliação orienta o melhor caminho para acompanhamento e evolução.",
    whatsappMessage: "Olá! Vim pelo site da Espaço Vida e gostaria de saber mais sobre Fonoaudiologia.",
  },
  Psicologia: {
    title: "Psicologia",
    subtitle: "Escuta, emoções, comportamento e saúde mental",
    when: "Dificuldades emocionais, comportamentais, ansiedade, saúde mental ou necessidade de acompanhamento terapêutico.",
    how: "A escuta acolhedora ajuda a construir um processo de cuidado personalizado.",
    whatsappMessage: "Olá! Vim pelo site da Espaço Vida e gostaria de saber mais sobre Psicologia.",
  },
  Psiquiatria: {
    title: "Psiquiatria",
    subtitle: "Avaliação clínica e acompanhamento especializado",
    when: "Necessidade de avaliação clínica especializada, acompanhamento medicamentoso ou orientação psiquiátrica.",
    how: "A avaliação inicial orienta o diagnóstico e o plano de acompanhamento mais adequado.",
    whatsappMessage: "Olá! Vim pelo site da Espaço Vida e gostaria de saber mais sobre Psiquiatria.",
  },
  "Atendimento infantil": {
    title: "Atendimento infantil",
    subtitle: "Desenvolvimento, aprendizagem, rotina e família",
    when: "Sinais no desenvolvimento infantil, dificuldades de aprendizagem, comportamento ou necessidades específicas.",
    how: "O acompanhamento integra criança e família no processo de cuidado.",
    whatsappMessage: "Olá! Vim pelo site da Espaço Vida e gostaria de saber mais sobre Atendimento infantil.",
  },
  Reabilitação: {
    title: "Reabilitação",
    subtitle: "Autonomia, funcionalidade e qualidade de vida",
    when: "Necessidade de recuperação funcional, fortalecimento, orientação ou melhora da qualidade de vida.",
    how: "O plano de reabilitação é construído de forma individualizada para cada paciente.",
    whatsappMessage: "Olá! Vim pelo site da Espaço Vida e gostaria de saber mais sobre Reabilitação.",
  },
  Avaliações: {
    title: "Avaliação inicial",
    subtitle: "Quando você ainda não sabe por onde começar",
    when: "Quando há uma percepção de que algo precisa de atenção mas ainda não está claro qual especialidade procurar.",
    how: "A equipe orienta com escuta e clareza sobre o melhor primeiro passo.",
    whatsappMessage: "Olá! Vim pelo site da Espaço Vida e gostaria de fazer uma avaliação inicial.",
  },
};

export default function SpecialtyGrid() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const detail = activeTitle ? specialtyDetails[activeTitle] : null;

  return (
    <section className="py-20" id="guia">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-[520px] mx-auto mb-10">
          <span className="eyebrow">Mapa de especialidades</span>
          <h2
            className="m-0"
            style={{ color: "var(--plum)", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)" }}
          >
            Encontre a especialidade certa para você.
          </h2>
          <p className="mt-3 text-sm leading-[1.65]" style={{ color: "var(--muted)" }}>
            Clique em qualquer área para ver quando procurar e como funciona o atendimento.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
            {specialties.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = activeTitle === item.title;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveTitle(isActive ? null : item.title)}
                  aria-expanded={isActive}
                  aria-controls={`specialty-detail-${item.title}`}
                  className="flex flex-col items-center gap-3 p-5 rounded-[20px] border text-center transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
                  style={{
                    background: isActive ? "var(--teal-soft)" : "#FFFFFF",
                    borderColor: isActive ? "var(--mint)" : "#E7DDEC",
                    boxShadow: isActive ? "var(--shadow-soft)" : "0 4px 16px rgba(75,11,107,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl grid place-items-center"
                    style={{
                      background: isActive ? "var(--mint)" : "var(--teal-soft)",
                      color: isActive ? "#fff" : "var(--purple)",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className="text-sm font-[900] leading-tight"
                    style={{ color: isActive ? "var(--purple)" : "var(--plum)" }}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div
            id={`specialty-detail-${activeTitle}`}
            role="region"
            aria-live="polite"
            aria-label="Detalhes da especialidade"
            className="lg:w-[380px] shrink-0 rounded-[24px] border transition-all duration-300"
            style={{
              background: detail ? "#FFFFFF" : "#F8FBFC",
              borderColor: detail ? "#D5C3E3" : "#E7DDEC",
              boxShadow: detail ? "var(--shadow)" : "none",
              padding: "28px",
              minHeight: 240,
            }}
          >
            {!detail ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-8">
                <div
                  className="w-14 h-14 rounded-2xl grid place-items-center"
                  style={{ background: "var(--teal-soft)", color: "var(--mint-dark)" }}
                >
                  <Stethoscope size={26} />
                </div>
                <div>
                  <p className="text-sm font-[800] m-0" style={{ color: "var(--plum)" }}>
                    Selecione uma especialidade
                  </p>
                  <p className="text-xs mt-1 m-0" style={{ color: "var(--muted)" }}>
                    Veja detalhes e inicie o atendimento com um clique.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3
                      className="font-black m-0"
                      style={{ color: "var(--plum)", fontSize: "1.25rem" }}
                    >
                      {detail.title}
                    </h3>
                    <p className="text-xs font-[700] mt-1 m-0" style={{ color: "var(--mint-dark)" }}>
                      {detail.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTitle(null)}
                    aria-label="Fechar detalhes"
                    className="w-8 h-8 rounded-full grid place-items-center shrink-0 transition-colors duration-200"
                    style={{ background: "var(--teal-soft)", color: "var(--purple)" }}
                  >
                    <X size={15} />
                  </button>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="p-4 rounded-xl" style={{ background: "#F8FBFC", border: "1px solid #E7DDEC" }}>
                    <p
                      className="text-xs font-[900] uppercase tracking-wider mb-2"
                      style={{ color: "var(--mint-dark)" }}
                    >
                      Quando buscar
                    </p>
                    <p className="text-sm leading-[1.6] m-0" style={{ color: "var(--text)" }}>
                      {detail.when}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: "#F8FBFC", border: "1px solid #E7DDEC" }}>
                    <p
                      className="text-xs font-[900] uppercase tracking-wider mb-2"
                      style={{ color: "var(--mint-dark)" }}
                    >
                      Como funciona
                    </p>
                    <p className="text-sm leading-[1.6] m-0" style={{ color: "var(--text)" }}>
                      {detail.how}
                    </p>
                  </div>
                </div>

                <a
                  href={buildWhatsappUrl(detail.whatsappMessage)}
                  {...(isWhatsappConfigured
                    ? { target: "_blank", rel: "noreferrer" }
                    : { onClick: (e) => e.preventDefault() })}
                  aria-disabled={!isWhatsappConfigured || undefined}
                  aria-label={`Falar sobre ${detail.title} pelo WhatsApp`}
                  className="inline-flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-sm font-[900] text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--purple)",
                    boxShadow: "0 14px 36px rgba(75, 11, 107, 0.24)",
                    opacity: isWhatsappConfigured ? 1 : 0.6,
                  }}
                >
                  <FaWhatsapp size={16} /> Tenho interesse
                  <ArrowRight size={15} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
