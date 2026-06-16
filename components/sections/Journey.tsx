import {
  MapPin, ClipboardList, MessageCircle, HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { journeySteps, type IconKey } from "@/lib/data";
import Reveal from "@/components/utils/Reveal";

const iconMap: Partial<Record<IconKey, LucideIcon>> = {
  MapPin,
  ClipboardList,
  MessageCircle,
  HeartHandshake,
};

const isHighlighted = (index: number) => index === 0 || index === journeySteps.length - 1;

export default function Journey() {
  return (
    <section className="py-20" id="como-funciona">
      <div className="container">
        {/* Header */}
        <Reveal className="text-center max-w-[560px] mx-auto mb-12">
          <span className="eyebrow">Como funciona</span>
          <h2 className="m-0" style={{ color: "var(--plum)" }}>
            Uma jornada simples para começar com segurança.
          </h2>
          <p className="mt-4 text-base leading-[1.65]" style={{ color: "var(--muted)" }}>
            Do interesse inicial ao primeiro atendimento, cada etapa é pensada para tornar
            o cuidado acessível.
          </p>
        </Reveal>

        {/* Steps */}
        <div className="relative">
          {/* Linha horizontal — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[30px] h-px"
            style={{
              left: "calc(12.5% + 20px)",
              right: "calc(12.5% + 20px)",
              background: "linear-gradient(90deg, transparent, #D5C3E3 15%, #D5C3E3 85%, transparent)",
            }}
          />

          {/* Desktop: 4 colunas | Mobile: timeline vertical */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6 relative z-10">
            {journeySteps.map((step, index) => {
              const Icon = iconMap[step.icon] ?? MapPin;
              const highlight = isHighlighted(index);
              const isLast = index === journeySteps.length - 1;

              return (
                <Reveal
                  key={step.title}
                  delay={index * 80}
                  className="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center pb-8 lg:pb-0"
                >
                  {/* Círculo da etapa */}
                  <div className="relative flex flex-col items-center lg:mb-5 shrink-0">
                    <div
                      className="relative w-[60px] h-[60px] rounded-full grid place-items-center border-4 border-white"
                      style={{
                        background: highlight
                          ? "var(--purple)"
                          : "var(--teal-soft)",
                        boxShadow: highlight
                          ? "0 14px 36px rgba(75, 11, 107, 0.22)"
                          : "0 10px 28px rgba(75, 11, 107, 0.08)",
                        color: highlight ? "#fff" : "var(--purple)",
                      }}
                    >
                      <Icon size={22} />
                      {/* Badge numerado em turquesa */}
                      <span
                        className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-[900] grid place-items-center"
                        style={{
                          background: "var(--mint)",
                          color: "#fff",
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>

                    {/* Linha vertical mobile */}
                    {!isLast && (
                      <div
                        aria-hidden
                        className="lg:hidden w-px mt-3"
                        style={{
                          height: 40,
                          background: "linear-gradient(180deg, #D5C3E3, transparent)",
                        }}
                      />
                    )}
                  </div>

                  {/* Texto */}
                  <div className="pt-1 lg:pt-0 lg:mt-4 lg:px-2">
                    <h3
                      className="m-0 mb-2 leading-snug"
                      style={{ color: "var(--plum)", fontSize: "0.95rem" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm leading-[1.65] m-0"
                      style={{ color: "var(--muted)" }}
                    >
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Nota */}
        <Reveal>
          <div
            className="mt-14 mx-auto max-w-[580px] p-5 rounded-2xl text-center text-sm leading-relaxed border"
            style={{
              background: "var(--teal-soft)",
              borderColor: "rgba(35,183,174,0.25)",
              color: "var(--muted)",
            }}
          >
            <strong style={{ color: "var(--plum)" }}>Cada caminho é único.</strong>{" "}
            A jornada descrita é uma orientação geral. O plano de acompanhamento é sempre
            construído de forma individualizada com base na necessidade de cada paciente.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
