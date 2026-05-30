import React from 'react';

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 font-sans tracking-wide">
      {/* ========================================================================
        Top Announcement Bar 
        Luxury Colorway: Deep Purple Base with Metallic Gold Text and Micro-Border
        ========================================================================
      */}
      <div className="bg-purple-950 text-amber-400 dark:bg-black dark:text-amber-500 border-b border-amber-500/20 text-[11px] py-2.5 px-4 text-center tracking-[0.2em] uppercase font-semibold transition-colors duration-300">
        Buy 3 or more of the same piece and get 10% off your order!
      </div>

      {/* ========================================================================
        Main Navigation Bar 
        Glassmorphism Layer interacting with Light/Dark Theme states
        ========================================================================
      */}
      <div className="bg-white/80 dark:bg-purple-950/80 backdrop-blur-xl border-b border-purple-900/5 dark:border-amber-500/10 px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-300">
        
        {/* Left Side: Editorial Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-purple-900 dark:text-purple-200">
          <a href="/shop" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300">
            Shop All
          </a>
          <a href="/brands" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300">
            Brands
          </a>
          <a href="/decants" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300">
            Decants & Samples
          </a>
          <a href="/about" className="hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all after:duration-300">
            Our Story
          </a>
        </nav>

        {/* Mobile Menu Trigger (Hamburger) */}
        <button className="md:hidden text-purple-950 dark:text-amber-400 p-1 focus:outline-none hover:opacity-70 transition-opacity" aria-label="Open Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* ========================================================================
          Center: Brand Identity Stack
          Typographic centerpiece using deliberate spacing configurations
          ========================================================================
        */}
        <div className="text-center flex flex-col items-center">
          <a href="/" className="text-2xl md:text-3xl font-serif tracking-[0.3em] font-black uppercase text-purple-950 dark:text-white hover:text-amber-500 dark:hover:text-amber-400 transition-colors duration-300">
            DEMMIZ
          </a>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-1 h-[1px] bg-amber-500/40"></span>
            <span className="block text-[8px] tracking-[0.35em] uppercase font-semibold text-amber-600 dark:text-amber-400">
              HAUTE PARFUMERIE
            </span>
            <span className="w-1 h-[1px] bg-amber-500/40"></span>
          </div>
        </div>

        {/* Right Side: High-contrast Utility Controls */}
        <div className="flex items-center space-x-3 md:space-x-5 text-purple-950 dark:text-purple-200">
          
          {/* Action: Search */}
          <button className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-1.5 rounded-full hover:bg-purple-500/5" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
            </svg>
          </button>

          {/* Action: Account Profile */}
          <button className="hidden sm:block hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-1.5 rounded-full hover:bg-purple-500/5" aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>

          {/* Action: Cart with high-contrast Gold Counter Badge */}
          <button className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-1.5 relative rounded-full hover:bg-purple-500/5" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span className="absolute -top-0.5 -right-0.5 bg-amber-500 text-purple-950 dark:bg-amber-400 dark:text-black font-sans text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold tracking-normal border border-white dark:border-purple-950">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;