"use client";

import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll behavior for a more dynamic feel
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { label: 'Collection', href: '/shop' },
    { label: 'Houses', href: '/brands' },
    { label: 'The Archive', href: '/decants' },
    { label: 'Editorial', href: '/about' },
  ];

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 antialiased font-sans transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-zinc-100 dark:border-zinc-900 h-20' 
          : 'bg-white dark:bg-black h-24'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Identity: Stacked Luxury Serif Typeface */}
        <div className="flex items-baseline gap-3">
          <a 
            href="/" 
            className="text-2xl md:text-3xl font-serif font-light tracking-[0.2em] uppercase text-zinc-900 dark:text-zinc-50 hover:text-purple-700 dark:hover:text-purple-400 transition-colors duration-300 dynamic-serif"
          >
            demmiz
          </a>
          <span className="hidden sm:inline-block text-[9px] tracking-[0.4em] uppercase font-semibold text-amber-500 dark:text-amber-400/90 [word-spacing:4px]">
            Haute Parfum
          </span>
        </div>

        {/* Center: Avant-Garde Asymmetrical Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.3em] font-medium text-zinc-500 dark:text-zinc-400">
          {navLinks.map((link, index) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-purple-700 dark:hover:text-zinc-100 transition-colors duration-300 relative py-2 group flex items-center gap-0.5"
            >
              <span className="text-[8px] text-amber-500 dark:text-amber-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity absolute -left-4">
                0{index + 1}
              </span>
              {link.label}
              <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-purple-600 dark:bg-amber-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </a>
          ))}
        </nav>

        {/* Right Section: Clean Icon Interface */}
        <div className="flex items-center space-x-3 text-zinc-800 dark:text-zinc-200">
          
          <button className="hover:text-purple-700 dark:hover:text-amber-400 p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300" aria-label="Search">
            <Search className="w-[18px] h-[18px] stroke-[1.1]" />
          </button>

          <button className="hidden sm:block hover:text-purple-700 dark:hover:text-amber-400 p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300" aria-label="Account">
            <User className="w-[18px] h-[18px] stroke-[1.1]" />
          </button>

          {/* Cart Icon with a minimal floating badge indicator */}
          <button className="hover:text-purple-700 dark:hover:text-amber-400 p-2.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300 relative" aria-label="Shopping Cart">
            <ShoppingBag className="w-[18px] h-[18px] stroke-[1.1]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-purple-600 dark:bg-amber-400 rounded-full animate-pulse"></span>
          </button>

          {/* Minimalist Mobile Menu Bar */}
          <button 
            className="md:hidden p-2.5 hover:text-purple-700 dark:hover:text-amber-400 transition-colors ml-1" 
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 stroke-[1.25]" />
          </button>
        </div>

      </div>

      {/* ========================================================================
        Mobile Full Screen Overlay Menu
        ======================================================================== */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white dark:bg-zinc-950 p-8 shadow-[0_0_50px_rgba(0,0,0,0.3)] transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header Controls */}
            <div className="flex items-center justify-between pb-8 border-b border-zinc-100 dark:border-zinc-900">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400">Navigation</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-800 dark:text-zinc-200 hover:text-purple-700 dark:hover:text-amber-400 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5 stroke-[1.25]" />
              </button>
            </div>

            {/* Drawer Links Stack */}
            <nav className="flex flex-col space-y-6 pt-12 text-lg font-serif tracking-wide text-zinc-800 dark:text-zinc-100">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors duration-300 flex items-center justify-between group" 
                  onClick={() => setIsOpen(false)}
                >
                  <span className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-amber-500" />
                </a>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Account links */}
          <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-zinc-400 font-medium">
            <a href="/account" className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>Profile</a>
            <span className="text-zinc-200 dark:text-zinc-800">/</span>
            <a href="/help" className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors" onClick={() => setIsOpen(false)}>Concierge</a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;