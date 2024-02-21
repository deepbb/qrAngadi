// Modal.js
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Modal.css";
import { UpdateProfileQr } from "../../Utility/QrType/UpdateQr";

const Modal = ({ isOpen, closeModal, id, type, ChangeLoad, Profile }) => {
  const [inputValue, setInputValue] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    UpdateProfileQr(inputValue, id, type, ChangeLoad, Profile, closeModal,lat,lon);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ display: 'flex' }}>
      <div className="modal">
        <MdClose className="close-icon" onClick={closeModal} />
        <h1>Update Qr Data</h1>
        {type === "GoogleMap" ? (
          <>
            <input
              type="text"
              placeholder="Enter Latitude"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
              className="modal-input"
            />
            <input
              type="text"
              placeholder="Enter Longitude"
              value={lon}
              onChange={(e) => setLon(e.target.value)}
              className="modal-input"
            />
          </>
        ) : (
          <input
            type="text"
            placeholder="Enter New Url"
            value={inputValue}
            onChange={handleInputChange}
            className="modal-input"
          />
        )}

        <button onClick={handleButtonClick} className="modal-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Modal;
