import React from "react";
import styles from "./pricing.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PricingCards from "../../components/pricingCards/PricingCards";
import Faqs from "../../components/faq";
import GamificationAddOns from "../../components/gamificationAddOns";
function Pricing() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "40px" }}>
        <p className={`${styles.head} ${styles.centerText}`}>
          Choose the right plan for you!
        </p>
        <p className={`${styles.centerText} ${styles.headText}`}>
          Choose a plan and enjoy an exceptional user experience instantly.
        </p>
      </div>
      <PricingCards />
      <Faqs />
      <GamificationAddOns />
      <Footer />
    </>
  );
}

export default Pricing;
