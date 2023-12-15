import Label from "../Label/Label";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <Label text='About Us' />
            <h2 className={styles.heading}>
              I build web applications with Next. JS and React
            </h2>
            <p className={styles.copy}>
              Because of my background in design, and finance, I understand the
              aesthetic and business side to any project. While websites have to
              make good impressions on their visitors, they should also motivate
              them to action.
            </p>
          </div>
          <div className={styles.right}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
