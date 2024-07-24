import React from "react";


const team = ({ imageUrl, name, title, additionalText }) => {
  return (
    <div>
    <div className="relative w-72 my-10 mx-2 overflow-hidden group">
    {/* Background Image */}
    <div
      className="relative w-full h-80 bg-cover bg-center transition-opacity duration-300 ease-in-out"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 flex flex-col justify-end text-center p-4 transition-opacity duration-300 ease-in-out group-hover:bg-opacity-0 group-hover:opacity-0">
             <div className="text-white">
               <h2 className="text-xl text-customYellow font-bold mb-2">
                {name}
               </h2>
               <p className="text-white font-bold">{title}</p>
             </div>
           </div>

      {/* Full Image Overlay on Hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center text-center p-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <div className="text-white text-left w-60 ml-5">
          <h2 className="text-xl text-customYellow font-bold mb-2">
            {name}
          </h2>
          <p className="text-white font-bold">{title}</p>
          <p className="text-white font-semibold mt-2">
            {additionalText}
          </p>
          <div className="mt-3 flex justify-end space-x-3 pr-36">
            <a href="/" className="text-white">
              <span className="icon icon-facebook"></span>
            </a>
            <a href="/" className="text-white">
              <span className="icon icon-twitter"></span>
            </a>
            <a href="/" className="text-white">
              <span className="icon icon-instagram"></span>
            </a>
            <a href="/" className="text-white">
              <span className="icon icon-github"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  </div>
  );
};

export default team;
