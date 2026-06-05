"use client";

import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const Reviews = () => {
  const sampleReviews = [
    { 
      id: 1, 
      user: "Marcus V.", 
      text: "Batch code verified perfectly. Sillage and longevity are incredible. An absolute lifesaver for rare vintage extraits.", 
      context: "Verified Allocation" 
    },
    { 
      id: 2, 
      user: "Elena R.", 
      text: "The 5ml decants are beautifully packaged and labeled. Perfect way to test out heavy niche profiles before dropping massive cash.", 
      context: "Decant Set Buyer" 
    },
    { 
      id: 3, 
      user: "Julian K.", 
      text: "Fast shipping and flawless execution. It is incredibly hard to find authentic resellers who take temperature control seriously.", 
      context: "Vault Collector" 
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-black px-6 py-24 md:px-12 transition-colors duration-500 font-sans border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================
          Section Header Alignment
          ======================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-100 dark:border-zinc-900 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-700 dark:bg-amber-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-purple-700 dark:text-amber-400 font-bold">
                Collector Feedback
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-zinc-900 dark:text-zinc-50 uppercase tracking-tight">
              Provenance Ledger
            </h2>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-xs font-light mt-4 md:mt-0 leading-relaxed font-mono">
            // Real-time authenticity statements from verified digital catalog accounts.
          </p>
        </div>

        {/* ========================================================================
          Architectural Review Grid Matrix
          ======================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleReviews.map((rev) => (
            <div 
              key={rev.id} 
              className="group border border-zinc-200/60 dark:border-zinc-900 bg-zinc-50/30 dark:bg-zinc-950/20 p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white dark:hover:bg-zinc-900/40 hover:border-purple-700 dark:hover:border-amber-400/60 hover:shadow-xl"
            >
              <div>
                {/* Clean Star Metric Assembly */}
                <div className="flex items-center gap-1 text-purple-700 dark:text-amber-400 mb-6 transition-transform duration-300 group-hover:translate-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-0" />
                  ))}
                </div>

                {/* Review Narrative Block */}
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light tracking-wide">
                  "{rev.text}"
                </p>
              </div>

              {/* Collector Metadata Footer */}
              <div className="mt-8 pt-5 border-t border-zinc-200/60 dark:border-zinc-900 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wide">
                    {rev.user}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 tracking-wider mt-0.5 uppercase">
                    {rev.context}
                  </span>
                </div>

                {/* Micro Verified Anchor Emblem */}
                <div className="flex items-center gap-1 text-purple-700 dark:text-amber-400 bg-purple-50 dark:bg-zinc-900 px-2.5 py-1 rounded border border-purple-100/40 dark:border-zinc-800">
                  <CheckCircle2 className="w-3 h-3 stroke-[2]" />
                  <span className="text-[8px] font-mono uppercase tracking-[0.15em] font-bold">
                    Verified
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;