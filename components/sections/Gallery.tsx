import InteractiveSelector, { type SelectorItem } from "@/components/ui/interactive-selector";
import Reveal from "@/components/utils/Reveal";

const galleryItems: SelectorItem[] = [
  {
    title: "Recepção acolhedora",
    description:
      "Um ambiente tranquilo para receber pacientes e famílias desde o primeiro contato.",
    image: "/assets/espaco-vida/recepcao.png",
  },
  {
    title: "Salas preparadas",
    description:
      "Espaços pensados para avaliações, atendimentos e acompanhamento individualizado.",
    image: "/assets/espaco-vida/sala-de-atendimento.png",
  },
  {
    title: "Cuidado infantil",
    description:
      "Ambientes adaptados para acolher crianças com segurança, escuta e atenção.",
    image: "/assets/espaco-vida/espaco-infantil.png",
  },
  {
    title: "Detalhes que acolhem",
    description:
      "Cada detalhe contribui para uma experiência mais humana, leve e organizada.",
    image: "/assets/espaco-vida/outrocard.png",
  },
  {
    title: "Equipe e cuidado",
    description:
      "Uma clínica construída para conectar especialidades em torno da evolução de cada paciente.",
    image: "/assets/espaco-vida/ImagemHero.png",
  },
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
          <InteractiveSelector items={galleryItems} />
        </Reveal>
      </div>
    </section>
  );
}
