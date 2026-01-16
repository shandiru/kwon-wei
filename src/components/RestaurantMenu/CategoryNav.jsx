import React from 'react';

const CategoryNav = ({ categories, activeCategory, setActiveCategory }) => {
  return (
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
  );
};

export default CategoryNav;