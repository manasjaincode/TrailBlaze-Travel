import React from "react";
import HeroWithNavbar from "./components/HeroWithNavbar.jsx";
import InternationalDepartures from "./components/InternationalDepartures.jsx";
import DomesticDepartures from "./components/DomesticDepartures.jsx";
import ExclusivePackage from "./components/ExclusivePackages.jsx";
import WhyTravel from "./components/WhyTravelWithUs.jsx";
import TestimonialSection from "./components/Testimonials.jsx";
import BG3 from "./assets/BG3.svg";
import CustomTripPlan from "./components/CustomTripPlan.jsx";
import PlanByInterest from "./components/PlanByInterest.jsx";
import  TrailGearPicks from "./components/TrailGearPicks.jsx";
function App() {
  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BG3})` }}
    >
      {/* Sections with z-index so BG3 won’t overlap */}
      <div className="relative z-10">
        <HeroWithNavbar />
        <InternationalDepartures />
        <DomesticDepartures />
        <ExclusivePackage />
        <WhyTravel />
        <TestimonialSection />
        <CustomTripPlan />
        <PlanByInterest/>
        < TrailGearPicks/>
      </div>
    </div>
  );
}

export default App;
