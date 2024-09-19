import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="menuStyle">
      <ul className="listItemStyle">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projectPlanner">Project Planner</Link>
        </li>
        <li>
          <Link to="/greeting">Greeting</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
