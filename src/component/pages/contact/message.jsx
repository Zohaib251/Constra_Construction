import React from "react";

const Message = () => {
  return (
    <div className="flex items-center justify-center px-4 py-8 overflow-x-hidden">
      <div className="w-full max-w-4xl bg-white p-6 md:p-10">
        <div className="my-6 text-center">
          <p className="text-xl md:text-2xl font-bold mb-6 md:mb-10">WE LOVE TO HEAR</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-10">
          <div className="w-full md:w-1/3">
            <p className="text-lg text-customMediumGray">Name</p>
            <input
              type="text"
              className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30 focus:outline-none"
            />
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-lg text-customMediumGray">Email</p>
            <input
              type="text"
              className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30 focus:outline-none"
            />
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-lg text-customMediumGray">Subject</p>
            <input
              type="text"
              className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30 focus:outline-none"
            />
          </div>
        </div>
        <div className="text-left mb-6 md:mb-10">
          <p className="text-lg text-customMediumGray">Message</p>
          <textarea
            rows={6}
            className="w-full p-4 border-2 border-black border-opacity-10 focus:border-customYellow focus:border-opacity-30 focus:outline-none"
          ></textarea>
        </div>
        <div className="text-right">
          <button className="bg-customYellow rounded-md hover:bg-black px-6 py-2 text-white text-lg">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
