"use client";

import Image, { StaticImageData } from "next/image";
import styles from "./CircleImage.module.css";
import { FC } from "react";

interface Props {
  src?: string;
  text?: string;
}

const CircleImage: FC<Props> = ({ src, text }) => {
  return (
    <div className={styles.b2}>
      <div className={styles.imgContainer}>
        {src && <Image src={src} alt='image' fill className={styles.img} />}
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};
export default CircleImage;
