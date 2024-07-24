import React from "react";

const ServiceCard = ({ image, icon, title, description, link }) => {
  return (
    <div className="w-80 bg-white flex flex-col items-center">
      <img src={image} alt="service" className="w-full h-auto mb-4 " />
      <div className="flex items-start gap-4">
        <div className="mt-6 w-20 h-16">
          <img src={icon} alt="icon" className="w-full h-full object-cover" />
        </div>
        <a href={link} className="text-left w-full">
          <div className="mt-6">
            <h2 className="font-bold text-base hover:text-customYellow">{title}</h2>
            <p className="text-sm text-customDarkGray mt-2">{description}</p>
            <p className="hover:text-customYellow my-2 text-customDarkGray flex items-center gap-1">
              <span className="icon-play_arrow"></span>
              Learn More
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
