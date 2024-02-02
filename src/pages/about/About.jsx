import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./About.css"
import QRAbout from '../../components/qrabout/QRAbout'
import QRWho from '../../components/qrwho/QRWho'
import QRvision from '../../components/qrvision/QRvision'
import Feature from '../../components/feature/Feature'
import Footer from "../../components/footer/Footer"
import JoinUs from '../../components/join/JoinUs'
function About() {
  return (
    <>
    <Navbar />
    <div className='about-container'>
        <QRAbout />
        <QRWho />
        <QRvision />
        <Feature />
        <JoinUs />
        <Footer />
    </div>
    </>
  )
}

export default About