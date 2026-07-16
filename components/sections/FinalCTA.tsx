import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappMessages } from "@/lib/whatsapp";
import WhatsappLink from "@/components/ui/WhatsappLink";

export default function FinalCTA() {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(135deg, #2D083F 0%, #4B0B6B 55%, #5E1680 100%)",
      }}
    >
      <div className="container">
        {/* Card central — glass effect, compacto */}
        <div
          className="max-w-[580px] mx-auto text-center flex flex-col items-center gap-4 py-8 px-7 sm:px-10 rounded-[28px]"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            backdropFilter: "blur(20px)",
          }}
        >
          <span
            className="inline-flex items-center h-7 px-4 rounded-full text-xs font-[900] tracking-[0.14em] uppercase"
            style={{
              background: "rgba(35,183,174,0.18)",
              color: "var(--mint)",
              border: "1px solid rgba(35,183,174,0.28)",
            }}
          >
            Primeiro contato
          </span>

          <h2 className="m-0 text-white" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            Vamos encontrar o melhor caminho para o seu cuidado?
          </h2>

          <p
            className="text-base leading-[1.65] max-w-[480px] m-0"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Fale com a equipe pelo WhatsApp e receba orientação sobre o próximo passo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
            {/* Botão WhatsApp — fundo turquesa */}
            <WhatsappLink
              message={whatsappMessages.default}
              aria-label="Falar com a Espaço Vida pelo WhatsApp"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-full text-[0.9rem] font-[900] transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "var(--mint)",
                color: "#0E2E2C",
                boxShadow: "0 16px 44px rgba(35, 183, 174, 0.35)",
              }}
            >
              <FaWhatsapp size={18} /> Falar pelo WhatsApp
            </WhatsappLink>

            {/* Botão secundário — borda branca translúcida */}
            <a
              href="#localizacao"
              className="inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-full text-[0.9rem] font-[900] border transition-all duration-200 hover:-translate-y-0.5"
              style={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.28)",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              Ver localização <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
