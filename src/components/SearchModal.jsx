import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function SearchModal({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) {
  const [query, setQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  if (!isOpen) return null;

  const results = products.filter((p) => {
    const matchQuery =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.fabric.toLowerCase().includes(query.toLowerCase()) ||
      p.info.toLowerCase().includes(query.toLowerCase());

    const matchTag = selectedTag ? p.category === selectedTag : true;

    return matchQuery && matchTag;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Search Panel */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[80vh] flex flex-col animate-fade-in">
        
        {/* Search Header */}
        <div className="p-5 border-b border-gray-100 flex items-center gap-3 bg-[#FAF5F7]">
          <Search className="w-5 h-5 text-[#F5A3B7]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search suits, sarees, lehengas, fabrics..."
            className="flex-1 bg-transparent text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-black font-semibold"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-2 overflow-x-auto scrollbar-hidden">
          <span className="text-xs text-gray-400 shrink-0 font-medium">Quick filters:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedTag(selectedTag === cat ? '' : cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors ${
                selectedTag === cat
                  ? 'bg-[#252525] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-gray-100">
          {results.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <p className="text-sm font-semibold text-gray-700">No matching pieces found</p>
              <p className="text-xs text-gray-500">
                Try searching for "silk", "suit", "banarasi", or "lehenga"
              </p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 first:pt-0 flex items-center gap-4 hover:bg-[#FAF5F7] px-3 rounded-2xl cursor-pointer transition-colors group"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-20 object-cover object-top rounded-xl border border-gray-100"
                />

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-bold text-[#F5A3B7] tracking-wider block">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#F5A3B7] transition-colors truncate">
                    {product.title}
                  </h4>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{product.fabric}</p>
                  <span className="text-xs font-bold text-gray-900 mt-1 block">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
