import React from "react";
import "./Footer.css";
import WhiteLogo from "../../../public/NEW-111PNG 123white.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-section footer-left">
        <h3>Security & Brand</h3>
        <ul>
          <li>
            <a href="/report-copyright-infringement">Report Copyright Infringement</a>
          </li>
          <li>
            <a href="/report-security-issue">Report Security Issue</a>
          </li>
          <li>
            <a href="/trademark-notice">Trademark Notice</a>
          </li>
        </ul>
      </div>

      {/* Center Section */}
      {/* Center Section */}
      <a href="/" className="footer-center">
        <img src={WhiteLogo} alt="Bergisch Gladback Freiburg University Logo" className="footer-logo" />
        <p>&copy; 2025 The President and Fellows of Bergisch Gladback Freiburg University</p>
      </a>

      {/* Right Section */}
      <div className="footer-section footer-right">
        <h3>Get in Touch</h3>
        <ul>
          <li>
            <a href="/contact-us">Contact Bergisch Gladback Freiburg</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
