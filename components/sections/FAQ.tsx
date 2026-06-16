"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data";
import Reveal from "@/components/utils/Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="py-20" id="faq">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Sidebar */}
          <Reveal className="lg:w-[320px] shrink-0">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2
              className="m-0"
              style={{ color: "var(--plum)", fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
            >
              Respostas simples para decisões mais seguras.
            </h2>
            <p className="mt-4 text-base leading-[1.65]" style={{ color: "var(--muted)" }}>
              Ainda tem alguma dúvida que não está aqui? A equipe responde pelo WhatsApp.
            </p>

            {/* Accent card — desktop only */}
            <div
              className="mt-8 p-5 rounded-2xl border hidden lg:block"
              style={{
                background: "var(--teal-soft)",
                borderColor: "rgba(35,183,174,0.25)",
              }}
            >
              <p className="text-sm leading-[1.65] m-0" style={{ color: "var(--plum)" }}>
                <strong>Primeiro contato sem compromisso.</strong>{" "}
                <span style={{ color: "var(--muted)" }}>
                  Você pode chamar no WhatsApp para tirar qualquer dúvida antes de agendar uma avaliação.
                </span>
              </p>
            </div>
          </Reveal>

          {/* Accordion */}
          <div className="flex-1 flex flex-col gap-2.5">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className="rounded-2xl border overflow-hidden transition-all duration-200"
                  style={{
                    background: isOpen ? "#FFFFFF" : "#FAFAFA",
                    borderColor: isOpen ? "#D5C3E3" : "#E7DDEC",
                    boxShadow: isOpen ? "var(--shadow-soft)" : "none",
                  }}
                >
                  <button
                    type="button"
                    id={`faq-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200"
                    onMouseEnter={(e) => {
                      if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = "var(--teal-soft)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isOpen) (e.currentTarget as HTMLButtonElement).style.background = "";
                    }}
                  >
                    <span
                      className="text-[0.92rem] font-[800] leading-snug"
                      style={{ color: isOpen ? "var(--purple)" : "var(--plum)" }}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      size={19}
                      aria-hidden
                      className="shrink-0 transition-transform duration-300"
                      style={{
                        color: "var(--purple)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    hidden={!isOpen}
                    className="px-5 pb-5"
                  >
                    <p
                      className="text-sm leading-[1.65] m-0 pt-3"
                      style={{ color: "var(--muted)", borderTop: "1px solid #E7DDEC" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
