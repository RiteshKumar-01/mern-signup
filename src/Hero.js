import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-body">
        <h1>Build amazing things</h1>
        <h3>
          Get started today for creating a comprehensive MERN Stack Dashboard
          with complete features, including user authentication login/signup,
          product listing, and a diverse range of REST API packages.
        </h3>
        <Link className="body-btn" to="/signup">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
