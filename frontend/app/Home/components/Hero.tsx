"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [activeDesign, setActiveDesign] = useState(0);

  // Auto-loop through the 3 designs every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDesign((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-zinc-50 dark:bg-black overflow-hidden antialiased font-sans transition-colors duration-500">
      
      {/* ========================================================================
        DESIGN 01: Centered Editorial Luxury Title (Default Visible)
        ======================================================================== */}
      <div 
        className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 ease-in-out ${
          activeDesign === 0 
            ? 'opacity-100 scale-100 pointer-events-auto z-10' 
            : 'opacity-0 scale-95 pointer-events-none z-0'
        }`}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1920"
            alt="Luxury perfume"
            className="w-full h-full object-cover object-center opacity-25 dark:opacity-40 grayscale-[40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white dark:from-black/80 dark:via-black/40 dark:to-black" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-16 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-[1px] bg-purple-700 dark:bg-amber-400 opacity-60"></span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-purple-700 dark:text-amber-400 font-bold">The Art of Olfaction</span>
            <span className="w-6 h-[1px] bg-purple-700 dark:bg-amber-400 opacity-60"></span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-zinc-900 dark:text-white tracking-wide uppercase leading-[1.1] max-w-4xl">
            Scents That Define <br />
            <span className="text-purple-700 dark:text-amber-400 lowercase" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>your</span> Identity
          </h1>
          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed font-light tracking-wide">
            Discover an elite archive of authentic rare fragrances, hard-to-find masterworks, and poured decant private collections.
          </p>
          <div className="mt-12 flex items-center gap-8">
            <a href="/shop" className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-900 dark:text-white hover:text-purple-700 dark:hover:text-amber-400 transition-colors pb-2 border-b border-zinc-900 dark:border-zinc-800 flex items-center gap-1.5 group">
              Explore Collection <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================
        DESIGN 02: Asymmetrical Split Layout with Frame
        ======================================================================== */}
      <div 
        className={`absolute inset-0 w-full h-full flex items-center transition-all duration-1000 ease-in-out ${
          activeDesign === 1 
            ? 'opacity-100 translate-x-0 pointer-events-auto z-10' 
            : 'opacity-0 -translate-x-8 pointer-events-none z-0'
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-purple-50 dark:bg-zinc-900/80 rounded-full border border-purple-100 dark:border-zinc-800">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-700 dark:bg-amber-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-purple-800 dark:text-zinc-300">Maison Demmiz Scent Hub</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-zinc-900 dark:text-white tracking-tight uppercase leading-[1.05] max-w-2xl">
              Scent profiles <br />that sculpt <br />
              <span className="text-purple-700 dark:text-amber-400 lowercase font-normal" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>your</span> legacy.
            </h1>
            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed font-light tracking-wide">
              An elite digital archive dedicated to pure rare extracts and vault-sourced niche releases.
            </p>
            <div className="mt-10">
              <a href="/shop" className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-[0.2em] hover:bg-purple-700 dark:hover:bg-amber-400 hover:text-white dark:hover:text-zinc-950 transition-colors duration-300 shadow-sm">
                Explore Collection
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 w-full hidden lg:flex justify-end">
            <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-3 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200" alt="Bottle profile" className="w-full h-full object-cover grayscale-[20%]" />
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================
        DESIGN 03: Minimal Typographic Watermark + Fragrance Image Card
        ======================================================================== */}
      <div 
        className={`absolute inset-0 w-full h-full flex items-center transition-all duration-1000 ease-in-out ${
          activeDesign === 2 
            ? 'opacity-100 translate-y-0 pointer-events-auto z-10' 
            : 'opacity-0 translate-y-8 pointer-events-none z-0'
        }`}
      >
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 select-none pointer-events-none text-center opacity-[0.02] dark:opacity-[0.03] text-[12vw] font-serif font-black tracking-widest text-zinc-950 dark:text-white font-italic">
          demmiz
        </div>
        
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.4em] font-mono font-bold text-purple-700 dark:text-amber-400 mb-6">[ volume 01 // archive collection ]</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1] uppercase max-w-3xl">
              unearth scents <br />that echo in <br />
              <span className="text-purple-700 dark:text-amber-400 lowercase font-normal" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>your</span> absence.
            </h1>
            <div className="mt-12 flex items-center gap-8 border-t border-zinc-200 dark:border-zinc-800 pt-8 w-full max-w-md">
              <a href="/shop" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-900 dark:text-zinc-100 hover:text-purple-700 dark:hover:text-amber-400 transition-colors">
                The Full Index <ArrowUpRight className="w-3.5 h-3.5 text-purple-700 dark:text-amber-400" />
              </a>
            </div>
          </div>

          {/* Restored Perfume Image Card for Design 3 */}
          <div className="lg:col-span-4 w-full hidden lg:flex justify-end">
            <div className="relative w-full max-w-[280px] aspect-[4/5] bg-white dark:bg-zinc-900 p-4 border border-zinc-200/60 dark:border-zinc-800 shadow-2xl group">
              <div className="w-full h-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200"
                  alt="Minimalist luxury bottle profile"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
                <span>Extract № 541</span>
                <span className="text-purple-700 dark:text-amber-400 font-bold">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================
        PERSISTENT BOTTOM INDICATORS (CONTROL PANEL)
        ======================================================================== */}
      <div className="absolute bottom-8 left-0 w-full z-20 px-6 md:px-12 flex justify-between items-center">
        {/* Step Numbers Indicators */}
        <div className="flex items-center gap-4">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveDesign(idx)}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <span className={`font-mono text-xs font-bold transition-colors ${
                activeDesign === idx ? 'text-purple-700 dark:text-amber-400' : 'text-zinc-300 dark:text-zinc-700'
              }`}>
                0{idx + 1}
              </span>
              <div className={`h-[2px] transition-all duration-500 rounded-full ${
                activeDesign === idx ? 'w-8 bg-purple-700 dark:bg-amber-400' : 'w-3 bg-zinc-200 dark:bg-zinc-800 group-hover:w-5'
              }`} />
            </button>
          ))}
        </div>

        {/* Scroll Callout */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-zinc-500">
          <span>Scroll down</span>
          <ArrowDown className="w-3 h-3 text-purple-700 dark:text-amber-400 animate-bounce" />
        </div>
      </div>

    </section>
  );
};

export default Hero;