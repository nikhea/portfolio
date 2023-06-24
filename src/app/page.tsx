import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import Contact from "@/components/contact/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
