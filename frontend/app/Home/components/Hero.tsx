"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 overflow-hidden antialiased font-sans transition-colors duration-500 pt-32 pb-12">
      
      {/* Huge Background Watermark Text for Luxury Vibe */}
      <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 select-none pointer-events-none text-center opacity-[0.02] dark:opacity-[0.03] text-[12vw] font-serif font-black tracking-widest text-zinc-950 dark:text-white font-italic">
        demmiz
      </div>

      {/* Top Border Framing Line */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 hidden md:block">
        <div className="w-full h-[1px] bg-zinc-200 dark:bg-zinc-800" />
      </div>

      {/* ========================================================================
        Main Content Layout Matrix
        ======================================================================== */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative z-10">
        
        {/* Left/Center Text Segment */}
        <div className="lg:col-span-8 flex flex-col items-start">
          <span className="text-[10px] uppercase tracking-[0.4em] font-mono font-bold text-purple-700 dark:text-amber-400 mb-6">
            [ volume 01 // archive collection ]
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1] uppercase max-w-3xl">
            unearth scents <br />
            that echo in <br />
            <span 
              className="text-purple-700 dark:text-amber-400 lowercase font-normal block sm:inline"
              style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', serif", fontStyle: 'italic' }}
            >
              your
            </span>{" "}
            absence.
          </h1>

          <p className="mt-8 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-lg leading-relaxed font-light tracking-wide">
            Demmiz Scent Hub bridges the gap between raw olfactory artistry and true luxury. Access premium signature decants, rare vintage profiles, and vaulted niche houses.
          </p>

          {/* Clean Action Bars */}
          <div className="mt-12 flex items-center gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8 w-full max-w-md">
            <a
              href="/shop"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-900 dark:text-zinc-100 hover:text-purple-700 dark:hover:text-amber-400 transition-colors"
            >
              The Full Index
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-purple-700 dark:text-amber-400" />
            </a>
            
            <span className="text-zinc-300 dark:text-zinc-700 font-light">/</span>

            <a
              href="/decants"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 hover:text-purple-700 dark:hover:text-amber-400 transition-colors"
            >
              Niche Decants
            </a>
          </div>
        </div>

        {/* Right Floating Micro-Media Card */}
        <div className="lg:col-span-4 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] aspect-[4/5] bg-white dark:bg-zinc-900 p-4 border border-zinc-200/60 dark:border-zinc-800 shadow-[0_15px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
            <div className="w-full h-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200"
                alt="Minimalist luxury bottle profile"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
              />
            </div>
            {/* Fine print caption below the image */}
            <div className="mt-3 flex items-center justify-between text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
              <span>Extract № 541</span>
              <span className="text-purple-700 dark:text-amber-400 font-bold">In Stock</span>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================
        Bottom Section: Architectural Spec Frame
        ======================================================================== */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-zinc-200 dark:border-zinc-900 pt-8 text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-400 dark:text-zinc-500 font-mono">
        <div>
          <span className="text-purple-700 dark:text-amber-400 font-bold mr-1">01 /</span> Authenticity Guaranteed
        </div>
        <div className="md:text-center">
          <span className="text-purple-700 dark:text-amber-400 font-bold mr-1">02 /</span> Worldwide Insured Shipping
        </div>
        <div className="md:text-right">
          <span className="text-purple-700 dark:text-amber-400 font-bold mr-1">03 /</span> Small-Batch Hand Decanting
        </div>
      </div>

    </section>
  );
};

export default Hero;