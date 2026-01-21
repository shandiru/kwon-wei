import React from "react";
import { Link } from "react-router-dom";

export default function VenueSection() {
  const venues = [
    {
      title: "Birmingham",
      location: "West Midlands",
      button: "Explore Birmingham",
      image: "https://www.benihanainternational.com/wp-content/uploads/2025/07/Chelsea-Hero-Shot.jpg", // Replace with Birmingham image
      link: "/locations/birmingham",
    },
    {
      title: "Leicester",
      location: "East Midlands",
      button: "Explore Leicestershire",
      image: "https://www.benihanainternational.com/wp-content/uploads/2025/07/CG-Ground-Floor.jpg", // Replace with Leicester image
      link: "/locations/leicester",
    },
  ];

  return (
    // Changed background to black
    <section className="py-12 flex justify-center bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {venues.map((v, i) => (
          <Link
            key={i}
            to={v.link}
            className="relative w-[340px] md:w-[380px] h-[480px] rounded-[30px] overflow-hidden shadow-md group"
          >
            {/* Background Image */}
            <img
              src={v.image}
              alt={v.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay - Darkened for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Updated Content */}
            <div className="relative z-20 h-full flex flex-col justify-between p-6">
              <h3 className="text-white text-4xl font-bold uppercase text-center tracking-wide drop-shadow-lg">
                {v.title}
              </h3>

              <div className="text-center pb-3">
                <p className="text-white text-sm opacity-90 mb-4 uppercase tracking-widest">
                  {v.location}
                </p>

                <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                  {v.button}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}