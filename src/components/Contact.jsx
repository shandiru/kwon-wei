"use client";
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

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
    
    // Construct the WhatsApp Message
    const message = `Hello Wong Kwei, I would like to book a table:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*People:* ${formData.people}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}`;

    // Restaurant WhatsApp number
    const whatsappUrl = `https://wa.me/441530412394?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-black text-white py-12 px-4 md:px-8 lg:px-16" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* LEFT IMAGE HERO */}
        <div
          className="relative w-full h-80 md:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden flex flex-col items-center justify-center bg-cover bg-center border border-white/10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')" }} 
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative text-center px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#D4AF37] mb-4 uppercase tracking-tighter">
              Book <br /> via WhatsApp
            </h2>
            <p className="text-gray-200 text-sm md:text-base max-w-xs mx-auto italic">
              Fill in your details below and we will confirm your booking via chat.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-6 text-[#D4AF37]">
            RESERVATION DETAILS
          </h3>

          <form onSubmit={handleWhatsAppBooking} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-400 mb-1 text-xs tracking-widest">NAME</label>
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                onChange={handleChange}
                className="bg-gray-800/50 border border-white/10 text-white rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-400 mb-1 text-xs tracking-widest">PHONE</label>
              <input
                required
                name="phone"
                type="text"
                placeholder="07123 456789"
                onChange={handleChange}
                className="bg-gray-800/50 border border-white/10 text-white rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-400 mb-1 text-xs tracking-widest">PEOPLE</label>
              <input
                required
                name="people"
                type="number"
                placeholder="2"
                onChange={handleChange}
                className="bg-gray-800/50 border border-white/10 text-white rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-400 mb-1 text-xs tracking-widest">DATE</label>
              <input
                required
                name="date"
                type="date"
                onChange={handleChange}
                className="bg-gray-800/50 border border-white/10 text-white rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] [color-scheme:dark]"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-400 mb-1 text-xs tracking-widest">TIME</label>
              <input
                required
                name="time"
                type="time"
                onChange={handleChange}
                className="bg-gray-800/50 border border-white/10 text-white rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] [color-scheme:dark]"
              />
            </div>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-[#25D366] text-white flex items-center justify-center gap-3 font-bold uppercase tracking-widest py-4 rounded-md hover:bg-[#1ebd5b] transition-all shadow-lg"
              >
                <MessageCircle size={24} />
                Book via WhatsApp
              </button>
            </div>
            
            <p className="md:col-span-2 text-[10px] text-center text-gray-500 mt-4 leading-relaxed uppercase tracking-widest">
              Wong Kwei Restaurant • 9 Bath St, Ashby-de-la-Zouch
            </p>
             <p className="md:col-span-2 text-[10px] text-center text-gray-500 mt-4 leading-relaxed uppercase tracking-widest">
              By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
            </p>
            
          </form>
        </div>
      </div>
    </section>
  );
}