"use client";

import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import styles from "./FinalCta.module.css";
import Label from "../Label/Label";

const FinalCta = () => {
  return (
    <>
      <section className={styles.container} id='contact'>
        <div className={styles.layoutWrapper}>
          <div className={styles.content}>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <Label text='480-623-6780' color='green' />
                <h2 className={styles.heading}>Contact Me</h2>
                <h3 className={styles.headingii}>
                  Thank you for reviewing my portfolio. I looking forward to
                  speaking with you.
                </h3>
                <p className={styles.topText}>
                  Reach out to us today to see how you can begin to take
                  advantage of the benefits of having your own direct booking
                  website for your rental property.
                </p>
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
