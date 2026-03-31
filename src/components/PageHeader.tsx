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
    <section className="relative pt-48 pb-24 bg-brand-gray border-b border-neutral-100 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8 text-[10px] font-display font-black uppercase tracking-[0.3em] text-navy/40"
        >
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} className="text-gold" />
          <span className="text-gold">{breadcrumb || title}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter text-navy leading-[0.9] mb-6"
        >
          {title}<span className="text-gold">.</span>
        </motion.h1>

        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-navy/50 font-display font-medium text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-full pointer-events-none opacity-10">
         <div className="text-[20rem] font-display font-black text-navy leading-none select-none translate-y-1/2 translate-x-1/4">
            {title.charAt(0)}
         </div>
      </div>
    </section>
  );
};

export default PageHeader;
