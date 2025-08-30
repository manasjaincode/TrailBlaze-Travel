import React, { useState } from "react";
import christmas from "../assets/christmas.jpg";
import nightlife from "../assets/nightlife.jpg";
import snorkeling from "../assets/snorkeling.jpg";
import sightseeing from "../assets/sightseeing.jpg";
import beach from "../assets/beach.jpg";
import shopping from "../assets/shopping.jpg";
import selfexploration from "../assets/selfexploration.jpg";
import ziro from "../assets/part2section.svg"; // orange festival poster

export default function PlanByInterest() {
  const items = [
    { name: "Christmas / New Year", img: christmas, tag: "Limited" },
    { name: "Night Life", img: nightlife },
    { name: "Snorkeling", img: snorkeling },
    { name: "Sightseeing", img: sightseeing },
    { name: "Beach", img: beach },
    { name: "Shopping", img: shopping },
    { name: "Self Exploration", img: selfexploration },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full flex flex-col items-center px-4 py-10">
      {/* Heading */}
      <h2
        className="text-xl md:text-2xl font-semibold italic"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Plan by Interest
      </h2>
      <p
        className="text-gray-600 text-sm md:text-base mt-1 mb-6 text-center"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Explore destinations based on your mood and preferences.
      </p>

      {/* Centralised Categories */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.tag && (
                <span className="absolute top-1 left-1 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs md:text-sm text-center">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Scroll Dots + Prev/Next centralized */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
        <div className="flex gap-2">
          {items.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                activeIndex === idx ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

        {/* Prev/Next */}
        <div className="flex gap-6 text-sm text-gray-600">
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1))
            }
          >
            Previous
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev + 1) % items.length)}
          >
            Next
          </button>
        </div>
      </div>

      {/* ---------------- Part 2 Section (Ziro Festival Poster) ---------------- */}
      {/* ---------------- Part 2 Section (Ziro Festival Poster) ---------------- */}
<div className="w-full mt-12">
  <div className="relative w-full max-w-2xl mx-auto h-40 md:h-56 rounded-xl overflow-hidden shadow-lg">
    {/* Background Image */}
    <img
      src={ziro}
      alt="Ziro Festival"
      className="w-full h-full object-cover"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 flex items-center">
      <div className="text-white px-4 md:px-8 max-w-sm">
        
      </div>
    </div>

    {/* Navigation Arrows */}
    <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base">
      ‹
    </button>
    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-sm md:text-base">
      ›
    </button>
  </div>
</div>
    </section>
  );
}
