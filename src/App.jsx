import React, { useEffect } from "react"; // Added useEffect
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

import Footer from "./components/Footer";
import TermsConditions from "./components/Term";
import Home from "./page/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import GDPRBanner from "../src/components/GDPRBanner"
import { FaPhoneAlt } from "react-icons/fa";
import AboutUs from "./page/About";
import ReviewsSection from "./page/Review";
import EventHire from "./page/EventHire";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reviews" element={<ReviewsSection />} />
        <Route path="/event-hire" element={<EventHire />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      {/* Phone Floating Button */}
      <a
        href="tel:+441530 412394"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 md:right-7 z-50 border w-12 h-12 items-center text-white flex justify-center hover:bg-[#E5162D] transition-all duration-300 group shadow-xl rounded-full hover:scale-110"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={20} />
      </a>
      <GDPRBanner />
    </Router>
  );
}

export default App;