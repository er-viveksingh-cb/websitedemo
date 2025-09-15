import React, { useState } from "react";
import Locationimage from "./location.png"

const locations = [
  {
    city: "Mumbai",
    address: "123 Business Tower, Bandra Kurla Complex, Mumbai, 400051",
    image: Locationimage, // Placeholder image
  },
  {
    city: "Pune",
    address:
      "Kataria Chambers, ITI Road, Infront of Reliance Digital, Aundh, Pune, Maharashtra 411007",
    image: "https://via.placeholder.com/800x500",
  },
  {
    city: "Nashik",
    address:
      "IKON, 3rd Floor, Above Westside, Opp. Sun Bird Building, College Road, Nashik – 422005",
    image: "https://via.placeholder.com/800x500",
  },
  {
    city: "Nagpur",
    address:
      "6th Floor, Tower 10, N Ambazari Rd, beside Alankar Theater, Shankar Nagar, Nagpur",
    image: "https://via.placeholder.com/800x500",
  },
];

const LocationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default active (Pune)

  return (
    <section className="py-20 bg-white px-[120px]">
      <div className="mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="inline-block text-sm font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full mb-6">
              Trusted Guidance Everywhere.
            </span>
            <h2 className="mt-4 text-4xl font-light text-gray-900 leading-snug">
              Trusted care, now across <br />
              <span className="font-semibold">21+ centers near you...</span>
            </h2>
          </div>
          <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
            View all Centers
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left side - Cities */}
          <div className="w-['400px] space-y-4">
            {locations.map((loc, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer rounded-xl border ${
                  activeIndex === index
                    ? "bg-blue-50 border-blue-500"
                    : "bg-gray-50 border-gray-200"
                } p-5 flex justify-between items-center transition`}
              >
                <div>
                  <h3 className="text-lg font-semibold">{loc.city}</h3>
                  <p className="text-sm text-gray-600 mt-1 w-2xl">{loc.address}</p>
                </div>
                <button
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    activeIndex === index
                      ? "bg-blue-600 text-white"
                      : "bg-black text-white"
                  }`}
                >
                  ↗
                </button>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className=" ">
            <img
              src={locations[activeIndex].image}
              alt={locations[activeIndex].city}
              className="h-[490px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
