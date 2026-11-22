import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, Send, Check } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function Footer({ onNavigateToSection }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer
      className="text-white text-sm"
      style={{
        backgroundImage:
          "linear-gradient(to right, #252525 0%, #3A3A3A 48%, #323232 100%)",
      }}
    >
      {/* Top Newsletter & VIP Drops Bar */}
      <div className="border-b border-[#555555]/40 py-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-xl sm:text-2xl font-bold font-serif text-white tracking-wide">
              Join Zainab Collection VIP Club
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Get secret festive discount coupons & early access to new wedding drops at our Rajwada store.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full md:w-auto flex flex-col sm:flex-row gap-2.5 max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#F5A3B7] w-full sm:w-64"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#F5A3B7] hover:bg-[#e78aa1] text-[#252525] font-bold text-xs rounded-full transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shrink-0"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="py-14 px-4 sm:px-6 lg:px-12 border-b border-[#555555]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Store Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-1">
              <span className="text-2xl font-luxury font-bold tracking-[0.2em] text-white">
                ZAINAB
              </span>
              <p className="text-[10px] tracking-[0.3em] text-[#F5A3B7] uppercase font-semibold">
                COLLECTION • RAJWADA
              </p>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm">
              Your trusted destination for premium ladies designer wear in Indore. Specializing in bridal lehengas, zari embroidered suits, banarasi sarees, and custom boutique tailoring.
            </p>

            {/* Direct Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${SHOP_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5A3B7] text-white hover:text-black flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href={SHOP_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all hover:scale-110"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#F5A3B7]">
              Categories
            </h5>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#collections-grid" className="hover:text-white transition-colors">Embroidered Suits</a></li>
              <li><a href="#collections-grid" className="hover:text-white transition-colors">Bridal Lehengas</a></li>
              <li><a href="#collections-grid" className="hover:text-white transition-colors">Banarasi Sarees</a></li>
              <li><a href="#collections-grid" className="hover:text-white transition-colors">Designer Kurtis</a></li>
              <li><a href="#collections-grid" className="hover:text-white transition-colors">Party Wear Gowns</a></li>
              <li><a href="#collections-grid" className="hover:text-white transition-colors">Unstitched Fabrics</a></li>
            </ul>
          </div>

          {/* Store Location & Timings Prominent Box */}
          <div className="lg:col-span-5 space-y-3 bg-white/5 p-5 rounded-2xl border border-white/10">
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#F5A3B7] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Store Address & Contact</span>
            </h5>

            <div className="space-y-2.5 text-xs text-gray-200">
              <div className="flex items-start gap-2.5">
                <span className="text-[#F5A3B7] font-bold text-sm">📍</span>
                <div>
                  <strong className="text-white block font-semibold text-sm">ZAINAB Collection</strong>
                  <p className="text-gray-300 leading-relaxed mt-0.5">
                    Rajwada, State Bank ke ATM 🏧 ke Samne wali gali, Ground Floor, Shop No. 2, Indore (M.P.)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#F5A3B7] shrink-0" />
                <span>Open All 7 Days: 11:00 AM – 9:30 PM</span>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <Phone className="w-3.5 h-3.5 text-[#F5A3B7] shrink-0" />
                <a href={`tel:${SHOP_INFO.phone}`} className="hover:text-white font-medium">
                  {SHOP_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-gray-300">
                <Mail className="w-3.5 h-3.5 text-[#F5A3B7] shrink-0" />
                <span>{SHOP_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SHOP_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[11px] font-semibold text-[#F5A3B7] hover:underline"
              >
                View on Google Maps & Get Directions →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Payment Modes & Copyright */}
      <div className="py-6 px-4 sm:px-6 lg:px-12 bg-black/40 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">ZAINAB Collection</strong>. Rajwada Shop No. 2, Indore. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-gray-400">
            <span className="bg-white/10 px-2 py-0.5 rounded">UPI</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">PhonePe</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">Google Pay</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">Paytm</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">Debit/Credit Cards</span>
            <span className="bg-white/10 px-2 py-0.5 rounded">Cash at Shop</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
