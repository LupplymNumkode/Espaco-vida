"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { workWithUsAreas } from "@/lib/data";
import { buildWhatsappUrl, isWhatsappConfigured } from "@/lib/whatsapp";

type FormState = {
  nome: string;
  area: string;
  telefone: string;
  email: string;
  mensagem: string;
};

const emptyForm: FormState = {
  nome: "",
  area: workWithUsAreas[0],
  telefone: "",
  email: "",
  mensagem: "",
};

function buildMessage(f: FormState): string {
  return [
    "Olá! Gostaria de enviar meu interesse para trabalhar com a Espaço Vida.",
    "",
    `Nome: ${f.nome}`,
    `Área de atuação: ${f.area}`,
    `Telefone: ${f.telefone}`,
    `E-mail: ${f.email}`,
    `Mensagem: ${f.mensagem}`,
  ].join("\n");
}

const inputClass =
  "w-full min-h-[48px] px-4 py-2.5 rounded-xl border text-sm font-[600] bg-white/70 outline-none transition-all duration-200 focus:ring-2 focus:ring-[rgba(75,0,113,0.25)] focus:border-[rgba(75,0,113,0.4)]";

const inputStyle = {
  borderColor: "rgba(75,0,113,0.16)",
  color: "var(--plum)",
};

export default function WorkWithUs() {
  const [form, setForm] = useState<FormState>(emptyForm);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isWhatsappConfigured) return;
    const url = buildWhatsappUrl(buildMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      className="py-16 md:py-24"
      id="trabalhe"
      style={{
        background: "linear-gradient(135deg, rgba(248,243,250,0.7), rgba(241,251,250,0.5))",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <span
              className="inline-block mb-3 text-xs font-[900] tracking-[0.18em] uppercase"
              style={{ color: "var(--mint-dark)" }}
            >
              Trabalhe conosco
            </span>
            <h2
              className="text-[clamp(1.9rem,3.8vw,3rem)] font-black leading-tight m-0"
              style={{ color: "var(--plum)" }}
            >
              Faça parte de uma equipe que cuida com propósito.
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Envie seu interesse para futuras oportunidades. Preencha o formulário e a equipe
              receberá sua mensagem pelo WhatsApp.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                "Recebimento organizado de currículos e interesses",
                "Campos para área de atuação e disponibilidade",
                "Contato direto com a equipe da clínica",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm font-[700]"
                  style={{ color: "var(--muted)" }}
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0"
                    style={{ color: "var(--mint-dark)" }}
                  />
                  {text}
                </div>
              ))}
            </div>

            {/* Disclaimer — no promise of open positions */}
            <p
              className="mt-8 text-xs leading-relaxed p-4 rounded-2xl"
              style={{
                color: "var(--muted)",
                background: "rgba(75,0,113,0.04)",
                border: "1px solid rgba(75,0,113,0.1)",
              }}
            >
              O envio do formulário não representa garantia de vaga ou início de processo
              seletivo. As mensagens são organizadas pela equipe para contato conforme
              necessidade da clínica.
            </p>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-7 rounded-[24px] border"
            style={{
              background: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(16px)",
              borderColor: "rgba(75,0,113,0.1)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-[900] uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Nome completo <span aria-hidden style={{ color: "var(--purple)" }}>*</span>
                </span>
                <input
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-[900] uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Área de atuação <span aria-hidden style={{ color: "var(--purple)" }}>*</span>
                </span>
                <select
                  name="area"
                  required
                  value={form.area}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                >
                  {workWithUsAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-[900] uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  Telefone
                </span>
                <input
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(48) 99999-9999"
                  value={form.telefone}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-[900] uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                  E-mail
                </span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  style={inputStyle}
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-[900] uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                Mensagem breve
              </span>
              <textarea
                name="mensagem"
                rows={4}
                placeholder="Conte brevemente sobre sua experiência e disponibilidade."
                value={form.mensagem}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                style={inputStyle}
              />
            </label>

            <button
              type="submit"
              disabled={!isWhatsappConfigured}
              aria-disabled={!isWhatsappConfigured}
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-full text-sm font-[900] text-white transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, var(--purple), var(--violet))",
                boxShadow: "0 16px 38px rgba(75, 11, 107, 0.24)",
                opacity: isWhatsappConfigured ? 1 : 0.7,
              }}
            >
              <Send size={17} />
              Enviar interesse pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
