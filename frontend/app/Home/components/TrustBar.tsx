"use client";

import React from 'react';
import { ShieldCheck, Pipette, Truck } from 'lucide-react';

const TrustBar = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 stroke-[1.1]" />,
      title: "100% Certified Authentic",
      description: "Every item is strictly vetted, batch-checked, and sourced directly from private luxury vault allocations."
    },
    {
      icon: <Pipette className="w-5 h-5 stroke-[1.1]" />,
      title: "Hand-Poured Decants",
      description: "Sample ultra-rare extraits in 2ml, 5ml, or 10ml modular atomizers before choosing full size iterations."
    },
    {
      icon: <Truck className="w-5 h-5 stroke-[1.1]" />,
      title: "Insured Premium Shipping",
      description: "Secure, temperature-stabilized protective packaging ensures your profile arrives perfectly uncompromised."
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-black border-y border-zinc-100 dark:border-zinc-900 py-16 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-16">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-start text-left group relative md:pl-6 md:border-l border-zinc-100 dark:border-zinc-900 first:border-0 first:pl-0"
          >
            {/* Structural Icon Element - Pure color logic, no bulky background discs */}
            <div className="text-purple-700 dark:text-amber-400 mb-4 transition-transform duration-300 group-hover:scale-105">
              {item.icon}
            </div>

            {/* Micro Index + Architectural Title */}
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-600 font-bold">
                0{index + 1} //
              </span>
              <h3 className="text-[11px] uppercase tracking-[0.25em] font-bold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
            </div>

            {/* Description Text */}
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed font-light tracking-wide max-w-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;