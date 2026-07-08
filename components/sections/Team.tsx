import Reveal from "@/components/utils/Reveal";

export default function Team() {
  return (
    <section className="py-12" style={{ background: "#F8FBFC" }}>
      <div className="container">
        <Reveal className="max-w-[640px] mx-auto text-center">
          <p className="text-base leading-[1.7] m-0" style={{ color: "var(--muted)" }}>
            Nosso cuidado é construído por profissionais de diferentes áreas, com
            escuta, orientação e acompanhamento individualizado.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
