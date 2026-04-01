"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="airy-card flex flex-col group h-full bg-white overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0.2, 1] }}
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-1000"
        />

        {/* Serene Status Badge */}
        <div className="absolute top-6 left-6">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 text-stone font-sans font-semibold text-[10px] uppercase tracking-[0.2em] shadow-sm border border-stone/5">
            {status}
          </span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-stone/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
          <Link
            href={`/projects/${id}`}
            className="inline-flex items-center gap-3 font-serif italic text-white text-lg tracking-wide hover:text-gold transition-colors"
          >
            Discover More <ArrowUpRight size={18} strokeWidth={1} />
          </Link>
        </div>
      </div>

      <div className="p-10 flex flex-col justify-between flex-grow">
        <div>
          <div className="mb-6">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-gold/80 mb-2 block">
              {type}
            </span>
            <h3 className="text-3xl font-serif font-medium text-stone group-hover:text-gold transition-colors duration-500">
              {name}
            </h3>
          </div>

          <div className="space-y-6 pt-4 border-t border-stone/5">
            <div className="flex items-start gap-4">
              <MapPin
                size={16}
                strokeWidth={1.5}
                className="text-gold shrink-0 mt-1"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone/40 mb-1">
                  Sanctuary Location
                </span>
                <span className="text-sm font-sans font-medium text-stone/70">
                  {location}, {city}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Building2
                size={16}
                strokeWidth={1.5}
                className="text-gold shrink-0 mt-1"
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone/40 mb-1">
                  Configuration
                </span>
                <span className="text-sm font-sans font-medium text-stone/70">
                  {config}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
