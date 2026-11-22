import React, { useState } from 'react';
import { X, Heart, ShoppingBag, MessageCircle, Star, Check, ShieldCheck, Scissors, Truck } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function ProductModal({
  product,
  isOpen,
  onClose,
  isLiked,
  onToggleWishlist,
  onAddToCart
}) {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#F5A3B7');
  const [activeImage, setActiveImage] = useState(product.image);
  const [added, setAdded] = useState(false);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsApp = () => {
    const msg = `Hello Zainab Collection! I want to inquire about: *${product.title}* (Size: ${selectedSize}, Price: ₹${product.price}). Can I see more photos or try it at your Rajwada shop?`;
    window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col md:flex-row animate-fade-in">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-black shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Gallery */}
        <div className="w-full md:w-1/2 bg-[#FAF5F7] p-6 flex flex-col justify-between">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md bg-white">
            <img
              src={activeImage}
              alt={product.title}
              className="w-full h-full object-cover object-top"
            />
            {discountPercent > 0 && (
              <span className="absolute top-3 left-3 bg-[#F5A3B7] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          {/* Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-3 mt-4 justify-center">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img ? 'border-[#F5A3B7] scale-105 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Specs & Ordering */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Category & Title */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5A3B7] block">
                {product.category}
              </span>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mt-1 leading-snug">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-[#FFA500]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < (product.rating || 5) ? 'fill-[#FFA500]' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 font-medium">
                  4.9 ({product.reviewsCount || 35} boutique reviews)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-3 bg-[#FAF5F7] rounded-2xl">
              <span className="text-2xl font-bold text-[#252525]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-xs text-green-600 font-semibold ml-auto">
                In Stock at Rajwada Shop No. 2
              </span>
            </div>

            {/* Fabric Details */}
            <div className="text-xs space-y-1 bg-gray-50 p-3.5 rounded-xl border border-gray-100">
              <p>
                <strong className="text-gray-900">Fabric & Work:</strong>{' '}
                <span className="text-gray-700">{product.fabric}</span>
              </p>
              <p>
                <strong className="text-gray-900">Color Shade:</strong>{' '}
                <span className="text-gray-700">{product.color}</span>
              </p>
              <p>
                <strong className="text-gray-900">Care:</strong>{' '}
                <span className="text-gray-700">Dry Clean Recommended / Gentle Hand Wash</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-600 leading-relaxed">
              {product.description || product.info}
            </p>

            {/* Size Selector */}
            {product.sizes && (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-gray-900">Select Size:</span>
                  <span className="text-[#F5A3B7] cursor-pointer hover:underline">
                    In-Store Alteration Available
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedSize === s
                          ? 'bg-[#252525] text-white shadow-xs'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Swatches */}
            {product.colors && (
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-gray-900 block">Available Colors:</span>
                <div className="flex gap-2">
                  {product.colors.map((c, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedColor(c)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedColor === c ? 'border-[#252525] scale-110 shadow-xs' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: c }}
                      title={`Color ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* In-Store Assurances */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-gray-600 border-t border-gray-100">
              <span className="flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-[#F5A3B7]" />
                Free In-Store Alteration
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5A3B7]" />
                100% Genuine Quality
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-gray-100 space-y-2.5">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-[#252525] hover:bg-black text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-[#F5A3B7]" />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#F5A3B7]" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => onToggleWishlist(product)}
                className="p-3 border border-gray-200 hover:border-[#F5A3B7] rounded-xl transition-colors text-gray-600"
                title={isLiked ? "Saved in Wishlist" : "Save to Wishlist"}
              >
                <Heart
                  className={`w-5 h-5 ${
                    isLiked ? 'text-[#F5A3B7] fill-[#F5A3B7]' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire & Reserve on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
