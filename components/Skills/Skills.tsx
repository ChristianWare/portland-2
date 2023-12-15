import LayoutWrapper from "../LayoutWrapper";
import styles from "./Skills.module.css";
import FrontEndSkills from "../FrontEndSkills/FrontEndSkills";
import BackEndSkills from "../BackEndSkills/BackEndSkills";

const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
      <LayoutWrapper>
        <h2 className={styles.heading}>Skills & Technologies</h2>
        <div className={styles.frontEnd}>
          <FrontEndSkills />
        </div>
        <div className={styles.backEnd}>
          <BackEndSkills />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Skills;
