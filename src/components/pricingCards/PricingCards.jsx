import React, { useState } from "react";
import styles from "./index.module.css";
import right from "../../assets/right.png";
function PricingCards() {
  const [pricingType, setPricingType] = useState("yearly");
  const features = [
    "Unlimited QR Code Generation",
    "Standard QR Code Design Templates",
    "Static QR Codes (non-editable content)",
    "Basic Analytics Email Support Limited",
    "Customer Support",
  ];
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.pricingButtonContainer}>
        <button
          onClick={() => setPricingType("monthly")}
          className={`${pricingType == "monthly" ? styles.activeType : ""} ${
            styles.btn
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setPricingType("yearly")}
          className={`${pricingType == "yearly" ? styles.activeType : ""} ${
            styles.btn
          }`}
        >
          Yearly
        </button>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          gap: "20px",
          alignItems: "flex-end",
          marginInline: "auto",
          marginTop: "50px",
        }}
      >
        {/* CARD1 */}
        <div className={styles.pricingCardContainer}>
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <div className={styles.infoHeader}>
                <div className={styles.cardHead}>BASIC</div>
                <div className={styles.cardType}>Free</div>
              </div>
              <hr className={styles.hr}></hr>
              <div className={styles.info}>
                <ul>
                  {features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "5px",
                          }}
                        >
                          <span>{feature}</span>
                          <img
                            src={right}
                            style={{ height: "25px", width: "25px" }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button className={styles.signup}>SIGN UP FOR FREE</button>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.boldText}>Free Forever</span>
              <span className={styles.smallText}>
                Recommended for personal use.
              </span>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className={`${styles.pricingCardContainer}`}>
          <div className={`${styles.card} ${styles.cardTwo}`} style={{}}>
            <div className={styles.mostPopular}>
              <p style={{ margin: "10px" }}>MOST POPULAR!</p>
            </div>
            <div className={styles.cardInfo} style={{ paddingTop: "5px" }}>
              <div className={styles.infoHeader}>
                <div className={styles.cardHead}>PREMIUM</div>
                <div className={styles.cardType}>
                  $8/
                  <span style={{ color: "#5A5A5A", fontSize: "17px" }}>
                    Month
                  </span>
                </div>
              </div>
              <hr className={styles.hr}></hr>
              <div className={styles.info}>
                <ul>
                  {features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "5px",
                          }}
                        >
                          <span>{feature}</span>
                          <img
                            src={right}
                            style={{ height: "25px", width: "25px" }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button className={styles.subscribe}>SUBSCRIBE NOW</button>
            </div>
            <div className={styles.cardFooter} style={{ fontSize: "14px" }}>
              <span style={{ textAlign: "center" }}>
                <span className={styles.boldText}>Risk-Free </span>{" "}
                <span className={styles.smallTextText}>
                  - 7 day money-back guarantee
                </span>
              </span>
              <span style={{ textAlign: "center" }}>
                <span className={styles.boldText}>Flexibility</span>{" "}
                <span className={styles.smallTextText}>- Cancel anytime.</span>
              </span>
            </div>
          </div>
        </div>{" "}
        {/* CARD3 */}
        <div className={styles.pricingCardContainer}>
          <div className={styles.card}>
            <div className={styles.cardInfo}>
              <div className={styles.infoHeader}>
                <div className={styles.cardHead}>BUSINESS</div>
                <div className={styles.cardType}>
                  $16/
                  <span style={{ color: "#5A5A5A", fontSize: "17px" }}>
                    Month
                  </span>
                </div>
              </div>
              <hr className={styles.hr}></hr>
              <div className={styles.info}>
                <ul>
                  {features.map((feature, index) => {
                    return (
                      <li key={index}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: "5px",
                          }}
                        >
                          <span>{feature}</span>
                          <img
                            src={right}
                            style={{ height: "25px", width: "25px" }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button className={styles.subscribe}>SUBSCRIBE NOW</button>
            </div>
            <div className={styles.cardFooter} style={{ fontSize: "14px" }}>
              <span style={{ textAlign: "center" }}>
                <span className={styles.boldText}>Risk-Free </span>{" "}
                <span className={styles.smallTextText}>
                  - 7 day money-back guarantee
                </span>
              </span>
              <span style={{ textAlign: "center" }}>
                <span className={styles.boldText}>Flexibility</span>{" "}
                <span className={styles.smallTextText}>- Cancel anytime.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCards;
