"use client";

import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const TrendingProducts = () => {
  const placeholderProducts = [
    { 
      id: 1, 
      brand: "House of Creed", 
      name: "Aventus", 
      type: "Eau de Parfum", 
      price: 365,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 2, 
      brand: "Parfums de Marly", 
      name: "Layton", 
      type: "Deteior de Parfum", 
      price: 295,
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 3, 
      brand: "Tom Ford", 
      name: "Oud Wood", 
      type: "Private Blend", 
      price: 285,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600"
    },
    { 
      id: 4, 
      brand: "Amouage", 
      name: "Reflection Man", 
      type: "Exceptional Extrait", 
      price: 340,
      image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=600"
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black px-6 py-24 md:px-12 transition-colors duration-500 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================
          Section Header Alignment
          ======================================================================== */}
        <div className="flex justify-between items-end mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-700 dark:bg-amber-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold">
                Curated Inventory
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-zinc-900 dark:text-zinc-50 uppercase tracking-tight">
              Trending Scents
            </h2>
          </div>
          
          <a 
            href="/shop" 
            className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400 hover:text-purple-700 dark:hover:text-amber-400 transition-colors duration-300 pb-1 border-b border-zinc-200 dark:border-zinc-800"
          >
            View All Index
          </a>
        </div>

        {/* ========================================================================
          Product Showcase Grid
          ======================================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {placeholderProducts.map((product) => (
            <div key={product.id} className="group relative flex flex-col justify-between">
              
              {/* Product Card Media Housing */}
              <div className="w-full aspect-[3/4] bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-900 overflow-hidden relative mb-5">
                
                {/* Real Placeholder Fragrance Images */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Left Mini Authentic Ribbon */}
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200/40 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 text-[8px] font-mono uppercase tracking-[0.2em] font-bold px-2.5 py-1">
                  100% Vaulted
                </div>

                {/* Right Mini Rating Star badge */}
                <div className="absolute top-3 right-3 bg-zinc-950/10 dark:bg-white/10 backdrop-blur-md p-1.5 rounded-full text-white dark:text-zinc-900 mix-blend-difference">
                  <Star className="w-3 h-3 fill-current stroke-0" />
                </div>

                {/* Slide-Up Direct Action Overlay (Desktop Only) */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-zinc-950/80 via-zinc-950/40 to-transparent hidden sm:block">
                  <button className="w-full bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 border border-transparent dark:border-zinc-800 hover:bg-purple-700 dark:hover:bg-amber-400 hover:text-white dark:hover:text-zinc-950 text-[10px] uppercase tracking-[0.2em] font-bold py-3 transition-colors duration-300 shadow-xl flex items-center justify-center gap-2">
                    <ShoppingBag className="w-3.5 h-3.5 stroke-[1.5]" />
                    Select Volume Allocation
                  </button>
                </div>
              </div>

              {/* Product Metadata Info Box */}
              <div className="flex flex-col flex-grow px-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-zinc-400 dark:text-zinc-500 font-bold">
                    {product.brand}
                  </span>
                  <span className="text-xs font-mono text-zinc-900 dark:text-zinc-100 font-bold">
                    ${product.price}
                  </span>
                </div>

                <h3 className="text-base font-light text-zinc-900 dark:text-zinc-200 mt-1.5 tracking-tight uppercase group-hover:text-purple-700 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {product.name}
                </h3>
                
                <span className="text-xs text-zinc-400 dark:text-zinc-500 font-serif italic mt-0.5 font-light">
                  {product.type}
                </span>
              </div>

              {/* Mobile-Only Persistent Action Drawer Button */}
              <button className="mt-5 w-full border border-zinc-200 dark:border-zinc-800 hover:border-purple-700 dark:hover:border-amber-400 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-800 dark:text-zinc-200 hover:bg-purple-700 dark:hover:bg-amber-400 hover:text-white dark:hover:text-zinc-950 transition-all duration-300 sm:hidden">
                Select Sizing options
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrendingProducts;