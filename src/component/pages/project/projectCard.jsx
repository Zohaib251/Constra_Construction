import React, { useState } from "react";
import Image1 from "../../../images/main/projectCategories/project4.jpg";
import Image2 from "../../../images/main/projectCategories/project5.jpg";

const ProjectCard = () => {
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
    {
      url: Image1,
    },
    {
      url: Image2,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center py-12">
      <div className="bg-white rounded-lg flex flex-col lg:flex-row">
        {/* Image Slider */}
        <div className="relative w-full lg:w-2/4 h-60 lg:h-auto">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full bg-center bg-cover duration-500"
          ></div>

          {/* Arrow buttons */}
          <div
            className="absolute top-1/2 -translate-x-0 -translate-y-1/2 left-2 text-2xl rounded-sm p-3 hover:bg-customYellow transition-all bg-black/40 text-white cursor-pointer icon-arrow_back_ios"
            onClick={prevSlide}
          ></div>

          <div
            className="absolute top-1/2 -translate-x-0 -translate-y-1/2 right-2 text-2xl rounded-sm p-3 hover:bg-customYellow transition-all bg-black/40 text-white cursor-pointer icon-arrow_forward_ios"
            onClick={nextSlide}
          ></div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/4 px-4 py-6">
          <h2 className="text-xl font-bold mb-4">Capital Teltway Building</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
            magna a varius faucibus, nisi nunc consectetur nunc, ut rhoncus nisi
            nunc vel nunc.
          </p>
          <div className="my-5">
            <h3 className="text-base font-bold">Client</h3>
            <p className="text-gray-600">Pransbay Powers Authority</p>
          </div>
          <div className="my-2">
            <h3 className="text-base font-bold">Architect</h3>
            <p className="text-gray-600">Dlarke Pelli Incorp</p>
          </div>
          <div className="my-2">
            <h3 className="text-base font-bold">Location</h3>
            <p className="text-gray-600">McLean, VA</p>
          </div>
          <div className="my-2">
            <h3 className="text-base font-bold">Size</h3>
            <p className="text-gray-600">65,000 SF</p>
          </div>
          <div className="my-2">
            <h3 className="text-base font-bold">Year Completed</h3>
            <p className="text-gray-600">2015</p>
          </div>
          <div className="my-2">
            <h3 className="text-base font-bold">Categories</h3>
            <p className="text-gray-600">Commercial, Interiors</p>
          </div>
          <div className="my-7">
            <button className="bg-customYellow p-3 rounded-sm outline-none text-white hover:bg-black">
              VIEW PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
