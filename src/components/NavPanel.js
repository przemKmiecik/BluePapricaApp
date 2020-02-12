import React from "react";
import "./styles/NavPanel.min.css";
import { NavLink } from "react-router-dom";

const NavPanel = () => {
  return (
    <div className="NavPanel">
      <div className="NavPanel__container">
        <NavLink to="/" exact className="container__btn">
          Home
        </NavLink>
        <NavLink to="/browse" className="container__btn">
          Browse Api
        </NavLink>
        <NavLink to="/add" className="container__btn">
          Add New Record
        </NavLink>
      </div>
    </div>
  );
};

export default NavPanel;
