import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Search, Plane, Star, ChevronRight, X, Bot, Sun, Moon } from "lucide-react";
import logo from './assets/logo03.png';
import heroVideo from './assets/hero.mp4';
import airplane from './assets/airplane.png';
import yjhd01 from "./assets/yjhd01.png";

// Import review images with corrected filenames as per user's request
import sayyam from "./assets/sayyam.jpg";
import aashima from "./assets/aashima.jpg";
import rishabh from "./assets/rishabh.jpg";
import akarsh from "./assets/akarshi.jpg";

// Brand constants
const BRAND = "#008342";

// Restored exploreDestinations array with image paths from your assets folder
const exploreDestinations = [
  { name: "bali", img: "src/assets/bali-7969001_1280.jpg", tag: "International" },
  { name: "thailand", img: "src/assets/thailand.jpg", tag: "International" },
  { name: "ladakh", img: "src/assets/ladakh-397884_1280.jpg", tag: "Domestic" },
  { name: "bhutan", img: "src/assets/bhutan-2825919_1280.jpg", tag: "International" },
  { name: "kerela", img: "src/assets/kerela-5480871_1280.jpg", tag: "Domestic" },
  { name: "manali", img: "src/assets/manali-5104279_1280.jpg", tag: "Domestic" },
  { name: "spiti", img: "src/assets/spiti.jpg", tag: "Domestic" },
  { name: "dubai", img: "src/assets/dubai-1227538_1280.jpg", tag: "International" },
  { name: "georgia", img: "src/assets/georgia-5031783_1280.jpg", tag: "International" },
  { name: "tawang", img: "src/assets/tawang-6907059_1280.jpg", tag: "Domestic" },
  { name: "maldives", img: "src/assets/maldives.jpg", tag: "International" },
  { name: "nepal", img: "src/assets/nepal-790336_1280.jpg", tag: "International" },
  { name: "russia", img: "src/assets/russia.jpg", tag: "International" },
  { name: "kashmir", img: "src/assets/kashmir.jpg", tag: "Domestic" },
  { name: "almaly", img: "src/assets/Amalty.jpg", tag: "International" },
  { name: "kedarnath", img: "src/assets/kedarnath.jpg", tag: "Domestic" },
];

