import React, { useState, useEffect } from "react";

const TopbarHomeTwo = () => {
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

export default TopbarHomeTwo;
