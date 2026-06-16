"use client";

import { ArrowUp } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { buildWhatsappUrl, isWhatsappConfigured, whatsappMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/seo";

const BTN_SIZE = 52;
const BTN_SHADOW = "0 8px 24px rgba(75, 11, 107, 0.14)";

export default function FloatingActions() {
  const whatsappHref = buildWhatsappUrl(whatsappMessages.default);

  return (
    <div
      className="fixed bottom-8 right-6 z-40 flex flex-col gap-3"
      aria-label="Ações rápidas"
    >
      {/* WhatsApp */}
      <a
        href={whatsappHref}
        {...(isWhatsappConfigured
          ? { target: "_blank", rel: "noreferrer" }
          : { onClick: (e) => e.preventDefault() })}
        aria-label="Falar no WhatsApp"
        aria-disabled={!isWhatsappConfigured || undefined}
        className="grid place-items-center rounded-full text-white transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04]"
        style={{
          width: BTN_SIZE,
          height: BTN_SIZE,
          background: "#25D366",
          boxShadow: "0 8px 28px rgba(37, 211, 102, 0.38)",
          opacity: isWhatsappConfigured ? 1 : 0.6,
          fontSize: "1.4rem",
        }}
      >
        <FaWhatsapp />
      </a>

      {/* Instagram — mesmo tamanho, fundo branco */}
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="hidden sm:grid place-items-center rounded-full transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04]"
        style={{
          width: BTN_SIZE,
          height: BTN_SIZE,
          background: "#FFFFFF",
          border: "1px solid var(--line)",
          boxShadow: BTN_SHADOW,
          color: "#C13584",
          fontSize: "1.3rem",
        }}
      >
        <FaInstagram />
      </a>

      {/* Voltar ao topo */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        className="grid place-items-center rounded-full transition-all duration-200 hover:-translate-y-1 hover:scale-[1.04]"
        style={{
          width: BTN_SIZE,
          height: BTN_SIZE,
          background: "#FFFFFF",
          border: "1px solid var(--line)",
          boxShadow: BTN_SHADOW,
          color: "var(--purple)",
        }}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
