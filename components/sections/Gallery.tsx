import { ImageGallery } from "@/components/ui/carousel-circular-image-gallery";
import Reveal from "@/components/utils/Reveal";

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20"
      style={{ background: "var(--lilac)" }}
    >
      <div className="container">
        <Reveal className="text-center max-w-[560px] mx-auto mb-12">
          <span className="eyebrow">Galeria</span>
          <h2 className="m-0 mb-4" style={{ color: "var(--plum)" }}>
            Conheça o espaço preparado para acolher.
          </h2>
          <p
            className="text-base leading-[1.65] m-0"
            style={{ color: "var(--muted)" }}
          >
            Ambientes pensados para oferecer conforto, privacidade e cuidado
            em cada etapa do atendimento.
          </p>
        </Reveal>

        <Reveal>
          <ImageGallery />
        </Reveal>
      </div>
    </section>
  );
}
