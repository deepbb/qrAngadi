import React from 'react'
import About from '../pages/about/About'
import { Route,Routes } from "react-router-dom";
import Home from '../pages/Home/Home'
import QRCodeSolution from '../pages/qrcodesolution/QRCodeSolution';
import Profile from '../pages/profile/Profile';

function RouterComponent() {
  return (
    <div>
       {/* main routes */}
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutus" element={<About />}/>
      <Route path="/qrcodesolutions" element={<QRCodeSolution />}/>
      <Route path='/profile' element={<Profile />} />

      </Routes>
    </div>
  )
}

export default RouterComponent