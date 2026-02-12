
const OccasionSection = () => {
  const cards = [
    {
      title: "Weddings",
      desc: "Create unforgettable memories in stunning venues with authentic Cantonese banquets.",
      img: "/elegant-wedding-venue.png", // Ensure these paths exist or use Unsplash URLs
    },
    {
      title: "Corporate Events",
      desc: "Professional spaces for meetings and conferences with premium catering options.",
      img: "/modern-corporate-event-space.png",
    },
    {
      title: "Parties",
      desc: "Celebrate birthdays and anniversaries in style with our perfect party spaces.",
      img: "/stylish-party-venue.jpg",
    },
    {
      title: "Conferences",
      desc: "State-of-the-art facilities and refined service for large-scale gatherings.",
      img: "/conference-hall-venue.jpg",
    },
  ];

  return (
    <section 
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
      id="occasions"
    >
      {/* ── BACKGROUND IMAGE WITH OVERLAY ── */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/bg.jpeg')" }} // Using your common bg image
      />
      <div className="absolute inset-0  z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mt-15 mb-4">
            We Specialise In Every <span style={{ color: "#E5162D" }}>Occasion</span>
          </h2>
          <div className="w-24 h-1 bg-[#E5162D] mx-auto rounded-full" />
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#E5162D]/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 
                  className="text-xl font-serif mb-3 transition-colors duration-300 group-hover:text-[#E5162D]"
                  style={{ color: "#E5162D" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OccasionSection;