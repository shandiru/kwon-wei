"use client";
import React, { useState } from "react";
import { MessageCircle, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
    time: ""
  });

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    
    const message = `Hello Wong Kwei, I would like to book a table:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*People:* ${formData.people}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}`;

    const whatsappUrl = `https://wa.me/441530412394?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-black text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT IMAGE HERO */}
        <div
          className="relative w-full h-80 md:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden flex flex-col items-center justify-center border border-white/10"
          data-aos="fade-right"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-110"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')" }} 
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60"></div>
          
          <div className="relative text-center px-6" data-aos="zoom-in" data-aos-delay="300">
            <span className="text-[#E5162D] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Reservations</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 uppercase leading-tight">
              Book <br /> <span className="text-white">via</span> <br /> <span style={{ color: "#E5162D" }}>WhatsApp</span>
            </h2>
            <div className="h-1 w-16 bg-[#E5162D] mx-auto mb-6"></div>
            <p className="text-gray-300 text-sm md:text-base max-w-xs mx-auto italic font-light leading-relaxed">
              Experience authentic Cantonese dining. Secure your table instantly through our priority chat line.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl" data-aos="fade-left">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-serif mb-2 text-white">
              Secure Your Table
            </h3>
            <p className="text-gray-500 text-xs tracking-widest uppercase">Traditional Taste • Modern Convenience</p>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col group">
              <label className="text-gray-400 mb-2 text-[10px] font-bold tracking-[0.2em] group-focus-within:text-[#E5162D] transition-colors">FULL NAME</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Guest Name"
                onChange={handleChange}
                className="bg-black border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E5162D] transition-all placeholder:text-gray-700"
              />
            </div>

            <div className="flex flex-col group">
              <label className="text-gray-400 mb-2 text-[10px] font-bold tracking-[0.2em] group-focus-within:text-[#E5162D] transition-colors">PHONE NUMBER</label>
              <input
                required
                name="phone"
                type="tel"
                placeholder="07XXX XXXXXX"
                onChange={handleChange}
                className="bg-black border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E5162D] transition-all placeholder:text-gray-700"
              />
            </div>

            <div className="flex flex-col group">
              <label className="text-gray-400 mb-2 text-[10px] font-bold tracking-[0.2em] group-focus-within:text-[#E5162D] transition-colors">GUESTS</label>
              <input
                required
                name="people"
                type="number"
                min="1"
                placeholder="Number of people"
                onChange={handleChange}
                className="bg-black border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E5162D] transition-all placeholder:text-gray-700"
              />
            </div>

            <div className="flex flex-col group">
              <label className="text-gray-400 mb-2 text-[10px] font-bold tracking-[0.2em] group-focus-within:text-[#E5162D] transition-colors">PREFERRED DATE</label>
              <input
                required
                name="date"
                type="date"
                onChange={handleChange}
                className="bg-black border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E5162D] transition-all [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col md:col-span-2 group">
              <label className="text-gray-400 mb-2 text-[10px] font-bold tracking-[0.2em] group-focus-within:text-[#E5162D] transition-colors">ARRIVAL TIME</label>
              <input
                required
                name="time"
                type="time"
                onChange={handleChange}
                className="bg-black border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#E5162D] transition-all [color-scheme:dark]"
              />
            </div>

            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full text-white flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] text-xs py-5 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl"
                style={{ backgroundColor: "#E5162D" }}
              >
                <MessageCircle size={20} fill="currentColor" />
                Confirm on WhatsApp
              </button>
            </div>
            
            <div className="md:col-span-2 mt-8 pt-8 border-t border-white/5 space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] tracking-widest uppercase">
                <MapPin size={12} className="text-[#E5162D]" />
                9 Bath St, Ashby-de-la-Zouch
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] tracking-widest uppercase">
                <Phone size={12} className="text-[#E5162D]" />
                01530 412394
              </div>
              <p className="text-[9px] text-center text-gray-600 leading-relaxed max-w-sm mx-auto">
                By clicking "Confirm", you will be redirected to WhatsApp to finalise your booking. We respect your privacy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}