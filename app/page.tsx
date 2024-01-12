import { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import FinalCta from "@/components/FinalCta/FinalCta";
import Experience from "@/components/Experience/Experience";
import ScrollText from "@/components/ScrollText/ScrollText";


export const metadata: Metadata = {
  title: "Chris Ware's Portfolio Website",
  description:
    "Welcome to my portfolio website! Feel free to reach out with further questions if you have any. I am looking forward to speaking with you soon.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollText />
      <AboutSection />
      <Portfolio />
      <Skills />
      <Experience />
      <FinalCta />
    </>
  );
}
