import { frontEnd } from "@/lib/data";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Skills.module.css";
import Image from "next/image";
import FrontEndSkills from "../FrontEndSkills/FrontEndSkills";

const Skills = () => {
  return (
    <section className={styles.container} id='skills'>
      <LayoutWrapper>
        <h2 className={styles.heading}>Skills & Technologies</h2>
        <div className={styles.frontEnd}>
          <FrontEndSkills />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Skills;
