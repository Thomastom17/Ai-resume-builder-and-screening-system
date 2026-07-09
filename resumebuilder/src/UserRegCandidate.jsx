import { useState } from "react";
import "./UserRegCandidate.css";
import registerImage from "./assets/register-left.png";
import candidateImg from "./assets/candidate.png";
import recruiterImg from "./assets/recruiter.png";
import uploadImg from "./assets/upload.png";
import tickImg from "./assets/check.png";

const UserRegCandidate = () => {
  const [role, setRole] = useState("candidate");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    degree: "",
    password: "",
    confirmPassword: "",
    resume: null,
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    if (!/^[6-9]\d{9}$/.test(formData.mobile))
      newErrors.mobile = "Enter valid mobile number";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
      newErrors.email = "Enter valid email";

    if (!formData.degree.trim()) newErrors.degree = "Degree is required";

    if (formData.password.length < 8)
      newErrors.password = "Minimum 8 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.resume) newErrors.resume = "Upload Resume";

    if (!formData.terms) newErrors.terms = "Accept Terms & Conditions";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful");
    }
  };

  return (
    <div className="register-container">
      {/* LEFT SECTION */}

      <div className="register-left">
        <h1>Create your account</h1>

        <p className="top-text">
          Register and join our platform to connect, collaborate and grow
          together.
        </p>

        <div className="left-image">
          <img src={registerImage} alt="Register" />
        </div>

        <h2>Land your dream career.</h2>

        <p className="career-text">
          Join the most active talent network and get discovered by top-tier
          employers globally.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            <img src={tickImg} alt="" />
            <span>Find your dream job</span>
          </div>

          <div className="feature-item">
            <img src={tickImg} alt="" />
            <span>Get noticed by top employers</span>
          </div>

          <div className="feature-item">
            <img src={tickImg} alt="" />
            <span>Personalized job alerts</span>
          </div>

          <div className="feature-item">
            <img src={tickImg} alt="" />
            <span>Track your applications</span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}

      <div className="register-right">
        <h1 className="form-title">User Registration</h1>

        <form onSubmit={handleSubmit}>
          {/* ROLE SELECTION */}

          <h3 className="register-label">I am Registering as</h3>

          <div className="role-wrapper">
            <div
              className={`role-card ${role === "candidate" ? "active" : ""}`}
              onClick={() => setRole("candidate")}
            >
              <div className="radio-circle">
                {role === "candidate" && <div className="radio-dot"></div>}
              </div>

              <img src={candidateImg} alt="Candidate" />

              <h4>Candidate</h4>

              <p>Explore jobs take next step</p>
            </div>

            <div
              className={`role-card ${role === "recruiter" ? "active" : ""}`}
              onClick={() => setRole("recruiter")}
            >
              <div className="radio-circle">
                {role === "recruiter" && <div className="radio-dot"></div>}
              </div>

              <img src={recruiterImg} alt="Recruiter" />

              <h4>Recruiter</h4>

              <p>Post jobs find talent and hire</p>
            </div>
          </div>

          {/* NAME & MOBILE */}

          <div className="form-row">
            <div className="input-group">
              <label>Full Name *</label>

              <input
                type="text"
                name="fullName"
                placeholder="Thilak"
                value={formData.fullName}
                onChange={handleChange}
              />

              {errors.fullName && <small>{errors.fullName}</small>}
            </div>

            <div className="input-group">
              <label>Mobile Number *</label>

              <input
                type="text"
                name="mobile"
                placeholder="123467890"
                value={formData.mobile}
                onChange={handleChange}
              />

              {errors.mobile && <small>{errors.mobile}</small>}
            </div>
          </div>

          {/* EMAIL & DEGREE */}

          <div className="form-row">
            <div className="input-group">
              <label>Enter Your Email Address *</label>

              <input
                type="email"
                name="email"
                placeholder="Thilak1@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />

              {errors.email && <small>{errors.email}</small>}
            </div>

            <div className="input-group">
              <label>Degree *</label>

              <input
                type="text"
                name="degree"
                placeholder="B.E Civil Engineer"
                value={formData.degree}
                onChange={handleChange}
              />

              {errors.degree && <small>{errors.degree}</small>}
            </div>
          </div>
          {/* PASSWORD & CONFIRM PASSWORD  */}

          <div className="form-row">
            <div className="input-group">
              <label>Password *</label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && (
                <small className="error-text">{errors.password}</small>
              )}
            </div>

            <div className="input-group">
              <label>Confirm Password *</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {errors.confirmPassword && (
                <small className="error-text">{errors.confirmPassword}</small>
              )}
            </div>
          </div>

          {/* RESUME UPLOAD */}

          <div className="input-group full-width">
            <label>Upload Resume *</label>

            <label className="upload-box">
              <img src={uploadImg} alt="Upload" />

              <div>
                <h4>
                  {formData.resume
                    ? formData.resume.name
                    : "Upload your Resume"}
                </h4>

                <p>PDF, DOC or DOCX (Max 2 MB)</p>
              </div>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={handleChange}
              />
            </label>

            {errors.resume && (
              <small className="error-text">{errors.resume}</small>
            )}
          </div>

          {/* TERMS */}

          <div className="terms-container">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />

            <p>
              I agree to the
              <span> Terms & Service </span>
              and
              <span> Privacy Policy </span>
              regarding my administrative access
            </p>
          </div>

          {errors.terms && <small className="error-text">{errors.terms}</small>}

          {/* REGISTER BUTTON */}

          <button type="submit" className="register-btn">
            Complete Registration
          </button>

          <p className="login-text">
            Already have an account?
            <span> Sign In here</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default UserRegCandidate;