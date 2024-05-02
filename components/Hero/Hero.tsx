"use client";

import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";
import Link from "next/link";
import Time from "../Time/Time";
import Cube from "../Cube/Cube";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import Carouselii from "../Carouselii/Carouselii";


const Hero = () => {
  return (
    <section className={styles.container} id='home'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.heading}
            >
              Hello World <br />
              My name is <br /> Christian Ware
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              className={styles.copy}
            >
              I build semantically structured web applications by thinking
              outside the div.
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.9)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.9 }}
              className={styles.btnContainer}
            >
              <Button
                btnType='primary'
                text='My Resume >'
                href='/ChrisWareResume2024.pdf'
                target='_blank'
                download={true}
              />
              <Button btnType='secondary' text='About Me' href='#about' />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.right}
          >
            <div className={styles.box}>
              <Carouselii />
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.bottom}
        >
          <Time />
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
        </motion.div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
