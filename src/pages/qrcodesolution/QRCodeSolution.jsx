import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../components/footer/Footer"
import "./QRCodeSolution.css"
import URL from "../../assets/url-link.svg"
import Multi from "../../assets/multi-url.svg"
import Text from "../../assets/text.svg"
import Email from "../../assets/email.svg"
import Wifi from "../../assets/wifi.svg"
import Vcard from "../../assets/vcard.svg"
import SMS from "../../assets/sms.svg"
import Contact from "../../assets/contacts.svg"
import PDF from "../../assets/pdf.svg"
import App from "../../assets/app.svg"
import Image from "../../assets/image.svg"
import Audio from "../../assets/audio.svg"
import Video from "../../assets/file-video.svg"
import Social from "../../assets/social-media.svg"
import WhatsApp from "../../assets/whatsapp.svg"
import Insta from "../../assets/insta.png"
import Facebook from "../../assets/fb.png"
import LinkedIn from "../../assets/linked.png"
import Telegram from "../../assets/telegram.svg"
import X from "../../assets/x.svg"
import Youtube from "../../assets/YT.png"
import QRAngadi from "../../assets/QR_ANGADI.png"
import Preview from "../../assets/preview.svg"
import { IoIosArrowDown } from "react-icons/io";
import { BsDownload } from "react-icons/bs";










