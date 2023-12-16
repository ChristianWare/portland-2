import { projects } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Portfolio.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";

const Portfolio = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <h2 className={styles.heading}>My previous work</h2>
        <div className={styles.bottom}>
          {projects.map((x, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.imgContainer}>
                <Image src={x.src} alt={x.title} fill className={styles.img} />
              </div>
              <h3 className={styles.title}>{x.title}</h3>
              <div className={styles.btnLink}>
                <Button text='Github' btnType='tertiary' href='/' />
              </div>
              <p className={styles.descr}>{x.description}</p>
              <Link
                href={x.href}
                className={styles.leanrMoreBtn}
                target='_blank'
              >
                Live Site &gt;
              </Link>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Portfolio;
