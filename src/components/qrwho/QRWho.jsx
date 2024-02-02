import React from 'react'
import "./QRWho.css"
import QRWHO from "../../assets/whoweare.png"
import AWT from "../../assets/awtlogo.png"
import QRAngadi  from  "../../assets/qr-angadi.png"
  
function QRWho() {
  return (
    <div className='qrwho'>
        <img src={QRWHO} className='qrimage' alt='' />
        <div className='qr-texts'>
            <span className='qrwho-heading'>Who We Are</span><br />
            <span className='qrwho-paragraph'>
            <span style={{fontWeight:900}}>QR Angadi</span> is a flagship product of <br /> <span style={{color:"#000000",fontWeight:900}}>Angadi World Technologies Pvt Ltd,</span><br />
             a company founded with a commitment to innovation and excellence. Our team of dedicated professionals is driven to simplify and enhance the QR code experience for users across various industries.
            </span>
            <div className='logo-box'>
            <img src={AWT} className='awtlogo' alt='' />
            <img src={QRAngadi} className='qrlogo' alt='' />
            </div>
        </div>
        
    </div>
  )
}

export default QRWho