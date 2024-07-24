import React, { useState } from "react";
import bg4 from "../../../images/slider_image/bg4.jpg";
import bg5 from "../../../images/slider_image/bg5.jpg";

const imageSlider = () => {
  const slides = [
    {
      url: bg4,
      text: "17 YEARS OF EXCELLENCE",
      heading: "CONSTRUCTION INDUSTRY",
      buttons: ["OUR SERVICES"],
      alignment: "left",
    },
    {
      url: bg5,
      text: "WHEN SERVICE MATTERS",
      heading: "YOUR CHOICE IS SIMPLE",
      buttons: ["KNOW US"],
      alignment: "left",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="h-[780px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={` w-full h-full bg-center bg-cover duration-500 flex  flex-col justify-center px-4 
          `}
        >
          <div
            className="bg-black m-20 p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", width: "50%", }}
          >
            <h2 className="text-white text-xl mb-2">
              {slides[currentIndex].text}
            </h2>
            <h1 className="text-white text-4xl font-bold mb-3">
              {slides[currentIndex].heading}
            </h1>
            <p className="text-white text-base mb-4">
              You have ideas, goals, and dreams. We have a culturally diverse,
              forward thinking
              <br /> team looking for talent like
            </p>

            <div className="flex space-x-5 justify-left">
              {slides[currentIndex].buttons.map((buttonText, index) => (
                <button
                  key={index}
                  className={`px-6 py-4 rounded-sm font-bold bg-customYellow text-white hover:bg-black`}
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow buttons */}
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-sm p-3 hover:bg-yellow-400 transition-all bg-black/40 text-white cursor-pointer icon-arrow_back_ios"
          onClick={prevSlide}
        ></div>

        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-sm p-3 hover:bg-yellow-400 transition-all bg-black/40 text-white cursor-pointer icon-arrow_forward_ios"
          onClick={nextSlide}
        ></div>
      </div>

      <div className="mb-20 justify-center">
        <div
          className=" flex justify-center p-5 "
          style={{ backgroundColor: "#272D33" }}
        >
          <p className=" text-center mt-3 font-bold text-xl  text-white mr-80">
            WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION
          </p>
          <button className="bg-customYellow hover:bg-black rounded-md font-bold  text-white px-10 py-3">
            REQUEST QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default imageSlider;
