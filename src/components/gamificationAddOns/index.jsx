import React from "react";

import styles from "./index.module.css";
import mainImage from "../../assets/gamification/main.png";
import one from "../../assets/gamification/one.png";
import two from "../../assets/gamification/two.png";
import three from "../../assets/gamification/three.png";

function GamificationAddOns() {
  return (
    <div className="mt-5">
      <div
        className="row w-75"
        style={{
          justifyContent: "center",
          display: "flex",
          margin: "auto",
        }}
      >
        <div
          className="col-6"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "0px",
          }}
        >
          <img
            src={mainImage}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="col-6">
          <h2 className={styles.gamificationHead}>Gamification Add-ons</h2>
          <p className={styles.gameText}>
            Enhance your marketing strategy with our gamification add-ons.
            Choose the ones that best suit your campaign objectives.
          </p>
          <div className="row">
            <div
              className="col-4 d-flex flex-column justify-content-center align-items-center"
              style={{ rowGap: "5px" }}
            >
              <img
                src={one}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p className={styles.gameImgText}> Spin & Win</p>
            </div>
            <div
              className="col-4 d-flex flex-column justify-content-center align-items-center"
              style={{ rowGap: "5px" }}
            >
              <img
                src={two}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p className={styles.gameImgText}>Scratch Cards</p>
            </div>
            <div
              className="col-4 d-flex flex-column justify-content-center align-items-center"
              style={{ rowGap: "5px" }}
            >
              <img
                src={three}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p className={styles.gameImgText}>Lucky Win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamificationAddOns;
