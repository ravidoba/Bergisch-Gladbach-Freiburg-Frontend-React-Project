import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "../../../global.css";

// Import images for museums
import MuseumsBanner from "../../../assets/Campus/Museums/Museums Banner.png";
//
import CarltonImage from "../../../assets/Campus/Museums/The Carlton Museum of Art and Culture.png";
import FranklinImage from "../../../assets/Campus/Museums/The Franklin Natural History Museum.png";
import MontgomeryImage from "../../../assets/Campus/Museums/The Montgomery Museum of Modern Art.png";
import AlexandriaImage from "../../../assets/Campus/Museums/The Alexandria Maritime Museum.png";
import QuantumImage from "../../../assets/Campus/Museums/Museum of Quantum Wonders.png";
import GlobalCulturesImage from "../../../assets/Campus/Museums/The Global Cultures Museum.png";
import WindsorImage from "../../../assets/Campus/Museums/The Windsor Museum of History and Technology.png";
import NaturalHistoryImage from "../../../assets/Campus/Museums/The Natural History Conservatory.png";
import EthicalDilemmasImage from "../../../assets/Campus/Museums/The Museum of Ethical Dilemmas.png";
import LiteraryLegaciesImage from "../../../assets/Campus/Museums/The Museum of Literary Legacies.png";

const Museums: React.FC = () => {
  const museums = [
    {
      title: "The Carlton Museum of Art and Culture",
      description:
        "The Carlton Museum of Art and Culture is a premier institution dedicated to exploring the diverse realms of visual and performing arts. It houses over 10,000 works from classical to contemporary artists, offering visitors an immersive experience in both traditional and experimental art forms. Through cutting-edge exhibitions and research, the museum enriches the cultural landscape of the region.",
      image: CarltonImage,
    },
    {
      title: "The Franklin Natural History Museum",
      description:
        "The Franklin Natural History Museum is a global leader in the study of the natural world. Its extensive collection spans fossils, geological specimens, and botanical archives, providing invaluable insights into Earth's evolutionary history. The museum fosters scientific inquiry and environmental awareness through its interactive displays and hands-on learning programs.",
      image: FranklinImage,
    },
    {
      title: "The Montgomery Museum of Modern Art",
      description:
        "The Montgomery Museum of Modern Art stands as a testament to innovation and creativity, showcasing groundbreaking works from the 20th and 21st centuries. With a focus on abstract art, digital media, and sculpture, the museum plays a pivotal role in advancing the dialogue around contemporary artistic expression and its impact on society.",
      image: MontgomeryImage,
    },
    {
      title: "The Alexandria Maritime Museum",
      description:
        "The Alexandria Maritime Museum is dedicated to the rich history of seafaring, exploration, and marine conservation. With an impressive collection of ship models, navigational tools, and maritime artwork, the museum brings to life the stories of ancient and modern navigation. It also serves as an educational hub for oceanography and marine research.",
      image: AlexandriaImage,
    },
    {
      title: "The Windsor Museum of History and Technology",
      description:
        "The Windsor Museum of History and Technology is a celebration of human ingenuity and progress. It houses a fascinating array of historical artifacts, early industrial machines, and technological innovations that have shaped society. The museum is a source of inspiration for students and scholars interested in the intersection of history and innovation.",
      image: WindsorImage,
    },
    {
      title: "Museum of Quantum Wonders",
      description:
        "Dive into the fascinating realm of quantum mechanics, where particles behave in ways that defy logic. Experience interactive exhibits that simplify complex phenomena like quantum entanglement, superposition, and teleportation. Perfect for curious minds who wish to glimpse the future of science.",
      image: QuantumImage,
    },
    {
      title: "The Global Cultures Museum",
      description:
        "Journey through the traditions, art, and histories of civilizations across the globe. Discover how cultures influence one another and evolve over time through captivating artifacts, stories, and multimedia displays.",
      image: GlobalCulturesImage,
    },
    {
      title: "The Natural History Conservatory",
      description:
        "From prehistoric fossils to endangered species, this museum brings the wonders of natural history to life. Engage with dioramas, 3D reconstructions, and live science demonstrations.",
      image: NaturalHistoryImage,
    },
    {
      title: "The Museum of Ethical Dilemmas",
      description:
        "Delve into the ethical challenges shaping society. From medical advancements to artificial intelligence, this museum offers thought-provoking case studies, debates, and audience polls to explore the boundaries of right and wrong.",
      image: EthicalDilemmasImage,
    },
    {
      title: "The Museum of Literary Legacies",
      description:
        "A sanctuary for book lovers, featuring rare manuscripts, historical letters, and first editions from literary icons. Uncover the power of words through interactive readings and multimedia storytelling.",
      image: LiteraryLegaciesImage,
    },
  ];

  return (
    <div>
      <Navbar />
      {/* Banner Image Below Navbar */}
      <div className="business-management-banner">
        <img src={MuseumsBanner} alt="BusinessManagement Banner" />
        <div className="banner-text">
          <h1>Museums</h1>
          <p>Explore our museums and immerse yourself in a world of art, history, and culture</p>
        </div>
      </div>

      <div className="engineering-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>Explore Our Museums</h1>
          <p>Discover the Wonders of Our Museums</p>
        </div>

        {museums.map((event, index) => (
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
      <Footer />
    </div>
  );
};

export default Museums;
