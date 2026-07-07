import React, { useState, useEffect } from "react";
import "./LoginSuccess.css";
import { FaCheck, FaShieldAlt } from "react-icons/fa";
import loginImage from "../assets/login-success.png";
import securityImage from "../assets/security.png";

const LoginSuccess = () => {
  const [loginTime, setLoginTime] = useState("");

  useEffect(() => {
    const loginDate = new Date();

    const formattedTime =
      "Today, " +
      loginDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

    setLoginTime(formattedTime);
  }, []);

  return (
    <div className="ls-success-container">
      <div className="ls-success-card">

        {/* Left Image */}
        <div className="ls-image-section">
          <img
            src={loginImage}
            alt="Login Success"
            className="ls-login-image"
          />
        </div>

        {/* Right Section */}
        <div className="ls-content-section">

          <div className="ls-success-icon">
            <FaCheck />
          </div>

          <h1>Login Successful</h1>

          <h2>Welcome Back</h2>

          <p className="ls-subtitle">
            You've successfully logged in.
            <br />
            You can access the software and continue
            <br />
            your work seamlessly.
          </p>

          {/* Blue Card */}
          <div className="ls-security-card">

            <div className="ls-security-icon-box">
              <FaShieldAlt className="ls-security-icon" />
                <img src={securityImage} alt="Security"className="ls-security-image"/>
            </div>

            <div className="ls-security-info">
              <h3>Your account is secure</h3>

              <p>Last login: {loginTime}</p>

              <p>IP Address: 192.168.1.1</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginSuccess;