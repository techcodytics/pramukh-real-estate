"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ecosystem from "@/components/Ecosystem";
import ProjectCard from "@/components/ProjectCard";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Filter, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "vivanta-surat",
    name: "Vivanta",
    location: "Vesu",
    city: "Surat",
    config: "3 BHK Apartments",
    status: "Ongoing" as const,
    rera: "PR/GJ/SURAT/001",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    type: "Residential" as const,
  },
  {
    id: "elysium-vapi",
    name: "Elysium",
    location: "Chala",
    city: "Vapi",
    config: "2 & 3 BHK Apartments",
    status: "New Launch" as const,
    rera: "PR/GJ/VALSAD/055",
    image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200&auto=format&fit=crop",
    type: "Residential" as const,
  },
  {
    id: "commercial-hub-surat",
    name: "Iconic Tower",
    location: "Adajan",
    city: "Surat",
    config: "Showrooms & Offices",
    status: "Ongoing" as const,
    rera: "PR/GJ/SURAT/092",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    type: "Commercial" as const,
  },
  {
    id: "premium-plots-silvassa",
    name: "The Woods",
    location: "Silvassa Center",
    city: "Silvassa",
    config: "Premium Plots",
    status: "Completed" as const,
    rera: "PR/DNH/001",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    type: "Plotting" as const,
  },
];

const cities = ["All", "Surat", "Vapi", "Silvassa"];

export default function Home() {
  const [activeCity, setActiveCity] = useState("All");

  const filteredProjects = activeCity === "All" 
    ? projects 
    : projects.filter(p => p.city === activeCity);

  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Ecosystem />

      {/* Real Estate Section */}
      <section id="projects" className="py-24 lg:py-32 bg-white px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                Real Estate
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-navy mb-6">
                Featured <br />
                <span className="text-transparent text-outline-navy transition-all hover:text-navy">Projects.</span>
              </h2>
            </div>

            {/* Pramukh-Style Filter */}
            <div className="flex flex-wrap items-center gap-2 border-b border-neutral-100 pb-2">
              <Filter size={16} className="text-neutral-400 mr-2" />
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={cn(
                    "px-6 py-2 text-[10px] uppercase font-display font-black tracking-widest transition-all",
                    activeCity === city 
                      ? "text-gold border-b-2 border-gold" 
                      : "text-navy/40 hover:text-navy"
                  )}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-4 group font-display font-black text-xs uppercase tracking-[0.25em] text-navy">
              View All Masterpieces <span className="w-12 h-[1px] bg-navy group-hover:w-20 transition-all duration-300" /> <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Sustainable Standards Section */}
      <section id="sustainability" className="py-24 bg-brand-gray border-y border-neutral-100 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
             <span className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-gold mb-4 inline-block">
                Standard of Excellence
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-navy mb-8">
                The Pramukh <br />
                <span className="text-transparent text-outline-navy">Commitment.</span>
              </h2>
              <p className="text-navy/60 font-display font-medium text-lg leading-relaxed mb-12 max-w-lg">
                Thoughtful design, lasting quality, and communities built to thrive. We are not just building houses; we are shaping a sustainable ecosystem.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { t: "Sustainability", d: "Energy-efficient design and responsible materials." },
                   { t: "Quality", d: "Careful design and enduring materials in every brick." },
                   { t: "Community", d: "Spaces shaped to encourage interaction and belonging." },
                   { t: "Transparency", d: "Clear processes and RERA-compliant practices." },
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 text-gold">
                         <CheckCircle2 size={18} />
                         <span className="font-display font-black text-xs uppercase tracking-widest text-navy">{item.t}</span>
                      </div>
                      <p className="text-xs text-navy/40 pl-7 leading-relaxed font-display font-medium">{item.d}</p>
                   </div>
                 ))}
              </div>
          </div>
          <div className="relative aspect-square grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
             <img 
               src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop" 
               className="w-full h-full object-cover rounded-none" 
               alt="Pramukh Standard"
             />
             <div className="absolute -bottom-8 -left-8 bg-white p-8 border border-neutral-100 shadow-xl hidden md:block">
                <div className="text-xs font-display font-black uppercase tracking-widest text-gold mb-2">Since 1998</div>
                <div className="text-4xl font-display font-black text-navy tracking-tighter">25+</div>
                <div className="text-[10px] font-display font-bold uppercase tracking-widest text-navy/40">Years of Trust</div>
             </div>
          </div>
        </div>
      </section>

      <StatsCounter />
      <Footer />

      <style jsx>{`
        .text-outline-navy {
          -webkit-text-stroke: 1px #0F172A;
        }
      `}</style>
    </div>
  );
}
