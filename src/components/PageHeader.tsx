"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="relative pt-48 pb-24 bg-white border-b border-black/5 px-6 lg:px-24 overflow-hidden geometric-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-10 text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-black/40"
        >
          <Link href="/" className="hover:text-black transition-colors duration-500">Home</Link>
          <ChevronRight size={12} className="text-black/20" />
          <span className="text-black">{breadcrumb || title}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0.2, 1] }}
          className="text-6xl md:text-8xl font-serif font-medium text-black leading-[0.9] mb-10"
        >
          {title}<span className="italic text-black/10">.</span>
        </motion.h1>

        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0, 0.2, 1] }}
            className="max-w-2xl text-black/60 font-sans font-light text-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Subtle Architectural Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-[0.02]">
         <div className="text-[30rem] font-serif font-medium text-black leading-none select-none translate-y-1/4 translate-x-1/4 italic">
            {title.charAt(0)}
         </div>
      </div>
    </section>
  );
};

export default PageHeader;
