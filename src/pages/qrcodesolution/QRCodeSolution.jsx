import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./QRCodeSolution.css";
import URL from "../../assets/url-link.svg";
import Multi from "../../assets/multi-url.svg";
import Text from "../../assets/text.svg";
import Email from "../../assets/email.svg";
import Wifi from "../../assets/wifi.svg";
import Vcard from "../../assets/vcard.svg";
import SMS from "../../assets/sms.svg";
import Contact from "../../assets/contacts.svg";
import PDF from "../../assets/pdf.svg";
import App from "../../assets/app.svg";
import Image from "../../assets/image.svg";
import Audio from "../../assets/audio.svg";
import Video from "../../assets/file-video.svg";
import Social from "../../assets/social-media.svg";
import WhatsApp from "../../assets/whatsapp.svg";
import Insta from "../../assets/insta.png";
import Facebook from "../../assets/fb.png";
import LinkedIn from "../../assets/linked.png";
import Telegram from "../../assets/telegram.svg";
import X from "../../assets/x.svg";
import Youtube from "../../assets/YT.png";
import QRAngadi from "../../assets/QR_ANGADI.png";
import Preview from "../../assets/preview.svg";
import { IoIosArrowDown } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { SketchPicker, BlockPicker } from "react-color";

import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Extension,
  Options,
} from "qr-code-styling";
import { Dot } from "../../Utility/QrType/DotOptions";
import { CreateWebsiteQr } from "../../Api/QR";

