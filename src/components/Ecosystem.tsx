"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Cpu,
  Globe,
  LucideIcon,
  ReceiptText,
  School,
  Sofa,
} from "lucide-react";

interface EcosystemItem {
  title: string;
  description: string;
  Icon: LucideIcon;
  link: string;
  bg: string;
}

const ecosystems: EcosystemItem[] = [
  {
    title: "Sanctuaries",
    description:
      "Environments shaped for living, from luxury high-rises to sprawling estates.",
    Icon: Building2,
    link: "/real-estate",
    bg: "bg-white",
  },
  {
    title: "Interiors",
    description:
      "Spaces perfected through thoughtful design and curated furniture.",
    Icon: Sofa,
    link: "#",
    bg: "bg-white",
  },
  {
    title: "Legacy",
    description:
      "Investing with lasting discipline to create wealth for generations.",
    Icon: ReceiptText,
    link: "#",
    bg: "bg-white",
  },
  {
    title: "Academy",
    description:
      "Shaping leaders in real estate through world-class education.",
    Icon: School,
    link: "/ecosystem",
    bg: "bg-white",
  },
];

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="bg-white border-y border-stone/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 group">
        {ecosystems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 1 }}
            className={cn(
              "relative p-14 lg:p-20 h-[450px] flex flex-col justify-between border-r border-stone/5 last:border-r-0 transition-all duration-1000 hover:bg-stone group/item hover:z-10",
              item.bg,
            )}
          >
            <div>
              <div className="w-16 h-16 mb-10 text-gold flex items-center justify-center group-hover/item:text-gold/60 transition-colors duration-700">
                <item.Icon size={40} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-serif font-medium text-stone mb-6 transition-colors duration-700 group-hover/item:text-beige">
                {item.title}
              </h3>
              <p className="text-sm font-sans font-light text-stone/40 leading-relaxed border-l border-gold/30 pl-6 transition-colors duration-700 group-hover/item:text-beige/60">
                {item.description}
              </p>
            </div>

            <a
              href={item.link}
              className="inline-flex items-center gap-4 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-stone group-hover/item:text-gold transition-colors duration-700 mt-10"
            >
              Learn More{" "}
              <ArrowRight
                size={14}
                className="group-hover/item:translate-x-2 transition-transform duration-700"
              />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="bg-stone p-10 flex flex-col md:flex-row items-center justify-between gap-8 px-14 lg:px-24">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
            <Cpu size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-white/30 uppercase tracking-[0.4em] font-bold mb-1">
              PropTech Ecosystem
            </span>
            <span className="text-lg text-beige/80 font-serif italic">
              Simplifying Real Estate through Intelligence.
            </span>
          </div>
        </div>
        <button className="flex items-center gap-3 text-[11px] text-gold uppercase tracking-[0.2em] font-bold group bg-white/5 py-3 px-8 hover:bg-white/10 transition-colors">
          Explore RealEstateOS{" "}
          <Globe
            size={16}
            strokeWidth={1}
            className="group-hover:rotate-45 transition-transform duration-700"
          />
        </button>
      </div>
    </section>
  );
};

export default Ecosystem;
