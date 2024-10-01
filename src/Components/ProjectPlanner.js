import React, { useState } from "react";
import Tables from "./Tables";
import Button from "./Button";
import Popup from "./Popup";

const ProjectPlanner = () => {
  const [showPopup, setShowPopup] = useState(false); //* State to manage popup visibility
  const [popupMessage, setPopupMessage] = useState(""); //* State to manage the popup message

  const handleAddContractorClick = () => {
    setPopupMessage("Functionality not implemented yet."); //* Sets the popup message for the addContractor button
    setShowPopup(true); //* Determines when it should Show the popup
  };

  const testClick = () => {
    setPopupMessage("Test Succesfull!"); //* Sets the popup message for the test button
    setShowPopup(true); //* Determines when it should Show the popup
  };

  const handleClosePopup = () => {
    setShowPopup(false); //* Close the popup
  };

  return (
    <div className="mainContainer">
      <h1>The Project Planner</h1>

      <Tables />

      <Button className="buttonBasic" onClick={handleAddContractorClick}>
        Add Contractor
      </Button>

      <Button className="buttonBasic" onClick={testClick}>
        Test Button
      </Button>

      {showPopup && ( //* Conditionally renders the Popup based on showPopup state.
        <Popup message={popupMessage} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default ProjectPlanner;