function QRCodeSolution() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  const [showColorPicker3, setShowColorPicker3] = useState(false);

  const [dottype, setDotType] = useState("");
  const [cornertype, setCornorType] = useState("");
  const [cornerdottype, setCornerdotType] = useState("");

  const [dotSelectedOption, setDotSelectedOption] = useState(-1);

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };
  const toggleColorPicker1 = () => {
    setShowColorPicker1(!showColorPicker1);
  };

  const toggleColorPicker2 = () => {
    setShowColorPicker2(!showColorPicker2);
  };

  const toggleColorPicker3 = () => {
    setShowColorPicker3(!showColorPicker3);
  };

  const [dotColor, setDotColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const [backgroundColor, setBackgroundColor] = useState({
    r: "95",
    g: "212",
    b: "243",
    a: "1",
  });
  const [cornersColor, setCornersColor] = useState({
    r: "34",
    g: "34",
    b: "34",
    a: "1",
  });
  const [cornersDotColor, setCornersDotColor] = useState({
    r: "34",
    g: "34",
    b: "34",
    a: "1",
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const [options, setOptions] = useState({
    width: 300,
    height: 300,
    type: "svg",
    data: "http://qr-code-styling.com",
    image: "/favicon.ico",
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 20,
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: "#222222",
      type: "rounded",
    },
    backgroundOptions: {
      color: "#5FD4F3",
    },
    cornersDotOptions: {
      color: "#222222",
      type: "dot",
    },
    cornersOptions: {
      color: "red",
      type: "dot",
    },
  });

  const [fileExt, setFileExt] = useState("svg");
  const [qrCode] = useState(new QRCodeStyling(options));
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  useEffect(() => {
    // Update QR code options when background color changes
    setOptions((options) => ({
      ...options,
      backgroundOptions: {
        ...options.backgroundOptions,
        color: `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`,
      },
      dotsOptions: {
        ...options.dotsOptions,
        color: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
        type: dottype,
      },
      cornersDotOptions: {
        ...options.cornersDotOptions,
        color: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
      },
      cornersOptions: {
        ...options.cornersOptions,
        color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
      },
    }));
  }, [backgroundColor, dotColor, cornersDotColor, cornersColor, dottype]);

  const onDataChange = (event) => {
    setOptions((options) => ({
      ...options,
      data: event.target.value,
    }));
  };

  const onExtensionChange = (event) => {
    setFileExt(event.target.value);
  };

  const onDownloadClick = () => {
    if (!qrCode) return;
    qrCode.download({
      extension: fileExt,
    });
  };

  //--------------------Api Calling----------------------//

  // const CreateQr = (type) => {
  //   switch (type) {
  //     case "Website": {
  //       CreateWebsiteQr({
  //         Url: "https://www.geeksforgeeks.org",
  //         dotoption: {
  //           color: "#4267b2",
  //           type: "classy",
  //         },
  //         backgroundOption: {
  //           type: "",
  //         },
  //         cornersOptions: {
  //           color: "",
  //           type: "",
  //         },
  //         cornersDotOptions: {
  //           color: "",
  //           type: "",
  //         },
  //         image:
  //           "https://www.seoclerk.com/pics/000/932/904/dd4a66cf9c1e002021ddaab315cdfccf.png",
  //       }).than((res)=>{
  //         console.log(res)
  //       })

  //       break;
  //     }
  //     case "platStore":{

  //     }
  //   }
  // };
  return (
    <div className="qrcodesolutions">
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="mainContainer">
        <div className="tabs">
          <button className="btn-tab">Individual</button>
          <button className="btn-tab">Compliance</button>
          <button className="btn-tab">Marketing</button>
          <button className="btn-tab">Enterpeise</button>
          <button className="btn-tab">Social Media</button>
          <button className="btn-tab">Professional</button>
        </div>
        <div className="icon-container">
          <div className="logo-conatiner">
            <img src={URL} alt="" className="logo-image" />
            <p className="logo-text">Website URL</p>
          </div>
          <div className="logo-conatiner">
            <img src={URL} alt="" className="logo-image" />
            <p className="logo-text">Website URL</p>
          </div>
          <div className="logo-conatiner">
            <img src={PDF} alt="" className="logo-image" />
            <p className="logo-text">PDF</p>
          </div>
          <div className="logo-conatiner">
            <img src={App} alt="" className="logo-image" />
            <p className="logo-text">App</p>
          </div>
          <div className="logo-conatiner">
            <img src={Image} alt="" className="logo-image" />
            <p className="logo-text">Image</p>
          </div>
          <div className="logo-conatiner">
            <img src={Audio} alt="" className="logo-image" />
            <p className="logo-text">Audio</p>
          </div>
          <div className="logo-conatiner">
            <img src={Video} alt="" className="logo-image" />
            <p className="logo-text">Video</p>
          </div>
          <div className="logo-conatiner">
            <img src={Social} alt="" className="logo-image" />
            <p className="logo-text">Social</p>
          </div>
          <div className="logo-conatiner">
            <img src={WhatsApp} alt="" className="logo-image" />
            <p className="logo-text">WhatsApp</p>
          </div>
          <div className="logo-conatiner">
            <img src={Insta} alt="" className="logo-image" />
            <p className="logo-text">Instagram</p>
          </div>
          <div className="logo-conatiner">
            <img src={Facebook} alt="" className="logo-image" />
            <p className="logo-text">Facebook</p>
          </div>
          <div className="logo-conatiner">
            <img src={LinkedIn} alt="" className="logo-image" />
            <p className="logo-text">LinkedIn</p>
          </div>
          <div className="logo-conatiner">
            <img src={Telegram} alt="" className="logo-image" />
            <p className="logo-text">Telegram</p>
          </div>
          <div className="logo-conatiner">
            <img src={X} alt="" className="logo-image" />
            <p className="logo-text">X</p>
          </div>
          <div className="logo-conatiner">
            <img src={Youtube} alt="" className="logo-image" />
            <p className="logo-text">Youtube</p>
          </div>
        </div>
      </div>
      <div className="mainContainer2">
        <div className="customize">
          <button className="customize-button">Customize</button>
          <div className="radio-container">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={() => handleOptionChange("option1")}
                className="radio-btn"
              />
              Dynamic
            </label>

            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={() => handleOptionChange("option2")}
                className="radio-btn"
              />
              Static
            </label>
          </div>
        </div>
        <div className="box-container">
          <div className="box1">
            <button className="btn1">Set Custom Style</button>
            <div className="radio-container2">
              <label className="label1">
                <input type="radio" />
                Dot Options
              </label>
              <label className="label1">
                <input type="radio" />
                Background Options
              </label>

              <label className="label1">
                <input type="radio" />
                Corners Options
              </label>

              <label className="label1">
                <input type="radio" />
                CornersDot Options
              </label>
            </div>
          </div>

          {/* //------------------------------Customize Options------------------------------// */}
          <div className="box2">
            <button className="btn1">Customize Design</button>
            <div className="body-shape">
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginLeft: 10,
                }}
              >
                Dot Options
              </span>
              <svg
                style={{ width: 20, height: 20, marginRight: 5 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="smallBox-container">
              {Dot && Dot.length > 0
                ? Dot.map((item, index) => (
                    <div
                      style={{
                        height: 30,
                        width: 40,
                        borderWidth: index == dotSelectedOption ? 5 : 1,
                        borderColor:
                          index == dotSelectedOption ? "aqua" : "grey",
                        borderStyle: "solid",

                        margin: 5,
                      }}
                      onClick={() => (
                        setDotType(item.name), setDotSelectedOption(index)
                      )}
                    >
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          cursor: "pointer",
                        }}
                        src={item.Image}
                      ></img>
                    </div>
                  ))
                : null}

              <div className="color-box-container" onClick={toggleColorPicker}>
                <div
                  className="color-box"
                  style={{
                    backgroundColor: `rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`,
                  }}
                ></div>
                <span className="label-text">{`rgba(${dotColor.r},${dotColor.g},${dotColor.b},${dotColor.a})`}</span>
              </div>

              {showColorPicker && (
                <div style={{ position: "relative", bottom: 60, left: 200 }}>
                  <SketchPicker
                    onChange={(color) => {
                      setDotColor(color.rgb);
                    }}
                    color={dotColor}
                  />
                </div>
              )}
            </div>

            <div className="body-shape">
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginLeft: 10,
                }}
              >
                Background Options
              </span>
              <svg
                style={{ width: 20, height: 20, marginRight: 5 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="smallBox-container">
              <div className="color-box-container" onClick={toggleColorPicker1}>
                <div
                  className="color-box"
                  style={{
                    backgroundColor: `rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`,
                  }}
                ></div>
                <span className="label-text">{`rgba(${backgroundColor.r},${backgroundColor.g},${backgroundColor.b},${backgroundColor.a})`}</span>
              </div>

              {showColorPicker1 && (
                <div style={{ position: "relative", bottom: 60, left: 200 }}>
                  <SketchPicker
                    onChange={(color) => {
                      setBackgroundColor(color.rgb);
                    }}
                    color={backgroundColor}
                  />
                </div>
              )}
            </div>

            <div className="body-shape">
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginLeft: 10,
                }}
              >
                Corners Options
              </span>
              <svg
                style={{ width: 20, height: 20, marginRight: 5 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="smallBox-container">
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>

              <div className="color-box-container" onClick={toggleColorPicker2}>
                <div
                  className="color-box"
                  style={{
                    backgroundColor: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
                  }}
                ></div>
                <span className="label-text">{`rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`}</span>
              </div>

              {showColorPicker2 && (
                <div style={{ position: "relative", bottom: 60, left: 200 }}>
                  <SketchPicker
                    onChange={(color) => {
                      setCornersColor(color.rgb);
                    }}
                    color={cornersColor}
                  />
                </div>
              )}
            </div>
            <div className="body-shape">
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "Poppins",
                  fontSize: 14,
                  marginLeft: 10,
                }}
              >
                CornersDot Options
              </span>
              <svg
                style={{ width: 20, height: 20, marginRight: 5 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="smallBox-container">
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>
              <div className="small-box"></div>

              <div className="color-box-container" onClick={toggleColorPicker3}>
                <div
                  className="color-box"
                  style={{
                    backgroundColor: `rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`,
                  }}
                ></div>
                <span className="label-text">{`rgba(${cornersDotColor.r},${cornersDotColor.g},${cornersDotColor.b},${cornersDotColor.a})`}</span>
              </div>

              {showColorPicker3 && (
                <div style={{ position: "relative", bottom: 60, left: 200 }}>
                  <SketchPicker
                    onChange={(color) => {
                      setCornersDotColor(color.rgb);
                    }}
                    color={cornersDotColor}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="box3">
            <button className="btn1">Upload Logo</button>
            <div className="logo-wrapper">
              <button className="upload-btn">Upload</button>
            </div>
            <div>
              <div ref={ref} />
              <div
                style={{
                  width: 200,
                }}
              >
                <input value={options.data} onChange={onDataChange} />
                <select onChange={onExtensionChange} value={fileExt}>
                  <option value="svg">SVG</option>
                  <option value="png">PNG</option>
                  <option value="jpeg">JPEG</option>
                  <option value="webp">WEBP</option>
                </select>
                <button onClick={onDownloadClick}>Download</button>
              </div>
            </div>
          </div>
        </div>
        <div className="qrcode-preview">
          <div className="preview-section">
            <img src={Preview} className="preview-image" alt="" />
          </div>
          <div className="button-section">
            <button className="create-qrbtn">
              Create QR Code <IoIosArrowDown size={25} />
            </button>
            <span className="btn-text">Download</span>
            <button className="create-qrbtn" style={{ marginTop: 20 }}>
              Download <BsDownload size={20} style={{ marginLeft: 10 }} />
            </button>
            <span className="btn-or">
              Or <br /> Share on
            </span>{" "}
            <br />
            <div className="share-container">
              <img src={WhatsApp} alt="" className="social-icons" />
              <img src={Insta} alt="" className="social-icons" />
              <img src={Facebook} alt="" className="social-icons" />
              <img src={LinkedIn} alt="" className="social-icons" />
              <img src={Telegram} alt="" className="social-icons" />
              <img src={X} alt="" className="social-icons" />
              <img src={Youtube} alt="" className="social-icons" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QRCodeSolution;
