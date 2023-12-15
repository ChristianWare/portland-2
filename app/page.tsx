import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import AboutSection from "@/components/AboutSection/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
    </>
  );
}
