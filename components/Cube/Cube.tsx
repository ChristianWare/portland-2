import styles from './Cube.module.css'
import { FC } from 'react';

interface Props {
  text: string;
}


const Cube: FC<Props> = ({ text }) => {
  return (
    <div>
      {" "}
      <div className={styles.box}>
        <div className={styles.cube}>
          <div className={styles.front}>{text}</div>
          <div className={styles.back}>{text}</div>
          <div className={styles.right}>{text}</div>
          <div className={styles.top}>{text}</div>
          <div className={styles.left}>{text}</div>
          <div className={styles.bottom}>{text}</div>
        </div>
      </div>
    </div>
  );
}
export default Cube