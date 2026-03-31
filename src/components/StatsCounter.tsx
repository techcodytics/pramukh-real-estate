"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { label: "Years of Trust", value: "25+", delay: 0.1 },
  { label: "Happy Families", value: "12,000+", delay: 0.2 },
  { label: "Projects Delivered", value: "60+", delay: 0.3 },
  { label: "Cities of Excellence", value: "05+", delay: 0.4 },
];

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white border-b border-neutral-100 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: stat.delay }}
              className="flex flex-col items-center gap-2"
            >
              <div className="text-5xl md:text-7xl font-display font-black text-navy tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.4em] font-black text-gold">
                {stat.label}
              </div>
              <div className="w-8 h-[1px] bg-neutral-200 mt-4 group-hover:w-16 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
