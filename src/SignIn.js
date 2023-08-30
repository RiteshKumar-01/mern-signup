import React from "react";
import logo from "./assets/logo1.png";
import "./App.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signup">
      <img src={logo} alt="background" />
      <div className="sign-body">
        <h2>Sign In</h2>
        <div className="form-elem">
          <div className="form-type">
            <p>Username*</p>
            <input type="text" className="form-input" />
          </div>
          <div className="form-type">
            <p>Password*</p>
            <input type="password" className="form-input" />
          </div>
          <button>Sign In</button>
        </div>
      </div>
      <Link to="/signup" className="login-btn">
        Create Account
      </Link>
    </div>
  );
};

export default SignIn;
