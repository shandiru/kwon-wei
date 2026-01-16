"use client";
import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRAND INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em] font-bold uppercase">Wong Kwei</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Savor the authentic taste of Cantonese cuisine in the heart of Ashby. 
              Tradition meets excellence in every dish we serve.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/50">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/restaurant/" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/50">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white shrink-0" />
                <a 
                  href="https://goo.gl/maps/example" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  9 Bath St, Ashby-de-la-Zouch<br />LE65 2FH, United Kingdom
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white shrink-0" />
                <a href="tel:+441530412394" className="hover:text-white transition-colors">
                  +44 1530 412394
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white shrink-0" />
                <a href="mailto:wongkweiashby@gmail.com" className="hover:text-white transition-colors break-all">
                  wongkweiashby@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. OPENING HOURS */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6 text-white/50">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Fri - Sat</span>
                <span className="text-white">5:00 – 10:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-1">
                <span>Sun - Thu</span>
                <span className="text-white">5:00 – 10:00 PM</span>
              </li>
              <li className="mt-4 text-[10px] text-gray-500 italic">
                * Times may vary on Bank Holidays
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            © {currentYear} WONG KWEI RESTAURANT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}