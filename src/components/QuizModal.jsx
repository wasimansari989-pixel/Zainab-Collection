import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { SHOP_INFO } from '../data/products';

export default function QuizModal({
  isOpen,
  onClose,
  products,
  onViewProduct
}) {
  const [step, setStep] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [style, setStyle] = useState('');
  const [budget, setBudget] = useState('');

  if (!isOpen) return null;

  const handleReset = () => {
    setStep(1);
    setOccasion('');
    setStyle('');
    setBudget('');
  };

  // Find match based on choices
  const getRecommendation = () => {
    if (style === 'Lehenga' || occasion === 'Bridal / Wedding') {
      return products.find((p) => p.category === 'Bridal Lehengas') || products[3];
    }
    if (style === 'Saree') {
      return products.find((p) => p.category === 'Banarasi Sarees') || products[1];
    }
    if (style === 'Anarkali') {
      return products.find((p) => p.category === 'Party Wear Gowns') || products[4];
    }
    return products[0]; // Gul-e-Noor Suit
  };

  const matchedProduct = getRecommendation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 p-6 sm:p-8 animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#F5A3B7]" />
            <h3 className="font-serif font-bold text-lg text-gray-900">
              Festive Style Finder
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex gap-1.5 my-4">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                s <= step ? 'bg-[#F5A3B7]' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>

        {/* Step 1: Occasion */}
        {step === 1 && (
          <div className="space-y-4 py-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Step 1 of 3</span>
            <h4 className="text-xl font-bold font-serif text-gray-900">
              What occasion are you shopping for?
            </h4>
            <div className="space-y-2.5">
              {[
                { label: 'Wedding / Bridal Special', desc: 'Heavy royal embroidery & lehengas' },
                { label: 'Festive / Eid / Diwali', desc: 'Silk suits, shararas & banarasi sarees' },
                { label: 'Sangeet / Reception Party', desc: 'Flared anarkalis & shimmering tissue' },
                { label: 'Casual / Daily Elegance', desc: 'Pure cambric cotton printed kurti sets' }
              ].map((opt) => (
                <button
                  key={opt.label}
                  type="button"
                  onClick={() => {
                    setOccasion(opt.label);
                    setStep(2);
                  }}
                  className="w-full text-left p-3.5 rounded-2xl border border-gray-200 hover:border-[#F5A3B7] hover:bg-[#FAF5F7] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-gray-800 group-hover:text-black">
                      {opt.label}
                    </strong>
                    <span className="text-xs text-gray-500">{opt.desc}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F5A3B7] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Preferred Silhouette */}
        {step === 2 && (
          <div className="space-y-4 py-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Step 2 of 3</span>
            <h4 className="text-xl font-bold font-serif text-gray-900">
              Which silhouette do you prefer?
            </h4>
            <div className="space-y-2.5">
              {[
                { type: 'Suit', title: 'Embroidered Salwar & Sharara Suit', desc: 'Chanderi or georgette with heavy dupatta' },
                { type: 'Lehenga', title: 'Bridal or Festive Lehenga', desc: 'Velvet or silk with heavy gher' },
                { type: 'Saree', title: 'Banarasi or Organza Saree', desc: 'Timeless handloom drape' },
                { type: 'Anarkali', title: 'Floor Touch Anarkali Gown', desc: 'Voluminous flared festive gown' }
              ].map((opt) => (
                <button
                  key={opt.type}
                  type="button"
                  onClick={() => {
                    setStyle(opt.type);
                    setStep(3);
                  }}
                  className="w-full text-left p-3.5 rounded-2xl border border-gray-200 hover:border-[#F5A3B7] hover:bg-[#FAF5F7] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-gray-800 group-hover:text-black">
                      {opt.title}
                    </strong>
                    <span className="text-xs text-gray-500">{opt.desc}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F5A3B7] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <div className="space-y-4 py-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Step 3 of 3</span>
            <h4 className="text-xl font-bold font-serif text-gray-900">
              What is your approximate budget?
            </h4>
            <div className="space-y-2.5">
              {[
                { val: 'Under ₹2,000', desc: 'Affordable luxury & daily chic' },
                { val: '₹2,000 – ₹4,500', desc: 'Partywear suits & designer sarees' },
                { val: 'Above ₹4,500', desc: 'Heavy bridal lehengas & heritage pieces' }
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => {
                    setBudget(opt.val);
                    setStep(4);
                  }}
                  className="w-full text-left p-3.5 rounded-2xl border border-gray-200 hover:border-[#F5A3B7] hover:bg-[#FAF5F7] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div>
                    <strong className="block text-sm text-gray-800 group-hover:text-black">
                      {opt.val}
                    </strong>
                    <span className="text-xs text-gray-500">{opt.desc}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F5A3B7] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Result Match */}
        {step === 4 && matchedProduct && (
          <div className="space-y-4 py-2 text-center">
            <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
              <Check className="w-3.5 h-3.5" />
              <span>Perfect Match Found!</span>
            </div>

            <h4 className="text-xl font-bold font-serif text-gray-900">
              We Recommend: {matchedProduct.title}
            </h4>

            <div className="w-48 h-60 mx-auto rounded-2xl overflow-hidden shadow-lg border-2 border-[#F5E0E5]">
              <img
                src={matchedProduct.image}
                alt={matchedProduct.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs text-gray-500">{matchedProduct.fabric}</span>
              <p className="text-lg font-bold text-[#252525]">
                ₹{matchedProduct.price.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Ready for trial & immediate pickup at our <strong>Rajwada Shop No. 2</strong> store.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={() => {
                  onViewProduct(matchedProduct);
                  onClose();
                }}
                className="flex-1 bg-[#252525] hover:bg-black text-white py-3 px-4 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                View Full Outfit Details
              </button>

              <a
                href={`https://wa.me/${SHOP_INFO.whatsappNumber}?text=Hello%20Zainab%20Collection,%20I%20completed%20the%20Style%20Quiz%20and%20got%20matched%20with%20*${matchedProduct.title}*`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-gray-700 underline pt-2 block mx-auto"
            >
              Restart Quiz
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
