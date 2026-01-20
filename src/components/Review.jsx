"use client";

import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    text: `"Good portion size, good food, and nice atmosphere. I love that this place served mocktails and made it just as fancy as regular cocktails. The dumplings look handmade which was excellent, and the duck was crispy and nice."`,
    img: "Joelle Carr.png",
    name: "Joelle Carr",
  },
  {
    text: `"Amazing food. Great atmosphere. Really friendly staff, they really cant do enough. We went as a party of 7, and they really accommodated us. Decent wine selections & the food is delicious."`,
    img: "sakalabudhi123.png",
    name: "sakalabudhi123",
  },
  {
    text: `"Probably the best dine in Chinese around. Some work colleagues are from China and always want to come back here because of how nice and authentic the food is. I would always recommend to book a table."`,
    img: "Chris Tilson.png",
    name: "Chris Tilson",
  },
  {
    text: `"Really fast service my favourite Chinese place is definitely here! Food was amazing 10 out of 10 very stuffed after. Our favourites were the teriyaki chicken and salt and chilli chips."`,
    img: "Jasmine Adams.png",
    name: "Jasmine Adams",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden" id="reviews">
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h2 className="text-sm tracking-[0.3em] font-bold" style={{ color: "#E5162D" }}>
          TESTIMONIALS
        </h2>
        <h3 className="text-4xl md:text-5xl font-serif mt-3 text-white">
          Our Customers Love Us
        </h3>
        <div 
          className="h-1 w-20 mx-auto mt-6" 
          style={{ backgroundColor: "#E5162D" }}
        ></div>
      </div>

      {/* Review Grid */}
      <div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 border border-white/10"
        data-aos="fade-up"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-10 border-b border-white/10 md:border-r last:border-b-0 group hover:bg-white/[0.02] transition-colors duration-500
                       md:[&:nth-child(2)]:border-r-0 md:[&:nth-child(4)]:border-r-0
                       md:[&:nth-child(3)]:border-b-0
                       flex flex-col gap-6"
          >
            {/* 5 Star Rating */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#E5162D" stroke="#E5162D" />
              ))}
            </div>

            <p className="text-gray-300 leading-relaxed italic text-lg font-light">
              {review.text}
            </p>

            <div className="flex items-center gap-4 mt-auto">
              <div className="relative">
                <div 
                  className="absolute -inset-1 rounded-full blur-[2px] opacity-0 group-hover:opacity-50 transition-opacity"
                  style={{ backgroundColor: "#E5162D" }}
                ></div>
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover relative border border-white/10"
                />
              </div>
              <div>
                <p className="text-white font-medium tracking-wide">{review.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Read More */}
      <div className="text-center mt-16" data-aos="zoom-in">
        <button 
          className="px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] border transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ 
            borderColor: "#E5162D", 
            color: "white",
            backgroundColor: "transparent"
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#E5162D")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          READ MORE REVIEWS
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;