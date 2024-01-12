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
    "As a creative developer, I find myself positioned between the realms of design and software engineering. I am not solely a software engineer, nor am I purely an artist. My satisfaction comes from the combination of these two disciplines, blending form and function seamlessly.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#295f4e",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <div className={styles.reveal}>
      <LayoutWrapper>
        <div ref={triggerRef}>
          <h2 className={styles.text}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={styles.revealText}
                ref={setLettersRef}
              >
                {letter}
              </span>
            ))}
          </h2>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default ScrollText;
