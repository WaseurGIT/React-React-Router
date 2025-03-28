import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const NavBar = () => {
  const links = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/">Statistics</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-purple-300 rounded-2xl  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2 ">
        <NavLink to="/cart" className="btn rounded-full">
          <BsCart2 />
        </NavLink>
        <NavLink to="/wish" className="btn rounded-full">
          <FaRegHeart />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
