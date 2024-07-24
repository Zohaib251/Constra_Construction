import React from "react";
import fact1 from "../../images/main/fact/fact1.png";
import fact2 from "../../images/main/fact/fact2.png";
import fact3 from "../../images/main/fact/fact3.png";
import fact4 from "../../images/main/fact/fact4.png";

const facts = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-28 bg-customFactGray py-16">
      <div className="flex flex-col items-center gap-4 ">
        <img src={fact1} alt="Total Projects" className="w-13 h-13" />
        <h1 className="text-5xl font-bold text-white">1789</h1>
        <p className="text-yellow-500 text-sm font-medium">TOTAL PROJECTS</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact2} alt="Staff Members" className="w-13 h-13" />
        <h1 className="text-5xl font-bold text-white">647</h1>
        <p className="text-yellow-500 text-sm font-medium">STAFF MEMBERS</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact3} alt="Hours of Work" className="w-13 h-13" />
        <h1 className="text-5xl font-bold text-white">4000</h1>
        <p className="text-yellow-500 text-sm font-medium">HOURS OF WORK</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src={fact4} alt="Countries Experience" className="w-13 h-13" />
        <h1 className="text-5xl font-bold text-white">44</h1>
        <p className="text-yellow-500 text-sm font-medium">
          COUNTRIES EXPERIENCE
        </p>
      </div>
    </div>
  );
};

export default facts;
