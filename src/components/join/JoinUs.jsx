import React from 'react'
import "./Joinus.css"
import AboutBase from "../../assets/AboutBase.png"
 
function JoinUs() {
  return (
    <div className='Join'>
        <div className='joinimage-container'>
        <img src={AboutBase} alt='' className='aboutbaseimage' />
        <div className='imageTop'>
            <div className='text-section1'>
            <h1 className='text-section1-heading'>How We Got Here</h1>
            <span className='text-section1-paragraph'>Our journey started within the dynamic ecosystem of Angadi 
                world technologies Pvt Ltd. Through  innovation,dedication,and a 
                commitment to excellence , we have evolved QR Angadi into a platform that reflects our core values
                : simplicity , functionality and security
            </span>
            </div>
            <div className='text-section2'>
            <h1 className='text-section1-heading'>Join Us on the QR</h1>
            <span className='text-section1-paragraph'>
                weather you are a seasoned marketer, a complience officer or an individual seeking 
                efficient QR solutions, QR Angadi a product of Angadi 
                world technologies Pvt Ltd, welcomes you to join us on this exciting journey. Exlpore the possibilities
                streamline your processes, and discover the convience of QR technology with us
            </span>
            </div>
            <div className='text-section3'>
            <h1 className='text-section1-heading'>Contct Us</h1>
            <span className='text-section1-paragraph'>
                Ready to experience the power of QR Angadi?
                Connect with us today , we are here to answer your questions , address your needs,
                and help you make the most of our innovative QR code platform
            </span>
            <button className='contact-btn'>Contact Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default JoinUs