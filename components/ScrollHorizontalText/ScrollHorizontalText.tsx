import styles from "./ScrollHorizontalText.module.css";
import Arrow from "../../public/icons/arrow2.svg";

interface Props {
  text: string;
}

const ScrollHorizontalText = ({ text }: Props) => {
  return (
    <section className={styles.sliderContainer}>
      <div className={styles.slider}>
        <h2>
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
        </h2>
        <h2>
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
          {text}
          <span>
            <Arrow className={styles.icon2} />
          </span>{" "}
        </h2>
      </div>
    </section>
  );
};
export default ScrollHorizontalText;
