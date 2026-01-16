"use client";
import React from "react";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. BRAND INFO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em] font-bold">KWON WEI</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Experience the art of Japanese cuisine. We bring traditional flavors 
              to a modern setting, crafted with the freshest ingredients.
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
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Explore</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/restaurant/" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Reservations</Link></li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white shrink-0" />
                <span>123 Sushi Lane, Food District,<br />London, UK</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white shrink-0" />
                <span>+44 20 7946 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white shrink-0" />
                <span className="break-all">hello@qitchen.com</span>
              </li>
            </ul>
          </div>

          {/* 4. OPENING HOURS */}
          <div>
            <h3 className="text-sm font-bold tracking-widest uppercase mb-6">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white">12pm - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white">12pm - 11pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} QITCHEN RESTAURANT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link to="/terms-conditions" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}