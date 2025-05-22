import About from "@/components/about";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import SkillsSection from "@/components/Skills";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main>
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
