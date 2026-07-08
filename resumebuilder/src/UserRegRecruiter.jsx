import React, { useState } from "react";
import candidateIcon from "./assets/candidate.png";
import recruiterIcon from "./assets/recruiter.png";
import postJobsIcon from "./assets/p-job.png";
import findCandidatesIcon from "./assets/fi-can.png";
import interviewIcon from "./assets/int-mang.png";
import analyticsIcon from "./assets/rec-anal.png";
import regIcon from "./assets/reg-image.png";
import { registrationData } from "./RegistrationData";
import "./UserRegRecruiter.css";

const UserRegRecruiter = () => {
  const [role, setRole] = useState("recruiter");
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({}); 

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

  const handleChange = (fieldId) => (e) => {
    setForm((prev) => ({ ...prev, [fieldId]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    console.log("Submitting dynamic form data package:", { role, ...form });
  };

  return (
    <div className="urr-container">
      
      <div className="urr-info">
        <h1 className="urr-info__title">Create your account</h1>

        <ul className="urr-info__checklist">
          {checklistItems.map((item) => (
            <li key={item} className="urr-info__checklist-item">
              <span className="urr-info__check" style={{ display: "inline-block", background: "#2563eb", borderRadius: "50%", width: "6px", height: "6px", marginTop: "6px" }} />
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

      <div className="urr-page">
        <h1 className="urr-title">User Registration</h1>

        <form className="urr-card" onSubmit={handleSubmit}>
          <p className="urr-label urr-label--top">I am Registering as</p>

          <div className="urr-role-toggle">
            <button
              type="button"
              className={`urr-role-card ${role === "candidate" ? "urr-role-card--active" : ""}`}
              onClick={() => setRole("candidate")}
            >
              <span className="urr-role-radio">
                {role === "candidate" && <span className="urr-role-radio__dot" />}
              </span>
              <img src={candidateIcon} alt="Candidate" className="urr-role-icon" />
              <span className="urr-role-name">Candidate</span>
              <span className="urr-role-sub">Explore jobs take next step</span>
            </button>

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
              <label className="urr-field" key={field.id}>
                <span className="urr-label">{field.label}</span>
                {field.type === "select" ? (
                  <select value={form[field.id] || ""} onChange={handleChange(field.id)}>
                    <option value="" disabled hidden>Select {field.label}</option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    value={form[field.id] || ""}
                    onChange={handleChange(field.id)}
                    placeholder={field.placeholder}
                  />
                )}
              </label>
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

          <button type="submit" className="urr-submit">
            Complete Registration
          </button>

          <p className="urr-signin">
            Already have an account? <a href="#signin">Sign In</a>
          </p>
        </form>
      </div>

    </div>
  );
};

export default UserRegRecruiter;