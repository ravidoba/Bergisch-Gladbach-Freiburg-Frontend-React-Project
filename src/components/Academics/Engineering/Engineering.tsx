import React from "react";
import Navbar from "../../Navbar/Navbar";
import "../../../global.css";

// Import images for engineering programs
import EngineeringBanner from "../../../assets/Academics/Engineering/Engineering-Banner.png";
//
import ComputerEngineeringImage from "../../../assets/Academics/Engineering/Computer-Engineering.png";
import RoboticsEngineeringImage from "../../../assets/Academics/Engineering/Robotic-Engineering.png";
import MechanicalEngineeringImage from "../../../assets/Academics/Engineering/Mechanical.png";
import ElectricalEngineeringImage from "../../../assets/Academics/Engineering/Electrical.png";
import ChemicalEngineeringImage from "../../../assets/Academics/Engineering/Chemical-Engineering.png";
import Footer from "../../Footer/Footer";

const Engineering: React.FC = () => {
  const engineeringPrograms = [
    {
      title: "Computer Engineering",
      degree: "B.Tech/M.Tech / Full-time",
      description:
        "The Computer Engineering program equips students with the knowledge and skills to design, develop, and optimize computer systems and software. Students explore key areas such as programming, hardware design, software engineering, embedded systems, and network security. Graduates are prepared to take on roles in innovation and technology, driving advancements in computing and creating solutions for real-world challenges.",
      image: ComputerEngineeringImage,
    },
    {
      title: "Robotics Engineering",
      degree: "B.Tech/M.Tech / Full-time",
      description:
        "The Robotics Engineering program offers students the fundamental skills in robotics, combining principles of mechanical engineering, electrical engineering, and computer science. Students engage in hands-on projects, learning to design and create robots that solve real-world problems. The curriculum covers topics such as automation, control systems, and artificial intelligence, preparing graduates for careers in industrial automation, research, and robotics design.",
      image: RoboticsEngineeringImage,
    },
    {
      title: "Mechanical Engineering",
      degree: "B.Tech/M.Tech / Full-time",
      description:
        "Mechanical Engineering focuses on the principles of design mechanics, and sustainable innovation. The program provides students with access to advanced workshops and real-world projects, encouraging creativity in solving engineering challenges. From robotics to renewable energy systems, students develop a strong foundation in core concepts while exploring cutting-edge technologies. Graduates leave with the skills to contribute to industries shaping a sustainable future.",
      image: MechanicalEngineeringImage,
    },
    {
      title: "Electrical Engineering",
      degree: "B.Tech/M.Tech / Full-time",
      description:
        "The Electrical Engineering program explores electricity, electronics, and systems design with a focus on innovation and sustainability. Students engage in hands-on labs, learning to develop solutions for power systems, communication networks, and emerging technologies. The curriculum bridges foundational knowledge and advanced research, preparing graduates to lead in industries like renewable energy, automation, and telecommunications.",
      image: ElectricalEngineeringImage,
    },
    {
      title: "Chemical Engineering",
      degree: "B.Tech/M.Tech / Full-time",
      description:
        "Chemical Engineering focuses on transforming raw materials into valuable products through sustainable processes. The program combines principles of chemistry, biology, and engineering to address challenges in energy, healthcare, and the environment. Students engage in practical research and industry collaborations, learning to innovate in areas like renewable energy, pharmaceuticals, and material development. Graduates are prepared to drive advancements in industries that impact everyday life.",
      image: ChemicalEngineeringImage,
    },
  ];

  return (
    <div>
      <Navbar />
      {/* Banner Image Below Navbar */}
      <div className="business-management-banner">
        <img src={EngineeringBanner} alt="BusinessManagement Banner" />
        <div className="banner-text">
          <h1>Engineering</h1>
          <p>Our engineering programs empower students to learn, innovate, and create solutions for a better tomorrow.</p>
        </div>
      </div>

      <div className="engineering-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>Discover Engineering Pathways</h1>
          <p>Find the Perfect Engineering Pathway for You.</p>
        </div>

        {engineeringPrograms.map((program, index) => (
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
      <Footer />
    </div>
  );
};

export default Engineering;
