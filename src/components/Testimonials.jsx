import React from "react";
import skinbrush from "../assets/skinbrush.svg";
import orangebrush from "../assets/orangebrush.svg";
import Akansha from "../assets/akansha.svg";
import star from "../assets/5Star.svg";
import leftArrow from "../assets/Handdrawnarrowleft.svg";
import rightArrow from "../assets/Handdrawn arrowright.svg";

export default function TestimonialSection() {
  return (
    <section className="relative w-full flex justify-center items-center px-4 py-10 md:py-16">
      {/* Background Brush */}
      <img
        src={skinbrush}
        alt="background brush"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Container */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-white/40 rounded-2xl p-6 md:p-10 shadow-md relative">
        {/* Left Arrow (mobile: image ke side, desktop: neeche) */}
        <img
          src={leftArrow}
          alt="left arrow"
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 md:w-8 
                     md:static md:absolute md:left-12 md:bottom-16 md:translate-y-0"
        />

  <div className="relative flex-shrink-0 w-40 h-40 md:w-52 md:h-52">
  {/* Orange Brush as Mask */}
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
  className="whitespace-nowrap text-lg md:text-2xl lg:text-3xl font-bold uppercase"
  style={{ fontFamily: "Norwester, sans-serif" }}
>
  Traveler Stories / Testimonials
</h2>
          <p
            className="text-sm md:text-lg mt-2 mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Real Safar, Real Kahaniyaan — Unki Zubaani!
          </p>

          <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4">
            My trip with Trailblaze felt like a dream come true! Everything was perfectly
            planned — from the stay to the sightseeing. The local guide took us to hidden
            spots you won’t even find on Google. It was one of the smoothest and most
            memorable travel experiences I’ve ever had. I’m definitely booking my next
            adventure with them!
          </p>

          {/* Name + Stars */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-semibold text-sm md:text-base">Akanksha Singh</p>
            <img src={star} alt="5 stars" className="mt-1 w-24 md:w-28" />
          </div>
        </div>

        {/* Right Arrow (mobile: image ke side, desktop: neeche) */}
        <img
          src={rightArrow}
          alt="right arrow"
          className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 md:w-8 md:static md:absolute md:right-12 md:bottom-16 md:translate-y-0"
        />
      </div>
    </section>
  );
}
