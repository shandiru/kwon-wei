import { MapPin, Navigation, Clock } from "lucide-react";

export default function MapSection() {
  const address = "9 Bath St, Ashby-de-la-Zouch LE65 2FH, United Kingdom";

  // Standard Google Maps Embed URL for the specific address
  const standardMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2415.232617200182!2d-1.4733174999999998!3d52.746038600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879fc37463435c5%3A0x18750a89cd788af3!2sWong%20Kwei%20Restaurant!5e0!3m2!1sen!2slk!4v1770907369311!5m2!1sen!2slk";

  return (
    <section
      className="relative bg-cover bg-center py-24 px-6 md:px-12 overflow-hidden"
      id="find-us"
      style={{
        backgroundImage:
          "url('/bg.jpeg')",
      }}
    >
      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* LEFT: INFO CARD */}
          <div
            className="w-full lg:w-1/3 flex flex-col justify-center space-y-10"
            data-aos="fade-right"
          >
            <div>
              <h2 className="text-sm font-black text-[#E5162D] uppercase tracking-[0.4em] mb-4">
                Location
              </h2>
              <h3 className="text-5xl md:text-6xl font-serif text-white mb-6">
                Find Us
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                Experience authentic Cantonese excellence in the historic heart
                of Ashby-de-la-Zouch.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-[#E5162D]/50 transition-colors">
                  <MapPin className="text-[#E5162D]" size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                    Address
                  </h4>
                  <a
                    href="https://maps.app.goo.gl/Tdg5RDs5SqCnXGhV7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm leading-relaxed hover:underline"
                  >
                    {address}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-[#E5162D]/50 transition-colors">
                  <Clock className="text-[#E5162D]" size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                    Opening Hours
                  </h4>
                  <p className="text-gray-300 text-sm">Mon – Thu: 5:00 PM – 10:00 PM</p>
                  <p className="text-gray-300 text-sm">Fri – Sat: 5:00 PM – 10:30 PM</p>
                  <p className="text-gray-300 text-sm">Sun: 5:00 PM – 10:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/dir//Wong+Kwei+Restaurant,+9+Bath+St,+Ashby-de-la-Zouch+LE65+2FH,+United+Kingdom/@52.7460386,-1.4733175,17z/data=!4m17!1m7!3m6!1s0x4879fc37463435c5:0x18750a89cd788af3!2sWong+Kwei+Restaurant!8m2!3d52.7460386!4d-1.4733175!16s%2Fg%2F1vysw1qk!4m8!1m0!1m5!1m1!1s0x4879fc37463435c5:0x18750a89cd788af3!2m2!1d-1.4733175!2d52.7460386!3e9?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-white px-10 py-5 rounded-xl font-black text-xs tracking-widest transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-lg shadow-[#E5162D]/20"
              style={{ backgroundColor: "#E5162D" }}
            >
              <Navigation size={18} fill="currentColor" />
              GET DIRECTIONS
            </a>
          </div>

          {/* RIGHT: MAP EMBED */}
          <div
            className="w-full lg:w-2/3 h-[500px] lg:h-[650px] rounded-[2.5rem] overflow-hidden border border-white/10 relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Dark Overlay for Map */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-black/10 rounded-[2.5rem] z-10"></div>
            <iframe
              src={standardMapUrl}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wong Kwei Restaurant Location"
              className="grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
