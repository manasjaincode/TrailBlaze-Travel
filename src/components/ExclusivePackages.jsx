import React, { useState } from "react";
import spitivalley from "../assets/Spitivalley.jpg";
import kashmirindia from "../assets/Kashmirindia.jpg";
import ladakh from "../assets/ladakh.jpg";

const packages = [
  {
    title: "Spiti Valley Adventure",
    description:
      "Embark on a journey through the cold desert mountains, monasteries, and untouched beauty of Spiti.",
    price: 18500,
    image: spitivalley,
  },
  {
    title: "Kashmir – Heaven on Earth",
    description:
      "Explore the valleys, lakes, and snow-capped peaks of Kashmir with unmatched luxury and comfort.",
    price: 21000,
    image: kashmirindia,
  },
  {
    title: "Ladakh Expedition",
    description:
      "Discover Ladakh’s stunning landscapes, monasteries, and high-altitude passes like never before.",
    price: 24000,
    image: ladakh,
  },
];

const ExclusivePackage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? packages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === packages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-[92%] lg:w-[80%] mx-auto my-12 font-['Poppins']">
      <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-lg">
        
        {/* Left Content */}
        <div className="bg-[#800020] text-white p-6 lg:p-10 flex flex-col justify-center lg:w-1/2">
          <span className="uppercase text-[10px] lg:text-xs tracking-widest bg-white/20 px-2 py-1 rounded-full w-fit mb-3">
            Experience
          </span>
          <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold leading-snug mb-3">
            {packages[currentIndex].title}
          </h2>
          <p className="text-sm sm:text-base mb-4">
            {packages[currentIndex].description}
          </p>
          <p className="font-medium mb-4">
            From{" "}
            <span className="text-lg font-semibold">
              ₹{packages[currentIndex].price.toLocaleString("en-IN")}
            </span>{" "}
            per person
          </p>
          <button className="bg-white text-[#800020] font-medium px-3 lg:px-4 py-1.5 lg:py-2 rounded-md hover:bg-gray-100 transition w-fit text-sm lg:text-base">
            Learn more
          </button>
        </div>

        {/* Right Image + Thumbnails Section */}
        <div className="flex flex-col lg:w-1/2">
          {/* Main Image */}
          <div className="h-56 sm:h-72 lg:h-[360px]">
            <img
              src={packages[currentIndex].image}
              alt={packages[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="bg-white flex items-center justify-between px-4 py-3 gap-3">
            {/* Thumbnails */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">
              {packages.map((pkg, index) => (
                <img
                  key={index}
                  src={pkg.image}
                  alt={pkg.title}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-14 h-10 sm:w-16 sm:h-12 rounded-md cursor-pointer object-cover transition-all duration-300 ${
                    index === currentIndex
                      ? "opacity-100 scale-105 border-2 border-[#800020]"
                      : "opacity-40"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={handlePrev}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#800020] text-white hover:bg-[#a00030] transition"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#800020] text-white hover:bg-[#a00030] transition"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivePackage;
