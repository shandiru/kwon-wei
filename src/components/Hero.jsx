import { ArrowRight, CalendarDays, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const bentoItems = [
    {
      img: "/h1.png",
      title: "Event Reservation",
      desc: "Book a table for special occasions and enjoy our signature dishes",
      id: "contact"
    },
    {
      img: "/h2.png",
      title: "Opening Hours",
      // Changed to an array for "one by one" display
      desc: ["Mon – Thu: 5:00 PM – 10:00 PM", "Fri – Sat: 5:00 PM – 10:30 PM", "Sun: 5:00 PM – 10:00 PM"],
      id: "find-us"
    },
    { img: "/h3.png", title: "Delivery up to 7 miles", desc: "You requested an increased service radius — we’ve now expanded it accordingly.", id: "about" },
  ];

  return (
    <section
      className="w-full min-h-screen bg-black text-white p-4 md:p-6 lg:p-8 pt-24 md:pt-28"
      id="home"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* ── LEFT — BIG HERO WITH VIDEO ── */}
        <div
          className="relative lg:col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          data-aos="fade-right"
        >
          <video
            src="/vedio.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[65vh] md:h-[80vh] lg:h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 z-10" />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
            <div data-aos="fade-up" data-aos-delay="400" className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-none tracking-tighter">
                WONG<span style={{ color: "#E5162D" }}>KWEI</span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-xl" data-aos="fade-up" data-aos-delay="550">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="group flex-1 flex items-center justify-between gap-3 rounded-xl px-6 py-4 transition-all duration-300 active:scale-[0.97]"
                style={{
                  background: "linear-gradient(135deg, #E5162D 0%, #c0101f 100%)",
                  boxShadow: "0 8px 28px rgba(229,22,45,0.35)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <CalendarDays size={18} className="text-white/80" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/60 leading-none mb-1">Book a Table</p>
                    <p className="text-sm font-bold text-white uppercase tracking-wide leading-none">Reservation</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-white/70 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                className="group flex-1 flex items-center justify-between gap-3 rounded-xl px-6 py-4 border transition-all duration-300 active:scale-[0.97]"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.18)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <ShoppingBag size={18} className="text-white/60" />
                  <div className="text-left">
                    <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/40 leading-none mb-1">Takeaway</p>
                    <p className="text-sm font-bold text-white uppercase tracking-wide leading-none">Order Online</p>
                  </div>
                </div>
                <ArrowRight size={16} className="text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/70" />
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT — BENTO GRID ── */}
        <div className="flex flex-col gap-6">
          {bentoItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              data-aos="fade-left"
              data-aos-delay={index * 200}
              className="group relative rounded-2xl overflow-hidden h-48 md:h-56 cursor-pointer border border-white/5"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300" />

              {/* Default State */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 text-lg font-semibold transition-all duration-500 group-hover:translate-y-[-20px] group-hover:opacity-0">
                {item.title}
                <ArrowRight className="h-5 w-5" style={{ color: "#E5162D" }} />
              </div>

              {/* Hover State - One by one display */}
              <div className="absolute bottom-6 left-0 right-0 px-6 flex flex-col items-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-2px]">
                {Array.isArray(item.desc) ? (
                  <div className="flex flex-col gap-1 w-full text-center">
                    {item.desc.map((line, i) => (
                      <span key={i} className="italic font-medium" style={{ color: "#E5162D" }}>
                        {line}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="italic text-center" style={{ color: "#E5162D" }}>
                    {item.desc}
                  </span>
                )}
                <ArrowRight className="h-4 w-4 text-white mt-2" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}