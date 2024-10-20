import React, { useState } from "react";
import Popup from "./Popup";

const testContractors = [
  "Lars Larsens Gulvmænd",
  "Mikkel Mikkelsen Byg",
  "Søren Sørensen Tømrer",
  "Emil Emilsen Renovering",
  "Jens Jensen Maler",
  "Knud Knudsen VVS",
  "Anders Andersen El",
  "Peter Petersen Smed",
  "Niels Nielsen Kloak",
  "Erik Eriksen Stukkatør",
];

// Helper function to get week number
const getWeekNumber = (date) => {
  const newDate = new Date(date.getTime());
  newDate.setHours(0, 0, 0, 0);
  newDate.setDate(newDate.getDate() + 3 - ((newDate.getDay() + 6) % 7));
  const week1 = new Date(newDate.getFullYear(), 0, 4);
  return (
    1 +
    Math.round(
      ((newDate.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

// Function to get week dates based on the week offset
const getWeekDates = (weekOffset = 0) => {
  const current = new Date();
  const currentDay = current.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
  const firstDayOfWeek = new Date(
    current.setDate(
      current.getDate() -
        currentDay +
        (currentDay === 0 ? -6 : 1) +
        weekOffset * 7
    )
  );
  // Cloning the date object to avoid mutation
  const dates = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(firstDayOfWeek);
    date.setDate(firstDayOfWeek.getDate() + i);
    dates.push(
      `${date.toLocaleDateString("en-GB", {
        weekday: "long",
      })} (${date.getDate()}/${date.getMonth() + 1})`
    );
  }
  return dates;
};

const Tables = () => {
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [tableData, setTableData] = useState({});
  const [weekOffset, setWeekOffset] = useState(0);
  const [popupMessage, setPopupMessage] = useState(""); // State for popup message
  const [showPopup, setShowPopup] = useState(false); // State to show/hide popup

  const weekDates = getWeekDates(weekOffset);
  const currentWeekNumber = getWeekNumber(new Date()) + weekOffset;

  // Initialize table data for the current week if it doesn't exist
  if (!tableData[currentWeekNumber]) {
    tableData[currentWeekNumber] = testContractors.map(() => Array(5).fill(""));
  }

  const handleContractorClick = (name) => {
    setSelectedContractor((prev) => (prev === name ? null : name));
  };

  const handleCellClick = (rowIndex, colIndex) => {
    // Get the current cell value
    const currentCellValue = tableData[currentWeekNumber][rowIndex][colIndex];

    if (!selectedContractor && currentCellValue === "") {
      setPopupMessage("Please select a contractor first.");
      setShowPopup(true);
      return;
    }

    if (testContractors[rowIndex] === selectedContractor) {
      setTableData((prevData) => {
        const newData = { ...prevData };
        newData[currentWeekNumber] = [...prevData[currentWeekNumber]];

        // Toggle contractor: if the cell already contains the selected contractor, remove it; otherwise, assign it
        newData[currentWeekNumber][rowIndex][colIndex] =
          currentCellValue === selectedContractor ? "" : selectedContractor;

        return newData;
      });
    } else {
      setPopupMessage(
        "You may only place the contractor in their designated row."
      );
      setShowPopup(true);
    }
  };

  const handlePrevWeek = () => {
    setWeekOffset((prev) => prev - 1);
  };

  const handleNextWeek = () => {
    setWeekOffset((prev) => prev + 1);
  };

  const handleCurrentWeek = () => {
    setWeekOffset(0);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div
        className="week-navigation"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingBottom: "10px",
        }}
      >
        <button className="weekButtonCurrent" onClick={handleCurrentWeek}>
          Today
        </button>
        <button className="weekButton" onClick={handlePrevWeek}>
          ⬅
        </button>
        <span style={{ padding: "0 5px" }}>Week {currentWeekNumber}</span>
        <button className="weekButton" onClick={handleNextWeek}>
          ➡
        </button>
      </div>
      <table className="fullwidth-table">
        <thead>
          <tr>
            <th className="contractor-header">Contractors</th>
            {weekDates.map((date, index) => (
              <th key={index}>{date}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {testContractors.map((name, rowIndex) => (
            <tr
              key={rowIndex}
              className={selectedContractor === name ? "highlighted-row" : ""}
            >
              <td
                className={`contractor-column ${
                  selectedContractor === name ? "active" : ""
                }`}
                onClick={() => handleContractorClick(name)}
              >
                {name}
              </td>
              {weekDates.map((_, colIndex) => {
                const isToday = new Date().getDay() === colIndex; // Check if this column index corresponds to today
                const isCellOccupied =
                  tableData[currentWeekNumber]?.[rowIndex]?.[colIndex];

                return (
                  <td
                    key={colIndex}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    className={`${isToday ? "today" : ""} ${
                      selectedContractor && !isCellOccupied ? "hoverable" : ""
                    }`}
                    style={{
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    {tableData[currentWeekNumber]?.[rowIndex]?.[colIndex] || ""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && <Popup message={popupMessage} onClose={closePopup} />}{" "}
      {/* Conditionally render the popup */}
    </div>
  );
};

export default Tables;
