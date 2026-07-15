"use client";

import { useCallback, useState } from "react";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  audiologyExams,
  audiologyIntro,
  audiologyWhy,
  type AudiologyExam,
} from "@/lib/data";
import { iconMap } from "@/lib/icons";
import Modal from "@/components/ui/Modal";
import WhatsappLink from "@/components/ui/WhatsappLink";
import Reveal from "@/components/utils/Reveal";

const TITLE_ID = "exame-dialogo-titulo";

export default function AudiologyExams() {
  const [active, setActive] = useState<AudiologyExam | null>(null);
  const close = useCallback(() => setActive(null), []);

  const standard = audiologyExams.filter((exam) => !exam.featured);
  const featured = audiologyExams.find((exam) => exam.featured);
  const ActiveIcon = active ? iconMap[active.icon] : null;

  return (
    <section className="py-24" id="exames" style={{ background: "var(--surface-soft)" }}>
      <div className="container">
        <Reveal className="text-center max-w-[640px] mx-auto mb-12">
          <span className="eyebrow">Exames Audiológicos</span>
          <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
            {audiologyIntro.title}
          </h2>
          <p className="text-base leading-[1.7] m-0" style={{ color: "var(--muted)" }}>
            {audiologyIntro.subtitle}
          </p>
        </Reveal>

        <Reveal className="max-w-[720px] mx-auto mb-12">
          <p
            className="text-center text-[0.95rem] leading-[1.75] m-0"
            style={{ color: "var(--muted)" }}
          >
            {audiologyIntro.text}
          </p>
        </Reveal>

        {/* Exames padrão */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {standard.map((exam, index) => {
            const Icon = iconMap[exam.icon];
            return (
              <Reveal key={exam.slug} delay={index * 55}>
                <article
                  className="card-hover group flex flex-col gap-4 p-6 md:p-7 rounded-[24px] border h-full"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "var(--line)",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl grid place-items-center transition-transform duration-300 group-hover:scale-105"
                    style={{ background: "var(--teal-soft)", color: "var(--purple)" }}
                  >
                    <Icon size={23} />
                  </div>

                  <h3 className="m-0" style={{ color: "var(--plum)" }}>
                    {exam.title}
                  </h3>

                  <p
                    className="text-sm leading-[1.7] flex-1 m-0"
                    style={{ color: "var(--muted)" }}
                  >
                    {exam.tagline}
                  </p>

                  <WhatsappLink
                    message={exam.whatsappMessage}
                    aria-label={`Agendar ${exam.title}`}
                    className="inline-flex items-center gap-2 mt-1 text-sm font-[900] transition-all duration-200 hover:gap-3"
                    style={{ color: "var(--purple)" }}
                  >
                    Agendar avaliação <ArrowRight size={15} />
                  </WhatsappLink>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* PAC — exame em destaque */}
        {featured && (
          <Reveal delay={110}>
            <article
              className="relative mt-5 rounded-[28px] overflow-hidden p-8 sm:p-10"
              style={{
                background:
                  "linear-gradient(135deg, #2D083F 0%, #4B0B6B 55%, #5E1680 100%)",
                boxShadow: "var(--shadow-strong)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-20 w-72 h-72 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(35,183,174,0.30), transparent 70%)",
                }}
              />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-[640px]">
                  <span
                    className="inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[0.72rem] font-[900] tracking-[0.08em] uppercase mb-5"
                    style={{ background: "var(--mint)", color: "#0E2E2C" }}
                  >
                    <Sparkles size={13} />
                    Exame em destaque
                  </span>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
                      style={{
                        background: "rgba(255,255,255,0.12)",
                        color: "#FFFFFF",
                        border: "1px solid rgba(255,255,255,0.18)",
                      }}
                    >
                      {(() => {
                        const Icon = iconMap[featured.icon];
                        return <Icon size={23} />;
                      })()}
                    </div>

                    <div>
                      <h3
                        className="m-0 text-[clamp(1.3rem,2.4vw,1.8rem)]"
                        style={{ color: "#FFFFFF" }}
                      >
                        {featured.title}
                      </h3>
                      <p
                        className="mt-3 text-[0.95rem] leading-[1.7] m-0"
                        style={{ color: "rgba(255,255,255,0.90)" }}
                      >
                        {featured.tagline}
                      </p>
                      {featured.complement && (
                        <p
                          className="mt-3 text-sm leading-[1.7] m-0"
                          style={{ color: "rgba(255,255,255,0.72)" }}
                        >
                          {featured.complement}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActive(featured)}
                    className="inline-flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-sm font-[900] transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: "#FFFFFF", color: "var(--purple)" }}
                  >
                    Entender o exame PAC <ArrowRight size={15} />
                  </button>

                  <WhatsappLink
                    message={featured.whatsappMessage}
                    aria-label="Agendar avaliação PAC pelo WhatsApp"
                    className="inline-flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-sm font-[900] border transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      color: "#FFFFFF",
                      background: "rgba(255,255,255,0.08)",
                      borderColor: "rgba(255,255,255,0.28)",
                    }}
                  >
                    <FaWhatsapp size={16} /> Agendar avaliação PAC
                  </WhatsappLink>
                </div>
              </div>
            </article>
          </Reveal>
        )}

        {/* Bloco de apoio — por que avaliar */}
        <Reveal delay={60}>
          <div
            className="mt-5 rounded-[24px] border p-7 sm:p-8 flex flex-col sm:flex-row gap-5"
            style={{
              background: "var(--teal-light)",
              borderColor: "var(--teal-soft)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl grid place-items-center shrink-0"
              style={{ background: "#FFFFFF", color: "var(--purple)" }}
            >
              <HeartHandshake size={23} />
            </div>

            <div>
              <h3 className="m-0 mb-3" style={{ color: "var(--plum)" }}>
                {audiologyWhy.title}
              </h3>
              {audiologyWhy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 30)}
                  className="text-sm leading-[1.75] m-0 mt-2 first:mt-0"
                  style={{ color: "var(--muted)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Mini janela — conteúdo completo do PAC */}
      <Modal open={active !== null} onClose={close} labelledBy={TITLE_ID}>
        {active && ActiveIcon && (
          <div className="p-7 sm:p-9 pt-6">
            <div
              className="w-12 h-12 rounded-xl grid place-items-center mb-5"
              style={{ background: "var(--teal-soft)", color: "var(--purple)" }}
            >
              <ActiveIcon size={23} />
            </div>

            <span className="eyebrow">Exame</span>

            <h3
              id={TITLE_ID}
              className="m-0 mb-4 text-[clamp(1.3rem,2.4vw,1.7rem)]"
              style={{ color: "var(--plum)" }}
            >
              Exame de Processamento Auditivo Central
            </h3>

            <div className="flex flex-col gap-4">
              {(active.deep ?? [active.tagline]).map((paragraph, index) => (
                <p
                  key={`${active.slug}-${index}`}
                  className="text-sm leading-[1.75] m-0"
                  style={{ color: "var(--muted)" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {active.closing && (
              <div
                className="mt-6 p-5 rounded-2xl border"
                style={{
                  background: "var(--teal-light)",
                  borderColor: "var(--teal-soft)",
                }}
              >
                <p
                  className="text-sm leading-[1.7] font-[600] m-0"
                  style={{ color: "var(--plum)" }}
                >
                  {active.closing}
                </p>
              </div>
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
                message={active.whatsappMessage}
                aria-label={`Agendar ${active.title}`}
                className="inline-flex items-center justify-center gap-2 h-[46px] px-5 rounded-full text-sm font-[900] text-white shrink-0 transition-all duration-200 hover:-translate-y-0.5"
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
        )}
      </Modal>
    </section>
  );
}
