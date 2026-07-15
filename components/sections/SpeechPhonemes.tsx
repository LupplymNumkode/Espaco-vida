import { Check, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { phonemesBlock } from "@/lib/data";
import WhatsappLink from "@/components/ui/WhatsappLink";
import Reveal from "@/components/utils/Reveal";

/**
 * Bloco educativo sobre o desenvolvimento da fala.
 * Tom informativo e acolhedor — orienta a observar, nunca a diagnosticar.
 */
export default function SpeechPhonemes() {
  return (
    <section className="py-24" id="fala-infantil">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 items-start">
          {/* Coluna de texto */}
          <Reveal>
            <span className="eyebrow flex items-center gap-1.5">
              <MessageCircle size={13} />
              Desenvolvimento da fala
            </span>

            <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
              {phonemesBlock.title}
            </h2>

            <p
              className="text-base leading-[1.7] m-0 mb-5"
              style={{ color: "var(--muted)" }}
            >
              {phonemesBlock.subtitle}
            </p>

            <p
              className="text-sm leading-[1.75] m-0"
              style={{ color: "var(--muted)" }}
            >
              {phonemesBlock.text}
            </p>
          </Reveal>

          {/* Checklist */}
          <Reveal delay={80}>
            <div
              className="rounded-[24px] border p-7 sm:p-8"
              style={{
                background: "#FFFFFF",
                borderColor: "var(--line)",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <h3 className="m-0 mb-5" style={{ color: "var(--plum)" }}>
                {phonemesBlock.checklistTitle}
              </h3>

              <ul className="flex flex-col gap-3 p-0 m-0 list-none">
                {phonemesBlock.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 rounded-lg grid place-items-center shrink-0 mt-0.5"
                      style={{ background: "var(--teal-soft)", color: "var(--purple)" }}
                    >
                      <Check size={13} strokeWidth={3} />
                    </span>
                    <span
                      className="text-sm leading-[1.65]"
                      style={{ color: "var(--muted)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Fechamento acolhedor */}
        <Reveal delay={60}>
          <div
            className="mt-10 rounded-[24px] p-8 sm:p-10"
            style={{ background: "var(--lilac)" }}
          >
            <div className="max-w-[760px] flex flex-col gap-4">
              {phonemesBlock.closing.map((paragraph, index) => (
                <p
                  key={paragraph.slice(0, 30)}
                  className="text-sm leading-[1.75] m-0"
                  style={{
                    color: index === phonemesBlock.closing.length - 1
                      ? "var(--plum)"
                      : "var(--muted)",
                    fontWeight: index === phonemesBlock.closing.length - 1 ? 700 : 400,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <WhatsappLink
              message={phonemesBlock.whatsappMessage}
              aria-label="Agendar avaliação fonoaudiológica pelo WhatsApp"
              className="inline-flex items-center justify-center gap-2 h-[50px] px-6 rounded-full text-sm font-[900] text-white mt-7 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--purple)",
                boxShadow: "0 14px 36px rgba(75, 11, 107, 0.24)",
              }}
            >
              <FaWhatsapp size={16} />
              Falar com a equipe
            </WhatsappLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
