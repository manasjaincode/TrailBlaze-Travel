// import React, { useState, useMemo } from "react";
// import { ChevronDown, Phone, Star, MapPin, Play, ArrowRight, CalendarDays, ChevronRight } from "lucide-react";

// export default function LehLadakhClone() {
//   const [faqOpen, setFaqOpen] = useState(null);
//   const [placeOpen, setPlaceOpen] = useState(0);

//   const packages = useMemo(
//     () => [
//       { name: "7 Days Leh to Leh with Turtuk", dur: "7D/6N", price: "₹ 25,999" },
//       { name: "8 Days Leh to Leh with Turtuk & Tso Moriri", dur: "8D/7N", price: "₹ 28,999" },
//       { name: "8 Days Leh to Leh With Umling La", dur: "8D/7N", price: "₹ 29,999" },
//       { name: "9 Days Delhi to Leh With Umling La", dur: "9D/8N", price: "₹ 31,999" },
//       { name: "10 Days Delhi Leh Delhi with Umling La", dur: "10D/9N", price: "₹ 35,999" },
//       { name: "11 Days Delhi to Leh with Umling La Road Trip", dur: "11D/10N", price: "₹ 39,999" },
//       { name: "11 Days Srinagar Leh Delhi with Umling La", dur: "11D/10N", price: "₹ 40,999" },
//       { name: "Leh Ladakh Bike Trip Packages", dur: "10D/9N", price: "₹ 23,999" },
//       { name: "Leh Ladakh Bike Trip From Manali", dur: "9D/8N", price: "₹ 30,499" },
//       { name: "Srinagar Kargil Leh", dur: "8D/7N", price: "₹ 30,499" },
//     ],
//     []
//   );

//   const places = [
//     {
//       title: "Hall of Fame Museum",
//       body:
//         "Built by the Indian Army; popular museum honoring brave soldiers with artifacts from the Indo–Pak conflicts.",
//     },
//     {
//       title: "Shanti Stupa",
//       body:
//         "Iconic white-domed stupa with panoramic views of Leh; stunning during sunrise and sunset.",
//     },
//     {
//       title: "Royal Leh Palace",
//       body:
//         "16th‑century palace on Namgyal Hill featuring Tibetan architecture and a museum of artifacts.",
//     },
//     {
//       title: "Magnetic Hill",
//       body:
//         "Famous optical illusion spot where vehicles appear to roll uphill; along the Leh–Kargil–Srinagar highway.",
//     },
//     {
//       title: "Gurudwara Pathar Sahib",
//       body:
//         "Sikh shrine maintained by the Indian Army; known for langar and a tranquil ambiance.",
//     },
//     {
//       title: "Pangong Lake",
//       body:
//         "High‑altitude blue lake made famous by films; colors shift dramatically through the day.",
//     },
//     {
//       title: "Nubra Valley",
//       body:
//         "Sand dunes, monasteries, starry nights; gateway to Turtuk village and hot springs at Panamik.",
//     },
//     {
//       title: "Thiksey Monastery",
//       body:
//         "Hilltop gompa often called a mini‑Potala; known for the Maitreya Buddha statue.",
//     },
//     {
//       title: "Tso Moriri",
//       body:
//         "Vast high‑altitude lake in a protected reserve; a paradise for birders and photographers.",
//     },
//     {
//       title: "Hemis National Park",
//       body:
//         "Snow leopard country with diverse Himalayan fauna; trekking and nature‑watching haven.",
//     },
//     {
//       title: "Diskit Gompa",
//       body:
//         "Oldest and largest monastery in Nubra; overlooks the valley with a towering Maitreya statue.",
//     },
//     {
//       title: "Sangam Point",
//       body:
//         "Striking confluence of the Indus (green) and Zanskar (brown) rivers; rafting hub in summer.",
//     },
//     {
//       title: "Zanskar Valley",
//       body:
//         "Remote, monastery‑studded valley famous for the winter Chadar Trek on the frozen river.",
//     },
//   ];

