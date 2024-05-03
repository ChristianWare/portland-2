"use client";

import styles from "./Carouselii.module.css";
import { motion } from "framer-motion";
import Img1 from "../../public/images/house10.png";
import Img2 from "../../public/images/house11.png";
import Img3 from "../../public/images/house12.png";
import Img4 from "../../public/images/house13.png";
import Img5 from "../../public/images/house13.png";
import { useState } from "react";
import Image from "next/image";
import Arrow from "../../public/icons/arrow2.svg";

const Carouselii = () => {
  const [positionIndexs, setPositionIndexs] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexs((prevIndexes) => {
      const updateIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
      return updateIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexs((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [Img1, Img2, Img3, Img4, Img5];

  const positions = ["center,", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-20%", scale: 0.7, zIndex: 3, opacity: 0.7 },
    left: { x: "-35%", scale: 0.5, zIndex: 2, opacity: 0.5 },
    right: { x: "35%", scale: 0.5, zIndex: 1, opacity: 0.5 },
    right1: { x: "20%", scale: 0.7, zIndex: 3, opacity: 0.7 },
  };

  return (
    <>
      <div className={styles.container}>
        {images.map((image, index) => (
          <motion.div
            className={styles.box}
            key={index}
            initial='center'
            animate={positions[positionIndexs[index]]}
            variants={imageVariants}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.imgContainer}>
              <Image
                src={image.src.toString()}
                alt={image.src.toString()}
                className={styles.img}
                fill
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.btnContainer}>
        <button onClick={handleBack}>
          <Arrow className={styles.icon1} />
        </button>
        <button onClick={handleNext}>
          <Arrow className={styles.icon2} />
        </button>
      </div>
    </>
  );
};
export default Carouselii;
