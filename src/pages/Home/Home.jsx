import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import QRcode from "../../components/qrcodes/QRcode";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: 20 }}>
        <Slider />
      </div>
      <QRcode />
      <Footer />
    </div>
  );c
}

export default Home;