//   const faqs = [
//     {
//       q: "What is the best time to visit Leh Ladakh?",
//       a:
//         "Generally May–September for road trips and pleasant sightseeing. Winters (Dec–Feb) are ideal for snow landscapes and the Chadar Trek.",
//     },
//     {
//       q: "Do I need an Inner Line Permit (ILP)?",
//       a:
//         "ILP is required for select areas like Nubra, Pangong, Tso Moriri. Check latest rules and arrange permits ahead of travel.",
//     },
//     {
//       q: "Is acclimatization necessary?",
//       a:
//         "Yes. Plan easy first days in Leh, stay hydrated, avoid exertion/alcohol, and always follow your guide’s advice.",
//     },
//     {
//       q: "What’s typically included in tour packages?",
//       a:
//         "Transport, stays, some meals, guided sightseeing, and assistance/permits. Exact inclusions vary by package.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white text-neutral-900">
//       {/* Head font preload (for preview environments you can move this into index.html) */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
//         rel="stylesheet"
//       />
//       <style>{`:root { --brand:#008342 } body { font-family: 'Poppins', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif }`}</style>

//       {/* Top offer ribbon */}
//       <div className="w-full bg-emerald-600 text-white text-sm">
//         <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
//           <div className="font-medium">Monsoon sale is live — get up to ₹5000 off</div>
//           <a href="#contact" className="inline-flex items-center gap-1 underline underline-offset-2">
//             <Phone size={16} /> +91 8287636079
//           </a>
//         </div>
//       </div>

//       {/* Basic navbar (placeholder) */}
//       <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-36 h-8 bg-neutral-200 rounded" aria-label="Logo placeholder" />
//             <span className="sr-only">Logo</span>
//           </div>
//           <div className="hidden md:flex items-center gap-6 text-sm">
//             <a className="hover:text-emerald-700" href="#">International Trips</a>
//             <a className="hover:text-emerald-700" href="#">Domestic Trips</a>
//             <a className="hover:text-emerald-700" href="#">Weekend Trips</a>
//             <a className="hover:text-emerald-700" href="#">Upcoming Trips</a>
//             <a className="hover:text-emerald-700" href="#">Wellness Retreats</a>
//             <a className="hover:text-emerald-700" href="#">Corporate Trips</a>
//           </div>
//           <button className="md:hidden px-3 py-2 rounded-xl border">Menu</button>
//         </div>
//       </nav>

//       {/* Breadcrumbs */}
//       <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-neutral-600">
//         Home / Destination / <span className="text-neutral-900 font-medium">Leh Ladakh Tour Packages</span>
//       </div>

//       {/* Hero section */}
//       <section className="relative">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid md:grid-cols-12 gap-6 items-stretch">
//             {/* Media */}
//             <div className="md:col-span-7">
//               <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
//                 <img
//                   src="https://placehold.co/1200x675?text=Hero+Image/Video+Placeholder"
//                   alt="Leh Ladakh hero"
//                   className="w-full h-full object-cover"
//                 />
//                 <button className="absolute inset-0 m-auto h-16 w-16 grid place-items-center rounded-full bg-white/80 hover:bg-white/90 shadow"><Play/></button>
//               </div>
//             </div>
//             {/* Title and meta */}
//             <div className="md:col-span-5 flex flex-col">
//               <div className="flex items-center gap-2 text-amber-500 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} size={18} fill="#fbbf24" stroke="#fbbf24" />
//                 ))}
//                 <span className="text-neutral-600 text-sm">(4.9/5 • 3k+ reviews)</span>
//               </div>
//               <h1 className="text-3xl md:text-4xl font-semibold leading-tight">Leh Ladakh Tour Packages</h1>
//               <p className="mt-3 text-neutral-700">
//                 20+ Leh Ladakh Tour Packages starting from <span className="font-semibold">₹22,999</span>
//               </p>
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {[
//                   "Flights Assistance",
//                   "Verified Stays",
//                   "Guided Sightseeing",
//                   "Permits Support",
//                 ].map((t) => (
//                   <span key={t} className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="mt-5 flex gap-3">
//                 <a href="#best-sellers" className="px-5 py-3 rounded-xl bg-[var(--brand)] text-white font-medium">View Best Packages</a>
//                 <a href="#contact" className="px-5 py-3 rounded-xl border font-medium">Get a Callback</a>
//               </div>
//               <div className="mt-auto pt-6 text-sm text-neutral-600 flex items-center gap-2">
//                 <MapPin size={16} /> Leh • Nubra • Pangong • Turtuk • Tso Moriri
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Best Selling Packages */}
//       <section id="best-sellers" className="py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex items-center gap-3 mb-6">
//             <h2 className="text-2xl md:text-3xl font-semibold">Best Leh Ladakh Tour Packages with Detailed Itinerary — Best Selling</h2>
//           </div>

//           <div className="overflow-hidden rounded-2xl border">
//             <table className="w-full text-left">
//               <thead className="bg-neutral-50 text-neutral-600 text-sm">
//                 <tr>
//                   <th className="py-3 pl-5 pr-2">Package</th>
//                   <th className="py-3 px-2 hidden md:table-cell">Duration</th>
//                   <th className="py-3 px-2">Starting Price</th>
//                   <th className="py-3 pr-5 pl-2 text-right"> </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y">
//                 {packages.map((p, i) => (
//                   <tr key={i} className="hover:bg-neutral-50">
//                     <td className="py-4 pl-5 pr-2 font-medium">{p.name}</td>
//                     <td className="py-4 px-2 hidden md:table-cell text-neutral-600">{p.dur}</td>
//                     <td className="py-4 px-2 font-semibold">{p.price}</td>
//                     <td className="py-4 pr-5 pl-2 text-right">
//                       <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--brand)] text-white">
//                         View Itinerary <ArrowRight size={18} />
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* small helper bar */}
//           <div className="mt-4 text-sm text-neutral-600 flex items-center gap-2">
//             <CalendarDays size={16} />
//             Custom dates? <a href="#contact" className="font-medium text-emerald-700 underline underline-offset-2">We’ll plan it for you</a>
//           </div>
//         </div>
//       </section>

