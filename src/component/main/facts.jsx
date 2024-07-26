import React from "react";
import fact1 from "../../images/main/fact/fact1.png";
import fact2 from "../../images/main/fact/fact2.png";
import fact3 from "../../images/main/fact/fact3.png";
import fact4 from "../../images/main/fact/fact4.png";

const Facts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-28 bg-customFactGray py-16 px-4">
      <div className="flex flex-col items-center gap-4">
        <img src={fact1} alt="Total Projects" className="w-14 h-14 " />
        <h1 className="text-3xl md:text-5xl font-bold text-white">1789</h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">TOTAL PROJECTS</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact2} alt="Staff Members" className="w-14 h-14 " />
        <h1 className="text-3xl md:text-5xl font-bold text-white">647</h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">STAFF MEMBERS</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact3} alt="Hours of Work" className="w-14 h-14 " />
        <h1 className="text-3xl md:text-5xl font-bold text-white">4000</h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">HOURS OF WORK</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact4} alt="Countries Experience" className="w-14 h-14 " />
        <h1 className="text-3xl md:text-5xl font-bold text-white">44</h1>
        <p className="text-xs md:text-sm text-yellow-500 font-medium">COUNTRIES EXPERIENCE</p>
      </div>
    </div>
  );
};

export default Facts;
