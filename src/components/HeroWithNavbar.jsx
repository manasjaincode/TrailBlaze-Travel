import React from "react";
import mainlogosvg from "../assets/mainlogosvg.svg";
import yellowbrush from "../assets/yellowbrush.svg";
import Patch from "../assets/Patch.svg";
import bgImage from "../assets/mountain.jpg";
import Ellipse from "../assets/Ellipse.svg";
import brusheffect from "../assets/brusheffect.svg";
import section3image from "../assets/section3image.svg";
import trustpilot from "../assets/trustpilot.svg";
import section3yellowbrush from "../assets/section3yellowbrush.svg";

const HeroWithNavbar = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-8 py-3 bg-transparent">
        {/* Logo */}
        <div className="flex items-center">
          <img src={mainlogosvg} alt="Trailblaze Logo" className="h-10 w-auto" />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center bg-gray-100/40  px-6 py-2 rounded-full shadow-sm border border-gray-200/30">
          <ul className="flex divide-x divide-gray-300 text-sm font-medium text-gray-800 relative">
            {["HOME", "EXPLORE", "FUTURE", "ABOUT US", "MORE"].map((item, index) => (
              <li key={index} className="relative px-4 cursor-pointer group">
                {item}
                <img
                  src={yellowbrush}
                  alt=""
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button className="ml-4 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-600 transition">
          AI Trip Planner
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] md:h-[95vh] px-4">
        {/* Black Transparent Box */}
        <div className="absolute top-20 bottom-12 md:bottom-20 w-full max-w-6xl bg-black/30  rounded-3xl mx-auto flex flex-col items-center justify-center">
          {/* Search Bar */}
          <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full flex items-center shadow-lg w-full max-w-xl">
            <span className="text-white text-xl font-poppins font-semibold tracking-wide text-left">
              Search
            </span>
          </div>

          {/* Bottom Points */}
          <div className="mt-10 mb-4 flex flex-wrap justify-center gap-10 text-white font-semibold text-sm">
            <p>
              <img src={Ellipse} alt="dot" className="inline-block w-4 h-4 mr-1" />
              24×7 Support
            </p>
            <p>
              <img src={Ellipse} alt="dot" className="inline-block w-4 h-4 mr-1" />
              100% Personalised
            </p>
            <p>
              <img src={Ellipse} alt="dot" className="inline-block w-4 h-4 mr-1" />
              4.9+ Rated
            </p>
          </div>
        </div>
      </section>

      {/* Patch */}
      <div className="relative z-20 -mt-12 md:-mt-20">
        <img
          src={Patch}
          alt="patch"
          className="w-full h-auto block"
        />
      </div>

      {/* Section 3 */}
      <div className="bg-white relative z-10 -mt-px">
        <section className="relative w-full bg-white py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal font-[Nowester] leading-tight">
                KAHIN DOOR <br /> PAHADON KE PAAR...
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-800 font-poppins font-semibold">
                ek naya safar tera intezaar kar raha hai.
              </p>

              {/* Small Text */}
              <p className="text-sm text-gray-600">
                Are you ready to answer the call?
              </p>

              {/* Input + Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="text"
                  placeholder="Enter your mobile here"
                  className="w-full sm:w-72 px-4 py-3 rounded-md border border-gray-300 focus:outline-none shadow-sm"
                />
                <button className="relative">
                  <img
                    src={section3yellowbrush}
                    alt="Get a Callback"
                    className="h-12 w-auto"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-black font-semibold">
                    Get a Callback
                  </span>
                </button>
              </div>

              {/* Trustpilot */}
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={trustpilot}
                  alt="Trustpilot Rating"
                  className="h-4 md:h-6"
                />
              </div>
            </div>

            {/* Right Image with Brush Mask */}
            <div
              className="w-full max-w-lg h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${section3image})`,
                WebkitMaskImage: `url(${brusheffect})`,
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                WebkitMaskPosition: "center",
                maskImage: `url(${brusheffect})`,
                maskRepeat: "no-repeat",
                maskSize: "cover",
                maskPosition: "center",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroWithNavbar;
