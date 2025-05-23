import About from "@/components/about";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Review";
import Services from "@/components/Services";
import SkillsSection from "@/components/Skills";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main>
      <Toaster richColors />
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <Experience />
      <Portfolio />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
