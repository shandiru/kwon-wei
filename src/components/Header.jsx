"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll effect to change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to close menu on click
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? "py-3" : "py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg border border-white/10 shadow-2xl" : "bg-transparent"
        }`}>
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-2">
            <h2 className="text-2xl tracking-[0.2em] font-bold text-white font-serif">KWON WEI</h2>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-white/90">
            <a href="#home" className="hover:text-orange-500 transition-colors">HOME</a>
            <a href="#about" className="hover:text-orange-500 transition-colors">ABOUT</a>
            <a href="#menu" className="hover:text-orange-500 transition-colors">MENU</a>
            <a href="#gallery" className="hover:text-orange-500 transition-colors">GALLERY</a>
            <a href="#reviews" className="hover:text-orange-500 transition-colors">REVIEWS</a>
            <a href="#contact" className="hover:text-orange-500 transition-colors">CONTACT</a>
          </div>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#booking"
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
            <a href="#home" onClick={closeMenu} className="text-xl font-serif text-white">Home</a>
            <a href="#about" onClick={closeMenu} className="text-xl font-serif text-white">About</a>
            <a href="#menu" onClick={closeMenu} className="text-xl font-serif text-white">Menu</a>
            <a href="#gallery" onClick={closeMenu} className="text-xl font-serif text-white">Gallery</a>
            <a href="#reviews" onClick={closeMenu} className="text-xl font-serif text-white">Reviews</a>
            <a href="#contact" onClick={closeMenu} className="text-xl font-serif text-white">Contact</a>
            <a href="#booking" onClick={closeMenu} className="bg-white text-black py-3 rounded-xl font-bold">BOOK A TABLE</a>
          </div>
        )}
      </div>
    </nav>
  );
}