//       {/* Best Places to Visit (accordion) */}
//       <section className="py-12 bg-neutral-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6">Best Places to Visit in Ladakh</h2>
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="space-y-3">
//               {places.map((pl, idx) => (
//                 <div key={idx} className="rounded-2xl border bg-white overflow-hidden">
//                   <button
//                     onClick={() => setPlaceOpen(placeOpen === idx ? null : idx)}
//                     className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
//                   >
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 grid place-items-center font-semibold">
//                         {idx + 1}
//                       </div>
//                       <div>
//                         <div className="font-medium">{pl.title}</div>
//                         <div className="text-xs text-neutral-500">Leh Ladakh • Attraction</div>
//                       </div>
//                     </div>
//                     <ChevronDown className={`transition ${placeOpen === idx ? "rotate-180" : "rotate-0"}`} />
//                   </button>
//                   {placeOpen === idx && (
//                     <div className="px-5 pb-5 text-neutral-700">
//                       {pl.body}
//                       <div className="mt-3 aspect-[16/9] bg-neutral-100 rounded-xl grid place-items-center text-sm text-neutral-500">
//                         Image / Map Placeholder
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="rounded-2xl overflow-hidden shadow-lg">
//               <img
//                 src="https://placehold.co/900x1200?text=Ladakh+Gallery+Placeholder"
//                 alt="Gallery collage"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Best Time to Visit (season cards) */}
//       <section className="py-12 md:py-16">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-8">Best Time to Visit Ladakh</h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { season: "Summer", months: "May – September", day: "20°C – 30°C", night: "~5°C", best: "Sightseeing, camping, treks" },
//               { season: "Autumn", months: "October – November", day: "10°C – 20°C", night: "0°C – 10°C", best: "Golden vistas, fewer crowds" },
//               { season: "Winter", months: "December – February", day: "-5°C – 5°C", night: "-15°C – -30°C", best: "Snowscapes, Chadar Trek" },
//               { season: "Spring", months: "March – April", day: "5°C – 15°C", night: "-5°C – 5°C", best: "Bloom, early trails" },
//             ].map((s) => (
//               <div key={s.season} className="rounded-2xl border p-5">
//                 <div className="text-sm text-neutral-500">{s.months}</div>
//                 <div className="text-xl font-semibold mt-1">{s.season}</div>
//                 <div className="mt-3 text-sm">
//                   <div>Day: <span className="font-medium">{s.day}</span></div>
//                   <div>Night: <span className="font-medium">{s.night}</span></div>
//                 </div>
//                 <div className="mt-4 text-neutral-700">Best for: {s.best}</div>
//                 <div className="mt-5 aspect-video rounded-xl bg-neutral-100 grid place-items-center text-sm text-neutral-500">Image Placeholder</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Cuisines (rich text) */}
//       <section className="py-12 bg-neutral-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6">Must‑Try Cuisines of Ladakh</h2>
//           <div className="prose max-w-none">
//             <p>
//               Ladakh’s cuisine blends Tibetan, Indian, and Central Asian influences — hearty and warming for the high‑altitude climate. A few classics:
//             </p>
//             <ol>
//               <li><strong>Thukpa</strong> — comforting noodle soup after a long day.</li>
//               <li><strong>Momos</strong> — steamed/fried dumplings with spicy chutneys.</li>
//               <li><strong>Butter Tea (Gur Gur Chai)</strong> — salty, buttery, perfect for cold weather.</li>
//               <li><strong>Chutagi</strong> — bow‑tie pasta‑like dumplings in a rich stew.</li>
//               <li><strong>Tingmo</strong> — fluffy steamed bread that pairs with curries.</li>
//               <li><strong>Apricot Jam/Juices</strong> — local specialty and great souvenirs.</li>
//               <li><strong>Yak Meat Dishes</strong> — regional delicacies for the adventurous.</li>
//             </ol>
//           </div>
//         </div>
//       </section>

