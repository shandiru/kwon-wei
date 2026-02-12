import React, { useState } from "react";
import { MessageCircle, MapPin, Phone, Mail, Clock, Navigation, ChevronRight } from "lucide-react";

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
    const message =
      `Hello Wong Kwei, I would like to book a table:%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*People:* ${formData.people}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Time:* ${formData.time}`;
    window.open(`https://wa.me/441530412394?text=${message}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#080808] text-white overflow-hidden"
    >
      {/* ── LANTERN ANIMATION & IMAGE ── */}
      <style>
        {`
        @keyframes lanternSwayLeft {
            0% { transform: rotate(-2deg); }
            50% { transform: rotate(4deg); }
            100% { transform: rotate(-2deg); }
        }
        .lantern-sway-left {
            animation: lanternSwayLeft 4s ease-in-out infinite;
            transform-origin: top center;
        }
        `}
      </style>

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75 z-0" />
      </div>

      {/* Decorative top border */}
      <div className="relative z-10 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #E5162D, transparent)" }} />

      {/* LEFT SIDE LANTERN */}
      <div className="absolute top-0 left-[5%] sm:left-[8%] z-20 w-16 sm:w-24 lg:w-32 pointer-events-none lantern-sway-left">
        <img
          src="/lattern.png"
          alt="Decorative Lantern"
          className="w-full h-auto opacity-70 brightness-90"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 py-16 sm:py-20 lg:py-24">

        {/* Section label */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide leading-tight">
            Get In <span style={{ color: "#E5162D" }}>Touch</span>
          </h1>
          <div className="mx-auto mt-4 h-px w-20" style={{ background: "linear-gradient(90deg, transparent, #E5162D, transparent)" }} />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

          {/* LEFT COLUMN - Information */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 flex flex-col min-h-[520px] sm:min-h-[580px] lg:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop')" }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(170deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,1) 100%)" }}
            />

            <div className="relative z-10 text-center px-6 sm:px-10 pt-10 sm:pt-14 pb-6">
              <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.45em] uppercase mb-3" style={{ color: "#E5162D" }}>
                Reservations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white uppercase leading-tight mb-4">
                Book <span style={{ color: "#E5162D" }}>via</span><br />WhatsApp
              </h2>
              <div className="h-px w-14 mx-auto mb-4" style={{ background: "linear-gradient(90deg, transparent, #E5162D, transparent)" }} />
              <p className="text-gray-400 text-sm max-w-xs mx-auto italic font-light leading-relaxed">
                Experience authentic Cantonese dining. Secure your table through our priority chat line.
              </p>
            </div>

            <div className="relative z-10 mx-6 sm:mx-10 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />

            <div className="relative z-10 px-4 sm:px-6 pb-5 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 content-end">
              <a href="tel:+441530412394" className="group flex items-start gap-3 rounded-xl px-4 py-4 border transition-all duration-300 bg-black/40 border-white/10 hover:border-red-600/50 hover:bg-red-600/10">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-red-600/20 border border-red-600/30 text-[#E5162D]">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-gray-500 mb-1">Telephone</p>
                  <p className="text-white text-sm font-semibold">01530 412394</p>
                </div>
              </a>

              <a href="mailto:wongkweiashby@gmail.com" className="group flex items-start gap-3 rounded-xl px-4 py-4 border transition-all duration-300 bg-black/40 border-white/10 hover:border-red-600/50 hover:bg-red-600/10">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-red-600/20 border border-red-600/30 text-[#E5162D]">
                  <Mail size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-gray-500 mb-1">Email</p>
                  <p className="text-white text-[13px] font-semibold truncate">wongkweiashby@gmail.com</p>
                </div>
              </a>

              <div className="flex items-start gap-3 rounded-xl px-4 py-4 border bg-black/40 border-white/10 hover:border-[#E5162D] transition-colors cursor-pointer">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-red-600/20 border border-red-600/30 text-[#E5162D]">
                  <MapPin size={14} />
                </div>
                <a href="https://maps.app.goo.gl/Tdg5RDs5SqCnXGhV7"
                  target="_blank"
                  rel="noopener noreferrer">
                  <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-gray-500 mb-1">
                    Address
                  </p>
                  <p className="text-white text-xs leading-relaxed">
                    9 Bath St, Ashby-de-la-Zouch<br />
                    LE65 2FH
                  </p>
                </a>
              </div>

              <div className="flex items-start gap-3 rounded-xl px-4 py-4 border bg-black/40 border-white/10">
                <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-red-600/20 border border-red-600/30 text-[#E5162D]">
                  <Clock size={14} />
                </div>
                <div className="w-full">
                  <p className="text-[9px] font-bold tracking-[0.22em] uppercase text-gray-500 mb-1">Opening Hours</p>
                  <div className="flex justify-between text-white text-[10px]"><span>Mon-Thu:</span> <span>5:00PM - 10:00PM</span></div>
                  <div className="flex justify-between text-white text-[10px]"><span>Fri-Sat:</span> <span>5:00PM - 10:30PM</span></div>
                  <div className="flex justify-between text-white text-[10px]"><span>Sunday:</span> <span>5:00PM - 10:00PM</span></div>
                </div>
              </div>

              <a href="https://www.google.com/maps/dir//Wong+Kwei+Restaurant,+9+Bath+St,+Ashby-de-la-Zouch+LE65+2FH,+United+Kingdom/@52.7460386,-1.4733175,17z/data=!4m17!1m7!3m6!1s0x4879fc37463435c5:0x18750a89cd788af3!2sWong+Kwei+Restaurant!8m2!3d52.7460386!4d-1.4733175!16s%2Fg%2F1vysw1qk!4m8!1m0!1m5!1m1!1s0x4879fc37463435c5:0x18750a89cd788af3!2m2!1d-1.4733175!2d52.7460386!3e9?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="sm:col-span-2 flex items-center justify-between rounded-xl px-5 py-3 bg-red-600/10 border border-red-600/30 hover:bg-red-600/20 transition-all">
                <div className="flex items-center gap-2">
                  <Navigation size={12} className="text-[#E5162D]" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-300">Get Directions</span>
                </div>
                <ChevronRight size={14} className="text-gray-500" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Booking Form */}
          <div
            className="relative rounded-2xl sm:rounded-3xl border flex flex-col"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)"
            }}
          >
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col flex-1">
              <div className="text-center mb-8">
                <span className="block text-[9px] font-bold tracking-[0.45em] uppercase mb-2 text-gray-500">Reservation</span>
                <h3 className="text-2xl sm:text-3xl text-white">Secure Your Table</h3>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="flex flex-col gap-5 flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="mb-2 text-[9px] font-bold tracking-widest uppercase text-gray-500">Full Name</label>
                    <input required name="name" type="text" placeholder="Guest Name" onChange={handleChange} className="rounded-xl px-4 py-3.5 text-sm text-white bg-black/60 border border-white/10 focus:border-red-600 outline-none transition-all" />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-[9px] font-bold tracking-widest uppercase text-gray-500">Phone</label>
                    <input required name="phone" type="tel" placeholder="07XXX XXXXXX" onChange={handleChange} className="rounded-xl px-4 py-3.5 text-sm text-white bg-black/60 border border-white/10 focus:border-red-600 outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="mb-2 text-[9px] font-bold tracking-widest uppercase text-gray-500">Guests</label>
                    <input required name="people" type="number" min="1" placeholder="Guests" onChange={handleChange} className="rounded-xl px-4 py-3.5 text-sm text-white bg-black/60 border border-white/10 focus:border-red-600 outline-none transition-all" />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2 text-[9px] font-bold tracking-widest uppercase text-gray-500">Date</label>
                    <input required name="date" type="date" onChange={handleChange} className="rounded-xl px-4 py-3.5 text-sm text-white bg-black/60 border border-white/10 focus:border-red-600 outline-none transition-all [color-scheme:dark]" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="mb-2 text-[9px] font-bold tracking-widest uppercase text-gray-500">Time</label>
                  <input required name="time" type="time" onChange={handleChange} className="rounded-xl px-4 py-3.5 text-sm text-white bg-black/60 border border-white/10 focus:border-red-600 outline-none transition-all [color-scheme:dark]" />
                </div>

                <button
                  type="submit"
                  className="mt-auto w-full flex items-center justify-center gap-3 text-white font-bold uppercase tracking-[0.25em] text-[11px] py-4 rounded-xl transition-all duration-300 bg-gradient-to-r from-red-600 to-red-700 shadow-lg shadow-red-900/20 active:scale-[0.98] hover:brightness-110"
                >
                  <MessageCircle size={18} fill="currentColor" />
                  Confirm on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #E5162D, transparent)" }} />
    </section>
  );
}