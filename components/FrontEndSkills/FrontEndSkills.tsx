"use client";

import Image from "next/image";
import styles from "./FrontEndSkills.module.css";
import { frontEnd } from "@/lib/data";
import CircleImage from "../CircleImage/CircleImage";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";

const FrontEndSkills = () => {
  return (
    <article className={styles.frontEnd}>
      <div className={styles.left}>
        <div className={styles.circleImageContainer}>
          <CircleImage text='Front end' />
        </div>
      </div>
      <div className={styles.right}>
        {frontEnd.map((x, index) => (
          <motion.div
            variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
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
    </article>
  );
};
export default FrontEndSkills;