//       {/* FAQs */}
//       <section className="py-12 md:py-16" id="faqs">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
//           <div className="space-y-3">
//             {faqs.map((f, i) => (
//               <div key={i} className="border rounded-2xl overflow-hidden">
//                 <button
//                   onClick={() => setFaqOpen(faqOpen === i ? null : i)}
//                   className="w-full px-5 py-4 flex items-center justify-between text-left"
//                 >
//                   <span className="font-medium">{f.q}</span>
//                   <ChevronDown className={`transition ${faqOpen === i ? "rotate-180" : "rotate-0"}`} />
//                 </button>
//                 {faqOpen === i && (
//                   <div className="px-5 pb-5 text-neutral-700">{f.a}</div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact/help strip */}
//       <section id="contact" className="py-10 bg-[var(--brand)] text-white">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div>
//             <div className="text-xl font-semibold">Need help planning your Ladakh trip?</div>
//             <div className="opacity-90">Talk to a travel expert now or request a callback.</div>
//           </div>
//           <div className="flex flex-wrap gap-3">
//             <a href="tel:+918287636079" className="px-5 py-3 rounded-xl bg-white text-[var(--brand)] font-semibold inline-flex items-center gap-2">
//               <Phone size={18} /> Call Now
//             </a>
//             <a href="#" className="px-5 py-3 rounded-xl border border-white font-semibold inline-flex items-center gap-2">
//               Request Callback
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer (simple) */}
//       <footer className="py-10 border-t">
//         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
//           <div>
//             <div className="w-36 h-8 bg-neutral-200 rounded mb-3" />
//             <p className="text-neutral-600">Travel with confidence — curated trips, trusted partners, and transparent pricing.</p>
//           </div>
//           <div>
//             <div className="font-semibold mb-3">Explore</div>
//             <ul className="space-y-2 text-neutral-600">
//               <li>Domestic Trips</li>
//               <li>International Trips</li>
//               <li>Weekend Getaways</li>
//               <li>Upcoming Trips</li>
//             </ul>
//           </div>
//           <div>
//             <div className="font-semibold mb-3">Destinations</div>
//             <ul className="space-y-2 text-neutral-600">
//               <li>Leh • Ladakh</li>
//               <li>Spiti</li>
//               <li>Meghalaya</li>
//               <li>Kashmir</li>
//             </ul>
//           </div>
//           <div>
//             <div className="font-semibold mb-3">Contact</div>
//             <ul className="space-y-2 text-neutral-600">
//               <li>+91 8287636079</li>
//               <li>hello@example.com</li>
//               <li>Mon–Sat • 10am–7pm</li>
//             </ul>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} Trailblaze Travel — Placeholder UI clone for internal build.</div>
//       </footer>

//       {/* Sticky CTA (mobile) */}
//       <div className="fixed bottom-0 inset-x-0 z-40 md:hidden">
//         <div className="mx-3 mb-3 rounded-2xl shadow-lg bg-white border p-3 flex items-center justify-between">
//           <div>
//             <div className="text-xs text-neutral-500">From</div>
//             <div className="font-semibold -mt-0.5">₹22,999</div>
//           </div>
//           <a href="#best-sellers" className="px-4 py-2 rounded-xl bg-[var(--brand)] text-white font-medium">View Packages</a>
//         </div>
//       </div>
//     </div>
//   );
// }