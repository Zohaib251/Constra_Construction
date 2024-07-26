import React from "react";
import PropTypes from "prop-types";
import banner from "../../images/main/banner/banner1.jpg";

const BgImage = ({ mainText, subText }) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={banner}
        alt="Banner"
        className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] object-cover"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          {mainText}
        </h1>
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6">
          {subText}
        </p>
      </div>
    </div>
  );
};

// Prop Types
BgImage.propTypes = {
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
};

export default BgImage;

