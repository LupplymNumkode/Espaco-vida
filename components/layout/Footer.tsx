import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { whatsappMessages } from "@/lib/whatsapp";
import { siteConfig } from "@/lib/seo";
import WhatsappLink from "@/components/ui/WhatsappLink";

const linkClass =
  "flex items-center gap-2 text-sm font-[600] transition-colors duration-200";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        background: "#F4EFF8",
        borderTop: "1px solid #E7DDEC",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              aria-label="Espaço Vida Reabilitação — ir para o início"
              className="inline-flex items-center gap-3 mb-5"
            >
              <div
                className="w-11 h-11 rounded-full grid place-items-center overflow-hidden shrink-0"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E7DDEC",
                }}
              >
                <Image
                  src="/assets/espaco-vida/espaco-vida-logo-transparent.png"
                  alt="Logo Espaço Vida"
                  width={40} height={40}
                  className="object-contain"
                />
              </div>
              <span>
                <strong className="block text-[0.95rem] font-black leading-none" style={{ color: "var(--purple)" }}>
                  Espaço Vida
                </strong>
                <small
                  className="text-[0.6rem] font-[900] tracking-[0.16em] uppercase mt-1 block"
                  style={{ color: "var(--muted)" }}
                >
                  Reabilitação
                </small>
              </span>
            </a>
            <p className="text-sm leading-[1.65]" style={{ color: "var(--muted)" }}>
              Cuidado, escuta e transformação para cada fase da vida. Atendimento multidisciplinar em Palhoça/SC.
            </p>
          </div>

          {/* Site links */}
          <div>
            <h3 className="text-xs font-[900] tracking-[0.12em] uppercase mb-5" style={{ color: "var(--plum)" }}>
              Site
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { label: "Especialidades", href: "#especialidades" },
                { label: "Quem somos", href: "#sobre" },
                { label: "Guia interativo", href: "#guia-interativo" },
                { label: "Dúvidas frequentes", href: "#faq" },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={linkClass}
                  style={{ color: "var(--muted)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Especialidades */}
          <div>
            <h3 className="text-xs font-[900] tracking-[0.12em] uppercase mb-5" style={{ color: "var(--plum)" }}>
              Especialidades
            </h3>
            <div className="flex flex-col gap-3">
              {["Psicologia", "Fonoaudiologia", "Psiquiatria", "Reabilitação", "Atendimento infantil"].map((sp) => (
                <a
                  key={sp}
                  href="#especialidades"
                  className={`${linkClass} hover:text-purple`}
                  style={{ color: "var(--muted)" }}
                >
                  {sp}
                </a>
              ))}
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-[900] tracking-[0.12em] uppercase mb-5" style={{ color: "var(--plum)" }}>
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <WhatsappLink
                message={whatsappMessages.default}
                className={`${linkClass} hover:text-purple`}
                style={{ color: "var(--muted)" }}
                aria-label="WhatsApp da Espaço Vida"
              >
                <FaWhatsapp size={15} /> WhatsApp
              </WhatsappLink>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noreferrer"
                className={`${linkClass} hover:text-purple`}
                style={{ color: "var(--muted)" }}
              >
                <FaInstagram size={15} /> Instagram
              </a>
              <a
                href={siteConfig.mapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className={`${linkClass} hover:text-purple`}
                style={{ color: "var(--muted)" }}
              >
                <MapPin size={15} /> Google Maps
              </a>
              <a
                href="#trabalhe"
                className={`${linkClass} hover:text-purple`}
                style={{ color: "var(--muted)" }}
              >
                <Mail size={15} /> Trabalhe conosco
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-7 text-xs"
          style={{ borderTop: "1px solid #E7DDEC", color: "var(--muted)" }}
        >
          <span>© {year} Espaço Vida Reabilitação. Todos os direitos reservados.</span>
          <span>Site institucional desenvolvido pela Numkode Studios.</span>
        </div>
      </div>
    </footer>
  );
}
