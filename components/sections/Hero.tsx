import Image from "next/image";
import { ArrowRight, Star, Stethoscope, MapPin, Ear, BrainCircuit, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trustItems } from "@/lib/data";
import { whatsappMessages } from "@/lib/whatsapp";
import WhatsappLink from "@/components/ui/WhatsappLink";

const trustIcons = [Stethoscope, Ear, BrainCircuit, Users];

/** Só publica indicadores confirmados — nunca um número não validado pelo cliente. */
const confirmedTrustItems = trustItems.filter((item) => item.confirmed);

export default function Hero() {
  return (
    <section
      className="relative pt-[100px] sm:pt-[120px] pb-14 sm:pb-[72px] overflow-hidden"
      id="inicio"
    >
      {/* Glow orbs — sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 480, height: 480, right: -160, top: 60,
          background: "radial-gradient(circle, rgba(35,183,174,0.14), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          width: 560, height: 560, left: -260, bottom: -240,
          background: "radial-gradient(circle, rgba(75,11,107,0.09), transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Grid: 52% texto / 48% imagem */}
        <div className="grid items-center gap-[clamp(40px,5vw,64px)] grid-cols-1 lg:grid-cols-[52fr_48fr]">
          {/* Copy */}
          <div>
            {/* Chips */}
            <div className="flex flex-wrap gap-2 mb-7">
              {["Palhoça - SC", "Cuidado multidisciplinar", "Exames audiológicos", "Atendimento humanizado"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center h-[34px] px-3.5 rounded-full text-[0.73rem] font-[900]"
                  style={{
                    color: "var(--purple)",
                    background: "#FFFFFF",
                    border: "1px solid #E7DDEC",
                    boxShadow: "0 8px 24px rgba(75,11,107,0.06)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1
              className="max-w-[620px] m-0 font-black tracking-[-0.055em]"
              style={{ color: "var(--plum)" }}
            >
              Cuidado humano para cada fase da{" "}
              <span style={{ color: "var(--purple)" }}>vida.</span>
            </h1>

            <p
              className="mt-6 text-[1.05rem] leading-[1.65] max-w-[540px]"
              style={{ color: "var(--muted)" }}
            >
              Especialidades, avaliações e exames audiológicos para crianças,
              adolescentes, adultos e famílias em Palhoça/SC.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8">
              {/* CTA Primário — roxo sólido */}
              <WhatsappLink
                message={whatsappMessages.avaliation}
                aria-label="Agendar avaliação pelo WhatsApp"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full text-[0.9rem] font-[900] text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--purple)",
                  boxShadow: "0 18px 44px rgba(75, 11, 107, 0.28)",
                }}
              >
                <FaWhatsapp size={17} />
                <span>Agendar avaliação</span>
              </WhatsappLink>

              {/* CTA Secundário — branco com borda */}
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full text-[0.9rem] font-[900] border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  color: "var(--purple)",
                  background: "#FFFFFF",
                  borderColor: "rgba(75,11,107,0.18)",
                  boxShadow: "0 10px 28px rgba(75,11,107,0.06)",
                }}
              >
                Conhecer especialidades <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="flex flex-col gap-4">
            {/* Imagem principal */}
            <div
              className="relative rounded-[32px] overflow-hidden"
              style={{ height: "clamp(280px, 36vw, 420px)", boxShadow: "0 32px 80px rgba(75,11,107,0.16)" }}
            >
              <Image
                src="/assets/espaco-vida/ImagemHero.jpg"
                alt="Atendimento acolhedor na Espaço Vida Reabilitação"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-4 left-4 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-[900]"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(14px)",
                  color: "var(--purple)",
                  boxShadow: "0 8px 20px rgba(75,11,107,0.12)",
                }}
              >
                <Star size={15} fill="currentColor" />
                <span>Atendimento acolhedor</span>
              </div>
            </div>

            {/* Card de ajuda */}
            <div
              className="rounded-[24px] p-5 border"
              style={{
                background: "#FFFFFF",
                borderColor: "#E7DDEC",
                boxShadow: "var(--shadow-soft)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-full grid place-items-center shrink-0 overflow-hidden"
                  style={{ background: "var(--teal-soft)" }}
                >
                  <Image
                    src="/assets/espaco-vida/espaco-vida-logo-transparent.png"
                    alt="" aria-hidden
                    width={32} height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2
                    className="text-[0.95rem] font-black leading-tight m-0"
                    style={{ color: "var(--plum)", fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    Como podemos te ajudar?
                  </h2>
                  <p className="text-xs m-0 mt-0.5" style={{ color: "var(--muted)" }}>
                    Escolha uma opção para iniciar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {[
                  { label: "Entender especialidades", href: "#especialidades", Icon: Stethoscope },
                  { label: "Exames audiológicos", href: "#exames", Icon: Ear },
                  { label: "Avaliação PAC", href: "#exames", Icon: BrainCircuit },
                  { label: "Como chegar", href: "#localizacao", Icon: MapPin },
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 p-2.5 rounded-2xl border text-[0.78rem] font-[700] transition-all duration-200 hover:bg-[#DFF8F5] hover:border-[#23B7AE]"
                    style={{
                      color: "var(--purple)",
                      borderColor: "#E7DDEC",
                      background: "#F8FBFC",
                    }}
                  >
                    <Icon size={17} />
                    <span className="flex-1">{label}</span>
                    <ArrowRight size={15} style={{ color: "var(--muted)" }} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats — card horizontal premium */}
        <div
          className="mt-14 rounded-[20px] border p-5 sm:p-6"
          style={{
            background: "#FFFFFF",
            borderColor: "#E7DDEC",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:divide-x divide-[#E7DDEC]">
            {confirmedTrustItems.map((item, i) => {
              const Icon = trustIcons[i] ?? Star;
              return (
                <div
                  key={item.label}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:pl-5 first:pl-0"
                >
                  <div
                    className="w-9 h-9 rounded-xl grid place-items-center shrink-0"
                    style={{ background: "var(--teal-soft)", color: "var(--mint-dark)" }}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <strong
                      className="block text-base font-[900] leading-none"
                      style={{ color: "var(--purple)" }}
                    >
                      {item.value}
                    </strong>
                    <span className="block text-xs mt-1 leading-tight" style={{ color: "var(--muted)" }}>
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
