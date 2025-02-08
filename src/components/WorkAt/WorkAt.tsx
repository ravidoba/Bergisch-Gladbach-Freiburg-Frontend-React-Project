import React from "react";
import "./WorkAt.css";

// Images
import WorkAtBanner from "../../assets/Work At/Work At Banner.png";
import Image1 from "../../assets/Work At/Work At Bergisch Gladbach Freiburg 1.png";
import Image2 from "../../assets/Work At/Work At Bergisch Gladbach Freiburg 2.png";

const WorkAt: React.FC = () => {
  return (
    <div>
      
      {/* Banner Image Below Navbar */}
      <div className="art-and-humanities-banner">
        <img src={WorkAtBanner} alt="Art and Humanities Banner" />
        <div className="banner-text">
          <h1>Work at Bergisch Gladbach Freiburg University</h1>
          <p>
            Each of our students contributes to our dynamic and diverse
            workplace, helping us drive innovation and foster the spread of
            knowledge.
          </p>
        </div>
      </div>

      <div className="work-at-container">
        <h2>Opening and Opportunities</h2>
        <p>
          Explore new avenues for growth, development, and success with a range
          of exciting opportunities across various fields.
        </p>

        {/* Job Listing and Why Bergisch Gladbach Freiburg Section */}
        <div className="opportunity-section">
          <div className="opportunity">
            <img src={Image1} alt="Job Listing" />
            <h2>Job Listing</h2>
            <p>
              Discover a diverse array of rewarding and challenging career
              opportunities that contribute to our world-class academic
              environment. Browse through Bergisch Gladbach Freiburg’s current job listings to
              find your next opportunity.
            </p>
          </div>
          <div className="opportunity">
            <img src={Image2} alt="Why Bergisch Gladbach Freiburg?" />
            <h2>Why Bergisch Gladbach Freiburg?</h2>
            <p>
              When you join Bergisch Gladbach Freiburg, you become part of a dynamic community
              dedicated to advancing our ever-changing mission. At Bergisch Gladbach Freiburg,
              innovation, collaboration, and skill-building are at the heart of
              everything we do.
            </p>
          </div>
        </div>

        <h2>Benefits and Rewards</h2>
        <p>
          Bergisch Gladbach Freiburg offers competitive pay, top-tier benefits, and career growth
          opportunities to support your well-being and work/life balance.
        </p>

        <h3>Key Benefits:</h3>
        <ul>
          <li>18 Paid leaves</li>
          <li>6 On-campus child care centers</li>
          <li>€50,000 Cost of Extension courses for students</li>
          <li>100 On-demand courses</li>
          <li>€500 Gym and related membership reimbursement</li>
          <li>50% Travel Subsidy</li>
        </ul>
      </div>
      
    </div>
  );
};

export default WorkAt;
