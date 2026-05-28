import React from 'react';

const Reviews = () => {
  const sampleReviews = [
    { id: 1, user: "Marcus V.", text: "Batch code verified perfectly. Sillage and longevity are incredible. Absolute lifesaver for rare extraits.", rating: "★★★★★" },
    { id: 2, user: "Elena R.", text: "The 5ml decants are beautifully packaged and labeled. Perfect way to test out heavy niche profiles before dropping massive cash.", rating: "★★★★★" },
    { id: 3, user: "Julian K.", text: "Fast shipping and flawless execution. It is incredibly hard to find authentic resellers who take temperature control seriously.", rating: "★★★★★" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:px-12 font-sans">
      <div className="text-center mb-12">
        <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-medium block mb-2">
          Collector Feedback
        </span>
        <h2 className="text-2xl font-serif text-neutral-900 uppercase tracking-wide">
          Verified Authentication Reviews
        </h2>
      </div>

      {/* Review Box Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleReviews.map((rev) => (
          <div key={rev.id} className="border border-neutral-100 bg-white p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="text-amber-500 text-xs tracking-wider mb-3">{rev.rating}</div>
              <p className="text-xs text-neutral-600 leading-relaxed italic">"{rev.text}"</p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-800">{rev.user}</span>
              <span className="text-[10px] uppercase text-emerald-600 font-medium tracking-wider flex items-center gap-1">
                ✓ Verified Buyer
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;