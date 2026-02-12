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

    emailjs
      .sendForm(
        "service_404lxe7", 
        "template_ab457p", 
        form,
        "tmUgtXKf_TwGrV1iE" 
      )
      .then(
        (result) => {
          setSuccess("Booking inquiry sent successfully!");
          form.reset();
          setTimeout(() => setSuccess(""), 5000);
        },
        (error) => {
          alert("Failed to send inquiry. Please try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  const inputStyles = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white focus:outline-none focus:border-[#E5162D] focus:ring-1 focus:ring-[#E5162D] transition-all duration-300";
  const labelStyles = "block text-xs font-bold tracking-widest uppercase text-black mb-2 ml-1";

  return (
    <section className="relative py-24 px-6 bg-black text-white overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/bg.jpeg')" }} 
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Basic Event <span style={{ color: "#E5162D" }}>Details</span>
          </h2>
          <div className="w-20 h-1 bg-[#E5162D] mx-auto rounded-full" />
        </div>

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
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={16} />
                  <input name="fullName" type="text" placeholder="John Doe" required className={`${inputStyles} pl-12`} />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={16} />
                  <input name="phone" type="tel" placeholder="+44 7700 900000" required className={`${inputStyles} pl-12`} />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={16} />
                  <input name="email" type="email" placeholder="john@example.com" required className={`${inputStyles} pl-12`} />
                </div>
              </div>
            </div>

            <hr className="border-white/10" />

            {/* ── SECTION 2: DATE & TIME ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className={labelStyles}>Event Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={16} />
                  <input name="eventDate" type="date" required className={`${inputStyles} pl-12 [color-scheme:dark]`} />
                </div>
              </div>

              <div>
                <label className={labelStyles}>Start Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={16} />
                  <input name="startTime" type="time" required className={`${inputStyles} pl-12 [color-scheme:dark]`} />
                </div>
              </div>

              <div>
                <label className={labelStyles}>End Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={16} />
                  <input name="endTime" type="time" required className={`${inputStyles} pl-12 [color-scheme:dark]`} />
                </div>
              </div>
            </div>

            {/* ── SECTION 3: EVENT TYPE & BAR ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelStyles}>Type of Event</label>
                <select name="eventType" required className={`${inputStyles} appearance-none`}>
                  <option value="" className="bg-black text-white">Select Event Type...</option>
                  <option value="Birthday" className="bg-black">Birthday</option>
                  <option value="Corporate" className="bg-black">Corporate</option>
                  <option value="Engagement" className="bg-black">Engagement</option>
                  <option value="Wedding" className="bg-black">Wedding</option>
                  <option value="Private Party" className="bg-black">Private Party</option>
                  <option value="Other" className="bg-black">Other</option>
                </select>
              </div>

              <div>
                <label className={labelStyles}>Bar Options</label>
                <div className="relative">
                  <Wine className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={16} />
                  <select name="barOptions" required className={`${inputStyles} pl-12 appearance-none`}>
                    <option value="" className="bg-black text-white">Select Bar Option...</option>
                    <option value="Open Bar" className="bg-black">Open Bar</option>
                    <option value="Cash Bar" className="bg-black">Cash Bar</option>
                    <option value="Prepaid Drinks Packages" className="bg-black">Prepaid Drinks Packages</option>
                  </select>
                </div>
              </div>
            </div>

            {/* ── SECTION 4: QUESTIONS ── */}
            <div>
              <label className={labelStyles}>Please type any questions below</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-white" size={16} />
                <textarea
                  name="questions"
                  placeholder="Ask us anything about your event..."
                  className={`${inputStyles} min-h-[120px] pl-12 pt-3 resize-none`}
                ></textarea>
              </div>
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-64 relative overflow-hidden group py-4 bg-[#E5162D] rounded-xl text-white font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,22,45,0.4)] disabled:opacity-50"
              >
                <span className="flex items-center justify-center gap-3">
                  {loading ? "Sending..." : (
                    <>
                      Submit Inquiry <Send size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </>
                  )}
                </span>
              </button>
              
              {success && (
                <p className="text-[#E5162D] mt-6 font-bold animate-pulse">{success}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default VenueBookingForm;