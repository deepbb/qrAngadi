import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./QRCodeSolution.css";
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
import { QrType } from "../../Utility/QrType/QrType";
import { CreateQr } from "../../Utility/CreateQr";
import { Cornor } from "../../Utility/QrType/DotOptions"
import { Square } from "../../Utility/QrType/DotOptions"

function QRCodeSolution() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showColorPicker1, setShowColorPicker1] = useState(false);
  const [showColorPicker2, setShowColorPicker2] = useState(false);
  const [showColorPicker3, setShowColorPicker3] = useState(false);

  const [dottype, setDotType] = useState("");
  const [cornertype, setCornorType] = useState("");
  const [cornerdottype, setCornerdotType] = useState("");
  const [logo, setLogo] = useState("");
  const [images, setImages] = useState("");

  const [dotSelectedOption, setDotSelectedOption] = useState(-1);
  const [qrTypeSelection, setQrTypeSelection] = useState(-1);

  const [qrType, setQrType] = useState("");
  const [Url, setUrl] = useState("");

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
    r: "255",
    g: "255",
    b: "255",
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
    type: "png",
    data: "https://angadiworldtech.com/",
    image: QRAngadi,
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      crossOrigin: "anonymous",
    },
    dotsOptions: {
      color: '#222222',
      type: 'rounded'
    },
    backgroundOptions: {
      color: '#5FD4F3',
    },
    cornersSquareOptions: {
      color: '#222222',
      type: 'extra-rounded',
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
    setOptions((options) => ({
      ...options,
      image: logo,
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
      cornersSquareOptions: {
        ...options.cornersSquareOptions,
        color: `rgba(${cornersColor.r},${cornersColor.g},${cornersColor.b},${cornersColor.a})`,
      },
    }));
  }, [backgroundColor, dotColor, cornersDotColor, cornersColor, dottype, logo]);

  const onDataChange = (event) => {
    setUrl(event.target.value);
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

  const onChangePicture = (e) => {
    setImages(e.target.files[0]);
    if (e.target.files[0]) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLogo(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
      console.log(logo);
    }
  };
  //--------------------Api Calling----------------------//

  const GenerateDyamicqr = async () => {
    if (!qrType) {
      return false;
    } else if (!Url) {
      return false;
    }
    if (images) {
      const data = new FormData();
      data.append("file", images);
      data.append("upload_preset", "vsqmoxq9");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dxlmwq61j/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const file = await res.json();
      if (file.secure_url) {
        let result = CreateQr(
          qrType,
          dotColor,
          dottype,
          cornersDotColor,
          cornersColor,
          file.secure_url,
          Url
        );
      } else {
        let data1 = CreateQr(
          qrType,
          dotColor,
          dottype,
          cornertype,
          cornersDotColor,
          cornersColor,
          file.secure_url,
          Url
        );
        console.log(data1);
      }
    }
  };

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
          {QrType && QrType.length > 0
            ? QrType.map((item, index) => (
                <div
                  key={index} // Add a unique key prop for each mapped item
                  style={{
                    width: "13%",
                    height: "60px",
                    margin: "10px 5px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderRadius: "10px",
                    cursor: "pointer",
                    boxShadow:
                      "inset 0 0 10px rgba(0, 0, 0, 0.29), 0 3px 20px rgba(0, 0, 0, 0.1)",
                    border: "3px solid #ffffff",
                    backgroundColor:
                      index === qrTypeSelection ? "#f48020" : "#fff",
                  }}
                  onClick={() => (
                    setQrTypeSelection(index), setQrType(item.type)
                  )}
                >
                  <img
                    src={item.Image}
                    alt=""
                    style={{
                      height: "22px",
                      width: "22px",
                      objectFit: "contain",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                  />
                  <p>{item.name}</p>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="mainContainer2">
        <div className="customize">
          <button className="customize-button">Customize</button>
          <input
            style={{
              width: 500,
              height: 40,
              borderWidth: 2,
              borderRadius: 5,
            }}
            value={options.data}
            onChange={onDataChange}
          />
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
                          index == dotSelectedOption ? "#f48020" : "grey",
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
                Corners Square Options
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
            {/* <div className="smallBox-container">
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
            </div> */}
            <div className="smallBox-container">
              {Cornor && Cornor.length > 0
                ? Cornor.map((item, index) => (
                    <div
                      style={{
                        height: 30,
                        width: 40,
                        borderWidth: index == dotSelectedOption ? 5 : 1,
                        borderColor:
                          index == dotSelectedOption ? "#f48020" : "grey",
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
            {/* <div className="smallBox-container">
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
            </div> */}
             <div className="smallBox-container">
              {Square && Square.length > 0
                ? Square.map((item, index) => (
                    <div
                      style={{
                        height: 30,
                        width: 40,
                        borderWidth: index == dotSelectedOption ? 5 : 1,
                        borderColor:
                          index == dotSelectedOption ? "#f48020" : "grey",
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

              <div className="color-box-container2" onClick={toggleColorPicker}>
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
          </div>

          <div className="box3">
            <div>
              <button className="btn1">
                <label>Upload Logo</label>
              </button>
              <div className="logo-wrapper">
                <button className="upload-btn">
                  <label htmlFor="fileInput">Upload</label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => onChangePicture(e)}
                  />
                  {/* <img src={logo}></img> */}
                </button>
              </div>
            </div>
            <div>
              <div ref={ref} />
            </div>
          </div>
        </div>
        <div className="qrcode-preview">
          {/* <div className="preview-section">
            <img src={logo} className="preview-image" alt="" />
          </div> */}
          <div className="button-section">
            <button className="create-qrbtn" onClick={GenerateDyamicqr}>
              Create QR Code <IoIosArrowDown size={25} />
            </button>
            {/* <span className="btn-text">Download</span> */}
            <select
              className="create-qrbtn"
              style={{ marginTop: 20 }}
              onChange={onExtensionChange}
              value={fileExt}
            >
              <option style={{ textAlign: "center" }} value="svg">
                SVG
              </option>
              <option style={{ textAlign: "center" }} value="png">
                PNG
              </option>
              <option style={{ textAlign: "center" }} value="jpeg">
                JPEG
              </option>
              <option style={{ textAlign: "center" }} value="webp">
                WEBP
              </option>
            </select>

            <button
              className="create-qrbtn"
              style={{ marginTop: 20 }}
              onClick={onDownloadClick}
            >
              Download <BsDownload size={20} style={{ marginLeft: 10 }} />
            </button>
            {/* <span className="btn-or">
              Or <br /> Share on
            </span>{" "} */}
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
