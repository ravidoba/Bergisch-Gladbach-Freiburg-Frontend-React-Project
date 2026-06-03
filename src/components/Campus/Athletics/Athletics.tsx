import React from "react";
import "../../../global.css";

// Import images for engineering
import engineeringBanner from "../../../assets/Campus/AthleticsImages/Athletics Banner.png";
//
import BasketballImage from "../../../assets/Campus/AthleticsImages/Basketball.png";
import FootballImage from "../../../assets/Campus/AthleticsImages/Football.png";
import GolfImage from "../../../assets/Campus/AthleticsImages/Golf.png";
import HighJumpImage from "../../../assets/Campus/AthleticsImages/HighJump.png";
import IceHockeyImage from "../../../assets/Campus/AthleticsImages/IceHockey.png";
import LongJumpImage from "../../../assets/Campus/AthleticsImages/LongJump.png";
import SprintImage from "../../../assets/Campus/AthleticsImages/Race.png";
import ShotPutImage from "../../../assets/Campus/AthleticsImages/ShotPut.png";
import TennisImage from "../../../assets/Campus/AthleticsImages/Tennis.png";

const engineering: React.FC = () => {
  const engineeringEvents = [
    {
      title: "Football",
      image: FootballImage,
      description: `Football is a game of strategy, teamwork, and athleticism, where two teams battle to score points by advancing the ball into the opponent's end zone. The sport demands quick thinking, physical strength, and precise coordination, making it a thrilling combination of power and finesse on the field.`,
    },
    {
      title: "Golf",
      image: GolfImage,
      description: `In golf, players aim to complete a course in as few strokes as possible, navigating challenges such as sand traps and water hazards. This sport combines precision, patience, and mental focus, as athletes carefully plan each shot while contending with the elements.`,
    },
    {
      title: "Tennis",
      image: TennisImage,
      description: `Tennis is a fast-paced game played on various surfaces, where players use rackets to hit the ball over the net and into the opponent's court. The sport requires agility, endurance, and strategic thinking, as athletes strive to outmaneuver their rivals with precision and power.`,
    },
    {
      title: "Ice Hockey",
      image: IceHockeyImage,
      description: `Ice hockey is an intense and fast-moving sport played on ice, where teams use sticks to drive a puck into the opponent's goal. The game demands exceptional skating skills, quick reflexes, and teamwork, with players constantly adapting to the dynamic flow of the match.`,
    },
    {
      title: "100m Sprint",
      image: SprintImage,
      description: `The 100m sprint is a fast-paced race that tests the speed and explosive power of athletes. It is one of the most thrilling events, where participants compete for the fastest time, showcasing their sheer velocity and determination.`,
    },
    {
      title: "Long Jump",
      image: LongJumpImage,
      description: `Athletes in the long jump combine speed, strength, and technique to leap as far as possible into a sandpit. Precision in takeoff and landing are key, making it a true test of skill and athleticism.`,
    },
    {
      title: "Shot Put",
      image: ShotPutImage,
      description: `Athletes throw a heavy spherical object (shot) as far as possible in this power-driven event. Precision, strength, and technique are key factors in achieving maximum distance, making it a true test of raw power.`,
    },
    {
      title: "High Jump",
      image: HighJumpImage,
      description: `The high jump involves athletes leaping over a bar set at varying heights. With a focus on timing and technique, participants aim to clear the bar with grace, using a unique jumping technique to achieve maximum height.`,
    },
    {
      title: "Basketball",
      image: BasketballImage,
      description: `Basketball is an energetic team sport that combines speed, strategy, and skill. Players work together to score points by shooting the ball through the opposing team's hoop. With fast breaks, strategic plays, and a focus on teamwork, basketball fosters a sense of unity and competitive spirit on campus.`,
    },
  ];

  return (
    <div>
      
      {/* Banner Image Below Navbar */}
      <div className="engineering-banner">
        <img src={engineeringBanner} alt="BusinessManagement Banner" />
        <div className="banner-text">
          <h1>Athletics</h1>
          <p>Experience the thrill of competition and achievement in the world of Athletics</p>
        </div>
      </div>

      <div className="engineering-container">
        {/* Startnig Conetnt */}
        <div className="centered-content">
          <h1>Athletics Events</h1>
          <p>Celebrate athletic excellence through a wide variety of event</p>
        </div>

        {engineeringEvents.map((event, index) => (
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

export default engineering;
