"use client";

import React from "react";
import Link from "next/link";
import {
  MessageCircle,
  Camera,
  Globe,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone text-beige pt-24 pb-12 px-6 lg:px-24 overflow-hidden border-t border-gold/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-24 mb-24">
          {/* Brand & Philosophy */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex flex-col mb-10 group">
              <img
                src={"/images/logo_white.png"}
                alt="Logo"
                width={130}
                height={50}
              />
            </Link>
            <p className="max-w-md text-white/40 font-sans font-light text-base leading-relaxed mb-12 italic border-l border-gold/20 pl-6">
              &quot;Crafting masterworks that transcend generations. Our
              philosophy integrates spaces, services, and values designed for a
              lifetime of peace.&quot;
            </p>
            <div className="flex items-center gap-8 text-white/30">
              {[MessageCircle, Camera, Globe, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="hover:text-gold transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon size={20} strokeWidth={1} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-10">
              Sanctuaries
            </h4>
            <ul className="space-y-6">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "About Us", href: "/about" },
                { name: "Inquiry", href: "/inquiry" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-serif italic text-lg text-white/50 hover:text-white transition-all duration-500 inline-flex items-center gap-3 group"
                  >
                    {link.name}{" "}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-700"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-12">
              Connect with us
            </h4>
            <div className="space-y-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-stone transition-all duration-700 border border-white/5">
                  <Phone size={20} strokeWidth={1} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/20 tracking-[0.3em] mb-2">
                    Voice Consultation
                  </div>
                  <div className="text-2xl font-serif text-white tracking-tight">
                    +91 97261 11333
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-stone transition-all duration-700 border border-white/5">
                  <Mail size={20} strokeWidth={1} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/20 tracking-[0.3em] mb-2">
                    Digital Inquiry
                  </div>
                  <div className="text-2xl font-serif text-white tracking-tight">
                    care@pramukh.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-10 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
            <span>© 2026 Pramukh Group</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-white transition-colors duration-500"
            >
              Terms and Conditions
            </Link>
          </div>

          <div className="flex items-center gap-4 bg-white/5 px-8 py-3 border border-white/5">
            <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold">
              Crafted by
            </span>
            <span className="text-[11px] font-serif italic text-white/60">
              Truvixoo
            </span>
          </div>
        </div>

        <div className="mt-16 text-[10px] text-white/10 font-sans font-light leading-relaxed max-w-4xl border-t border-white/5 pt-10 text-center mx-auto letter-spacing-[0.05em]">
          Disclaimer: Visual representations are for illustrative purposes. All
          projects are RERA registered. Please verify verified documentation on
          the official RERA portal. Architecture and availability are subject to
          alignment with our evolving vision of excellence.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
