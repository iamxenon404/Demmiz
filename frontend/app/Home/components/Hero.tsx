"use client";

import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-zinc-50 dark:bg-black overflow-hidden antialiased font-sans transition-colors duration-500">
      
      {/* Background Texture Lines */}
      <div className="absolute inset-y-0 left-1/4 w-[1px] bg-zinc-200/60 dark:bg-zinc-900/40 hidden lg:block" />
      <div className="absolute inset-y-0 left-1/2 w-[1px] bg-zinc-200/60 dark:bg-zinc-900/40 hidden lg:block" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* ========================================================================
          Left Side: Editorial Brand Copy
          ======================================================================== */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-purple-50 dark:bg-zinc-900/80 rounded-full border border-purple-100 dark:border-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-700 dark:bg-amber-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-purple-800 dark:text-zinc-300">
              Maison Demmiz Scent Hub
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-zinc-900 dark:text-white tracking-tight uppercase leading-[1.05] max-w-2xl">
            Scent profiles <br />
            that sculpt <br />
            <span 
              className="text-purple-700 dark:text-amber-400 lowercase font-normal"
              style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', serif", fontStyle: 'italic' }}
            >
              your
            </span>{" "}
            legacy.
          </h1>

          <p className="mt-8 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed font-light tracking-wide">
            An elite digital archive dedicated to pure rare extracts, vault-sourced niche releases, and private custom hand-poured decants.
          </p>

          {/* Interactive Button Group */}
          <div className="mt-10 flex flex-wrap items-center gap-6 w-full">
            <a
              href="/shop"
              className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-purple-700 dark:hover:bg-amber-400 hover:text-white dark:hover:text-zinc-950 transition-colors duration-300 shadow-sm"
            >
              Explore Collection
            </a>
            
            <a
              href="/decants"
              className="px-6 py-4 bg-transparent text-zinc-900 dark:text-zinc-300 text-xs font-bold uppercase tracking-[0.2em] hover:text-purple-700 dark:hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
            >
              Request Samples
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-700 group-hover:bg-purple-700 dark:group-hover:bg-amber-400 transition-colors" />
            </a>
          </div>

        </div>

        {/* ========================================================================
          Right Side: Framed Luxury Imagery
          ======================================================================== */}
        <div className="lg:col-span-5 w-full relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/20 to-transparent mix-blend-multiply" />
            <img
              src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury bottle art profile"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 dark:opacity-90 transition-all duration-700"
            />
          </div>

          {/* Abstract floating counter indicator */}
          <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 px-5 py-4 hidden sm:block shadow-lg">
            <span className="block font-mono text-[10px] text-purple-700 dark:text-amber-400 font-bold tracking-widest uppercase">Est. Archive</span>
            <span className="block text-xl font-light text-zinc-900 dark:text-white mt-1">№ 2026</span>
          </div>
        </div>

      </div>

      {/* ========================================================================
        Bottom Panel: Minimal Scroll Prompt & Spec Line
        ======================================================================== */}
      <div className="absolute bottom-8 left-0 w-full z-10 px-6 md:px-12 flex justify-between items-center border-t border-zinc-200/40 dark:border-zinc-900/40 pt-4">
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] font-mono text-zinc-400 dark:text-zinc-500">
          <span>[ 100% Verified Sourcing ]</span>
        </div>
        
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400 animate-bounce">
          <span>Scroll down</span>
          <ArrowDown className="w-3 h-3 text-purple-700 dark:text-amber-400" />
        </div>
      </div>

    </section>
  );
};

export default Hero;