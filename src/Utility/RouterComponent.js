import React from 'react'
import About from '../pages/about/About'
import { Route,Routes ,Navigate} from "react-router-dom";
import Home from '../pages/Home/Home'
import QRCodeSolution from '../pages/qrcodesolution/QRCodeSolution';
import Profile from '../pages/profile/Profile';
import Signup from '../pages/signup/Signup';

function RouterComponent() {

  // In App.js or any other file where you want to access the stored data

// Retrieve data from local storage
const storedUserData = localStorage.getItem('userData');

// Check if there is stored data
if (storedUserData) {
  const userData = JSON.parse(storedUserData);
  console.log('Stored User Data:', userData);

  // Now you can use userData as needed in your application
} else {
  console.log('No user data found in local storage');
}

const isLoggedIn = !!storedUserData;

console.log("LOG",isLoggedIn);

  return (
    <div>
       {/* main routes */}
       <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/signup" />} />
        <Route path="/aboutus" element={isLoggedIn ? <About /> : <Navigate to="/signup" />} />
        <Route
          path="/qrcodesolutions"
          element={isLoggedIn ? <QRCodeSolution /> : <Navigate to="/signup" />}
        />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default RouterComponent