import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye, Star, MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function ProductCard({
  product,
  isLiked,
  onToggleWishlist,
  onAddToCart,
  onQuickView
}) {
  const [isHover, setHover] = useState(false);
  const [rating, setRating] = useState(product.rating || 5);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    const msg = `Hello Zainab Collection! I want to order/inquire about: *${product.title}* (Code: ${product.id}) - Price: ₹${product.price.toLocaleString('en-IN')}. Is this available at your Rajwada shop?`;
    window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className="flex flex-col relative text-[#383838] transition-all duration-300 w-full group bg-white rounded-2xl overflow-hidden border border-transparent hover:border-[#F5A3B7]/30 hover:shadow-xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Product Image Box */}
      <div
        className="relative w-full aspect-[3/4] overflow-hidden bg-[#FAF5F7] cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.isNew && (
            <span className="bg-[#252525] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              NEW
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-[#F5A3B7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Heart Icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute right-3 top-3 p-2 rounded-full bg-white/90 backdrop-blur-xs transition-all duration-200 z-20 shadow-sm ${
            isHover || isLiked ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isLiked
                ? "text-[#F5A3B7] fill-[#F5A3B7]"
                : "text-gray-400 hover:text-[#F5A3B7]"
            }`}
          />
        </button>

        {/* Quick View Button on Hover */}
        <div className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-300 z-10 ${
          isHover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 bg-white/95 hover:bg-white text-gray-800 text-xs font-semibold py-2 px-3 rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-[#F5A3B7]" />
            <span>Quick View</span>
          </button>
          
          <button
            type="button"
            onClick={handleWhatsAppOrder}
            title="Inquire on WhatsApp"
            className="bg-[#25D366] hover:bg-[#20ba59] text-white p-2 rounded-lg shadow-md transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex flex-col p-4 gap-1.5 flex-1 justify-between">
        <div className="space-y-1">
          {/* Category */}
          <span className="text-[11px] font-semibold tracking-wider text-[#8A8A8A] uppercase">
            {product.category}
          </span>

          {/* Title */}
          <h4
            onClick={() => onQuickView(product)}
            className="font-medium text-[15px] sm:text-[16px] text-[#252525] group-hover:text-[#F5A3B7] transition-colors cursor-pointer line-clamp-1"
          >
            {product.title}
          </h4>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex text-[#FFA500]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= rating ? "fill-[#FFA500]" : "text-gray-300"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setRating(star);
                  }}
                />
              ))}
            </div>
            <span className="text-[11px] text-[#8A8A8A]">
              ({product.reviewsCount || 24})
            </span>
          </div>

          {/* Short description */}
          <p className="text-[#697586] text-xs line-clamp-2 leading-relaxed">
            {product.info}
          </p>
        </div>

        {/* Pricing & Add to Bag */}
        <div className="pt-3 border-t border-gray-100 space-y-2.5">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg font-bold text-[#252525]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="w-full bg-[#252525] hover:bg-[#111111] text-white py-2.5 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#F5A3B7]" />
            <span>Add to bag</span>
          </button>
        </div>
      </div>
    </div>
  );
}
