import { ArrowRight, Baby, Brain, CheckCircle2, ClipboardList, HeartHandshake, HelpCircle, MapPin, MessageCircle, Mic, Stethoscope, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { specialties, type IconKey } from "@/lib/data";
import WhatsappLink from "@/components/ui/WhatsappLink";
import Reveal from "@/components/utils/Reveal";

const iconMap: Record<IconKey, LucideIcon> = {
  Baby, Brain, CheckCircle2, ClipboardList, HeartHandshake,
  HelpCircle, MapPin, MessageCircle, Mic, Stethoscope, Users,
};

export default function Specialties() {
  return (
    <section className="py-24" id="especialidades">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">Especialidades</span>
            <h2 className="m-0" style={{ color: "var(--plum)" }}>
              Cuidado completo, do primeiro{" "}
              <br className="hidden md:block" />
              contato à evolução.
            </h2>
          </div>
          <p className="md:max-w-[360px] text-base leading-[1.65]" style={{ color: "var(--muted)" }}>
            Cada área foi organizada para pacientes e familiares entenderem quando procurar
            ajuda e qual caminho seguir.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={index * 55}>
                <article
                  className="card-hover relative flex flex-col gap-4 p-6 md:p-7 rounded-[24px] border h-full"
                  style={{
                    background: "#FFFFFF",
                    borderColor: "#E7DDEC",
                    boxShadow: "var(--shadow-soft)",
                  }}
                >
                  {/* Número em turquesa */}
                  <span
                    className="text-[0.68rem] font-[900] tracking-[0.14em]"
                    style={{ color: "var(--mint-dark)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Ícone — fundo teal suave, ícone roxo */}
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center"
                    style={{
                      background: "var(--teal-soft)",
                      color: "var(--purple)",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="m-0" style={{ color: "var(--plum)" }}>
                    {item.title}
                  </h3>

                  <p className="text-sm leading-[1.65] flex-1 m-0" style={{ color: "var(--muted)" }}>
                    {item.text}
                  </p>

                  {/* CTA em roxo */}
                  <WhatsappLink
                    message={item.whatsappMessage}
                    aria-label={`${item.cta} — ${item.title}`}
                    className="inline-flex items-center gap-2 text-sm font-[900] transition-all duration-200 hover:gap-3 mt-1"
                    style={{ color: "var(--purple)" }}
                  >
                    {item.cta} <ArrowRight size={15} />
                  </WhatsappLink>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
