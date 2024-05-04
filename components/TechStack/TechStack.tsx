"use client";

// import { frontEnd } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import styles from "./TechStack.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import Image from "next/image";
import NextJs from "../../public/icons/next.svg";
import ReactJs from "../../public/icons/react.svg";
import Typescript from "../../public/icons/typescript.svg";
import Tailwind from "../../public/icons/tailwind.svg";
import Framer from "../../public/icons/framer.svg";

const data = [
  {
    icon: <NextJs width={40} heiht={40} className={styles.icon} />,
    name: "Next.Js",
  },
  {
    icon: <ReactJs width={40} heiht={40} className={styles.icon} />,
    name: "React",
  },
  {
    icon: <Typescript width={40} heiht={40} className={styles.icon} />,
    name: "Typescript",
  },
  {
    icon: <Tailwind width={40} heiht={40} className={styles.icon} />,
    name: "Tailwind",
  },
  {
    icon: <Framer width={40} heiht={40} className={styles.icon} />,
    name: "Framer Motion",
  },
  {
    icon: <Framer width={40} heiht={40} className={styles.icon} />,
    name: "Node.js",
  },
  {
    icon: <Framer width={40} heiht={40} className={styles.icon} />,
    name: "Mongo DB",
  },
  {
    icon: <Framer width={40} heiht={40} className={styles.icon} />,
    name: "Prisma",
  },
  {
    icon: <Framer width={40} heiht={40} className={styles.icon} />,
    name: "Strapi",
  },
  {
    icon: <Framer width={40} heiht={40} className={styles.icon} />,
    name: "Sanity",
  },
];

const TechStack = () => {
  return (
    <div className={styles.container}>
      <ScrollHorizontalText text='Front End' />
      <LayoutWrapper>
        <h2 className={styles.heading}>• Tech Stack •</h2>
        <div className={styles.stack}>
          {data.map((x, index) => (
            <motion.div
              variants={fadeIn(index % 2 === 0 ? "up" : "left", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              key={index}
              className={styles.box}
            >
              {x.icon}

              <h4 className={styles.name}>{x.name}</h4>
            </motion.div>
          ))}
        </div>
      </LayoutWrapper>
      <ScrollHorizontalText text='Back End' />
    </div>
  );
};
export default TechStack;
