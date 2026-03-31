"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Sofa, ReceiptText, School, Cpu, Globe, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EcosystemItem {
  title: string;
  description: string;
  Icon: LucideIcon;
  link: string;
  bg: string;
}

const ecosystems: EcosystemItem[] = [
  {
    title: "Real Estate",
    description: "Environments shaped for living, from luxury high-rises to sprawling estates.",
    Icon: Building2,
    link: "#projects",
    bg: "bg-white",
  },
  {
    title: "Furniture",
    description: "Spaces perfected through thoughtful design and curated furniture.",
    Icon: Sofa,
    link: "#",
    bg: "bg-neutral-50",
  },
  {
    title: "Fund",
    description: "Investing with lasting discipline to create wealth for generations.",
    Icon: ReceiptText,
    link: "#",
    bg: "bg-white",
  },
  {
    title: "Institute",
    description: "Shaping leaders in real estate through world-class education.",
    Icon: School,
    link: "#",
    bg: "bg-neutral-50",
  },
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="bg-white border-y border-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 group">
        {ecosystems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={cn(
              "relative p-12 lg:p-16 h-[400px] flex flex-col justify-between border-r border-neutral-100 last:border-r-0 transition-colors duration-500 hover:bg-navy hover:text-white group/item",
              item.bg
            )}
          >
            <div>
              <div className="w-12 h-12 mb-8 text-gold flex items-center justify-center group-hover/item:text-white transition-colors duration-500">
                <item.Icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-black uppercase tracking-tight mb-4 transition-colors duration-500 group-hover/item:text-white">
                {item.title}
              </h3>
              <p className="text-sm font-display font-medium text-neutral-500 leading-relaxed border-l-2 border-gold pl-4 transition-colors duration-500 group-hover/item:text-white/60">
                {item.description}
              </p>
            </div>
            
            <a 
              href={item.link} 
              className="inline-flex items-center gap-2 text-[10px] font-display font-black uppercase tracking-[0.25em] text-navy group-hover/item:text-gold transition-colors duration-500"
            >
              Know More <span className="w-8 h-[1px] bg-navy group-hover/item:bg-gold transition-colors duration-500" />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="bg-navy p-6 flex flex-col md:flex-row items-center justify-between gap-6 px-12 lg:px-16">
        <div className="flex items-center gap-4">
           <Cpu size={24} className="text-gold" />
           <div className="flex flex-col">
             <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">PropTech Ecosystem</span>
             <span className="text-sm text-white font-display font-bold">Simplifying Real Estate, intelligently.</span>
           </div>
        </div>
        <button className="flex items-center gap-2 text-[10px] text-gold uppercase tracking-[0.2em] font-black group">
           Explore RealEstateOS <Globe size={14} className="group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Ecosystem;
