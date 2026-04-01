"use client";

import React from "react";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin, Square } from "lucide-react";

const projectItems = [
  {
    id: "vivanta-ahmedabad",
    title: "Vivanta",
    location: "Prahladnagar, Ahmedabad",
    type: "Residential Sanctuary",
    size: "3 BHK Luxury Apartments",
    image: "/images/hero_sunrise.png",
  },
  {
    id: "elysium-ahmedabad",
    title: "Elysium",
    location: "Bodakdev, Ahmedabad",
    type: "Modern Minimalism",
    size: "2 & 3 BHK Serene Living",
    image: "/images/hero_villa.png",
  },
  {
    id: "premium-plots-gandhinagar",
    title: "The Woods",
    location: "Sargasan, Gandhinagar",
    type: "Plotting Legacy",
    size: "Residential Plots",
    image: "/images/hero_interior.png",
  },
  {
    id: "commercial-hub-gandhinagar",
    title: "Iconic Tower",
    location: "Kudasan, Gandhinagar",
    type: "Commercial Excellence",
    size: "Premium Workspaces",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen mandala-bg">
      <PageHeader 
        title="Sanctuary Collection" 
        subtitle="A curated portfolio of masterworks that embody our vision of purity, peace, and timeless elegance."
        breadcrumb="Projects"
      />

      <section className="temple-spacing px-6 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {projectItems.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="aspect-[16/10] bg-stone overflow-hidden relative mb-10">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-50"
                   />
                   <div className="absolute inset-0 bg-stone/20 group-hover:bg-transparent transition-all duration-700" />
                   <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-4 group-hover:translate-x-0">
                      <div className="w-16 h-16 rounded-full bg-gold/90 backdrop-blur-md flex items-center justify-center text-stone">
                         <ArrowUpRight size={28} strokeWidth={1} />
                      </div>
                   </div>
                </div>
                <div className="flex justify-between items-end border-b border-stone/10 pb-10">
                   <div>
                      <div className="flex items-center gap-3 text-gold font-sans font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                         <MapPin size={12} strokeWidth={2} /> {project.location}
                      </div>
                      <h3 className="text-4xl lg:text-5xl font-serif text-stone mb-4 group-hover:text-gold transition-colors duration-500">{project.title}</h3>
                      <div className="flex items-center gap-6 text-stone/40 font-sans text-sm font-light">
                         <span className="flex items-center gap-2">{project.type}</span>
                         <span className="w-1 h-1 rounded-full bg-gold/30" />
                         <span className="flex items-center gap-2">{project.size}</span>
                      </div>
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Call-to-Action */}
      <section className="bg-stone py-32 px-6 lg:px-24 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-128 h-128 bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
         <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-10">Your Sanctuary <br /> <span className="italic text-white/40">is Waiting.</span></h2>
            <Link href="/inquiry" className="serene-button inline-flex items-center gap-4 bg-gold hover:bg-white hover:text-stone">
               Start Your Journey <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
         </div>
      </section>

    </div>
  );
}
