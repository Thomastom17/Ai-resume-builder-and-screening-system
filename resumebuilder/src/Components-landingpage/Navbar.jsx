import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Components-landingpage/Navbar.css";
import logo from "../assets/landingpage/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const [isLoggedIn] = useState(false);

  const handleProtectedRoute = (path) => {
    if (!isLoggedIn) {
      alert("Please Login or Register first");
      return;
    }
    navigate(path);
  };
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="logo" />
        <h2>AI RB & SS</h2>
      </div>
      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ≡
      </div>
      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </NavLink>

        <button
          className="login-btn"
          onClick={() => handleProtectedRoute("/Resume-builder/login/candidate")}
        >
          {" "}
          login{" "}
        </button>
        <button
          className="register-btn"
          onClick={() => handleProtectedRoute("/Resume-builder/signup/userregcandidate")}
        >
          Registration
        </button>
      </div>
    </nav>
  );
}

export default Navbar;