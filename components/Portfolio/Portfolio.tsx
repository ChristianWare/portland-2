"use client";

import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { fadeIn } from "@/animation/variants";
import Cube from "../Cube/Cube";
import ContentPadding from "../ContentPadding/ContentPadding";

const Portfolio = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.cubeContainer}>
            <Cube text='Projects' />
          </div>
          <div className={styles.top}></div>
          {projects.map((x, index) => (
            <motion.div
              variants={fadeIn(index % 2 === 0 ? "left" : "right", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.bottom}
              key={index}
            >
              <div className={styles.left}>
                <div className={styles.imgContainer}>
                  <Image src={x.src} alt='hello' fill className={styles.img} />
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.container}>
                  <div className={styles.c1}>
                    <h3 className={styles.company}>{x.title}</h3>
                    <p className={styles.projectDetails}>{x.description}</p>
                  </div>
                  <div className={styles.c2}>
                    <div className={styles.btnContainer}>
                      <Button
                        btnType='primary'
                        href={x.href}
                        text='Live site'
                        target='_blank'
                      />
                      <Button
                        btnType='secondary'
                        href={x.href}
                        text='Github'
                        target='_blank'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Portfolio;
