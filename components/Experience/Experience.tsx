import { experince } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Experience.module.css";
import Button from "../Button/Button";

const Experience = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Experience</h2>
            <p className={styles.copy}>
              As a seasoned web developer, I have experience in creating dynamic
              and responsive websites. I&#39;ve successfully collaborated on a
              variety of projects, demonstrating proficiency in Next.js/React,
              and a keen eye for design. Through my journey, I&#39;ve honed my
              skills to ensure that every project I undertake is not just
              functional but also aesthetically compelling.{" "}
            </p>
          </div>
          <div className={styles.right}>
            {experince.map((x, index) => (
              <div key={index} className={styles.box}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.years}>{x.years}</p>
              </div>
            ))}
            <div className={styles.btnContainer}>
              <Button
                btnType='primary'
                text='Download My Resume >'
                href='/ChrisWareResume2024.pdf'
                target='_blank'
                download={true}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Experience;
