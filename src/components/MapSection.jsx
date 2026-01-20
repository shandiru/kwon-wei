
import React from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export default function MapSection() {
  const address = "9 Bath St, Ashby-de-la-Zouch LE65 2FH, United Kingdom";
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Wong+Kwei+Restaurant+Ashby-de-la-Zouch`;
  
  // Note: For a quick implementation without an API key, you can use this standard share URL:
  const standardMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2417.439583272671!2d-1.475892423311654!3d52.74604181958614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879fcc7463435c5%3A0x18750a89cd788af3!2sWong%20Kwei%20Restaurant!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk";

  return (
    <section className="bg-[#000000] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* LEFT: INFO CARD */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Find Us</h2>
              <p className="text-gray-400">Visit us in the heart of Ashby-de-la-Zouch for an unforgettable dining experience.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-full">
                  <MapPin className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Location</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-3 rounded-full">
                  <Clock className="text-orange-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Open Today</h4>
                  <p className="text-gray-300 text-sm">5:00 PM – 10:30 PM</p>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/ChIJxTU0Rjf8eUgR84p4zYkKdRg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              <Navigation size={18} />
              GET DIRECTIONS
            </a>
          </div>

          {/* RIGHT: MAP EMBED */}
          <div className="w-full lg:w-2/3 h-[450px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
            <iframe
              src={standardMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wong Kwei Restaurant Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}