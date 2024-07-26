import React from "react";

const teamMember = ({ text, imageUrl, name, title }) => {
  return (
    <div className="flex flex-col items-center px-4 py-6 w-full sm:w-5/12 md:w-4/12 lg:w-3/12 text-customDarkGray text-center relative">
      <p className="text-sm sm:text-base border-2 border-customYellow p-3 pb-8 mb-2 relative">
        {text}
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-customYellow border-l-transparent border-r-transparent"></span>
      </p>
      <div className="mt-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-md"
        />
      </div>
      <p className="text-sm sm:text-base font-bold text-customYellow mt-2">{name}</p>
      <p className="text-sm sm:text-base text-gray-600">{title}</p>
    </div>
  );
};

export default teamMember;
