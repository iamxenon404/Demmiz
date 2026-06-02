"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden antialiased font-sans transition-colors duration-500">
      
      {/* ========================================================================
        Background Image Layer with High-End Vignette Matrix
        ======================================================================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury perfume bottle profile"
          className="w-full h-full object-cover object-center opacity-25 dark:opacity-40 grayscale-[40%] transition-transform duration-1000 scale-105"
        />
        {/* Dynamic gradient overlay to complement both light and dark settings */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white dark:from-black/80 dark:via-black/40 dark:to-black" />
      </div>

      {/* ========================================================================
        Core Editorial Typography Box
        ======================================================================== */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-16 flex flex-col items-center">
        
        {/* Subtle Identity Line */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-[1px] bg-purple-700 dark:bg-amber-400 opacity-60"></span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-purple-700 dark:text-amber-400 font-bold tracking-widest">
            The Art of Olfaction
          </span>
          <span className="w-6 h-[1px] bg-purple-700 dark:bg-amber-400 opacity-60"></span>
        </div>

        {/* Master Luxury Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-zinc-900 dark:text-white tracking-wide uppercase leading-[1.1] max-w-4xl">
          Scents That Define <br />
          <span 
            className="text-purple-700 dark:text-amber-400 lowercase"
            style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', serif", fontStyle: 'italic' }}
          >
            your
          </span>{" "}
          Identity
        </h1>

        {/* Editorial Narrative */}
        <p className="mt-8 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-light tracking-wide">
          Discover an elite archive of authentic rare fragrances, hard-to-find masterworks, and meticulously poured decant private collections.
        </p>

        {/* Minimalist Typographic Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-8 sm:gap-12 w-full justify-center">
          
          {/* Action 1 */}
          <a
            href="/shop"
            className="w-full sm:w-auto text-xs font-bold uppercase tracking-[0.25em] text-zinc-900 dark:text-white hover:text-purple-700 dark:hover:text-amber-400 transition-colors duration-300 pb-2 border-b border-zinc-900 dark:border-zinc-800 focus:border-purple-700 dark:focus:border-amber-400 flex items-center justify-center gap-1.5 group"
          >
            Explore Collection
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>

          {/* Action 2 */}
          <a
            href="/decants"
            className="w-full sm:w-auto text-xs font-bold uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 hover:text-purple-700 dark:hover:text-amber-400 transition-colors duration-300 pb-2 border-b border-transparent flex items-center justify-center gap-1.5 group"
          >
            Browse Samples
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>

        </div>
      </div>

      {/* ========================================================================
        Bottom Framework: Architectural Trust Columns
        ======================================================================== */}
      <div className="absolute bottom-10 left-0 w-full z-10 hidden md:block border-t border-zinc-100/30 dark:border-zinc-900/40 pt-6">
        <div className="max-w-7xl mx-auto px-12 grid grid-cols-3 text-center text-[10px] uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500 font-mono">
          <div className="border-r border-zinc-200 dark:border-zinc-900 last:border-0 px-4">
            <span className="text-purple-700 dark:text-amber-400 mr-1.5">//</span> 100% Verified Authentic
          </div>
          <div className="border-r border-zinc-200 dark:border-zinc-900 last:border-0 px-4">
            <span className="text-purple-700 dark:text-amber-400 mr-1.5">//</span> Vault-Sourced Houses
          </div>
          <div className="border-r border-zinc-200 dark:border-zinc-900 last:border-0 px-4">
            <span className="text-purple-700 dark:text-amber-400 mr-1.5">//</span> Custom Hand-Poured Decants
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;