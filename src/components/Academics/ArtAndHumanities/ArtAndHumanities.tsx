import React from "react";
import "../../../global.css";

// Import images for art and humanities programs
import ArtandHumanitiesBanner from "../../../assets/Academics/ArtsAndHumanities/Art and Humanities Banner.png";
//
import ArtImage from "../../../assets/Academics/ArtsAndHumanities/Arts.png";
import HistoryImage from "../../../assets/Academics/ArtsAndHumanities/History.png";
import LiteratureImage from "../../../assets/Academics/ArtsAndHumanities/Literature.png";
import ManuscriptCulturesImage from "../../../assets/Academics/ArtsAndHumanities/Manuphist-Cultures.png";
import PhilosophyImage from "../../../assets/Academics/ArtsAndHumanities/Philosophy.png";
import ProtestantTheologyImage from "../../../assets/Academics/ArtsAndHumanities/Protestant-Theology.png";
import ReligiousStudiesImage from "../../../assets/Academics/ArtsAndHumanities/Religious.png";
import TranslationAndInterpretationImage from "../../../assets/Academics/ArtsAndHumanities/Translate-and-Interpretation.png";

const ArtAndHumanities: React.FC = () => {
  const artAndHumanitiesPrograms = [
    {
      title: "History",
      degree: "B.A./M.A./Full-time",
      description:
        "The History program allows students to investigate the events, people, and forces that have shaped the world. Students explore different time periods, cultures, and global histories gaining critical thinking and research skills. Graduates are prepared for careers in education, research, museums, and public history.",
      image: HistoryImage,
    },
    {
      title: "Literature",
      degree: "B.A./M.A./Full-time",
      description:
        "The Literature program offers students an in-depth study of literary works across various genres and periods. Students analyze novels, plays, poetry, and essays, while learning about the social, political, and historical contexts that influence them. Graduates gain strong writing and analytical skills, suitable for careers in publishing, journalism, and education.",
      image: LiteratureImage,
    },
    {
      title: "Philosophy",
      degree: "B.A./M.A./Full-time",
      description:
        "The Philosophy program encourages students to think critically about fundamental concepts such as morality, existence, and truth. Through exploring major philosophical traditions and thinkers, students develop strong problem-solving and reasoning skills. Graduates are prepared for careers in law, education, and any field requiring analytical thinking and ethical decision-making.",
      image: PhilosophyImage,
    },
    {
      title: "Religious Studies",
      degree: "B.A./M.A./Full-time",
      description:
        "The Religious Studies program offers students a broad understanding of world religions, their practices, histories, and influence on societies. Students explore sacred texts, rituals, beliefs, and religious movements. This course prepares graduates for careers in religious institutions, nonprofit organizations, and roles that require cross-cultural understanding.",
      image: ReligiousStudiesImage,
    },
    {
      title: "Translation and Interpretation",
      degree: "B.A./M.A./Full-time",
      description:
        "The Translation and Interpretation program teaches students the art of translating written and spoken material between languages. Students study linguistic theory, translation techniques, and cultural nuances to ensure accurate communication. Graduates are prepared to work as professional translators, interpreters, and language consultants in a variety of fields, including international business, diplomacy, and publishing.",
      image: TranslationAndInterpretationImage,
    },
    {
      title: "Art",
      degree: "B.A./M.A./Full-time",
      description:
        "The Art History program immerses students in the study of visual art, architecture, and cultural artifacts. Students learn to analyze the development of art styles, techniques, and movements from ancient to contemporary times. Graduates are prepared for careers in museums, galleries, art conservation, and education.",
      image: ArtImage,
    },
    {
      title: "Manuscript Cultures",
      degree: "B.A./M.A./Full-time",
      description:
        "The Manuscript Cultures program focuses on the history of writing and manuscripts, examining ancient scripts, medieval manuscripts, and the evolution of print. Students study the production, preservation, and interpretation of historical texts, gaining specialized knowledge in paleography, codicology, and archival research. Graduates are well-equipped for roles in libraries, archives, and academic research.",
      image: ManuscriptCulturesImage,
    },
    {
      title: "Protestant Theology",
      degree: "B.A./M.A./Full-time",
      description:
        "The Protestant Theology program allows students to explore the core teachings, history, and impact of Protestant Christianity. Students engage with theological texts, doctrine, and the Reformation's influence on modern religious thought. Graduates are prepared for careers in religious ministry, education, and theological research, contributing to faith-based and academic communities.",
      image: ProtestantTheologyImage,
    },
  ];

  return (
    <div>
      
      {/* Banner Image Below Navbar */}
      <div className="engineering-banner">
        <img src={ArtandHumanitiesBanner} alt="BusinessManagement Banner" />
        <div className="banner-text">
          <h1>Art and Humanities</h1>
          <p>Dive into the rich fields of arts and humanities, where creativity, culture, and critical thinking come together to shape your future.</p>
        </div>
      </div>

      <div className="engineering-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>Explore Arts and Humanities</h1>
          <p>Unleash creativity and critical thinking to shape your future</p>
        </div>

        {artAndHumanitiesPrograms.map((program, index) => (
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

export default ArtAndHumanities;
