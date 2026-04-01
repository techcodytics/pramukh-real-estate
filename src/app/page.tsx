"use client";

import Ecosystem from "@/components/Ecosystem";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import StatsCounter from "@/components/StatsCounter";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Leaf, Shield, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: "vivanta-ahmedabad",
    name: "Vivanta",
    location: "Prahladnagar",
    city: "Ahmedabad",
    config: "3 BHK Apartments",
    status: "Ongoing" as const,
    rera: "PR/GJ/Ahmedabad/001",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    type: "Residential" as const,
  },
  {
    id: "elysium-ahmedabad",
    name: "Elysium",
    location: "Bodakdev",
    city: "Ahmedabad",
    config: "2 & 3 BHK Apartments",
    status: "New Launch" as const,
    rera: "PR/GJ/Ahmedabad/055",
    image:
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1200&auto=format&fit=crop",
    type: "Residential" as const,
  },
  {
    id: "commercial-hub-gandhinagar",
    name: "Iconic Tower",
    location: "Kudasan",
    city: "Gandhinagar",
    config: "Showrooms & Offices",
    status: "Ongoing" as const,
    rera: "PR/GJ/Gandhinagar/092",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    type: "Commercial" as const,
  },
  {
    id: "premium-plots-gandhinagar",
    name: "The Woods",
    location: "Sargasan",
    city: "Gandhinagar",
    config: "Premium Plots",
    status: "Completed" as const,
    rera: "PR/DNH/001",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    type: "Plotting" as const,
  },
];

const cities = ["All", "Ahmedabad", "Gandhinagar"];

export default function Home() {
  const [activeCity, setActiveCity] = useState("All");

  const filteredProjects =
    activeCity === "All"
      ? projects
      : projects.filter((p) => p.city === activeCity);

  return (
    <div className="bg-beige min-h-screen mandala-bg">
      <Hero />

      {/* Philosophy Section */}
      <section className="temple-spacing bg-white/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-6 block"
          >
            The Soul of Pramukh
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-stone mb-12"
          >
            Built on Values, <br />
            <span className="italic text-stone/60">Defined by Serenity.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20">
            {[
              {
                icon: <Shield size={32} strokeWidth={1} />,
                title: "Discipline",
                desc: "Consistency in quality and precision in delivery.",
              },
              {
                icon: <Heart size={32} strokeWidth={1} />,
                title: "Simplicity",
                desc: "Minimalist design that enhances natural living.",
              },
              {
                icon: <Sparkles size={32} strokeWidth={1} />,
                title: "Purity",
                desc: "Honesty in materials and transparency in conduct.",
              },
              {
                icon: <Leaf size={32} strokeWidth={1} />,
                title: "Peace",
                desc: "Spaces designed for mental and spiritual well-being.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 rounded-full bg-stone/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-stone mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-stone/40 font-sans leading-relaxed px-4">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Ecosystem />

      {/* Real Estate Section */}
      <section id="projects" className="temple-spacing bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-6 block">
                Sanctuaries of Grace
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-stone mb-8">
                Featured <br />
                <span className="italic text-stone/40">Masterpieces.</span>
              </h2>
            </div>

            {/* Serene Filter */}
            <div className="flex flex-wrap items-center gap-6 border-b border-stone/10 pb-4">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={cn(
                    "px-4 py-2 text-[11px] uppercase font-sans font-bold tracking-[0.2em] transition-all duration-500 relative",
                    activeCity === city
                      ? "text-gold"
                      : "text-stone/30 hover:text-stone",
                  )}
                >
                  {city}
                  {activeCity === city && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute -bottom-px left-0 right-0 h-[2px] bg-gold"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-24 flex justify-center">
            <Link href="/projects">
              <button className="flex items-center gap-6 group font-serif italic text-xl text-stone hover:text-gold transition-colors">
                Explore Our Full Collection{" "}
                <span className="w-16 h-px bg-stone/20 group-hover:w-24 group-hover:bg-gold transition-all duration-700" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-beige relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[600px] lg:h-auto overflow-hidden">
            <img
              src="/images/amenities_serene.png"
              className="w-full h-full object-cover"
              alt="Serene Amenities"
            />
            <div className="absolute inset-0 bg-stone/20" />
          </div>
          <div className="temple-spacing flex flex-col justify-center bg-stone text-beige">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-6 block">
              Life in Harmony
            </span>
            <h2 className="text-5xl md:text-7xl font-serif mb-12">
              Curated <br />
              <span className="italic opacity-40">Well-being.</span>
            </h2>
            <p className="text-lg font-sans font-light opacity-60 leading-relaxed mb-16 max-w-lg">
              Our amenities are designed to be sanctuaries of peace, where the
              body rests and the spirit finds clarity. Every detail is balanced
              for your tranquility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  t: "Sacred Spaces",
                  d: "Quiet zones dedicated to mindfulness and meditation.",
                },
                {
                  t: "Sustainable Flow",
                  d: "Natural lighting and energy-efficient systems.",
                },
                {
                  t: "Community Grace",
                  d: "Gathering places that foster genuine human connection.",
                },
                {
                  t: "Purity of Design",
                  d: "Clean architecture that minimizes visual noise.",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 text-gold/80">
                    <div className="w-8 h-px bg-gold/50" />
                    <span className="font-serif italic text-lg">{item.t}</span>
                  </div>
                  <p className="text-sm opacity-40 pl-12 leading-relaxed font-sans">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* Contact CTA */}
      <section className="temple-spacing bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-stone mb-10">
            Begin Your Journey <br />
            <span className="italic text-stone/40 text-3xl md:text-5xl">
              Towards a Serene Lifestyle.
            </span>
          </h2>
          <p className="text-stone/60 font-sans font-light text-lg mb-12">
            Connect with our sanctuary advisors to discover a home that reflects
            your values.
          </p>
          <button className="serene-button">Arrange a Consultation</button>
        </div>
      </section>
    </div>
  );
}
