import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css";
import WhiteLogo from "../../../public/Navbar White Logo (2).png";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-container">
          <img src={WhiteLogo} alt="University Logo" className="navbar-logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/menu" className="menu-link">
          <div className="menu-icon">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <span className="menu-text">Menu</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
