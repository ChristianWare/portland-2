"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SmoothScrollEffect.module.css";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";

const SmoothScrollEffect = ({ children }: { children: React.ReactNode }) => {

  const [isLoading, setIsLoading] = useState(true)

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [contentRef]);

  // Intercept the normal scroll behavoir:
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(contentHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div
        className={styles.childrenContainer}
        ref={contentRef}
        style={{ y: y }}
      >
        {children}
      </motion.div>
    </>
  );
};
export default SmoothScrollEffect;
