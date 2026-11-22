import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function ProductShowcase({
  row = true,
  tag,
  title,
  subtitle,
  description,
  features = [],
  price,
  originalPrice,
  imageUrl,
  onExplore,
  product
}) {
  const handleWhatsApp = () => {
    const msg = `Hello Zainab Collection! I saw the showcase for *${title}* on your website. Could you please share more pictures, available colors and sizes?`;
    window.open(`https://wa.me/${SHOP_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div
          className={`flex flex-col gap-8 lg:gap-14 items-center ${
            row ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          {/* Image Showcase Column */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FAF5F7] group">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              {/* Price Tag Overlay */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/50">
                <span className="text-[10px] uppercase font-bold text-[#F5A3B7] tracking-wider block">
                  Exclusive In-Store Piece
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-[#252525]">
                    ₹{price?.toLocaleString('en-IN')}
                  </span>
                  {originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      ₹{originalPrice?.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>

              {/* Tag Pill */}
              <div className="absolute top-4 right-4 bg-[#252525]/90 text-white text-[11px] font-semibold px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#F5A3B7]" />
                <span>Boutique Edition</span>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Hashtag Tag */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2">
              <span className="text-xs font-bold tracking-widest text-[#F5A3B7] uppercase bg-[#FAF5F7] px-3.5 py-1.5 rounded-full border border-[#F5E0E5]">
                {tag}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#222222] leading-tight">
              {title}
            </h3>

            {subtitle && (
              <p className="text-sm font-semibold text-[#8A8A8A] uppercase tracking-wider">
                {subtitle}
              </p>
            )}

            {/* Description */}
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Features Bullet Points */}
            {features.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-left max-w-lg mx-auto lg:mx-0">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#484848]">
                    <CheckCircle2 className="w-4 h-4 text-[#F5A3B7] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                type="button"
                onClick={() => onExplore(product)}
                className="w-full sm:w-auto px-7 py-3 bg-[#252525] hover:bg-[#111111] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>VIEW PIECE DETAILS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>INQUIRE ON WHATSAPP</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
