"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const BrandSpotlight = () => {
  return (
    <section className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 py-24 px-6 md:px-12 transition-colors duration-500 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* ========================================================================
          Left Column: Editorial Brand Copy Manifesto
          ======================================================================== */}
        <div className="lg:col-span-5 flex flex-col items-start text-left space-y-6 relative z-10">
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700 dark:bg-amber-400" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-purple-700 dark:text-amber-400 font-bold">
              House Spotlight
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-50 tracking-tight uppercase leading-[1.1]">
            Tom Ford <br />
            <span 
              className="text-purple-700 dark:text-amber-400 lowercase font-normal"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}
            >
              private
            </span>{" "}
            Blend
          </h2>
          
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed tracking-wide max-w-md">
            An extraordinary collection of masterful, heavy-extract artisanal profiles entirely unconstrained by traditional commercial market conventions. Explore our real-time vault allocation of vintage batch formulations and hard-to-find signature decants.
          </p>

          <div className="pt-4 w-full sm:w-auto">
            <a
              href="/shop?brand=tom-ford"
              className="group inline-flex items-center justify-between gap-8 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-purple-700 dark:hover:bg-amber-400 hover:text-white dark:hover:text-zinc-950 transition-all duration-300 w-full sm:w-auto shadow-lg"
            >
              Shop the House
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* ========================================================================
          Right Column: Overlapping Asymmetrical Image Grid Matrix
          ======================================================================== */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative items-center">
          
          {/* Decorative Technical Geometry Lines */}
          <div className="absolute -inset-4 border border-dashed border-zinc-200 dark:border-zinc-900/60 pointer-events-none rounded-xl hidden md:block" />

          {/* Primary High-End Visual Block */}
          <div className="col-span-8 relative aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border border-zinc-200 dark:border-zinc-800 p-2 shadow-2xl z-10 group">
            <img
              src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800"
              alt="Tom Ford Private Blend dark aesthetic profile"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
            />
          </div>

          {/* Secondary Layered Mini Asset Card */}
          <div className="col-span-4 relative aspect-[3/4] bg-white dark:bg-zinc-950 overflow-hidden border border-zinc-200 dark:border-zinc-900 p-2 shadow-xl -translate-x-12 translate-y-16 hidden sm:block z-20 group">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600"
              alt="Luxury formulation bottle texture"
              className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
            />
            {/* Fine print specifications marker layout */}
            <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/90 backdrop-blur-md px-2 py-1.5 flex justify-between font-mono text-[8px] text-zinc-400 uppercase tracking-widest">
              <span>Batch No. 26</span>
              <span className="text-amber-400">Vaulted</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BrandSpotlight;