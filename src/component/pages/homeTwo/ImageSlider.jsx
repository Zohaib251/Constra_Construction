import React, { useState } from "react";
import bg4 from "../../../images/slider_image/bg4.jpg";
import bg5 from "../../../images/slider_image/bg5.jpg";

const ImageSlider = () => {
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
      <div className="relative overflow-hidden">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className={`w-full h-[50vh] md:h-[780px] bg-center bg-cover flex flex-col justify-center px-4 md:px-10 transition-all duration-500`}
        >
          <div
            className="bg-black p-2 md:p-4 mx-4 md:mx-20 md:w-1/2"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <h2 className="text-white  text-base md:text-xl md:mb-2">
              {slides[currentIndex].text}
            </h2>
            <h1 className="text-white text-xl md:text-4xl font-bold md:mb-3">
              {slides[currentIndex].heading}
            </h1>
            <p className="text-white text-xs md:text-base mb-4">
              You have ideas, goals, and dreams. We have a culturally diverse,
              forward thinking team looking for talent like
            </p>
            <div className="flex flex-wrap gap-2 justify-start">
              {slides[currentIndex].buttons.map((buttonText, index) => (
                <button
                  key={index}
                  className="px-2 text-sm md:text-lg py-1 md:px-6 md:py-4 rounded-sm font-bold bg-customYellow text-white hover:bg-black"
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow buttons */}
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 md:left-5 text-xl md:text-2xl rounded-sm p-2 md:p-3 hover:bg-yellow-400 transition-all bg-black/40 text-white cursor-pointer icon-arrow_back_ios"
          onClick={prevSlide}
        ></div>

        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 md:right-5 text-xl md:text-2xl rounded-sm p-2 md:p-3 hover:bg-yellow-400 transition-all bg-black/40 text-white cursor-pointer icon-arrow_forward_ios"
          onClick={nextSlide}
        ></div>
      </div>

      <div className=" mb-10">
        <div className="flex flex-col md:flex-row md:w-full items-center md:space-x-20 justify-center bg-customGray p-4 ">
          <p className="text-center font-bold text-lg md:text-xl text-white mb-4 md:mb-0">
            WE UNDERSTAND YOUR NEEDS ON CONSTRUCTION
          </p>
          <button className="bg-customYellow hover:bg-black rounded-md font-bold text-white px-6 py-3 md:px-10 md:py-3">
            REQUEST QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
