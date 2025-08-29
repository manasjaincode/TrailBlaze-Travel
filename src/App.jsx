import HeroWithNavbar from "./components/HeroWithNavbar.jsx";
import InternationalDepartures from "./components/InternationalDepartures.jsx";
import DomesticDepartures from "./components/DomesticDepartures.jsx";
import ExclusivePackage from "./components/ExclusivePackages.jsx";
import WhyTravel from "./components/WhyTravelWithUs.jsx";
function App() {
  return (
    <>
      <HeroWithNavbar />
      <InternationalDepartures />
      <DomesticDepartures />
      <ExclusivePackage/>
      <WhyTravel/>
    </>
  );
}

export default App;
