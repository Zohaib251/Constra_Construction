import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row font-SANS">
      {/* Left Side */}
      <div className="w-full md:w-3/5 bg-customYellow py-5 px-4 md:px-20">
        <div className="text-center md:text-right">
          <h2 className="text-xl font-bold">CAN WE HELP?</h2>
          <p className="text-2xl text-white font-medium">(+9) 847-291-4353</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full bg-customFactGray py-5 px-4 md:px-20 text-white flex flex-col md:flex-row items-center md:items-start gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-bold">NEWSLETTER SIGN-UP</h2>
          <p className="text-sm">Latest updates and news</p>
        </div>
        <div className="flex-1">
          <input
            type="email"
            placeholder="Your email and hit enter"
            className="w-full px-3 py-2 text-black border bg-customFactGray border-gray-700 focus:outline-none focus:bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

