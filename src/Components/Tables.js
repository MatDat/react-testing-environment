import React, { useState } from "react";

const dummyNames = [
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

const getWeekDates = () => {
  const current = new Date();
  const first = current.getDate() - current.getDay() + 1; // Get Monday
  const dates = [];
  for (let i = 0; i < 5; i++) {
    const date = new Date(current.setDate(first + i));
    dates.push(
      `${date.toLocaleDateString("en-GB", {
        weekday: "long",
      })} (${date.getDate()}/${date.getMonth() + 1})`
    );
  }
  return dates;
};

const weekDates = getWeekDates();

const Tables = () => {
  const [selectedContractor, setSelectedContractor] = useState(null);
  const [tableData, setTableData] = useState(
    dummyNames.map(() => Array(weekDates.length).fill(""))
  );

  const handleContractorClick = (name) => {
    setSelectedContractor(name);
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (selectedContractor) {
      setTableData((prevData) => {
        const newData = [...prevData];
        newData[rowIndex][colIndex] = selectedContractor;
        return newData;
      });
    }
  };

  return (
    <table className="fullwidth-table">
      <thead>
        <tr>
          <th>Contractors</th>
          {weekDates.map((date, index) => (
            <th key={index}>{date}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dummyNames.map((name, rowIndex) => (
          <tr key={rowIndex}>
            <td onClick={() => handleContractorClick(name)}>{name}</td>
            {weekDates.map((_, colIndex) => (
              <td
                key={colIndex}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                style={{ cursor: "pointer", textAlign: "center" }}
              >
                {tableData[rowIndex][colIndex]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;
