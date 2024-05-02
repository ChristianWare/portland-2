"use client";

import { FC } from "react";
import Link from "next/link";
import { ButtonProps } from "@/lib/interface";
import Arrow from "../../public/icons/arrow2.svg";

import styles from "./Button.module.css";

const Button: FC<ButtonProps> = ({
  href = "",
  text,
  btnType,
  target = "",
  download,
  arrow,
  iconColor = "",
}) => {
  return (
    <button className={styles.container}>
      <Link
        href={href}
        className={`${styles.btn} ${styles[btnType]}`}
        target={target}
        download={download}
      >
        {text}
        {arrow && <Arrow className={`${styles.icon} ${styles[iconColor]}`} />}
      </Link>
    </button>
  );
};
export default Button;
