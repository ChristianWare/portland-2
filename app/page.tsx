import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Portfolio />
      <Skills />
    </>
  );
}
