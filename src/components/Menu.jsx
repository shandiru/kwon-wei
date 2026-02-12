import React, { useState, useMemo, useRef } from "react";
import {
  Star,
  Flame,
  X,
  ChevronLeft,
  ChevronRight,
  Users,
  Utensils,
  ArrowRight,
  MousePointer2,
} from "lucide-react";
import { allergens, categories, menuItems, setMenus } from "../Data/Menu";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [excludedAllergens, setExcludedAllergens] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const filteredItems = useMemo(() => {
    if (!selectedCategory || selectedCategory === "Special Set Menu") return [];
    return menuItems.filter((item) => {
      const categoryMatch = item.category === selectedCategory;
      const allergenMatch =
        excludedAllergens.length === 0 ||
        !item.allergens.some((a) => excludedAllergens.includes(a));
      return categoryMatch && allergenMatch;
    });
  }, [selectedCategory, excludedAllergens]);

  const toggleAllergen = (name) => {
    setExcludedAllergens((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  return (
    <div
      id="menu"
      className="relative min-h-screen text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/bg.jpeg')",
      }}
    >
      {/* ── LANTERN ANIMATION & IMAGE ── */}
      <style>
        {`
        @keyframes lanternSwayRight {
            0% { transform: rotate(2deg); }
            50% { transform: rotate(-4deg); }
            100% { transform: rotate(2deg); }
        }
        .lantern-sway-right {
            animation: lanternSwayRight 4.5s ease-in-out infinite;
            transform-origin: top center;
        }
        `}
      </style>

      {/* RIGHT SIDE LANTERN */}
      <div className="absolute top-0 right-[5%] sm:right-[8%] z-50 w-16 sm:w-24 lg:w-32 pointer-events-none lantern-sway-right">
        <img
          src="/lattern.png"
          alt="Decorative Lantern"
          className="w-full h-auto opacity-80"
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full">
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-screen h-[35vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Chinese Cuisine"
          />
          <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
            <h2 className="text-4xl font-serif">Taste of Tradition</h2>
            <p className="mt-2 italic text-[#E5162D]">
              Exquisite Cantonese Flavours
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[60%] px-6 md:px-16 py-12 lg:py-20">
          <header className="mb-12">
            <h1 className="text-6xl font-serif mb-4">Our Menu</h1>
            <p className="text-gray-400 max-w-md">
              Please call us if you would like any adjustments to suit your
              allergen requirements
            </p>
          </header>

          {/* ALLERGEN FILTER */}
          <div className="mb-10 bg-white/5 p-4 rounded-2xl border border-white/10">
            <h3 className="text-[10px] font-black mb-3 uppercase tracking-[0.2em] flex items-center gap-2 text-[#E5162D]">
              <X className="w-3 h-3" /> Filter by Allergens
            </h3>

            <div className="flex flex-wrap gap-2">
              {allergens.map((allergen) => {
                const Icon = allergen.icon;
                const active = excludedAllergens.includes(allergen.name);

                return (
                  <button
                    key={allergen.name}
                    onClick={() => toggleAllergen(allergen.name)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-2 border transition-all ${
                      active
                        ? "bg-[#E5162D] text-white border-transparent"
                        : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {allergen.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CATEGORY SCROLL */}
          <div className="sticky top-0 backdrop-blur-md z-20 border-b border-white/5 mb-12 -mx-4 px-4 py-4">
            <div className="relative flex items-center group">
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 z-50 p-2 text-white rounded-full shadow-xl hover:scale-110 transition-transform lg:flex hidden items-center justify-center -translate-x-1/2"
                style={{ backgroundColor: "#E5162D" }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div
                ref={scrollRef}
                className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth flex flex-nowrap gap-3 w-full touch-pan-x"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <button
                  onClick={() => setSelectedCategory("Special Set Menu")}
                  className={`whitespace-nowrap px-6 lg:px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all flex-shrink-0 ${
                    selectedCategory === "Special Set Menu"
                      ? "text-white border-transparent"
                      : "border-white/10 text-white hover:border-white/40"
                  }`}
                  style={
                    selectedCategory === "Special Set Menu"
                      ? { backgroundColor: "#E5162D" }
                      : {}
                  }
                >
                  Set Menus
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`whitespace-nowrap px-6 lg:px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all flex-shrink-0 ${
                      selectedCategory === cat.name
                        ? "text-white border-transparent"
                        : "border-white/10 text-white hover:border-white/40"
                    }`}
                    style={
                      selectedCategory === cat.name
                        ? { backgroundColor: "#E5162D" }
                        : {}
                    }
                  >
                    <span className="block">{cat.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => scroll("right")}
                className="absolute right-0 z-50 p-2 text-white rounded-full shadow-xl hover:scale-110 transition-transform lg:flex hidden items-center justify-center translate-x-1/2"
                style={{ backgroundColor: "#E5162D" }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MENU DISPLAY LOGIC */}
          <div className="min-h-[300px]">
            {/* Case 1: No Category Selected */}
            {!selectedCategory && (
              <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl">
                <MousePointer2 className="mx-auto mb-4 text-[#E5162D] animate-pulse" />
                <p className="text-gray-400 italic">
                  Select a category to view menu items
                </p>
              </div>
            )}

            {/* Case 2: Set Menu Selected (ONLY displays if no allergens are excluded) */}
            {selectedCategory === "Special Set Menu" && excludedAllergens.length === 0 && (
              <div className="space-y-8">
                {setMenus.map((set, i) => (
                  <div
                    key={i}
                    className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-2xl font-serif">{set.name}</h3>
                    <p className="text-[#E5162D] mt-2 font-bold">{set.price}</p>
                    {set.items && (
                        <p className="text-gray-400 text-sm mt-3 italic">{set.items}</p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Case 3: Set Menu Selected BUT Allergens are active (Warning Message) */}
            {selectedCategory === "Special Set Menu" && excludedAllergens.length > 0 && (
              <div className="py-20 text-center border border-dashed border-[#E5162D]/30 rounded-3xl">
                <p className="text-gray-400 italic px-4">
                  Set menus are fixed and cannot be filtered by allergens. <br />
                  <span className="text-white mt-2 block">Please select an individual category to filter dishes.</span>
                </p>
              </div>
            )}

            {/* Case 4: Regular Category Items */}
            {selectedCategory && selectedCategory !== "Special Set Menu" && (
              <div className="space-y-6">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between border-b border-white/10 pb-6 group"
                    >
                      <div className="pr-4">
                        <h3 className="font-medium group-hover:text-[#E5162D] transition-colors">{item.name}</h3>
                        <p className="text-xs text-gray-400 italic mt-1">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-[#E5162D] font-bold whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    No items found matching your allergen criteria.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}