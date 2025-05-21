import About from "@/components/about";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
