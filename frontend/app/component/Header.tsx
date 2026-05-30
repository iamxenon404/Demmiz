"use client";

import React from 'react';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 antialiased selection:bg-amber-500/30">
      {/* ========================================================================
        Promo Bar: Matte Purple & Gold Accent Line
        ======================================================================== */}
      <div className="bg-purple-950 text-amber-400 dark:bg-black dark:text-amber-500 border-b border-amber-500/10 text-[10px] sm:text-xs py-2 px-6 tracking-[0.25em] font-medium transition-colors duration-300 flex justify-between items-center">
        <span className="hidden sm:inline">DEMMIZ EXCLUSIVE DECANTS</span>
        <span className="mx-auto sm:mx-0 uppercase">BUY 3 PIECES AND AUTOMATICALLY GET 10% OFF YOUR ENTIRE ORDER</span>
      </div>

      {/* ========================================================================
        Main Navigation: Reconfigured Left-Aligned Layout
        ======================================================================== */}
      <div className="bg-white/70 dark:bg-purple-950/70 backdrop-blur-md border-b border-purple-900/5 dark:border-amber-500/10 px-6 py-5 md:px-12 flex items-center justify-between transition-all duration-300">
        
        {/* Left Side: Restructured Brand Identity & Subtitle Stack */}
        <div className="flex flex-col items-start select-none">
          <a 
            href="/" 
            className="text-2xl md:text-3xl font-black tracking-[0.35em] uppercase text-purple-950 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 leading-none"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            DEMMIZ
          </a>
          <span className="block text-[7px] tracking-[0.5em] uppercase font-extrabold text-amber-600 dark:text-amber-400/90 mt-1.5 ml-0.5">
            haute parfumerie
          </span>
        </div>

        {/* Center-Right: Inset Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] uppercase font-semibold tracking-[0.2em] text-purple-950/70 dark:text-purple-200/70 ml-auto mr-12">
          <a href="/shop" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            shop
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/brands" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            brands
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/decants" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            decants
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/about" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 relative group py-1">
            journal
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
        </nav>

        {/* Right Side: Polished Minimal Utility Tray */}
        <div className="flex items-center space-x-1 md:space-x-2 text-purple-950 dark:text-purple-200">
          {/* Search */}
          <button className="hover:text-amber-500 dark:hover:text-amber-400 hover:bg-purple-500/5 p-2 rounded-full transition-all duration-300" aria-label="Search">
            <Search className="w-4 h-4 stroke-[1.5]" />
          </button>

          {/* Account */}
          <button className="hidden sm:block hover:text-amber-500 dark:hover:text-amber-400 hover:bg-purple-500/5 p-2 rounded-full transition-all duration-300" aria-label="Account">
            <User className="w-4 h-4 stroke-[1.5]" />
          </button>

          {/* Shopping Bag with Sleek Counter */}
          <button className="hover:text-amber-500 dark:hover:text-amber-400 hover:bg-purple-500/5 p-2 rounded-full transition-all duration-300 relative" aria-label="Shopping Cart">
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
            <span className="absolute top-1.5 right-1.5 bg-purple-950 text-amber-400 dark:bg-amber-400 dark:text-black text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white dark:border-purple-950">
              0
            </span>
          </button>

          {/* Mobile Menu Icon */}
          <button className="md:hidden text-purple-950 dark:text-amber-400 p-2 hover:opacity-70 transition-opacity" aria-label="Open Menu">
            <Menu className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;