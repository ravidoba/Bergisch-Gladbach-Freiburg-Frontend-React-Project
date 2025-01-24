import React from "react";
import Navbar from "../Navbar/Navbar"; // Assuming you have a Navbar component
import "./ContactUs.css"; // Import the CSS file
// Images
import ContactUsImage1 from "../../assets/ContactUs.png";
import Footer from "../Footer/Footer";
const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-container">
      <Navbar />
      <div className="contact-content">
        <div className="contact-info">
        <h1>Contact Bergisch Gladback Freiburg</h1>
          <p>Thank you for visiting our website.</p>
          <p>
            For general inquiries, please email us on:{" "}
            <a href="mailto:Bergisch Gladback Freiburg@gmail.com">Bergisch Gladback Freiburg@gmail.com</a>
          </p>
          <p>
            <strong>Mailing address:</strong>
          </p>
          <p>Bergisch Gladback FreiburgGG University</p>
          <p>Massachusetts Hall</p>
          <p>Cambridge, MA 02138</p>
        </div>
        <div className="contact-image">
          <img
            src={ContactUsImage1}
            alt="Students on campus"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
