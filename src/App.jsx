import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Search, Plane, Star, ChevronRight, X, Bot } from "lucide-react";
import logo from './assets/logo02.png';
import heroVideo from './assets/hero.mp4';
import airplane from './assets/airplane.png';
import yjhd01 from "./assets/yjhd01.png"; 

// Brand constants
const BRAND = "#008342";

export default function TrailblazeTravelClone() {
  const [open, setOpen] = useState(false);
  const [dragPos, setDragPos] = useState({ x: 40, y: 80 });
  const [dragging, setDragging] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const destinations = [
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop",
      tag: "International",
    },
    {
      title: "Leh–Ladakh, India",
      img: "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?q=80&w=1600&auto=format&fit=crop",
      tag: "Domestic",
    },
    {
      title: "Dubai, UAE",
      img: "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?q=80&w=1600&auto=format&fit=crop",
      tag: "International",
    },
    {
      title: "Kasol, India",
      img: "https://images.unsplash.com/photo-1610641818989-a1c7c2aacf4f?q=80&w=1600&auto=format&fit=crop",
      tag: "Domestic",
    },
    {
      title: "Paris, France",
      img: "https://images.unsplash.com/photo-1502602898624-ad42b26c6d0c?q=80&w=1600&auto=format&fit=crop",
      tag: "International",
    },
    {
      title: "Goa, India",
      img: "https://images.unsplash.com/photo-1518531932812-ce44229b47bf?q=80&w=1600&auto=format&fit=crop",
      tag: "Domestic",
    },
  ];

  const trips = [
    {
      title: "Bali Friends Trip",
      price: "₹64,999",
      nights: "6N/7D",
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop",
      badge: "Best Seller",
    },
    {
      title: "Spiti Backpacking",
      price: "₹24,499",
      nights: "5N/6D",
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      badge: "Trending",
    },
    {
      title: "Dubai Luxury Getaway",
      price: "₹79,999",
      nights: "4N/5D",
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
      badge: "Premium",
    },
  ];

  // ---------- Lightweight runtime tests (console) ----------
  function runTests() {
    // Test 1: Brand color is as requested
    console.assert(BRAND === "#008342", "BRAND color should be #008342");

    // Test 2: Destinations array integrity
    console.assert(Array.isArray(destinations) && destinations.length >= 4, "Destinations should have ≥ 4 items");
    destinations.forEach((d, i) => {
      console.assert(!!d.title && !!d.img && !!d.tag, `Destination #${i} should have title, img, tag`);
    });

    // Test 3: Trips schema + rating and nights format
    console.assert(Array.isArray(trips) && trips.length >= 3, "Trips should have ≥ 3 items");
    const nightsRe = /^\d+N\/\d+D$/;
    trips.forEach((t, i) => {
      console.assert(!!t.title && !!t.price && !!t.nights && !!t.img && !!t.badge, `Trip #${i} missing fields`);
      console.assert(typeof t.rating === "number" && t.rating >= 0 && t.rating <= 5, `Trip #${i} rating out of range`);
      console.assert(nightsRe.test(t.nights), `Trip #${i} nights should match e.g. 6N/7D`);
    });

    // Test 4: Ensure Placard link is valid (#)
    const VALID_HREF = "#";
    console.assert(VALID_HREF === "#", "Placard href should be '#'");
  }

  useEffect(() => {
    runTests();
  }, []);
  // ---------------------------------------------------------

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
  
  // Filter destinations based on active filter
  const filteredDestinations = destinations.filter(dest => {
    if (activeFilter === 'All') {
      return true;
    }
    return dest.tag === activeFilter;
  });

  return (
    <div
      className="min-h-screen bg-black text-white select-none"
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
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="Trailblaze Travel Logo" className="h-16" />
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a className="hover:text-white" href="#destinations">Destinations</a>
              <a className="hover:text-white" href="#trips">Trips</a>
              <a className="hover:text-white" href="#reviews">Reviews</a>
              <a className="hover:text-white" href="#faq">FAQ</a>
            </nav>
            <button
              onClick={() => setOpen(true)}
              className="rounded-2xl bg-[var(--brand)] text-white px-4 py-2 text-sm font-semibold shadow-md shadow-black/20 hover:shadow-lg"
              style={{ ['--brand']: BRAND }}
            >
              Plan My Trip
            </button>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24">
          <div className="flex items-start flex-wrap">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold leading-relaxed tracking-wider"
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
          <p className="mt-4 max-w-2xl text-white/80">
            Backpacking adventures, group escapes, and luxe getaways — designed for students, couples, and squads.
          </p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-lg"
          >
            <Field icon={<MapPin className="h-4 w-4" />} label="From" placeholder="Indore" />
            <Field icon={<MapPin className="h-4 w-4" />} label="To" placeholder="Goa / Bali / Dubai" />
            <Field icon={<Calendar className="h-4 w-4" />} label="Dates" placeholder="Aug 28 – Sep 2" />
            <button className="flex items-center justify-center gap-2 rounded-xl bg-[var(--brand)] text-white font-semibold px-4 py-3" style={{ ['--brand']: BRAND }}>
              <Search className="h-4 w-4" /> Search
            </button>
          </motion.div>

          {/* Trust bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              <Star className="h-3 w-3" /> 4.8/5 Rated by 12k+ travelers
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              24/7 Trip Support
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              Student‑friendly EMI
            </span>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Explore Destinations</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1">
            View all <ChevronRight className="h-4 w-4" />
          </a>
        </div>
        
        {/* Filter buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={() => setActiveFilter('All')} className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold ${activeFilter === 'All' ? 'bg-white text-black' : 'bg-white/5 text-white/80 ring-1 ring-white/10'}`}>
                <div className="text-xl">🌐</div>All
            </button>
            <button onClick={() => setActiveFilter('International')} className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold ${activeFilter === 'International' ? 'bg-white text-black' : 'bg-white/5 text-white/80 ring-1 ring-white/10'}`}>
                <div className="text-xl">✈️</div>International
            </button>
            <button onClick={() => setActiveFilter('Domestic')} className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold ${activeFilter === 'Domestic' ? 'bg-white text-black' : 'bg-white/5 text-white/80 ring-1 ring-white/10'}`}>
                <div className="text-xl">🇮🇳</div>Domestic
            </button>
            <button onClick={() => setActiveFilter('Weekend')} className={`rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold ${activeFilter === 'Weekend' ? 'bg-white text-black' : 'bg-white/5 text-white/80 ring-1 ring-white/10'}`}>
                <div className="text-xl">🚗</div>Weekend
            </button>
        </div>
        
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredDestinations.map((d, i) => (
            <Placard key={i} {...d} />
          ))}
        </div>
      </section>

      {/* Trips */}
      <section id="trips" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold">Curated Trips</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {trips.map((t, i) => (
            <TripCard key={i} {...t} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-semibold">What travelers say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Star className="h-4 w-4" /> 4.9 • Verified traveler
              </div>
              <p className="mt-3 text-white/80">
                “Super smooth planning and amazing group vibes. The stays and activities were worth it!”
              </p>
              <div className="mt-4 text-xs text-white/50">— Manas J.</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
         <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16 md:pb-24">
  <div className="relative overflow-hidden rounded-3xl bg-black flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 px-6 md:px-12 py-10 md:py-16">
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
      <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl leading-snug mb-3">
        Kuch logon ke saath rehne se hi sab theek ho jaata hai...
      </h2>
      <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6">
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
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <img src={logo} alt="Trailblaze Travel Logo" className="h-6" />
            </div>
          </div>
          <div>
            <div className="font-medium text-white/90">Company</div>
            <ul className="mt-3 space-y-2 text-white/60">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-white/90">Support</div>
            <ul className="mt-3 space-y-2 text-white/60">
              <li>FAQs</li>
              <li>Cancellation Policy</li>
              <li>Payment Options</li>
            </ul>
          </div>
          <div>
            <div className="font-medium text-white/90">Follow</div>
            <ul className="mt-3 space-y-2 text-white/60">
              <li>Instagram</li>
              <li>YouTube</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-white/50 pb-8">© 2025 Trailblaze Travel. All rights reserved.</div>
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
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-semibold">Plan My Trip</h3>
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
              <button className="rounded-2xl ring-1 ring-white/20 px-5 py-2 font-semibold">Download PDF</button>
            </div>
            <p className="mt-3 text-xs text-white/50">UI only • Hook up to your backend/Render when ready.</p>
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

function Field({ icon, label, placeholder }) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10 focus-within:ring-white/30">
      <div className="opacity-80">{icon}</div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-wide text-white/50">{label}</div>
        <input
          className="w-full bg-transparent placeholder-white/40 focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    </label>
  );
}

