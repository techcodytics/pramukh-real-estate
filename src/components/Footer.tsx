"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Camera, Globe, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-24 pb-12 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          
          {/* Brand & Ecosystem */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex flex-col mb-8">
              <span className="font-display font-black text-4xl tracking-tighter text-white">
                PRAMUKH
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-gold">
                Ecosystem of Excellence
              </span>
            </Link>
            <p className="max-w-md text-white/50 font-display font-medium text-sm leading-relaxed mb-12">
              Building masterworks that transcend generations. Our ecosystem 
              integrates Spaces, Services, and Investments designed to grow with you.
            </p>
            <div className="flex items-center gap-6 text-white/40">
              <Link href="#" className="hover:text-gold transition-colors duration-300">
                <MessageCircle size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-gold transition-colors duration-300">
                <Camera size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-gold transition-colors duration-300">
                <Globe size={20} strokeWidth={1.5} />
              </Link>
              <Link href="#" className="hover:text-gold transition-colors duration-300">
                <Globe size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
             <h4 className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-gold mb-8">
               Navigation
             </h4>
             <ul className="space-y-4">
               {["Real Estate", "Ecosystem", "Sustainability", "About Us", "Contact", "Careers"].map((link) => (
                 <li key={link}>
                   <Link href="#" className="font-display font-bold text-sm text-white/60 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group">
                     {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                   </Link>
                 </li>
               ))}
             </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-4">
             <h4 className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-gold mb-8">
               Contact Us
             </h4>
             <div className="space-y-8">
                <div className="flex items-start gap-4">
                   <div className="bg-white/5 p-3 rounded-none border border-white/10 text-gold">
                      <Phone size={24} strokeWidth={1.5} />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-1">Talk to us</div>
                      <div className="text-xl font-display font-black text-white">+91 97261 11333</div>
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-white/5 p-3 rounded-none border border-white/10 text-gold">
                      <Mail size={24} strokeWidth={1.5} />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase font-black text-white/30 tracking-widest mb-1">Email Inquiry</div>
                      <div className="text-xl font-display font-black text-white">care@pramukh.com</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6 text-[10px] uppercase font-black tracking-widest text-white/30">
              <span>© 2026 Pramukh Group</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
           
           <div className="flex items-center gap-3 bg-white/5 px-6 py-3 border border-white/10">
              <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold">Powered by</span>
              <span className="text-[10px] font-display font-black uppercase tracking-[0.2em] text-white">REOS.io</span>
           </div>
        </div>
        
        <div className="mt-12 text-[9px] text-white/20 font-medium leading-relaxed max-w-4xl border-t border-white/5 pt-8">
          Disclaimer: The images shown are for representational purposes only. All projects are registered with respective state RERA authorities. 
          Please visit the official RERA portal for comprehensive details and verified documentation. 
          Prices and availability are subject to change without prior notice.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
