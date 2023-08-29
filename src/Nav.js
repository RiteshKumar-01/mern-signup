import React from "react";
import "./App.css";
import logo from "./assets/logo1.png";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="navbar logo" />
      </div>
      <div className="navbar-right">
        <a href="/" className="btn-sign">
          Sign Up
        </a>
        <a href="/" className="btn-login">
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Nav;
