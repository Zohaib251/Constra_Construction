import React from "react";
import Sidebar from "./sidebar.jsx";
import image1 from "../../../images/main/recentProject/recentProject1.jpg";
import person1 from "../../../images/main/testimonials/testimonial1.png";
import person2 from "../../../images/main/testimonials/testimonial2.png";
import person3 from "../../../images/main/testimonials/testimonial3.png";
const newsDescription = () => {
  return (
    <div className="flex my-10 space-x-20  justify-center ">
      <div className="flex pb-8">
        <div>
          <img src={image1} style={{ width: "85%" }} alt="" />
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
              We Just Completed $17.6 Million Medical Clinic In Mid-Missouri
            </h2>
            <p className="text-customDarkGray text-sm my-3 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et
              <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip
              <br /> ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore
              <br /> eu fugiat nulla pariatur.
              <br />
              <br />
              Kucididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco
              <br /> laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit
              <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur
              Lorem ipsum dolor sit amet, consectetur adipisicing
              <br /> elit, sed do
              <br />
              <br />
              Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
              <br /> exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in
              <br /> reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat
              <br /> cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis
              <br /> unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium.
            </p>

            {/*BlockQuote  */}
            <div
              className="flex bg-gray-100 py-5 pl-5 mt-8 border-l-4 border-customYellow"
              style={{ width: "85%" }}
            >
              <div className="mt-[-20px] mr-4">
                <span class="icon-quote-left text-4xl text-customLightGray"></span>
              </div>
              <div>
                <blockquote className="text-gray-600 text-xs ">
                  <p>
                    Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud <br /> exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                  <p className="text-xs">- Anger Mathe</p>
                </blockquote>
              </div>
            </div>
            <p className="text-customDarkGray text-sm my-3">
              <br />
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta
              <br /> sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia
              <br /> consequuntur magni dolores eos quira tione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui
              <br /> dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora
              <br /> incidunt ue magnam aliquam quaerat voluptatem.
            </p>
            {/*Share Button */}
            <div className="flex my-3 space-x-52">
              <div className="flex my-3 space-x-2">
                <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-24 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
                  Construction
                </div>
                <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
                  Safety
                </div>
                <div className="border-2 py-1 text-sm border-customMediumGray border-opacity-20 w-20 text-center text-customDarkGray cursor-pointer hover:bg-customYellow ">
                  Planning
                </div>
              </div>
              <div className="my-3">
                <div className="flex  space-x-2">
                  <p className="text-customDarkGray text-sm">Share: </p>
                  <span class="icon-facebook bg-blue-900 cursor-pointer text-xs px-2 py-1 text-white"></span>
                  <span class="icon-twitter bg-sky-400 cursor-pointer text-xs px-2 py-1 text-white"></span>
                  <span class="icon-google-plus3 bg-red-700 cursor-pointer text-xs px-2 py-1 text-white "></span>
                  <span class="icon-linkedin-square bg-cyan-600 cursor-pointer text-xs px-2 py-1 text-white "></span>
                </div>
              </div>
            </div>

            <div
              className="border-2 border-black border-opacity-10 container p-3"
              style={{ width: "87%" }}
            >
              <div className="flex space-x-4">
                <img src={person1} alt="Profile Picture" className="w-24" />
                <div className="">
                  <h2 className="text-xl font-semibold">
                    ELTON THEMEN{" "}
                    <span className="text-xs text-customMediumGray font-semibold border-l-2 border-customMediumGray border-opacity-25 pl-2">
                      {" "}
                      SITE ENGINEER
                    </span>
                  </h2>
                  <p className="text-sm text-customDarkGray">
                    Lisicing elit, sed do eiusmod tempor ut labore et dolore
                    magna aliqua. Ut enim
                    <br /> ad vene minim veniam, quis nostrud exercitation nisi
                    ex ea commodo.
                    <br />
                    <br />
                    Website: http://www.example.com
                  </p>
                </div>
              </div>
            </div>

            {/*Comments  */}
            <h2 className="font-bold text-xl my-6 ">07 COMMENTS</h2>
            {/*Comment 1  */}
            <div
              className="border-b-2 border-black border-opacity-5 mb-3 container p-3"
              style={{ width: "87%" }}
            >
              <div className="flex space-x-4">
                <img
                  src={person1}
                  alt="Profile Picture"
                  className="w-18 h-16"
                />
                <div className="">
                  <h2 className="text-lg font-semibold">
                    Michelle Aimber
                    <span className="text-xs text-customMediumGray font-semibold  pl-52">
                      January 17, 2016 at 1:38 pm
                    </span>
                  </h2>
                  <p className="text-sm my-4 text-customDarkGray">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                    <br /> incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis
                    <br /> nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                    <br /> Duis aute irure dolor in reprehen
                  </p>
                  <p className="font-bold mt-3 hover:text-customYellow">
                    Reply
                  </p>
                </div>
              </div>
            </div>
            {/*Comment 2  */}
            <div
              className="border-b-2 ml-20 border-black border-opacity-5 mb-3 container p-3"
              style={{ width: "78%" }}
            >
              <div className="flex space-x-4">
                <img
                  src={person2}
                  alt="Profile Picture"
                  className="w-18 h-16"
                />
                <div className="">
                  <h2 className="text-lg font-semibold">
                    Tom Harnandez
                    <span className="text-xs text-customMediumGray font-semibold  pl-32">
                      January 17, 2016 at 1:38 pm
                    </span>
                  </h2>
                  <p className="text-sm my-4 text-customDarkGray">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                    <br /> tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim
                    <br /> veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea
                    <br /> commodo consequat. Duis aute irure dolor in reprehen
                  </p>
                  <p className="font-bold mt-3 hover:text-customYellow">
                    Reply
                  </p>
                </div>
              </div>
            </div>
            {/* Comment 3 */}
            <div className=" container p-3" style={{ width: "87%" }}>
              <div className="flex space-x-4">
                <img
                  src={person3}
                  alt="Profile Picture"
                  className="w-18 h-16"
                />
                <div className="">
                  <h2 className="text-lg font-semibold">
                    Michelle Aimber
                    <span className="text-xs text-customMediumGray font-semibold  pl-52">
                      January 17, 2016 at 1:38 pm
                    </span>
                  </h2>
                  <p className="text-sm my-4 text-customDarkGray">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor
                    <br /> incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis
                    <br /> nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                    <br /> Duis aute irure dolor in reprehen
                  </p>
                  <p className="font-bold mt-3 hover:text-customYellow">
                    Reply
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-xl my-6 ">ADD A COMMENT</h2>
          {/*Add A Comment  */}

          <div className="flex items-center justify-center  overflow-x-hidden ">
            <div className="w-full max-w-4xl bg-white  ">
              <div className="text-left mb-5">
                <textarea
                  rows={10}
                  className="w-full p-4 overflow-y-hidden border-2 border-black border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none  placeholder-customGray"
                  placeholder="Your Comment"
                ></textarea>
              </div>
              <div className="flex justify-between text-left mb-10">
                <div className="w-1/3">
                  <input
                    type="text"
                    className="w-full px-4 py-2  text-black border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none placeholder-customGray"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-1/3 mx-4">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none placeholder-customGray"
                    placeholder="Your Email"
                  />
                </div>
                <div className="w-1/3">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-black border-2 border-opacity-10 focus:border-customYellow focus:border-opacity-30  focus:outline-none placeholder-customGray"
                    placeholder="Your Website"
                  />
                </div>
              </div>

              <div className="">
                <a href="/newsSingle">
                  <button className="bg-customYellow rounded-sm font-semibold hover:bg-black px-4 py-2 my-3 text-white text-lg ">
                    POST COMMENT
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "30%" }}>
        <Sidebar />
      </div>
    </div>
  );
};

export default newsDescription;
