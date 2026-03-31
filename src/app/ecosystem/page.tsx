"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Building2, Sofa, ReceiptText, School, Cpu, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    title: "Real Estate",
    Icon: Building2,
    description: "Our foundation. Creating Environments shaped for living, from luxury high-rises to sprawling estates.",
    details: "Pramukh Group has been a cornerstone of real estate development in Gujarat for over 25 years. We focus on high-quality construction, architectural excellence, and timely delivery. Across Surat, Vapi, and Silvassa, we have delivered more than 60 projects, including flagship high-rise residential towers and premium commercial spaces that redefine urban skylines.",
    stats: ["60+ Projects", "12,000+ Happy Families", "25+ Years Legacy"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Furniture",
    Icon: Sofa,
    description: "Spaces perfected through thoughtful design and curated, bespoke furniture.",
    details: "Under the Pramukh Standard, we extend our expertise into interiors. Our bespoke furniture collections are designed to complement the architectural integrity of our spaces. From modern minimalist seating to grand artisanal dining sets, every piece is crafted to endure.",
    stats: ["Custom Designs", "Enduring Quality", "Artisanal Crafted"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fund",
    Icon: ReceiptText,
    description: "Investing with lasting discipline to create wealth for future generations.",
    details: "Pramukh Investments & Fund management focuses on strategic real estate assets. We offer institutional-grade investment opportunities to retail and HNIs, ensuring disciplined capital allocation and sustainable long-term returns.",
    stats: ["Disciplined Growth", "Strategic Assets", "Generational Wealth"],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Institute",
    Icon: School,
    description: "Shaping leaders in the real estate sector through world-class education.",
    IconProps: { size: 48, strokeWidth: 1 },
    details: "The Pramukh Institute of Real Estate is dedicated to bridge the talent gap in India's booming property market. We provide data-driven courses and hands-on training to the next generation of builders, agents, and designers.",
    stats: ["Industry Experts", "Research Focused", "Future Leaders"],
    image: "https://images.unsplash.com/photo-1523050335392-9bc56751d11a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function EcosystemPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHeader 
        title="Ecosystem" 
        subtitle="Spaces, services, and investments designed to work together, effortlessly."
        breadcrumb="Ecosystem"
      />

      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-32">
          {pillars.map((pillar, i) => (
            <div 
              key={pillar.title} 
              className={cn(
                "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
                i % 2 !== 0 && "lg:flex lg:flex-row-reverse"
              )}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square overflow-hidden"
              >
                 <img src={pillar.image} className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-700" alt={pillar.title} />
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 backdrop-blur-md border-l border-b border-white/20 flex flex-col items-center justify-center text-white">
                    <span className="text-3xl font-display font-black leading-none">0{i+1}</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest mt-2">{pillar.title.charAt(0)}P</span>
                 </div>
              </motion.div>

              <div>
                <pillar.Icon className="text-gold mb-8" size={64} strokeWidth={1} />
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-navy mb-6">
                   {pillar.title}
                </h2>
                <p className="text-navy/50 font-display font-medium text-lg leading-relaxed mb-8">
                   {pillar.details}
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                   {pillar.stats.map(s => (
                     <span key={s} className="px-4 py-2 bg-brand-gray border border-neutral-100 text-[10px] uppercase font-display font-black tracking-widest text-navy">
                        {s}
                     </span>
                   ))}
                </div>
                <button className="flex items-center gap-3 font-display font-black text-xs uppercase tracking-widest text-navy group">
                   Learn More <ArrowRight size={16} className="text-gold group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PropTech Banner */}
      <section className="py-24 bg-navy text-white px-6 lg:px-16 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
            <Cpu size={800} strokeWidth={1} className="-translate-y-1/4 translate-x-1/4" />
         </div>
         <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
               <div className="inline-flex items-center gap-3 bg-white/10 px-4 py-1 rounded-full border border-white/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-[10px] uppercase font-black tracking-widest">REOS.io PropTech Integration</span>
               </div>
               <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  Simplifying <br />
                  <span className="text-transparent text-outline-white">Real Estate.</span>
               </h2>
               <p className="text-white/60 font-display font-medium text-lg mb-8">
                  Intelligent technology systems designed to manage every lifecycle of a property, from land acquisition to community management.
               </p>
               <button className="luxury-button !bg-gold hover:!bg-white hover:!text-navy">
                  Visit RealEstateOS
               </button>
            </div>
            
            <div className="bg-white/5 p-12 lg:p-20 border border-white/10 backdrop-blur-sm">
               <div className="grid grid-cols-2 gap-12">
                  {[
                    { l: "Efficiency", v: "40%" },
                    { l: "Transparency", v: "100%" },
                    { l: "Speed", v: "2X" },
                    { l: "Accuracy", v: "99.9%" },
                  ].map(s => (
                    <div key={s.l} className="flex flex-col gap-2">
                       <div className="text-4xl lg:text-6xl font-display font-black text-gold tracking-tighter">{s.v}</div>
                       <div className="text-[10px] uppercase font-black tracking-widest text-white/40">{s.l}</div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
         
         <style jsx>{`
            .text-outline-white {
               -webkit-text-stroke: 1px #FFFFFF;
            }
         `}</style>
      </section>

      <Footer />
    </div>
  );
}
