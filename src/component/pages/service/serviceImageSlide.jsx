import React, { useState } from "react";
import Image1 from "../../../images/main/projectCategories/project1.jpg";
import Image2 from "../../../images/main/projectCategories/project2.jpg";

const ServiceImageSlide = () => {
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

  const slides = [
    { url: Image1 },
    { url: Image2 },
  ];

  return (
    <div className="bg-white rounded-lg py-12">
      {/* Image Slider */}
      <div className="relative w-4/5 h-96"> 
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>

        {/* Arrow buttons */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 text-2xl rounded-sm p-3 hover:bg-customYellow transition-all bg-black/40 text-white cursor-pointer icon-arrow_back_ios"
          onClick={prevSlide}
        ></div>

        <div
          className="absolute top-1/2 -translate-y-1/2 right-0 text-2xl rounded-sm p-3 hover:bg-customYellow transition-all bg-black/40 text-white cursor-pointer icon-arrow_forward_ios"
          onClick={nextSlide}
        ></div>
      </div>
    </div>
  );
};

export default ServiceImageSlide;
