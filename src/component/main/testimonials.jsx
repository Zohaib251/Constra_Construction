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
    location: "Chairman,OKT",
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris nisi aliquip consequat.",
    image: testimonial2,
    name: "WELDON CASH",
    location: "CFO, First Choice",
  },
  {
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris nisi ut commodo consequat. ",
    image: testimonial3,
    name: "MINTER PUCHAN",
    location: "Director, AKT",
  },
];

const testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-white flex justify-center gap-48 h-96 text-black font-SANS">
      <div className=" text-customDarkGray">
        <div className="w-96  ">
          <h2 className="text-3xl font-bold py-7 text-black">Testimonials</h2>
          <div className="text-sm font-normal ">
            <span className="icon-quote-left text-customYellow text-3xl mr-5"></span>
            {slides[currentSlide].text}
          </div>
          <div className="flex">
            <div className=" p-6 left-10">
              <img
                src={slides[currentSlide].image}
                className="w-20 h-20 rounded-lg "
              />
            </div>
            <div className="mt-10 ">
              <span className="text-customYellow font-bold text-lg">
                {slides[currentSlide].name}
              </span>
              <p className="font-normal text-base">
                {slides[currentSlide].location}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2 space-x-3">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer w-2 h-2  rounded-full ${
                slideIndex === currentSlide ? "bg-customYellow" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold py-7">HAPPY CLIENTS</h2>
        <div className="grid grid-cols-3 gap-9 w-96">
          <div className="bg-white p-4 w-32 h-24 flex items-center justify-center shadow-md cursor-pointer">
            <img
              src={client1}
              alt=""
              className=" w-full h-full object-contain filter grayscale"
            />
          </div>
          <div className="bg-white p-4 w-32 h-24 flex items-center justify-center shadow-md cursor-pointer">
            <img
              src={client2}
              alt=""
              className="w-full h-full object-contain filter grayscale "
            />
          </div>
          <div className="bg-white p-4 w-32 h-24 flex items-center justify-center shadow-md cursor-pointer">
            <img
              src={client3}
              alt=""
              className="w-full h-full object-contain filter grayscale"
            />
          </div>
          <div className="bg-white p-4 w-32 h-24 flex items-center justify-center shadow-md cursor-pointer">
            <img
              src={client4}
              alt=""
              className="w-full h-full object-contain filter grayscale"
            />
          </div>
          <div className="bg-white p-4 w-32 h-24 flex items-center justify-center shadow-md cursor-pointer">
            <img
              src={client5}
              alt=""
              className="w-full h-full object-contain filter grayscale"
            />
          </div>
          <div className="bg-white p-4 w-32 h-24 flex items-center justify-center shadow-md cursor-pointer">
            <img
              src={client6}
              alt=""
              className="w-full h-full object-contain filter grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonials;
