import React from "react";

const news = ({ imageSrc, heading }) => {
  return (
    <div>
      <div className="flex pb-8">
        <div>
          <img src={imageSrc} style={{ width: "80%" }} alt="" />
          <div className="space-x-3 my-3">
            <span class="icon-user text-customMediumGray hover:text-customYellow pr-3 border-r-2 border-customMediumGray border-opacity-20">
              {" "}
              Admin
            </span>
            <span class="icon-folder-open-o text-customMediumGray hover:text-customYellow pr-3 border-r-2 border-customMediumGray border-opacity-20">
              {" "}
              News
            </span>
            <span class="icon-calendar_today text-customMediumGray hover:text-customYellow pr-3 border-r-2 border-customMediumGray border-opacity-20">
              {" "}
              June 14, 2016
            </span>
            <span class="icon-bubble2 text-customMediumGray hover:text-customYellow">
              {" "}
              03 Comments
            </span>
          </div>

          <div className="">
            <h2 className="font-bold text-xl text-black hover:text-customYellow">
              {heading}
            </h2>
            <p className="text-customDarkGray text-sm my-3 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et
              <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              <br /> ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              <br /> eu fugiat nulla pariatur. Excepteur ...
            </p>
          </div>

          <div className="mt-5 pb-8 border-b-2 border-customGray border-opacity-10">
            <a href="/newsSingle">
              <button className="bg-customYellow rounded-sm hover:bg-black text-white font-semibold p-3 ">
                CONTINUE READING
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default news;
