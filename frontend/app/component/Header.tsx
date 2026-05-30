"use client";

import React from 'react';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 antialiased selection:bg-amber-500/30">
      {/* ========================================================================
        Promo Bar: High-contrast Dark Purple & Matte Gold Accent
        ======================================================================== */}
      <div className="bg-purple-950 text-amber-400 dark:bg-black dark:text-amber-500 border-b border-amber-500/10 text-[10px] sm:text-xs py-2 px-4 text-center tracking-[0.25em] font-medium transition-colors duration-300">
        BUY 3 OR MORE PIECES AND AUTOMATICALLY GET 10% OFF YOUR ENTIRE ORDER
      </div>

      {/* ========================================================================
        Main Navigation: Ultra-minimalist Glass Container
        ======================================================================== */}
      <div className="bg-white/70 dark:bg-purple-950/70 backdrop-blur-md border-b border-purple-900/5 dark:border-amber-500/10 px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-300">
        
        {/* Left: Clean, lower-case style nav links with sliding underscores */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-[0.15em] text-purple-950/80 dark:text-purple-200/80">
          <a href="/shop" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            shop all
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/brands" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            brands
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/decants" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            decants & samples
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/about" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            our story
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
        </nav>

        {/* Mobile View: Clean Menu Toggle */}
        <button className="md:hidden text-purple-950 dark:text-amber-400 p-1 hover:opacity-70 transition-opacity" aria-label="Open Menu">
          <Menu className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* ========================================================================
          Center: Contemporary Brand Layout
          Bold typographic framing combined with a sleek subtitle accent
          ======================================================================== */}
        <div className="text-center flex flex-col items-center select-none">
          <a href="/" className="text-xl md:text-2xl tracking-[0.4em] font-black uppercase text-purple-950 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
            DEMMIZ
          </a>
          <span className="block text-[7px] tracking-[0.4em] uppercase font-bold text-amber-600 dark:text-amber-400/90 mt-1">
            haute parfumerie
          </span>
        </div>

        {/* ========================================================================
          Right: Polished Utility Icon Tray
          ======================================================================== */}
        <div className="flex items-center space-x-2 md:space-x-4 text-purple-950 dark:text-purple-200">
          
          {/* Action: Search */}
          <button className="hover:text-amber-500 dark:hover:text-amber-400 hover:bg-purple-500/5 p-2 rounded-full transition-all duration-300" aria-label="Search">
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>

          {/* Action: User Access */}
          <button className="hidden sm:block hover:text-amber-500 dark:hover:text-amber-400 hover:bg-purple-500/5 p-2 rounded-full transition-all duration-300" aria-label="Account">
            <User className="w-4 h-4 stroke-[1.5]" />
          </button>

          {/* Action: Shopping Bag + High-Contrast Minimalist Counter */}
          <button className="hover:text-amber-500 dark:hover:text-amber-400 hover:bg-purple-500/5 p-2 rounded-full transition-all duration-300 relative" aria-label="Shopping Cart">
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="absolute top-1.5 right-1.5 bg-purple-950 text-amber-400 dark:bg-amber-400 dark:text-black text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white dark:border-purple-950">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;