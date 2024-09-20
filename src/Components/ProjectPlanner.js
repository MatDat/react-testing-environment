import React from "react";
import Tables from "./Tables";
import Button from "./Button";

const ProjectPlanner = () => {
  return (
    <div className="mainContainer">
      <h1>The Project Planner</h1>
      <p>So exciting!</p>
      <Button className="buttonBasic" onClick={() => alert("Hello!")}>
        Button for the future
      </Button>
      <Tables />
    </div>
  );
};

export default ProjectPlanner;
