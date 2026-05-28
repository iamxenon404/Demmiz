import React from 'react';

const CollectionsGrid = () => {
  const collections = [
    {
      title: "Niche Masterpieces",
      tagline: "Rare artisanal houses",
      link: "/shop?category=niche",
      image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&q=80&w=800",
      gridClass: "md:col-span-2 md:h-[500px]"
    },
    {
      title: "Hand-Poured Decants",
      tagline: "Sample before committing",
      link: "/decants",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
      gridClass: "md:col-span-1 md:h-[500px]"
    },
    {
      title: "Designer Privé",
      tagline: "Exclusive luxury lines",
      link: "/shop?category=prive",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&q=80&w=800",
      gridClass: "md:col-span-1 md:h-[400px]"
    },
    {
      title: "Vaulted & Rare",
      tagline: "Discontinued batch drops",
      link: "/shop?category=rare",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
      gridClass: "md:col-span-2 md:h-[400px]"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:px-12 font-sans">
      
      {/* Editorial Header */}
      <div className="text-center md:text-left mb-12">
        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium block mb-2">
          Curated Catalogues
        </span>
        <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 uppercase tracking-wide">
          Shop By Curation
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((col, index) => (
          <a
            key={index}
            href={col.link}
            className={`group relative w-full h-[350px] overflow-hidden bg-neutral-900 flex items-end p-6 md:p-8 ${col.gridClass}`}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0 z-0">
              <img
                src={col.image}
                alt={col.title}
                className="w-full h-full object-cover object-center opacity-75 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Dark linear gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
            </div>

            {/* Collection Metadata */}
            <div className="relative z-10 w-full flex justify-between items-end">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-light block mb-1">
                  {col.tagline}
                </span>
                <h3 className="text-xl font-serif text-white uppercase tracking-wide">
                  {col.title}
                </h3>
              </div>
              
              {/* Minimalist Arrow CTA */}
              <div className="text-white border border-white/30 rounded-full p-2 group-hover:bg-white group-hover:text-neutral-950 transition-all duration-300 transform group-hover:translate-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CollectionsGrid;