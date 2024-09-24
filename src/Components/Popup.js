import React from "react";
import "../Popup.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
