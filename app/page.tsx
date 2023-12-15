import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Portfolio />
    </>
  );
}
