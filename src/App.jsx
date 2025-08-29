import HeroWithNavbar from "./components/HeroWithNavbar.jsx";
import InternationalDepartures from "./components/InternationalDepartures.jsx";
import airplane from "./assets/whiteairplane.svg";

function App() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroWithNavbar />

      {/* Airplane Image between Hero and InternationalDepartures */}
      <img
        src={airplane}
        alt="airplane"
        className="absolute top-[420px] left-[-40px] w-44 rotate-[-10deg] z-20"
      />

      {/* International Departures */}
      <InternationalDepartures />
    </div>
  );
}

export default App;
