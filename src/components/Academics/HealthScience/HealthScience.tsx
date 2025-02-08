import React from "react";
import "../../../global.css";
// Import images for health science programs
//
import HealthScienceBanner from "../../../assets/Academics/HealthScience/Health Science Banner.png";

import GlobalUrbanHealthImage from "../../../assets/Academics/HealthScience/Global-Urban-Health.png";
import MolecularMedicineImage from "../../../assets/Academics/HealthScience/Molecular-Medicine.png";
import NeurosciencesImage from "../../../assets/Academics/HealthScience/Neuroscience.png";
import OpticalScienceImage from "../../../assets/Academics/HealthScience/Optical-Science.png";
import SportScienceForHealthImage from "../../../assets/Academics/HealthScience/Sports-Science-for-Health.png";

const HealthScience: React.FC = () => {
  const healthSciencePrograms = [
    {
      title: "Optical Science",
      degree: "B.Sc./M.Sc./Full-time",
      description:
        "The Optical Science program explores the science of light and its applications in technology and healthcare. Students study the properties of light, optics, and photonics, and their use in imaging, lasers, and vision correction. Graduates are prepared for careers in optometry, optical engineering, and research, contributing to advancements in medical imaging, telecommunications, and more.",
      image: OpticalScienceImage,
    },
    {
      title: "Molecular Medicine",
      degree: "B.Sc./M.Sc./Full-time",
      description:
        "Molecular Medicine offers students an in-depth study of the molecular basis of disease and health. Students explore cellular biology, genetics, and molecular pharmacology to understand how diseases develop and how new therapies can be designed. Graduates are equipped to work in biomedical research, clinical practice, or pharmaceutical industries, advancing healthcare through molecular discoveries.",
      image: MolecularMedicineImage,
    },
    {
      title: "Sport Science for Health",
      degree: "B.Sc./M.Sc./Full-time",
      description:
        "The Sport Science for Health program combines the study of physical fitness with an understanding of health and wellness. Students learn about exercise physiology, biomechanics, and nutrition, exploring how physical activity promotes health and prevents diseases. Graduates pursue careers in sports medicine, rehabilitation, fitness coaching, and wellness consulting.",
      image: SportScienceForHealthImage,
    },
    {
      title: "Global Urban Health",
      degree: "B.Sc./M.Sc./Full-time",
      description:
        "The Global Urban Health program focuses on the intersection of urban development and public health. Students study how environmental, social, and economic factors influence health outcomes in cities. Through research and practical application, graduates are prepared to develop sustainable health solutions, work with global organizations, and address health disparities in urban settings.",
      image: GlobalUrbanHealthImage,
    },
    {
      title: "Neurosciences",
      degree: "B.Sc./M.Sc./Full-time",
      description:
        "The Neurosciences program dives into the study of the brain, nervous system, and cognitive functions. Students learn about neurobiology, psychology, and neurochemistry, exploring how the brain controls behavior, cognition, and motor functions. Graduates are prepared for careers in neuroscience research, clinical neuropsychology, and neurological healthcare, contributing to advancements in understanding and treating neurological disorders.",
      image: NeurosciencesImage,
    },
  ];

  return (
    <div>
      
      {/* Banner Image Below Navbar */}
      <div className="engineering-banner">
        <img src={HealthScienceBanner} alt="BusinessManagement Banner" />
        <div className="banner-text">
          <h1>Health Science</h1>
          <p>Embark on a journey to improve lives through knowledge and innovation in health science</p>
        </div>
      </div>


      <div className="engineering-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>Explore Health Science</h1>
          <p>Transform lives through knowledge and innovation</p>
        </div>

        {healthSciencePrograms.map((program, index) => (
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

export default HealthScience;
