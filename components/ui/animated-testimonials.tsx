"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string[];
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  className,
}: {
  testimonials: Testimonial[];
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const activeQuote = testimonials[active].quote;
  const splitIndex = Math.ceil(activeQuote.length / 2);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const distance = event.clientX - dragStartX.current;
    dragStartX.current = null;
    if (Math.abs(distance) < 50) return;
    if (distance < 0) handleNext();
    else handlePrev();
  };

  // Rotação determinística por índice — evita Math.random (impuro no render, viola
  // react-hooks/purity) e o mismatch de hidratação SSR/cliente. Valores em [-10, 10].
  const rotateForIndex = (index: number) => {
    const sequence = [-8, 6, -3, 9, -6, 4, -10, 7];
    return sequence[index % sequence.length];
  };

  return (
    <div
      className={cn("max-w-sm md:max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-14 cursor-grab active:cursor-grabbing select-none", className)}
      style={{ touchAction: "pan-y" }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => { dragStartX.current = null; }}
      aria-label="Carrossel de profissionais. Arraste para os lados ou use as setas."
    >
      <div className="relative grid grid-cols-1 md:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.35fr)] items-start gap-12 lg:gap-24">
        <div className="relative isolate z-0 w-full max-w-[520px] mx-auto md:mx-0">
          <div className="relative h-[420px] md:h-[540px] lg:h-[580px] w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotateForIndex(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotateForIndex(index),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: rotateForIndex(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={720}
                    height={900}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="relative z-10 flex min-h-[540px] lg:min-h-[580px] justify-between flex-col py-2">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <div className="mt-8 space-y-4 text-base leading-[1.7] text-muted-foreground lg:hidden">
              {activeQuote.map((paragraph, index) => (
                <p key={index} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 hidden lg:grid grid-cols-2 gap-10 text-base leading-[1.7] text-muted-foreground">
              <div className="space-y-4">
                {activeQuote.slice(0, splitIndex).map((paragraph, index) => (
                  <p key={index} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="space-y-4">
                {activeQuote.slice(splitIndex).map((paragraph, index) => (
                  <p key={index + splitIndex} className="m-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Ver profissional anterior"
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label="Ver próxima profissional"
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
