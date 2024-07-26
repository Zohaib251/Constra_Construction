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
        return "items-start text-left pl-4 md:pl-24";
      case "right":
        return "items-end text-right pr-4 md:pr-24";
      case "center":
      default:
        return "items-center text-center";
    }
  };

  return (
    <div>
      <div className="relative group overflow-hidden">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={`w-full h-[60vh] md:h-[780px] bg-center bg-cover duration-500 flex flex-col justify-center px-4 md:px-8 ${getAlignmentClasses(
            slides[currentIndex].alignment
          )}`}
        >
          <h2 className="text-white text-lg md:text-4xl mb-2">
            {slides[currentIndex].text}
          </h2>
          <h1 className="text-white text-xl md:text-6xl font-bold mb-3">
            {slides[currentIndex].heading}
          </h1>

          {/* Additional text and button for specific slides */}
          {slides[currentIndex].additionalText && currentIndex === 1 && (
            <div className="absolute top-60 -translate-y-1/2 font-bold bg-yellow-500 text-white px-4 py-2 rounded text-sm md:text-lg">
              <p>{slides[currentIndex].additionalText}</p>
            </div>
          )}
          {slides[currentIndex].additionalText && currentIndex === 2 && (
            <div className="font-bold text-white rounded text-sm md:text-lg">
              <p className="py-4">{slides[currentIndex].additionalText}</p>
            </div>
          )}

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center mt-4">
            {slides[currentIndex].buttons.map((buttonText, index) => (
              <button
                key={index}
                className={`px-4 py-2 md:px-6 md:py-4 rounded-sm font-bold text-sm md:text-base ${
                  buttonText === "CONTACT NOW" && currentIndex === 0
                    ? "border-2 text-white hover:bg-yellow-500 border-yellow-500"
                    : buttonText === "LEARN MORE" || buttonText === "OUR SERVICEs"
                    ? "border-2 text-white hover:bg-yellow-500 border-yellow-500"
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
          className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-1 md:left-5 text-xl md:text-2xl rounded-sm p-2 md:p-3 hover:bg-yellow-400 transition-all bg-black/40 text-white cursor-pointer icon-arrow_back_ios"
          onClick={prevSlide}
        ></div>

        <div
          className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-1 md:right-5 text-xl md:text-2xl rounded-sm p-2 md:p-3 hover:bg-yellow-400 transition-all bg-black/40 text-white cursor-pointer icon-arrow_forward_ios"
          onClick={nextSlide}
        ></div>

        {/* Dot navigation */}
        <div className="hidden md:group-hover:flex absolute bottom-5 left-1/2 transform -translate-x-1/2 space-x-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer h-2 w-2 md:h-3 md:w-3 bg-yellow-500 rounded-full ${
                currentIndex === slideIndex ? "opacity-100" : "opacity-20"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row bg-customYellow p-4 mt-[-10px] z-40 items-center">
          <p className="text-center font-bold text-xl text-white mb-4 md:mb-0 md:mr-8">
            WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION
          </p>
          <button className="bg-customGray hover:bg-black rounded-md font-bold text-white px-6 py-2 md:px-10 md:py-3">
            REQUEST QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
