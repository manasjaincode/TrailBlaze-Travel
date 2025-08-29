import React from "react";

// SVGs from assets
import Brush from "../assets/Brush.svg";
import LocalTravel from "../assets/Localtravel.svg";
import Budget from "../assets/Budget-Friendly.svg";
import Trip from "../assets/travel_trip_vacation_icon.svg";
import Support from "../assets/247support.svg";

const WhyTravel = () => {
  const features = [
    {
      icon: LocalTravel,
      bg: Brush,
      title: "LOCAL TRAVEL EXPERTS",
      desc: "Travel beyond the maps with locals who breathe the stories of every trail.",
      hasBg: true,
    },
    {
      icon: Budget,
      title: "BUDGET-FRIENDLY PACKAGES",
      desc: "Experience premium adventures with thoughtfully priced packages that don’t break the bank.",
    },
    {
      icon: Trip,
      title: "HANDPICKED HIDDEN GEMS",
      desc: "Skip the clichés—explore unseen wonders specially chosen for real wanderers like you.",
    },
    {
      icon: Support,
      title: "24x7 SUPPORT",
      desc: "From takeoff to trek, our team is with you—every hour, every need, every step.",
    },
  ];

  return (
    <section className="w-[92%] lg:w-[80%] mx-auto py-12 font-['Poppins'] text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-wide">
        WHY TRAVEL WITH TRAILBLAZE?
      </h2>
      <p className="text-gray-700 mt-2 mb-10 italic text-sm sm:text-base">
        Har turn pe adventure, har stop pe sukoon…
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-20 h-20 flex items-center justify-center mb-4">
              {/* Background brush only for first */}
              {f.hasBg && (
                <img
                  src={f.bg}
                  alt="Brush background"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              )}
              <img
                src={f.icon}
                alt={f.title}
                className="relative w-12 h-12 object-contain"
              />
            </div>
            <h3 className="font-semibold text-base sm:text-lg lg:text-xl tracking-tight">
              {f.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-[240px] leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyTravel;
