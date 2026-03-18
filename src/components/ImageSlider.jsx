import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "i1.png",
  "i2.png",
  "i3.png",
  "i5.png",
  "i6.png",
  "i7.png",
  "i8.png",
  "i9.png",
  "i10.png",
  "i11.png",
];

const GAP = 16; // px (1rem)

const getVisibleCount = () => {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
};

const ImageSlider3 = () => {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [slideWidth, setSlideWidth] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const recalcSlideWidth = useCallback((count) => {
    if (!trackRef.current) return;
    const containerWidth = trackRef.current.offsetWidth;
    const sw = count === 1
      ? containerWidth
      : (containerWidth - GAP * (count - 1)) / count;
    setSlideWidth(sw);
  }, []);

  // On mount — measure after first render
  useEffect(() => {
    recalcSlideWidth(visibleCount);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newCount = getVisibleCount();
      setVisibleCount(newCount);
      setIndex((prev) => Math.min(prev, images.length - newCount));
      recalcSlideWidth(newCount);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [recalcSlideWidth]);

  const maxIndex = images.length - visibleCount;
  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const translateX = index * (slideWidth + (visibleCount === 1 ? 0 : GAP));

  return (
    <section
      id="gallery"
      className="relative py-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-down">
          <h2 className="text-sm font-black text-[#E5162D] uppercase tracking-[0.3em] mb-2">
            Visual Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-serif text-white">Our Gallery</p>
        </div>

        {/* Slider Wrapper */}
        <div className="relative px-6 sm:px-8" data-aos="fade-up" data-aos-delay="200">

          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 border border-white/10 bg-[#E5162D] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="overflow-hidden rounded-2xl sm:rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${translateX}px)`,
                gap: visibleCount === 1 ? "0px" : `${GAP}px`,
              }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: slideWidth > 0 ? `${slideWidth}px` : "100%" }}
                >
                  <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl h-[280px] sm:h-[360px] lg:h-[450px]">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={img}
                      className="w-full h-full object-top transition-transform duration-1000 group-hover:scale-110"
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
            disabled={index >= maxIndex}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 border border-white/10 bg-[#E5162D] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" data-aos="fade-up">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1.5 rounded-full transition-all"
              style={{
                width: index === i ? "24px" : "8px",
                backgroundColor: index === i ? "#E5162D" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImageSlider3;