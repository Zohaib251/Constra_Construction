import React from "react";
import PropTypes from "prop-types"; 
import banner from "../../images/main/banner/banner1.jpg";

const BgImage = ({ mainText, subText }) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img src={banner} alt="Banner" className="w-full h-auto object-cover" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-6xl font-extrabold mb-1">{mainText}</h1>
        <p className="text-white text-sm font-bold mb-8">{subText}</p>
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
