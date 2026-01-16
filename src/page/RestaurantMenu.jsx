import React, { useState, useMemo } from 'react';
import { allergens, categories, menuItems } from '../Data/Menu';
import Hero from '../components/RestaurantMenu/Hero';
import AllergenFilter from '../components/RestaurantMenu/AllergenFilter';
import CategoryNav from '../components/RestaurantMenu/CategoryNav';
import MenuItemCard from '../components/RestaurantMenu/MenuItemCard';

const RestaurantMenu = () => {
  const [selectedAllergens, setSelectedAllergens] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Appetisers');

  const toggleAllergen = (allergen) => {
    setSelectedAllergens(prev =>
      prev.includes(allergen) ? prev.filter(a => a !== allergen) : [...prev, allergen]
    );
  };

  // Performance optimization: memoize the filtering
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const hasSelectedAllergen = selectedAllergens.some(allergen =>
        item.allergens.includes(allergen)
      );
      return matchesCategory && !hasSelectedAllergen;
    });
  }, [activeCategory, selectedAllergens]);

  const currentCategoryData = categories.find(c => c.name === activeCategory);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Hero />

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <AllergenFilter 
            allergens={allergens} 
            selectedAllergens={selectedAllergens} 
            toggleAllergen={toggleAllergen} 
          />

          <CategoryNav 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />

          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">{activeCategory}</h2>
            {currentCategoryData && (
              <p className="text-xl text-amber-500 font-serif mt-2">{currentCategoryData.chinese}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {filteredItems.map((item, index) => (
              <MenuItemCard key={`${item.name}-${index}`} item={item} />
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