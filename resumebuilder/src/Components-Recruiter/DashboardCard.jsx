import React from "react";
import "./DashboardCards.css";

// AI Screening Images
import resume from "../assets/resume.png";
import skill from "../assets/skill.png";
import experience from "../assets/experience.png";
import keyword from "../assets/keyword.png";

// Recommendation Images
import candidate from "../assets/candidate.png";
import hire from "../assets/hire.png";
import demand from "../assets/demand.png";
import insights from "../assets/insights.png";

const DashboardCards = () => {
  return (
    <div className="RM-dashboard-cards">

      <div className="RM-pipeline">

  <div className="RM-card-header">
    <h3>Candidate Pipeline</h3>
    <select>
      <option>This month</option>
      <option>Last month</option>
      <option>This year</option>
    </select>
  </div>

  <div className="RM-pipeline-left">

    <div className="RM-pipeline-row">
      <div className="RM-stage RM-stage1">1,248</div>

      <div className="RM-connector RM-blue-line">
        <span className="RM-line"></span>
        <span className="RM-circle"></span>
      </div>

      <span className="RM-label">Applied</span>
    </div>

    <div className="RM-pipeline-row">
      <div className="RM-stage RM-stage2">842</div>

      <div className="RM-connector RM-green-line">
        <span className="RM-line"></span>
        <span className="RM-circle"></span>
      </div>

      <span className="RM-label">Screened</span>
    </div>

    <div className="RM-pipeline-row">
      <div className="RM-stage RM-stage3">364</div>

      <div className="RM-connector RM-orange-line">
        <span className="RM-line"></span>
        <span className="RM-circle"></span>
      </div>

      <span className="RM-label">Reviewed</span>
    </div>

    <div className="RM-pipeline-row">
      <div className="RM-stage RM-stage4">236</div>

      <div className="RM-connector RM-purple-line">
        <span className="RM-line"></span>
        <span className="RM-circle"></span>
      </div>

      <span className="RM-label">Shortlisted</span>
    </div>

    <div className="RM-pipeline-row">
      <div className="RM-stage RM-stage5">48</div>

      <div className="RM-connector RM-red-line">
        <span className="RM-line"></span>
        <span className="RM-circle"></span>
      </div>

      <span className="RM-label">Hired</span>
    </div>

  </div>

</div>

      {/* AI Screening Overview */}

 

<div className="RM-card RM-screening-card">

  <h3>AI Screening Overview</h3>

  <div className="RM-screening-body">

    {/* Left Side */}
    <div className="RM-ats-score-section">

      <div className="RM-progress-circle">

        <svg width="170" height="170" viewBox="0 0 170 170">

          <circle
            cx="85"
            cy="85"
            r="60"
            stroke="#d9d9d9"
            strokeWidth="12"
            fill="none"
          />

          <circle
            cx="85"
            cy="85"
            r="60"
            stroke="#43c05c"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="377"
            strokeDashoffset="49"
            transform="rotate(-90 85 85)"
          />

        </svg>

        <div className="RM-circle-content">
          <h2>87%</h2>
          <p>ATS Score</p>
        </div>

      </div>

      <div className="RM-match-badge">
        <span className="RM-badge-icon">✓</span>
        <span>Good Match</span>
      </div>

    </div>

    {/* Right Side */}

    <div className="RM-progress-list">

      <div className="RM-progress-item">
        <img src={resume} alt="Resume" />

        <div>
          <p>Resume Quality</p>

          <div className="RM-bar">
            <div style={{ width: "82%" }}></div>
          </div>
        </div>

        <span>82%</span>
      </div>

      <div className="RM-progress-item">
        <img src={skill} alt="Skill" />

        <div>
          <p>Skill Match</p>

          <div className="RM-bar RM-green-bar">
            <div style={{ width: "78%" }}></div>
          </div>
        </div>

        <span>78%</span>
      </div>

      <div className="RM-progress-item">
        <img src={experience} alt="Experience" />

        <div>
          <p>Experience Match</p>

          <div className="RM-bar RM-purple-bar">
            <div style={{ width: "88%" }}></div>
          </div>
        </div>

        <span>88%</span>
      </div>

      <div className="RM-progress-item">
        <img src={keyword} alt="Keyword" />

        <div>
          <p>Keyword Match</p>

          <div className="RM-bar RM-orange-bar">
            <div style={{ width: "91%" }}></div>
          </div>
        </div>

        <span>91%</span>
      </div>

    </div>

  </div>

</div>

      {/* AI Recommendations */}

      {/* AI Recommendations */}

<div className="RM-card RM-recommendation-card">

  <h3>AI Recommendations</h3>

  <div className="RM-recommend-item">

    <img src={candidate} alt="Candidate" className="RM-recommend-icon" />

    <div className="RM-recommend-content">
      <h4>Top Candidate</h4>
      <p>Anjali Mehta</p>
      <small>Full Stack Developer</small>
    </div>

    <span className="RM-badge RM-success">95%</span>

  </div>

  <div className="RM-recommend-item">

    <img src={hire} alt="Hire" className="RM-recommend-icon" />

    <div className="RM-recommend-content">
      <h4>High Potential</h4>
      <p>Rohit Verma</p>
      <small>Backend Developer</small>
    </div>

    <span className="RM-badge RM-success">90%</span>

  </div>

  <div className="RM-recommend-item">

    <img src={demand} alt="Demand" className="RM-recommend-icon" />

    <div className="RM-recommend-content">
      <h4>Skills In Demand</h4>

      <div className="RM-skills-tags">
        <span>React</span>
        <span>Python</span>
        <span>AWS</span>
        <span>Node.js</span>
      </div>

    </div>

  </div>

  <div className="RM-recommend-item">

    <img src={insights} alt="Insights" className="RM-recommend-icon" />

    <div className="RM-recommend-content">
      <h4>Hiring Insights</h4>
      <small>Your time to hire reduced by 22%</small>
    </div>

  </div>

</div>
</div>
  );
};

export default DashboardCards;