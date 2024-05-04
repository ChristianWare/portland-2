import styles from "./Footer.module.css";
import Link from "next/link";
import { footer } from "@/lib/data";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.right}>
          <div className={styles.middleDesktop}>
            {footer.map((f, index) => (
              <Link key={index} href={f.href} className={styles.heading}>
                {f.heading}
              </Link>
            ))}
          </div>
          <div className={styles.lb2}></div>
        </div>
        <div className={styles.bottomDesktop}>
          <div className={styles.bottomLeft}>
            <p className={styles.copy}>
              &copy; 2024 Chris Ware - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
