import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onAddToCart
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-[#FAF5F7]">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#F5A3B7] fill-[#F5A3B7]" />
            <h3 className="font-serif font-bold text-lg text-gray-900">Your Saved Wishlist</h3>
            <span className="text-xs bg-[#F5A3B7] text-white px-2 py-0.5 rounded-full font-bold">
              {wishlistItems.length}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {wishlistItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FAF5F7] text-gray-400 flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#F5A3B7]" />
            </div>
            <h4 className="text-lg font-bold font-serif text-gray-900">
              No saved items yet
            </h4>
            <p className="text-xs text-gray-500 max-w-xs">
              Tap the heart icon on any suit, lehenga, or saree to save it here for later.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-[#252525] text-white rounded-full text-xs font-semibold hover:bg-black transition-colors"
            >
              Explore Collection
            </button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-gray-100">
            {wishlistItems.map((item) => (
              <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-24 object-cover object-top rounded-xl border border-gray-100"
                />

                <div className="flex-1 space-y-1">
                  <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">
                    {item.title}
                  </h4>
                  <span className="text-xs text-gray-500 block">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-[#252525] block">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onAddToCart(item);
                        onRemoveWishlist(item.id);
                      }}
                      className="px-3.5 py-1.5 bg-[#252525] hover:bg-black text-white text-[11px] font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#F5A3B7]" />
                      <span>Move to Bag</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onRemoveWishlist(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
