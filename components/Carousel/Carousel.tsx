"use client";

import LayoutWrapper from "../LayoutWrapper";
import styles from "./Carousel.module.css";
import Image from "next/image";
import Img from "../../public/images/house10.png";
import Img2 from "../../public/images/house11.png";
import Img3 from "../../public/images/house12.png";
import Arrow from "../../public/icons/arrow2.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Taco from "../../public/images/taco.png";
import Cwagency from "../../public/images/cwagency.png";
import Elite from "../../public/images/elite.png";
import Nier from "../../public/images/nier.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      src: Taco,
      title: "Taco Bell Redesign",
      description:
        "This project is a redesign of Taco Bell's website. The front end was built with next.js, and the CMS is Sanity.io. The styling was done with CSS Modules so that I can have the most flexibility for design. Each menu item has its slug page where more details are given on that particular item.",
      href: "https://www.livemas.dev/",
      github: "https://github.com/ChristianWare/Tacobell-ii",
    },
    {
      src: Cwagency,
      title: "Chris Ware Agency",
      description:
        "Chris Ware Agency is a website where users can learn about the benefits of having a direct booking website over third-party listing platforms like Airbnb or VRBO. This front-end project with a markdown blog utilizes the local file system with node.js. All styling was done with CSS Modules.",
      href: "https://www.chrisware.agency/",
      github: "https://github.com/ChristianWare/chris_ware_agency_ii",
    },
    {
      src: Elite,
      title: "Elite Retreat Rentals",
      description:
        "Elite Retreat Rentals is a fictional website I built to show potential clients what a personalized booking website could look like. It allows users to view all available vacation rental properties listed by the owner, and they can make reservations on each property via the full-function booking system. Users can pay for each reservation in advance using Stripe. All are built in Next.js with Mongodb for the database and Next Auth for the authentication. MERN Stack.",
      href: "https://case-study-one.vercel.app/",
      github: "https://github.com/ChristianWare/Case-Study-One",
    },
    {
      src: Nier,
      title: "Nier Transportation",
      description:
        "Nier Transportation is a client who needed a new website that advertised his luxury black car driving service. This project is primarily front-end built with Next.js and has a markdown blog that utilizes the local file system with node.js. All styling was done with CSS Modules.",
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
        <h2 className={styles.title}>• Recent Projects •</h2>
        <div className={styles.content} key={activeIndex}>
          <div className={styles.left}>
            <h3 className={styles.heading}>{data[activeIndex].title}</h3>
            <p className={styles.copy}>{data[activeIndex].description}</p>
            <div className={styles.controls}>
              <button className={styles.prevContainer} onClick={handlePrevious}>
                <Arrow className={styles.icon} width={25} height={25} />
              </button>
              <button className={styles.nextContainer} onClick={handleNext}>
                <Arrow className={styles.icon} width={25} height={25} />
              </button>
              <p>
                {activeIndex + 1} / {data.length}
              </p>
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
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Carousel;
