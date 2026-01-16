"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom"; // Navigation-ku idhu mukkiyam

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll pannumpo background change aaga
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
      isScrolled ? "py-3" : "py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled ? "bg-black/80 backdrop-blur-lg border border-white/10 shadow-2xl" : "bg-transparent"
        }`}>
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <h2 className="text-2xl tracking-[0.2em] font-bold text-white font-serif">KWON WEI</h2>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.15em] text-white/90">
            <Link to="/" className="hover:text-white transition-colors">HOME</Link>
            <Link to="/restaurant/" className="hover:text-white transition-colors">MENU</Link>
            <Link to="/about" className="hover:text-white transition-colors">OUR STORY</Link>
            <Link to="/contact" className="hover:text-white transition-colors">CONTACT</Link>
          </div>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-white hover:scale-110 transition-transform">
              <ShoppingBag size={20} />
            </button>
            <Link
              to="/restaurant/"
              className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              BOOK A TABLE
            </Link>
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
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-white">Home</Link>
            <Link to="/restaurant/" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-white">Menu</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif text-white">About</Link>
            <Link to="/restaurant/" onClick={() => setMobileMenuOpen(false)} className="bg-white text-black py-3 rounded-xl font-bold">BOOK A TABLE</Link>
          </div>
        )}
      </div>
    </nav>
  );
}