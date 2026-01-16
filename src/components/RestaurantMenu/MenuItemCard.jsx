import React from 'react';
import { Star, Leaf, Flame, Circle } from 'lucide-react';
import { allergens as allergenData } from '../../Data/Menu';

const MenuItemCard = ({ item }) => {
  const AllergenIcon = ({ name }) => {
    const allergen = allergenData.find(a => a.name === name);
    const Icon = allergen?.icon || Circle;
    return <Icon className="w-3 h-3" />;
  };

  return (
    /* FIX: Added 'h-full' to make the card fill the grid row height.
       Added 'flex flex-col' to manage internal vertical spacing.
    */
    <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-300 hover:border-red-500/30 hover:shadow-xl hover:shadow-red-500/10 h-full flex flex-col">
      
      {/* Popular Badge */}
      {item.popular && (
        <div className="absolute flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-neutral-900 px-4 py-1.5 text-xs font-semibold z-10 -top-px -right-px rounded-bl-xl rounded-tr-2xl">
          <Star className="w-3 h-3 fill-current" />
          Popular
        </div>
      )}

      {/* FIX: Added 'flex-1' and 'flex flex-col' here to ensure the 
          padding wrapper expands to fill the card.
      */}
      <div className="p-6 flex-1 flex flex-col">
        
        {/* Header Section */}
        <div className="flex items-start justify-between gap-3 mb-4">
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
            {item.priceNote && <p className="text-xs text-neutral-400 mt-0.5">{item.priceNote}</p>}
          </div>
        </div>
        
        {/* FIX: Added 'flex-grow'. This takes up all available vertical space, 
            effectively pushing the allergens div below it to the bottom.
        */}
        <p className="text-sm text-neutral-400 mb-6 leading-relaxed flex-grow">
          {item.description}
        </p>
        
        {/* Bottom Section: Allergens 
            Added 'mt-auto' as an extra safety to keep it at the bottom.
        */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {item.allergens.map(allergen => (
            <span 
              key={allergen} 
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700/50 bg-neutral-800/50 text-neutral-400 text-xs px-2.5 py-1 whitespace-nowrap"
            >
              <AllergenIcon name={allergen} />
              <span>{allergen}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;