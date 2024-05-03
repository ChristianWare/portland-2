"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Carousel.module.css";
import Arrow from "../../public/icons/arrow2.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Taco from "../../public/images/taco.png";
import Cwagency from "../../public/images/cwagency.png";
import Elite from "../../public/images/elite.png";
import Nier from "../../public/images/nier.png";
import CircleImage from "../CircleImage/CircleImage";
import RectangleText from "../RectangleText/RectangleText";
import Button from "../Button/Button";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      src: Taco,
      title: "Taco Bell Redesign",
      description:
        "This project is a redesign of Taco Bell's website. The front end was built with next.js, and the CMS is Sanity.io.",
      tech: {
        frontend: ["Next.js, CSS Modules, Sanity.io, Node.js"],
      },
      href: "https://www.livemas.dev/",
      github: "https://github.com/ChristianWare/Tacobell-ii",
    },
    {
      src: Cwagency,
      title: "Chris Ware Agency",
      description:
        "Chris Ware Agency is a website where users can learn about the benefits of having a direct booking websites.",
      tech: {
        frontend: ["Next.js, CSS Modules, Sanity.io, Node.js"],
      },
      href: "https://www.chrisware.agency/",
      github: "https://github.com/ChristianWare/chris_ware_agency_ii",
    },
    {
      src: Elite,
      title: "Elite Retreat Rentals",
      description:
        "Elite Retreat Rentals is a fictional website I built to show potential clients what a personalized booking website could look like.",
      tech: {
        frontend: ["Next.js, CSS Modules, Sanity.io, Node.js"],
      },
      href: "https://case-study-one.vercel.app/",
      github: "https://github.com/ChristianWare/Case-Study-One",
    },
    {
      src: Nier,
      title: "Nier Transportation",
      description:
        "Nier Transportation is a client of mine who needed a new website that advertised his luxury black car driving service.",
      href: "https://www.niertransportation.com/",
      tech: {
        frontend: ["Next.js, CSS Modules, Sanity.io, Node.js"],
      },
      github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.title}>
            <span>4</span> Recent Projects
          </h2>
          <p className={styles.topCopy}>
            Here are some examples of the work that I have completed over the
            years. Feel free to visit the github and the live link for more
            details.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.leftContent}
            >
              {/* <h3 className={styles.heading}>{data[activeIndex].title}</h3> */}
              <div className={styles.recContainer}>
                <RectangleText text={data[activeIndex].title} />
              </div>
              <div className={styles.copyContainer}>
                <p className={styles.copy}>{data[activeIndex].description}</p>
              </div>
              <div className={styles.techBox}>
                <b>Tec Stack:</b>
                <p>{data[activeIndex].tech.frontend}</p>
              </div>
              <div className={styles.techBox}>
                <b>Links:</b>

                <div className={styles.btnContainer}>
                  <Button
                    btnType='navBtn'
                    text=' Live Site'
                    href={data[activeIndex].href}
                    target='_blank'
                    download={true}
                    arrow
                    iconColor='blue'
                  />
                  <Button
                    btnType='navBtn'
                    text=' Github'
                    href={data[activeIndex].github}
                    target='_blank'
                    download={true}
                    arrow
                    iconColor='blue'
                  />
                </div>
              </div>
            </motion.div>
            <div className={styles.leftBottomii}>
              <p className={styles.activeIndex}>
                {activeIndex + 1} / {data.length}
              </p>
              <div className={styles.controls}>
                <button
                  className={styles.prevContainer}
                  onClick={handlePrevious}
                >
                  <Arrow className={styles.icon} width={25} height={25} />
                </button>
                <button className={styles.nextContainer} onClick={handleNext}>
                  <Arrow className={styles.icon} width={25} height={25} />
                </button>
              </div>
            </div>
            <div className={styles.leftBottom}>
              <p className={styles.activeIndex}>
                0{activeIndex + 1} / 0{data.length}
              </p>
              <div className={styles.controls}>
                <button
                  className={styles.prevContainer}
                  onClick={handlePrevious}
                >
                  <Arrow className={styles.icon} width={25} height={25} />
                </button>
                <button className={styles.nextContainer} onClick={handleNext}>
                  <Arrow className={styles.icon} width={25} height={25} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.imgContainer}
            >
              <CircleImage src={data[activeIndex].src} />
            </motion.div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Carousel;
