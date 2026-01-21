"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section className="relative py-24 bg-black overflow-hidden" id="about">

      {/* Side Decorative Images - Red Tinge with Inversion */}
      <img
        src="/left-letters.svg"
        alt=""
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block invert"
        data-aos="fade-right"
        data-aos-duration="1500"
      />
      <img
        src="/right-letters.svg"
        alt=""
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden md:block invert"
        data-aos="fade-left"
        data-aos-duration="1500"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

        {/* Flower Icon - Styled with Brand Red Shadow */}
        <div data-aos="zoom-in" data-aos-duration="1000">
          <img
            src="https://www.benihanainternational.com/wp-content/uploads/2025/07/flower.svg"
            alt=""
            className="mx-auto mb-10 w-20 md:w-28 brightness-200"
            style={{ filter: "drop-shadow(0px 0px 8px rgba(229, 22, 45, 0.5)) invert(1)" }}
          />
        </div>

        {/* Title - Changed to White with Red Highlight */}
        <h2 
          className="text-3xl md:text-[40px] font-serif leading-tight text-white uppercase tracking-tight"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Wong Kwei <span style={{ color: "#E5162D" }}>CHINESE RESTAURANT</span>
          <span className="block text-lg font-sans font-light tracking-[0.3em] mt-2 text-gray-400">
            Ashby-de-la-Zouch
          </span>
        </h2>

        {/* Description */}
        <div 
          className="mt-8 space-y-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p>
            At Wong Kwei, we bring the authentic flavours of 
            Cantonese and Hong Kong–style cuisine to the heart of Ashby-de-la-Zouch. 
            Our menu is crafted using traditional techniques and fresh ingredients 
            to deliver rich, comforting dishes for every occasion.
          </p>
          <p>
            Whether you’re enjoying a relaxed lunch, a family dinner, or an evening 
            out with friends, Wong Kwei offers a warm atmosphere and a menu full 
            of classic favourites. Every meal is made to be enjoyed.
          </p>
          
          {/* Highlighted Closing Line - Brand Red */}
          <div 
            className="pt-6"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div 
              className="h-px w-20 mx-auto mb-6" 
              style={{ backgroundColor: "#E5162D" }}
            ></div>
            <p className="font-medium tracking-wide text-xl italic" style={{ color: "#E5162D" }}>
              Step in, take a seat, and experience Chinese dining done right.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}