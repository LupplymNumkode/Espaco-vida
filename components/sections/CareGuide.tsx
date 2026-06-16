"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { careGuideSteps, getCareGuideResult, getCareGuideWhatsappMessage } from "@/lib/data";
import { buildWhatsappUrl, isWhatsappConfigured } from "@/lib/whatsapp";

type GuideValues = Record<string, string>;

export default function CareGuide() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<GuideValues>({});
  const isDone = step >= careGuideSteps.length;

  function handleSelect(key: string, option: string) {
    setValues((prev) => ({ ...prev, [key]: option }));
    setStep((s) => s + 1);
  }

  function handleReset() {
    setValues({});
    setStep(0);
  }

  const currentStep = careGuideSteps[step];
  const resultText = isDone ? getCareGuideResult(values.necessidade ?? "") : null;
  const whatsappHref = isDone
    ? buildWhatsappUrl(
        getCareGuideWhatsappMessage({
          publico: values.publico ?? "",
          necessidade: values.necessidade ?? "",
          objetivo: values.objetivo ?? "",
        })
      )
    : "#";

  return (
    <section
      className="py-[112px]"
      id="guia-interativo"
      style={{ background: "var(--lilac)" }}
    >
      <div className="container">
        {/* Header centralizado */}
        <div className="text-center max-w-[580px] mx-auto mb-12">
          <span className="eyebrow">Guia de especialidades</span>
          <h2 className="m-0" style={{ color: "var(--plum)" }}>
            Qual especialidade é certa para você?
          </h2>
          <p className="mt-4 text-base leading-[1.65]" style={{ color: "var(--muted)" }}>
            Responda 3 perguntas rápidas para entender qual caminho faz mais sentido.
          </p>
        </div>

        {/* Card do quiz — max 580px */}
        <div
          className="max-w-[580px] mx-auto rounded-[28px] border p-7 sm:p-8"
          style={{
            background: "#FFFFFF",
            borderColor: "#E7DDEC",
            boxShadow: "var(--shadow)",
          }}
        >
          {/* Progress bar refinada */}
          <div className="flex items-center gap-2 mb-8">
            {careGuideSteps.map((s, i) => (
              <div
                key={s.key}
                className="h-[5px] flex-1 rounded-full transition-all duration-400"
                style={{
                  background:
                    i < step
                      ? "var(--mint)"
                      : i === step && !isDone
                      ? "rgba(35,183,174,0.3)"
                      : "#E7DDEC",
                }}
                aria-hidden
              />
            ))}
          </div>

          {!isDone && currentStep && (
            <div>
              <p
                className="text-xs font-[900] uppercase tracking-[0.14em] mb-3"
                style={{ color: "var(--mint-dark)" }}
              >
                Pergunta {step + 1} de {careGuideSteps.length}
              </p>
              <h3
                className="font-black mb-6 m-0"
                style={{ color: "var(--plum)", fontSize: "1.25rem" }}
              >
                {currentStep.question}
              </h3>

              <div className="flex flex-col gap-2.5">
                {currentStep.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelect(currentStep.key, option)}
                    className="flex items-center justify-between gap-3 p-4 rounded-2xl border text-sm font-[700] text-left transition-all duration-200 hover:-translate-y-px"
                    style={{
                      color: "var(--plum)",
                      borderColor: "#E7DDEC",
                      background: "#F8FBFC",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--mint)";
                      el.style.background = "var(--teal-soft)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "#E7DDEC";
                      el.style.background = "#F8FBFC";
                    }}
                  >
                    <span>{option}</span>
                    <ArrowRight size={15} style={{ color: "var(--mint-dark)", flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {isDone && resultText && (
            <div className="flex flex-col gap-5">
              {/* Card de resultado */}
              <div
                className="p-5 rounded-2xl border"
                style={{
                  background: "var(--teal-soft)",
                  borderColor: "rgba(35,183,174,0.3)",
                }}
              >
                <p
                  className="text-base leading-[1.65] font-[600] m-0"
                  style={{ color: "var(--plum)" }}
                >
                  {resultText}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappHref}
                  {...(isWhatsappConfigured
                    ? { target: "_blank", rel: "noreferrer" }
                    : { onClick: (e) => e.preventDefault() })}
                  aria-disabled={!isWhatsappConfigured || undefined}
                  aria-label="Chamar no WhatsApp para orientação"
                  className="flex-1 inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-full text-sm font-[900] text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--purple)",
                    boxShadow: "0 16px 38px rgba(75, 11, 107, 0.24)",
                    opacity: isWhatsappConfigured ? 1 : 0.6,
                  }}
                >
                  <FaWhatsapp size={16} /> Chamar no WhatsApp
                </a>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 h-[52px] px-5 rounded-full text-sm font-[900] border transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    color: "var(--purple)",
                    borderColor: "#E7DDEC",
                    background: "#FFFFFF",
                  }}
                >
                  <RotateCcw size={15} /> Reiniciar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
