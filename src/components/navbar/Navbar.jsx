import React from "react";
import "./Navbar.css";
import Logo from "../../assets/qr-angadi.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const storedUserData = localStorage.getItem("userData");
  console.log("STORE DATA in HOME", storedUserData);

  console.log("NAVBAR", storedUserData);

  return (
    <div className="navbar">
      <div className="navbar-wraper">
        <div className="navbar-logo">
          <img src={Logo} width={90} height={50} alt="logo" />
        </div>
        <div className="navnar-menu">
          <Link to="/" className="list-items" href="/">
            Home
          </Link>
          <Link to="/aboutus" className="list-items">
            About us
          </Link>

          {storedUserData ? (
            <Link to="/qrcodesolutions" className="list-items">
              QR Code Solutions
            </Link>
          ) : (
            <Link to="/login" className="list-items">
              QR Code Solutions
            </Link>
          )}
          <li className="list-items" href="/">
            Gamifying Solutions
          </li>
          <Link to="/pricing" className="list-items">
            Pricing
          </Link>
          {storedUserData ? (
            <Link to="/profile" className="list-items">
              Profile
            </Link>
          ) : (
            <Link to="/login" className="list-items">
              Profile
            </Link>
          )}
          <li className="list-items" href="/">
            Contact us
          </li>
        </div>
        <div className="navbar-login">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="btn-login">Login</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="btn-signup">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
