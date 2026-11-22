import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ShieldCheck, Scissors, Sparkles } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function StoreLocation() {
  return (
    <section id="store-location" className="py-16 bg-[#FAF5F7] border-y border-[#DFE1E3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full text-xs font-bold text-[#F5A3B7] tracking-wider uppercase shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Visit & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#222222]">
            Visit Our Boutique in Rajwada
          </h2>
          <p className="text-sm sm:text-base text-[#697586]">
            Experience luxury fabrics in person with spacious trial rooms, custom alterations, and personal bridal styling.
          </p>
        </div>

        {/* Main Store Highlight Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Store Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Shop Name & Exact Address Tag */}
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest text-[#F5A3B7] uppercase block">
                Official Retail Store
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#252525]">
                {SHOP_INFO.name}
              </h3>
              
              {/* Highlighted Address Box */}
              <div className="bg-[#FAF5F7] border-l-4 border-[#F5A3B7] p-4 sm:p-5 rounded-r-2xl space-y-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-xs text-[#F5A3B7] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                      Exact Address & Landmark:
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-[15px] font-medium leading-relaxed mt-1">
                      <span className="font-bold text-[#252525]">Rajwada</span>, State Bank ke ATM 🏧 ke Samne wali gali, <span className="font-bold text-[#252525]">Ground Floor, Shop No. 2</span>, Indore (M.P.)
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Landmark: Opp. State Bank of India ATM Gali, Rajwada Market
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-2xl">
                <div className="p-2.5 bg-white rounded-xl shadow-xs text-gray-700">
                  <Clock className="w-5 h-5 text-[#F5A3B7]" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Store Timings</span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">
                    11:00 AM – 9:30 PM (All 7 Days)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-2xl">
                <div className="p-2.5 bg-white rounded-xl shadow-xs text-gray-700">
                  <Phone className="w-5 h-5 text-[#F5A3B7]" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 block">Direct Store Call</span>
                  <a href={`tel:${SHOP_INFO.phone}`} className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-[#F5A3B7]">
                    {SHOP_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Store In-House Perks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Scissors className="w-4 h-4 text-[#F5A3B7] shrink-0" />
                <span>Custom Alterations</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <ShieldCheck className="w-4 h-4 text-[#F5A3B7] shrink-0" />
                <span>100% Genuine Fabrics</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <Sparkles className="w-4 h-4 text-[#F5A3B7] shrink-0" />
                <span>Trial Room Available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={SHOP_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-3 bg-[#252525] hover:bg-[#111111] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <Navigation className="w-4 h-4 text-[#F5A3B7]" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=Hello%20Zainab%20Collection,%20I%20am%20coming%20to%20your%20shop%20at%20Rajwada%20Shop%20No.%202`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Location</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Showcase of Rajwada Store */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                alt="Zainab Collection Rajwada Boutique"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <div className="text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5A3B7]">
                    Rajwada Boutique
                  </span>
                  <p className="text-sm font-bold">
                    Extensive Collection of 1000+ Ready & Unstitched Suits
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-grid of in-store experience */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#FAF5F7] rounded-xl text-center">
                <span className="text-lg font-bold text-[#252525] block">Instant</span>
                <span className="text-[11px] text-gray-600">Fitting & Alterations</span>
              </div>
              <div className="p-3 bg-[#FAF5F7] rounded-xl text-center">
                <span className="text-lg font-bold text-[#252525] block">Wholesale</span>
                <span className="text-[11px] text-gray-600">& Retail Prices</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
