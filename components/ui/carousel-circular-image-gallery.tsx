"use client"

import { useState, useEffect, useRef, useCallback, type PointerEvent as ReactPointerEvent } from "react"

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gsap: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MotionPathPlugin: any
  }
}

const CIRCLE_RADIUS = 4
const DOT_GAP = 6

interface ImageData {
  title: string
  url: string
}

const images: ImageData[] = [
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-1.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-2.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-3.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-4.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-5.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-6.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-7.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-8.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-9.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-10.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-11.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-12.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-13.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-14.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-17.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-20.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-31.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-32.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-33.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-35.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-37.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-38.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-39.jpg" },
  { title: "Espaço Vida", url: "/assets/espaco-vida/0-40.jpg" },
]

export function ImageGallery() {
  const [opened, setOpened] = useState(0)
  const [inPlace, setInPlace] = useState(0)
  const [gsapReady, setGsapReady] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const dragStartX = useRef<number | null>(null)
  const dragged = useRef(false)

  // Derivado: desabilita cliques enquanto a animação não terminou
  const disabled = opened !== inPlace

  useEffect(() => {
    const loadScripts = () => {
      if (window.gsap && window.MotionPathPlugin) {
        window.gsap.registerPlugin(window.MotionPathPlugin)
        setGsapReady(true)
        return
      }
      const gsapScript = document.createElement("script")
      gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      gsapScript.onload = () => {
        const motionPathScript = document.createElement("script")
        motionPathScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/MotionPathPlugin.min.js"
        motionPathScript.onload = () => {
          if (window.gsap && window.MotionPathPlugin) {
            window.gsap.registerPlugin(window.MotionPathPlugin)
            setGsapReady(true)
          }
        }
        document.body.appendChild(motionPathScript)
      }
      document.body.appendChild(gsapScript)
    }
    loadScripts()
  }, [])

  const onClick = (index: number) => {
    if (!disabled) setOpened(index)
  }

  const onInPlace = (index: number) => setInPlace(index)

  const next = useCallback(() => {
    setOpened((cur) => (cur + 1) % images.length)
  }, [])

  const prev = useCallback(() => {
    setOpened((cur) => (cur - 1 + images.length) % images.length)
  }, [])

  const handlePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
    dragStartX.current = event.clientX
    dragged.current = false
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return
    const distance = event.clientX - dragStartX.current
    dragStartX.current = null
    if (Math.abs(distance) < 50 || disabled) return
    dragged.current = true
    if (distance < 0) next()
    else prev()
  }

  // Teclado no lightbox
  useEffect(() => {
    if (!lightboxOpen && !galleryOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxOpen) setLightboxOpen(false)
        else setGalleryOpen(false)
      }
      if (lightboxOpen && e.key === "ArrowLeft") setOpened((p) => (p - 1 + images.length) % images.length)
      if (lightboxOpen && e.key === "ArrowRight") setOpened((p) => (p + 1) % images.length)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [lightboxOpen, galleryOpen])

  return (
    <>
      {/* Mobile: botões sobrepostos nas bordas; Desktop: flex com botões fora */}
      <div className="relative flex items-center justify-center sm:gap-6">
        {/* Botão anterior */}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                     sm:static sm:translate-y-0
                     flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)] outline-none transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={prev}
          disabled={disabled}
          aria-label="Foto anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Carrossel — 85vw no mobile, 72vmin no desktop */}
        <div
          className="relative h-[85vw] w-[85vw] sm:h-[72vmin] sm:w-[72vmin] max-h-[520px] max-w-[520px] overflow-hidden rounded-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.02),0_6.7px_5.3px_rgba(0,0,0,0.028),0_12.5px_10px_rgba(0,0,0,0.035),0_22.3px_17.9px_rgba(0,0,0,0.042),0_41.8px_33.4px_rgba(0,0,0,0.05),0_100px_80px_rgba(0,0,0,0.07)] cursor-grab active:cursor-grabbing group select-none"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { dragStartX.current = null }}
          onClick={() => {
            if (dragged.current) {
              dragged.current = false
              return
            }
            if (!disabled) setLightboxOpen(true)
          }}
          aria-label="Galeria de fotos. Arraste para os lados, clique para ampliar ou use as setas."
        >
          {gsapReady &&
            images.map((image, i) => (
              <div
                key={image.url}
                className="absolute left-0 top-0 h-full w-full"
                style={{ zIndex: inPlace === i ? i : images.length + 1 }}
              >
                <GalleryImage
                  total={images.length}
                  id={i}
                  url={image.url}
                  title={image.title}
                  open={opened === i}
                  inPlace={inPlace === i}
                  onInPlace={onInPlace}
                />
              </div>
            ))}

          {/* Hint de ampliar */}
          <div className="absolute top-3 right-3 z-[102] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1.5 rounded-full font-medium">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              Ampliar
            </div>
          </div>

          {/* Contador */}
          <div className="absolute top-3 left-3 z-[102] pointer-events-none">
            <div className="bg-black/40 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
              {opened + 1}/{images.length}
            </div>
          </div>

          <div className="absolute left-0 top-0 z-[100] h-full w-full pointer-events-none">
            <Tabs images={images} onSelect={onClick} />
          </div>
        </div>

        {/* Botão próximo */}
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                     sm:static sm:translate-y-0
                     flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-white/95 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.12)] outline-none transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={next}
          disabled={disabled}
          aria-label="Próxima foto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="button"
          onClick={() => setGalleryOpen(true)}
          className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full px-6 text-sm font-[900] text-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-300"
          style={{
            background: "var(--purple)",
            boxShadow: "0 14px 36px rgba(75, 11, 107, 0.24)",
          }}
        >
          Ver galeria completa
        </button>
      </div>

      {/* Galeria completa */}
      {galleryOpen && (
        <div className="fixed inset-0 z-[9000] overflow-y-auto bg-black/92 backdrop-blur-md">
          <div className="mx-auto min-h-full w-full max-w-7xl px-4 pb-10 pt-20 sm:px-8">
            <div className="mb-6 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="m-0 text-sm font-semibold text-white/65">Galeria</p>
                <h3 className="m-0 text-2xl font-bold text-white">Espaço Vida</h3>
              </div>
              <span className="text-sm text-white/65">{images.length} fotos</span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
              {images.map((image, index) => (
                <button
                  key={image.url}
                  type="button"
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                  onClick={() => {
                    setOpened(index)
                    setLightboxOpen(true)
                  }}
                  aria-label={`Ampliar foto ${index + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.url}
                    alt={`${image.title} — foto ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2 py-1 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="fixed right-4 top-4 z-[9001] flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-2xl ring-2 ring-black/10 transition-transform hover:scale-105 sm:right-6 sm:top-6"
            onClick={() => setGalleryOpen(false)}
            aria-label="Fechar galeria completa"
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/92 backdrop-blur-md"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { dragStartX.current = null }}
          onClick={() => {
            if (dragged.current) {
              dragged.current = false
              return
            }
            setLightboxOpen(false)
          }}
        >
          {/* Fechar */}
          <button
            type="button"
            className="absolute right-4 top-4 z-[10001] flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 shadow-2xl ring-2 ring-black/10 transition-transform hover:scale-105 sm:right-6 sm:top-6"
            onClick={() => setLightboxOpen(false)}
            aria-label="Fechar imagem ampliada"
          >
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Anterior */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[10001] flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
            onClick={(e) => { e.stopPropagation(); setOpened((p) => (p - 1 + images.length) % images.length) }}
            aria-label="Foto anterior"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Imagem */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[opened].url}
            alt={images[opened].title}
            className="max-h-[88vh] max-w-[88vw] object-contain rounded-xl shadow-2xl select-none"
            onClick={(e) => {
              dragged.current = false
              e.stopPropagation()
            }}
            draggable={false}
          />

          {/* Próximo */}
          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[10001] flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
            onClick={(e) => { e.stopPropagation(); setOpened((p) => (p + 1) % images.length) }}
            aria-label="Próxima foto"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Contador */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
            {opened + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}

interface GalleryImageProps {
  url: string
  title: string
  open: boolean
  inPlace: boolean
  id: number
  onInPlace: (id: number) => void
  total: number
}

function GalleryImage({ url, title, open, inPlace, id, onInPlace, total }: GalleryImageProps) {
  const firstLoadRef = useRef(true)
  const clip = useRef<SVGCircleElement>(null)

  const gap = DOT_GAP
  const circleRadius = CIRCLE_RADIUS
  const defaults = { transformOrigin: "center center" }
  const duration = 0.4
  const width = 400
  const height = 400
  const scale = 700
  const bigSize = circleRadius * scale
  const overlap = 0

  const getPosSmall = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height - 28,
    r: circleRadius,
  })
  const getPosSmallAbove = () => ({
    cx: width / 2 - (total * (circleRadius * 2 + gap) - gap) / 2 + id * (circleRadius * 2 + gap),
    cy: height / 2,
    r: circleRadius * 2,
  })
  const getPosCenter = () => ({ cx: width / 2, cy: height / 2, r: circleRadius * 7 })
  const getPosEnd = () => ({ cx: width / 2 - bigSize + overlap, cy: height / 2, r: bigSize })
  const getPosStart = () => ({ cx: width / 2 + bigSize - overlap, cy: height / 2, r: bigSize })

  useEffect(() => {
    const gsap = window.gsap
    if (!gsap) return
    const isFirst = firstLoadRef.current
    firstLoadRef.current = false
    if (clip.current) {
      const flipDuration = isFirst ? 0 : duration
      const upDuration = isFirst ? 0 : 0.2
      const bounceDuration = isFirst ? 0.01 : 1
      const delay = isFirst ? 0 : flipDuration + upDuration

      if (open) {
        gsap.timeline()
          .set(clip.current, { ...defaults, ...getPosSmall() })
          .to(clip.current, { ...defaults, ...getPosCenter(), duration: upDuration, ease: "power3.inOut" })
          .to(clip.current, { ...defaults, ...getPosEnd(), duration: flipDuration, ease: "power4.in", onComplete: () => onInPlace(id) })
      } else {
        gsap.timeline({ overwrite: true })
          .set(clip.current, { ...defaults, ...getPosStart() })
          .to(clip.current, { ...defaults, ...getPosCenter(), delay, duration: flipDuration, ease: "power4.out" })
          .to(clip.current, {
            ...defaults,
            motionPath: { path: [getPosSmallAbove(), getPosSmall()], curviness: 1 },
            duration: bounceDuration,
            ease: "bounce.out",
          })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        <clipPath id={`${id}_circleClip`}>
          <circle cx="0" cy="0" r={circleRadius} ref={clip} />
        </clipPath>
        <clipPath id={`${id}_squareClip`}>
          <rect width={width} height={height} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id}${inPlace ? "_squareClip" : "_circleClip"})`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <image width={width} height={height} href={url} className="pointer-events-none" aria-label={title} preserveAspectRatio="xMidYMid slice" />
      </g>
    </svg>
  )
}

interface TabsProps {
  images: ImageData[]
  onSelect: (index: number) => void
}

function Tabs({ images, onSelect }: TabsProps) {
  const gap = DOT_GAP
  const circleRadius = CIRCLE_RADIUS
  const width = 400
  const height = 400

  const getPosX = (i: number) =>
    width / 2 - (images.length * (circleRadius * 2 + gap) - gap) / 2 + i * (circleRadius * 2 + gap)
  const getPosY = () => height - 28

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      {images.map((image, i) => (
        <g key={image.url} className="pointer-events-auto">
          <defs>
            <clipPath id={`tab_${i}_clip`}>
              <circle cx={getPosX(i)} cy={getPosY()} r={circleRadius} />
            </clipPath>
          </defs>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <image
            x={getPosX(i) - circleRadius}
            y={getPosY() - circleRadius}
            width={circleRadius * 2}
            height={circleRadius * 2}
            href={image.url}
            clipPath={`url(#tab_${i}_clip)`}
            className="pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
          />
          <circle
            onClick={(e) => { e.stopPropagation(); onSelect(i) }}
            className="cursor-pointer fill-white/0 stroke-white/70 hover:stroke-white transition-all"
            strokeWidth="1.5"
            cx={getPosX(i)}
            cy={getPosY()}
            r={circleRadius + 2}
          />
        </g>
      ))}
    </svg>
  )
}
