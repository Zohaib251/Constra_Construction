import React, { useState } from "react";
import slideImage1 from "../../../../images/slider_image/slide-page1.jpg";
import slideImage2 from "../../../../images/slider_image/slide-page2.jpg";
import slideImage3 from "../../../../images/slider_image/slide-page3.jpg";

const AboutUS = () => {
  const slides = [
    {
      url: slideImage1,
      heading: "LEADERSHIP",
      alignment: "center",
    },
    {
      url: slideImage2,
      heading: "RELATIONSHIPS",
      alignment: "center",
    },
    {
      url: slideImage3,
      heading: "PERFORMANCE",
      alignment: "center",
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
        return "items-start text-left pl-4 md:pl-8";
      case "right":
        return "items-end text-right pr-4 md:pr-8";
      case "center":
      default:
        return "items-center text-center";
    }
  };

  return (
    <div className="my-10 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
        <div className="w-full md:w-3/6">
          <div className="my-4">
            <h2 className="text-xl md:text-2xl font-bold">WHO WE ARE</h2>
          </div>
          <div className="text-customDarkGray">
            <p>
              When Gregor Samsa woke from troubled dreams, he found himself
              transformed in his bed into a horrible vermin.
            </p>
          </div>
          <div className="flex bg-gray-100 p-4 md:p-5 mt-8 border-l-4 border-customYellow">
            <div className="mt-[-20px] mr-2 md:mr-4">
              <span className="icon-quote-left text-3xl md:text-4xl text-customLightGray"></span>
            </div>
            <div>
              <blockquote className="text-gray-600 text-sm md:text-base">
                <p>
                  Semporibus autem quibusdam et aut officiis debitis aut rerum
                  est aut optio cumque nihil necessitatibus autemn ec tincidunt
                  nunc posuere ut
                </p>
              </blockquote>
            </div>
          </div>
          <div className="my-8 text-customDarkGray text-sm md:text-base">
            <p>
              He lay on his armour-like back, and if he lifted. Ultercetes
              sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. If you are going to use a passage of
              Lorem Ipsum, you need to be sure there isn’t anything embarrassing.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-2/6 h-64 md:h-80">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className={`w-full h-full bg-center bg-cover duration-500 flex flex-col justify-center px-2 md:px-4 ${getAlignmentClasses(
              slides[currentIndex].alignment
            )}`}
          >
            <h1 className="text-white text-xl md:text-3xl font-bold mb-2 md:mb-3 p-2" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", width: "70%", maxWidth: "300px", margin: "0 auto" }}>
              {slides[currentIndex].heading}
            </h1>
          </div>

          {/* Arrow buttons */}
          <div
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 text-xl md:text-2xl rounded-sm p-2 md:p-3 hover:bg-customYellow transition-all bg-black/40 text-white cursor-pointer icon-arrow_back_ios"
            onClick={prevSlide}
          ></div>

          <div
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 text-xl md:text-2xl rounded-sm p-2 md:p-3 hover:bg-customYellow transition-all bg-black/40 text-white cursor-pointer icon-arrow_forward_ios"
            onClick={nextSlide}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
