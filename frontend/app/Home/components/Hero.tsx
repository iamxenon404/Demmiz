import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center bg-neutral-900 overflow-hidden font-sans">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1920"
          alt="Luxury perfume bottle on a minimalist background"
          className="w-full h-full object-cover object-center opacity-40 scaling-effect"
        />
        {/* Soft dark vignette to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/70 via-neutral-950/40 to-neutral-950/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 flex flex-col items-center">
        
        {/* Subtitle Accent */}
        <span className="text-xs uppercase tracking-[0.3em] text-neutral-300 font-medium mb-4 block animate-fade-in">
          The Art of Olfaction
        </span>

        {/* Main Luxury Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-wide uppercase leading-tight max-w-3xl">
          Scents That Define <br />
          <span className="italic font-light text-neutral-200 lowercase">your</span> Identity
        </h1>

        {/* Short Editorial Description */}
        <p className="mt-6 text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed font-light tracking-wide">
          Discover a curated archive of authentic luxury fragrances, hard-to-find niche house bottles, and exclusive decant samples. 
        </p>

        {/* Double Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            href="/shop"
            className="w-full sm:w-auto bg-white text-neutral-950 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 text-center"
          >
            Explore Collection
          </a>
          <a
            href="/decants"
            className="w-full sm:w-auto bg-transparent text-white border border-white/40 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
          >
            Browse Samples
          </a>
        </div>
      </div>

      {/* Bottom Subtle Trust Badges */}
      <div className="absolute bottom-6 left-0 w-full z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">
          <div className="flex items-center gap-2">
            <span>✓ 100% Verified Authentic</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓ Vault-Sourced Niche Houses</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✓ Hand-Poured Decants Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;