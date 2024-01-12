import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import Nav from "../Nav/Nav";
import styles from "./Hero.module.css";
import Link from "next/link";
import Time from "../Time/Time";
import Cube from "../Cube/Cube";

const Hero = () => {
  return (
    <section className={styles.container} id='home'>
      {/* <Nav /> */}
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Hello World <br />
              My name is <br /> Christian Ware
            </h1>
            <p className={styles.copy}>
              I build semantically structured web applications by thinking
              outside the div.
            </p>
            <div className={styles.btnContainer}>
              <Button
                btnType='primary'
                text='My Resume >'
                href='/ChrisWareResume2024.pdf'
                target='_blank'
                download={true}
              />
              <Button
                btnType='secondary'
                text='About Me'
                href='#about'
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <Cube text='div' />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <Time />
          <Link
            href='https://www.linkedin.com/in/christian-ware/'
            target='_blank'
            className={styles.detail}
          >
            LinkedIn
          </Link>
          <Link
            href='https://github.com/ChristianWare'
            target='_blank'
            className={styles.detail}
          >
            Git Hub
          </Link>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
