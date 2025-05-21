import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import SkillsSection from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
    </main>
  );
}
