import React from "react";
import yellowline from "../assets/yellowline.svg";
import section3yellowbrush from "../assets/section3yellowbrush.svg";

// Destinations
import bali from "../assets/bali.svg";
import thailand from "../assets/thailand.svg";
import ladakh from "../assets/ladakh.svg";
import bhutan from "../assets/bhutan.svg";
import georgia from "../assets/georgia.svg";

// Airplane
import airplane from "../assets/whiteairplane.svg";

// Background
import skinbg from "../assets/skinbg.svg";

const destinations = [
  { name: "Bali", img: bali },
  { name: "Thailand", img: thailand },
  { name: "Ladakh", img: ladakh },
  { name: "Bhutan", img: bhutan },
  { name: "Georgia", img: georgia },
];

const InternationalDepartures = () => {
  return (
    <section className="relative py-16 overflow-hidden flex flex-col items-center">
      {/* Background Box */}
      <div className="relative w-[90%] lg:w-[80%] rounded-xl ">
        <img
          src={skinbg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* ✈️ Airplane at top-left corner (flying in) */}
        <img
          src={airplane}
          alt="airplane"
          className="absolute -top-16 -left-16 w-44 rotate-[12deg] z-20"
        />

        {/* Content inside skinbg */}
        <div className="relative z-30 px-6 pb-12">
          {/* Title */}
          <div className="text-center relative pt-12">
            <h2 className="text-2xl font-bold tracking-wide">
              INTERNATIONAL DEPARTURES
            </h2>
            <img
              src={yellowline}
              alt="underline"
              className="mx-auto mt-2 w-40"
            />
          </div>

          {/* View All button */}
          <div className="text-right mt-6">
            <button className="bg-gray-200 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-300 transition">
              View All
            </button>
          </div>

          {/* Cards */}
          <div
            className="
              mt-10 flex gap-6 
              overflow-x-auto scrollbar-hide 
              lg:justify-center lg:overflow-visible
            "
          >
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-52 rounded-xl overflow-hidden shadow-md bg-white/5"
              >
                {/* Card Image */}
                <div className="h-72 relative">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <h3 className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-lg font-bold drop-shadow-lg">
                    {dest.name}
                  </h3>
                </div>

                {/* View Itinerary button */}
                <div className="flex justify-center mt-3 mb-2">
                  <button className="relative">
                    <img
                      src={section3yellowbrush}
                      alt="yellow brush"
                      className="w-28"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                      View Itinerary
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalDepartures;
