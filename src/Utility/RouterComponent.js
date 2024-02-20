import React, { useEffect, useState } from "react";
import About from "../pages/about/About";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import QRCodeSolution from "../pages/qrcodesolution/QRCodeSolution";
import Profile from "../pages/profile/Profile";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Dashboard from "../pages/Analytices/Pages/Dashboard/Dashboard";

function RouterComponent() {
  // const [loading, setLoading] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
   const storedUserData = localStorage.getItem("userData");

  
  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("userData");
  //   if (storedUserData) {
  //     const userData = JSON.parse(storedUserData);
  //     console.log("Stored User Data:", userData);
  //     setIsLoggedIn(true);
  //   }
  //   setLoading(false);
  // }, []);
  

  


  if (storedUserData) {
    const userData = JSON.parse(storedUserData);
    console.log("Stored User Data:", userData);
  } else {
    console.log("No user data found in local storage");
  }

  const isLoggedIn = !!storedUserData;

  console.log("LOG", isLoggedIn);

  return (
    <div>
      {/* main routes */}
      {/* <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/aboutus" element={<About />} /> 
        <Route path="/qrcodesolutions" element={<QRCodeSolution />} />
         <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard/:id" element={<Dashboard></Dashboard>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
          <Routes>
        <Route path="/" element={<Home /> } /> 
        <Route path="/aboutus" element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route
          path="/qrcodesolutions"
          element={isLoggedIn ? <QRCodeSolution /> : <Navigate to="/login" />}
        />
          <Route
          path="/qrcodesolutions"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />
          <Route
          path="/dashboard/:id"
          element={<Dashboard />}
        />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default RouterComponent;
