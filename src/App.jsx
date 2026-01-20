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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      <GDPRBanner />
    </Router>
  );
}

export default App;