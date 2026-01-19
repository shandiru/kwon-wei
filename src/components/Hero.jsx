"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  // SMOOTH SCROLL FUNCTION (Matches Navbar & Footer)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjusted for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 pt-24 md:pt-28" id="home">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* LEFT BIG HERO WITH VIDEO */}
        <div className="relative lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl">
          <video
            src="/vedio.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-[65vh] md:h-[80vh] lg:h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute bottom-10 left-10">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif leading-tight tracking-tighter">
              SUSHI <br /> SENSATION
            </h1>
          </div>
        </div>

        {/* RIGHT SIDE BENTO GRID */}
        <div className="flex flex-col gap-6">
          {[
            { img: "/h1.avif", title: "MENU", desc: "Discover our signature dishes", id: "menu" },
            { img: "/h2.avif", title: "RESERVATION", desc: "Book your dining experience", id: "contact" },
            { img: "/h3.avif", title: "OUR STORY", desc: "Explore our restaurant journey", id: "about" },
          ].map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="group relative rounded-2xl overflow-hidden h-48 md:h-56 cursor-pointer border border-white/5"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              
              {/* Normal State Label */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 text-lg font-semibold transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-0">
                {item.title} <ArrowRight className="h-5 w-5 text-orange-500" />
              </div>

              {/* Hover State Description */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-2px] text-sm italic text-orange-400">
                {item.desc} <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}