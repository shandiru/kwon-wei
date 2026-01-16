"use client";
import React from "react";

export default function MenuPage() {
  const menuData = {
    setA: {
      title: "Set Meal A for Two",
      price: "£49.80",
      items: [
        "Starter Choices: Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
        "Fried Chicken with Lemon Sauce",
        "Beef Fried with Onions",
        "King Prawns Fried with Mixed Vegetables",
        "Yung Chow Fried Rice",
      ],
    },
    setB: {
      title: "Set Meal B for Three",
      price: "£72.00",
      items: [
        "Starter Choices: Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
        "Sweet and Sour Pork with Cantonese Sauce",
        "Roast Duck Cantonese Style",
        "Kung Po Chicken",
        "Beef Fried with Onions on a Hot Platter",
        "Yung Chow Fried Rice",
      ],
    },
    setC: {
      title: "Set Meal C for Four",
      price: "£92.80",
      items: [
        "Starter Choices: Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
        "Roasted Duck Cantonese Style",
        "Sweet and Sour Pork with Cantonese Sauce",
        "Fried Chicken in Lemon Sauce",
        "King Prawn Fried with Seasonal Vegetables",
        "Beef Fried with Green Pepper in Black Bean Sauce",
        "Yung Chow Fried Rice",
      ],
    },
    setD: {
      title: "Set Meal D for Six",
      price: "£133.80",
      items: [
        "Starter Choices: Prawn Cocktail, Barbecued Spare Ribs, Chicken Sweetcorn Soup, Vegetable Pancake Rolls or Prawn Toast.",
        "Roasted Duck Cantonese Style",
        "Fried Chicken with Lemon Sauce",
        "Sweet and Sour Pork with Cantonese Sauce",
        "Beef Fried with Green Peppers in Black Bean Sauce",
        "King Prawns with Cashew Nuts",
        "Chicken Fried with Chilli Bean Sauce",
        "Yung Chow Fried Rice",
      ],
    },
  };

  return (
    <div className="bg-[#0F0F0F] text-white min-h-screen pt-20">
      <div className="flex flex-col lg:flex-row w-full relative">
        
        {/* LEFT IMAGE - Hidden on small mobile, banner on tablet, sticky on desktop */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-0 lg:h-screen h-[40vh]">
          <img
            src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover lg:rounded-r-3xl"
            alt="Chinese Cuisine"
          />
        </div>

        {/* RIGHT SCROLL PANEL */}
        <div className="w-full lg:w-[55%] px-6 md:px-12 py-10 lg:py-14">
          
          {/* HEADER SECTION */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-serif mb-4">Special Set Menu</h1>
            <p className="text-gray-400 italic">Curated dining experiences for groups</p>
          </div>

          {/* FILTER BUTTONS (SCROLLABLE ON MOBILE) */}
          <div className="flex gap-3 sticky top-[70px] lg:top-0 bg-[#0F0F0F]/90 backdrop-blur-md py-4 z-20 overflow-x-auto no-scrollbar border-b border-white/10 mb-8">
            {["SET A", "SET B", "SET C", "SET D"].map((label) => (
              <a
                key={label}
                href={`#${label.replace(" ", "").toLowerCase()}`}
                className="whitespace-nowrap px-6 py-2 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* MENU SECTIONS */}
          <div className="space-y-24">
            {Object.entries(menuData).map(([key, data]) => (
              <section 
                key={key} 
                id={data.title.split(" ")[2].toLowerCase() === "a" ? "seta" : 
                    data.title.split(" ")[2].toLowerCase() === "b" ? "setb" : 
                    data.title.split(" ")[2].toLowerCase() === "c" ? "setc" : "setd"} 
                className="scroll-mt-32"
              >
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-orange-400">
                    {data.title}
                  </h2>
                  <span className="text-xl font-light text-white">{data.price}</span>
                </div>

                <div className="space-y-6">
                  {data.items.map((item, index) => (
                    <div key={index} className="flex gap-4 group">
                      <span className="text-orange-500 font-bold">•</span>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="mt-20 pt-10 border-t border-white/10 text-center text-gray-500 text-sm">
            * All set meals include a variety of traditional Cantonese flavors.
          </footer>
        </div>
      </div>

      {/* CSS FOR NO SCROLLBAR */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}