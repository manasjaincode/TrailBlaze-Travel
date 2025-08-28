import React from "react";
import Ellipse from "../assets/Ellipse.svg";
import Patch from "../assets/Patch.svg"; // neeche patch import kiya

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-[80vh] px-4">
      
      {/* Black Transparent Rectangle */}
      <div className="absolute bottom-0 w-full max-w-6xl bg-black/40 backdrop-blur-md rounded-3xl px-10 pt-12 pb-20 flex flex-col items-center">
        
        {/* Search Bar */}
        <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full flex items-center shadow-lg w-full max-w-xl">
          <span className="text-white text-xl font-poppins tracking-wide text-left">
            Search
          </span>
        </div>

        {/* Bottom Points */}
        <div className="mt-10 mb-4 flex flex-wrap justify-center gap-10 text-white font-semibold text-sm">
          <p><img src={Ellipse} alt="dot" className="inline-block w-4 h-4 mr-1" /> 24×7 Support</p>
          <p><img src={Ellipse} alt="dot" className="inline-block w-4 h-4 mr-1" /> 100% Personalised</p>
          <p><img src={Ellipse} alt="dot" className="inline-block w-4 h-4 mr-1" /> 4.9+ Rated</p>
        </div>
      </div>

      {/* Neeche Patch */}
      <img
        src={Patch}
        alt="patch"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;
