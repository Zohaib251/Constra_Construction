import React, { useState } from "react";
import Navbar from "../../../header/navbar.jsx";
import Topbar from "../../../header/topbar.jsx";
import Bg_Image from "../../../main/bg_Image.jsx";
import AboutUs from "./AboutUS.jsx";
import Facts from "../../../main/facts.jsx";
import Team from "./team.jsx";
import AboutUS from "../../../footer/aboutUS.jsx";
import Footer from "../../../footer/footer.jsx";
import team1 from "../../../../images/main/team/team1.jpg";
import team2 from "../../../../images/main/team/team2.jpg";
import team3 from "../../../../images/main/team/team3.jpg";
import team4 from "../../../../images/main/team/team4.jpg";
import team5 from "../../../../images/main/team/team5.jpg";
import team6 from "../../../../images/main/team/team6.jpg";
const about = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePrevious = () => {
    setIsExpanded(false);
  };

  const handleNext = () => {
    setIsExpanded(true);
  };

  const cards = [
    {
      imageUrl: team1,
      name: "NATS STENMAN",
      title: "Chief Operating Officer",
      additionalText:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      imageUrl: team2,
      name: "ANGELA LYOUER",
      title: "Innovation Officer",
      additionalText:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      imageUrl: team3,
      name: "MARK COUTER",
      title: "Safety Officer",
      additionalText:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      imageUrl: team4,
      name: "AYESHA STEWART",
      title: "Finance Officer",
      additionalText:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      imageUrl: team5,
      name: "DAVE CLARKTE",
      title: "Civil Engineer",
      additionalText:
        "Nats Stenman began his career in construction with boots on the ground",
    },
    {
      imageUrl: team6,
      name: "ELTON JOB",
      title: "Site Supervisor",
      additionalText:
        "Nats Stenman began his career in construction with boots on the ground",
    },
  ];
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="ABOUT" subText="HOME / COMPANY / ABOUT US" />
      <AboutUs />
      <Facts />
      <div className="my-12">
        <p className="text-center text-4xl font-bold mb-10 z-10">
          <span className="text-gray-500 font-normal text-xl">
            QUALITY SERVICE
          </span>
          <br />
          PROFESSIONAL TEAM
        </p>
      </div>

      <div
        className="flex flex-col px-4 sm:px-8 lg:px-12"
        style={{ width: "100%" }}
      >
        <div
          className={`flex overflow-x-auto hide-scrollbar transition-transform duration-500`}
        >
          {cards.slice(0, isExpanded ? cards.length : 6).map((card, index) => (
            <Team
              key={index}
              imageUrl={card.imageUrl}
              name={card.name}
              title={card.title}
              additionalText={card.additionalText}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8 sm:mt-12 bg-white">
          <div className="flex">
            <button
              onClick={handlePrevious}
              className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center border-2 border-customDarkGray text-customGray hover:bg-customMediumGray hover:text-white transition-colors duration-300"
            >
              <span className="icon-arrow_back_ios text-xs sm:text-base"></span>
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center border-2 border-customDarkGray text-customGray hover:bg-customMediumGray hover:text-white transition-colors duration-300 border-l-0"
            >
              <span className="icon-arrow_forward_ios text-xs sm:text-base"></span>
            </button>
          </div>
        </div>
      </div>
      {/* <Team /> */}
      <AboutUS />
      <Footer />
    </div>
  );
};

export default about;
