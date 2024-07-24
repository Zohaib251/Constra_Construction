import React from "react";
import team1 from "../../../../images/main/team/team1.jpg";
import team2 from "../../../../images/main/team/team2.jpg";
import team3 from "../../../../images/main/team/team3.jpg";
import team4 from "../../../../images/main/team/team4.jpg";
import team5 from "../../../../images/main/team/team5.jpg";
import team6 from "../../../../images/main/team/team6.jpg";
const team = () => {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="flex gap-4 justify-items-center justify-center mt-8">
          {/*1 Person  */}
          <div className="bg-white p-4 w-64">
            <img
              src={team1}
              alt="Nats Stenman"
              className="w-64 h-56 rounded-md object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">NATS STENMAN</h2>
            <p className="text-gray-600 mb-2">Chief Operating Officer</p>
            <p className="text-gray-600">
              Nats Stenman began his career in construction with boots on the
              ground
            </p>
            <div className="mt-3 flex space-x-3">
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-facebook"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-github"></span>
              </a>
            </div>
          </div>
          {/*  2 Person */}
          <div className="bg-white p-4 w-64">
            <img
              src={team2}
              alt="ANGELA LYOUER"
              className="w-64 h-56 rounded-md object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">ANGELA LYOUER</h2>
            <p className="text-gray-600 mb-2">Innovation Officer</p>
            <p className="text-gray-600">
              Nats Stenman began his career in construction with boots on the
              ground
            </p>
            <div className="mt-3 flex space-x-3">
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-facebook"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-github"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex gap-4 justify-items-center justify-center mt-8">
          {/*3 Person  */}
          <div className="bg-white p-4 w-64">
            <img
              src={team3}
              alt="MARK CONTER"
              className="w-64 h-56 rounded-md object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">MARK CONTER</h2>
            <p className="text-gray-600 mb-2">Safety Officer</p>
            <p className="text-gray-600">
              Nats Stenman began his career in construction with boots on the
              ground
            </p>
            <div className="mt-3 flex space-x-3">
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-facebook"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-github"></span>
              </a>
            </div>
          </div>
          {/*4 Person  */}
          <div className="bg-white p-4 w-64">
            <img
              src={team4}
              alt="AYESHA STEWART"
              className="w-64 h-56 rounded-md object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">AYESHA STEWART</h2>
            <p className="text-gray-600 mb-2">Finance Officer</p>
            <p className="text-gray-600">
              Nats Stenman began his career in construction with boots on the
              ground
            </p>
            <div className="mt-3 flex space-x-3">
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-facebook"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-github"></span>
              </a>
            </div>
          </div>
          {/*5 Person  */}
          <div className="bg-white p-4 w-64">
            <img
              src={team5}
              alt="DAVE CLARKTE"
              className="w-64 h-56 rounded-md object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">DAVE CLARKTE</h2>
            <p className="text-gray-600 mb-2">Civil Engineer</p>
            <p className="text-gray-600">
              Nats Stenman began his career in construction with boots on the
              ground
            </p>
            <div className="mt-3 flex space-x-3">
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-facebook"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-github"></span>
              </a>
            </div>
          </div>
          {/*6 Person  */}
          <div className="bg-white p-4 w-64">
            <img
              src={team6}
              alt="DELTON JOE"
              className="w-64 h-56 rounded-md object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">ELTON JOE</h2>
            <p className="text-gray-600 mb-2">Site Supervisor</p>
            <p className="text-gray-600">
              Nats Stenman began his career in construction with boots on the
              ground
            </p>
            <div className="mt-3 flex space-x-3">
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-facebook"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-github"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default team;
