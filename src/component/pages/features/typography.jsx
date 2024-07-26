import React from "react";
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";
const typography = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image mainText="TYPOGRAPHY" subText="HOME / FEATURES / TYPOGRAPHY" />

      <div className="px-4 py-8">
        {/* Heading and Content */}
        <div className="flex flex-col md:flex-row md:justify-center gap-8">
          {/* Heading Section */}
          <div className="w-full md:w-2/5">
            <h2 className="text-xl md:text-2xl text-black font-bold my-6">
              HEADING
            </h2>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-black my-5">
                h1. Heading1
              </h1>
              <p className="text-customDarkGray mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly.
              </p>
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-black my-5">
                h2. Heading2
              </h1>
              <p className="text-customDarkGray mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even.
              </p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-black my-5">
                h3. Heading3
              </h1>
              <p className="text-customDarkGray mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look.
              </p>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-black my-5">
                h4. Heading4
              </h1>
              <p className="text-customDarkGray mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t.
              </p>
            </div>
            <div>
              <h1 className="text-base md:text-xl font-bold text-black my-5">
                h5. Heading5
              </h1>
              <p className="text-customDarkGray mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which.
              </p>
            </div>
            <div>
              <h1 className="text-sm md:text-lg font-bold text-black my-5">
                h6. Heading6
              </h1>
              <p className="text-customDarkGray">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words.
              </p>
            </div>
          </div>
          {/* Paragraph and Blockquote Section */}
          <div className="w-full md:w-2/5">
            {/* Paragraph */}
            <h2 className="text-xl md:text-2xl text-black font-bold my-6">
              PARAGRAPH
            </h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet,
              <span className="bg-yellow-100"> a mark here</span> adipisicing
              elit. Atque, iusto, minus sequi natus nesciunt rerum tenetur
              corrupti autem officiis fugiat expedita laudantium ea aspernatur
              <br />
              <br />
              <span className="font-bold text-green-600">
                Consectetur adipisicing elit
              </span>
              . Corrupti, aliquam, voluptates, nulla, blanditiis totam
              voluptatem{" "}
              <span className="font-bold text-red-600">
                voluptatum quod ipsa debitis non
              </span>{" "}
              ab odio natus.
            </p>

            {/* Blockquote */}
            <h2 className="text-xl md:text-2xl text-black font-bold my-6">
              BLOCKQUOTE
            </h2>

            <div className="bg-gray-100 p-5 mt-4 border-l-4 border-customYellow mb-4">
              <div className="flex ">
                <span className="icon-quote-left text-3xl text-customLightGray mr-3"></span>
                <blockquote className="text-gray-600">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante quam est corrupti ut blanditiis
                    sint aperiam placeatab.
                  </p>
                  <p className="text-xl">Someone famous in</p>
                  <p className="text-base mt-3">Source Title</p>
                </blockquote>
              </div>
            </div>

            <div className="bg-gray-100 p-5 mt-2 border-t-4 border-customYellow mb-4">
              <div className="text-center">
                <span className="icon-quote-left text-3xl text-customLightGray mb-3"></span>
                <blockquote className="text-gray-600">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante quam est corrupti ut blanditiis
                    sint aperiam placeatab.
                  </p>
                  <p className="text-xl">Someone famous in</p>
                  <p className="text-base mt-3">Source Title</p>
                </blockquote>
              </div>
            </div>

            <div className="bg-gray-100 p-5 mt-4 border-r-4 border-customYellow mb-4">
              <div className="flex ">
                <blockquote className="text-gray-600">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante quam est corrupti ut blanditiis
                    sint aperiam placeatab.
                  </p>
                  <p className="text-xl">Someone famous in</p>
                  <p className="text-base mt-3">Source Title</p>
                </blockquote>
                <span className="icon-quote-left text-3xl text-customLightGray ml-3"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="my-8 md:mx-20">
          <h2 className="text-2xl md:text-3xl text-black font-bold mb-6">
            Alerts
          </h2>
          <div className="space-y-4 justify-center">
            <div className="bg-green-100 p-4 rounded-md">
              <p className="text-customGray">
                <span className="text-green-800 font-bold">
                  Holy guacamole!
                </span>{" "}
                You should check in on some of those fields below.
              </p>
            </div>
            <div className="bg-yellow-100 p-4 rounded-md">
              <p className="text-customGray">
                <span className="text-yellow-800 font-bold">
                  Holy guacamole!
                </span>{" "}
                You should check in on some of those fields below.
              </p>
            </div>
            <div className="bg-red-100 p-4 rounded-md">
              <span className="text-red-800 text-lg font-bold">
                A SIMPLE DANGER ALERT!
              </span>
              <p className="text-customGray my-4">
                Aww yeah, you successfully read this important alert message.
                This example text is going to run a bit longer so that you can
                see how spacing within an alert works with this kind of content.
              </p>
              <hr className="h-1 bg-red-300 opacity-20" />
              <p className="text-customGray my-4">
                Whenever you need to, be sure to use margin utilities to keep
                things nice and tidy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutUS />
      <Footer />
    </div>
  );
};

export default typography;
