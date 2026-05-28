import React from 'react';

const BrandSpotlight = () => {
  return (
    <section className="w-full bg-neutral-950 text-white py-24 px-6 text-center font-sans relative">
      {/* Container to restrict copy width */}
      <div className="max-w-2xl mx-auto space-y-6">
        <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 font-semibold">
          House Spotlight
        </span>
        <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-white">
          Tom Ford Private Blend
        </h2>
        <p className="text-sm text-neutral-400 font-light leading-relaxed tracking-wide max-w-lg mx-auto">
          An extraordinary collection of artisanal scents unconstrained by conventional perfume conventions. Explore our current stock of vaulted batches and rare decants.
        </p>
        <div className="pt-4">
          <button className="bg-white text-neutral-950 px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
            Shop the House
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandSpotlight;