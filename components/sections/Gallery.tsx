import Image from "next/image";
import Reveal from "@/components/utils/Reveal";

const photos = [
  "0-1", "0-2", "0-3", "0-4", "0-5", "0-6", "0-7", "0-8", "0-9",
  "0-10", "0-11", "0-12", "0-13", "0-14", "0-17", "0-20",
  "0-31", "0-32", "0-33", "0-35", "0-37", "0-38", "0-39", "0-40",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20"
      style={{ background: "var(--lilac)" }}
    >
      <div className="container">
        <Reveal className="text-center max-w-[560px] mx-auto mb-10">
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
          <div
            className="columns-2 md:columns-3 lg:columns-4 gap-3"
            style={{ columnGap: "12px" }}
          >
            {photos.map((name) => (
              <div
                key={name}
                className="relative mb-3 overflow-hidden"
                style={{ borderRadius: "12px", breakInside: "avoid" }}
              >
                <Image
                  src={`/assets/espaco-vida/${name}.jpg`}
                  alt="Foto da clínica Espaço Vida"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
