"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-black text-zinc-800 dark:text-zinc-300 font-sans border-t border-zinc-100 dark:border-zinc-900 mt-32 transition-colors duration-300">
      
      {/* ========================================================================
        Top Section: Large Brand Impact & Asymmetric Newsletter
        ======================================================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start border-b border-zinc-100 dark:border-zinc-900">
        
        {/* Left Side: Editorial Typography Logo */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <h3 
              className="text-4xl md:text-5xl font-normal tracking-wide lowercase text-zinc-900 dark:text-zinc-50 transition-colors"
              style={{ fontFamily: "'Playfair Display', 'Didot', 'Bodoni MT', serif", fontStyle: 'italic' }}
            >
              demmiz
            </h3>
            <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-amber-500 dark:text-amber-400 mt-3 block">
              Scent Hub
            </span>
          </div>
          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed tracking-wide font-light">
            Curators of exceptional, rare olfactory masterpieces. Specializing in authentic luxury perfume distributions, archive reselling, and private decants.
          </p>
        </div>
        
        {/* Right Side: Brutalist Minimal Newsletter Form */}
        <div className="lg:col-span-7 lg:pl-12 w-full">
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-zinc-900 dark:text-zinc-100 font-bold mb-3">
            / the olfactory club
          </h4>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light tracking-wide mb-6 max-w-md">
            Gain immediate entry to private sales, vintage bottle drops, and receive a <span className="text-purple-700 dark:text-amber-400 font-medium">10% pricing adjustment</span> on your initial procurement.
          </p>
          
          <form className="flex w-full max-w-xl group relative" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-800 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-purple-700 dark:focus:border-amber-400 transition-colors tracking-wide font-light"
              required
            />
            <button 
              type="submit" 
              className="absolute right-0 bottom-0 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-900 dark:text-zinc-100 hover:text-purple-700 dark:hover:text-amber-400 transition-colors flex items-center gap-1 group"
            >
              Request Access
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>

      {/* ========================================================================
        Middle Section: Clean Asymmetric Navigation Matrix
        ======================================================================== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        
        {/* Directory 01 */}
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold mb-5 font-mono">01 / Index</h5>
          <ul className="space-y-3 text-[13px] tracking-wide font-light text-zinc-500 dark:text-zinc-400">
            <li><a href="/shop" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">All Fragrances</a></li>
            <li><a href="/brands" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">New Arrivals</a></li>
            <li><a href="/decants" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">Best Sellers</a></li>
            <li><a href="/samples" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">Decants & Samples</a></li>
          </ul>
        </div>

        {/* Directory 02 */}
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold mb-5 font-mono">02 / Maison</h5>
          <ul className="space-y-3 text-[13px] tracking-wide font-light text-zinc-500 dark:text-zinc-400">
            <li><a href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">Our Story</a></li>
            <li><a href="/authenticity" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">Authenticity Guarantee</a></li>
            <li><a href="/journal" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">The Scent Journal</a></li>
          </ul>
        </div>

        {/* Directory 03 */}
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold mb-5 font-mono">03 / Concierge</h5>
          <ul className="space-y-3 text-[13px] tracking-wide font-light text-zinc-500 dark:text-zinc-400">
            <li><a href="/contact" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">Contact Support</a></li>
            <li><a href="/shipping" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">Shipping & Delivery</a></li>
            <li><a href="/returns" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">Returns & Exchanges</a></li>
            <li><a href="/faq" className="hover:text-zinc-900 dark:hover:text-white transition-colors relative block py-0.5">FAQs</a></li>
          </ul>
        </div>

        {/* Directory 04 */}
        <div>
          <h5 className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold mb-5 font-mono">04 / Synergy</h5>
          <ul className="space-y-3 text-[13px] tracking-wide font-light text-zinc-500 dark:text-zinc-400">
            <li><a href="https://instagram.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 py-0.5" target="_blank" rel="noreferrer">Instagram <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
            <li><a href="https://tiktok.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 py-0.5" target="_blank" rel="noreferrer">TikTok <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
            <li><a href="https://pinterest.com" className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1 py-0.5" target="_blank" rel="noreferrer">Pinterest <ArrowUpRight className="w-3 h-3 opacity-60" /></a></li>
          </ul>
        </div>

      </div>

      {/* ========================================================================
        Bottom Section: Sharp Minimalist Legal & Trust Frame
        ======================================================================== */}
      <div className="border-t border-zinc-100 dark:border-zinc-900 text-zinc-400 dark:text-zinc-500 text-[11px] font-light tracking-wider py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-mono">
            &copy; {new Date().getFullYear()} DEMMIZ HAUTE PARFUMERIE. ALL RIGHTS RESERVED.
          </div>
          
          {/* Trust Matrix Line Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-zinc-500 dark:text-zinc-400 text-[9px] uppercase tracking-[0.2em] font-medium">
            <span className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors">SECURE CHECKOUT</span>
            <span className="text-zinc-200 dark:text-zinc-800 font-light">/</span>
            <span className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors">BUYER PROTECTED</span>
            <span className="text-zinc-200 dark:text-zinc-800 font-light">/</span>
            <span className="hover:text-purple-700 dark:hover:text-amber-400 transition-colors">INSURED SHIPPING</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;