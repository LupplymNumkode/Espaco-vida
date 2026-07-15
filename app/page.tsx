import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import Hero from "@/components/sections/Hero";
import AudiologyExams from "@/components/sections/AudiologyExams";
import Specialties from "@/components/sections/Specialties";
import SpeechPhonemes from "@/components/sections/SpeechPhonemes";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Audience from "@/components/sections/Audience";
import Team from "@/components/sections/Team";
import TeamMembers from "@/components/sections/TeamMembers";
import Location from "@/components/sections/Location";
import WorkWithUs from "@/components/sections/WorkWithUs";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AudiologyExams />
        <Specialties />
        <SpeechPhonemes />
        <About />
        <Gallery />
        <Team />
        <TeamMembers />
        <Audience />
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
