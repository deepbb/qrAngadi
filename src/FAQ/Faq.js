// FAQPage.js

import React from "react";
import Navbar from "../components/navbar/Navbar";
import Faqs from "../components/faq";
import GamificationAddOns from "../components/gamificationAddOns";
import Footer from "../components/footer/Footer";


const Faq = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Faqs></Faqs>
        <Footer></Footer>
    </div>
  );
};

export default Faq;
