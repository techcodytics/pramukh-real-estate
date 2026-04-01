"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  MapPin,
  Phone,
  Ruler,
  Sparkles,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

// Updated project data for Ahmedabad and Gandhinagar
const projects = [
  {
    id: "vivanta-ahmedabad",
    name: "Vivanta",
    location: "Prahladnagar",
    city: "Ahmedabad",
    config: "3 BHK Apartments",
    status: "Ongoing" as const,
    rera: "PR/GJ/Ahmedabad/001",
    image: "/images/hero_sunrise.png",
    type: "Residential" as const,
    desc: "Experience ultra-luxury living at Vivanta, Ahmedabad's most prestigious residential address. Designed for those who seek 'A Class Of Its Own' lifestyle, where every detail is a testament to refined grace.",
    price: "On Request",
  },
  {
    id: "elysium-ahmedabad",
    name: "Elysium",
    location: "Bodakdev",
    city: "Ahmedabad",
    config: "2 & 3 BHK Apartments",
    status: "New Launch" as const,
    rera: "PR/GJ/Ahmedabad/055",
    image: "/images/hero_villa.png",
    type: "Residential" as const,
    desc: "Elysium offers a sanctuary of peace in the heart of Ahmedabad. A harmonious blend of modern architecture and natural serenity, designed for a life of pure comfort.",
    price: "On Request",
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
    desc: "Redefining the Gandhinagar skyline, Iconic Tower is more than just a commercial space—it is a monument to success and professional discipline.",
    price: "On Request",
  },
  {
    id: "premium-plots-gandhinagar",
    name: "The Woods",
    location: "Sargasan",
    city: "Gandhinagar",
    config: "Premium Plots",
    status: "Completed" as const,
    rera: "PR/DNH/001",
    image: "/images/hero_interior.png",
    type: "Plotting" as const,
    desc: "The Woods is a tribute to nature in Gandhinagar. A collection of premium plots where you can build your own sanctuary amidst the peaceful whispers of the earth.",
    price: "On Request",
  },
];

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  // Find project or use fallback
  const project = projects.find((p) => p.id === id) || projects[0];

  return (
    <div className="min-h-screen bg-white mandala-bg">
      {/* Banner */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.2, 0, 0.2, 1] }}
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover brightness-90 grayscale-[0.3]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone/90 via-stone/30 to-transparent" />

        <div className="absolute bottom-24 left-0 right-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-24">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-3 text-gold/80 font-sans font-bold text-[10px] uppercase tracking-[0.4em] mb-12 hover:text-white transition-all group"
            >
              <ChevronLeft
                size={16}
                className="group-hover:-translate-x-2 transition-all duration-500"
              />{" "}
              Back to Collection
            </button>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0, 0.2, 1] }}
            >
              <span className="text-gold font-sans font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">
                Refined Living
              </span>
              <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 tracking-tight leading-[0.85]">
                {project.name}
                <span className="text-gold">.</span>
              </h1>
              <div className="flex flex-wrap items-center gap-8 text-beige/80">
                <span className="flex items-center gap-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] bg-white/5 backdrop-blur-xl px-6 py-3 border border-white/10">
                  <MapPin size={14} className="text-gold" /> {project.location},{" "}
                  {project.city}
                </span>
                <span className="flex items-center gap-3 font-sans text-[11px] font-bold uppercase tracking-[0.2em] bg-white/5 backdrop-blur-xl px-6 py-3 border border-white/10">
                  <Building2 size={14} className="text-gold" /> {project.type}
                </span>
                <div className="h-10 w-px bg-white/20 mx-2 hidden md:block" />
                <span className="flex items-center gap-3 text-white font-sans font-bold text-[10px] uppercase tracking-[0.3em]">
                  <Sparkles size={14} className="text-gold animate-pulse" />{" "}
                  {project.status}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="temple-spacing">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Main Info */}
          <div className="lg:col-span-7">
            <div className="mb-16">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">
                The Narrative
              </span>
              <h2 className="text-5xl font-serif text-stone mb-8 leading-tight">
                Architecture of <br />
                <span className="italic text-stone/40">Pure Grace.</span>
              </h2>
              <p className="text-stone/60 font-sans font-light text-xl leading-relaxed italic border-l-2 border-gold/30 pl-8 mb-16">
                {project.desc} At Pramukh Group, we believe that {project.name}{" "}
                is not just a structure, but a sanctuary of values. Every line
                and curve is a testament to our discipline and commitment to
                peace.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 py-12 border-y border-stone/10">
                {[
                  {
                    icon: <Calendar size={20} strokeWidth={1.5} />,
                    label: "Timeline",
                    value: project.status,
                  },
                  {
                    icon: <Ruler size={20} strokeWidth={1.5} />,
                    label: "Living Space",
                    value: project.config,
                  },
                  {
                    icon: <Award size={20} strokeWidth={1.5} />,
                    label: "RERA ID",
                    value: project.rera,
                  },
                  {
                    icon: <MapPin size={20} strokeWidth={1.5} />,
                    label: "Locale",
                    value: project.location,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-6">
                    <div className="text-gold">{item.icon}</div>
                    <div>
                      <div className="text-[9px] uppercase tracking-[0.4em] font-bold text-stone/30 mb-2">
                        {item.label}
                      </div>
                      <div className="text-stone font-serif text-lg italic leading-tight">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-14">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-10 block">
                Amenities
              </span>
              <h2 className="text-4xl font-serif text-stone mb-14 underline-offset-8 decoration-gold/20 decoration-1 underline">
                Curated Well-being
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Elite Clubhouse",
                  "Sacred Garden",
                  "Serene Swimming Pool",
                  "Mindful Gymnasium",
                  "24/7 Security",
                  "Refined Jogging Track",
                  "Power Harmony",
                  "Children's Sanctuary",
                ].map((a, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-8 p-8 border border-stone/5 hover:border-gold/30 transition-all duration-700 bg-linear-to-br from-white to-stone/[0.02] group shadow-xs hover:shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-stone/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-stone transition-all duration-700">
                      <CheckCircle2 size={20} strokeWidth={1} />
                    </div>
                    <span className="text-xl font-serif text-stone italic">
                      {a}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Inquiry Form - PROPER DESIGN */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-26 bg-stone p-8 lg:p-8 border-t-4 border-gold shadow-[0_40px_100px_-20px_rgba(45,42,38,0.3)] text-beige overflow-hidden mandala-bg-dark">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10">
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.5em] text-gold mb-6 block">
                  Personal Sanctuary
                </span>
                <h3 className="text-4xl font-serif mb-6 leading-tight">
                  Request <br />
                  <span className="italic text-white opacity-40">
                    Portfolio.
                  </span>
                </h3>
                <p className="text-sm font-sans font-light text-beige/40 mb-12 leading-relaxed">
                  Allow our advisors to guide you through the masterwork of{" "}
                  {project.name}.
                </p>

                <form className="space-y-10">
                  <div className="space-y-4 group">
                    <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-beige/20 px-2 font-sans group-focus-within:text-gold transition-colors">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-white/[0.03] border-b border-white/10 p-5 text-base font-sans font-light text-beige placeholder:text-beige/10 outline-none focus:border-gold focus:bg-white/[0.06] transition-all duration-700"
                      placeholder="e.g. Johnathan Doe"
                    />
                  </div>
                  <div className="space-y-4 group">
                    <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-beige/20 px-2 font-sans group-focus-within:text-gold transition-colors">
                      Mobile Number
                    </label>
                    <input
                      className="w-full bg-white/[0.03] border-b border-white/10 p-5 text-base font-sans font-light text-beige placeholder:text-beige/10 outline-none focus:border-gold focus:bg-white/[0.06] transition-all duration-700"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                  <div className="space-y-4 group">
                    <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-beige/20 px-2 font-sans group-focus-within:text-gold transition-colors">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-white/[0.03] border-b border-white/10 p-5 text-base font-sans font-light text-beige placeholder:text-beige/10 outline-none focus:border-gold focus:bg-white/[0.06] transition-all duration-700"
                      placeholder="johndoe@sanctuary.com"
                    />
                  </div>

                  <div className="pt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-6 bg-gold text-stone font-sans font-bold uppercase tracking-[0.4em] text-[11px] flex items-center justify-center gap-4 transition-all duration-700 shadow-[0_15px_30px_-5px_rgba(197,165,114,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(197,165,114,0.5)] hover:bg-white"
                    >
                      Enquire Now <Sparkles size={16} />
                    </motion.button>
                    <p className="text-[9px] text-center text-beige/20 mt-8 font-sans font-medium uppercase tracking-[0.2em] leading-relaxed">
                      By inquiring, you agree to our <br />
                      <a
                        href="/privacy-policy"
                        className="text-gold/60 underline underline-offset-4"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="/terms-and-conditions"
                        className="text-gold/60 underline underline-offset-4"
                      >
                        Terms
                      </a>
                      .
                    </p>
                  </div>
                </form>

                <div className="mt-16 pt-12 border-t border-white/5 flex flex-col gap-8">
                  <div className="flex items-center gap-8 group cursor-pointer">
                    <div className="w-16 h-16 bg-white/[0.03] rounded-full flex items-center justify-center text-gold border border-white/5 group-hover:bg-gold group-hover:text-stone transition-all duration-1000 shadow-inner">
                      <Phone size={24} strokeWidth={1} />
                    </div>
                    <div>
                      <div className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] text-beige/20 mb-1">
                        Direct Advisor
                      </div>
                      <div className="font-serif italic text-3xl text-white tracking-tight group-hover:text-gold transition-colors">
                        +91 97261 11333
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
