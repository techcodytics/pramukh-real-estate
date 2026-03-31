"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { Search, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const allProjects = [
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
    id: "iconic-tower-surat",
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
    id: "the-woods-silvassa",
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

const cities = ["All Cities", "Surat", "Vapi", "Silvassa"];
const types = ["All Types", "Residential", "Commercial", "Plotting"];
const statuses = ["All Status", "Ongoing", "Completed", "New Launch"];

export default function RealEstatePage() {
  const [activeCity, setActiveCity] = useState("All Cities");
  const [activeType, setActiveType] = useState("All Types");
  const [activeStatus, setActiveStatus] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((p) => {
    const matchesCity = activeCity === "All Cities" || p.city === activeCity;
    const matchesType = activeType === "All Types" || p.type === activeType;
    const matchesStatus = activeStatus === "All Status" || p.status === activeStatus;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesType && matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHeader 
        title="Real Estate" 
        subtitle="A curated portfolio of masterworks across residential, commercial, and plotted developments."
        breadcrumb="Portfolio"
      />

      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {/* Advanced Filter Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 bg-brand-gray p-4 lg:p-2 border border-neutral-100">
             <div className="relative w-full lg:w-1/3">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search projects or locations..."
                  className="w-full bg-transparent py-4 pl-16 pr-6 font-display font-medium text-sm outline-none placeholder:text-neutral-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
             </div>

             <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto justify-end">
                <div className="flex items-center gap-2 px-6 py-4 border-l border-neutral-100">
                   <Filter size={16} className="text-gold" />
                   <select 
                     className="bg-transparent font-display font-black text-[10px] uppercase tracking-widest outline-none cursor-pointer"
                     value={activeCity}
                     onChange={(e) => setActiveCity(e.target.value)}
                   >
                     {cities.map(c => <option key={c}>{c}</option>)}
                   </select>
                </div>
                <div className="flex items-center gap-2 px-6 py-4 border-l border-neutral-100">
                   <SlidersHorizontal size={16} className="text-gold" />
                   <select 
                     className="bg-transparent font-display font-black text-[10px] uppercase tracking-widest outline-none cursor-pointer"
                     value={activeType}
                     onChange={(e) => setActiveType(e.target.value)}
                   >
                     {types.map(t => <option key={t}>{t}</option>)}
                   </select>
                </div>
                <div className="flex items-center gap-2 px-6 py-4 border-l border-neutral-100">
                   <ChevronDown size={16} className="text-gold" />
                   <select 
                     className="bg-transparent font-display font-black text-[10px] uppercase tracking-widest outline-none cursor-pointer"
                     value={activeStatus}
                     onChange={(e) => setActiveStatus(e.target.value)}
                   >
                     {statuses.map(s => <option key={s}>{s}</option>)}
                   </select>
                </div>
             </div>
          </div>

          {/* Results Count */}
          <div className="mb-12 flex items-center justify-between">
             <div className="text-[10px] font-display font-black uppercase tracking-[0.2em] text-navy/40">
                Showing {filteredProjects.length} Masterpieces
             </div>
             {filteredProjects.length === 0 && (
                <button 
                  onClick={() => {setActiveCity("All Cities"); setActiveType("All Types"); setActiveStatus("All Status"); setSearchQuery("");}}
                  className="text-[10px] font-display font-black uppercase tracking-widest text-gold hover:underline"
                >
                  Clear All Filters
                </button>
             )}
          </div>

          {/* Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="py-32 flex flex-col items-center justify-center text-center">
               <div className="w-20 h-20 bg-brand-gray rounded-full flex items-center justify-center mb-8">
                  <Search size={32} className="text-neutral-300" />
               </div>
               <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-navy mb-4">No results found</h3>
               <p className="text-navy/40 font-display font-medium max-w-xs">We couldn't find any projects matching your current filters. Try broadening your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
