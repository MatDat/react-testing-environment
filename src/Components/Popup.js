import React, { useEffect, useRef } from "react";
import "../Popup.css";

const Popup = ({ message, onClose }) => {
  const popupRef = useRef(null);

  // Handle click outside the popup box
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose(); // Close popup if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup-box" ref={popupRef}>
        <p>{message}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
