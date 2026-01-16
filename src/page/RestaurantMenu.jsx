import React, { useState } from 'react';
import { ChefHat, Filter, Wheat, Nut, TreeDeciduous, Milk, Bean, Flower2, Leaf, Egg, Fish, Shell, Circle, Citrus, FlaskConical, Star, Flame, Phone, MapPin, Clock, TriangleAlert } from 'lucide-react';
import {allergens, categories , menuItems} from '../Data/Menu';
import Hero from '../components/RestaurantMenu/Hero';
const RestaurantMenu = () => {
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Appetisers');

 
  
  
  const toggleAllergen = (allergen) => {
    setSelectedAllergens(prev =>
      prev.includes(allergen)
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const hasSelectedAllergen = selectedAllergens.some(allergen =>
      item.allergens.includes(allergen)
    );
    return matchesCategory && !hasSelectedAllergen;
  });

  const AllergenIcon = ({ name }) => {
    const allergen = allergens.find(a => a.name === name);
    const Icon = allergen?.icon || Circle;
    return <Icon className="w-3 h-3" />;
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Hero Section */}
        <Hero />

      {/* Main Content */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          {/* Allergen Filter */}
          <div className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 mb-12">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-semibold text-white">Filter by Allergies</h3>
                  <p className="text-sm text-neutral-400">Select allergens to hide dishes containing them</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {allergens.map(({ name, icon: Icon }) => (
                  <button
                    key={name}
                    onClick={() => toggleAllergen(name)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 border ${
                      selectedAllergens.includes(name)
                        ? 'bg-red-500 text-white border-red-500'
                        : 'bg-neutral-800/30 text-neutral-400 border-neutral-700/50 hover:bg-neutral-800 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="mb-12">
            <div className="relative">
              <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-center scrollbar-hide">
                {categories.map(({ name, chinese }) => (
                  <button
                    key={name}
                    onClick={() => setActiveCategory(name)}
                    className={`flex-shrink-0 rounded-xl px-6 py-3 transition-all duration-300 border ${
                      activeCategory === name
                        ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/20'
                        : 'bg-neutral-800/30 text-neutral-400 border-neutral-700/50 hover:bg-neutral-800 hover:text-white hover:border-neutral-700'
                    }`}
                  >
                    <span className="whitespace-nowrap font-medium">{name}</span>
                    <span className="block text-xs opacity-70 mt-0.5">{chinese}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Category Header */}
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">{activeCategory}</h2>
            <p className="text-xl text-amber-500 font-serif mt-2">
              {categories.find(c => c.name === activeCategory)?.chinese}
            </p>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/10"
              >
                <div className="p-6">
                  {item.popular && (
                    <div className="absolute flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-900 px-4 py-1.5 text-xs font-semibold z-10 -top-px -right-px rounded-bl-xl rounded-tr-2xl">
                      <Star className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h4 className="font-serif text-xl font-semibold text-white group-hover:text-red-500 transition-colors">
                          {item.name}
                        </h4>
                        {item.vegetarian && (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-500/10 text-green-400" title="Vegetarian">
                            <Leaf className="w-3 h-3" />
                          </span>
                        )}
                        {item.spiceLevel > 0 && (
                          <span className="inline-flex items-center gap-0.5" title={`Spice level: ${item.spiceLevel}/3`}>
                            {[...Array(item.spiceLevel)].map((_, i) => (
                              <Flame key={i} className="w-3.5 h-3.5 text-orange-500" />
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-2xl font-bold text-red-500">{item.price}</span>
                      {item.priceNote && (
                        <p className="text-xs text-neutral-400 mt-0.5">{item.priceNote}</p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-neutral-400 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {item.allergens.map(allergen => (
                      <span
                        key={allergen}
                        className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700/50 bg-neutral-800/50 text-neutral-400 transition-all duration-200 text-xs px-2.5 py-1"
                      >
                        <AllergenIcon name={allergen} />
                        <span>{allergen}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-lg">No dishes available with current allergen filters</p>
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
};

export default RestaurantMenu;