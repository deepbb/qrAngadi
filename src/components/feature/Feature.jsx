import React from 'react'
import "./Feature.css"
import Dice from  "../../assets/dice.png"
import Cell from  "../../assets/cell.png"
import Lap1 from  "../../assets/lap1.png"
import Lap2 from  "../../assets/lap2.png"


function Feature() {
  return (
    <div className='feature'>
        <h1 className='feature-heading'>What Sets Us Apart</h1>
        <div className='feature-container'>
        <div className='feature-cards'>
                <div className='padding-class'>
                    <span className='card-heading'>Comprehensive <br />Solutions</span> <br />
                    <div className='paragraph-contaner'>
                    <span className='feature-paragraph'>
                    QR Angadi is more than just a QR code generator. As a product under Angadi World Technologies Pvt Ltd, we provide a comprehensive solution for marketing asset management, compliance documentation, and beyond
                    </span>
                    </div>
                    </div>
                    <div className='card-image-container'>
                        <img src={Dice} alt='' className='card-image' />
                    </div>
            </div>
            <div className='feature-cards'>
                <div className='padding-class'>
                    <span className='card-heading'>Comprehensive <br />Solutions</span> <br />
                    <div className='paragraph-contaner'>
                    <span className='feature-paragraph'>
                    Enjoy the flexibility of dynamic QR codes, allowing you to edit content even after the code has been generated
                    </span>
                    </div>
                    </div>
                    <div className='card-image-container'>
                        <img src={Cell} alt='' className='card-image' />
                    </div>
            </div>
            <div className='feature-cards'>
                <div className='padding-class'>
                    <span className='card-heading'>Comprehensive <br />Solutions</span> <br />
                    <div className='paragraph-contaner'>
                    <span className='feature-paragraph'>
                    Enjoy the flexibility of dynamic QR codes, allowing you to edit content even after the code has been generated
                    </span>
                    </div>
                    </div>
                    <div className='card-image-container'>
                        <img src={Lap1} alt='' className='card-image' />
                    </div>
            </div>
            <div className='feature-cards'>
                <div className='padding-class'>
                    <span className='card-heading'>Comprehensive <br />Solutions</span> <br />
                    <div className='paragraph-contaner'>
                    <span className='feature-paragraph'>
                    Enjoy the flexibility of dynamic QR codes, allowing you to edit content even after the code has been generated
                    </span>
                    </div>
                    </div>
                    <div className='card-image-container'>
                        <img src={Lap2} alt='' className='card-image' />
                    </div>
            </div>
            <div className='feature-cards'>
                <div className='padding-class'>
                    <span className='card-heading'>Comprehensive <br />Solutions</span> <br />
                    <div className='paragraph-contaner'>
                    <span className='feature-paragraph'>
                    Personalize your QR codes effortlessly with our user-friendly customization tools. Add logos, colors, and patterns to align with your brand or personal style
                    </span>
                    </div>
                    </div>
                    <div className='card-image-container'>
                        <img src={Lap2} alt='' className='card-image' />
                    </div>
            </div>
         

        </div>
    </div>
  )
}

export default Feature