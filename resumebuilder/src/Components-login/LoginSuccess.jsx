import React, { useState, useEffect } from "react";
import "./LoginSuccess.css";
import { FaCheck, FaShieldAlt } from "react-icons/fa";
import loginImage from "../assets/login-success.png";

const LoginSuccess = () => {
  const [loginTime, setLoginTime] = useState("");

  useEffect(() => {
    const loginDate = new Date();
    const today = new Date();
    const difference = Math.floor((today - loginDate) / (1000 * 60 * 60 * 24));

    let formattedTime;

    if (difference === 0) {
      formattedTime =
        "Today, " +
        loginDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
    } else if (difference === 1) {
      formattedTime =
        "Yesterday, " +
        loginDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
    } else {
      formattedTime =
        loginDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }) +
        ", " +
        loginDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
    }

    setLoginTime(formattedTime);
  }, []);

  return (
    <div className="ls-success-container">
      <div className="ls-success-card">
        <img src={loginImage} alt="Login" className="ls-login-image" />

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

          <div className="ls-security-card">
            <div className="ls-shield">
              <FaShieldAlt />
            </div>

            <div className="ls-security-info">
              <h3>Your Account is Secure</h3>

              <p>Last Login : {loginTime}</p>

              <p>IP Address : 192.168.1.1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccess;