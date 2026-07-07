import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import forgotImage from "../assets/forgot-image.png";
import "./ForgotPassword.css";
import linkedinIcon from '../assets/linkedin.png';
import googleIcon from '../assets/google.png';
import backIcon from '../assets/arrw.png';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(""); 

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(""); 

    // 1. Empty Check
    if (!email.trim()) {
      setEmailError("Please enter your email.");
      return;
    }

    // 2. Format Check
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address (e.g., name@example.com).");
      return; 
    }

   
    setEmail("");
    navigate("/Resume-builder/login/createpassword"); 
  };

  return (
    <div className="forgot-container">
      {/* Left Side */}
      <div className="forgot-left">
        <img src={forgotImage} alt="Forgot Password" />
      </div>

      {/* Right Side */}
      <div className="forgot-card">
        <div className="back-btn">
          <span onClick={() => navigate("/Resume-builder/login")}>
            <img src={backIcon} alt="back" className="btn-icon-img" style={{ width: "18px", height: "18px", objectFit: "contain" }} /> Back to login
          </span>
        </div>

        <div className="icon-circle">
          <FaLock />
        </div>

        <h2>Forgot Password?</h2>

        <p className="description">
          Enter the email address associated with your account
          <br />
          and we'll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} noValidate> 
          <label>Email Address</label>

          <input
            type="email" 
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(""); 
            }}
            className={emailError ? "error-input" : ""} 
          />

          
          {emailError && (
            <span className="error-text" style={{ color: "red", fontSize: "13px", display: "block", marginTop: "5px", textAlign: "left" }}>
              {emailError}
            </span>
          )}

          <button type="submit" style={{ marginTop: "15px" }}>
            Send Reset Link
          </button>
        </form>

         <div className="divider"><span></span><p>OR</p><span></span></div>
 
          <p className="continue-text"> Or Continue with</p>
 
        <div className="social-login">
 
         <button type="button" className="socialBtn">
          <img src={googleIcon} alt="Google" />
         </button>
 
         <button type="button" className="socialBtn">
           <img src={linkedinIcon} alt="LinkedIn" />
         </button>
 
        </div>

        <p className="help-text">
          Need help? <a href="/">Contact admin</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;