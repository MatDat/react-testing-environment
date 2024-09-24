import React, { useState } from "react";
import Tables from "./Tables";
import Button from "./Button";
import Popup from "./Popup"; //* Import the Popup component

const ProjectPlanner = () => {
  const [showPopup, setShowPopup] = useState(false); //* State to manage popup visibility
  const [popupMessage, setPopupMessage] = useState(""); //* State to manage the popup message

  const handleAddContractorClick = () => {
    setPopupMessage("Functionality not implemented yet."); //* Set the popup message
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false); //* Close the popup
  };

  return (
    <div className="mainContainer">
      <h1>The Project Planner</h1>

      <Button className="buttonBasic" onClick={handleAddContractorClick}>
        Add Contractor
      </Button>

      <Tables />

      {showPopup && ( //* Render the Popup conditionally
        <Popup message={popupMessage} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default ProjectPlanner;
