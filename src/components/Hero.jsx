"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    // Added pt-24 to give space for the fixed navbar
    <section className="w-full min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 pt-24 md:pt-28" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* LEFT BIG HERO WITH VIDEO */}
        <div className="relative lg:col-span-2 rounded-3xl overflow-hidden">
          <video
            src="/vedio.mp4"
            autoPlay loop muted playsInline
            className="w-full h-[65vh] md:h-[80vh] lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

          <div className="absolute bottom-10 left-10">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif leading-tight">
              SUSHI <br /> SENSATION
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE BENTO GRID */}
        <div className="flex flex-col gap-6">
          {[
            { img: "/h1.avif", title: "MENU", desc: "Discover our signature dishes" },
            { img: "/h2.avif", title: "RESERVATION", desc: "Book your dining experience" },
            { img: "/h3.avif", title: "OUR PLACE", desc: "Explore our restaurant story" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden h-48 md:h-56 cursor-pointer"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>
              
              {/* Animation Logic remains same */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 text-lg font-semibold transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-0">
                {item.title} <ArrowRight className="h-5 w-5" />
              </div>

              <div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-2px] text-sm italic">
                {item.desc} <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}