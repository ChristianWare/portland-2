import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import Nav from "../Nav/Nav";
import styles from "./Hero.module.css";
import Chris from "../../public/images/chris.jpeg";
import CircleImage from "../CircleImage/CircleImage";
import Link from "next/link";
import Time from "../Time/Time";

const Hero = () => {
  return (
    <section className={styles.container} id='home'>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Hi Recruiters. <br />
              My name is Christian Ware.
            </h1>
            <p className={styles.copy}>
              My name is Chris Ware and I am a Web Developer. Below you will
              find all the information you need to make an informed decision
              about me.
            </p>
            <div className={styles.btnContainer}>
              <Button
                btnType='primary'
                text='Download My Resume'
                href='/ChrisWareResume2024.pdf'
                target='_blank'
                download={true}
              />
              <Button
                btnType='secondary'
                text='My Previous Work'
                href='#projects'
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <CircleImage src={Chris} />
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
