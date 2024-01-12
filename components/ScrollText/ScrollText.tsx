"use client";
import { useEffect, useRef } from "react";

import styles from "./ScrollText.module.css";
import LayoutWrapper from "../LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const ScrollText = () => {
  const [lettersRef, setLettersRef] = useArrayRef();

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }


  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "BECAUSE OF MY BACKGROUND IN DESIGN, AND FINANCE, I UNDERSTAND THE AESTHETIC AND BUSINESS SIDE TO ANY PROJECT. WHILE WEBSITES HAVE TO MAKE GOOD IMPRESSIONS ON THEIR VISITORS, THEY SHOULD ALSO MOTIVATE THEM TO ACTION.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#2A2A2A",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className={styles.reveal}>
      <LayoutWrapper>
        <div ref={triggerRef}>
          <h1>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={styles.revealText}
                ref={setLettersRef}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default ScrollText;
