"use client";

import { fadeIn } from "@/animation/variants";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import RectangleText from "../RectangleText/RectangleText";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";

const AboutSection = () => {
  const value = [
    {
      heading: "Full-Stack Proficiency",
      value:
        "I am skilled in both front-end and back-end development, and I have the ability to create comprehensive web applications from start to finish. My tools of choice are Next.js/React.",
    },
    {
      heading: "User-Centric Approach",
      value:
        "The success of a website ultimately depends on how well it serves and engages its users, so I focus on creating intuitive and user-friendly interface.",
    },
    {
      heading: "Performance Optimization",
      value:
        "I optimize web applications for speed, performance and SEO. They all have fast load times and an optimal performance across various devices and network conditions.",
    },
  ];

  return (
    <section className={styles.container} id='about'>
      <LayoutWrapper>
        <div className={styles.reqContainer}>
          <RectangleText text='About Me' />
        </div>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.left}
          >
            <h2 className={styles.heading}>
              I build web applications with Next. JS and React
            </h2>
            <p className={styles.copy}>
              Because of my background in design, and finance, I understand the
              aesthetic and business side to any project. While websites have to
              make good impressions on their visitors, they should also motivate
              them to action.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='#projects'
                text='Recent Projects'
                btnType='primary'
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.right}
          >
            <h3 className={styles.heading2}>My Specialties:</h3>
            <div className={styles.mapContainer}>
              {value.map((x, index) => (
                <div key={index} className={styles.box}>
                  <h4 className={styles.valueHeading}>{x.heading}</h4>
                  <p className={styles.value}>{x.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
