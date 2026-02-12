import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  // Unified Scroll Function
  const scrollToSection = (e, id) => {
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const position = elementRect - bodyRect - offset;

        window.scrollTo({
          top: position,
          behavior: "smooth",
        });

        // Update URL hash without jumping
        window.history.pushState(null, "", `/#${id}`);
      }
    } else {
      // If not on home page, let the Link component handle navigation to /#id
      // React Router will handle the initial mount scroll if you have a scroll restoration component
    }
  };

  const exploreLinks = [
    { name: "Home", id: "", type: "scroll" },
    { name: "About", path: "/about", type: "page" }, // Links to about page
    { name: "Menu", id: "menu", type: "scroll" },
    { name: "Gallery", id: "gallery", type: "scroll" },
    { name: "Reviews", path: "/reviews", type: "page" },
    { name: "Contact", id: "contact", type: "scroll" },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* 1. BRAND INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em] font-bold uppercase text-white">Wong Kwei</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              Savor the authentic taste of Cantonese and Hong Kong–style cuisine.
              Tradition meets excellence in every dish we serve.
            </p>
            <div className="flex space-x-5">
              <a href="https://web.facebook.com/wongkwei/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E5162D] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/wongkweiashby/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E5162D] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS (EXPLORE) - UPDATED LOGIC */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white/50">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  {link.type === "scroll" ? (
                    <Link
                      to={`/#${link.id}`}
                      onClick={(e) => scrollToSection(e, link.id)}
                      className="hover:text-[#E5162D] transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      to={link.path}
                      className="hover:text-[#E5162D] transition-colors cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white/50">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a
                  href="https://maps.app.goo.gl/Tdg5RDs5SqCnXGhV7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors"
                >
                  <MapPin size={18} className="text-[#E5162D] shrink-0" />
                  <span className="text-gray-400 hover:text-white">
                    9 Bath St, Ashby-de-la-Zouch<br />
                    LE65 2FH, United Kingdom
                  </span>
                </a> 
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#E5162D] shrink-0" />
                <a href="tel:+441530412394" className="hover:text-white transition-colors">
                  01530 412394
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#E5162D] shrink-0" />
                <a href="mailto:wongkweiashby@gmail.com" className="hover:text-white transition-colors break-all">
                  wongkweiashby@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. OPENING HOURS */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-white/50">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Mon - Thu</span>
                <span className="text-white">5:00 – 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Fri - Sat</span>
                <span className="text-white">5:00 – 10:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sunday</span>
                <span className="text-white">5:00 – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            © {currentYear} Wong Kwei RESTAURANT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            <Link to="/privacy-policy" className="hover:text-[#E5162D] transition-colors">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-[#E5162D] transition-colors">Terms</Link>
          </div>
        </div>

        {/* POWERED BY SECTION */}
        <div className="mt-8 text-center">
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#E5162D] transition-colors font-bold"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}