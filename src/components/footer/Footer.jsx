import React from "react";
import "./Footer.css";
import Whatsapp from "../../assets/whatsapp.svg";
import FB from "../../assets/fb.png";
import Insta from "../../assets/insta.png";
import twit from "../../assets/twit.png";
import tweet from "../../assets/tweet.png";
import YT from "../../assets/YT.png";
import LinkedIn from "../../assets/linked.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="inner-container">
          <div className="about-section">
            <p className="footer-heading">About Us</p>
            <p className="footer-paragraph">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur{" "}
            </p>
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
                  <td>Product 1</td>
                  <td>Service 1</td>
                  <td>News</td>
                </tr>
                <tr>
                  <td>Product 2</td>
                  <td>Service 2</td>
                  <td>Blog</td>
                </tr>
                <tr>
                  <td>Product 3</td>
                  <td>Service 3</td>
                  <td>Videos</td>
                </tr>
                <tr>
                  <td>Product 4</td>
                  <td>Service 4</td>
                  <td>FAQ's</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="disclaimer"></div>
    </>
  );
}

export default Footer;
