"use client";

import { BookOpen, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Specialty } from "@/lib/data";

export type SpecialtyView = "brief" | "deep";

type Props = {
  specialty: Specialty;
  icon: LucideIcon;
  index: number;
  onOpen: (view: SpecialtyView) => void;
};

const chipBase =
  "inline-flex items-center gap-1.5 h-8 px-3 rounded-full text-[0.76rem] font-[800] border transition-all duration-200 hover:-translate-y-px";

export default function SpecialtyCard({ specialty, icon: Icon, index, onOpen }: Props) {
  return (
    <article
      className="card-hover group relative flex flex-col gap-4 p-6 md:p-7 rounded-[24px] border h-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        borderColor: "var(--line)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {/* Brilho turquesa que surge no hover — decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle, rgba(35,183,174,0.16), transparent 70%)",
        }}
      />

      <div className="relative flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-xl grid place-items-center transition-transform duration-300 group-hover:scale-105"
          style={{ background: "var(--teal-soft)", color: "var(--purple)" }}
        >
          <Icon size={23} />
        </div>
        <span
          className="text-[0.68rem] font-[900] tracking-[0.14em]"
          style={{ color: "var(--mint-dark)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative m-0" style={{ color: "var(--plum)" }}>
        {specialty.title}
      </h3>

      <p
        className="relative text-sm leading-[1.65] flex-1 m-0"
        style={{ color: "var(--muted)" }}
      >
        {specialty.tagline}
      </p>

      <div className="relative flex flex-wrap gap-2 pt-1">
        <button
          type="button"
          onClick={() => onOpen("brief")}
          aria-label={`Conhecer ${specialty.title}`}
          className={chipBase}
          style={{
            color: "var(--purple)",
            background: "var(--teal-light)",
            borderColor: "var(--teal-soft)",
          }}
        >
          <Sparkles size={13} />
          Conhecer
        </button>

        <button
          type="button"
          onClick={() => onOpen("deep")}
          aria-label={`Entender a especialidade — ${specialty.title}`}
          className={`${chipBase} hover:!bg-[var(--lilac)]`}
          style={{
            color: "var(--muted)",
            background: "#FFFFFF",
            borderColor: "var(--line)",
          }}
        >
          <BookOpen size={13} />
          Entender a especialidade
        </button>
      </div>
    </article>
  );
}
