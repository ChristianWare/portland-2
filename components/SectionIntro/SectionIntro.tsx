import styles from "./SectionIntro.module.css";

interface Props {
  text: string;
}

const SectionIntro = ({ text }: Props) => {
  return <div className={styles.container}>{text}</div>;
};
export default SectionIntro;
