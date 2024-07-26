import React from "react";

const ServiceCard = ({ image, icon, title, description, link }) => {
  return (
    <div className="w-full sm:w-80  flex flex-col items-center p-4 rounded-lg">
      {/* Responsive Image */}
      <img src={image} alt="service" className="w-full h-auto mb-4 " />

      <div className="flex flex-col items-start gap-4 w-full">
        {/* Icon and Text */}
        <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
          <div className="w-16 h-16 flex items-center justify-center ">
            <img src={icon} alt="icon" className="w-10 h-10 object-cover" />
          </div>
          <a href={link} className="text-left w-full">
            <div className="mt-4 sm:mt-0">
              <h2 className="text-lg font-bold hover:text-customYellow">{title}</h2>
              <p className="text-sm text-customDarkGray mt-2">{description}</p>
              <p className="hover:text-customYellow my-2 text-customDarkGray flex items-center gap-1">
                <span className="icon-play_arrow"></span>
                Learn More
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
