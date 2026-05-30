"use client";

import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 antialiased font-sans selection:bg-amber-500/30">
      {/* ========================================================================
        The Main Structural Frame
        ======================================================================== */}
      <div className="bg-white/90 dark:bg-purple-950/95 backdrop-blur-md border-b border-purple-950/10 dark:border-amber-500/10 grid grid-cols-12 items-center h-20 px-4 md:px-8 transition-all duration-300">
        
        {/* Left Section: Brand Identity */}
        <div className="col-span-6 md:col-span-3 flex flex-col justify-center h-full border-r-0 md:border-r border-purple-950/5 dark:border-amber-500/5 pr-4">
          <a 
            href="/" 
            className="text-xl md:text-2xl font-black tracking-[0.45em] uppercase text-purple-950 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300 leading-none"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            demmiz
          </a>
          <span className="text-[7px] tracking-[0.6em] uppercase font-bold text-amber-600 dark:text-amber-400 mt-1.5 opacity-90">
            h a u t e . p a r f u m
          </span>
        </div>

        {/* Center Section: Desktop Minimal Inset Navigation */}
        <nav className="hidden md:flex col-span-6 items-center space-x-10 pl-8 h-full text-[11px] font-bold tracking-[0.25em] text-purple-950/60 dark:text-purple-200/60 lowercase">
          <a href="/shop" className="hover:text-purple-950 dark:hover:text-white transition-colors duration-300 relative group py-2">
            / shop all
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/brands" className="hover:text-purple-950 dark:hover:text-white transition-colors duration-300 relative group py-2">
            / brands
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/decants" className="hover:text-purple-950 dark:hover:text-white transition-colors duration-300 relative group py-2">
            / archive & decants
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
          <a href="/about" className="hover:text-purple-950 dark:hover:text-white transition-colors duration-300 relative group py-2">
            / the journal
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-out"></span>
          </a>
        </nav>

        {/* Right Section: Action Icons */}
        <div className="col-span-6 md:col-span-3 flex items-center justify-end space-x-1 h-full pl-0 md:pl-4 border-l-0 md:border-l border-purple-950/5 dark:border-amber-500/5">
          
          <button className="hover:text-amber-500 dark:hover:text-amber-400 p-2 rounded-sm transition-all duration-300" aria-label="Search">
            <Search className="w-4 h-4 stroke-[1.25]" />
          </button>

          <button className="hidden sm:block hover:text-amber-500 dark:hover:text-amber-400 p-2 rounded-sm transition-all duration-300" aria-label="Account">
            <User className="w-4 h-4 stroke-[1.25]" />
          </button>

          <button className="hover:text-amber-500 dark:hover:text-amber-400 p-2 rounded-sm transition-all duration-300 relative flex items-center gap-1" aria-label="Shopping Cart">
            <ShoppingBag className="w-4 h-4 stroke-[1.25]" />
            <span className="text-[10px] font-bold tracking-normal text-purple-950 dark:text-amber-400 mt-0.5">
              (0)
            </span>
          </button>

          {/* Mobile Menu Toggle button */}
          <button 
            className="md:hidden text-purple-950 dark:text-amber-400 p-2 hover:opacity-70 transition-opacity ml-1" 
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-4 h-4 stroke-[1.25]" />
          </button>
        </div>

      </div>

      {/* ========================================================================
        Mobile Side Overlay Menu Drawer
        ======================================================================== */}
      <div className={`fixed inset-0 z-50 bg-purple-950/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`absolute top-0 right-0 w-72 h-full bg-white dark:bg-purple-950 p-6 shadow-2xl transition-transform duration-300 ease-out flex flex-col justify-between ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <div>
            {/* Drawer Header Controls */}
            <div className="flex items-center justify-between pb-6 border-b border-purple-950/5 dark:border-amber-500/10">
              <span className="text-xs font-black tracking-[0.2em] uppercase text-purple-950 dark:text-white">menu</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 text-purple-950 dark:text-amber-400 hover:opacity-70 transition-opacity"
                aria-label="Close Menu"
              >
                <X className="w-4 h-4 stroke-[1.5]" />
              </button>
            </div>

            {/* Drawer Links Stack */}
            <nav className="flex flex-col space-y-6 pt-8 text-sm font-bold tracking-[0.2em] text-purple-950/70 dark:text-purple-200/70 lowercase">
              <a href="/shop" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>
                / shop all
              </a>
              <a href="/brands" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>
                / brands
              </a>
              <a href="/decants" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>
                / archive & decants
              </a>
              <a href="/about" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>
                / the journal
              </a>
            </nav>
          </div>

          {/* Drawer Footer Account links */}
          <div className="pt-6 border-t border-purple-950/5 dark:border-amber-500/10 flex items-center space-x-4 text-xs font-bold tracking-widest text-purple-950/50 dark:text-purple-300/50 lowercase">
            <a href="/account" className="hover:text-amber-500" onClick={() => setIsOpen(false)}>profile</a>
            <span>•</span>
            <a href="/help" className="hover:text-amber-500" onClick={() => setIsOpen(false)}>support</a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;