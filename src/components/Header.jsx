import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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

  // Smooth scroll only for home sections
  const scrollToSection = (e, id) => {
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();

        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const position = elementRect - bodyRect - offset;

        window.scrollTo({
          top: position,
          behavior: "smooth",
        });

        setMobileMenuOpen(false);
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  const navLinks = [
    { name: "HOME", id: "", type: "scroll" },
    { name: "ABOUT", path: "/about", type: "page" },
    { name: "MENU", id: "menu", type: "scroll" },
    { name: "GALLERY", id: "gallery", type: "scroll" },
    { name: "REVIEWS", path: "/reviews", type: "page" },
    { name: "EVENT HIRE", path: "/event-hire", type: "page" },
    { name: "CONTACT", id: "contact", type: "scroll" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-black border border-white/10 shadow-2xl"
              : "bg-transparent"
          }`}
        >
          {/* LOGO */}
          <a
            href="/#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-2"
          >
            <h2 className="text-2xl tracking-[0.2em] font-bold text-white font-serif uppercase">
              Wong Kwei
            </h2>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.15em] text-white/90">
            {navLinks.map((link) =>
              link.type === "scroll" ? (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="hover:text-[#E5162D] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-[#E5162D] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
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
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-black border border-white/10 p-8 flex flex-col gap-6 text-center shadow-2xl">
            {navLinks.map((link) =>
              link.type === "scroll" ? (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="text-lg font-bold tracking-widest text-white hover:text-[#E5162D] transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold tracking-widest text-white hover:text-[#E5162D] transition-colors"
                >
                  {link.name}
                </a>
              )
            )}

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
