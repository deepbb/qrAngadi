import React from 'react'
import "./QRVision.css"
import Support from "../../assets/support.png"
import Vision from "../../assets/vision.png"
import Rect from "./Rect.png"

function QRvision() {
  return (
    <div className='qrvision'>
        <img src={Support} alt='' className='supportimage' />
        <div className='vision-container'>
        <img src={Rect} alt='' className='visionimage' />
        <div className='vision-text'>
            <span className='vision-heading'>Our Vision</span> <br />
            <span className='vision-paragraph'>As a subsidiary of Angadi World Technologies Pvt Ltd,<br /> QR Angadi shares the overarching vision of the parent company – to create a world where QR codes seamlessly connect the physical and digital realms, streamlining processes, and enhancing user experiences. With QR Angadi, we aim to be at the forefront, offering a platform that combines simplicity, versatility, and security.</span>
        </div>
         </div>

    </div>
  )
}

export default QRvision