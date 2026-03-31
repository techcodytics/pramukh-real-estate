"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <PageHeader 
        title="Contact" 
        subtitle="Connect with our experts to find your next masterpiece. We are here to assist you."
        breadcrumb="Connect"
      />

      <section className="py-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Contact Details */}
          <div>
             <span className="text-[10px] font-display font-black uppercase tracking-[0.4em] text-gold mb-4 inline-block">Connect with us</span>
             <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-navy mb-12">
                Let's Start a <br />
                <span className="text-transparent text-outline-navy">Conversation.</span>
             </h2>

             <div className="space-y-12">
                <div className="flex items-start gap-6">
                   <div className="p-4 bg-brand-gray border border-neutral-100 text-gold">
                      <Phone size={28} strokeWidth={1} />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase font-black tracking-widest text-navy/30 mb-2">Call our Headquarters</div>
                      <div className="text-2xl font-display font-black text-navy">+91 97261 11333</div>
                      <div className="text-xs text-navy/40 font-display font-medium mt-1">Available 24/7 for your support.</div>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="p-4 bg-brand-gray border border-neutral-100 text-gold">
                      <Mail size={28} strokeWidth={1} />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase font-black tracking-widest text-navy/30 mb-2">General Inquiries</div>
                      <div className="text-2xl font-display font-black text-navy uppercase tracking-tighter">care@pramukh.com</div>
                      <div className="text-xs text-navy/40 font-display font-medium mt-1">Response time within 24 hours.</div>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="p-4 bg-brand-gray border border-neutral-100 text-gold">
                      <MapPin size={28} strokeWidth={1} />
                   </div>
                   <div>
                      <div className="text-[10px] uppercase font-black tracking-widest text-navy/30 mb-2">Our Experience Center</div>
                      <div className="text-2xl font-display font-black text-navy uppercase tracking-tighter">Vesu, Surat, Gujarat</div>
                      <div className="text-xs text-navy/40 font-display font-medium mt-1 max-w-xs uppercase leading-relaxed">
                         5th Floor, Pramukh Orbit, Near LP Savani School, Vesu, Surat - 395007.
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-16 pt-16 border-t border-neutral-100 grid grid-cols-2 gap-8">
                <div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-navy/30 mb-4">Business Hours</div>
                   <div className="flex items-center gap-3 text-navy font-display font-bold text-sm">
                      <Clock size={16} className="text-gold" /> Mon - Sat: 9:00 AM - 7:00 PM
                   </div>
                </div>
                <div>
                   <div className="text-[10px] uppercase font-black tracking-widest text-navy/30 mb-4">Chat Support</div>
                   <div className="flex items-center gap-3 text-navy font-display font-bold text-sm">
                      <MessageCircle size={16} className="text-gold" /> WhatsApp Available
                   </div>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-brand-gray p-8 lg:p-16 border border-neutral-100 shadow-xl">
             <h3 className="text-2xl font-display font-black uppercase tracking-tighter text-navy mb-8">Service Inquiry Form</h3>
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-navy/40 px-2">First Name</label>
                      <input className="bg-white border border-neutral-100 px-6 py-4 font-display font-medium text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. John" />
                   </div>
                   <div className="flex flex-col gap-2">
                      <label className="text-[10px] uppercase font-black tracking-widest text-navy/40 px-2">Last Name</label>
                      <input className="bg-white border border-neutral-100 px-6 py-4 font-display font-medium text-sm outline-none focus:border-gold transition-colors" placeholder="e.g. Doe" />
                   </div>
                </div>
                
                <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase font-black tracking-widest text-navy/40 px-2">Email Address</label>
                   <input className="bg-white border border-neutral-100 px-6 py-4 font-display font-medium text-sm outline-none focus:border-gold transition-colors" placeholder="johndoe@email.com" />
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase font-black tracking-widest text-navy/40 px-2">Mobile Number</label>
                   <input className="bg-white border border-neutral-100 px-6 py-4 font-display font-medium text-sm outline-none focus:border-gold transition-colors" placeholder="+91 00000 00000" />
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase font-black tracking-widest text-navy/40 px-2">Interested In</label>
                   <select className="bg-white border border-neutral-100 px-6 py-4 font-display font-medium text-sm outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                      <option>Vivanta - Residential (Surat)</option>
                      <option>Elysium - Residential (Vapi)</option>
                      <option>The Woods - Plotting (Silvassa)</option>
                      <option>Iconic Tower - Commercial (Surat)</option>
                   </select>
                </div>

                <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase font-black tracking-widest text-navy/40 px-2">Message</label>
                   <textarea rows={4} className="bg-white border border-neutral-100 px-6 py-4 font-display font-medium text-sm outline-none focus:border-gold transition-colors resize-none" placeholder="How can we help you?" />
                </div>

                <button type="submit" className="luxury-button w-full flex items-center justify-center gap-2">
                   Send Inquiry <Send size={14} />
                </button>
             </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="h-[500px] w-full bg-neutral-100 border-t border-neutral-200 overflow-hidden relative">
         <img 
           src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
           alt="Map" 
           className="w-full h-full object-cover grayscale opacity-50"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white px-8 py-4 border border-navy/10 flex items-center gap-3">
               <MapPin className="text-gold" size={24} />
               <span className="font-display font-black text-xs uppercase tracking-widest text-navy">View on Google Maps</span>
            </div>
         </div>
      </section>

      <Footer />
      <style jsx>{`
         .text-outline-navy {
            -webkit-text-stroke: 1px #0F172A;
         }
      `}</style>
    </div>
  );
}
