"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navigations = [
  { name: "Real Estate", href: "/real-estate" },
  { name: "Ecosystem", href: "/ecosystem" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 transition-all duration-500",
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl py-4 shadow-sm" 
          : "bg-transparent py-8"
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo - Minimal Pramukh Style */}
        <Link href="/" className="flex flex-col group">
          <span className={cn(
            "font-display font-black text-2xl tracking-tighter transition-colors duration-500",
            isScrolled ? "text-navy" : "text-navy"
          )}>
            PRAMUKH
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] font-medium text-gold">
            Ecosystem of Excellence
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 border-r border-neutral-200 pr-10 mr-2">
            {navigations.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-display font-medium text-[11px] uppercase tracking-[0.15em] text-navy/60 hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link 
            href="#inquire" 
            className="flex items-center gap-2 font-display font-bold text-[11px] uppercase tracking-widest text-navy hover:text-gold transition-colors group"
          >
            Inquire Now <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-navy p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden p-8 flex flex-col justify-center gap-12"
          >
            <button 
              className="absolute top-8 right-8 text-navy p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {navigations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-display font-extrabold text-4xl text-navy uppercase tracking-tighter"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <button className="luxury-button w-full">
              Get an Estimate
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
