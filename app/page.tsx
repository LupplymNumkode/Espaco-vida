import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "@/components/sections/Hero";
import Specialties from "@/components/sections/Specialties";
import CareGuide from "@/components/sections/CareGuide";
import SpecialtyGrid from "@/components/sections/SpecialtyGrid";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Audience from "@/components/sections/Audience";
import Journey from "@/components/sections/Journey";
import Team from "@/components/sections/Team";
import Reviews from "@/components/sections/Reviews";
import Location from "@/components/sections/Location";
import WorkWithUs from "@/components/sections/WorkWithUs";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

/**
 * Reviews returns null until real testimonials with written patient authorization are available.
 * See: PRODUCTION_CHECKLIST.md | 08-clientes/espacovida/CHECKLIST_DADOS_PENDENTES.md
 */

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <CareGuide />
        <SpecialtyGrid />
        <About />
        <Gallery />
        <Team />
        <Audience />
        <Journey />
        <Reviews />
        <Location />
        <WorkWithUs />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
