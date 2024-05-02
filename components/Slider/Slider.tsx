import styles from "./Slider.module.css";
import Img1 from "../../public/images/house10.png";
import Img2 from "../../public/images/house11.png";
import Img3 from "../../public/images/house12.png";
import Img4 from "../../public/images/house13.png";
import Image from "next/image";
import Description from "../Description/Description";

const images = [
  {
    id: 1,
    src: Img1,
    title: "Title Number 1 here",
    desc: "I build semantically structured web applications by thinking outside the div.",
  },
  {
    id: 2,
    src: Img2,
    title: "Title Number 2 here",
    desc: "I build semantically structured web applications by thinking outside the div.",
  },
  {
    id: 3,
    src: Img3,
    title: "Title Number 3 here",
    desc: "I build semantically structured web applications by thinking outside the div.",
  },
  {
    id: 4,
    src: Img4,
    title: "Title Number 4 here",
    desc: "I build semantically structured web applications by thinking outside the div.",
  },
];

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {images.map((pic, idx) => (
          <div  className={styles.imgesContainer} key={idx}>
            <Image
              src={pic.src}
              alt=''
              width={400}
              height={400}
              className={styles.img}
            />
          </div>
        ))}
        <Description />
      </div>
    </div>
  );
};
export default Slider;
