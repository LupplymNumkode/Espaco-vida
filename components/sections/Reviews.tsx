import { reviews } from "@/lib/data";

/**
 * Reviews section — only renders when there are real, confirmed testimonials.
 *
 * Currently returns null because all reviews have confirmed: false.
 * This section will be implemented once the client provides:
 *   - Real testimonials from actual patients
 *   - Written authorization from each patient for publication
 *   - Real Google rating (stars + count)
 *
 * Do NOT publish placeholder or fabricated reviews.
 *
 * See: 08-clientes/espacovida/CHECKLIST_DADOS_PENDENTES.md
 */
export default function Reviews() {
  const confirmedReviews = reviews.filter((r) => r.confirmed && r.author !== null);

  if (confirmedReviews.length === 0) {
    // No confirmed reviews yet — section intentionally hidden
    return null;
  }

  // TODO: implement Reviews cards + score layout once real data arrives
  return (
    <section
      className="py-16 md:py-24"
      id="avaliacoes"
      style={{ background: "rgba(248,243,250,0.5)" }}
    >
      <div className="container">
        <div className="text-center max-w-[560px] mx-auto mb-12">
          <span className="eyebrow">Avaliações</span>
          <h2
            className="text-[clamp(1.9rem,3.8vw,3rem)] font-black leading-tight m-0"
            style={{ color: "var(--plum)" }}
          >
            O que dizem sobre a Espaço Vida.
          </h2>
        </div>
        {/* TODO: render confirmedReviews + scoreCard here */}
      </div>
    </section>
  );
}
