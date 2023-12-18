import Image from "next/image";
import styles from "./FrontEndSkills.module.css";
import { frontEnd } from "@/lib/data";
import CircleImage from "../CircleImage/CircleImage";

const FrontEndSkills = () => {
  return (
    <article className={styles.frontEnd}>
      <div className={styles.left}>
        <div className={styles.circleImageContainer}>
          <CircleImage text='Front end' />
        </div>
      </div>
      <div className={styles.right}>
        {frontEnd.map((x, index) => (
          <div key={index} className={styles.box}>
            <Image
              src={x.icon}
              alt={x.name}
              width={40}
              height={40}
              className={styles.img}
            />
            <h4 className={styles.name}>{x.name}</h4>
          </div>
        ))}
      </div>
    </article>
  );
};
export default FrontEndSkills;
