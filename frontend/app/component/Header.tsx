import React from 'react';

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-neutral-900 text-neutral-100 text-xs py-2 px-4 text-center tracking-widest uppercase font-medium">
        Free premium sample with every order over $75 • Fast Worldwide Shipping
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md border-b border-neutral-100 px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-300">
        
        {/* Left Side: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wider font-medium text-neutral-600">
          <a href="/shop" className="hover:text-neutral-900 transition-colors duration-200">Shop All</a>
          <a href="/brands" className="hover:text-neutral-900 transition-colors duration-200">Brands</a>
          <a href="/decants" className="hover:text-neutral-900 transition-colors duration-200">Decants & Samples</a>
          <a href="/about" className="hover:text-neutral-900 transition-colors duration-200">Our Story</a>
        </nav>

        {/* Mobile Menu Icon (Hamburger Placeholder) */}
        <button className="md:hidden text-neutral-800 p-1 focus:outline-none" aria-label="Open Menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Center: Brand Logo */}
        <div className="text-center">
          <a href="/" className="text-2xl md:text-3xl font-serif tracking-widest font-bold uppercase text-neutral-900 hover:opacity-90 transition-opacity">
            DEMMIZ
          </a>
          <span className="block text-[9px] tracking-[0.25em] uppercase font-light text-neutral-400 mt-0.5">
            Haute Parfumerie
          </span>
        </div>

        {/* Right Side: Utility Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 text-neutral-800">
          {/* Search Icon button */}
          <button className="hover:text-neutral-500 transition-colors p-1" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
            </svg>
          </button>

          {/* Account/User Icon button */}
          <button className="hidden sm:block hover:text-neutral-500 transition-colors p-1" aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>

          {/* Shopping Bag Icon button */}
          <button className="hover:text-neutral-500 transition-colors p-1 relative" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {/* Cart Count Badge */}
            <span className="absolute -top-1 -right-1.5 bg-neutral-900 text-white font-sans text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;