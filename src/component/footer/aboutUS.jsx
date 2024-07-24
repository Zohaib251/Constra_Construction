import React from "react";
import img from "../../images/footer/footer-logo.png";

const aboutUS = () => {
  return (
    <div className="text-white bg-black mt-14 py-20 ">
      <div className="flex gap-10 justify-center text-center">
        <div className="flex justify-center text-center">
          <div>
            <div>
              <h2 className="font-semibold text-left text-lg px-3 border-l-4  border-customYellow ">
                ABOUT US
              </h2>
            </div>
            <div className="w-40 mt-10">
              <img src={img} alt="" />
            </div>
            <div className="w-96 my-7 text-base text-left text-customMediumGray">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci done idunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="space-x-6 text-left">
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-facebook"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-twitter"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-instagram"></span>
              </a>
              <a href="/" className="text-customMediumGray">
                <span className="icon icon-github"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div>
            <div>
              <h2 className="font-semibold text-left text-lg px-3 border-l-4  border-customYellow ">
                WORKING HOURS
              </h2>
            </div>

            <div className="w-96 my-7 text-base text-left text-customMediumGray">
              <p>
                We work 7 days a week, every day excluding major holidays.
                Contact us if you have an emergency, with our Hotline and
                Contact form.
              </p>
            </div>
            <div className="container mx-auto">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="font-medium text-customMediumGray">
                    Monday - Friday:
                  </span>
                  <span className="font-medium text-customMediumGray">
                    10:00 - 16:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-customMediumGray">
                    Saturday:
                  </span>
                  <span className="font-medium text-customMediumGray">
                    12:00 - 15:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-customMediumGray">
                    Sunday and holidays:
                  </span>
                  <span className="font-medium text-customMediumGray">
                    09:00 - 12:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center">
          <div>
            <div>
              <h2 className="font-semibold text-left text-lg px-3 border-l-4  border-customYellow ">
                SERVICES
              </h2>
              <div className="container  text-left py-7">
                <div className="">
                  <a href="/serviceSingle">
                    <div className="text-customMediumGray  gap-3 flex items-center">
                      <span class="icon-arrow_forward_ios"></span>
                      <h3 className="hover:text-customYellow text-base  ">Pre-Construction</h3>
                    </div>
                  </a>
                  <hr className="my-3 text-customMediumGray opacity-10" />
                  <a href="/serviceSingle">
                    <div className="text-customMediumGray  gap-3 flex items-center">
                      <span class="icon-arrow_forward_ios"></span>
                      <h3 className="hover:text-customYellow text-base  ">General Contracting</h3>
                    </div>
                  </a>
                  <hr className="my-3 text-customMediumGray opacity-10" />
                  <a href="/serviceSingle">
                    <div className="text-customMediumGray  gap-3 flex items-center">
                      <span class="icon-arrow_forward_ios"></span>
                      <h3 className="hover:text-customYellow text-base  ">Construction Management</h3>
                    </div>
                  </a>
                  <hr className="my-3 text-customMediumGray opacity-10" />
                  <a href="/serviceSingle">
                    <div className="text-customMediumGray  gap-3 flex items-center">
                      <span class="icon-arrow_forward_ios"></span>
                      <h3 className="hover:text-customYellow text-base  ">Design and Build</h3>
                    </div>
                  </a>
                  <hr className="my-3 text-customMediumGray opacity-10" />
                  <a href="/serviceSingle">
                    <div className="text-customMediumGray  gap-3 flex items-center">
                      <span class="icon-arrow_forward_ios"></span>
                      <h3 className="hover:text-customYellow text-base  ">Self-Perform Construction</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUS;
