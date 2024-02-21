import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import Faqs from "../../components/faq";
import styles from "./index.module.css";
import LetsTalk from "../../components/LetsTalk/";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "40px" }}>
        <p className={`${styles.head} ${styles.centerText}`}>Get in Touch</p>
        <p className={`${styles.centerText} ${styles.headText}`}>
          Use our contact form for all information requests or contact us
          directly using the contact information below. All information is
          treated with complete confidentiality and in accordance with our
          <span className={styles.coloredText}>
            {" "}
            data protection statement.
          </span>
        </p>
      </div>
      <LetsTalk />
      <Faqs />
      <Footer />
    </>
  );
}

export default ContactUs;
