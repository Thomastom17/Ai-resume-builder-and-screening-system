import React from "react";
import { MoreVertical } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import eyeIcon from "../assets/eye.png";
import "./RecentCandidates.css";

const candidates = [
  {
    name: "Anjali Mehta",
    email: "anjalimehta@gmail.com",
    job: "Full Stack Developer",
    experience: "4 yrs",
    skills: ["React", "Node.js"],
    extraSkills: 4,
    score: 95,
    status: "Shortlisted",
    statusClass: "status-green",
  },
  {
    name: "Rohit Verma",
    email: "rohitverma@gmail.com",
    job: "Backend Developer",
    experience: "3 yrs",
    skills: ["Python", "Django"],
    extraSkills: 3,
    score: 90,
    status: "Review",
    statusClass: "status-orange",
  },
  {
    name: "Sneha Iyer",
    email: "snehaiyer@gmail.com",
    job: "Data Analyst",
    experience: "2 yrs",
    skills: ["SQL", "Python"],
    extraSkills: 2,
    score: 82,
    status: "Scanned",
    statusClass: "status-blue",
  },
  {
    name: "Karan Singh",
    email: "karansingh@gmail.com",
    job: "DevOps Engineer",
    experience: "5 yrs",
    skills: ["AWS", "Docker"],
    extraSkills: 3,
    score: 78,
    status: "Rejected",
    statusClass: "status-red",
  },
  {
    name: "Pooja Sharma",
    email: "poojasharma@gmail.com",
    job: "Frontend developer",
    experience: "2 yrs",
    skills: ["HTML", "CSS"],
    extraSkills: 2,
    score: 75,
    status: "Review",
    statusClass: "status-orange",
  },
];

const skillsData = [
  { name: "JavaScript", value: 34, color: "#6366F1" },
  { name: "Python", value: 28, color: "#22C55E" },
  { name: "Java", value: 15, color: "#F97316" },
  { name: "SQL", value: 10, color: "#3B82F6" },
  { name: "AWS", value: 7, color: "#EF4444" },
  { name: "Others", value: 6, color: "#D1D5DB" },
];

function CandidatesTable() {
  return (
    <div className="card candidates-card">
      <h2 className="card-title">Recent Candidates</h2>
      <div className="table-wrapper">
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Candidates</th>
              <th>Job Applied</th>
              <th>Experience</th>
              <th>Skills</th>
              <th>ATS Score</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((c) => (
              <tr key={c.name}>
                <td>
                  <div className="candidate-cell">
                    <div className="candidate-name">{c.name}</div>
                    <div className="candidate-email">{c.email}</div>
                  </div>
                </td>
                <td className="nowrap">{c.job}</td>
                <td className="nowrap">{c.experience}</td>
                <td>
                  <div className="skills-cell">
                    {c.skills.map((s) => (
                      <span key={s} className="skill-tag">
                        {s}
                      </span>
                    ))}
                    <span className="skill-extra">+{c.extraSkills}</span>
                  </div>
                </td>
                <td className="ats-score nowrap">{c.score}%</td>
                <td>
                  <span className={`status-badge ${c.statusClass}`}>
                    {c.status}
                  </span>
                </td>
                <td>
                  <div className="actions-cell">
                    <img src={eyeIcon} alt="view" className="action-icon eye-icon" />
                    <MoreVertical size={16} className="action-icon" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SkillsDistribution() {
  const totalCandidates = 1248;
  return (
    <div className="card skills-card">
      <div className="skills-header">
        <h2 className="card-title">Skills Distribution</h2>
        <select className="month-select">
          <option>This month</option>
          <option>Last month</option>
        </select>
      </div>

      <div className="donut-legend-row">
        <div className="donut-wrapper">
          <PieChart width={130} height={130}>
            <Pie
              data={skillsData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={58}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {skillsData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="donut-center">
            <span className="donut-total">{totalCandidates.toLocaleString()}</span>
            <span className="donut-label">Total<br />candidates</span>
          </div>
        </div>

        <div className="legend">
          {skillsData.map((s) => (
            <div key={s.name} className="legend-row">
              <div className="legend-left">
                <span className="legend-dot" style={{ backgroundColor: s.color }} />
                <span className="legend-name">{s.name}</span>
              </div>
              <span className="legend-value">{s.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RecentCandidates() {
  return (
    <div className="dashboard">
      <div className="dashboard-row">
        <CandidatesTable />
        <SkillsDistribution />
      </div>
    </div>
  );
}