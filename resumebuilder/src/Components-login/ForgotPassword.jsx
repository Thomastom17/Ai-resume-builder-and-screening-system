import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import forgotImage from "../assets/forgot-image.png";
import "./ForgotPassword.css";
import linkedinIcon from '../assets/linkedin.png';
import loginImage from '../assets/login-image.png';
import googleIcon from '../assets/google.png';
import backIcon from '../assets/arrw.png';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
 

  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    
    if (!validateEmail(email)) {
      alert("Please enter a valid email address (e.g., name@example.com).");
      return; 
    }

    alert("Reset Link Sent Successfully!");
    
    setEmail("");
    navigate("/Ai-resume/login/createpassword"); 
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
          <span onClick={() => navigate("/Ai-resume/login")}>
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
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" onClick={() => navigate("/Ai-resume/login/createpassword")}>
            Send Reset Link
          </button>
        </form>

        <div className="divider">
          <span>Or Continue with</span>
        </div>

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