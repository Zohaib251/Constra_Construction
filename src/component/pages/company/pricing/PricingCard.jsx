import React from "react";

function PricingCard({ title, price, bgColor, buttonColor }) {
  return (
    <div
      className={`rounded-md shadow-md justify-center text-center ${bgColor}`}
    >
      <div
        className={`p-4 ${
          bgColor === "bg-customYellow" ? "bg-customYellow" : "bg-black"
        }`}
      >
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="text-5xl font-extrabold text-white mb-4">${price}</div>
        <div className="text-lg text-white mb-4">/MONTH</div>
      </div>
      <div className="bg-gray-100 pb-14">
        <ul className="list-none text-gray-700">
          <li className="p-4 border-b-2 border-black border-opacity-5 text-customDarkGray">
            Pre-construction feasibility
          </li>
          <li className="p-4 border-b-2 border-black border-opacity-5 text-customDarkGray">
            On-site representation
          </li>
          <li className="p-4 border-b-2 border-black border-opacity-5 text-customDarkGray">
            Quality control inspections
          </li>
          <li className="p-4 border-b-2 border-black border-opacity-5 text-customDarkGray">
            Schedule claim preparation/defense
          </li>
          <li className="p-4 border-b-2 border-black border-opacity-5 text-customDarkGray">
            Project phasing development
          </li>
        </ul>
        <button
          className={`mt-6 ${buttonColor} hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
