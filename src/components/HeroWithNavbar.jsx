import React, { useRef, useState } from "react";
import mainlogosvg from "../assets/mainlogosvg.svg";
import yellowbrush from "../assets/yellowbrush.svg";
import Patch from "../assets/Patch.svg";
import heroVideo from "../assets/hero.mp4"; 
import Ellipse from "../assets/Ellipse.svg";

const HeroWithNavbar = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-8 py-3 bg-transparent">
        {/* Logo */}
        <div className="flex items-center">
          <img src={mainlogosvg} alt="Trailblaze Logo" className="h-10 w-auto" />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center bg-gray-100/40 px-6 py-2 rounded-full shadow-sm border border-gray-200/30">
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

      {/* Hero Section Content */}
      <section className="relative flex flex-col items-center justify-center h-[90vh] md:h-[95vh] px-4 text-center text-white">
        {/* Search Bar */}
        <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full flex items-center shadow-lg w-full max-w-xl">
          <span className="text-white text-xl font-poppins font-semibold tracking-wide">
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
      </section>

      {/* Audio Toggle Button */}
     <button
  onClick={toggleMute}
  className="absolute bottom-24 right-6 z-50 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
>
  {isMuted ? "🔇" : "🔊"}
</button>

      {/* Patch */}
      <div className="relative z-20 -mt-12 md:-mt-20">
        <img src={Patch} alt="patch" className="w-full h-auto block" />
      </div>
    </div>
  );
};

export default HeroWithNavbar;
