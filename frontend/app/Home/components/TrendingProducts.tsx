import React from 'react';

const TrendingProducts = () => {
  // Placeholder array representing your database products
  const placeholderProducts = [
    { id: 1, brand: "House of Creed", name: "Aventus", type: "Eau de Parfum", price: 365 },
    { id: 2, brand: "Parfums de Marly", name: "Layton", type: "Deteior de Parfum", price: 295 },
    { id: 3, brand: "Tom Ford", name: "Oud Wood", type: "Private Blend", price: 285 },
    { id: 4, brand: "Amouage", name: "Reflection Man", type: "Exceptional Extrait", price: 340 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:px-12 font-sans">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">Curated Inventory</span>
          <h2 className="text-2xl font-serif uppercase tracking-wide text-neutral-900">Trending Scents</h2>
        </div>
        <a href="/shop" className="text-xs uppercase tracking-wider text-neutral-600 hover:text-neutral-900 border-b border-neutral-300 pb-1">
          View All
        </a>
      </div>

      {/* Product Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {placeholderProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer flex flex-col">
            {/* Box Placeholder for Bottle Image */}
            <div className="w-full aspect-[3/4] bg-neutral-100 flex items-center justify-center relative mb-4">
              <span className="text-xs text-neutral-400">Product Image Box</span>
              <div className="absolute top-2 left-2 bg-neutral-900 text-white text-[9px] uppercase tracking-widest px-2 py-1">
                Authentic
              </div>
            </div>

            {/* Product Meta Info */}
            <div className="flex flex-col flex-grow">
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">{product.brand}</span>
              <h3 className="text-sm font-medium text-neutral-900 mt-0.5 group-hover:underline">{product.name}</h3>
              <span className="text-xs text-neutral-500 italic mt-0.5">{product.type}</span>
              <span className="text-sm font-medium text-neutral-900 mt-2">${product.price} USD</span>
            </div>

            {/* Quick Action Button Wrapper */}
            <button className="mt-4 w-full border border-neutral-200 py-2 text-xs uppercase tracking-wider hover:bg-neutral-900 hover:text-white transition-colors duration-200">
              Select Size
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;