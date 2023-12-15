"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./CircleImage.module.css";
import { FC } from "react";

interface Props {
  src: StaticImageData;
}

const CircleImage: FC<Props> = ({ src }) => {
  return (
    <div className={styles.b2}>
      <div className={styles.imgContainer}>
        <Image src={src} alt='image' fill className={styles.img} />
      </div>
    </div>
  );
};
export default CircleImage;
