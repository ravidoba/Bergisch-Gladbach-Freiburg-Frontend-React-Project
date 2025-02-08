import React from "react";
import "../../../global.css";
// Import images for business management programs
import BusinessManagementBanner from "../../../assets/Academics/Business/Business Management Banner.png";
//
import BusinessAnalyticsImage from "../../../assets/Academics/Business/Business-Analytics.png";
import EntrepreneurshipImage from "../../../assets/Academics/Business/Entrepreneurship.png";
import FinanceImage from "../../../assets/Academics/Business/Finance.png";
import HealthcareManagementImage from "../../../assets/Academics/Business/Healthcare-Management.png";
import HumanResourceManagementImage from "../../../assets/Academics/Business/Human-Resource-Management.png";
import InternationalBusinessImage from "../../../assets/Academics/Business/International-Business.png";
import MarketingImage from "../../../assets/Academics/Business/Marketing.png";
import OperationsManagementImage from "../../../assets/Academics/Business/Operations-Management.png";


const BusinessManagement: React.FC = () => {
  const businessPrograms = [
    {
      title: "Human Resource Management",
      degree: "M.B.A./Full-time",
      description:
        "The Human Resource Management program equips students with the skills to manage and develop an organization's workforce. Students explore key areas such as recruitment, employee relations, performance management, and organizational behavior. Graduates are ready to take on HR leadership roles, ensuring effective talent management and fostering positive workplace cultures.",
      image: HumanResourceManagementImage,
    },
    {
      title: "Marketing",
      degree: "M.B.A./Full-time",
      description:
        "The Marketing program focuses on understanding consumer behavior, creating brand strategies, and implementing digital marketing techniques. Students learn to analyze markets, design promotional campaigns, and manage customer relationships. With practical experience in marketing tools and trends, graduates are well-prepared for careers in brand management, advertising, and digital marketing.",
      image: MarketingImage,
    },
    {
      title: "Finance",
      degree: "M.B.A./Full-time",
      description:
        "The Finance program prepares students to manage financial resources in various sectors, including banking, investments, and corporate finance. Students study financial analysis, budgeting, risk management, and investment strategies. Graduates are ready for careers as financial analysts, investment bankers, or financial planners, playing a key role in the financial stability of organizations.",
      image: FinanceImage,
    },
    {
      title: "Entrepreneurship",
      degree: "M.B.A./Full-time",
      description:
        "The Entrepreneurship program helps students develop the skills needed to launch and manage their own businesses. Students learn about business planning, venture capital, innovation, and scaling up operations. With opportunities for real-world mentorship and startup incubation, graduates are equipped to become successful entrepreneurs or lead entrepreneurial ventures within larger organizations.",
      image: EntrepreneurshipImage,
    },
    {
      title: "Operations Management",
      degree: "M.B.A./Full-time",
      description:
        "This program focuses on managing and improving the processes that create and deliver products and services. Students explore supply chain management, logistics, quality control, and process optimization. With practical skills in operational strategies, graduates are ready to take on roles in manufacturing, logistics, or consulting, driving efficiency and improving business performance.",
      image: OperationsManagementImage,
    },
    {
      title: "Healthcare Management",
      degree: "M.B.A./Full-time",
      description:
        "The Healthcare Management program prepares students to oversee healthcare facilities, manage healthcare policies, and improve patient care delivery. Students learn about healthcare systems, hospital administration, and medical ethics, ensuring they are ready to lead in healthcare organizations. Graduates can work in hospitals, clinics, insurance companies, or public health agencies.",
      image: HealthcareManagementImage,
    },
    {
      title: "International Business",
      degree: "M.B.A./Full-time",
      description:
        "The International Business program offers students the tools to navigate the complexities of global markets. Students explore international trade, cross-border regulations, and global marketing strategies. With a strong focus on cultural diversity and international relations, graduates are prepared for careers in multinational corporations, international finance, and global consulting.",
      image: InternationalBusinessImage,
    },
    {
      title: "Business Analytics",
      degree: "M.B.A./Full-time",
      description:
        "The Business Analytics program teaches students to harness data to make strategic business decisions. Students learn statistical analysis, predictive modeling, and data visualization techniques to analyze trends and solve business problems. Graduates are equipped to work in data-driven roles, helping organizations make evidence-based decisions across various industries.",
      image: BusinessAnalyticsImage,
    },
  ];

  return (
    <div>
      
      {/* Banner Image Below Navbar */}
      <div className="engineering-banner">
        <img src={BusinessManagementBanner} alt="BusinessManagement Banner" />
        <div className="banner-text">
          <h1>Business Management</h1>
          <p>Our business programs prepare students to lead, innovate, and drive change in the business world.</p>
        </div>
      </div>

      <div className="engineering-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>Explore Business Leadership Opportunities</h1>
          <p>Uncover the Ideal Business Management Pathway for Your Future</p>
        </div>

        {businessPrograms.map((program, index) => (
          <div
            className={`engineering-item ${index % 2 === 0 ? "normal-order" : "reverse-order"
              }`}
            key={index}
          >
            <div className="engineering-image">
              <img src={program.image} alt={program.title} />
            </div>
            <div className="engineering-content">
              <h2>{program.title}</h2>
              <h3>{program.degree}</h3>
              <p>{program.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default BusinessManagement;
