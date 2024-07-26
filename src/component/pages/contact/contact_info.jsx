import React from "react";

const contact_info = () => {
  return (
    <div className="px-4 py-8 md:px-8 md:py-12">
      <div className="text-center mb-12">
        <p className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-10">
          <span className="text-gray-500 font-normal text-lg md:text-xl">
            REACHING OUR OFFICE
          </span>
          <br />
          FIND OUR LOCATION
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
        <div className="bg-customFactGray p-6 md:p-14 flex flex-col items-center text-center">
          <span className="icon-location text-white text-2xl bg-customYellow rounded-full px-4 py-3"></span>
          <p className="text-white text-xl md:text-2xl font-bold mt-4 md:mt-6">
            VISIT OUR OFFICE
          </p>
          <p className="text-white text-sm md:text-base my-2">
            9051 Constra Incorporate, USA
          </p>
        </div>
        <div className="bg-customFactGray p-6 md:py-14 md:px-20 flex flex-col items-center text-center">
          <span className="icon-mail text-white text-2xl bg-customYellow rounded-full px-4 py-3"></span>
          <p className="text-white text-xl md:text-2xl font-bold mt-4 md:mt-6">
            EMAIL US
          </p>
          <p className="text-white text-sm md:text-base my-2">
            office@Constra.com
          </p>
        </div>
        <div className="bg-customFactGray p-6 md:py-14 md:px-20 flex flex-col items-center text-center">
          <span className="icon-phone text-white text-2xl bg-customYellow rounded-full px-4 py-3"></span>
          <p className="text-white text-xl md:text-2xl font-bold mt-4 md:mt-6">
            CALL US
          </p>
          <p className="text-white text-sm md:text-base my-2">
            (+9) 847-291-4353
          </p>
        </div>
      </div>
    </div>
  );
};

export default contact_info;
