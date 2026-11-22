import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, Heart, MapPin, Phone, MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function Header({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onSelectCategory,
  onNavigateToStore
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", category: "All Collections" },
    { label: "New Arrivals", sectionId: "new-arrivals" },
    { label: "Suits & Kurtis", category: "Embroidered Suits" },
    { label: "Bridal Lehengas", category: "Bridal Lehengas" },
    { label: "Banarasi Sarees", category: "Banarasi Sarees" },
    { label: "Store Visit 📍", sectionId: "store-location" },
  ];

  const handleLinkClick = (link) => {
    setMobileMenuOpen(false);
    if (link.sectionId) {
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.category) {
      onSelectCategory(link.category);
      const el = document.getElementById('collections-grid');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#252525] text-white text-[11px] sm:text-[13px] py-2 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F5A3B7] animate-pulse"></span>
            <span>✨ Festive & Wedding Season Special: Flat 40% Off on Selected Suits & Lehengas</span>
          </div>
          <div className="flex items-center gap-4 text-[#DFE1E3] text-[11px]">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F5A3B7]" />
              Rajwada Shop No. 2, Opp. SBI ATM Gali
            </span>
            <a
              href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=Hello%20Zainab%20Collection,%20I%20want%20to%20inquire%20about%20your%20collection`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5A3B7] hover:underline font-semibold flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-[#DFE1E3]/80 px-4 sm:px-6 lg:px-12 py-3 transition-all duration-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="flex flex-col lg:hidden items-center justify-center p-2 text-[#383838] hover:text-[#F5A3B7] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
            <span className="text-[10px] font-medium tracking-wider uppercase mt-0.5">Menu</span>
          </button>

          {/* Boutique Brand Logo */}
          <a href="#" className="flex flex-col items-center group">
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl lg:text-3xl font-luxury font-bold tracking-[0.25em] text-[#252525] group-hover:text-[#F5A3B7] transition-colors">
                ZAINAB
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#8A8A8A] font-medium uppercase -mt-0.5">
              COLLECTION • RAJWADA
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleLinkClick(link)}
                className="text-[14px] xl:text-[15px] font-medium text-[#484848] hover:text-[#F5A3B7] tracking-wide transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F5A3B7] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4 text-[#383838]">
            {/* Search */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 hover:text-[#F5A3B7] hover:bg-[#FAF5F7] rounded-full transition-all"
              aria-label="Search collection"
              title="Search collection"
            >
              <Search className="w-5 h-5 sm:w-5 sm:h-5" />
            </button>

            {/* Wishlist */}
            <button
              type="button"
              onClick={onOpenWishlist}
              className="p-2 hover:text-[#F5A3B7] hover:bg-[#FAF5F7] rounded-full transition-all relative"
              aria-label="View Wishlist"
              title="View Wishlist"
            >
              <Heart className="w-5 h-5 sm:w-5 sm:h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#F5A3B7] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-scale">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Bag */}
            <button
              type="button"
              onClick={onOpenCart}
              className="p-2 hover:text-[#F5A3B7] hover:bg-[#FAF5F7] rounded-full transition-all relative"
              aria-label="View Shopping Bag"
              title="View Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 sm:w-5 sm:h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#252525] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Quick Order button */}
            <a
              href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=Hello%20Zainab%20Collection,%20I%20am%20interested%20in%20visiting%20your%20shop%20at%20Rajwada`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-fade-in">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div>
                <h3 className="font-luxury font-bold text-lg tracking-wider text-[#252525]">ZAINAB</h3>
                <p className="text-[10px] text-gray-500 tracking-widest uppercase">COLLECTION • RAJWADA</p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-2">Navigation</p>
                {navLinks.map((link, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleLinkClick(link)}
                    className="w-full text-left py-2.5 px-3 rounded-lg text-gray-700 hover:bg-[#F5E0E5]/50 hover:text-[#252525] font-medium transition-colors text-sm flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-gray-400 text-xs">→</span>
                  </button>
                ))}
              </div>

              {/* Shop Address Details in Drawer */}
              <div className="mt-6 pt-5 border-t border-gray-100 space-y-3 bg-[#FAF5F7] p-4 rounded-xl">
                <div className="flex items-start gap-2.5 text-xs text-gray-700">
                  <MapPin className="w-4 h-4 text-[#F5A3B7] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-gray-900">Rajwada Store</strong>
                    <p className="text-gray-600 leading-relaxed text-[11px] mt-0.5">
                      State Bank ke ATM 🏧 ke Samne wali gali, Ground Floor, Shop No. 2, Rajwada, Indore
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-700">
                  <Phone className="w-4 h-4 text-[#F5A3B7] shrink-0" />
                  <a href={`tel:${SHOP_INFO.phone}`} className="hover:underline font-medium text-gray-800">
                    {SHOP_INFO.phone}
                  </a>
                </div>

                <a
                  href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=Hello%20Zainab%20Collection`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 rounded-lg text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
