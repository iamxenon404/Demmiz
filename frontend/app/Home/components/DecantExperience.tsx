"use client";

import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const DecantExperience = () => {
  const sizes = [
    { num: "01", name: "2ml Atomizer", sprays: "~30 Sprays", desc: "Perfect for initial skin testing over 3-5 days." },
    { num: "02", name: "5ml Travel Vial", sprays: "~75 Sprays", desc: "Ideal for evening getaways or seasonal rotations." },
    { num: "03", name: "10ml Decant Luxury", sprays: "~150 Sprays", desc: "A full month of usage to solidify your decision." }
  ];

  return (
    <section className="w-full bg-zinc-50 dark:bg-black border-y border-zinc-100 dark:border-zinc-900 py-24 px-6 md:px-12 transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* ========================================================================
          Left Column: Framed Editorial Visual Asset
          ======================================================================== */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] bg-zinc-200 dark:bg-zinc-900 overflow-hidden group border border-zinc-200 dark:border-zinc-800 p-3 shadow-xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/40 via-transparent to-zinc-950/20 mix-blend-multiply" />
          <img
            src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000"
            alt="Meticulous decanting lab equipment"
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out opacity-90"
          />
          
          {/* Technical Overlay Badge */}
          <div className="absolute bottom-6 left-6 z-20 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200/40 dark:border-zinc-800/80 p-4 max-w-xs shadow-lg hidden sm:block">
            <span className="block font-mono text-[9px] text-purple-700 dark:text-amber-400 font-bold tracking-widest uppercase">// Laboratory Sourcing</span>
            <span className="block text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-light leading-relaxed">
              Hand-poured into sterile medical-grade glass vials upon daily order allocation.
            </span>
          </div>
        </div>

        {/* ========================================================================
          Right Column: High-End Interactive Copy & Technical Spec Chart
          ======================================================================== */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700 dark:bg-amber-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold">
              Sampling Redefined
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-50 uppercase tracking-tight leading-none">
            The Decant Experience
          </h2>
          
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-6 leading-relaxed font-light tracking-wide max-w-xl">
            Committing blindly to a full $300 luxury extraction is a retail gamble. Our custom decanting process gives you uncompromised access to genuine formulations, allowing you to test profiles on your own skin architecture before investing.
          </p>

          {/* Upgraded Sizing Grid Row Stack */}
          <div className="w-full mt-12 border-t border-zinc-200 dark:border-zinc-900">
            {sizes.map((size, idx) => (
              <div 
                key={idx}
                className="group border-b border-zinc-200 dark:border-zinc-900 py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 items-baseline transition-all duration-300 hover:pl-2"
              >
                {/* Number & Name Tag */}
                <div className="sm:col-span-4 flex items-baseline gap-3">
                  <span className="font-mono text-[10px] text-zinc-300 dark:text-zinc-700 font-bold">
                    {size.num}
                  </span>
                  <h4 className="text-xs uppercase tracking-[0.15em] font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-700 dark:group-hover:text-amber-400 transition-colors">
                    {size.name}
                  </h4>
                </div>

                {/* Spray Count Volume Metric */}
                <div className="sm:col-span-3">
                  <span className="inline-block px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-mono text-[10px] rounded border border-zinc-200/40 dark:border-zinc-800/60 font-medium">
                    {size.sprays}
                  </span>
                </div>

                {/* Micro Description Context */}
                <div className="sm:col-span-5 text-left">
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500 font-light tracking-wide leading-relaxed">
                    {size.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Line */}
          <a
            href="/decants"
            className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-zinc-900 dark:text-zinc-100 hover:text-purple-700 dark:hover:text-amber-400 transition-colors pb-1 border-b border-zinc-900 dark:border-zinc-800 flex items-center gap-1.5 group"
          >
            Order Sample Set
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-purple-700 dark:text-amber-400" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default DecantExperience;