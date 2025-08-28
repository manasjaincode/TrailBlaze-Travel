import React from "react";
import mainlogosvg from "../assets/mainlogosvg.svg"; 
import yellowbrush from "../assets/yellowbrush.svg"; 

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 flex justify-between items-center px-8 py-3 bg-transparent">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={mainlogosvg}
          alt="Trailblaze Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center bg-gray-100/40 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-gray-200/30">
        <ul className="flex gap-6 text-sm font-medium text-gray-800 relative">
          {["HOME", "EXPLORE", "FUTURE", "ABOUT US", "MORE"].map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer group"
            >
              {item}
              {/* Yellow Brush underline on hover */}
              <img
                src={yellowbrush}
                alt=""
                className="absolute left-1/2 -translate-x-1/2 bottom-[-12px] w-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
  );
};

export default Navbar;
