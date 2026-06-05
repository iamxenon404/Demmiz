"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const CollectionsGrid = () => {
  const collections = [
    {
      title: "Niche Masterpieces",
      tagline: "Rare artisanal houses",
      link: "/shop?category=niche",
      image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800",
      gridClass: "lg:col-span-8 lg:row-span-2 h-[450px] lg:h-[600px]"
    },
    {
      title: "Hand-Poured Decants",
      tagline: "Sample before committing",
      link: "/decants",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
      gridClass: "lg:col-span-4 lg:row-span-1 h-[300px] lg:h-[285px]"
    },
    {
      title: "Designer Privé",
      tagline: "Exclusive luxury lines",
      link: "/shop?category=prive",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
      gridClass: "lg:col-span-4 lg:row-span-1 h-[300px] lg:h-[285px]"
    },
    {
      title: "Vaulted & Rare",
      tagline: "Discontinued batch drops",
      link: "/shop?category=rare",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
      gridClass: "lg:col-span-12 lg:row-span-1 h-[350px] lg:h-[320px]"
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-black px-6 py-24 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================
          Editorial Header Frame
          ======================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-100 dark:border-zinc-900 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-700 dark:bg-amber-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold">
                Curated Catalogues
              </span>
            </div>
            <h2 className="text-3xl font-light text-zinc-900 dark:text-zinc-50 uppercase tracking-tight">
              Shop By Curation
            </h2>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-xs font-light mt-4 md:mt-0 leading-relaxed font-mono">
            // Structural alignments mapping architectural scent families.
          </p>
        </div>

        {/* ========================================================================
          Bento Grid Layout Matrix
          ======================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto">
          {collections.map((col, index) => (
            <a
              key={index}
              href={col.link}
              className={`group relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/60 flex items-end p-6 md:p-10 transition-all duration-500 shadow-sm hover:shadow-xl ${col.gridClass}`}
            >
              {/* Background Media with Muted Luxury Grading */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover object-center opacity-85 dark:opacity-70 grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
                {/* Asymmetrical Shadow Gradient Overlay for Typographic Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent mix-blend-multiply dark:mix-blend-normal" />
              </div>

              {/* Card Metadata Container */}
              <div className="relative z-10 w-full flex justify-between items-end gap-4">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* Micro Index Notation */}
                  <span className="font-mono text-[9px] text-purple-400 dark:text-amber-400/80 font-bold tracking-widest block mb-1">
                    [0{index + 1} // {col.tagline}]
                  </span>
                  <h3 className="text-xl md:text-2xl font-light text-white uppercase tracking-wide">
                    {col.title}
                  </h3>
                </div>
                
                {/* Architectural Action Ring */}
                <div className="bg-white/10 dark:bg-zinc-950/40 backdrop-blur-md text-white border border-white/20 rounded-full p-3.5 group-hover:bg-purple-700 dark:group-hover:bg-amber-400 group-hover:text-white dark:group-hover:text-zinc-950 group-hover:border-transparent transition-all duration-300 transform group-hover:rotate-45 shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CollectionsGrid;