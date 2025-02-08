import React from "react";
import "./AboutUs.css"; // Make sure to import the CSS file

// Images
import AboutUsBanner from "../../assets/About Us/About us Banner.png";
import AboutUsImage1 from "../../assets/About Us/AboutUs1.png";
import AboutUsImage2 from "../../assets/About Us/AboutUs2.png";


const AboutUs: React.FC = () => {
  return (
    <div>
      
      {/* Banner Image Below Navbar */}
      <div className="about-us-banner">
        <img src={AboutUsBanner} alt="About Us Banner" />
        <div className="banner-text">
          <h1>About Us</h1>
          <p>
            We craft meaningful digital experiences with a user-first approach,
            blending creativity and innovation
          </p>
        </div>
      </div>

      <div className="about-us-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>The People of Bergisch Gladbach Freiburg University</h1>
          <p>Our community is what makes Bergisch Gladbach Freiburg University unique. Through ongoing
            efforts to foster inclusion and belonging, Bergisch Gladbach Freiburg has created a diverse
            environment enriched by various backgrounds, cultures, races, identities,
            life experiences, perspectives, beliefs, and values</p>
        </div>
        {/* our-numbers */}
        <section className="our-numbers">
          <img src={AboutUsImage1} alt="About Us Image 1" />
          <ul>
            <li><span>2800+</span> Undergraduate and Graduate Students</li>
            <li><span>150+</span> Faculty and Staff</li>
            <li><span>150K+</span> Alumni Worldwide</li>
            <li><span>100K+</span> Learners through Online Platforms</li>
          </ul>
        </section>

        {/*  our-beliefs*/}
        <section className="our-beliefs">
          <p>
            We believe in the value of knowledge, the power of teaching and research,
            and the impact our work can have on society.
            <br /><br />
            <strong>President of Bergisch Gladbach Freiburg University</strong>
            <br />
            Dr. Eleanor M. Hayes
          </p>
          <img src={AboutUsImage2} alt="About Us Image 2" />
        </section>

        <div className="horizontal-container">
          <section className="president-info">
            <h2>President of Bergisch Gladbach Freiburg University</h2>
            <p>Dr. Eleanor M. Hayes</p>
          </section>

          <section className="president-ehrenfeld">
            <h2>President of Bergisch Gladbach Freiburg Unversity</h2>
            <p>Dr. Johann F. Müller serves as the 12th President of Bergisch Gladbach Freiburg Unversity.</p>
          </section>

          <section className="deans-and-officers">
            <h2>Deans and Officers</h2>
            <p>Leading Bergisch Gladbach Freiburg Unversity's faculties and administrative divisions.</p>
          </section>

          <section className="Bergisch Gladbach Freiburg-corporation">
            <h2>Bergisch Gladbach Freiburg Corporation</h2>
            <p>The oldest academic corporation in the region, steering strategic growth.</p>
          </section>

          <section className="board-of-advisors">
            <h2>Board of Advisors</h2>
            <p>Distinguished alumni dedicated to advancing Bergisch Gladbach Freiburg University's mission and vision.</p>
          </section>
        </div>

      </div>
      
    </div>
  );
};

export default AboutUs;
