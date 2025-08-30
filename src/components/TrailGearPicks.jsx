import React from "react";
import trackingshoes from "../assets/trackingshoes.svg";
import tripod from "../assets/tripod.svg";
import jacket from "../assets/jacket.svg";
import brush from "../assets/smallskinbrush.svg";
import bg from "../assets/skinbrushgear.svg";

export default function TrailGearPicks() {
  const items = [
    { name: "WOODLAND TREKKING SHOES", price: "₹ 8000/-", img: trackingshoes },
    { name: "REEBOK WINTER JACKET", price: "₹ 12000/-", img: jacket },
    { name: "DIGITEK TRIPOD STAND", price: "₹ 889/-", img: tripod },
    { name: "REEBOK WINTER JACKET", price: "₹ 12000/-", img: jacket },
    { name: "DIGITEK TRIPOD STAND", price: "₹ 889/-", img: tripod },
  ];

  return (
    <section
      className="mx-auto py-10 px-4 md:px-12 rounded-2xl"
      style={{
        maxWidth: "1100px", // 👈 smaller than full width
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2
          className="text-2xl md:text-3xl font-bold"
          style={{ fontFamily: "Norwester, sans-serif" }}
        >
          TRAIL GEAR PICKS
        </h2>
        <p className="text-gray-700 text-sm md:text-base">
          Yeh chhoti cheezein, bade safar banati hain.
        </p>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-full max-w-[160px]"
          >
            {/* Product Image */}
            <div className="h-28 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.name}
                className="h-full object-contain"
              />
            </div>

            {/* Item Name */}
            <p
              className="mt-3 text-xs text-center"
              style={{ fontFamily: "Norwester, sans-serif" }}
            >
              {item.name}
            </p>

            {/* Price with Brush Background */}
            <div className="relative mt-2 w-full flex justify-center">
              <img src={brush} alt="price-bg" className="w-28 h-8 object-contain" />
              <span
                className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-800"
                style={{ fontFamily: "Norwester, sans-serif" }}
              >
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
