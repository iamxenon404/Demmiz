import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 font-sans border-t border-neutral-800 mt-20">
      
      {/* Top Section: Newsletter & Branding */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-neutral-800">
        <div>
          <h3 className="text-xl font-serif tracking-widest text-white uppercase">DEMMIZ</h3>
          <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
            Curators of exceptional fragrances. We specialize in authentic luxury perfume reselling, decants, and rare olfactory masterpieces.
          </p>
        </div>
        
        {/* Newsletter Subscription */}
        <div className="flex flex-col justify-center">
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-3">
            Join the Olfactory Club
          </h4>
          <p className="text-sm text-neutral-400 mb-4">
            Receive exclusive access to rare bottle drops, private sales, and 10% off your first order.
          </p>
          <form className="flex w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-neutral-800 border border-neutral-700 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-neutral-950 px-6 py-2.5 text-xs font-medium uppercase tracking-wider hover:bg-neutral-200 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Middle Section: Links Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1 */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li><a href="/shop" className="hover:text-white transition-colors">All Fragrances</a></li>
            <li><a href="/brands" className="hover:text-white transition-colors">New Arrivals</a></li>
            <li><a href="/decants" className="hover:text-white transition-colors">Best Sellers</a></li>
            <li><a href="/samples" className="hover:text-white transition-colors">Decants & Samples</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Our Brand</h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li><a href="/about" className="hover:text-white transition-colors">Our Story</a></li>
            <li><a href="/authenticity" className="hover:text-white transition-colors">100% Authenticity Guarantee</a></li>
            <li><a href="/journal" className="hover:text-white transition-colors">The Scent Journal</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Client Services</h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li><a href="/contact" className="hover:text-white transition-colors">Contact Support</a></li>
            <li><a href="/shipping" className="hover:text-white transition-colors">Shipping & Delivery</a></li>
            <li><a href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="/faq" className="hover:text-white transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-xs uppercase tracking-widest text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2.5 text-sm text-neutral-400">
            <li><a href="https://instagram.com" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://tiktok.com" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">TikTok</a></li>
            <li><a href="https://pinterest.com" className="hover:text-white transition-colors" target="_blank" rel="noreferrer">Pinterest</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Section: Copyright & Legal */}
      <div className="bg-neutral-950 text-neutral-500 text-xs py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} DEMMIZ Haute Parfumerie. All rights reserved.
          </div>
          
          {/* Trust Indicators / Payment Placeholder */}
          <div className="flex items-center space-x-6 text-neutral-400 tracking-wider text-[10px] uppercase font-medium">
            <span>Secure Checkout</span>
            <span className="text-neutral-700">•</span>
            <span>Buyer Protected</span>
            <span className="text-neutral-700">•</span>
            <span>Insured Shipping</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;