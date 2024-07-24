import React from "react";

const contact_info = () => {
  return (
    <div className="justify-center text-center">
      <div className="my-12">
        <p className="text-center text-4xl font-extrabold mb-10 z-10">
          <span className="text-gray-500 font-normal text-xl">
          REACHING OUR OFFICE
          </span>
          <br />
          FIND OUR LOCATION
        </p>
      </div>
      <div className="flex justify-center space-x-5 ">
        <div className="bg-customFactGray p-14">
        <span class="icon-location text-white text-2xl bg-customYellow rounded-full p-4 "></span>
        <p className="text-white text-2xl font-bold mt-8">VISIT OUR OFFICE</p>
        <p className="text-white text-base my-3 ">9051 Constra Incorporate, USA</p>
        </div>
        <div className="bg-customFactGray py-14 px-20">
        <span class="icon-mail text-white text-2xl bg-customYellow rounded-full p-4 "></span>
        <p className="text-white text-2xl font-bold mt-8">EMAIL US</p>
        <p className="text-white text-lg my-3 ">office@Constra.com</p>
        </div>
        <div className="bg-customFactGray py-14 px-20">
        <span class="icon-phone text-white text-2xl bg-customYellow rounded-full p-4 "></span>
        <p className="text-white text-2xl font-bold mt-8">CALL US</p>
        <p className="text-white text-lg my-3 ">(+9) 847-291-4353</p>
        </div>

      </div>
    </div>
  );
};

export default contact_info;
