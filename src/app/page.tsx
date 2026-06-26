import BottomNav from "@/components/ui/BottomNav";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Learning from "@/components/sections/Learning";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <BottomNav />
      <main className="md:pr-72">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <div className="md:hidden"><Footer /></div>
    </>
  );
}
