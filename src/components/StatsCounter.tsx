"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years of Legacy", value: "25+", delay: 0.1 },
  { label: "Happy Families", value: "12,000+", delay: 0.2 },
  { label: "Sanctuaries Delivered", value: "60+", delay: 0.3 },
  { label: "Centres of Excellence", value: "05+", delay: 0.4 },
];

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-40 bg-white border-b border-stone/5 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: stat.delay, ease: [0.2, 0, 0.2, 1] }}
              className="flex flex-col items-center group"
            >
              <div className="text-6xl md:text-8xl font-serif text-stone tracking-tight mb-4 group-hover:text-gold transition-colors duration-700">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold text-stone/30 group-hover:text-gold/60 transition-colors duration-700">
                {stat.label}
              </div>
              <div className="w-12 h-px bg-stone/10 mt-8 group-hover:w-20 group-hover:bg-gold/30 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
