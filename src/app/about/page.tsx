"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Award, Heart, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Purity",
    description:
      "Creating spaces that breathe peace and promote a wholesome lifestyle.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency in every transaction and excellence in every brick laid.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "A legacy of masterworks that transcend generations and expectations.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building more than structures; we build sanctuaries for human connection.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen mandala-bg">
      <PageHeader
        title="Our Philosophy"
        subtitle="Crafting masterworks that transcend generations. A legacy of peace, excellence, and spiritual serenity."
        breadcrumb="About Us"
      />

      {/* Legacy Section */}
      <section className="temple-spacing px-6 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">
              A Legacy of Excellence
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-stone mb-10 leading-[1.1]">
              Architecture of <br />
              <span className="italic text-stone/40">Serenity.</span>
            </h2>
            <div className="space-y-8 text-stone/70 font-sans font-light leading-relaxed text-lg max-w-xl">
              <p>
                Pramukh Group was founded on the principle that architecture
                should be more than just stone and mortar. It should be a
                sanctuary for the soul, a place where peace and modern luxury
                coexist in perfect harmony.
              </p>
              <p>
                With over three decades of excellence, we have transformed the
                landscapes of Surat, Vapi, and beyond, delivering homes that
                reflect our commitment to purity, integrity, and timeless
                values.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-stone overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Architectural Legacy"
                className="w-full h-full object-cover brightness-75"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-gold p-12 hidden md:block">
              <div className="text-stone font-serif text-5xl mb-2">30+</div>
              <div className="text-stone/60 text-[10px] uppercase font-bold tracking-[0.3em] font-sans">
                Years of Legacy
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="temple-spacing bg-stone text-beige px-6 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">
              Our Core Pillars
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-medium text-white mb-6">
              Values that <span className="italic text-white/40">Inspire.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-10 border border-white/5 bg-white/5 hover:bg-gold transition-all duration-700 group"
              >
                <item.icon
                  className="text-gold group-hover:text-stone mb-8"
                  size={32}
                  strokeWidth={1}
                />
                <h3 className="text-2xl font-serif text-white group-hover:text-stone mb-4">
                  {item.title}
                </h3>
                <p className="text-white/40 group-hover:text-stone/70 font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
