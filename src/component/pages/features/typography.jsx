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
      <div>
        <div className="flex justify-evenly">
          {/* Heading */}
          <div className="w-2/5">
            <h2 className="text-2xl text-black font-bold my-10">HEADING</h2>
            <div>
              <h1 className="text-5xl font-bold text-black my-5">
                h1. Heading1
              </h1>
              <p className="text-customDarkGray">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly.
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black my-5">
                h2. Heading2
              </h1>
              <p className="text-customDarkGray">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even.
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black my-5">
                h3. Heading3
              </h1>
              <p className="text-customDarkGray">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black my-5">
                h4. Heading4
              </h1>
              <p className="text-customDarkGray">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-bold text-black my-5">
                h5. Heading5
              </h1>
              <p className="text-customDarkGray">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which.
              </p>
            </div>
            <div>
              <h1 className="text-lg font-bold text-black my-5">
                h6. Heading6
              </h1>
              <p className="text-customDarkGray">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words.
              </p>
            </div>
          </div>
          {/*Paragraph  */}
          <div className="w-2/5">
            <h2 className="text-2xl text-black text-left font-bold my-10">
              PARAGRAPH
            </h2>
            <p>
              Lorem ipsum dolor sit amet,
              <span style={{ backgroundColor: "#FCF8E3" }}>
                {" "}
                a mark here
              </span>{" "}
              adipisicing elit. Atque, iusto, minus sequi natus nesciunt rerum
              tenetur corrupti autem officiis fugiat expedita laudantium ea
              aspernatur
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
            {/* BlockQuote */}

            <h2 className="text-2xl text-black text-left font-bold my-10">
              BLOCKQUOTE
            </h2>

            <div className="flex bg-gray-100 p-5 mt-8 border-l-4 border-customYellow">
              <div className="mt-[-20px] mr-4">
                <span class="icon-quote-left text-4xl text-customLightGray"></span>
              </div>
              <div>
                <blockquote className="text-gray-600 ">
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

            <div className=" bg-gray-100 p-5 mt-8 border-t-4 text-center border-customYellow">
              <div className="mt-[-20px] mr-4">
                <span class="icon-quote-left text-4xl text-customLightGray"></span>
              </div>
              <div>
                <blockquote className="text-gray-600 ">
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

            <div className="flex bg-gray-100 p-5 mt-8 text-right border-r-4 border-customYellow">
              <div>
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
              <div className="ml-4">
                <span className="icon-quote-left text-4xl text-customLightGray"></span>
              </div>
            </div>
          </div>
        </div>
        {/*Alerts  */}
        <div className=" mx-20">
          <div className="flex flex-row ">
            <h2 className="text-3xl text-black text-left font-bold my-5">
              Alerts
            </h2>
          </div>
          <div>
            <div className="bg-green-100 p-3 rounded-md my-4">
              <p className="text-customGray">
                <span className="text-green-800 font-bold">
                  Holy guacamole!
                </span>{" "}
                You should check in on some of those fields below.
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-md my-4">
              <p className="text-customGray">
                <span className="text-yellow-800 font-bold">
                  Holy guacamole!
                </span>{" "}
                You should check in on some of those fields below.
              </p>
            </div>
            <div className="bg-red-100 p-3 rounded-md">
              <span className="text-red-800 text-lg font-bold">
                A SIMPLE DANGER ALERT!
              </span>
              <p className="text-customGray my-4">
                {" "}
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
