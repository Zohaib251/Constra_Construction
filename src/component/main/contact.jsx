import React from "react";

const contact = () => {
  return (
    <div className="flex font-SANS ">
      {/*Left Side  */}
      <div className="w-3/5 pl-20  bg-customYellow py-5">
        <div className="text-right pr-20">
          <h2 className="text-xl pr-14 font-bold">CAN WE HELP?</h2>
          <p className="text-2xl text-white font-medium">(+9) 847-291-4353</p>
        </div>
      </div>
      {/*Right Side  */}
      <div className="py-5  flex w-full bg-customFactGray  text-white">
        <div className="flex pl-20 gap-28">
          <div className="">
            <h2 className="text-xl font-bold ">NEWSLETTER SIGN-UP</h2>
            <p className="">Latest updates and news</p>
          </div>
          <div>
            <input
              type="email"
              placeholder="Your email and hit enter"
              className="pr-32  px-3 py-2 text-left  text-black border bg-customFactGray border-gray-700 focus:outline-none  focus:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
