import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaLock,
} from "react-icons/fa";

import forgotImage from "../assets/forgot-image.png";
import "./ForgotPassword.css";
import linkedinIcon from '../assets/linkedin.png';
import loginImage from '../assets/login-image.png';
import googleIcon from '../assets/google.png';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Reset Link Sent Successfully!");
      setEmail("");
    }, 2000);
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
          <span onClick={() => navigate("/Ai-resume/login")}> Back to login</span>
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

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>

          <input
            type="text"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Reset Link"}
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