"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col mandala-bg">
      <main className="grow flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          {/* Poetic 404 Typography */}
          <div className="text-[180px] md:text-[240px] font-serif font-light text-stone/5 leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
            404
          </div>

          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.5em] text-gold mb-8 block">
            A Path Yet Unbuilt
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone mb-10 leading-tight">
            Lost in the <br />
            <span className="italic text-stone/40">Silence.</span>
          </h1>

          <p className="max-w-md mx-auto text-stone/60 font-sans font-light text-lg mb-14 leading-relaxed">
            Finding peace sometimes means losing your way. The sanctuary you
            seek is just a step back towards the beginning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/"
              className="serene-button flex items-center gap-4 bg-stone text-beige hover:bg-gold transition-all duration-700"
            >
              Return to Sanctuary <Home size={18} strokeWidth={1} />
            </Link>
            <Link
              href="/projects"
              className="group flex items-center gap-3 text-stone/60 hover:text-gold font-sans font-bold text-[11px] uppercase tracking-[0.3em] transition-all duration-500"
            >
              View Our Collections{" "}
              <ArrowRight
                size={16}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
