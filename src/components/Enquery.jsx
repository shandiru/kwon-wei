import React, { useState } from "react";
import { Send, User, Mail, MessageSquare, ChevronDown, CheckCircle2 } from "lucide-react";

const ENQUIRY_TYPES = [
    "General Question",
    "Menu & Dietary Requirements",
    "Private Dining & Events",
    "Feedback & Reviews",
    "Business Enquiry",
    "Other",
];

export default function Enquiry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [selectOpen, setSelectOpen] = useState(false);
    const [focused, setFocused] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelectType = (type) => {
        setFormData({ ...formData, type });
        setSelectOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Enquiry: ${formData.type || "General"} — ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nType: ${formData.type}\n\nMessage:\n${formData.message}`
        );
        window.open(`mailto:wongkweiashby@gmail.com?subject=${subject}&body=${body}`, "_blank");
        setSubmitted(true);
    };

    const inputBase = {
        background: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(255,255,255,0.1)",
    };

    const inputFocused = {
        background: "rgba(0,0,0,0.8)",
        border: "1px solid #E5162D",
    };

    return (
        <section
            id="enquiry"
            className="relative w-full text-white overflow-hidden "
        >
            {/* CSS Animation for the Lantern */}
            <style>
                {`
                @keyframes lanternSway {
                    0% { transform: rotate(-3deg); }
                    50% { transform: rotate(3deg); }
                    100% { transform: rotate(-3deg); }
                }
                .lantern-sway {
                    animation: lanternSway 3s ease-in-out infinite;
                    transform-origin: top center;
                }
                `}
            </style>

            {/* ── BACKGROUND IMAGE LAYER ── */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url('/bg.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black/75 z-0" />
            </div>

            {/* Decorative top border */}
            <div
                className="relative z-10 h-px w-full"
                style={{ background: "linear-gradient(90deg, transparent, #E5162D, transparent)" }}
            />

            {/* Positioned top-right, hidden on very small screens to avoid clutter */}
            <div className="absolute top-5 right-[5%] sm:right-[10%] z-20 w-16 sm:w-24 lg:w-32 pointer-events-none lantern-sway">
                <img 
                    src="/lattern.png"  /* Ensure your image is named lantern.png in public folder */
                    alt="Decorative Lantern"
                    className="w-full h-auto opacity-80"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-7 py-16 sm:py-20 lg:py-24">

                {/* Section header */}
                <div className="text-center mb-12 sm:mb-16">
                    <span
                        className="block text-[9px] sm:text-[10px] font-bold tracking-[0.45em] uppercase mb-4"
                        style={{ color: "#E5162D" }}
                    >
                        We're Listening
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-wide leading-tight">
                        Send an <span style={{ color: "#E5162D" }}>Enquiry</span>
                    </h2>
                    <div
                        className="mx-auto mt-4 h-px w-20"
                        style={{ background: "linear-gradient(90deg, transparent, #E5162D, transparent)" }}
                    />
                    <p className="mt-5 text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                        Questions about the menu, private events, or anything else — we'd love to hear from you.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 items-start">

                    {/* ── LEFT — side info panel ── */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <div
                            className="rounded-2xl sm:rounded-3xl border p-6 sm:p-8"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                borderColor: "rgba(255,255,255,0.1)",
                                backdropFilter: "blur(12px)",
                            }}
                        >
                            <h3 className="text-lg sm:text-xl text-white uppercase tracking-wide mb-1">
                                What we can help with
                            </h3>
                            <div className="h-px w-8 mb-5" style={{ background: "#E5162D" }} />

                            <ul className="space-y-4">
                                {[
                                    { label: "Menu & allergen queries", desc: "Dietary needs, ingredients, and substitutions." },
                                    { label: "Private dining & hire", desc: "Exclusive events, group bookings, and celebrations." },
                                    { label: "Feedback", desc: "Compliments, suggestions, or anything on your mind." },
                                    { label: "Business & press", desc: "Partnerships, media, and commercial enquiries." },
                                ].map(({ label, desc }) => (
                                    <li key={label} className="flex items-start gap-3">
                                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#E5162D" }} />
                                        <div>
                                            <p className="text-white text-sm font-semibold leading-snug">{label}</p>
                                            <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div
                            className="rounded-2xl sm:rounded-3xl border px-5 py-4 flex items-center gap-4"
                            style={{
                                background: "rgba(229,22,45,0.1)",
                                borderColor: "rgba(229,22,45,0.3)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            <div
                                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                                style={{ background: "rgba(229,22,45,0.2)", border: "1px solid rgba(229,22,45,0.4)", color: "#E5162D" }}
                            >
                                <Mail size={15} />
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">Reply within 24 hours</p>
                                <p className="text-gray-400 text-xs mt-0.5">wongkweiashby@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT — Enquiry form ── */}
                    <div
                        className="lg:col-span-3 relative rounded-2xl sm:rounded-3xl border flex flex-col"
                        style={{
                            background: "rgba(255,255,255,0.03)",
                            borderColor: "rgba(255,255,255,0.1)",
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        <div className="p-6 sm:p-8 lg:p-10">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-14 text-center gap-5">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(229,22,45,0.12)", border: "1px solid rgba(229,22,45,0.3)" }}>
                                        <CheckCircle2 size={26} style={{ color: "#E5162D" }} />
                                    </div>
                                    <h4 className="text-xl text-white uppercase tracking-wide">Message Sent</h4>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", type: "", message: "" }); }}
                                        className="mt-2 text-[10px] font-bold tracking-[0.25em] uppercase px-6 py-2.5 rounded-xl border border-[#E5162D] text-[#E5162D]"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <span className="block text-[9px] sm:text-[10px] font-bold tracking-[0.45em] uppercase text-gray-400 mb-2">
                                            General Enquiries
                                        </span>
                                        <h3 className="text-2xl sm:text-3xl text-white">How can we help?</h3>
                                    </div>

                                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            {[
                                                { label: "Your Name", name: "name", type: "text", placeholder: "Full name", icon: <User size={13} /> },
                                                { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com", icon: <Mail size={13} /> },
                                            ].map(({ label, name, type, placeholder, icon }) => (
                                                <div key={name} className="flex flex-col">
                                                    <label className="mb-2 text-[9px] font-bold tracking-[0.22em] uppercase text-gray-400">{label}</label>
                                                    <div className="relative">
                                                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: focused === name ? "#E5162D" : "rgba(255,255,255,0.3)" }}>
                                                            {icon}
                                                        </span>
                                                        <input
                                                            required
                                                            name={name}
                                                            type={type}
                                                            placeholder={placeholder}
                                                            value={formData[name]}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocused(name)}
                                                            onBlur={() => setFocused(null)}
                                                            className="w-full rounded-xl pl-9 pr-4 py-3.5 text-sm text-white focus:outline-none transition-all placeholder:text-gray-600"
                                                            style={focused === name ? inputFocused : inputBase}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex flex-col relative">
                                            <label className="mb-2 text-[9px] font-bold tracking-[0.22em] uppercase text-gray-400">Enquiry Type</label>
                                            <button
                                                type="button"
                                                onClick={() => setSelectOpen(!selectOpen)}
                                                className="w-full rounded-xl px-4 py-3.5 text-sm text-left flex items-center justify-between transition-all"
                                                style={selectOpen ? inputFocused : inputBase}
                                            >
                                                <span style={{ color: formData.type ? "white" : "rgba(255,255,255,0.3)" }}>
                                                    {formData.type || "Select a topic…"}
                                                </span>
                                                <ChevronDown size={15} style={{ color: "#E5162D", transform: selectOpen ? "rotate(180deg)" : "none" }} />
                                            </button>
                                            {selectOpen && (
                                                <div className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-20 bg-[#111] border border-[rgba(229,22,45,0.3)] shadow-2xl">
                                                    {ENQUIRY_TYPES.map((type) => (
                                                        <button
                                                            key={type}
                                                            type="button"
                                                            onClick={() => handleSelectType(type)}
                                                            className="w-full text-left px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                                                            style={{ color: formData.type === type ? "#E5162D" : "white" }}
                                                        >
                                                            {type}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col">
                                            <label className="mb-2 text-[9px] font-bold tracking-[0.22em] uppercase text-gray-400">Message</label>
                                            <div className="relative">
                                                <span className="absolute left-3.5 top-4" style={{ color: focused === "message" ? "#E5162D" : "rgba(255,255,255,0.3)" }}>
                                                    <MessageSquare size={13} />
                                                </span>
                                                <textarea
                                                    required
                                                    name="message"
                                                    rows={4}
                                                    placeholder="Tell us what's on your mind…"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused("message")}
                                                    onBlur={() => setFocused(null)}
                                                    className="w-full rounded-xl pl-9 pr-4 py-3.5 text-sm text-white focus:outline-none transition-all placeholder:text-gray-600 resize-none"
                                                    style={focused === "message" ? inputFocused : inputBase}
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="mt-2 w-full flex items-center justify-center gap-3 text-white font-bold uppercase tracking-[0.25em] text-[11px] py-4 rounded-xl transition-all hover:brightness-110 active:scale-[0.98]"
                                            style={{ background: "linear-gradient(135deg, #E5162D 0%, #c0101f 100%)", boxShadow: "0 8px 20px rgba(229,22,45,0.3)" }}
                                        >
                                            <Send size={15} />
                                            Send Enquiry
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #E5162D, transparent)" }} />
        </section>
    );
}