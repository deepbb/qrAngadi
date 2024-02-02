import React from 'react'
import "./QRcode.css"
import QRSocial from "../../assets/qr-social.png"
import Base from  "../../assets/base2.svg"
import Mobile from "../../assets/mobile.png"
import Base3 from  "../../assets/base3.png"
import Mobile3 from "../../assets/mobile3.png"
import Mobile2 from "../../assets/mobile2.png"
import Base4 from  "../../assets/base4.png"
import Social from  "../../assets/social.png"
import Mobile4 from  "../../assets/mobile4.png"
import Gaming from  "../../assets/gaming.png"
import QRInfo from  "../../assets/qrinfo.png"
import GaneSol from  "../../assets/gamesol.png"
import Support from  "../../assets/support.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';











function QRcode() {
  
  return (
    <>
    <div className='qrcode'>
        <h1 className='qr-code-heading'>Choose from Wide Range of <span className='text'>QR code as per your need</span></h1>
        <div className='img-container'>
            <img src={QRSocial} alt='' width="900" height="500"/>
            <button className='create-btn'>Create Now</button>
        </div>
        </div>
        <div className='mobile-qr'>
          <div className='baseimageContainer'>
              <img src={Base} alt='baseimage' className='baseimage' />
              <div className='mobileimageContainer'>
              <img src={Mobile} alt='baseimage' className='mobileimage' />
              </div>
              <div className='text-container'>
                  <h1 className='mobile-qr-heading'>How QR Angadi Works Simple Steps to</h1>
                  <h1 className='mobile-qr-heading2'>QR Code Brilliance</h1>
                  <div className='signuptexts'>
                    <span className='signup-heading'>Sign Up and Create Your Account</span> <br/>
                    <span className='signup-para'>Begin your QR journey by signing up for QR Angadi. Creating an account gives you access to a powerful suite of QR code management tools.</span>
                  </div>

              </div>
          </div>
        </div>
        <div className='base3'>
              <img src={Base3} alt='baseimage' className='baseimage' />
              <div className='mobileimageContainer2'>
              <img src={Mobile3} alt='baseimage' className='mobileimage' />
              </div>
              <div className='base3TextBox'>
                  <span className='base3Heading'>Choose Your QR Code Type</span> <br />
                  <span className='base3Paragraph'>Select the QR code type that fits your needs. 
                    Whether it's for websites, contact information, 
                    or compliance documents, QR Angadi has you covered.</span>
              </div>
        </div>
        <div className='base4'>
          <div className='base4imageContainer4'>
          <img src={Base} alt='baseimage' className='baseimage4' />
          <div className='mobileimageContainer3'>
              <img src={Mobile2} alt='baseimage' className='mobileimage' />
              </div>
              <div className='base4TextBox'>
                  <span className='base4Heading'>Customise Your QR Code</span> <br />
                  <span className='base4Paragraph'>Add a personal touch to your QR code. Customise its design with logos, colours, and patterns to align with your brand or personal style.</span>
              </div>
          </div>
        </div>
        <div className='base5'>
        <img src={Base4} alt='baseimage' className='baseimage' />
        <div className='base5TextContainer'>
          <span className='base5Heading'>Generate and Implement</span> <br />
          <span  className='base5Paragraph'>With a click, generate your QR code. Implement it across your marketing materials or compliance documents effortlessly.</span>

        </div>
        </div>
        <div className='social'>
        <img src={Social} alt='baseimage' className='socialimage' />
        </div>
        <div className='base6'>
        <img src={Base} alt='baseimage' className='baseimage' />
        <div className='mobileimageContainer2'>
              <img src={Mobile4} alt='baseimage' className='mobileimage' />
              </div>
              <div className='base3TextBox4'>
                  <span className='base3Heading4'>Monitor with <span className='spantext'>Analytics</span></span> <br />
                  <span className='base3Paragraph4'>Track your QR code performance with our analytics dashboard. Gain insights into user engagement, geographic data, and more to optimise your strategies.</span>
              </div>
        </div>
        <div className='gamingcontainer'>
        <img src={Gaming} alt='baseimage' className='gamingimage' />
        </div>
        <div className='qrinfocontainer'>
        <img src={QRInfo} alt='baseimage' className='gamingimage' />
        </div>
        <div className='gamesolcontainer'>
           <img src={GaneSol} alt='baseimage' className='gamesolimage' />
           <div className='base4gameBox'>
                  <span className='gameheading'>Elevate Your Marketing Experience with</span> <br />
                  <span className='game2Heading'>QR Angadi's Gamification Solutions</span><br />
                  <span className='gameparagraph'>
                  Welcome to a new era of interactive marketing! At QR Angadi, we redefine engagement through our gamification features—Spin and Win, Scratch Cards, and Lucky Win or Jackpot. Gamification isn't just a strategy; it's a powerhouse for creating unforgettable brand experiences.
                    </span> <br />
                    <span className='gameparagraph'>
                    Discover the art of personalized campaigns, aligning visuals and prizes with your brand. Realize tangible results through our case studies, showcasing businesses that have soared with QR Angadi. Ready to transform your campaigns? Explore implementation strategies and witness the magic of gamification. Your journey to elevated marketing starts here!
                      </span>
              </div>
        </div>
        <div className='support'>
        <img src={Support} alt='baseimage' className='supportimage' />
        <div className='supportBox'>
          <h1 className='supportheading'>Supported by</h1>
          <div className='box-container'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
          </div>

        </div>
        </div>
        <div className='base6'>
        <img src={Base4} alt='baseimage' className='supportimage' />
        <div className='image-slider'>
        <div className='scroll-container'>
          <div className='imgBox'>
            <div className='profile-container'>
              <div className='profile'></div>
              <div className='profileinfo'>
                  <p className='name'>Alex M</p>
                  <p className='designation'>Compliance Officer,</p>
                  <p className='designation'>SecureTech Solutions</p>
              </div>
            </div>
            <div className='stars'>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px' }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5 }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
              </div>
              <hr className='horizontal' />
              <p className='box-text'>
              “QR Angadi has been a game-changer for our compliance management. It's intuitive, efficient, and crucial for regulatory adherence.”
              </p>
          </div>
          <div className='imgBox'>
            <div className='profile-container'>
              <div className='profile'></div>
              <div className='profileinfo'>
                  <p className='name'>Alex M</p>
                  <p className='designation'>Compliance Officer,</p>
                  <p className='designation'>SecureTech Solutions</p>
              </div>
            </div>
            <div className='stars'>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px' }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5 }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
              </div>
              <hr className='horizontal' />
              <p className='box-text'>
              “QR Angadi has been a game-changer for our compliance management. It's intuitive, efficient, and crucial for regulatory adherence.”
              </p>
          </div>
          <div className='imgBox'>
            <div className='profile-container'>
              <div className='profile'></div>
              <div className='profileinfo'>
                  <p className='name'>Alex M</p>
                  <p className='designation'>Compliance Officer,</p>
                  <p className='designation'>SecureTech Solutions</p>
              </div>
            </div>
            <div className='stars'>
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px' }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5 }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
            <FontAwesomeIcon icon={faStar} style={{ color: '#FF9B04', fontSize: '25px',marginLeft:5  }}  />
              </div>
              <hr className='horizontal' />
              <p className='box-text'>
              “QR Angadi has been a game-changer for our compliance management. It's intuitive, efficient, and crucial for regulatory adherence.”
              </p>
          </div>
          </div>
          </div>
        </div>
        <div className='static-text'> 
        <h3 className='static-head'>Success Stories - Realizing Results with QR Angadi</h3>
        <div className='text-box'>
       <h3 className='static-head'>Enhancing Educational Outreach</h3>
        <p className='stat-para'>Discover how a school district utilized QR Angadi to manage compliance documents and enhance communication with parents, transforming their educational outreach.</p>
        </div>
        <div className='text-box'>
       <h3 className='static-head'>Enhancing Educational Outreach</h3>
        <p className='stat-para'>Discover how a school district utilized QR Angadi to manage compliance documents and enhance communication with parents, transforming their educational outreach.</p>
        </div>

        </div>
    </>
  )
}

export default QRcode