import React from "react";
import "./App.css";
import logo from "./assets/logo1.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signup">
      <img src={logo} alt="background" />
      <div className="sign-body">
        <h2>Sign Up</h2>
        <div className="form-elem">
          <div className="form-type">
            <p>Username*</p>
            <input type="text" className="form-input" />
          </div>
          <div className="form-type">
            <p>Email address*</p>
            <input type="email" className="form-input" />
          </div>
          <div className="form-type">
            <p>Password*</p>
            <input type="password" className="form-input" />
          </div>
          <div className="form-type">
            <p></p>
            <div className="flex-box">
              <input type="checkbox" className="form-input" />
              <p>
                I agree to the End User License Agreement and the Privacy
                Policy. *
              </p>
            </div>
          </div>
          <button>Create an Account</button>
        </div>
      </div>
      <p>Already have an account?</p>
      <Link to="/login" className="sign-btn">
        Sign In
      </Link>
    </div>
  );
};

export default SignUp;
