"use client";

import React, { useState, useMemo, useRef } from "react";
import { Star, Flame, X, ChevronLeft, ChevronRight, Users, Utensils, ArrowRight, MousePointer2 } from "lucide-react";
import { allergens, categories, menuItems, setMenus } from "../Data/Menu";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [excludedAllergens, setExcludedAllergens] = useState([]);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredItems = useMemo(() => {
    if (!selectedCategory) return [];
    return menuItems.filter(item => {
      const categoryMatch = item.category === selectedCategory;
      const allergenMatch = excludedAllergens.length === 0 || !item.allergens.some(a => excludedAllergens.includes(a));
      return categoryMatch && allergenMatch;
    });
  }, [selectedCategory, excludedAllergens]);

  const toggleAllergen = (name) => {
    setExcludedAllergens(prev => 
      prev.includes(name) ? prev.filter(a => a !== name) : [...prev, name]
    );
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="flex flex-col lg:flex-row w-full relative">
        
        {/* LEFT IMAGE SECTION */}
        <div className="w-full lg:w-[40%] lg:sticky lg:top-0 lg:h-screen h-[35vh] overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Chinese Cuisine"
          />
          <div className="absolute bottom-10 left-10 z-20 hidden lg:block">
            <h2 className="text-4xl font-serif text-orange-50">Taste of Tradition</h2>
            <p className="text-orange-400 mt-2 italic">Exquisite Cantonese Flavours</p>
          </div>
        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="w-full lg:w-[60%] px-6 md:px-16 py-12 lg:py-20">
          
          <header className="mb-12">
            <h1 className="text-6xl font-serif mb-4 text-orange-50 tracking-tight">Our Menu</h1>
            <p className="text-gray-500 max-w-md">Select a category below to explore our authentic dishes.</p>
          </header>

          {/* ALLERGEN FILTER - ADDED relative z-40 to fix clicking */}
          <div className="relative z-40 mb-10 bg-white/5 p-4 rounded-2xl border border-white/10">
            <h3 className="text-[10px] font-black mb-3 text-orange-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <X className="w-3 h-3" /> Filter by Allergens
            </h3>
            <div className="flex flex-wrap gap-2">
              {allergens.map(allergen => {
                const Icon = allergen.icon;
                const isEx = excludedAllergens.includes(allergen.name);
                return (
                  <button 
                    key={allergen.name} 
                    onClick={() => toggleAllergen(allergen.name)}
                    type="button"
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-2 transition-all cursor-pointer pointer-events-auto ${
                      isEx ? "bg-red-500 text-white shadow-lg shadow-red-500/20" : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10"
                    }`}>
                    <Icon className="w-3.5 h-3.5" /> {allergen.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CATEGORY NAV - LOWERED z-index to 20 */}
          <div className="sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-md z-20 border-b border-white/5 mb-12 -mx-4 px-4 py-4">
            <div className="relative flex items-center group">
              
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 z-50 p-2 bg-orange-500 text-black rounded-full shadow-xl hover:scale-110 transition-transform lg:flex hidden items-center justify-center -translate-x-1/2"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div 
                ref={scrollRef} 
                className="overflow-x-auto no-scrollbar scroll-smooth flex flex-nowrap gap-4 min-w-full px-2"
              >
                <button
                  onClick={() => setSelectedCategory("Special Set Menu")}
                  className={`whitespace-nowrap px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all flex-shrink-0 ${
                    selectedCategory === "Special Set Menu" ? "bg-orange-500 text-black border-orange-500" : "border-white/10 text-white hover:border-orange-500/50"
                  }`}
                >
                  Set Menus
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`whitespace-nowrap px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest border transition-all flex-shrink-0 ${
                      selectedCategory === cat.name ? "bg-orange-500 text-black border-orange-500" : "border-white/10 text-white hover:border-orange-500/50"
                    }`}
                  >
                    <span className="block">{cat.name}</span>
                    <span className="block text-[8px] font-normal opacity-60 mt-0.5">{cat.chinese}</span>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 z-50 p-2 bg-orange-500 text-black rounded-full shadow-xl hover:scale-110 transition-transform lg:flex hidden items-center justify-center translate-x-1/2"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MAIN DISPLAY AREA */}
          <main className="relative z-10">
            {!selectedCategory ? (
              <div className="py-20 flex flex-col items-center text-center border-2 border-dashed border-white/5 rounded-3xl">
                <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
                  <MousePointer2 className="w-8 h-8 text-orange-500 animate-pulse" />
                </div>
                <h2 className="text-2xl font-serif text-white mb-2">Experience Excellence</h2>
                <p className="text-gray-500 max-w-xs leading-relaxed italic text-sm">Please select a category above to reveal our menu.</p>
              </div>
            ) : selectedCategory === "Special Set Menu" ? (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                {setMenus.map((set, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-500">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
                        <div>
                          <span className="px-3 py-1 bg-orange-500 text-[10px] font-black rounded-full text-black uppercase tracking-tighter mb-4 inline-block">Chef's Choice</span>
                          <h3 className="text-3xl font-serif text-white">{set.name}</h3>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1.5 text-orange-400 text-xs font-bold uppercase tracking-widest">
                              <Users className="w-4 h-4" /> Perfect for {set.people}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-light text-orange-400">{set.price}</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 text-orange-500" /> Starters Selection
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed italic border-l border-white/10 pl-4">{set.starters}</p>
                        </div>
                        <div className="space-y-3">
                          <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <Utensils className="w-3 h-3 text-orange-500" /> Main Courses
                          </h4>
                          <ul className="space-y-2 pl-4">
                            {set.mainCourses.map((course, i) => (
                              <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in duration-500">
                {/* ... (rest of your list items code remains the same) */}
                <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                  <span className="h-px bg-orange-500/30 flex-1" />
                  {selectedCategory}
                  <span className="h-px bg-orange-500/30 flex-1" />
                </h2>
                {filteredItems.map(item => (
                  <div key={item.name} className="flex justify-between gap-6 py-6 border-b border-white/5 group hover:bg-white/[0.02] transition-all px-4 -mx-4 rounded-xl">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-lg font-medium text-gray-100 group-hover:text-orange-400 transition-colors">{item.name}</h3>
                        {item.popular && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />}
                        {item.vegetarian && <span className="text-[9px] font-black text-green-500 border border-green-500/30 px-1.5 py-0.5 rounded">VEG</span>}
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed italic">{item.description}</p>
                      <div className="mt-3 flex gap-2">
                        {item.allergens.map(a => (
                          <span key={a} className="text-[9px] text-gray-600 bg-white/5 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">{a}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <span className="text-lg font-light text-orange-400">{item.price}</span>
                      {item.spiceLevel > 0 && (
                        <div className="flex gap-0.5 mt-2">
                          {Array.from({ length: item.spiceLevel }).map((_, i) => <Flame key={i} className="w-3 h-3 text-red-600" />)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}