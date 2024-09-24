import React, { useState } from "react";

const PopupForm = ({ onClose, onAddContractor }) => {
  const [contractorName, setContractorName] = useState("");

  const handleInputChange = (e) => {
    setContractorName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contractorName) {
      onAddContractor(contractorName); // Call the function passed as a prop
      setContractorName(""); // Clear the input field
      onClose(); // Close the popup
    }
  };

  return (
    <div className="popup">
      <h2>Add Contractor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={contractorName}
          onChange={handleInputChange}
          placeholder="Enter contractor name"
          required
        />
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default PopupForm;
