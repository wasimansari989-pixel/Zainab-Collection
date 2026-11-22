import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';
import { SlidersHorizontal } from 'lucide-react';

export default function CollectionsGrid({
  products,
  selectedCategory,
  onSelectCategory,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  const [sortBy, setSortBy] = useState("featured");

  const filtered = products.filter((p) => {
    if (selectedCategory === "All Collections") return true;
    return p.category === selectedCategory;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <section id="collections-grid" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-bold tracking-widest text-[#F5A3B7] uppercase block">
            Curated Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#222222]">
            Explore All Collections
          </h2>
          <p className="text-sm text-[#697586] max-w-xl mx-auto">
            From regal bridal lehengas to everyday cotton suits, handpicked for style, comfort, and festive brilliance.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#252525] text-white shadow-md scale-105"
                  : "bg-[#FAF5F7] text-gray-700 hover:bg-[#F5E0E5] hover:text-[#252525]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count & Sorting Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-gray-100 mb-8">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Showing <strong className="text-gray-900">{sorted.length}</strong> exclusive designs in <span className="text-[#F5A3B7] font-semibold">{selectedCategory}</span>
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF5F7] border border-gray-200 text-gray-800 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#F5A3B7]"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {sorted.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              isLiked={wishlistIds.includes(item.id)}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
