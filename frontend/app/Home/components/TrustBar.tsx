"use client";

import React from 'react';
import { ShieldCheck, Pipette, Truck, ArrowRight } from 'lucide-react';

const TrustBar = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 stroke-[1.2]" />,
      title: "100% Certified Authentic",
      description: "Every item is strictly vetted, batch-checked, and sourced directly from private luxury vault allocations."
    },
    {
      icon: <Pipette className="w-5 h-5 stroke-[1.2]" />,
      title: "Hand-Poured Decants",
      description: "Sample ultra-rare extraits in 2ml, 5ml, or 10ml modular atomizers before choosing full size iterations."
    },
    {
      icon: <Truck className="w-5 h-5 stroke-[1.2]" />,
      title: "Insured Premium Shipping",
      description: "Secure, temperature-stabilized protective packaging ensures your profile arrives perfectly uncompromised."
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900 py-20 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* ========================================================================
          Left Column: Brand Philosophy Manifest
          ======================================================================== */}
        <div className="lg:col-span-5 sticky top-28">
          <span className="text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-purple-700 dark:text-amber-400 block mb-4">
            // the demmiz protocol
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-50 uppercase leading-tight max-w-sm">
            Uncompromising <br />standards for the <br />
            <span 
              className="text-purple-700 dark:text-amber-400 lowercase font-normal"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
              true
            </span>{" "}
            collector.
          </h2>
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-6 max-w-xs font-light leading-relaxed">
            We operate outside standard retail margins to curate an index defined entirely by provenance, rarity, and raw authenticity.
          </p>
        </div>

        {/* ========================================================================
          Right Column: Stacked Editorial Trust Elements
          ======================================================================== */}
        <div className="lg:col-span-7 w-full border-t border-zinc-100 dark:border-zinc-900 lg:border-t-0">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group border-b border-zinc-100 dark:border-zinc-900 py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start transition-all duration-300 hover:pl-2"
            >
              {/* Micro Indicator and Icon */}
              <div className="sm:col-span-4 flex items-center gap-4 text-purple-700 dark:text-amber-400">
                <span className="font-mono text-[10px] text-zinc-300 dark:text-zinc-700 font-bold">
                  [0{index + 1}]
                </span>
                <div className="p-2 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Core Text Data */}
              <div className="sm:col-span-7">
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed font-light tracking-wide">
                  {item.description}
                </p>
              </div>

              {/* Minimal Accent Arrow on End */}
              <div className="sm:col-span-1 hidden sm:flex justify-end pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-purple-700 dark:text-amber-400 transform -rotate-45" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustBar;