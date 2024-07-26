import React, { useState, useEffect } from "react";

import logo from "../../images/header/logo.png";

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Topbar */}
      <div className="py-3 bg-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-around px-4 md:px-0">
          <div className="w-full md:w-auto flex items-center mb-2 md:mb-0">
            <span className="text-gray-600 icon icon-location">
              9051 Constra Incorporate, USA
            </span>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end space-x-6">
            <a href="/" className="text-gray-800">
              <span className="icon icon-facebook"></span>
            </a>
            <a href="/" className="text-gray-800">
              <span className="icon icon-twitter"></span>
            </a>
            <a href="/" className="text-gray-800">
              <span className="icon icon-instagram"></span>
            </a>
            <a href="/" className="text-gray-800">
              <span className="icon icon-github"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-around px-4 md:px-0">
          <div className="w-full md:w-auto flex items-center mb-4 md:mb-0">
            <a href="/">
              <img src={logo} alt="Logo" className="h-10" />
            </a>
          </div>
          <div className="w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <div className="text-center md:text-left border-b md:border-b-0 md:border-r-2 border-gray-300 md:border-opacity-50 pb-4 md:pb-0 pr-0 md:pr-4">
              <span className="block text-gray-600">Call Us</span>
              <span className="block font-bold text-black">
                (+9) 847-291-4353
              </span>
            </div>
            <div className="text-center md:text-left border-b md:border-b-0 md:border-r-2 border-gray-300 md:border-opacity-50 pb-4 md:pb-0 pr-0 md:pr-4">
              <span className="block text-gray-600">Email Us</span>
              <span className="block font-bold text-black">
                office@Constra.com
              </span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-gray-600">Global Certificate</span>
              <span className="block font-bold text-black">ISO 9001:2017</span>
            </div>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <a href="/contact">
              <button className="bg-customYellow font-bold text-white px-6 py-2 rounded hover:bg-gray-800 hover:text-yellow-400 transition duration-300">
                Get A Quote
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div className="fixed bottom-5 right-5 flex items-center justify-start z-50">
          <div
            className="bg-black px-3 py-1 cursor-pointer"
            onClick={scrollToTop}
          >
            <span className="icon-angle-double-up font-bold hover:text-white text-customYellow text-2xl"></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
