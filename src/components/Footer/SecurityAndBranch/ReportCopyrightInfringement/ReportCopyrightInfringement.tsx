import React from "react";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../Footer";
import "./ReportCopyrightInfringement.css"; // You can style the page with this CSS file

const ReportCopyrightIssue: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="copyright-issue-container">
        <h1>Copyright Issue</h1>

        <p>
          In compliance with the Digital Millennium Copyright Act ("DMCA"), Pub. L 105-304, Universität Ehrenfeld has appointed an agent to handle notifications of alleged copyright infringement within the Bergisch Gladback Freiburg.edu domain. If you believe your copyrighted work has been infringed, please notify our designated agent listed below.
        </p>

        <p>
          Please note: This agent is solely responsible for handling copyright infringement reports and is not authorized to address requests for copyright permissions.
        </p>

        <h2>Designated Agent</h2>
        <p>
          <strong>Dr. Lukas Berger</strong>
        </p>
        <p>
          Universität Ehrenfeld Information Technology
          <br />
          IT Security | Policy, Risk, and Compliance
        </p>
        <p>
          +49 221 1234567
          <br />
          123 Innovation Strasse
          <br />
          Cologne, Germany 50667
        </p>
        <p>Email: <a href="mailto:dmca@Bergisch Gladback Freiburg.edu">dmca@Bergisch Gladback Freiburg.edu</a></p>

        <h2>DMCA Requirements</h2>
        <p>
          The Digital Millennium Copyright Act (DMCA) requires that all claims of copyright infringement must be submitted in writing and must include the following information:
        </p>
        <ul>
          <li>A physical or electronic signature of the copyright owner or an individual authorized to act on their behalf.</li>
          <li>A detailed description of the copyrighted work claimed to be infringed.</li>
          <li>A description of the infringing material and sufficient information to enable Universität Ehrenfeld to locate it.</li>
          <li>Your contact details, including your address, phone number, and email.</li>
          <li>A statement confirming your good faith belief that the use of the material in question is not authorized by the copyright owner, their agent, or the law.</li>
          <li>A declaration that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ReportCopyrightIssue;
