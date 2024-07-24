import React from "react";

const Message = () => {
  return (
    <div className="flex items-center justify-center  overflow-x-hidden ">
      <div className="w-full max-w-4xl bg-white p-10 ">
        <div className="my-10 text-center">
          <p className="text-2xl text-left font-bold mb-10">WE LOVE TO HEAR</p>
        </div>
        <div className="flex justify-between text-left mb-10">
          <div className="w-1/3">
            <p className="text-lg text-customMediumGray">Name</p>
            <input
              type="text"
              className="w-full px-4 py-2  text-black border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none"
            />
          </div>
          <div className="w-1/3 mx-4">
            <p className="text-lg text-customMediumGray">Email</p>
            <input
              type="text"
              className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none"
            />
          </div>
          <div className="w-1/3">
            <p className="text-lg text-customMediumGray">Subject</p>
            <input
              type="text"
              className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none"
            />
          </div>
        </div>
        <div className="text-left">
          <p className="text-lg my-3 text-customMediumGray">Message</p>
          <textarea
            rows={10}
            className="w-full p-4 overflow-y-hidden border-2 border-black border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none"
          ></textarea>
        </div>
        <div className="text-right">
          <button className="bg-customYellow rounded-md hover:bg-black px-4 py-2 my-10 text-white text-lg ">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
