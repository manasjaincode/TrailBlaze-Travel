import React from "react";
import { motion } from "framer-motion";

import skinbgbrush from "../assets/skinbgbrush.svg";
import girl from "../assets/girl.svg";
import instagram from "../assets/instagram.svg";
import like from "../assets/like.svg";

export default function CustomTripPlan() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-20 py-12 overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 z-10">
        <h2
          className="text-3xl md:text-4xl font-bold uppercase"
          style={{ fontFamily: "Norwester, sans-serif" }}
        >
          Plan Your Custom Trip
        </h2>
        <p
          className="mt-2 mb-6 text-base md:text-lg"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
        >
          Safar wahi, jo tumhare liye ho.
        </p>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select className="border rounded-lg p-3 text-sm">
            <option>Choose your dream destination</option>
          </select>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Travel dates"
              className="w-1/2 border rounded-lg p-3 text-sm"
            />
            <input
              type="text"
              placeholder="To"
              className="w-1/2 border rounded-lg p-3 text-sm"
            />
          </div>
          <div className="flex gap-2">
            <select className="flex-1 border rounded-lg p-3 text-sm">
              <option>3 Adults</option>
            </select>
            <select className="flex-1 border rounded-lg p-3 text-sm">
              <option>2 Kids</option>
            </select>
          </div>
          <select className="border rounded-lg p-3 text-sm">
            <option>Select a budget range</option>
          </select>
        </div>

        {/* Travel Style */}
        <div className="mt-4">
          <p className="font-medium text-sm mb-2">Pick Your Travel Style</p>
          <div className="flex flex-wrap gap-3 text-sm">
            {["Adventure", "Honeymoon", "Nature", "Relaxation", "Culture", "Food"].map(
              (item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input type="checkbox" className="accent-yellow-500" />
                  {item}
                </label>
              )
            )}
          </div>
        </div>

        {/* Textarea */}
        <textarea
          className="w-full border rounded-lg p-3 text-sm mt-4"
          rows="4"
          placeholder="Any preferences or custom requests?"
        ></textarea>

        {/* Submit */}
        <div className="mt-4 flex items-center gap-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 transition-all px-6 py-2 rounded-md font-medium">
            Submit Request
          </button>
          <span className="text-sm text-gray-600">
            Hum tumhare sapno ki trip plan karenge — hassle free!
          </span>
        </div>
      </div>

      {/* Right Content - Girl masked inside Brush */}
      {/* Right Content - Brush + Girl Overlap */}
<div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center z-20">
  <div className="relative w-72 md:w-96 lg:w-[420px] h-auto">
    {/* Brush Background */}
    <img
      src={skinbgbrush}
      alt="brush background"
      className="w-full h-full object-contain"
    />

    {/* Girl Overlapping Brush */}
    <img
      src={girl}
      alt="traveler girl"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>

  {/* Instagram Icon (overlapping backpack) */}
  <motion.img
    src={instagram}
    alt="instagram"
    className="absolute top-6 right-10 w-20 md:w-18 cursor-pointer z-30"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.2, rotate: 5 }}
    style={{ transform: "rotate(-12deg)" }}
  />

  {/* Like Icon (overlapping near hand) */}
  <motion.img
    src={like}
    alt="like"
    className="absolute bottom-4 right-15 w-20 md:w-18 cursor-pointer z-30"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    whileHover={{ scale: 1.2, rotate: -5 }}
    style={{ transform: "rotate(10deg)" }}
  />

</div>

    </section>
  );
}
