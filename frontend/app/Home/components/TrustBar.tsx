import React from 'react';

const TrustBar = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
      title: "100% Certified Authentic",
      description: "Every bottle is strictly vetted, batch-checked, and sourced directly from verified vaults."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Hand-Poured Decants",
      description: "Sample ultra-luxury fragrances in 2ml, 5ml, or 10ml travel atomizers before buying full retail."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125a1.125 1.125 0 0 0 1.125-1.125V11.25a9 9 0 0 0-9-9H5.375a1.125 1.125 0 0 0-1.125 1.125v1.125m16.5 0.25a9 9 0 0 1-9 9m9-9H18" />
        </svg>
      ),
      title: "Insured Premium Shipping",
      description: "Secure, temperature-controlled packaging ensures your fragrance arrives perfectly preserved."
    }
  ];

  return (
    <section className="bg-white border-b border-neutral-100 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-sm mx-auto">
            <div className="text-neutral-800 mb-3 bg-neutral-50 p-3 rounded-full">
              {item.icon}
            </div>
            <h3 className="text-xs uppercase tracking-widest font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;