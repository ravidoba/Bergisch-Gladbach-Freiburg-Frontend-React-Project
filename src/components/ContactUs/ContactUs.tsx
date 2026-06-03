import React from "react";
import "./ContactUs.css";
import ContactUsImage1 from "../../assets/ContactUs.png";

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-content">
        <div className="contact-left">
          <h1>Contact Bergisch Gladbach Freiburg</h1>
          <p>Thank you for visiting our website.</p>

          <div className="email-list">
            <div className="email-item">
              <span>General inquiries:</span>
              <a href="mailto:info@bergischgladbachfreiburg.de">
                info@bergischgladbachfreiburg.de
              </a>
            </div>

            <div className="email-item">
              <span>Transcript verification:</span>
              <a href="mailto:verification@bergischgladbachfreiburg.de">
                verification@bergischgladbachfreiburg.de
              </a>
            </div>
          </div>

          <div className="address">
            <strong>Address:</strong> Bergisch Gladbach Freiburg
            University, Schlossstraße 10, Bergisch Gladbach, Germany, 51465
          </div>
        </div>

        <div className="contact-right">
          <img src={ContactUsImage1} alt="Students on campus" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;