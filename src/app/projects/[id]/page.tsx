"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Building2, CheckCircle2, ChevronLeft, Download, Phone, Calendar, Ruler, Award, Sparkles } from "lucide-react";
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
    desc: "Experience ultra-luxury living at Vivanta, Vesu's most prestigious residential address. Designed for those who seek 'A Class Of Its Own' lifestyle, where every detail is a testament to refined grace.",
    price: "On Request",
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
    desc: "Elysium offers a sanctuary of peace in the heart of Vapi. A harmonious blend of modern architecture and natural serenity, designed for a life of pure comfort.",
    price: "On Request",
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
    desc: "Redefining the skyline of Surat, Iconic Tower is more than just a commercial space—it is a monument to success and professional discipline.",
    price: "On Request",
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
    desc: "The Woods is a tribute to nature. A collection of premium plots where you can build your own sanctuary amidst the peaceful whispers of the forest.",
    price: "On Request",
  },
];

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  
  // Find project or use fallback
  const project = projects.find(p => p.id === id) || projects[0];

  return (
    <div className="min-h-screen bg-white mandala-bg">
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.2, 0, 0.2, 1] }}
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover grayscale brightness-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-stone/80 via-stone/20 to-transparent" />
        
        <div className="absolute top-48 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-24">
            <button 
              onClick={() => router.back()}
              className="flex items-center gap-3 text-gold/80 font-sans font-bold text-[10px] uppercase tracking-[0.4em] mb-10 hover:text-white transition-all group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Sanctuaries
            </button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.2, 0, 0.2, 1] }}
            >
              <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 tracking-tight leading-[0.9]">
                {project.name}<span className="italic text-gold italic">.</span>
              </h1>
              <div className="flex flex-wrap items-center gap-10 text-beige/60">
                <span className="flex items-center gap-3 font-sans text-sm tracking-wide bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10"><MapPin size={16} className="text-gold" /> {project.location}, {project.city}</span>
                <span className="flex items-center gap-3 font-sans text-sm tracking-wide bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10"><Building2 size={16} className="text-gold" /> {project.type}</span>
                <span className="flex items-center gap-3 bg-gold px-4 py-2 text-stone font-sans font-bold text-[10px] uppercase tracking-[0.3em]"><Sparkles size={14} /> {project.status}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="temple-spacing">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="mb-16">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-6 block">The Narrative</span>
              <h2 className="text-4xl font-serif text-stone mb-10">Architectural Philosophy</h2>
              <p className="text-stone/60 font-sans font-light text-xl leading-relaxed italic border-l border-gold/20 pl-10 mb-16">
                {project.desc} At Pramukh Group, we believe that {project.name} is not just a structure, but a sanctuary of values. Every line and curve is a testament to our discipline and commitment to peace.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-stone/5">
                {[
                  { icon: <Calendar size={24} strokeWidth={1} />, label: "Timeline", value: project.status },
                  { icon: <Ruler size={24} strokeWidth={1} />, label: "Configuration", value: project.config },
                  { icon: <Award size={24} strokeWidth={1} />, label: "RERA Integrity", value: project.rera },
                  { icon: <MapPin size={24} strokeWidth={1} />, label: "Locale", value: project.location },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="text-gold/60">{item.icon}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone/30">{item.label}</div>
                    <div className="text-stone font-serif text-xl italic">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-6 block">Features</span>
              <h2 className="text-4xl font-serif text-stone mb-12">Pure Living Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {["Elite Clubhouse", "Sacred Garden", "Serene Swimming Pool", "Mindful Gymnasium", "24/7 Security", "Refined Jogging Track", "Power Harmony", "Children's Sanctuary"].map((a, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 border border-stone/5 hover:border-gold/20 transition-all duration-700 bg-stone/[0.01]">
                    <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold">
                      <CheckCircle2 size={18} strokeWidth={1} />
                    </div>
                    <span className="text-lg font-serif text-stone italic">{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Inquiry Form */}
          <div className="relative">
            <div className="sticky top-40 bg-stone p-12 lg:p-16 border border-gold/10 shadow-3xl text-beige relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px]" />
              <h3 className="text-3xl font-serif mb-4 relative z-10">Sanctuary <br /><span className="italic text-gold opacity-60">Inquiry.</span></h3>
              <p className="text-[10px] uppercase font-sans font-bold tracking-[0.4em] text-white/20 mb-10 relative z-10 border-b border-white/5 pb-6">Request Project Portfolio</p>
              
              <form className="space-y-8 relative z-10">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 px-2">Full Name</label>
                  <input className="w-full bg-white/5 border-b border-white/10 p-4 text-sm font-sans font-light text-beige placeholder:text-beige/10 outline-none focus:border-gold transition-all duration-700" placeholder="e.g. John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 px-2">Mobile Number</label>
                  <input className="w-full bg-white/5 border-b border-white/10 p-4 text-sm font-sans font-light text-beige placeholder:text-beige/10 outline-none focus:border-gold transition-all duration-700" placeholder="+91 00000 00000" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 px-2">Email Address</label>
                  <input className="w-full bg-white/5 border-b border-white/10 p-4 text-sm font-sans font-light text-beige placeholder:text-beige/10 outline-none focus:border-gold transition-all duration-700" placeholder="johndoe@email.com" />
                </div>
                <button className="w-full serene-button bg-gold! hover:bg-white! hover:text-stone! text-stone font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-4 transition-all duration-1000 mt-12 py-5">
                   Enquire Now <Sparkles size={16} />
                </button>
              </form>
              
              <div className="mt-12 pt-10 border-t border-white/5 flex flex-col gap-6 relative z-10">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">Personal Consultation</p>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-gold border border-white/10 group-hover:bg-gold group-hover:text-stone transition-all duration-700">
                    <Phone size={22} strokeWidth={1} />
                  </div>
                  <div>
                    <div className="font-serif italic text-2xl text-white tracking-tight">+91 97261 11333</div>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/20 mt-1">Available 24/7</div>
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
