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
    "I'm a creative developer who enjoys blending design with software engineering";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.9,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#fff5e0",
      duration: 3,
      stagger: 1,
    });
    return () => {
      anim.kill();
    };
  }, [lettersRef]);

  return (
    <div className={styles.bgColor}>
      <LayoutWrapper>
        <div className={styles.reveal}>
          <div ref={triggerRef}>
            <h2 className={styles.text} lang='en'>
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
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default ScrollText;
