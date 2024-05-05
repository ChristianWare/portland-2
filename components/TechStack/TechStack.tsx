"use client";

// import { frontEnd } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import ScrollHorizontalText from "../ScrollHorizontalText/ScrollHorizontalText";
import styles from "./TechStack.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import NextJs from "../../public/icons/next.svg";
import ReactJs from "../../public/icons/react.svg";
import Typescript from "../../public/icons/typescript.svg";
import Tailwind from "../../public/icons/tailwind.svg";
import Framer from "../../public/icons/framer.svg";
import Gsap from "../../public/icons/gsap.svg";
import HTML from "../../public/icons/html.svg";
import CSS from "../../public/icons/css.svg";
import Javascript from "../../public/icons/javascript.svg";
import Node from "../../public/icons/node.svg";
import Mongo from "../../public/icons/mongodb.svg";
import Prisma from "../../public/icons/prisma.svg";
import Strapi from "../../public/icons/strapi.svg";
import Sanity from "../../public/icons/sanity.svg";
import Contentful from "../../public/icons/contentful.svg";
import Docker from "../../public/icons/docker.svg";

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
    icon: <HTML width={40} heiht={40} className={styles.icon} />,
    name: "HTML",
  },
  {
    icon: <CSS width={40} heiht={40} className={styles.icon} />,
    name: "CSS",
  },
  {
    icon: <Javascript width={40} heiht={40} className={styles.icon} />,
    name: "Javascript",
  },
  {
    icon: <Node width={40} heiht={40} className={styles.icon} />,
    name: "Node.js",
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
    icon: <Gsap width={40} heiht={40} className={styles.icon} />,
    name: "GSAP",
  },
  {
    icon: <Mongo width={40} heiht={40} className={styles.icon} />,
    name: "Mongo DB",
  },
  {
    icon: <Prisma width={40} heiht={40} className={styles.icon} />,
    name: "Prisma",
  },
  {
    icon: <Strapi width={40} heiht={40} className={styles.icon} />,
    name: "Strapi",
  },
  {
    icon: <Sanity width={40} heiht={40} className={styles.icon} />,
    name: "Sanity",
  },
  {
    icon: <Contentful width={40} heiht={40} className={styles.icon} />,
    name: "Contentful",
  },
  {
    icon: <Docker width={40} heiht={40} className={styles.icon} />,
    name: "Docker",
  },
];

const TechStack = () => {
  return (
    <div className={styles.container} id='skills'>
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
