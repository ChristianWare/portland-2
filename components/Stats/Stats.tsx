import LayoutWrapper from "../LayoutWrapper";
import styles from "./Stats.module.css";
import Image from "next/image";
import Img from "../../public/images/data.png";
import Button from "../Button/Button";

const Stats = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <h2 className={styles.heading}>Some Stats</h2>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img} alt='github-data' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <h3 className={styles.heading2}>2006</h3>
              <p className={styles.desc}>Coding Since</p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.heading2}>100 +</h3>
              <p className={styles.desc}>Gihub Repositories</p>
            </div>
            <div className={styles.box}>
              <h3 className={styles.heading2}>1,484</h3>
              <p className={styles.desc}>Github contributions in 2023</p>
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button btnType='primary' text='Visit Github Page >' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Stats;
