"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navigations = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Inquiry", href: "/inquiry" },
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
          : "bg-white/50 backdrop-blur-2xl py-4",
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo - Serene Pramukh Style */}
        <Link href="/" className="flex flex-col items-center group">
          {/* <span
            className={cn(
              "font-serif font-semibold text-3xl tracking-tight transition-colors duration-700",
              isScrolled ? "text-stone" : "text-stone",
            )}
          >
            PRAMUKH
          </span> */}
          <img src={"/images/logo.png"} alt="Logo" width={130} height={50} />
          {/* <Image src="/images/logo.png" alt="Logo" width={100} height={62} /> */}
          {/* <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-gold/80 mt-1">
            Architecture of Serenity
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navigations.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-sans font-medium text-[12px] uppercase tracking-[0.2em] text-stone/60 hover:text-gold transition-all duration-500 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
          <Link
            href="/inquiry"
            className="serene-button !py-2.5 !px-6 text-[10px]"
          >
            Inquire
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
            <button className="luxury-button w-full">Get an Estimate</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
