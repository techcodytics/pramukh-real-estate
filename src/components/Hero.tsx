"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-brand-gray flex flex-col items-center justify-center pt-20">
      {/* Background with Subtle Zoom */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
          alt="Pramukh Inspired Architecture"
          className="w-full h-full object-cover brightness-[0.7] grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/40" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="mb-6 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[10px] text-white font-display font-bold uppercase tracking-[0.2em]">
            Trusted for 25+ Years
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-white tracking-tighter leading-[0.95] mb-8"
        >
          MASTERS OF <br />
          <span className="text-transparent border-text text-outline text-white/10">MASTERPIECE.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-white/60 text-lg md:text-xl font-display font-light leading-relaxed mb-12"
        >
          Building spaces, services, and investments designed to grow with you.
          An ecosystem of excellence in every detail.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="luxury-button min-w-[220px]">
            Explore Real Estate
          </button>
          <button className="px-8 py-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-display font-medium text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300 min-w-[220px]">
             Our Ecosystem
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] text-white/40 uppercase tracking-[0.3em] font-medium vertical-text">SCROLL</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gold"
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      {/* CSS for Text Outline effect */}
      <style jsx>{`
        .text-outline {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default Hero;
