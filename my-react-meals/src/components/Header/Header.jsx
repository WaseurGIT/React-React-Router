import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-12">
      <NavLink
        to="/"
        style={{
          padding: "15px",
          margin: "15px",
          border: "2px solid blue",
          borderRadius: "10px",
          fontSize: "25px",
          font: "bold",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/meals"
        style={{
          padding: "15px",
          margin: "15px",
          border: "2px solid blue",
          borderRadius: "10px",
          fontSize: "25px",
          font: "bold",
        }}
      >
        Meals
      </NavLink>
    </div>
  );
};

export default Header;
