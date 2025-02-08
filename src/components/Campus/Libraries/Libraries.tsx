import React from "react";
import "../../../global.css";

// Import images
import LibrariesBanner from "../../../assets/Campus/Libraries/Libraries Banner.png";
//
import AmadeusImage from "../../../assets/Campus/Libraries/AmadeusMusicAndPerformingArtsLibrary.png";
import MarshallImage from "../../../assets/Campus/Libraries/EdwardCMarshallAcademicLibrary.png";
import EleanorImage from "../../../assets/Campus/Libraries/EleanorRigbyHumanitiesAndSocialSciencesLibrary.png";
import NightingaleImage from "../../../assets/Campus/Libraries/FlorenceNightingaleMedicalLibrary.png";
import GalileoImage from "../../../assets/Campus/Libraries/GalileoDigitalLearningAndResearchLibrary.png";
import GutenbergImage from "../../../assets/Campus/Libraries/GutenbergRareBooksAndArchivesLibrary.png";
import HorizonImage from "../../../assets/Campus/Libraries/HorizonGraduateResearchLibrary.png";
import IsaacImage from "../../../assets/Campus/Libraries/IsaacNewtonCenterForEngineeringAndTechnology.png";
import RockefellerImage from "../../../assets/Campus/Libraries/JohnDRockefellerBusinessAndManagementLibrary.png";
import MaxwellImage from "../../../assets/Campus/Libraries/MaxwellSHarperScienceAndInnovationLibrary.png";

const Libraries: React.FC = () => {
  const libraries = [
    {

      title: "The Edward C. Marshall Academic Library",
      image: MarshallImage,
      description: `The Edward C. Marshall Academic Library serves as the central hub for interdisciplinary learning and research at the university. With a vast collection of textbooks, journals, and multimedia resources across various fields, it caters to the academic needs of students and faculty alike. The library offers 24/7 study spaces, collaborative zones for group work, and regular workshops to enhance academic skills. Its comprehensive online catalog and seamless borrowing services ensure convenient access to knowledge.`,
    },
    {
      title: "The Florence Nightingale Medical Library",
      image: NightingaleImage,
      description: `The Florence Nightingale Medical Library is a world-class facility designed to advance education and research in medicine, nursing, and healthcare. With a meticulously curated collection of medical journals, case studies, and clinical trials, the library empowers students and professionals to lead innovation in healthcare. Quiet study areas, comprehensive exam preparation resources, and access to groundbreaking medical research underscore its commitment to excellence.`,
    },
    {
      title: "The Maxwell S. Harper Science and Innovation Library",
      image: MaxwellImage,
      description: `The Maxwell S. Harper Science and Innovation Library is an epicenter of groundbreaking research and technological advancement. Designed to inspire inquiry and discovery, the library offers access to leading scientific publications, technical journals, and patents. Its advanced facilities and workshops on cutting-edge technologies like artificial intelligence and robotics ensure that students and researchers remain at the forefront of scientific progress.`,
    },
    {
      title: "The Eleanor Rigby Humanities and Social Sciences Library",
      image: EleanorImage,
      description: `The Eleanor Rigby Humanities and Social Sciences Library embodies the spirit of intellectual exploration and cultural understanding. Housing a distinguished collection of literature, historical records, and rare manuscripts, the library fosters deep engagement with the humanities and social sciences. With thought-provoking seminars and discussions, it serves as a vibrant center for academic dialogue and creative exploration.`,
    },
    {
      title: "The John D. Rockefeller Business and Management Library",
      image: RockefellerImage,
      description: `A hub for the next generation of business leaders, the John D. Rockefeller Business and Management Library is renowned for its rich resources in finance, entrepreneurship, and global markets. From cutting-edge analytics tools to networking events with industry pioneers, the library equips students with the knowledge and connections they need to excel in a competitive world. Its commitment to fostering innovation and leadership is unparalleled.`,
    },
    {
      title: "The Isaac Newton Center for libraries and Technology",
      image: IsaacImage,
      description: `The Isaac Newton Center for libraries and Technology is a premier resource for aspiring engineers and innovators. With cutting-edge tools, technical publications, and collaborative project spaces, the library is tailored to advance research and practical application in libraries and technology. Its mission is to cultivate ingenuity and empower students to design solutions to the world's most pressing challenges.`,
    },
    {
      title: "The Amadeus Music and Performing Arts Library",
      image: AmadeusImage,
      description: `Celebrating the creative spirit, the Amadeus Music and Performing Arts Library is a sanctuary for students and scholars of the arts. With its extensive collection of sheet music, audio recordings, and performance archives, the library inspires artistic excellence. Practice rooms, resources on music history, and a focus on interdisciplinary collaboration make it a vital institution for fostering creativity and innovation in the performing arts.`,
    },
    {
      title: "The Gutenberg Rare Books and Archives Library",
      image: GutenbergImage,
      description: `The Gutenberg Rare Books and Archives Library is a treasure trove of history, preserving some of the most precious literary and academic works. With its curated collections of rare manuscripts, first editions, and historical artifacts, the library offers scholars an unparalleled opportunity to delve into the past. Guided tours, exhibitions, and digitized archives make these timeless treasures accessible to a global audience.`,
    },
    {
      title: "The Galileo Digital Learning and Research Library",
      image: GalileoImage,
      description: `The Galileo Digital Learning and Research Library is a pioneering institution that redefines access to knowledge in the digital age. It provides 24/7 access to a vast array of e-books, journals, and multimedia resources, ensuring that students can learn anytime, anywhere. Cutting-edge tools like virtual reality and online research platforms position this library at the forefront of digital education.`,
    },
    {
      title: "The Horizon Graduate Research Library",
      image: HorizonImage,
      description: `The Horizon Graduate Research Library is a distinguished facility dedicated to supporting postgraduate and doctoral research. With exclusive access to advanced academic journals, private study areas, and expert guidance, the library is a sanctuary for deep intellectual pursuit. Its commitment to fostering innovative research and academic rigor solidifies its reputation as an essential resource for advanced scholars.`,
    },
  ];

  return (
    <div>
      
      {/* Banner Image Below Navbar */}
      <div className="engineering-banner">
        <img src={LibrariesBanner} alt="BusinessManagement Banner" />
        <div className="banner-text">
          <h1>Libraries</h1>
          <p>Our libraries programs empower students to learn, innovate, and create solutions for a better tomorrow.</p>
        </div>
      </div>
      
      <div className="engineering-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>Discover libraries Pathways</h1>
          <p>Find the Perfect libraries Pathway for You.</p>
        </div>

        {libraries.map((event, index) => (
          <div
            className={`engineering-item ${index % 2 === 0 ? "normal-order" : "reverse-order"
              }`}
            key={index}
          >
            <div className="engineering-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="engineering-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Libraries;
