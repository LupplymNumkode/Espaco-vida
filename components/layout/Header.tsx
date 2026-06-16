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
    <header className={cx(
      "fixed top-4 left-0 right-0 z-50 transition-transform duration-300",
      hidden ? "-translate-y-full" : "translate-y-0"
    )}>
      {/* Cápsula principal — todos os elementos ficam dentro daqui */}
      <div
        className={cx(
          "mx-auto flex w-[calc(100vw-40px)] max-w-[1280px]",
          "items-center justify-between gap-4",
          "rounded-full border px-5 transition-all duration-300",
          scrolled
            ? "h-[62px] border-[#E7DDEC] bg-white/96 shadow-[0_8px_28px_rgba(75,11,107,0.08)]"
            : "h-[68px] border-white/50 bg-white/85 shadow-[0_10px_32px_rgba(75,11,107,0.05)]",
          "backdrop-blur-2xl"
        )}
      >
        {/* ── Logo ─────────────────────────────── */}
        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href="#inicio"
            aria-label="Espaço Vida Reabilitação — ir para o início"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2.5"
          >
            <div
              className="w-[44px] h-[44px] shrink-0 rounded-full grid place-items-center overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.9)",
                border: "1px solid #E7DDEC",
                boxShadow: "0 2px 10px rgba(75,11,107,0.05)",
              }}
            >
              <Image
                src="/assets/espaco-vida/espaco-vida-logo-transparent.png"
                alt="Logo Espaço Vida"
                width={38}
                height={38}
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:flex flex-col">
              <strong
                className="text-[0.98rem] leading-none font-black tracking-tight"
                style={{ color: "var(--purple)" }}
              >
                Espaço Vida
              </strong>
              <small
                className="text-[0.58rem] font-black tracking-[0.18em] uppercase mt-1"
                style={{ color: "var(--muted)" }}
              >
                Reabilitação
              </small>
            </span>
          </a>
        </div>

        {/* ── Nav desktop (xl ≥ 1280 px) ────────── */}
        <nav
          className="hidden xl:flex min-w-0 flex-1 items-center justify-center gap-0.5"
          aria-label="Menu principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2.5 py-2 rounded-full text-[0.71rem] font-[800] whitespace-nowrap transition-all duration-200"
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

        {/* ── Botões desktop (xl ≥ 1280 px) ──────── */}
        <div className="hidden xl:flex shrink-0 items-center gap-2">
          <a
            href="#trabalhe"
            className="inline-flex items-center justify-center h-[38px] px-4 rounded-full text-[0.73rem] font-[900] whitespace-nowrap border transition-all duration-200 hover:-translate-y-px"
            style={{
              color: "var(--purple)",
              background: "#FFFFFF",
              borderColor: "rgba(75,11,107,0.18)",
            }}
          >
            Trabalhe conosco
          </a>

          <a
            href={whatsappHref}
            {...(isWhatsappConfigured
              ? { target: "_blank", rel: "noreferrer" }
              : { onClick: (e) => e.preventDefault() })}
            aria-label="Falar no WhatsApp"
            className="inline-flex items-center justify-center gap-1.5 h-[38px] px-4 rounded-full text-[0.73rem] font-[900] text-white whitespace-nowrap shrink-0 transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "var(--purple)",
              boxShadow: "0 4px 14px rgba(75,11,107,0.22)",
              opacity: isWhatsappConfigured ? 1 : 0.55,
            }}
          >
            <FaWhatsapp size={14} />
            WhatsApp
          </a>
        </div>

        {/* ── Área mobile: WhatsApp + Burger (< xl) ── */}
        <div className="flex xl:hidden shrink-0 items-center gap-2">
          <a
            href={whatsappHref}
            {...(isWhatsappConfigured
              ? { target: "_blank", rel: "noreferrer" }
              : { onClick: (e) => e.preventDefault() })}
            aria-label="Falar no WhatsApp"
            className="inline-flex items-center justify-center gap-1.5 h-[38px] px-3.5 rounded-full text-[0.73rem] font-[900] text-white whitespace-nowrap transition-all duration-200"
            style={{
              background: "var(--purple)",
              boxShadow: "0 4px 12px rgba(75,11,107,0.20)",
              opacity: isWhatsappConfigured ? 1 : 0.55,
            }}
          >
            <FaWhatsapp size={14} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            className="w-[38px] h-[38px] grid place-items-center rounded-full border transition-colors duration-200"
            style={{
              borderColor: "#E7DDEC",
              background: "#FFFFFF",
              color: "var(--purple)",
            }}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* ── Menu mobile / tablet ──────────────────── */}
      {menuOpen && (
        <nav
          className="xl:hidden w-full max-w-[520px] mx-auto mt-2 p-3 rounded-[24px] border grid gap-1"
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
