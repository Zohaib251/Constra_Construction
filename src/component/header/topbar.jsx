import react, { useState, useEffect } from "react";

import logo from "../../images/header/logo.png";

const topbar = () => {
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
      <div className="py-3" style={{backgroundColor:"#EAEAEA"}}>
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 flex items-center">
            <span className="text-gray-600 ml-24 icon icon-location">
              9051 Constra Incorporate, USA
            </span>
          </div>
          <div className="w-full md:w-1/2 flex justify-end space-x-6 pr-24">
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
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/4 flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-10 ml-24" />
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-end space-x-8">
            <div className="text-left border-r-2 border-customLightGray border-opacity-50 pr-4 ">
              <span className="block text-gray-600">Call Us</span>
              <span className="block font-bold text-black">
                (+9) 847-291-4353
              </span>
            </div>
            <div className="text-left border-r-2 border-customLightGray border-opacity-50 pr-4">
              <span className="block text-gray-600">Email Us</span>
              <span className="block font-bold text-black">
                office@Constra.com
              </span>
            </div>
            <div className="text-left">
              <span className="block text-gray-600">Global Certificate</span>
              <span className="block font-bold text-black">ISO 9001:2017</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex justify-center md:justify-items-start">
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

export default topbar;
