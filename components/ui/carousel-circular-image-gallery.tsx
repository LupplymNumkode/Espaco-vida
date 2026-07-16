"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

const imageIds = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 20, 31, 32, 33, 35, 37, 38, 39, 40,
];

const images = imageIds.map((id) => ({
  full: `/assets/espaco-vida/optimized/0-${id}.webp`,
  thumb: `/assets/espaco-vida/thumbs/0-${id}.webp`,
  alt: `Ambiente da Espaço Vida Reabilitação — foto ${id}`,
}));

export function ImageGallery() {
  const [active, setActive] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const next = useCallback(() => setActive((value) => (value + 1) % images.length), []);
  const previous = useCallback(
    () => setActive((value) => (value - 1 + images.length) % images.length),
    []
  );

  const openDialog = (lightbox: boolean) => {
    previousFocus.current = document.activeElement as HTMLElement;
    if (lightbox) setLightboxOpen(true);
    else setGalleryOpen(true);
  };

  const closeDialogs = useCallback(() => {
    setGalleryOpen(false);
    setLightboxOpen(false);
    requestAnimationFrame(() => previousFocus.current?.focus());
  }, []);

  useEffect(() => {
    if (!galleryOpen && !lightboxOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeDialogs();
      if (lightboxOpen && event.key === "ArrowLeft") previous();
      if (lightboxOpen && event.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeDialogs, galleryOpen, lightboxOpen, next, previous]);

  return (
    <>
      <div className="mx-auto max-w-[680px]">
        <div className="relative flex items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={previous}
            aria-label="Foto anterior"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border bg-white shadow-soft transition-transform hover:scale-105"
          >
            <ChevronLeft aria-hidden size={22} />
          </button>

          <button
            type="button"
            onClick={() => openDialog(true)}
            aria-label="Ampliar foto atual"
            className="group relative aspect-square w-full max-w-[520px] overflow-hidden rounded-[24px] shadow-ev"
          >
            <Image
              key={images[active].full}
              src={images[active].full}
              alt={images[active].alt}
              fill
              sizes="(max-width: 640px) 75vw, 520px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute left-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs text-white">
              {active + 1}/{images.length}
            </span>
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3 py-1 text-xs font-bold text-white">
              <Expand aria-hidden size={13} /> Ampliar
            </span>
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Próxima foto"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border bg-white shadow-soft transition-transform hover:scale-105"
          >
            <ChevronRight aria-hidden size={22} />
          </button>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => openDialog(false)}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full px-6 text-sm font-black text-white transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--purple)", boxShadow: "var(--shadow-purple)" }}
          >
            Ver galeria completa
          </button>
        </div>
      </div>

      {galleryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="galeria-completa-titulo"
          className="fixed inset-0 z-[9000] overflow-y-auto bg-[#160d1c]/95 p-4 backdrop-blur-md sm:p-8"
        >
          <div className="mx-auto max-w-7xl pt-14">
            <div className="mb-6 flex items-center justify-between text-white">
              <h3 id="galeria-completa-titulo" className="m-0 text-2xl">
                Galeria Espaço Vida
              </h3>
              <button
                ref={closeRef}
                type="button"
                onClick={closeDialogs}
                aria-label="Fechar galeria completa"
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10"
              >
                <X aria-hidden />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {images.map((image, index) => (
                <button
                  key={image.full}
                  type="button"
                  onClick={() => {
                    setActive(index);
                    setGalleryOpen(false);
                    setLightboxOpen(true);
                  }}
                  aria-label={`Ampliar foto ${index + 1}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5"
                >
                  <Image
                    src={image.thumb}
                    alt={image.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${active + 1} de ${images.length}`}
          className="fixed inset-0 z-[9100] flex items-center justify-center bg-black/95 p-4"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={closeDialogs}
            aria-label="Fechar foto ampliada"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
          >
            <X aria-hidden />
          </button>
          <button
            type="button"
            onClick={previous}
            aria-label="Foto anterior"
            className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white sm:left-6"
          >
            <ChevronLeft aria-hidden />
          </button>
          <div className="relative h-[82vh] w-[calc(100vw-7rem)]">
            <Image
              src={images[active].full}
              alt={images[active].alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white sm:right-6"
          >
            <ChevronRight aria-hidden />
          </button>
          <span className="absolute bottom-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
            {active + 1}/{images.length}
          </span>
        </div>
      )}
    </>
  );
}
