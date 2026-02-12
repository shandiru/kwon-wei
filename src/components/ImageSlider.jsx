import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "c1.png",
  "h3.png",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1400&q=80",
];

const ImageSlider3 = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <section
      id="gallery"
      className="relative py-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/bg.jpeg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-sm font-black text-[#E5162D] uppercase tracking-[0.3em] mb-2">
            Visual Journey
          </h2>
          <p className="text-4xl font-serif text-white">Our Gallery</p>
        </div>

        <div
          className="relative flex items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-4 z-20 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 border border-white/10 bg-[#E5162D]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div className="flex overflow-hidden w-full rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  index *
                  (100 /
                    (typeof window !== "undefined" &&
                    window.innerWidth < 768
                      ? 1
                      : 3))
                }%)`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="min-w-full md:min-w-[33.333%] sm:min-w-[50%] flex-shrink-0"
                >
                  <div className="relative group overflow-hidden rounded-3xl h-[450px]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                    <img
                      src={img}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt={`Gallery ${i + 1}`}
                    />

                    <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-2xl pointer-events-none z-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-4 z-20 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 border border-white/10 bg-[#E5162D]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" data-aos="fade-up">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: index === i ? "24px" : "8px",
                backgroundColor:
                  index === i ? "#E5162D" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImageSlider3;
