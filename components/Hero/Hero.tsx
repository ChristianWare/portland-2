import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import Nav from "../Nav/Nav";
import styles from "./Hero.module.css";
import Chris from "../../public/images/chris.jpeg";
import CircleImage from "../CircleImage/CircleImage";

const Hero = () => {
  const date = new Date();

  return (
    <section className={styles.container}>
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Hi Recruiters. <br />I built this website with you in mind.
            </h1>
            <p className={styles.copy}>
              Below you will find all the information you need to make an
              informed decision about me.
            </p>
            <div className={styles.btnContainer}>
              <Button btnType='primary' text='Download My Resume' href='/' />
              <Button btnType='secondary' text='My Previous Work' href='/' />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.box}>
              <CircleImage src={Chris} />
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.detail}>
            {date.toLocaleTimeString("en-US", {
              timeZone: "America/Phoenix",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
            : Phoenix, AZ
          </div>
          <div className={styles.detail}>LinkedIn</div>
          <div className={styles.detail}>Git Hub</div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
