import { useState } from "react";
import styles from "./index.module.css";

import telePic from "../../assets/letsTalk/contactUs.png";
import call from "../../assets/letsTalk/call.png";
import emailIcon from "../../assets/letsTalk/email.png";
import location from "../../assets/letsTalk/location.png";
import instagram from "../../assets/letsTalk/instagram.png";
import linkedin from "../../assets/letsTalk/linkedin.png";
import pintrest from "../../assets/letsTalk/pintrest.png";
import youtube from "../../assets/letsTalk/youtube.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Contactus } from "../../Api/Users";

function Input({ label, type, inputId, placeholder, value, setValue }) {
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%" }}
      />
    </>
  );
}

function LetsTalk() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queries, setQueries] = useState("");
  const [message, setMessage] = useState("");

  const SubmitButton = () => {
    if(!firstName){
      toast("Please enter first name")
      return false
    }else if(!lastName){
      toast("Please enter last name")
      return false  
    }else if(!email){
      toast("Please enter email")
      return false
    }else if(!queries){
      toast("Please enter queries")
      return false
    }else if(!message){
      toast("Please enter message")
      return false
    }
    Contactus({
      FirstName: firstName,
      LastName:lastName,
      Email: email,
      Subject: queries,
      Message: message,
    }).then((res)=>{
      if(res.status==="success"){
        toast("Queries send successfully")
        setFirstName("")
        setLastName("")
        setEmail("")
        setQueries("")
        setMessage("")
      }else{
        toast(res.message)
      }
    });
  };

  return (
    <div className={`${styles.letsTalkContainer} row m-auto mt-5`}>
       <ToastContainer />
      <div className="col-5 py-4 ps-4 d-flex justify-content-center flex-column">
        <img
          src={telePic}
          style={{ width: "80%", height: "auto", margin: "auto" }}
        />
        <span className="d-flex w-50 m-auto g-2 align-items-center mt-3">
          <img src={call} style={{ height: "30px", width: "30px" }} />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              //   lineHeight: "42px",
              letterSpacing: "0em",
              color: "#878787",
              //   marginLeft: "5px",
            }}
          >
            +91 1234567890
          </span>
        </span>
        <span className="d-flex w-50 m-auto g-2 align-items-center mt-1">
          <img
            src={emailIcon}
            style={{ height: "14px", width: "22px", marginLeft: "5px" }}
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              //   lineHeight: "42px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#878787",
              marginLeft: "5px",
            }}
          >
            info@qrangadi.com
          </span>
        </span>{" "}
        <span className="d-flex w-50 m-auto g-2 align-items-center mt-1">
          <img src={location} style={{ height: "30px", width: "30px" }} />
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              //   lineHeight: "42px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#878787",
            }}
          >
            Bengaluru, Karnataka
          </span>
        </span>
        <span
          className="mb-4"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            position: "relative",
            left: "-5px",
            marginTop: "5px",
          }}
        >
          {" "}
          <img src={instagram} style={{ height: "30px", width: "30px" }} />
          <img src={linkedin} style={{ height: "30px", width: "30px" }} />
          <img src={pintrest} style={{ height: "30px", width: "30px" }} />
          <img src={youtube} style={{ height: "30px", width: "30px" }} />
          <img src={location} style={{ height: "30px", width: "30px" }} />
        </span>
      </div>
      <div className="col-7 p-3">
        <h2>Let's Talk</h2>
        <p>Provide the necessary details.</p>
        <div className="row align-items-center my-4 my-4">
          <div className={`col-6 ${styles.inputContainer}`}>
            <Input
              label="First Name"
              type="text"
              inputId="fn"
              placeholder="First Name"
              value={firstName}
              setValue={setFirstName}
            />
          </div>
          <div className={`col-6 ${styles.inputContainer}`}>
            <Input
              label="Last Name"
              type="text"
              inputId="ln"
              placeholder="Last Name"
              value={lastName}
              setValue={setLastName}
            />
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className={`col-12 ${styles.inputContainer}`}>
            <Input
              label="Your Email"
              type="textarea"
              inputId="email"
              placeholder="Your email"
              value={email}
              setValue={setEmail}
            />
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className={`col-12 ${styles.inputContainer}`}>
            <Input
              label="Related Subject"
              type="text"
              inputId="queries"
              placeholder="Queries"
              value={queries}
              setValue={setQueries}
            />
          </div>
        </div>
        <div className="row align-items-center my-4">
          <div className={`col-12 ${styles.inputContainer}`}>
            <label htmlFor="message">your Message</label>
            <textarea
              label="Related Subject"
              id="message"
              placeholder="Type something here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ width: "100%", minHeight: "110px", maxHeight: "110px" }}
            />
          </div>
        </div>
        <button
          className={`${styles.submitButton} mb-5`}
          onClick={() => SubmitButton()}
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
  );
}

export default LetsTalk;
