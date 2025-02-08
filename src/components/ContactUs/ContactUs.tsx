import React from "react";
import "./ContactUs.css"; // Import the CSS file
// Images
import ContactUsImage1 from "../../assets/ContactUs.png";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-container">
      
      <div className="contact-content">
        <div className="contact-left">
          <h1>Contact Bergisch Gladbach Freiburg</h1>
          <p>Thank you for visiting our website.</p>
          <p>
            For general inquiries, please email us on:{" "}
            <a href="mailto:info@bergischgladbachfreiburg.com">info@bergischgladbachfreiburg.com</a>
          </p>
          <p><strong>Mailing address:</strong> Bergisch Gladbach FreiburgGG University, Schlossstraße 10, Bergisch Gladbach, Germany, 51465</p>
        </div>
        <div className="contact-right">
          <img src={ContactUsImage1} alt="Students on campus" />
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
