"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { navItems } from "@/lib/data";
import { buildWhatsappUrl, isWhatsappConfigured, whatsappMessages } from "@/lib/whatsapp";

function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 18);
      if (y < 60) {
        setHidden(false);
      } else if (y > lastScrollY.current + 4) {
        setHidden(true);
        setMenuOpen(false);
      } else if (y < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = buildWhatsappUrl(whatsappMessages.default);

  return (
    <header
      className={cx(
        "fixed left-0 right-0 z-50 px-4 transition-transform duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
        "top-3"
      )}
    >
      {/* Pill bar */}
      <div
        className={cx(
          "w-full max-w-[1200px] mx-auto flex items-center justify-between gap-4",
          "px-3 pl-3 rounded-full border transition-all duration-300",
          scrolled
            ? "h-[72px] bg-white/95 border-[#E7DDEC] shadow-[0_16px_50px_rgba(75,11,107,0.10)]"
            : "h-[78px] bg-white/80 border-white/70 shadow-[0_18px_56px_rgba(75,11,107,0.07)]",
          "backdrop-blur-2xl"
        )}
      >
        {/* Logo */}
        <a
          href="#inicio"
          aria-label="Espaço Vida Reabilitação — ir para o início"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center gap-3 shrink-0"
        >
          <div
            className="w-[60px] h-[60px] rounded-full grid place-items-center overflow-hidden shrink-0"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid #E7DDEC",
              boxShadow: "0 8px 24px rgba(75,11,107,0.08)",
            }}
          >
            <Image
              src="/assets/espaco-vida/espaco-vida-logo-transparent.png"
              alt="Logo Espaço Vida"
              width={54}
              height={54}
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:flex flex-col">
            <strong
              className="text-[1.05rem] leading-none font-black tracking-tight"
              style={{ color: "var(--purple)" }}
            >
              Espaço Vida
            </strong>
            <small
              className="text-[0.63rem] font-black tracking-[0.18em] uppercase mt-1"
              style={{ color: "var(--muted)" }}
            >
              Reabilitação
            </small>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center justify-center gap-0.5"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2.5 rounded-full text-[0.78rem] font-[800] transition-all duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--purple)";
                (e.target as HTMLAnchorElement).style.background = "var(--teal-soft)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--muted)";
                (e.target as HTMLAnchorElement).style.background = "";
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Trabalhe conosco — fundo branco, borda roxa suave, texto roxo */}
          <a
            href="#trabalhe"
            className="hidden md:inline-flex items-center justify-center h-[46px] px-5 rounded-full text-[0.82rem] font-[900] transition-all duration-200 border hover:-translate-y-px"
            style={{
              color: "var(--purple)",
              background: "#FFFFFF",
              borderColor: "rgba(75,11,107,0.20)",
            }}
          >
            Trabalhe conosco
          </a>

          {/* WhatsApp — roxo sólido, texto branco */}
          <a
            href={whatsappHref}
            {...(isWhatsappConfigured
              ? { target: "_blank", rel: "noreferrer" }
              : { onClick: (e) => e.preventDefault() })}
            aria-label="Falar no WhatsApp"
            className="inline-flex items-center justify-center gap-2 h-[46px] px-5 rounded-full text-[0.82rem] font-[900] text-white transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "var(--purple)",
              boxShadow: "0 14px 36px rgba(75, 11, 107, 0.28)",
              opacity: isWhatsappConfigured ? 1 : 0.55,
            }}
          >
            <FaWhatsapp size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="lg:hidden w-[46px] h-[46px] grid place-items-center rounded-full border transition-colors duration-200"
            style={{
              borderColor: "#E7DDEC",
              background: "#FFFFFF",
              color: "var(--purple)",
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {menuOpen && (
        <nav
          className="lg:hidden w-full max-w-[520px] mx-auto mt-2 p-3 rounded-[24px] border grid gap-1"
          style={{
            border: "1px solid #E7DDEC",
            background: "rgba(255,255,255,0.97)",
            boxShadow: "var(--shadow)",
            backdropFilter: "blur(20px)",
          }}
          aria-label="Menu mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="min-h-[44px] flex items-center px-4 rounded-[16px] text-sm font-[800] transition-colors duration-200"
              style={{ color: "var(--purple)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.background = "var(--teal-soft)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.background = "")
              }
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            {...(isWhatsappConfigured
              ? { target: "_blank", rel: "noreferrer" }
              : { onClick: (e) => e.preventDefault() })}
            onClick={() => setMenuOpen(false)}
            className="min-h-[44px] flex items-center gap-2 px-4 rounded-[16px] text-sm font-[900] text-white mt-1"
            style={{ background: "var(--purple)" }}
          >
            <FaWhatsapp size={16} /> WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
