// src/components/Home/Home.tsx
import React from "react";
import "../../index.css";
import "./Home.css";
// Image imports for each program
import HomeBanner from "../../assets/Home/Home Banner.png";
// 
import PO_ArtAndHumanities from "../../assets/Home/ProgramOverview/Art and Humanities.png";
import PO_BusinessManagement from "../../assets/Home/ProgramOverview/Business Management.png";
import PO_Engineering from "../../assets/Home/ProgramOverview/Engineering.png";
import PO_HealthScience from "../../assets/Home/ProgramOverview/Health Science.png";
// 
import CO_Athletics from "../../assets/Home/CampusOverview/Athletics.png";
import CO_Library from "../../assets/Home/CampusOverview/Library.png";
import CO_Museum from "../../assets/Home/CampusOverview/Museum.png";
// 
import LatestNews1 from "../../assets/Home/News/Latest News 1.png";
import LatestNews2 from "../../assets/Home/News/Latest News 2.png";
// 
import SL_ClubsAndSocieties from "../../assets/Home/StudentLife/Clubs and societies.png";
import SL_Dining from "../../assets/Home/StudentLife/Dining.png";
import SL_Housing from "../../assets/Home/StudentLife/Housing.png";
// 
import { Link } from "react-router-dom";
import '../../index.css';
import Testimonials from "./Testimonials/Testimonials"; // Correct relative path

const Home: React.FC = () => {

  return (
    <div className="home">

      <div></div>

      <div className="home-banner">
        <img src={HomeBanner} alt="University Banner" />
        <div className="home-banner-text">
          <h1>
            Empowering <span className="highlighted-word">Future</span> Today!
          </h1>
          <p>Explore our world-class programs, vibrant campus life, and research opportunities.</p>
        </div>
      </div>

      {/* Programs Overview Section */}
      <div className="programs-overview">
        <h2>Programs Overview</h2>
        <p>Discover the Right Program for You</p>

        {/* Image list for Programs */}
        <div className="programs-images">
          <div className="program-card">
            <Link to="/engineering">
              <img src={PO_Engineering} alt="Engineering" />
              <p>Engineering</p>
            </Link>
          </div>
          <div className="program-card">
            <Link to="/business-management">
              <img src={PO_BusinessManagement} alt="Business Management" />
              <p>Business Management</p>
            </Link>
          </div>
          <div className="program-card">
            <Link to="/art-and-humanities">
              <img src={PO_ArtAndHumanities} alt="Arts & Humanities" />
              <p>Arts & Humanities</p>
            </Link>
          </div>
          <div className="program-card">
            <Link to="/health-science">
              <img src={PO_HealthScience} alt="Health Science" />
              <p>Health Science</p>
            </Link>
          </div>
        </div>

        {/* Campus Overview Section */}
        <div className="campus-overview">
          <h2>Campus Overview</h2>
          <p>Discover the Campus for You</p>

          {/* Image list for Campus Features */}
          <div className="campus-images">
            <div className="campus-card">
              <Link to="/libraries">
                <img src={CO_Library} alt="Library" />
                <p>Library</p>
              </Link>
            </div>
            <div className="campus-card">
              <Link to="/museums">
                <img src={CO_Museum} alt="Museums" />
                <p>Museums</p>
              </Link>
            </div>
            <div className="campus-card">
              <Link to="/athletics">
                <img src={CO_Athletics} alt="Athletics" />
                <p>Athletics</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Latest News Section */}
        <div className="latest-news">
          <h2>Our Latest News</h2>
          <p>Stay Informed with Our Latest Updates</p>

          <div className="news-container">
            <div className="news-item">
              <img src={LatestNews1} alt="Preparing students for a globalized world" />
              <p>Preparing students for a globalized world</p>
              <p>How globalization is reshaping higher education, emphasizing the importance of intercultural competence, global perspectives, and international collaboration.</p>
            </div>
            <div className="news-item">
              <img src={LatestNews2} alt="Adapting to a Digital Learning Landscape" />
              <p>Adapting to a Digital Learning Landscape</p>
              <p>Delve into the evolving landscape of online education, discussing its advantages, challenges, and the potential it holds for democratizing access to quality education worldwide.</p>
            </div>
          </div>
        </div>

        {/* Student Life Section */}
        <div className="student-life">
          <h2>Student Life</h2>
          <p>Discover life beyond the Classroom</p>

          <div className="student-life-images">
            <div className="student-life-card">
              <img src={SL_ClubsAndSocieties} alt="Clubs and Societies" />
              <p>Clubs and Societies</p>
            </div>
            <div className="student-life-card">
              <img src={SL_Dining} alt="Dining" />
              <p>Dining</p>
            </div>
            <div className="student-life-card">
              <img src={SL_Housing} alt="Housing" />
              <p>Housing</p>
            </div>
          </div>
        </div>
        {/* Testomonials */}
        <div><Testimonials /></div>
        
      </div>
    </div>
  );
};

export default Home;
