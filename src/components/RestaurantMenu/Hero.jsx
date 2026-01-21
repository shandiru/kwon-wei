import { ChefHat, Filter } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-neutral-950 py-20 md:py-28">
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20">
            <ChefHat className="w-8 h-8 text-red-500" />
          </div>

          <div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight">
              Wong Kwei
            </h1>
            <p className="text-2xl md:text-3xl text-amber-500 font-serif mt-3">
              官围餐厅
            </p>
          </div>

          <p className="text-lg md:text-xl text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Authentic Cantonese & Sichuan cuisine with a modern twist.
            Every dish tells a story of tradition and passion.
          </p>

          <div className="inline-flex items-center gap-3 bg-neutral-800/50 backdrop-blur-sm rounded-full px-6 py-3 text-sm text-neutral-300 border border-neutral-700/50">
            <Filter className="w-4 h-4 text-red-500" />
            <span>Filter menu by allergens for safe dining</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
