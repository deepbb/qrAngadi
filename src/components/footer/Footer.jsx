import React from "react";
import "./Footer.css";
import Whatsapp from "../../assets/whatsapp.svg";
import FB from "../../assets/fb.png";
import Insta from "../../assets/insta.png";
import twit from "../../assets/twit.png";
import tweet from "../../assets/tweet.png";
import YT from "../../assets/YT.png";
import LinkedIn from "../../assets/linked.png";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="inner-container">
          <div className="about-section">
            <p className="footer-heading">News Letter</p>
            <p className="footer-paragraph">
              Stay up to date on the latest features and releases by joining our
              news letter{" "}
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input className="new_letter" />
              <button className="sub_btn">Subscribe</button>
            </div>
            <div className="social-links-container">
              <img src={Whatsapp} className="social-logo" alt="" />
              <img src={Insta} className="social-logo" alt="" />
              <img src={FB} className="social-logo" alt="" />
              <img src={LinkedIn} className="social-logo" alt="" />
              <img src={tweet} className="social-logo" alt="" />
              <img src={twit} className="social-logo" alt="" />
              <img src={YT} className="social-logo" alt="" />
            </div>
          </div>
          <div className="link-section">
            <table className="table table-dark table-borderless">
              <thead>
                <tr>
                  <th className="table-header">Products</th>
                  <th className="table-header">Services</th>
                  <th className="table-header">Resources</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Static Qr </td>
                  <td>Qr Creation</td>
                  <td onClick={() => navigate("/blog")}>News</td>
                </tr>
                <tr>
                  <td>Dyamic Qr</td>
                  <td>Analytices</td>
                  <td onClick={() => navigate("/blog")}>Blog</td>
                </tr>
                <tr>
                  <td>Scan Analytices</td>
                  <td>Game solutions</td>
                  <td onClick={() => navigate("/blog")}>Videos</td>
                </tr>
                <tr>
                  <td>Multiple Types</td>
                  <td>Product Reach out</td>
                  <td onClick={() => navigate("/faq")}>FAQ's</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <div>
          <p className="disclaimer_text">© 2024 Mockup. All Rights Reserved.</p>
        </div>
        <div className="privacy_policy">
          <p className="privacy_text">Privacy Policy</p>
          <p className="privacy_text">Terms of Service</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
