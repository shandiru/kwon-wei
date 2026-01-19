"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SMOOTH SCROLL FUNCTION
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjusted for Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "MENU", id: "menu" },
    { name: "GALLERY", id: "gallery" },
    { name: "REVIEWS", id: "reviews" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? "py-3" : "py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg border border-white/10 shadow-2xl" : "bg-transparent"
        }`}>
          
          {/* LOGO */}
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-2">
            <h2 className="text-2xl tracking-[0.2em] font-bold text-white font-serif">KWON WEI</h2>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-white/90">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#booking"
              onClick={(e) => scrollToSection(e, "booking")}
              className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              BOOK A TABLE
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black/95 backdrop-blur-xl rounded-2xl border border-white/10 p-8 flex flex-col gap-6 text-center animate-in fade-in zoom-in duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-xl font-serif text-white hover:text-orange-500"
              >
                {link.name.charAt(0) + link.name.slice(1).toLowerCase()}
              </a>
            ))}
            <a href="#booking" onClick={(e) => scrollToSection(e, "booking")} className="bg-white text-black py-3 rounded-xl font-bold">BOOK A TABLE</a>
          </div>
        )}
      </div>
    </nav>
  );
}