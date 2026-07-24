import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import candidateIcon from "../assets/candidate.png";
import recruiterIcon from "../assets/recruiter.png";
import postJobsIcon from "../assets/p-job.png";
import findCandidatesIcon from "../assets/fi-can.png";
import interviewIcon from "../assets/int-mang.png";
import analyticsIcon from "../assets/rec-anal.png";
import regIcon from "../assets/reg-r-image.png";
import tickedImg from "../assets/tickbl.png";
import hidePasswordIcon from "../assets/eye-hide.png";
import showPasswordIcon from "../assets/show_password.png";
import "./UserRegRecruiter.css";

const UserRegRecruiter = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState("recruiter");
  const [agreed, setAgreed] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // OTP Modal & Verification States
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpStep, setOtpStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [timer, setTimer] = useState(67);
  const [canResend, setCanResend] = useState(false);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const registrationData = [
    { id: "fullName", label: "Full Name", placeholder: "Thomas", type: "text" },
    { id: "userName", label: "User Name", placeholder: "thomas54", type: "text" },
    { id: "recruiterName", label: "Recruiter Name", placeholder: "Tom", type: "text" },
    { id: "email", label: "Email Address", placeholder: "thomas54594@gmail.com", type: "email" },
    { id: "phone", label: "Phone Number", placeholder: "8940854594", type: "text" },
    { id: "designation", label: "Designation / Job Title", placeholder: "UI/UX Designer", type: "text" },
    { id: "companyName", label: "Company Name", placeholder: "Adhway Creation", type: "text" },
    { id: "companyWebsite", label: "Company Website", placeholder: "www.adway.com", type: "text" },
    { id: "companyLocation", label: "Company Location", placeholder: "Coimbatore", type: "text" },
    { id: "industryType", label: "Industry Type", type: "select", options: ["Designer", "Engineering", "Marketing", "Sales", "Other"] },
    { id: "password", label: "Password", placeholder: ".........", type: "password" },
    { id: "confirmPassword", label: "Confirm Password", placeholder: "........", type: "password" },
  ];

  const checklistItems = [
    "Post job openings",
    "Track hiring progress",
    "Search and filter candidates",
    "Access candidate resumes",
    "Manage applications",
    "Communicate with applicants",
  ];

  const featureCards = [
    { icon: postJobsIcon, title: "Post Jobs", description: "Create and publish job vacancies effortlessly." },
    { icon: findCandidatesIcon, title: "Find Candidates", description: "Advanced filters to find the perfect match." },
    { icon: interviewIcon, title: "Interview Management", description: "Seamlessly schedule and track interviews." },
    { icon: analyticsIcon, title: "Recruitment Analytics", description: "Data-driven insights into your hiring funnel." },
  ];

  const isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email || "");

  // Countdown Timer Logic
  useEffect(() => {
    let interval = null;
    if (showOtpModal && otpStep === 1 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showOtpModal, otpStep, timer]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleChange = (fieldId, type) => (e) => {
    const value = type === "file" ? e.target.files[0] : e.target.value;

    if (fieldId === "email") {
      setIsEmailVerified(false);
    }

    setForm((prev) => ({ ...prev, [fieldId]: value }));
  };

  // OTP Input Handler
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    let newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    setOtpError("");

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  // Keyboard navigation (Backspace)
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  // Paste 6-digit code
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();
    if (/^\d{6}$/.test(pasteData)) {
      setOtp(pasteData.split(""));
      setOtpError("");
    }
  };

  const handleVerifyClick = () => {
    if (isEmailValid) {
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
      setOtpStep(1);
      setTimer(67);
      setCanResend(false);
      setShowOtpModal(true);
    } else {
      setErrors((prev) => ({ ...prev, email: "Enter a valid email address first" }));
    }
  };

  const handleResendOtp = () => {
    if (canResend) {
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
      setTimer(67);
      setCanResend(false);
    }
  };

  const handleConfirmOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length < 6) {
      setOtpError("Please enter complete 6-digit OTP");
      return;
    }

    if (enteredOtp === "894085") {
      setOtpError("");
      setOtpStep(2);
    } else {
      setOtpError("Invalid OTP! Please enter correct code");
    }
  };

  const handleFinishVerification = () => {
    setIsEmailVerified(true);
    setShowOtpModal(false);
  };

  const validate = () => {
    let newErrors = {};

    registrationData.forEach((field) => {
      const value = form[field.id];

      if (!value || (typeof value === "string" && !value.trim())) {
        newErrors[field.id] = `${field.label} is required`;
        return;
      }

      if (field.type === "email" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        newErrors[field.id] = "Enter valid email";
      }

      if (field.id === "phone" && !/^[6-9]\d{9}$/.test(value)) {
        newErrors[field.id] = "Enter valid 10-digit mobile number";
      }

      if (field.type === "password" && value.length < 8) {
        newErrors[field.id] = "Minimum 8 characters required";
      }
    });

    if (!isEmailVerified) {
      newErrors.email = "Please verify your email address";
    }

    if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreed) {
      newErrors.terms = "Accept Terms & Conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!");
      console.log("Submitting Package context:", { role, ...form });
    }
  };

  return (
    <div className="urr-container">
      {/* LEFT INFO SECTION */}
      <div className="urr-info">
        <h1 className="urr-info__title">Create your account</h1>

        <ul className="urr-info__checklist">
          {checklistItems.map((item) => (
            <li key={item} className="urr-info__checklist-item" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={tickedImg} alt="tick" style={{ width: "15px", height: "15px" }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="urr-info__cards">
          {featureCards.map((card) => (
            <div className="urr-feature-card" key={card.title}>
              {card.icon && <img src={card.icon} alt={card.title} className="urr-feature-card__icon" />}
              <p className="urr-feature-card__title">{card.title}</p>
              <p className="urr-feature-card__desc">{card.description}</p>
            </div>
          ))}
        </div>

        {regIcon && (
          <img src={regIcon} alt="Hiring Illustration" className="urr-info__illustration" />
        )}
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="urr-page">
        <h1 className="urr-title">User Registration</h1>

        <form className="urr-card" onSubmit={handleSubmit}>
          <p className="urr-label urr-label--top">I am Registering as</p>

          <div className="urr-role-toggle">
            {/* CANDIDATE BUTTON */}
            <button
              type="button"
              className={`urr-role-card ${role === "candidate" ? "urr-role-card--active" : ""}`}
              onClick={() => {
                setRole("candidate");
                navigate("/Resume-builder/userregcandidate"); 
              }}
            >
              <span className="urr-role-radio">
                {role === "candidate" && <span className="urr-role-radio__dot" />}
              </span>
              <img src={candidateIcon} alt="Candidate" className="urr-role-icon" />
              <span className="urr-role-name">Candidate</span>
              <span className="urr-role-sub">Explore jobs take next step</span>
            </button>

            {/* RECRUITER BUTTON */}
            <button
              type="button"
              className={`urr-role-card ${role === "recruiter" ? "urr-role-card--active" : ""}`}
              onClick={() => setRole("recruiter")}
            >
              <span className="urr-role-radio">
                {role === "recruiter" && <span className="urr-role-radio__dot" />}
              </span>
              <img src={recruiterIcon} alt="Recruiter" className="urr-role-icon" />
              <span className="urr-role-name">Recruiter</span>
              <span className="urr-role-sub">Post jobs find talent and hire</span>
            </button>
          </div>

          <div className="urr-grid">
            {registrationData.map((field) => (
              <div className="urr-field-wrapper" key={field.id} style={{ display: "flex", flexDirection: "column" }}>
                <label className="urr-field" style={{ position: "relative" }}>
                  <span className="urr-label">{field.label}</span>

                  {field.type === "select" ? (
                    <select value={form[field.id] || ""} onChange={handleChange(field.id, field.type)}>
                      <option value="" disabled hidden>Select {field.label}</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <div style={{ position: "relative", width: "100%" }}>
                      <input
                        type={
                          field.id === "password"
                            ? showPassword ? "text" : "password"
                            : field.id === "confirmPassword"
                            ? showConfirmPassword ? "text" : "password"
                            : field.type
                        }
                        value={field.type === "file" ? undefined : (form[field.id] || "")}
                        onChange={handleChange(field.id, field.type)}
                        placeholder={field.placeholder}
                        style={{
                          paddingRight:
                            field.id === "password" || field.id === "confirmPassword" || field.id === "email"
                              ? "80px"
                              : "10px",
                        }}
                      />

                      {/* EMAIL VERIFY ACTION BUTTON / BADGE */}
                      {field.id === "email" && (
                        <>
                          {isEmailValid && !isEmailVerified && (
                            <button
                              type="button"
                              className="urc-verify-btn"
                              onClick={handleVerifyClick}
                              style={{
                                position: "absolute",
                                right: "8px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                background: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                padding: "4px 10px",
                                cursor: "pointer",
                                fontSize: "12px",
                              }}
                            >
                              Verify
                            </button>
                          )}
                          {isEmailVerified && (
                            <span
                              className="urc-verified-badge"
                              style={{
                                position: "absolute",
                                right: "8px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#28a745",
                                fontWeight: "bold",
                                fontSize: "12px",
                              }}
                            >
                              Verified
                            </span>
                          )}
                        </>
                      )}

                      {field.id === "password" && form[field.id] && (
                        <img
                          src={showPassword ? showPasswordIcon : hidePasswordIcon}
                          alt="toggle password"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", width: "20px", height: "20px", zIndex: 2 }}
                        />
                      )}

                      {field.id === "confirmPassword" && form[field.id] && (
                        <img
                          src={showConfirmPassword ? showPasswordIcon : hidePasswordIcon}
                          alt="toggle confirm password"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", width: "20px", height: "20px", zIndex: 2 }}
                        />
                      )}
                    </div>
                  )}
                </label>

                {errors[field.id] && <small className="error-text" style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors[field.id]}</small>}
              </div>
            ))}
          </div>

          <label className="urr-agree">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a> regarding my administrative access.
            </span>
          </label>

          {errors.terms && <div className="error-text" style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>{errors.terms}</div>}

          <button type="submit" className="urr-submit">
            Complete Registration
          </button>

          <p className="urr-login">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/Resume-builder/login/recruiter")}
              style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}
            >
              Login
            </span>
          </p>
        </form>
      </div>

      {/* EMAIL VERIFICATION MODAL POPUP */}
      {showOtpModal && (
        <div className="urc-modal-overlay">
          <div className="urc-modal-content">
            {otpStep === 1 ? (
              <>
                <div className="urc-modal-icon">📩</div>
                <h3>Email Verification</h3>
                <p>We've Sent a Code To <strong>{form.email}</strong>.<br />Please enter it below</p>
                
                {/* OTP INPUTS */}
                <div className="urc-otp-inputs">
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={data}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      onPaste={handleOtpPaste}
                    />
                  ))}
                </div>

                {/* ERROR MESSAGE */}
                {otpError && <small className="urc-error-text" style={{ color: "red", display: "block", marginBottom: "12px" }}>{otpError}</small>}

                {/* TIMER / RESEND OTP DISPLAY */}
                <p className="urc-resend-text">
                  {!canResend ? (
                    <>Did not receive code? Resend OTP in <strong>{formatTime(timer)}</strong></>
                  ) : (
                    <>
                      Did not receive code?{" "}
                      <span className="urc-resend-link" onClick={handleResendOtp} style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}>
                        Resend OTP
                      </span>
                    </>
                  )}
                </p>

                <button className="urc-modal-btn" onClick={handleConfirmOtp}>Continue</button>
              </>
            ) : (
              <>
                <div className="urc-modal-icon urc-success-icon">✓</div>
                <h3>Verification Is Confirmed</h3>
                <button className="urc-modal-btn" onClick={handleFinishVerification}>Continue</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserRegRecruiter;