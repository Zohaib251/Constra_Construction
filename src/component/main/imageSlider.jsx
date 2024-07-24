import React, { useState } from "react";
import bg1 from "../../images/slider_image/bg1.jpg";
import bg2 from "../../images/slider_image/bg2.jpg";
import bg3 from "../../images/slider_image/bg3.jpg";

const ImageSlider = () => {
  const slides = [
    {
      url: bg1,
      text: "17 YEARS OF EXCELLENCE",
      heading: "CONSTRUCTION INDUSTRY",
      buttons: ["OUR SERVICES", "CONTACT NOW"],
      alignment: "center",
    },
    {
      url: bg2,
      text: "WHEN SERVICE MATTERS",
      heading: "YOUR CHOICE IS SIMPLE",
      additionalText: "WORLD CLASS SERVICE",
      buttons: ["OUR SERVICEs"],
      alignment: "left",
    },
    {
      url: bg3,
      text: "Meet our engineers",
      heading: "WE BELIEVE IN SUSTAINABILITY",
      additionalText: "We will deal with your failure that determines how you achieve success",
      buttons: ["GET FREE QUOTE", "LEARN MORE"],
      alignment: "right",
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

  const getAlignmentClasses = (alignment) => {
    switch (alignment) {
      case "left":
        return "items-start text-left pl-24";
      case "right":
        return "items-end text-right pr-24";
      case "center":
      default:
        return "items-center text-center";
    }
  };

  return (
    <div>
    <div className="h-[780px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className={`w-full h-full bg-center bg-cover duration-500 flex flex-col justify-center px-4 ${getAlignmentClasses(
          slides[currentIndex].alignment
        )}`}
      >
        <h2 className="text-white text-4xl mb-2">
          {slides[currentIndex].text}
        </h2>
        <h1 className="text-white text-6xl font-bold mb-3">
          {slides[currentIndex].heading}
        </h1>

        {/* Additional text and button for specific slides */}
        {slides[currentIndex].additionalText && currentIndex === 1 && (
          <div
            className={`absolute top-60 font-bold bg-yellow-500 text-white px-4 py-2 rounded`}
          >
            <p className="text-lg">{slides[currentIndex].additionalText}</p>
          </div>
        )}
        {slides[currentIndex].additionalText && currentIndex === 2 && (
          <div
            className={`font-bold text-white pb-2 rounded`}
          >
            <p className="text-lg py-4">{slides[currentIndex].additionalText}</p>
          </div>
        )}

        <div className="flex space-x-5 justify-center">
          {slides[currentIndex].buttons.map((buttonText, index) => (
            <button
              key={index}
              className={`px-6 py-4 rounded-sm font-bold ${
                buttonText === "CONTACT NOW" && currentIndex === 0
                  ? "border-2 text-white hover:bg-yellow-500 border-yellow-500 border"
                  : buttonText === "LEARN MORE" || buttonText === "OUR SERVICEs"
                  ? "border-2 text-white hover:bg-yellow-500 border-yellow-500 border"
                  : "bg-yellow-500 hover:bg-gray-950 text-white"
              }`}
            >
              {buttonText}
            </button>
          ))}
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

      {/* Dot navigation */}
      <div className="hidden group-hover:flex absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer h-2 w-2 mt-[-40px] bg-yellow-500 rounded-full ${
              currentIndex === slideIndex ? "opacity-100" : "opacity-20"
            }`}
          ></div>
        ))}
      </div>
        
    </div>


    
    <div className="flex justify-center">
        <div className=" flex justify-evenly bg-customYellow p-4 mt-[-40px] z-40">
          <p className=" text-center mt-3 font-bold text-xl  text-white mr-80">
          WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION
          </p>
          <button className="bg-customGray hover:bg-black rounded-md font-bold  text-white px-10 py-3">REQUEST QUOTE</button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
