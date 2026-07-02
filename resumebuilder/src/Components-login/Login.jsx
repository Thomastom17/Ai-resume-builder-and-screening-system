import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./Login.css";
import loginImage from "../assets/login-image.png";
import googleIcon from "../assets/google.png";
import linkedinIcon from "../assets/linkedin.png";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { IoEyeOffOutline } from "react-icons/io5";


  const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");   
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
  e.preventDefault();

  setEmailError("");
  setPasswordError("");

  let valid = true;

  if (email.trim() === "") {
    setEmailError("Enter your email address");
    valid = false;
  }

  if (password.trim() === "") {
    setPasswordError("Enter your password");
    valid = false;
  }

  if (!valid) return;

  
};

  return (
    <div className="login-container">
      {/* Left Section */}

      <div className="left-section">
        <div className="welcome-content">
          <h1>Welcome back!</h1>

          <p>
            Access your account
            <br />
            and continue where
            <br />
            you left off.
          </p>
        </div>

        <img
          src={loginImage}
          alt="Login"
          className="login-image"
        />
      </div>

      {/* Right Section */}

      <div className="right-section">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>
            {passwordError
              ? "Incorrect password"
              : "Login in to your account"}
          </h2>

          {/* Email */}

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-box">
              {email === "" && <MdEmail className="input-icon" />}

              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className={emailError ? "error-input" : ""}
              />
            </div>

            {emailError && (
              <span className="error-text">
                {emailError}
              </span>
            )}
          </div>

          {/* Password */}

          <div className="input-group">
            <label>Password</label>
        <div className="password-box">

  {password === "" && (
    <span
      className="eye-left"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ?  <FaEyeSlash /> :<FaEye />}
    </span>
  )}

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    value={password}
    onChange={(e) => {
      setPassword(e.target.value);
      setPasswordError("");
    }}
    className={passwordError ? "error-input" : ""}
  />

  {password !== "" && (
    <span
      className="eye-right"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEye /> : <FaEyeSlash />}
    </span>
  )}

</div>
            {passwordError && (
              <span className="error-text">
                {passwordError}
              </span>
            )}
          </div>

          {/* Remember */}

          <div className="options">
            <div className="remember">
              <input
                type="checkbox"
                id="remember"
              />

              <label htmlFor="remember">
                Remember me
              </label>
            </div>

            <a href="#">
              <Link to="/Ai-resume/login/forgotpassword" className='forgot-password'>Forgot Password?</Link>
            </a>
          </div>

          {/* Button */}

          <button
            type="submit"
            className="continue-btn"
          >
            Continue
          </button>

          {/* Divider */}

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <p className="continue-text">
            Or Continue with
          </p>

          {/* Social */}

          <div className="social-login">
    <a
    href="https://accounts.google.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={googleIcon} alt="Google" />
  </a>

  <a
    href="https://www.linkedin.com/login"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={linkedinIcon} alt="LinkedIn" />
  </a>
</div>

          <p className="contact-admin">
            Need help?{" "}
            <a href="#">
              Contact admin
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;