export default function TrailblazeTravelClone() {
  const [open, setOpen] = useState(false);
  const [dragPos, setDragPos] = useState({ x: 40, y: 80 });
  const [dragging, setDragging] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // State for the review modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const trips = [
    {
      title: "Leh-Ladakh Backpacking",
      oldPrice: "₹45,999",
      newPrice: "₹34,999",
      nights: "7N/8D",
      rating: 4.8,
      img: "src/assets/ladakh-397884_1280.jpg",
      badge: "Summer Special",
    },
    {
      title: "Spiti Backpacking",
      oldPrice: "₹34,499",
      newPrice: "₹24,499",
      nights: "5N/6D",
      rating: 4.7,
      img: "src/assets/spiti.jpg",
      badge: "Trending",
    },
    {
      title: "Kashmir Luxury Escape",
      oldPrice: "₹49,999",
      newPrice: "₹39,999",
      nights: "6N/7D",
      rating: 4.9,
      img: "src/assets/kashmir.jpg",
      badge: "Hot Deal",
    },
  ];

  const reviews = [
    {
      name: "Sayyam",
      img: sayyam,
      rating: 5,
      shortReview: "Ladakh is a once in a lifetime experience which not many get to experience! It's always written in the stars for such extravagant trips where the journey is equally important as the destination! Capture a trip as a group were extremely professional and covered everything that was promised within the itinerary.",
      fullReview: "Ladakh is a once in a lifetime experience which not many get to experience! It's always written in the stars for such extravagant trips where the journey is equally important as the destination! Capture a trip as a group were extremely professional and covered everything that was promised within the itinerary. The stay, food, comfort and hospitality was warm and commendably welcoming! This was once in a lifetime experience as we were a group of school friends traveling together and capture a trip made it etched in our memories! Can't wait for the next trip with them! Special mentions to the captains and operation head - Tushar, Vaibhav and Arpit",
    },
    {
      name: "Aashima",
      img: aashima,
      rating: 5,
      shortReview: "I recently had an incredible trip from Delhi to Leh Ladakh with Capture a Trip. The journey was well-organized and breathtakingly beautiful. Our trip captain Saurav bro was exceptional, ensuring everyone had a fantastic experience.",
      fullReview: "I recently had an incredible trip from Delhi to Leh Ladakh with Capture a Trip. The journey was well-organized and breathtakingly beautiful. Our trip captain Saurav bro was exceptional, ensuring everyone had a fantastic experience. We enjoyed it! Thank you Capture A Trip for this amazing memory.",
    },
    {
      name: "Rishabh",
      img: rishabh,
      rating: 5,
      shortReview: "I took a 7-day trip to Meghalaya and Kaziranga with Capture A Trip from December 25 to December 31, 2024. The accommodations were excellent, with cozy rooms and beautiful views that truly captured the essence of Meghalaya.",
      fullReview: "I took a 7-day trip to Meghalaya and Kaziranga with Capture A Trip from December 25 to December 31, 2024. The accommodations were excellent, with cozy rooms and beautiful views that truly captured the essence of Meghalaya. The food was delicious and authentic, offering a true taste of local cuisine. Our trip captain was fantastic, always ensuring everything ran smoothly and that we were comfortable. I would highly recommend them to anyone looking for a memorable and hassle-free travel experience.",
    },
    {
      name: "Akarshi",
      img: akarsh,
      rating: 5,
      shortReview: "I recently had an incredible trip from Delhi to Leh Ladakh with Capture a Trip. The journey was well-organized and breathtakingly beautiful. Our trip captain saurav bro was exceptional, ensuring everyone had a fantastic experience. Thanks for the amazing memories!",
      fullReview: "I recently had an incredible trip from Delhi to Leh Ladakh with Capture a Trip. The journey was well-organized and breathtakingly beautiful. Our trip captain saurav bro was exceptional, ensuring everyone had a fantastic experience. Thanks for the amazing memories! I would highly recommend Capture A Trip to all my friends and family.",
    }
  ];

  // Drag handlers (mouse + touch)
  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);
  const handleMouseMove = (e) => {
    if (dragging) {
      setDragPos({ x: e.clientX - 25, y: e.clientY - 25 });
    }
  };
  const handleTouchStart = () => setDragging(true);
  const handleTouchEnd = () => setDragging(false);
  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setDragPos({ x: touch.clientX - 25, y: touch.clientY - 25 });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const filteredExploreDestinations = exploreDestinations.filter(dest => {
    if (activeFilter === 'All') {
      return true;
    }
    return dest.tag === activeFilter;
  });

  const handleOpenModal = (review) => {
    setSelectedReview(review);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedReview(null);
  };

  const textColor = isDarkMode ? "text-white" : "text-black";
  const bgColor = isDarkMode ? "bg-black" : "bg-white";

  return (
    <div
      className={`min-h-screen ${bgColor} ${textColor} select-none`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Google Font: Poppins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`body { font-family: 'Poppins', ui-sans-serif, system-ui, -apple-system; }`}</style>

      {/* Top bar */}
      <header className={`sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:${isDarkMode ? 'bg-black/40' : 'bg-white/40'} ${isDarkMode ? 'bg-black/60' : 'bg-white/60'} border-b ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-18 items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="Trailblaze Travel Logo" className="h-36" />
            </div>
            <nav className={`hidden md:flex items-center gap-8 text-sm ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>
              <a className={`hover:${isDarkMode ? 'text-white' : 'text-black'}`} href="#destinations">Destinations</a>
              <a className={`hover:${isDarkMode ? 'text-white' : 'text-black'}`} href="#trips">Trips</a>
              <a className={`hover:${isDarkMode ? 'text-white' : 'text-black'}`} href="#reviews">Reviews</a>
              <a className={`hover:${isDarkMode ? 'text-white' : 'text-black'}`} href="#faq">FAQ</a>
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`rounded-full p-2 transition-colors duration-200 ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'} ${textColor}`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setOpen(true)}
                className="rounded-2xl bg-[var(--brand)] text-white px-4 py-2 text-sm font-semibold shadow-md shadow-black/20 hover:shadow-lg"
                style={{ ['--brand']: BRAND }}
              >
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-40"
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className={`absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black/50 ${isDarkMode ? '' : 'from-white via-white/30 to-white/50'}`} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24">
          <div className="flex items-start flex-wrap">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`text-4xl sm:text-5xl font-bold leading-relaxed tracking-wider ${textColor}`}
            >
              Kahin Pohochne ke liye, <br className="size-min" /> Kahin se nikalna bohot zaroori hai
            </motion.h1>
            <motion.img
              src={airplane}
              alt="Airplane"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 ml-2 mt-2 self-start"
            />
          </div>
          <p className={`mt-4 max-w-2xl ${isDarkMode ? 'text-white/80' : 'text-black/80'}`}>
            Backpacking adventures, group escapes, and luxe getaways — designed for students, couples, and squads.
          </p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`mt-8 grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl ${isDarkMode ? 'bg-white/5 ring-1 ring-white/10 backdrop-blur-lg' : 'bg-black/5 ring-1 ring-black/10 backdrop-blur-lg'} p-3`}
          >
            <Field isDarkMode={isDarkMode} icon={<MapPin className="h-4 w-4" />} label="From" placeholder="Indore" />
            <Field isDarkMode={isDarkMode} icon={<MapPin className="h-4 w-4" />} label="To" placeholder="Goa / Bali / Dubai" />
            <Field isDarkMode={isDarkMode} icon={<Calendar className="h-4 w-4" />} label="Dates" placeholder="Aug 28 – Sep 2" />
            <button className="flex items-center justify-center gap-2 rounded-xl bg-[var(--brand)] text-white font-semibold px-4 py-3" style={{ ['--brand']: BRAND }}>
              <Search className="h-4 w-4" /> Search
            </button>
          </motion.div>

          {/* Trust bar */}
          <div className={`mt-6 flex flex-wrap items-center gap-4 text-xs ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 ring-1 ${isDarkMode ? 'bg-white/5 ring-white/10' : 'bg-black/5 ring-black/10'}`}>
              <Star className="h-3 w-3" /> 4.8/5 Rated by 12k+ travelers
            </span>
            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 ring-1 ${isDarkMode ? 'bg-white/5 ring-white/10' : 'bg-black/5 ring-black/10'}`}>
              24/7 Trip Support
            </span>
            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 ring-1 ${isDarkMode ? 'bg-white/5 ring-white/10' : 'bg-black/5 ring-black/10'}`}>
              Student‑friendly EMI
            </span>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between">
          <h2 className={`text-2xl sm:text-3xl font-semibold ${textColor}`}>Explore Destinations</h2>
          <a href="#" className={`text-sm ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'} inline-flex items-center gap-1`}>
            View all <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Filter buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={() => setActiveFilter('All')} className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold ${activeFilter === 'All' ? 'bg-white text-black' : `${isDarkMode ? 'bg-white/5 text-white/80 ring-1 ring-white/10' : 'bg-black/5 text-black/80 ring-1 ring-black/10'}`}`}>
            <div className="text-xl">🌐</div>All
          </button>
          <button onClick={() => setActiveFilter('International')} className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold ${activeFilter === 'International' ? 'bg-white text-black' : `${isDarkMode ? 'bg-white/5 text-white/80 ring-1 ring-white/10' : 'bg-black/5 text-black/80 ring-1 ring-black/10'}`}`}>
            <div className="text-xl">✈️</div>International
          </button>
          <button onClick={() => setActiveFilter('Domestic')} className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold ${activeFilter === 'Domestic' ? 'bg-white text-black' : `${isDarkMode ? 'bg-white/5 text-white/80 ring-1 ring-white/10' : 'bg-black/5 text-black/80 ring-1 ring-black/10'}`}`}>
            <div className="text-xl">🇮🇳</div>Domestic
          </button>
        </div>

        {/* Horizontal Scroll with unified grid layout */}
        <div className="w-full overflow-x-auto scrollbar-hide mt-6">
          <div className="grid gap-6 pr-4" style={{ gridAutoFlow: 'column', gridTemplateRows: 'repeat(2, minmax(0, 1fr))' }}>
            {filteredExploreDestinations.map((d, i) => (
              <Placard key={i} name={d.name} img={d.img} tag={d.tag} />
            ))}
          </div>
        </div>
      </section>

      {/* Trips */}
      <section id="trips" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <h2 className={`text-2xl sm:text-3xl font-semibold ${textColor}`}>Curated Trips</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {trips.map((t, i) => (
            <TripCard key={i} {...t} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <h2 className={`text-2xl sm:text-3xl font-semibold ${textColor}`}>What travelers say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} {...review} isDarkMode={isDarkMode} onReadMore={() => handleOpenModal(review)} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 md:pb-24">
        <div className={`relative overflow-hidden rounded-3xl ${isDarkMode ? 'bg-black' : 'bg-white'} flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 px-6 md:px-12 py-10 md:py-16`}>
          {/* Left Side: Image */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={yjhd01}
              alt="YJHD inspired travel group"
              className="rounded-2xl object-cover w-full h-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x600/3d3d3d/ffffff?text=Image+Not+Found";
              }}
            />
          </div>

          {/* Right Side: Text */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
            <h2 className={`${textColor} font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-3`}>
              Kuch logon ke saath rehne se hi sab theek ho jaata hai...
            </h2>
            <p className={`${isDarkMode ? 'text-white/80' : 'text-black/80'} text-sm sm:text-base md:text-lg mb-6`}>
              Personalized itineraries, easy payments, and 24×7 support.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={() => setOpen(true)}
                className="rounded-full bg-[var(--brand)] text-white px-6 py-3 font-semibold text-sm sm:text-base"
                style={{ ["--brand"]: "#FF5722" }}
              >
                AI Trip Planner
              </button>
              <button className="rounded-full bg-white text-black px-6 py-3 font-semibold text-sm sm:text-base">
                Explore Trips
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className={`border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm`}>
          <div>
            <div className={`flex items-center gap-2 font-semibold ${textColor}`}>
              <img src={logo} alt="Trailblaze Travel Logo" className="h-6" />
            </div>
          </div>
          <div>
            <div className={`font-medium ${isDarkMode ? 'text-white/90' : 'text-black/90'}`}>Company</div>
            <ul className={`mt-3 space-y-2 ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className={`font-medium ${isDarkMode ? 'text-white/90' : 'text-black/90'}`}>Support</div>
            <ul className={`mt-3 space-y-2 ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
              <li>FAQs</li>
              <li>Cancellation Policy</li>
              <li>Payment Options</li>
            </ul>
          </div>
          <div>
            <div className={`font-medium ${isDarkMode ? 'text-white/90' : 'text-black/90'}`}>Follow</div>
            <ul className={`mt-3 space-y-2 ${isDarkMode ? 'text-white/60' : 'text-black/60'}`}>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className={`text-center text-xs ${isDarkMode ? 'text-white/50' : 'text-black/50'} pb-8`}>© 2025 Trailblaze Travel. All rights reserved.</div>
      </footer>

      {/* Plan My Trip Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg rounded-2xl bg-zinc-950 p-6 ring-1 ring-white/10">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white/10 p-1 hover:bg-white/20"
            >
              <X className="h-4 w-4 text-white" />
            </button>
            <h3 className="text-xl font-semibold text-white">Plan My Trip</h3>
            <p className="mt-1 text-sm text-white/70">Tell us a few details and we’ll craft an itinerary.</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <MiniField label="From" placeholder="City" />
              <MiniField label="To" placeholder="Destination" />
              <MiniField label="Start Date" placeholder="DD/MM/YYYY" />
              <MiniField label="End Date" placeholder="DD/MM/YYYY" />
              <MiniField label="Travelers" placeholder="2 Adults" />
              <MiniField label="Budget" placeholder="₹50,000" />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="rounded-2xl bg-[var(--brand)] text-white px-5 py-2 font-semibold" style={{ ['--brand']: BRAND }}>Generate Plan</button>
              <button className="rounded-2xl ring-1 ring-white/20 text-white px-5 py-2 font-semibold">Download PDF</button>
            </div>
            <p className="mt-3 text-xs text-white/50">UI only • Hook up to your backend/Render when ready.</p>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {modalOpen && selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={handleCloseModal} />
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl rounded-2xl bg-white p-6 md:p-8 text-black shadow-lg overflow-y-auto">
            <button
              onClick={handleCloseModal}
              className="absolute right-3 top-3 rounded-full bg-gray-200 p-1 hover:bg-gray-300"
            >
              <X className="h-4 w-4 text-black" />
            </button>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden">
                <img src={selectedReview.img} alt={selectedReview.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  {[...Array(selectedReview.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  {[...Array(5 - selectedReview.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-2 text-sm sm:text-base text-gray-800">{selectedReview.fullReview}</p>
                <div className="mt-4 font-semibold text-lg text-black">{selectedReview.name}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Draggable AI Chatbot */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="fixed z-50 cursor-move"
        style={{ left: dragPos.x, top: dragPos.y }}
      >
        <div className="rounded-full p-3 shadow-lg" style={{ backgroundColor: BRAND }}>
          <Bot className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}

function Field({ icon, label, placeholder, isDarkMode }) {
  const iconColor = isDarkMode ? "opacity-80 text-white" : "opacity-80 text-black";
  const labelColor = isDarkMode ? "text-white/50" : "text-black/50";
  const inputColor = isDarkMode ? "text-white placeholder-white/40" : "text-black placeholder-black/40";
  const ringColor = isDarkMode ? "ring-white/10 focus-within:ring-white/30" : "ring-black/10 focus-within:ring-black/30";
  const bgColor = isDarkMode ? "bg-white/5" : "bg-black/5";

  return (
    <label className={`flex items-center gap-3 rounded-xl ${bgColor} px-3 py-3 ring-1 ${ringColor}`}>
      <div className={iconColor}>{icon}</div>
      <div className="flex-1">
        <div className={`text-[10px] uppercase tracking-wide ${labelColor}`}>{label}</div>
        <input
          className={`w-full bg-transparent focus:outline-none ${inputColor}`}
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}

function Placard({ name, img, tag }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4 }}
      className="group relative block overflow-hidden rounded-3xl ring-1 ring-white/10 min-w-[280px]"
    >
      <img src={img} alt={name} className="h-64 w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20">
          {tag}
        </div>
        <div className="mt-2 text-lg font-semibold drop-shadow text-white">{name}</div>
        <div className="mt-1 text-xs text-white/70 hidden sm:block">Explore experiences, stays & more</div>
      </div>
    </motion.a>
  );
}

function TripCard({ title, oldPrice, newPrice, nights, rating, img, badge, isDarkMode }) {
  const textColor = isDarkMode ? "text-white" : "text-black";
  const cardBg = isDarkMode ? "bg-white/5 ring-white/10" : "bg-black/5 ring-black/10";
  const detailsColor = isDarkMode ? "text-white/80" : "text-black/80";
  const priceColor = isDarkMode ? "text-white" : "text-black";

  return (
    <motion.div whileHover={{ y: -4 }} className={`overflow-hidden rounded-3xl ring-1 ${cardBg}`}>
      <div className="relative">
        <img src={img} alt={title} className="h-56 w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
          {badge}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className={`font-semibold ${textColor}`}>{title}</h3>
          <div className={`text-sm ${detailsColor}`}>{nights}</div>
        </div>
        <div className={`mt-1 flex items-center gap-1 text-sm ${detailsColor}`}>
          <Star className="h-4 w-4" /> {rating}
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className={`text-sm ${detailsColor} line-through`}>{oldPrice}</div>
            <div className={`text-lg font-semibold ${priceColor}`}>{newPrice}</div>
          </div>
          <button className="rounded-xl bg-[var(--brand)] text-white px-4 py-2 text-sm font-semibold" style={{ ['--brand']: BRAND }}>
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ReviewCard({ name, img, shortReview, rating, isDarkMode, onReadMore }) {
  const textColor = isDarkMode ? "text-white" : "text-black";
  const cardBg = isDarkMode ? "bg-white/5 ring-white/10" : "bg-black/5 ring-black/10";
  const reviewColor = isDarkMode ? "text-white/80" : "text-black/80";

  return (
    <motion.div whileHover={{ y: -2 }} className={`flex flex-col md:flex-row items-start gap-4 rounded-2xl p-5 ring-1 ${cardBg}`}>
      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden md:w-24 md:h-24">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4" />
          ))}
        </div>
        <p className={`mt-2 text-sm ${reviewColor}`}>{shortReview}
          <span onClick={onReadMore} className="cursor-pointer text-blue-500 hover:underline"> Read more...</span>
        </p>
        <div className={`mt-3 text-sm font-semibold ${textColor}`}>— {name}</div>
      </div>
    </motion.div>
  );
}

function MiniField({ label, placeholder }) {
  return (
    <label className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10 focus-within:ring-white/30">
      <div className="text-[10px] uppercase tracking-wide text-white/50">{label}</div>
      <input className="w-full bg-transparent placeholder-white/40 focus:outline-none text-white" placeholder={placeholder} />
    </label>
  );
}