function QRCodeSolution() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className='qrcodesolutions'>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <div className='mainContainer'>
        <div className='tabs'>
          <button className='btn-tab'>Individual</button>
          <button className='btn-tab'>Compliance</button>
          <button className='btn-tab'>Marketing</button>
          <button className='btn-tab'>Enterpeise</button>
          <button className='btn-tab'>Social Media</button>
          <button className='btn-tab'>Professional</button>
        </div>
        <div className='icon-container'>
          <div className='logo-conatiner'>
            <img src={URL} alt='' className='logo-image' />
            <p className='logo-text'>URL</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Multi} alt='' className='logo-image' />
            <p className='logo-text'>Multi URL</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Text} alt='' className='logo-image' />
            <p className='logo-text'>Text</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Email} alt='' className='logo-image' />
            <p className='logo-text'>Email</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Wifi} alt='' className='logo-image' />
            <p className='logo-text'>Wifi</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Vcard} alt='' className='logo-image' />
            <p className='logo-text'>Vcard</p>
          </div>
          <div className='logo-conatiner'>
            <img src={SMS} alt='' className='logo-image' />
            <p className='logo-text'>SMS</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Contact} alt='' className='logo-image' />
            <p className='logo-text'>contact</p>
          </div>
          <div className='logo-conatiner'>
            <img src={PDF} alt='' className='logo-image' />
            <p className='logo-text'>PDF</p>
          </div>
          <div className='logo-conatiner'>
            <img src={App} alt='' className='logo-image' />
            <p className='logo-text'>App</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Image} alt='' className='logo-image' />
            <p className='logo-text'>Image</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Audio} alt='' className='logo-image' />
            <p className='logo-text'>Audio</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Video} alt='' className='logo-image' />
            <p className='logo-text'>Video</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Social} alt='' className='logo-image' />
            <p className='logo-text'>Social</p>
          </div>
          <div className='logo-conatiner'>
            <img src={WhatsApp} alt='' className='logo-image' />
            <p className='logo-text'>WhatsApp</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Insta} alt='' className='logo-image' />
            <p className='logo-text'>Instagram</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Facebook} alt='' className='logo-image' />
            <p className='logo-text'>Facebook</p>
          </div>
          <div className='logo-conatiner'>
            <img src={LinkedIn} alt='' className='logo-image' />
            <p className='logo-text'>LinkedIn</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Telegram} alt='' className='logo-image' />
            <p className='logo-text'>Telegram</p>
          </div>
          <div className='logo-conatiner'>
            <img src={X} alt='' className='logo-image' />
            <p className='logo-text'>X</p>
          </div>
          <div className='logo-conatiner'>
            <img src={Youtube} alt='' className='logo-image' />
            <p className='logo-text'>Youtube</p>
          </div>


        </div>

      </div>
      <div className='mainContainer2'>
        <div className='customize'>
          <button className='customize-button'>Customize</button>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={() => handleOptionChange('option1')}
                className='radio-btn'
              />
              Dynamic
            </label>

            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={() => handleOptionChange('option2')}
                className='radio-btn'
              />
              Static
            </label>
          </div>

        </div>
        <div className='box-container'>
          <div className='box1'>
            <button className='btn1'>Set colors</button>
            <div className='radio-container2'>
              <label className='label1'>
                <input
                  type="radio"
                // className='radio-btn2'
                />
                single color
              </label>
              <div className='color-box-container'>
                <div className='color-box'>
                </div>
                <span className='label-text'>#000000</span>

              </div>
              <label className='label1'>
                <input
                  type="radio"
                // className='radio-btn2'
                />
                Color Gradients
              </label>
              <div className='color-box-container'>
                <div className='color-box-yellow'>
                </div>
                <span className='label-text'>#000000</span>

              </div>
              <div className='color-box-container'>
                <div className='color-box-orange'>
                </div>
                <span className='label-text'>#000000</span>

              </div>
              <label className='label1'>
                <input
                  type="radio"
                // className='radio-btn2'
                />
                Color Color
              </label>
              <div className='color-box-container'>
                <div className='color-box'>
                </div>
                <span className='label-text'>#000000</span>

              </div>
              <div className='color-box-container'>
                <div className='color-box'>
                </div>
                <span className='label-text'>#000000</span>

              </div>

            </div>
          </div>
          <div className='box2'>
            <button className='btn1'>Customize Design</button>
            <div className='body-shape'>
              <span style={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 14, marginLeft: 10 }}>Body Shape</span>
              <svg style={{ width: 20, height: 20, marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </div>
            <div className='smallBox-container'>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>

            </div>
            <div className='body-shape'>
              <span style={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 14, marginLeft: 10 }}>Body Shape</span>
              <svg style={{ width: 20, height: 20, marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </div>
            <div className='smallBox-container'>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>

            </div>
            <div className='body-shape'>
              <span style={{ fontWeight: 'bold', fontFamily: 'Poppins', fontSize: 14, marginLeft: 10 }}>Body Shape</span>
              <svg style={{ width: 20, height: 20, marginRight: 5 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </div>
            <div className='smallBox-container'>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>
              <div className='small-box'></div>

            </div>
          </div>
          <div className='box3'>
            <button className='btn1'>Customize Design</button>
            <div className='logo-wrapper'>
                <img src={QRAngadi} alt='' style={{width:100,height:100}} />
                <button className='upload-btn'>Upload</button>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
              <input type="checkbox" />
              <label style={{fontSize:10,color:'#312A3C',fontFamily:'Poppins'}}>Transperant BG</label>
            </div>
          </div>
        </div>
        <div className='qrcode-preview'>
          <div className='preview-section'> 
              <img src={Preview} className='preview-image' alt='' />
          </div>
          <div className='button-section'>
            <button className='create-qrbtn'>Create QR Code <IoIosArrowDown size={25} /></button>
            <span className='btn-text'>Download</span>
            <button className='create-qrbtn' style={{marginTop:20}}>Download <BsDownload size={20} style={{marginLeft:10}} /></button>
            <span className='btn-or'>Or <br/> Share on</span> <br />
            <div className='share-container'>
              <img src={WhatsApp} alt=''   className='social-icons' />
              <img src={Insta} alt=''      className='social-icons' />
              <img src={Facebook} alt=''   className='social-icons' />
              <img src={LinkedIn} alt=''   className='social-icons' />
              <img src={Telegram} alt=''   className='social-icons' />
              <img src={X} alt=''          className='social-icons' />
              <img src={Youtube} alt=''   className='social-icons'/>


            </div>
          </div>

        </div>

      </div>
      <Footer />

    </div>
  )
}

export default QRCodeSolution