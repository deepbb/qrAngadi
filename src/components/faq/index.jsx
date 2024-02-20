import styles from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Accordion } from "react-bootstrap";
function Faqs() {
  return (
    <div class="row w-75 m-auto my-5">
      <div class="col-6">
        <h1 className={styles.headText}>Frequently Asked Questions</h1>
        <p className={styles.sideText}>Still have some unsolved queries?</p>
        <button className={styles.contactUsBtn}>Contact us</button>
      </div>
      <div class="col-6">
        {" "}
        <Accordion id={styles.accordionContainer}>
          <Accordion.Item
            eventKey="0"
            // style={{ border: "none" }}
            className={styles.removeBorder}
          >
            <Accordion.Header>
              Will I get a refund after 7 days?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            // style={{ border: "none" }}
            className={styles.removeBorder}
          >
            <Accordion.Header>
              Will I get unlimited generations?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>{" "}
          <Accordion.Item
            eventKey="2"
            // style={{ border: "none" }}
            className={styles.removeBorder}
          >
            <Accordion.Header>
              Can I upload linktree in the URL?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>{" "}
          <Accordion.Item
            eventKey="3"
            // style={{ border: "none" }}
            className={styles.removeBorder}
          >
            <Accordion.Header>
              Can I track the number of click?
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
