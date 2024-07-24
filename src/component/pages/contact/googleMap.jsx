import React from "react";

const GoogleMap = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0683327894167!2d73.02382747401464!3d33.60353144129325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df946f24fc79fb%3A0xf064a7dbb93ae602!2sEzitech%20Institute!5e0!3m2!1sen!2s!4v1721736362333!5m2!1sen!2s"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="border-0 justify-center text-center w-2/3 h-2/3"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
