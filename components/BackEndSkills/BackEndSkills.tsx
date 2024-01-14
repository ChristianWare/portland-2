"use client";

import Image from "next/image";
import styles from "./BackEndSkills.module.css";
import { backEnd } from "@/lib/data";
import CircleImage from "../CircleImage/CircleImage";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

const BackEndSkills = () => {
  return (
    <article className={styles.frontEnd}>
      <div className={styles.right}>
        {backEnd.map((x, index) => (
          <motion.div
            variants={fadeIn(index % 2 === 0 ? "down" : "right", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            key={index}
            className={styles.box}
          >
            <Image
              src={x.icon}
              alt={x.name}
              width={40}
              height={40}
              className={styles.img}
            />
            <h4 className={styles.name}>{x.name}</h4>
          </motion.div>
        ))}
      </div>
      <div className={styles.left}>
        <div className={styles.circleImageContainer}>
          <CircleImage text='Back end' />
        </div>
      </div>
    </article>
  );
};
export default BackEndSkills;