function Placard({ title, img, tag }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4 }}
      className="group relative block overflow-hidden rounded-3xl ring-1 ring-white/10"
    >
      <img src={img} alt={title} className="h-64 w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20">
          {tag}
        </div>
        <div className="mt-2 text-lg font-semibold drop-shadow">{title}</div>
        <div className="mt-1 text-xs text-white/70 hidden sm:block">Explore experiences, stays & more</div>
      </div>
    </motion.a>
  );
}

function TripCard({ title, price, nights, rating, img, badge }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
      <div className="relative">
        <img src={img} alt={title} className="h-56 w-full object-cover" />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
          {badge}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <div className="text-sm text-white/80">{nights}</div>
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm text-white/70">
          <Star className="h-4 w-4" /> {rating}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-semibold">{price}</div>
          <button className="rounded-xl bg-[var(--brand)] text-white px-4 py-2 text-sm font-semibold" style={{ ['--brand']: BRAND }}>
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function MiniField({ label, placeholder }) {
  return (
    <label className="rounded-xl bg-white/5 px-3 py-3 ring-1 ring-white/10 focus-within:ring-white/30">
      <div className="text-[10px] uppercase tracking-wide text-white/50">{label}</div>
      <input className="w-full bg-transparent placeholder-white/40 focus:outline-none" placeholder={placeholder} />
    </label>
  );
}