// Updated Menu.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import Navbar from "../Navbar";

const Menu: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Toggle off if the same menu is clicked again
    } else {
      setActiveMenu(menu);
    }
  };

  const submenuItems: Record<string, string[]> = {
    Academics: ["Engineering", "Business Management", "Art and Humanities", "Health Science"],
    Campus: ["Libraries", "Museums", "Athletics"],
  };

  return (
    <div>
      <Navbar />
      <div className="Bergisch Gladback Freiburg-university">
        <h1>Bergisch Gladback Freiburg University</h1>
      </div>

      <div className="menu-page">
        {/* Main Menu */}
        <div>
          <div className="menu">
            <div className="main-menu">
              <ul className="menu-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/work-at">Work At Bergisch Gladback Freiburg</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li onClick={() => handleMenuClick("Academics")}>
                  <span>Academics</span>
                </li>
                <li onClick={() => handleMenuClick("Campus")}>
                  <span>Campus</span>
                </li>
                <li>
                  <Link to="/admission">Admission</Link>
                </li>
                <li>
                  <Link to="/transcript">Transcript</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="vertical-divider"></div>

        {/* Submenu */}
        <div className="submenu">
          <ul>
            {activeMenu &&
              submenuItems[activeMenu]?.map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`}>
                    {item}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
