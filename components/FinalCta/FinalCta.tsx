"use client";

import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import styles from "./FinalCta.module.css";
import Label from "../Label/Label";
import Link from "next/link";

const FinalCta = () => {
  return (
    <>
      <section className={styles.container} id='contact'>
        <div className={styles.layoutWrapper}>
          <div className={styles.content}>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <h2 className={styles.heading}>Contact Me</h2>
                <h3 className={styles.headingii}>
                  Thank you for taking the time to review my portfolio. I look
                  forward to speaking with you.
                </h3>
                <Link href='tel:+6236326780' className={styles.topText}>
                  623-632-6780
                </Link>
                <Link
                  href='mailto:chris.ware.dev@gmail.com'
                  className={styles.topText}
                >
                  chris.ware.dev@gmail.com
                </Link>
                <Link
                  href='https://www.linkedin.com/in/christian-ware/'
                  target='_blank'
                  className={styles.topText}
                >
                  LinkedIn
                </Link>
                <Link
                  href='https://github.com/ChristianWare'
                  target='_blank'
                  className={styles.topText}
                >
                  Github
                </Link>
              </div>
              <div className={styles.right}>
                <div>
                  <ContactForm />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default FinalCta;
