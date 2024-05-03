"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Carousel.module.css";
import Image from "next/image";
import Arrow from "../../public/icons/arrow2.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Taco from "../../public/images/taco.png";
import Cwagency from "../../public/images/cwagency.png";
import Elite from "../../public/images/elite.png";
import Nier from "../../public/images/nier.png";
import Link from "next/link";

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
        "Chris Ware Agency is a website where users can learn about the benefits of having a direct booking website over third-party listing platforms like Airbnb or VRBO.",
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
          <h2 className={styles.title}>• Recent Projects •</h2>
          <p className={styles.topCopy}>
            Here are some examples of the work that I have completed over the
            years. Feel free to visit the github and the live link for more
            details.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.leftContent}>
              <h3 className={styles.heading}>{data[activeIndex].title}</h3>
              <div className={styles.copyContainer}>
                <p className={styles.copy}>{data[activeIndex].description}</p>
              </div>
              <div className={styles.techBox}>
                <b>Tec Stack:</b>
                <p>{data[activeIndex].tech.frontend}</p>
              </div>
              <div className={styles.techBox}>
                <b>Links:</b>
                <Link
                  href={data[activeIndex].href}
                  target='blank'
                  className={styles.link}
                >
                  Live Site{" "}
                  <Arrow className={styles.iconLink} width={20} height={20} />
                </Link>
                <Link
                  href={data[activeIndex].github}
                  target='blank'
                  className={styles.link}
                >
                  Githb{" "}
                  <Arrow className={styles.iconLink} width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className={styles.leftBottom}>
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
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={data[activeIndex].src}
                alt='image'
                fill
                className={styles.img}
              />
            </div>
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
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Carousel;
