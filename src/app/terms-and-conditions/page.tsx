"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white min-h-screen mandala-bg">
      <Navbar />
      <PageHeader 
        title="Terms & Conditions" 
        subtitle="The guiding principles of our digital relationship, built on the foundations of trust, respect, and mutual understanding."
        breadcrumb="Legal"
      />

      <section className="temple-spacing px-6 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-16">
          <div>
            <h3 className="text-3xl font-serif text-stone mb-8">Respect & <span className="italic text-gold">Honesty.</span></h3>
            <p className="text-stone/70 font-sans font-light leading-relaxed mb-6">
              Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Pramukh Group&apos;s relationship with you in relation to this website.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">Use of Content</h4>
            <ul className="list-disc list-inside space-y-4 text-stone/70 font-sans font-light text-lg pl-6">
              <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
              <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information.</li>
              <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">Project Visualization</h4>
            <p className="text-stone/70 font-sans font-light leading-relaxed">
              All images and artistic renderings of properties are for illustrative purposes. Actual appearance, including layout and finishes, are subject to change as our projects evolve. All projects are RERA registered.
            </p>
          </div>

          <div className="pt-10 border-t border-stone/10 italic text-stone/40 text-sm">
            Last Updated: April 2026. This agreement reflects our commitment to clarity and integrity.
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
