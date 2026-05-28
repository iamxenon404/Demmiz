import React from 'react';

const DecantExperience = () => {
  return (
    <section className="bg-neutral-50 py-20 px-6 md:px-12 font-sans border-y border-neutral-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Media Grid Placeholder */}
        <div className="bg-neutral-200 aspect-video md:aspect-square w-full flex items-center justify-center">
          <span className="text-xs text-neutral-400">Educational Video / Visual Asset Placeholder</span>
        </div>

        {/* Right: Explanatory Copy Framework */}
        <div className="space-y-6 max-w-md mx-auto md:mx-0">
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold block">
            Sampling Redefined
          </span>
          <h2 className="text-3xl font-serif text-neutral-900 uppercase tracking-wide leading-snug">
            The Decant Experience
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Committing to a full $300 luxury bottle blindly is a gamble. Our custom decanting process lets you sample authentic juice on your own skin over time.
          </p>
          
          {/* Micro Step Callouts */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
            <div>
              <span className="font-serif text-lg text-neutral-900 block">01</span>
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider block mt-1">2ml Atomizer</span>
            </div>
            <div>
              <span className="font-serif text-lg text-neutral-900 block">02</span>
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider block mt-1">5ml Travel</span>
            </div>
            <div>
              <span className="font-serif text-lg text-neutral-900 block">03</span>
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider block mt-1">10ml Decant</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DecantExperience;