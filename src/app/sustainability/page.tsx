"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Leaf, Sun, Wind, Droplets, Heart, Users, ShieldCheck, TreePine, Recycle } from "lucide-react";
import { cn } from "@/lib/utils";

const initiatives = [
  {
    title: "Energy Efficiency",
    Icon: Sun,
    description: "Our buildings are designed with solar harvesting systems and energy-efficient lighting to reduce our carbon footprint.",
  },
  {
    title: "Water Conservation",
    Icon: Droplets,
    description: "Advanced rainwater harvesting and high-tech recycling systems ensure minimal water wastage in every project.",
  },
  {
    title: "Eco-Friendly Materials",
    Icon: TreePine,
    description: "We prioritize responsible sourcing. Every brick and beam is chosen for its durability and environmental impact.",
  },
  {
    title: "Zero Waste Living",
    Icon: Recycle,
    description: "Integrated waste management systems help our communities reduce, reuse, and recycle effortlessly.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHeader 
        title="Sustainability" 
        subtitle="Building for today, preserving for tomorrow. Our commitment to green living and community trust."
        breadcrumb="Values"
      />

      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
             <div className="relative group overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale-[0.3]" 
                  alt="Sustainability at Pramukh"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/0 transition-colors" />
                <div className="absolute top-12 left-12">
                   <div className="w-16 h-16 bg-gold flex items-center justify-center text-white">
                      <Leaf size={32} />
                   </div>
                </div>
             </div>

             <div>
                <span className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                   Green Commitment
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter text-navy mb-8">
                   Preserving our <br />
                   <span className="text-transparent text-outline-navy">Environment.</span>
                </h2>
                <p className="text-navy/50 font-display font-medium text-lg leading-relaxed mb-10">
                   For Pramukh Group, sustainability is not a checkbox; it is a fundamental standard of how we build. From the design of our residential towers in Surat to the materials sourced for our Silvassa estates, we focus on creating harmony between architecture and nature.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                   {initiatives.map((item, i) => (
                     <div key={i} className="flex flex-col gap-3">
                        <item.Icon className="text-gold" size={24} />
                        <h3 className="font-display font-black text-xs uppercase tracking-widest text-navy">{item.title}</h3>
                        <p className="text-xs text-navy/40 leading-relaxed font-display font-medium">{item.description}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="bg-brand-gray p-12 lg:p-24 border border-neutral-100 flex flex-col items-center text-center">
             <div className="mb-8 p-4 bg-white rounded-full text-gold border border-neutral-100">
                <Users size={32} strokeWidth={1.5} />
             </div>
             <h2 className="text-3xl lg:text-5xl font-display font-black uppercase tracking-tighter text-navy mb-8">
                The Community <br />
                <span className="text-gold">Standard.</span>
             </h2>
             <p className="max-w-2xl text-navy/50 font-display font-medium text-lg leading-relaxed mb-12">
                Our ecosystem thrives on community trust. We ensure complete transparency at every stage—from land acquisition to handover—providing RERA-compliant practices and open communication for all our stakeholders.
             </p>
             <div className="flex flex-wrap items-center justify-center gap-12">
                {[
                  { Icon: Heart, label: "Trust Built" },
                  { Icon: ShieldCheck, label: "RERA Compliant" },
                  { Icon: Users, label: "12,000 Families" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                     <item.Icon className="text-gold" size={32} strokeWidth={1} />
                     <span className="text-[10px] uppercase font-display font-black tracking-widest text-navy/40">{item.label}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
      <style jsx>{`
         .text-outline-navy {
            -webkit-text-stroke: 1px #0F172A;
         }
      `}</style>
    </div>
  );
}
