"use client";

import { experince } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Experience.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import SectionIntro from "../SectionIntro/SectionIntro";

const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionIntroContainer}>
              <SectionIntro text='Work History' />
            </div>
            <h2 className={styles.heading}>• Experience •</h2>
            <p className={styles.copy}>
              As a seasoned web developer, I have experience in creating dynamic
              and responsive websites. I&#39;ve successfully collaborated on a
              variety of projects, demonstrating proficiency in Next.js/React,
              and a keen eye for design. Through my journey, I&#39;ve honed my
              skills to ensure that every project I undertake is not just
              functional but also aesthetically compelling.{" "}
            </p>
          </div>
          <div className={styles.right}>
            {experince.map((x, index) => (
              <div key={index} className={styles.box}>
                <motion.h3
                  variants={fadeIn("right", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.title}
                >
                  {x.title}
                </motion.h3>
                <motion.p
                  variants={fadeIn("left", 0.3)}
                  initial='hidden'
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className={styles.years}
                >
                  {x.years}
                </motion.p>
              </div>
            ))}
            <div className={styles.btnContainer}>
              <Button
                btnType='primary'
                text='Download My Resume'
                href='/ChrisWareResume2024.pdf'
                target='_blank'
                download={true}
                arrow
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Experience;
