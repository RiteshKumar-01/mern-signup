import React from "react";
import "./App.css";
import logo from "./assets/logo1.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="navbar logo" />
      </div>
      <div className="navbar-right">
        <Link to="/signup" className="btn-sign">
          Sign Up
        </Link>
        <Link to="/login" className="btn-login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Nav;
