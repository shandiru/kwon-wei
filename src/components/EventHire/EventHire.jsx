import React, { useRef, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Wine,
  MessageSquare,
  Send,
  ChevronDown,
  Tag,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const VenueBookingForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    setLoading(true);

    // Using environment variables from your .env file
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess("Booking inquiry sent successfully!");
          form.reset();
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send inquiry. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  const inputStyles =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white focus:outline-none focus:border-[#E5162D] focus:ring-1 focus:ring-[#E5162D] transition-all duration-300 hover:bg-white/10 cursor-text";
  const selectStyles =
    "w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3 text-white focus:outline-none focus:border-[#E5162D] focus:ring-1 focus:ring-[#E5162D] transition-all duration-300 hover:bg-white/10 appearance-none cursor-pointer";
  const labelStyles =
    "block text-xs font-bold tracking-widest uppercase text-white/70 mb-2 ml-1";

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/bg.jpeg')" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 uppercase tracking-tight">
            Basic Event <span className="text-[#E5162D]">Details</span>
          </h2>
          <div className="w-20 h-1 bg-[#E5162D] mx-auto rounded-full" />
        </div>

        {/* Form Card */}
        <div
          className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl"
          data-aos="zoom-in"
        >
          <form className="space-y-8" ref={formRef} onSubmit={handleSubmit}>
            
            {/* ── SECTION 1: CONTACT ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className={labelStyles}>Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    className={`${inputStyles} pl-12`}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    required
                    className={`${inputStyles} pl-12`}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    className={`${inputStyles} pl-12`}
                  />
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* ── SECTION 2: DATE & TIME ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className={labelStyles}>Event Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <input
                    name="eventDate"
                    type="date"
                    required
                    className={`${inputStyles} pl-12 [color-scheme:dark]`}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Start Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <input
                    name="startTime"
                    type="time"
                    required
                    className={`${inputStyles} pl-12 [color-scheme:dark]`}
                  />
                </div>
              </div>

              <div>
                <label className={labelStyles}>End Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <input
                    name="endTime"
                    type="time"
                    required
                    className={`${inputStyles} pl-12 [color-scheme:dark]`}
                  />
                </div>
              </div>
            </div>

            {/* ── SECTION 3: EVENT TYPE & BAR ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event Type */}
              <div>
                <label className={labelStyles}>Type of Event</label>
                <div className="relative group">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <select name="eventType" required className={selectStyles}>
                    <option value="" className="bg-black">Select Event Type...</option>
                    <option value="Birthday" className="bg-black text-white">Birthday</option>
                    <option value="Corporate" className="bg-black text-white">Corporate</option>
                    <option value="Engagement" className="bg-black text-white">Engagement</option>
                    <option value="Wedding" className="bg-black text-white">Wedding</option>
                    <option value="Private Party" className="bg-black text-white">Private Party</option>
                    <option value="Other" className="bg-black text-white">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-[#E5162D] pointer-events-none transition-colors" size={18} />
                </div>
              </div>

              {/* Bar Options */}
              <div>
                <label className={labelStyles}>Bar Options</label>
                <div className="relative group">
                  <Wine className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={16} />
                  <select name="barOptions" required className={selectStyles}>
                    <option value="" className="bg-black">Select Bar Option...</option>
                    <option value="Open Bar" className="bg-black text-white">Open Bar</option>
                    <option value="Cash Bar" className="bg-black text-white">Cash Bar</option>
                    <option value="Prepaid Drinks Packages" className="bg-black text-white">Prepaid Drinks Packages</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 group-hover:text-[#E5162D] pointer-events-none transition-colors" size={18} />
                </div>
              </div>
            </div>

            {/* ── SECTION 4: QUESTIONS ── */}
            <div>
              <label className={labelStyles}>Please type any questions below</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-white/50" size={16} />
                <textarea
                  name="questions"
                  placeholder="Ask us anything about your event..."
                  className={`${inputStyles} min-h-[140px] pl-12 pt-3 resize-none`}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-72 relative overflow-hidden group py-4 bg-[#E5162D] rounded-xl text-white font-black tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_40px_rgba(229,22,45,0.5)] disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-3">
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      Submit Inquiry{" "}
                      <Send
                        size={18}
                        className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </>
                  )}
                </span>
              </button>

              {success && (
                <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                  <p className="text-green-400 font-bold animate-pulse">
                    {success}
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VenueBookingForm;