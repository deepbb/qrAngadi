import React, { useEffect, useState } from "react";
import "./Profile.css";
import QRAngadi from "../../assets/qr-angadi.png";
import Home from "../../assets/home.png";
import Product from "../../assets/products.png";
import QR from "../../assets/profile-qr.png";
import CreateQR from "../../assets/createQR.svg";
import { MdKeyboardArrowRight, MdUpdate } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import View from "../../assets/View.svg";
import Copy from "../../assets/copy.svg";
import Graph from "../../assets/small-graph.svg";
import Download from "../../assets/download-icon.svg";
import Close from "../../assets/close.svg";
import { IoPersonCircleSharp } from "react-icons/io5";
import User from "../../assets/profile-user.svg";
import Sub from "../../assets/subscriptions.svg";
import Settings from "../../assets/settings.svg";
import Help from "../../assets/help.svg";
import { GetProfile } from "../../Api/Users";
import { DeleteProfileQr } from "../../Utility/QrType/DeleteQr";
import { useNavigate } from "react-router-dom";
import View1 from "../../assets/edit.png";
import { SpinnerRoundOutlined, SpinnerCircularFixed } from "spinners-react";
import Modal from "../Modal/Modal";

function Profile() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [open, setOpen] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [type, setType] = useState("");
  const [name,setName]=useState("")

  const OpnemOdal = (id, types) => {
    console.log(id);
    setType(types);
    setUniqueId(id);
    setOpen(true);
  };



  const CloseModal = () => {
    setOpen(false);
  };

  const ChangeLoad=()=>{
    setLoad(false)
  }

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const Profile = () => {
    setLoad(true);
    GetProfile().then((res) => {
      setData(res.data.Qr.reverse());
      setId(res.data._id);
      setName(res.data.Name)
      setLoad(false);
    });
  };

  const filteredData = data.filter(
    (item) =>
      item._id.toLowerCase().includes(filterText.toLowerCase()) ||
      item.Qrtype?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.Url?.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    Profile();
  }, []);

  const openQrInNewWindow = (imageUrl) => {
    const newWindow = window.open("", "_blank");

    if (newWindow) {
      newWindow.document.write(`
      <html>
        <head>
          <title>QR Image</title>
        </head>
        <body style="margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh;">
          <img src="${imageUrl}" alt="QR Image" style="max-width: 100%; max-height: 100%;">
        </body>
      </html>
    `);

      newWindow.document.close();
    }
  };

  const DeleteQr = (id, type) => {
    setLoad(true);
    let res = DeleteProfileQr(id, type, Profile,);
  };

  const handleDownload = (imageUrl, fileName) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigateHome = ()=> {
      navigate("/")
  }
  return (
    <div className="profile-container">
      {load ? (
        <SpinnerCircularFixed
          size={30}
          thickness={200}
          speed={133}
          color="rgba(172, 57, 59, 1)"
          secondaryColor="rgba(57, 172, 102, 1)"
          className="btn btn-primary"
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 10,
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
      ) : null}

      <Modal
        isOpen={open}
        closeModal={CloseModal}
        id={uniqueId}
        type={type}
        ChangeLoad={ChangeLoad}
        Profile={Profile}
      ></Modal>

      <div className="sidebar">
        <div className="logo-image-container">
          <img
            src={QRAngadi}
            alt=""
            style={{ width: 100, height: 100, objectFit: "contain",cursor:'pointer'}}
            onClick={navigateHome}
          />
        </div>
        <div className="home-link" onClick={navigateHome}>
          <div className="logo-box-image">
            <img src={Home} alt="" style={{ width: 20, height: 20 }} />
          </div>
          <span
            style={{
              fontFamily: "Poppins",
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            Home
          </span>
        </div>
        <div className="home-link">
          <div className="logo-box-image">
            <img src={Product} alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "Poppins",
                marginLeft: 10,
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              Product
            </span>
            <MdKeyboardArrowRight size={25} style={{ marginLeft: 140 }} />
          </div>
        </div>
        <div className="home-link-qr">
          <div className="logo-box-image-qr">
            <img src={QR} alt="" style={{ width: 20, height: 20 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "Poppins",
                marginLeft: 10,
                fontSize: 13,
                color: "white",
                width: 90,
              }}
            >
              My QR Codes
            </span>
            <MdKeyboardArrowRight
              size={25}
              style={{ marginLeft: 100, color: "white" }}
            />
          </div>
        </div>
      </div>
      <div className="main-section">
        <div className="qr-headingtext">
        <h1 style={{ marginLeft: 20 }}>My QR Codes</h1>
        <div className="profile-tab" onClick={toggleDropdown} >
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoPersonCircleSharp size={25} />
            <span style={{ fontSize: 16,marginLeft:5 }}>{name}</span>
          </div>
          <MdKeyboardArrowDown size={25} onClick={toggleDropdown} />
        </div>
        </div>
        <span style={{ marginLeft: 20 }}>
          Create, view, edit, design, and download QR Codes
        </span>
        <div className="qr-wraper">
          <div className="qr-input-container">
            {/* <div className="name-box">
              <span className="profile-search-name">Name</span>
              <MdKeyboardArrowDown size={25} />
            </div> */}
            <input
              type="text"
              placeholder="search"
              className="search-input"
              onChange={(e) => setFilterText(e.target.value)}
            />
            <div style={{ position: "absolute", left: 10 }}>
              <MdOutlineSearch />
            </div>
            {/* <div className="search-logos">
              <FaFilter size={18} />
              <MdFileDownload size={23} />
            </div> */}
          </div>
          <button
            className="create-qr"
            onClick={() => navigate("/qrcodesolutions")}
          >
            {/* <img
              src={CreateQR}
              alt=""
              style={{
                height: 40,
                marginTop: 20,
                objectFit: "contain",
                cursor: "pointer",
              }}
            /> */}
            + Create QR Code
          </button>
        </div>
        <div>
          <table
            style={{ borderCollapse: "collapse", width: "97%", marginLeft: 20 }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: "#F48020",
                  borderRadius: 20,
                  height: 40,
                }}
              >
                <th className="cellStyleHeader">QR ID</th>
                <th className="cellStyleHeaderCategory">Category</th>
                <th className="cellStyleHeaderType">Data</th>
                <th className="cellStyleHeaderType">Images</th>
                <th className="cellStyleHeaderActions">Actions</th>
              </tr>
            </thead>

        

            {data && data.length > 0
              ? filteredData?.map((item, index) => (
                  <tbody>
                    <tr className="tableRow">
                      <td className="cellStyle">{item._id}</td>
                      <td className="cellStyle">{item.Qrtype}</td>
                      <td className="cellStyleType">{item.Url}</td>
                      <td className="cellStyleType">
                        <img
                          style={{
                            height: 130,
                            width: 130,
                          }}
                          src={item.QrImage}
                        ></img>
                      </td>
                      <td
                        className="cellStyleAction"
                        style={{
                          marginRight: 80,
                          textAlign: "center",
                        }}
                      >
                        <img
                          src={View1}
                          alt=""
                          style={{ width: 20, height: 20, padding: 0,cursor:'pointer' }}
                          onClick={() => OpnemOdal(item.UniqueId, item.Qrtype)}
                        />

                        <img
                          src={View}
                          alt=""
                          style={{ width: 40, height: 40, padding: 0,cursor:'pointer' }}
                          onClick={() => openQrInNewWindow(item.QrImage)}
                        />
                        <img
                          src={Graph}
                          alt=""
                          style={{ width: 40, height: 40, padding: 0,cursor:'pointer'}}
                          onClick={() => navigate("/dashboard/" + item._id)}
                        />
                        <img
                          src={Download}
                          alt=""
                          style={{ width: 40, height: 40, padding: 0,cursor:'pointer' }}
                          onClick={() =>
                            handleDownload(item.QrImage, `QR_${item._id}`)
                          }
                        />
                        <img
                          src={Close}
                          alt=""
                          style={{ width: 40, height: 40, padding: 0,cursor:'pointer' }}
                          onClick={() => DeleteQr(item._id, item.Qrtype)}
                        />
                      </td>
                    </tr>
                  </tbody>
                ))
              : null} 
          </table>
        </div>
      </div>
      { dropdownVisible && 
      <div className="rightbar">
        <div className="rightTab-containetr">
          <div className="rightbar-tabs">
            <img
              src={User}
              alt=""
              style={{ width: 30, height: 40, marginLeft: 10 }}
            />
            <span style={{ marginLeft: 10, color: "#3D3D3D", fontSize: 15 }}>
              My Account
            </span>
          </div>
          <div className="rightbar-tabs">
            <img
              src={Sub}
              alt=""
              style={{ width: 30, height: 40, marginLeft: 10 }}
            />
            <span style={{ marginLeft: 10, color: "#3D3D3D", fontSize: 15 }}>
              My Subscription
            </span>  
          </div>
          <div className="rightbar-tabs">
            <img
              src={Settings}
              alt=""
              style={{ width: 30, height: 40, marginLeft: 10 }}
            />
            <span style={{ marginLeft: 10, color: "#3D3D3D", fontSize: 15 }}>
              Settings
            </span>
          </div>
          <div className="rightbar-tabs">
            <img
              src={Help}
              alt=""
              style={{ width: 30, height: 40, marginLeft: 10 }}
            />
            <span style={{ marginLeft: 10, color: "#3D3D3D", fontSize: 15 }}>
              Help & Support
            </span>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default Profile;
