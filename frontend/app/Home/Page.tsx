import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CollectionsGrid from './components/CollectionsGrid';
import TrendingProducts from './components/TrendingProducts';
import DecantExperience from './components/DecantExperience';
import BrandSpotlight from './components/BrandSpotlight';
import Reviews from './components/Reviews';

const Homepage = () => {
  return (
    <>
      {/* 1. Hero / Main Visual Section */}
      <Hero />
      
      {/* 2. Value Propositions (Authenticity, Decants, Shipping) */}
      <TrustBar />
      
      {/* 3. Visual Collections Grid (Niche, Samples, Rare) */}
      <CollectionsGrid />
      
      {/* 4. Product Display Carousel/Grid (Trending Inventory) */}
      <TrendingProducts />
      
      {/* 5. Educational / Explanatory Section (The Sample Process) */}
      <DecantExperience />
      
      {/* 6. High-Impact Editorial Banner (Brand Focus) */}
      <BrandSpotlight />
      
      {/* 7. Social Proof & Trust Badges (User Reviews) */}
      <Reviews />
    </>
  );
};

export default Homepage;