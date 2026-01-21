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

  // SMOOTH SCROLL LOGIC
  const scrollToSection = (e, id) => {
    const isHomePage = window.location.pathname === "/";

    // Agar home page la iruntha mattum smooth scroll panni e.preventDefault() panna pothum
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault(); // Default jump-ah stop panni smooth scroll panrom
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        
        // Mobile menu-va close pannu
        setMobileMenuOpen(false);
        // URL-la hash-ah mathu (optional)
        window.history.pushState(null, "", `/#${id}`);
      }
    }
    // Home page illati e.preventDefault() nadakkathu, so standard <a href="/#id"> moolama home page-ku pogum
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
          isScrolled ? "bg-black border border-white/10 shadow-2xl" : "bg-transparent"
        }`}>
          
          {/* LOGO - Goes to Home */}
          <a href="/#home" onClick={(e) => scrollToSection(e, "home")} className="flex items-center gap-2">
            <h2 className="text-2xl tracking-[0.2em] font-bold text-white font-serif uppercase">Wong Kwei</h2>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-white/90">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`/#${link.id}`} // Entha page-la irunthum home-ku poga path use panrom
                onClick={(e) => scrollToSection(e, link.id)}
                className="hover:text-[#E5162D] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest hover:bg-[#E5162D] hover:text-white transition-all duration-300"
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
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black border border-white/10 p-8 flex flex-col gap-6 text-center shadow-2xl">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`/#${link.id}`} 
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-lg font-bold tracking-widest text-white hover:text-[#E5162D] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/#contact" 
              onClick={(e) => scrollToSection(e, "contact")} 
              className="bg-[#E5162D] text-white py-4 rounded-xl font-black text-xs tracking-[0.2em]"
            >
              BOOK A TABLE
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}