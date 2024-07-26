import React, { useState } from "react";
import testimonial1 from "../../images/main/testimonials/testimonial1.png";
import testimonial2 from "../../images/main/testimonials/testimonial2.png";
import testimonial3 from "../../images/main/testimonials/testimonial3.png";
import client1 from "../../images/main/testimonials/client1.png";
import client2 from "../../images/main/testimonials/client2.png";
import client3 from "../../images/main/testimonials/client3.png";
import client4 from "../../images/main/testimonials/client4.png";
import client5 from "../../images/main/testimonials/client5.png";
import client6 from "../../images/main/testimonials/client6.png";

const slides = [
  {
    text: "Question ran over her cheek When she reached the first hills of the Italic Mountains she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road",
    image: testimonial1,
    name: "GABRIEAL DENNIS",
    location: "Chairman, OKT",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris nisi aliquip consequat.",
    image: testimonial2,
    name: "WELDON CASH",
    location: "CFO, First Choice",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris nisi ut commodo consequat.",
    image: testimonial3,
    name: "MINTER PUCHAN",
    location: "Director, AKT",
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white p-4 md:p-8 text-black font-SANS">
      <div className="flex flex-col md:flex-row md:gap-12 items-center md:justify-center">
        {/* Testimonials */}
        <div className="flex flex-col w-full md:w-96">
          <h2 className="text-2xl md:text-3xl font-bold py-4 text-black">Testimonials</h2>
          <div className="text-sm md:text-base font-normal mb-4">
            <span className="icon-quote-left text-customYellow text-2xl md:text-3xl mr-2"></span>
            {slides[currentSlide].text}
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={slides[currentSlide].image}
              alt="Testimonial"
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
            />
            <div>
              <span className="text-customYellow font-bold text-lg md:text-xl">
                {slides[currentSlide].name}
              </span>
              <p className="text-sm md:text-base font-normal">
                {slides[currentSlide].location}
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`cursor-pointer w-2 h-2 rounded-full ${
                  slideIndex === currentSlide ? "bg-customYellow" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Happy Clients */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-xl md:text-2xl font-bold py-4">HAPPY CLIENTS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-3">
            <div className="bg-white p-2 md:p-4 flex items-center justify-center shadow-md cursor-pointer">
              <img
                src={client1}
                alt="Client"
                className="w-16 h-16 md:w-32 md:h-24 object-contain filter grayscale"
              />
            </div>
            <div className="bg-white p-2 md:p-4 flex items-center justify-center shadow-md cursor-pointer">
              <img
                src={client2}
                alt="Client"
                className="w-16 h-16 md:w-32 md:h-24 object-contain filter grayscale"
              />
            </div>
            <div className="bg-white p-2 md:p-4 flex items-center justify-center shadow-md cursor-pointer">
              <img
                src={client3}
                alt="Client"
                className="w-16 h-16 md:w-32 md:h-24 object-contain filter grayscale"
              />
            </div>
            <div className="bg-white p-2 md:p-4 flex items-center justify-center shadow-md cursor-pointer">
              <img
                src={client4}
                alt="Client"
                className="w-16 h-16 md:w-32 md:h-24 object-contain filter grayscale"
              />
            </div>
            <div className="bg-white p-2 md:p-4 flex items-center justify-center shadow-md cursor-pointer">
              <img
                src={client5}
                alt="Client"
                className="w-16 h-16 md:w-32 md:h-24 object-contain filter grayscale"
              />
            </div>
            <div className="bg-white p-2 md:p-4 flex items-center justify-center shadow-md cursor-pointer">
              <img
                src={client6}
                alt="Client"
                className="w-16 h-16 md:w-32 md:h-24 object-contain filter grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
