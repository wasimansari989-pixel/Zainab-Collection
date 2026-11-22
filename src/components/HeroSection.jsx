import React from 'react';
import { MapPin, Sparkles, ShoppingBag, ArrowRight } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function HeroSection({ onExploreClick, onStoreClick }) {
  return (
    <section className="relative w-full min-h-[520px] lg:h-[620px] bg-[#F5E0E5] overflow-hidden flex items-center">
      {/* Decorative floral background aura */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#fde9ed] blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#fbe2e8] blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full px-5 sm:px-10 md:px-16 lg:px-20 py-12 lg:py-0 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Hero Text Column */}
        <div className="lg:col-span-7 text-[#383838] space-y-4 sm:space-y-5 text-center lg:text-left">
          
          {/* Boutique Tag */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-[#DFE1E3]/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A3B7]" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#484848]">
              Rajwada's Premier Ladies Fashion Boutique
            </span>
          </div>

          {/* Main Title matching reference layout */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-[1.15] tracking-tight text-[#222222]">
            DISCOVER YOUR ROYAL GRACE <br className="hidden sm:inline" />
            <span className="text-[#383838] font-normal italic font-serif">with</span> ZAINAB FESTIVE SUITS
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[16px] md:text-[17px] text-[#555555] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Handcrafted zari embroidered salwar suits, bridal party lehengas, pure Banarasi sarees & designer daily wear. Visit our store at Rajwada or order directly via WhatsApp.
          </p>

          {/* Store Address Mini Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-[#484848] font-medium bg-white/60 p-2.5 rounded-lg border border-white/80 max-w-lg mx-auto lg:mx-0">
            <MapPin className="w-4 h-4 text-[#F5A3B7] shrink-0" />
            <span className="truncate">
              <strong>Shop No. 2</strong>, SBI ATM ke Samne wali gali, Rajwada, Indore
            </span>
          </div>

          {/* Call to Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <button
              type="button"
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#252525] hover:bg-[#111111] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>EXPLORE NEW ARRIVALS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onStoreClick}
              className="w-full sm:w-auto px-7 py-3.5 bg-white/90 hover:bg-white text-[#252525] border border-[#252525]/20 hover:border-[#252525] text-sm font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <MapPin className="w-4 h-4 text-[#F5A3B7]" />
              <span>VISIT RAJWADA STORE</span>
            </button>
          </div>

          {/* Quality Assurance Badges */}
          <div className="pt-4 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 text-center border-t border-[#383838]/10">
            <div>
              <p className="text-sm sm:text-base font-bold text-[#252525]">100%</p>
              <p className="text-[10px] sm:text-xs text-[#697586]">Pure Fabrics</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#252525]">1000+</p>
              <p className="text-[10px] sm:text-xs text-[#697586]">Unique Designs</p>
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-[#252525]">In-Store</p>
              <p className="text-[10px] sm:text-xs text-[#697586]">Custom Alterations</p>
            </div>
          </div>

        </div>

        {/* Right Hero Image Column */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 group">
            <img
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
              alt="Zainab Collection Festive Wear Model"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Floating Luxury Tag */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-white/50 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-[#F5A3B7] uppercase block">
                  Featured Festive Drop
                </span>
                <span className="text-sm font-bold text-gray-900 block font-serif">
                  Gul-e-Noor Zari Suit
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Exclusive Silk with Organza Dupatta
                </span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#252525]">₹2,499</span>
                <span className="text-[10px] text-gray-400 line-through block">₹3,999</span>
              </div>
            </div>

            {/* Top Right Floating Badge */}
            <div className="absolute top-4 right-4 bg-[#F5A3B7] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
              NEW DROP
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
