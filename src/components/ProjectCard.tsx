"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  name: string;
  location: string;
  city: string;
  config: string;
  status: "Ongoing" | "Completed" | "New Launch";
  rera: string;
  image: string;
  type: "Residential" | "Commercial" | "Plotting";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  location,
  city,
  config,
  status,
  rera,
  image,
  type,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="minimal-card flex flex-col group h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        
        {/* Pramukh-Style Overlays */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-white px-3 py-1 rounded-sm text-navy font-display font-black text-[10px] uppercase tracking-widest shadow-sm">
                {status}
            </span>
            {type === "Commercial" && (
                <span className="bg-navy px-3 py-1 rounded-sm text-white font-display font-black text-[10px] uppercase tracking-widest shadow-sm">
                    {type}
                </span>
            )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 linear opacity-0 group-hover:opacity-100 bg-gradient-to-t from-navy to-transparent">
             <div className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-white/60 mb-2">
               RERA: {rera}
             </div>
             <Link 
               href={`/projects/${id}`} 
               className="inline-flex items-center gap-2 font-display font-black text-xs uppercase tracking-widest text-gold"
             >
               Explore Details <ArrowUpRight size={14} />
             </Link>
        </div>
      </div>

      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-navy group-hover:text-gold transition-colors duration-300">
               {name}
             </h3>
             <Building2 size={18} className="text-neutral-200" />
          </div>
          <div className="space-y-4 border-l border-neutral-100 pl-4 py-2">
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-gold" />
              <div className="flex flex-col">
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-neutral-400">Location</span>
                <span className="text-xs font-display font-bold text-navy">{location}, {city}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-neutral-400">Configuration</span>
                <span className="text-xs font-display font-bold text-navy">{config}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
