"use client";

import React, { useState, useEffect } from "react";

export type SelectorItem = {
  title: string;
  description: string;
  image: string;
};

type Props = {
  items: SelectorItem[];
};

export default function InteractiveSelector({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    items.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisible((prev) => [...prev, i]), 100 + 120 * i)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [items]);

  return (
    <div className="w-full">
      {/* ── Desktop: acordeão horizontal (≥ md) ─────────────────── */}
      <div
        className="hidden md:flex w-full overflow-hidden"
        style={{
          height: "clamp(300px, 28vw, 400px)",
          borderRadius: "24px",
          border: "1px solid #E7DDEC",
          boxShadow: "var(--shadow)",
        }}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isIn = visible.includes(index);

          return (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${item.title}`}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveIndex(index);
              }}
              className="relative overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundSize: isActive ? "cover" : "auto 120%",
                backgroundPosition: "center",
                opacity: isIn ? 1 : 0,
                transform: isIn ? "translateX(0)" : "translateX(-48px)",
                transition:
                  "flex 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, transform 0.5s ease, background-size 0.7s ease",
                flex: isActive ? "7 1 0%" : "1 1 0%",
                minWidth: "52px",
                borderRight:
                  index < items.length - 1
                    ? "1px solid rgba(255,255,255,0.12)"
                    : "none",
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(45,8,63,0.72) 0%, rgba(45,8,63,0.08) 55%)"
                    : "linear-gradient(to top, rgba(45,8,63,0.55) 0%, rgba(45,8,63,0.30) 100%)",
                  transition: "background 0.6s ease",
                }}
              />

              {/* Label bottom */}
              <div className="absolute bottom-4 left-0 right-0 px-3.5 flex items-end gap-2.5">
                {/* Badge número */}
                <div
                  className="shrink-0 w-[32px] h-[32px] rounded-full grid place-items-center text-[0.65rem] font-[900]"
                  style={{
                    background: isActive
                      ? "var(--mint)"
                      : "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)",
                    border: "1.5px solid rgba(255,255,255,0.3)",
                    color: "#fff",
                    transition: "background 0.4s ease",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Título + descrição — só aparecem no item ativo */}
                <div
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "translateX(0)" : "translateX(18px)",
                    transition: `opacity 0.45s ease ${isActive ? "0.18s" : "0s"}, transform 0.45s ease ${isActive ? "0.18s" : "0s"}`,
                    overflow: "hidden",
                  }}
                >
                  <p
                    className="m-0 font-[900] leading-tight"
                    style={{
                      color: "#fff",
                      fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="m-0 mt-0.5 leading-snug"
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "clamp(0.72rem, 1vw, 0.82rem)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile: imagem ativa + miniaturas (< md) ──────────────── */}
      <div className="md:hidden flex flex-col gap-3">
        {/* Imagem principal */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: "clamp(200px, 56vw, 280px)",
            borderRadius: "20px",
            backgroundImage: `url('${items[activeIndex].image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.4s ease",
            border: "1px solid #E7DDEC",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(45,8,63,0.70) 0%, transparent 55%)",
            }}
          />
          <div className="absolute bottom-4 left-4 right-4">
            <p
              className="m-0 font-[900] text-white leading-tight"
              style={{ fontSize: "1rem" }}
            >
              {items[activeIndex].title}
            </p>
            <p
              className="m-0 mt-1 text-sm leading-snug"
              style={{ color: "rgba(255,255,255,0.80)" }}
            >
              {items[activeIndex].description}
            </p>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="flex gap-2 overflow-x-auto pb-0.5">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={item.title}
                aria-pressed={isActive}
                className="relative shrink-0 overflow-hidden transition-all duration-300"
                style={{
                  width: "72px",
                  height: "52px",
                  borderRadius: "12px",
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: `2px solid ${isActive ? "var(--mint)" : "#E7DDEC"}`,
                  boxShadow: isActive
                    ? "0 4px 14px rgba(35,183,174,0.28)"
                    : "none",
                  outline: "none",
                }}
              >
                {isActive && (
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(35,183,174,0.22)" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
