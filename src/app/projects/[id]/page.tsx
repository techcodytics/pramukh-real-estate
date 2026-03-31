"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Building2, CheckCircle2, ChevronLeft, Download, Phone, Calendar, Ruler, Award } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusing project data
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
    desc: "Experience ultra-luxury living at Vivanta, Vesu's most prestigious residential address. Designed for those who seek 'A Class Of Its Own' lifestyle.",
    price: "On Request",
  },
  // ... other projects can be added here or in a central data file
];

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  // Find project or use fallback
  const project = projects.find(p => p.id === id) || projects[0];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent" />
        <div className="absolute bottom-12 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6">
            <button 
              onClick={() => router.back()}
              className="flex items-center text-gold font-bold text-xs uppercase tracking-widest mb-6 hover:gap-4 transition-all"
            >
              <ChevronLeft size={16} /> Back to Projects
            </button>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white mb-4"
            >
              {project.name}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2"><MapPin size={18} className="text-gold" /> {project.location}, {project.city}</span>
              <span className="flex items-center gap-2"><Building2 size={18} className="text-gold" /> {project.type}</span>
              <span className="bg-gold px-3 py-1 rounded-sm text-navy font-bold text-[10px] uppercase tracking-widest">{project.status}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-navy mb-6">Overview</h2>
            <p className="text-neutral-500 leading-relaxed mb-12 text-lg">
              {project.desc} Pramukh Group brings you an architectural masterpiece that combines modern aesthetics with traditional values of trust and durability. Every corner of {project.name} is meticulously crafted to ensure a superior living experience.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: <Calendar />, label: "Status", value: project.status },
                { icon: <Ruler />, label: "Config", value: project.config },
                { icon: <Award />, label: "RERA", value: project.rera },
                { icon: <Building2 />, label: "Location", value: project.location },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="text-gold">{item.icon}</div>
                  <div className="text-xs uppercase tracking-widest font-bold text-neutral-400">{item.label}</div>
                  <div className="text-navy font-serif font-bold text-lg">{item.value}</div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-serif font-bold text-navy mb-8">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Clubhouse", "Swimming Pool", "Gymnasium", "Landscape Garden", "24/7 Security", "Jogging Track", "Power Backup", "Children's Play Area"].map((a, i) => (
                <div key={i} className="bg-neutral-50 p-4 rounded-lg flex items-center gap-3 border border-neutral-100">
                  <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                  <span className="text-sm font-semibold text-navy">{a}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Form */}
          <div className="relative">
            <div className="sticky top-32 bg-navy p-8 rounded-lg text-white shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-2">Interested?</h3>
              <p className="text-gold font-bold text-sm mb-6 uppercase tracking-widest">Get Project Brochure</p>
              
              <form className="space-y-4">
                <input className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-sm focus:border-gold outline-none" placeholder="Full Name" />
                <input className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-sm focus:border-gold outline-none" placeholder="Mobile Number" />
                <input className="w-full bg-white/5 border border-white/10 rounded-sm p-4 text-sm focus:border-gold outline-none" placeholder="Email Address" />
                <button className="w-full gold-gradient text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                  <Download size={18} /> Download Brochure
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-4">
                <p className="text-[10px] uppercase tracking-widest text-white/60">Or Talk To Our Executive</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">+91 97261 11333</div>
                    <div className="text-xs text-white/60 font-bold uppercase tracking-widest tracking-tighter">Support 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
