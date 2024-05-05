import styles from "./Time.module.css";
import Location from "../../public/icons/location.svg";

const date = new Date();

const Time = () => {
  return (
    <div className={styles.detail}>
      <Location className={styles.icon} /> Phoenix, AZ
      {/* {date.toLocaleTimeString("en-US", {
        timeZone: "America/Phoenix",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })} */}
    </div>
  );
};
export default Time;
