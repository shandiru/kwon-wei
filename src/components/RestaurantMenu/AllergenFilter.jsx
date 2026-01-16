import React from 'react';

const AllergenFilter = ({ allergens, selectedAllergens, toggleAllergen }) => {
  return (
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
  );
};

export default AllergenFilter;