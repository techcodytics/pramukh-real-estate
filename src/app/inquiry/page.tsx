"use client";

import PageHeader from "@/components/PageHeader";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

export default function InquiryPage() {
  return (
    <div className="bg-white min-h-screen mandala-bg">
      <PageHeader
        title="Inquiry"
        subtitle="Embark on a journey of serenity with our sanctuary advisors. We are here to guide your path to refined living."
        breadcrumb="Inquire"
      />

      <section className="temple-spacing px-6 lg:px-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 pb-24">
          {/* Contact Details */}
          <div>
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.4em] text-gold mb-8 block">
              Connect with us
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-stone mb-14 leading-[1.1]">
              Let&apos;s Start a <br />
              <span className="italic text-stone/40">Conversation.</span>
            </h2>

            <div className="space-y-16">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full bg-stone/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 border border-stone/5">
                  <Phone size={28} strokeWidth={1} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-stone/30 mb-2">
                    Voice Consultation
                  </div>
                  <div className="text-2xl font-serif text-stone tracking-tight mb-2">
                    +91 97261 11333
                  </div>
                  <div className="text-sm text-stone/40 font-sans font-light italic">
                    Available 24/7 for your support.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full bg-stone/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 border border-stone/5">
                  <Mail size={28} strokeWidth={1} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-stone/30 mb-2">
                    Digital Inquiry
                  </div>
                  <div className="text-2xl font-serif text-stone tracking-tight mb-2">
                    care@pramukh.com
                  </div>
                  <div className="text-sm text-stone/40 font-sans font-light italic">
                    Response time within 24 hours.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full bg-stone/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-700 border border-stone/5">
                  <MapPin size={28} strokeWidth={1} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-stone/30 mb-2">
                    Experience Center
                  </div>
                  <div className="text-2xl font-serif text-stone tracking-tight mb-2 italic">
                    Prahladnagar, Ahmedabad
                  </div>
                  <div className="text-sm text-stone/40 font-sans font-light mt-4 max-w-sm leading-relaxed border-l border-gold/20 pl-6">
                    3rd Floor, Pramukh Corporate, Opposite Venus Atlantis,
                    Prahladnagar, Ahmedabad - 380015.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-16 border-t border-stone/10 grid grid-cols-2 gap-12">
              <div>
                <div className="text-[11px] uppercase font-bold tracking-[0.3em] text-stone/30 mb-6 font-sans">
                  Business Hours
                </div>
                <div className="flex items-center gap-4 text-stone font-sans text-sm font-medium">
                  <Clock size={16} className="text-gold" strokeWidth={1.5} />{" "}
                  Mon - Sat: 9:00 AM - 7:00 PM
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold tracking-[0.3em] text-stone/30 mb-6 font-sans">
                  Chat Support
                </div>
                <div className="flex items-center gap-4 text-stone font-sans text-sm font-medium">
                  <MessageCircle
                    size={16}
                    className="text-gold"
                    strokeWidth={1.5}
                  />{" "}
                  WhatsApp Available
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-stone shadow-[0_20px_80px_rgba(45,42,38,0.1)] p-10 lg:p-10 border border-gold/10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[80px]" />
            <h3 className="text-4xl font-serif text-beige mb-10">
              Inquiry{" "}
              <span className="italic opacity-80 text-gold">Sanctuary.</span>
            </h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] uppercase font-bold tracking-[0.3em] text-beige/30 px-2 font-sans">
                    First Name
                  </label>
                  <input
                    className="bg-white/5 border-b border-white/10 px-4 py-4 font-sans font-light text-beige placeholder:text-beige/20 outline-none focus:border-gold transition-all duration-700"
                    placeholder="e.g. John"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] uppercase font-bold tracking-[0.3em] text-beige/30 px-2 font-sans">
                    Last Name
                  </label>
                  <input
                    className="bg-white/5 border-b border-white/10 px-4 py-4 font-sans font-light text-beige placeholder:text-beige/20 outline-none focus:border-gold transition-all duration-700"
                    placeholder="e.g. Doe"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] uppercase font-bold tracking-[0.3em] text-beige/30 px-2 font-sans">
                  Email Address
                </label>
                <input
                  className="bg-white/5 border-b border-white/10 px-4 py-4 font-sans font-light text-beige placeholder:text-beige/20 outline-none focus:border-gold transition-all duration-700"
                  placeholder="johndoe@email.com"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] uppercase font-bold tracking-[0.3em] text-beige/30 px-2 font-sans">
                  Mobile Number
                </label>
                <input
                  className="bg-white/5 border-b border-white/10 px-4 py-4 font-sans font-light text-beige placeholder:text-beige/20 outline-none focus:border-gold transition-all duration-700"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] uppercase font-bold tracking-[0.3em] text-beige/30 px-2 font-sans">
                  Interested In
                </label>
                <select className="bg-white/5 border-b border-white/10 px-4 py-4 font-sans font-light text-beige outline-none focus:border-gold transition-all duration-700 appearance-none cursor-pointer">
                  <option className="bg-stone">
                    Vivanta - Residential (Ahmedabad)
                  </option>
                  <option className="bg-stone">
                    Elysium - Residential (Ahmedabad)
                  </option>
                  <option className="bg-stone">
                    The Woods - Plotting (Gandhinagar)
                  </option>
                  <option className="bg-stone">
                    Iconic Tower - Commercial (Gandhinagar)
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[11px] uppercase font-bold tracking-[0.3em] text-beige/30 px-2 font-sans">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="bg-white/5 border-b border-white/10 px-4 py-4 font-sans font-light text-beige placeholder:text-beige/20 outline-none focus:border-gold transition-all duration-700 resize-none"
                  placeholder="How can we help your journey?"
                />
              </div>

              <button
                type="submit"
                className="serene-button border cursor-pointer border-gold w-full flex items-center justify-center gap-4 mt-12 bg-gold! hover:bg-white! hover:text-stone!"
              >
                Send Inquiry <Send size={16} strokeWidth={1.5} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="h-[600px] w-full bg-beige border-t border-stone/5 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
          alt="Map"
          className="w-full h-full object-cover grayscale brightness-[-0.2] opacity-40 transition-all duration-1000"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-stone/20">
          <button className="bg-white/90 backdrop-blur-xl px-12 py-5 border border-gold/10 flex items-center gap-4 text-stone hover:bg-gold hover:text-white transition-all duration-700 shadow-2xl group">
            <MapPin
              className="text-gold group-hover:text-white transition-colors"
              size={24}
              strokeWidth={1}
            />
            <span className="font-sans font-bold text-[11px] uppercase tracking-[0.4em]">
              View Experiences Center
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
