import React from "react";
import "./ReportSecurityIssue.css"; // You can style the page with this CSS file

const ReportSecurityIssue: React.FC = () => {
  return (
    <div>
      
      <div className="security-issue-container">
        <h1>Security Issue</h1>
        <p>
          If you believe you have identified a vulnerability or need to report a security incident, please notify Bergisch Gladbach Freiburg Unversity Information Security for further guidance.
        </p>
        <p>
          Use this process for all information security incidents to ensure they are documented accurately and addressed promptly. If you've identified a security concern, we will collaborate with you to understand the issue's scope and mitigate the risk. Upon receiving adequate notification, we will strive to work with any responsible party bringing the issue to our attention, allocate resources to investigate the matter thoroughly, and deploy a response team suited to the severity of the concern.
        </p>
        <p>
          For additional information, please contact Bergisch Gladbach Freiburg Unversity IT Security.
        </p>
      </div>
      
    </div>
  );
};

export default ReportSecurityIssue;
