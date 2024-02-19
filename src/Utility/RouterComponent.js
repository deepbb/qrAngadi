import React from "react";
import About from "../pages/about/About";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import QRCodeSolution from "../pages/qrcodesolution/QRCodeSolution";
import Profile from "../pages/profile/Profile";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Dashboard from "../pages/Analytices/Pages/Dashboard/Dashboard";

function RouterComponent() {
  // In App.js or any other file where you want to access the stored data

  // Retrieve data from local storage
  const storedUserData = localStorage.getItem("userData");

  // Check if there is stored data
  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    console.log("Stored User Data:", userData);

    // Now you can use userData as needed in your application
  } else {
    console.log("No user data found in local storage");
  }

  const isLoggedIn = !!storedUserData;

  console.log("LOG", isLoggedIn);

  return (
    <div>
      {/* main routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/qrcodesolutions" element={<QRCodeSolution />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard/:id" element={<Dashboard></Dashboard>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
