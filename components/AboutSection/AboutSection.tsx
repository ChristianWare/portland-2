import Button from "../Button/Button";
import Label from "../Label/Label";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";

const AboutSection = () => {
  const value = [
    {
      heading: "Full-Stack Proficiency",
      value:
        "Highlight your skills in both front-end and back-end development, showcasing your ability to create comprehensive web applications from start to finish. Mention any relevant technologies, frameworks, or languages you're proficient in.",
    },
    {
      heading: "User-Centric Approach",
      value:
        "Emphasize your commitment to user experience (UX) by mentioning your focus on creating intuitive and user-friendly interfaces. Highlight any user testing, feedback incorporation, or usability studies you've conducted to optimize your projects.",
    },
    {
      heading: "Performance Optimization",
      value:
        "Showcase your knowledge and experience in optimizing web applications for speed and performance. Highlight any specific techniques or tools you've used to ensure fast load times and optimal performance across various devices and network conditions.",
    },
  ];

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <Label text='About Me' />
            <h2 className={styles.heading}>
              I build web applications with Next. JS and React
            </h2>
            <p className={styles.copy}>
              Because of my background in design, and finance, I understand the
              aesthetic and business side to any project. While websites have to
              make good impressions on their visitors, they should also motivate
              them to action.
            </p>
            <div className={styles.btnContainer}>
              <Button href='#' text='Contact Me' btnType='primary' />
            </div>
          </div>
          <div className={styles.right}>
            <h3 className={styles.heading2}>My Specialties:</h3>
            <div className={styles.mapContainer}>
              {value.map((x, index) => (
                <div key={index} className={styles.box}>
                  <h4 className={styles.valueHeading}>{x.heading}</h4>
                  <p className={styles.value}>{x.value}</p>
                
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
