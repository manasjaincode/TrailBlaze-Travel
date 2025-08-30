import React from "react";
import skinbrush from "../assets/skinbrush.svg";
import orangebrush from "../assets/orangebrush.svg";
import Akansha from "../assets/akansha.svg";
import star from "../assets/5Star.svg";
import leftArrow from "../assets/Handdrawnarrowleft.svg";
import rightArrow from "../assets/Handdrawn arrowright.svg";

export default function TestimonialSection() {
  return (
    <section className="relative w-full flex justify-center items-center px-4 py-8 md:py-12">
      {/* Background Brush (narrower width) */}
      <img
        src={skinbrush}
        alt="background brush"
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[85%] md:w-[70%] h-auto object-contain -z-10"
      />

      {/* Container */}
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-white/50 rounded-xl p-4 md:p-6 shadow-md relative">
        {/* Left Arrow */}
        <img
          src={leftArrow}
          alt="left arrow"
          className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 md:w-7"
        />

        {/* Avatar with Orange Brush Mask */}
        <div className="relative flex-shrink-0 w-32 h-32 md:w-44 md:h-44">
          <img
            src={Akansha}
            alt="Akansha"
            className="w-full h-full object-cover"
            style={{
              WebkitMaskImage: `url(${orangebrush})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "contain",
              maskImage: `url(${orangebrush})`,
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2
            className="whitespace-nowrap text-base md:text-xl lg:text-2xl font-bold uppercase"
            style={{ fontFamily: "Norwester, sans-serif" }}
          >
            Traveler Stories / Testimonials
          </h2>
          <p
            className="text-xs md:text-sm mt-1 mb-3"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Real Safar, Real Kahaniyaan — Unki Zubaani!
          </p>

          <p className="text-gray-800 text-xs md:text-sm leading-relaxed mb-3">
            My trip with Trailblaze felt like a dream come true! Everything was perfectly
            planned — from the stay to the sightseeing. The local guide took us to hidden
            spots you won’t even find on Google. It was one of the smoothest and most
            memorable travel experiences I’ve ever had. I’m definitely booking my next
            adventure with them!
          </p>

          {/* Name + Stars */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-xs md:text-sm">Akanksha Singh</p>
            <img src={star} alt="5 stars" className="mt-1 w-20 md:w-24" />
          </div>
        </div>

        {/* Right Arrow */}
        <img
          src={rightArrow}
          alt="right arrow"
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 md:w-7"
        />
      </div>
    </section>
  );
}
