import styles from "./RectangleText.module.css";
import { FC } from "react";

interface Props {
  text: string;
}

const RectangleText: FC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <a>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </a>
    </div>
  );
};
export default RectangleText;
