"use client";

import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Link from "next/link";
import Time from "../Time/Time";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import Carouselii from "../Carouselii/Carouselii";
import SectionIntro from "../SectionIntro/SectionIntro";

const Hero = () => {
  return (
    <section className={styles.container} id='home'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionIntro text='Portfolio website' />
            <h1
              // variants={fadeIn("down", 0.3)}
              // initial='hidden'
              // whileInView={"show"}
              // viewport={{ once: false, amount: 0.3 }}
              className={styles.heading}
            >
              Hello World
              <br />
              My name is <br /> Christian Ware.
            </h1>
            <p className={styles.copy}>
              I build semantically structured web applications by thinking
              outside the div.
            </p>
            <div className={styles.btnContainer}>
              <Button
                btnType='primary'
                text='Download My Resume'
                href='/ChrisWareResume2024.pdf'
                target='_blank'
                download={true}
                arrow
              />
              <p>
                Learn about my skills <br /> and <b>portfolio projects</b>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            {/* <h2 className={styles.headingii}>
              Recent Projects
            </h2> */}
            <div className={styles.box}>
              <Carouselii />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          {/* <Time /> */}
          <Link
            href='https://www.linkedin.com/in/christian-ware/'
            target='_blank'
            className={styles.detail}
          >
            LinkedIn
          </Link>
          <Link
            href='https://github.com/ChristianWare'
            target='_blank'
            className={styles.detail}
          >
            Git Hub
          </Link>
          <Time />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
