import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { TechMarquee } from "@/components/TechMarquee";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { DownloadCV } from "@/components/sections/DownloadCV";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <DownloadCV />
      <FAQ />
      <Contact />
      <FloatingContactButtons />
      <Footer />
    </main>
  );
};

export default Index;
