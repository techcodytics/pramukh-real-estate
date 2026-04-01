"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: 1,
    image: "/images/hero_sunrise.png",
    tagline: "A Legacy of Peace & Excellence",
    title: (
      <>
        Architecture <br />
        <span className="italic text-gold">of Serenity.</span>
      </>
    ),
    description: "Crafting spaces that embody simplicity, purity, and peace. A vision of luxury rooted in timeless cultural values.",
  },
  {
    id: 2,
    image: "/images/hero_villa.png",
    tagline: "Modern Minimalist Living",
    title: (
      <>
        Purity <br />
        <span className="italic text-gold">in Every Line.</span>
      </>
    ),
    description: "Where contemporary design meets natural harmony. Experience the tranquility of light, space, and nature.",
  },
  {
    id: 3,
    image: "/images/hero_interior.png",
    tagline: "Timeless Interior Elegance",
    title: (
      <>
        Sanctuaries <br />
        <span className="italic text-gold">of the Soul.</span>
      </>
    ),
    description: "Exquisite interiors designed for quiet reflection. Every detail curated to elevate your everyday living experience.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Background variants use vertical motion
  const bgVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Content variants use fade motion for better visibility and elegant transitions
  const contentVariants = {
    enter: {
      opacity: 0,
      filter: "blur(4px)",
    },
    center: {
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: {
      opacity: 0,
      filter: "blur(4px)",
    },
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-stone flex flex-col items-center justify-center pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 40 },
              opacity: { duration: 1 },
            }}
            className="absolute inset-0"
          >
            <motion.div 
               initial={{ scale: 1.15 }}
               animate={{ scale: 1 }}
               transition={{ duration: 7, ease: "easeOut" }}
               className="w-full h-full"
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].tagline}
                className="w-full h-full object-cover brightness-[0.7]"
              />
            </motion.div>
            {/* Stronger overlay for font visibility */}
            <div className="absolute inset-0 bg-stone/40 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-stone/60 via-transparent to-stone/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <div className="mb-8 inline-flex items-center gap-4 bg-white/20 backdrop-blur-2xl px-6 py-2 rounded-none border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] text-white font-sans font-semibold uppercase tracking-[0.3em]">
                {slides[currentSlide].tagline}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif font-medium text-white tracking-tight leading-[0.9] mb-10 drop-shadow-2xl">
              {slides[currentSlide].title}
            </h1>

            <p className="max-w-xl mx-auto text-white/80 text-lg md:text-xl font-sans font-light leading-relaxed mb-14 drop-shadow-lg">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-gold text-stone px-12 py-4 rounded-none font-serif font-medium text-sm tracking-[0.2em] transition-all duration-700 hover:bg-white hover:text-stone min-w-[240px] shadow-xl">
                Explore Sanctuaries
              </button>
              <button className="px-12 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-serif font-medium text-sm tracking-[0.2em] hover:bg-white hover:text-stone transition-all duration-700 min-w-[240px]">
                Our Philosophy
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical Side Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className="group relative flex items-center justify-end"
          >
            <span className={cn(
              "absolute right-10 text-[11px] font-sans font-bold uppercase tracking-widest text-white transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0",
              currentSlide === index && "opacity-100 translate-x-0 text-gold"
            )}>
              0{index + 1}
            </span>
            <div className={cn(
              "w-0.5 h-10 bg-white/20 transition-all duration-700 rounded-full overflow-hidden relative",
              currentSlide === index ? "bg-white/40 h-16 w-1" : "group-hover:bg-white/40"
            )}>
              {currentSlide === index && (
                <motion.div 
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute top-0 left-0 w-full bg-gold"
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-[10px] text-white/60 uppercase tracking-[0.4em] font-medium vertical-text">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* CSS for vertical text */}
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default Hero;


