import react, { useState, useEffect } from "react";

const topbarHomeTwo = () => {
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
          <div className=" py-3" style={{backgroundColor:"#EAEAEA"}}>
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
  )
}

export default topbarHomeTwo
