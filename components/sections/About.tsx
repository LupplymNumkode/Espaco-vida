import Image from "next/image";
import { HeartHandshake, Users, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/utils/Reveal";

const values = [
  {
    Icon: HeartHandshake,
    title: "Acolhimento real",
    text: "Escuta ativa e atendimento respeitoso desde o primeiro contato.",
  },
  {
    Icon: Users,
    title: "Cuidado integrado",
    text: "Especialidades que se conectam para entender o paciente como um todo.",
  },
  {
    Icon: CheckCircle2,
    title: "Clareza no processo",
    text: "Orientação simples sobre próximos passos, avaliação e acompanhamento.",
  },
];

export default function About() {
  return (
    <section className="py-[112px]" id="sobre">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[clamp(36px,6vw,80px)] items-center">
        {/* Foto */}
        <Reveal className="relative">
          <div
            className="relative rounded-[28px] overflow-hidden"
            style={{ boxShadow: "0 32px 80px rgba(75,11,107,0.14)" }}
          >
            <Image
              src="/assets/espaco-vida/outrocard.png"
              alt="Ambiente acolhedor de atendimento na Espaço Vida Reabilitação"
              width={600}
              height={520}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Card flutuante */}
          <div
            className="hidden sm:block absolute -bottom-4 -right-4 md:bottom-6 md:right-6 p-4 rounded-2xl border max-w-[240px]"
            style={{
              background: "#FFFFFF",
              borderColor: "#E7DDEC",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <strong className="text-sm font-[900] block" style={{ color: "var(--plum)" }}>
              Ambiente preparado para acolher
            </strong>
            <span className="text-xs leading-relaxed mt-1.5 block" style={{ color: "var(--muted)" }}>
              Uma clínica pensada para transmitir segurança, cuidado e proximidade.
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={80}>
          <span className="eyebrow">Quem somos</span>
          <h2 className="m-0" style={{ color: "var(--plum)" }}>
            Um espaço de cuidado, escuta e transformação.
          </h2>
          <p className="mt-4 text-base leading-[1.65]" style={{ color: "var(--muted)" }}>
            A Espaço Vida Reabilitação nasceu para oferecer um atendimento humano, multidisciplinar
            e personalizado.
          </p>
          <p className="mt-3 text-base leading-[1.65]" style={{ color: "var(--muted)" }}>
            Aqui, cada paciente é acolhido com atenção, respeito e clareza sobre o seu processo de
            evolução. Nosso compromisso é unir técnica, sensibilidade e acompanhamento próximo para
            construir caminhos possíveis para cada pessoa e família.
          </p>

          {/* Cards de valores */}
          <div className="mt-8 flex flex-col gap-3">
            {values.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="card-hover flex items-start gap-4 p-4 rounded-2xl border"
                style={{
                  background: "#FFFFFF",
                  borderColor: "#E7DDEC",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center shrink-0"
                  style={{
                    background: "var(--teal-soft)",
                    color: "var(--purple)",
                  }}
                >
                  <Icon size={19} />
                </div>
                <div>
                  <strong className="text-sm font-[900] block" style={{ color: "var(--plum)" }}>
                    {title}
                  </strong>
                  <span className="text-sm leading-[1.6]" style={{ color: "var(--muted)" }}>
                    {text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
