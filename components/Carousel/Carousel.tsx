"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Carousel.module.css";
import Arrow from "../../public/icons/arrow2.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Taco from "../../public/images/img5.jpg";
import Elite from "../../public/images/elite.webp";
import Nier from "../../public/images/fleet3.png";
import Fonts from "../../public/images/house8.png";
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
        frontend: ["Next.Js, CSS Modules"],
        backend: ["Sanity.io"],
      },
      href: "https://www.livemas.dev/",
      github: "https://github.com/ChristianWare/Tacobell-ii",
    },
    {
      src: Fonts,
      title: "Fonts & Footers",
      description:
        "Fonts and Footers is a web design agency that builds direct booking websites for vacation rental property owners.",
      tech: {
        frontend: ["Next.Js, CSS Modules, Framer Motion, GSAP"],
        backend: ["Sanity.io, Node.js, MDX"],
      },
      href: "https://www.fontsandfooters.com/",
      github: "https://github.com/ChristianWare/Fonts-Footers-ii",
    },
    {
      src: Elite,
      title: "Elite Retreat Rentals",
      description:
        "Elite Retreat Rentals is a Phonenix, AZ based company that provides lodging services to travelers at an affordable price.",
      tech: {
        frontend: [
          "Next.Js, Next Auth, Redux, CSS Modules, Framer Motion, Chart.Js,",
        ],
        backend: ["Mongo DB, Mongoose, Sanity.io, Node.js, Node Mailer"],
      },
      href: "https://case-study-one.vercel.app/",
      github: "https://github.com/ChristianWare/Case-Study-One",
    },
    {
      src: Nier,
      title: "Nier Transportation",
      description:
        "Nier Transportation is a luxury black car driving service based in Phoenix, AZ, specializing in airport transfers, and long distance drives.",
      tech: {
        frontend: ["Next.js, CSS Modules, Framer Motion"],
        backend: ["Sanity.io"],
      },
      href: "https://www.niertransportation.com/",
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
              <div className={styles.recContainer}>
                <RectangleText text={data[activeIndex].title} />
              </div>
              <div className={styles.copyContainer}>
                <p className={styles.copy}>{data[activeIndex].description}</p>
              </div>
              <div className={styles.techBox}>
                <b>Tech Stack:</b>
                <div>
                  <span>Front End:</span>
                  <p>{data[activeIndex].tech.frontend}</p>
                </div>
                <div>
                  <span>Back End:</span>
                  <p>{data[activeIndex].tech.backend}</p>
                </div>
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
