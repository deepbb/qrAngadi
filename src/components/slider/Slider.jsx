import React from 'react'
import "./Slider.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image3 from "../../assets/slide1.png"

 
export default function Slider() {
    
  return (
    <AliceCarousel autoPlay autoPlayInterval="3000">
       <div className='imageWrapper'>
      <img src={image3} className="sliderimg" alt=""/>
      <div className='text-pos'>
      <p className='qr-text'>
      Unleash the power of quick and efficient information sharing with <span className='qr-angadi'>QR ANGADI,</span>
      The most user-friendly QR code generator app.
       Whether you're a business professional, 
       event organizer, or just looking to simplify your digital life,
        we've got you covered.
      </p>
      </div>
      <div className='welcome-text'>
        <span className='welcome'>Welcome to</span>
        <span className='qr-ang'>QR Angadi</span>
        <span className='text1'>Your Ultimate QR Code Solution</span>
         <span className='text2'>What more you</span>
         <span className='text3'>CAN DO</span>
         <button className='explore-btn'>Explore</button>
      </div>
      </div>
    </AliceCarousel>
  )
}
