import Image from "next/image";
import styles from "./BackEndSkills.module.css";
import { backEnd } from "@/lib/data";

const BackEndSkills = () => {
  return (
    <article className={styles.frontEnd}>
      <div className={styles.right}>
        {backEnd.map((x, index) => (
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
      <div className={styles.left}>
        <h3 className={styles.heading2}>Back End</h3>
      </div>
    </article>
  );
};
export default BackEndSkills;
