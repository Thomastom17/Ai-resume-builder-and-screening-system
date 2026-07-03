import React, { useState, useRef } from "react";
import "./OtpVerification.css";
import verified from "../assets/image 15.png";
import {
 
  FaLock,
} from "react-icons/fa";


const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    
    <div className="otp-container">

      {/* Left Section */}
      <div className="otp-left">
        <img src={verified} alt="Verify Email" />
      </div>

      {/* Right Section */}
      <div className="otp-right">

        <div className="back-btn">
          ← <span>Back to Login</span>
        </div>

       

        <div className="lock-circle">
          <FaLock className="lock-icon" />
        </div>

        <h4>The OTP you entered is incorrect</h4>
        <p>Please try again.</p>

        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <div className="error-text">
          ❗ Invalid OTP. Please check and try again.
        </div>

        <div className="resend">
          Re-send OTP? <span>Click here</span>
        </div>

        <button className="verify-btn">
          Verify & Continue
        </button>

      </div>
    </div>
  );
};

export default OtpVerification;