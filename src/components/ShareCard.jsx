import React from 'react';
import { Star, Heart } from 'lucide-react';
import FlowerIcon from './FlowerIcon';
import { SHOP_INFO } from '../data/products';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ShareCard() {
  const lookbookPhotos = [
    {
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
      caption: "Gul-e-Noor Suit at Sangeet Night",
      customer: "Pooja S., Indore"
    },
    {
      img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80",
      caption: "Banarasi Georgette Saree elegance",
      customer: "Farheen K., Bhopal"
    },
    {
      img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
      caption: "Noor Velvet Bridal Lehenga",
      customer: "Simran M., Ujjain"
    },
    {
      img: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80",
      caption: "Afreen Anarkali Reception Look",
      customer: "Ayesha N., Indore"
    },
    {
      img: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=600&q=80",
      caption: "Haldi Sharara Perfection",
      customer: "Ritu V., Dewas"
    },
    {
      img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
      caption: "Tissue Organza Pastel Saree",
      customer: "Sneha G., Indore"
    }
  ];

  const testimonials = [
    {
      name: "Anjali Rathore",
      location: "Old Palasia, Indore",
      review: "Rajwada me ladies suits ki best shop! State bank ATM ke samne wali gali me easily mil gayi. Unke Chanderi suits aur fabric quality lajawab hai. Fitting bhi on the spot kara ke di.",
      rating: 5
    },
    {
      name: "Saba Mansoori",
      location: "Khajrana, Indore",
      review: "I bought my wedding sangeet suit and Pakistani lawn suits from Zainab Collection. The embroidery detailing and fabric softness are unbeatable. Very polite staff and honest pricing!",
      rating: 5
    },
    {
      name: "Meenakshi Joshi",
      location: "Vijay Nagar, Indore",
      review: "Banarasi Sarees aur Organza dupattas ka collection bohot royal hai. Rajwada me visit karna definitely worth it raha. Highly recommended boutique!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Title with Mirrored Flower Icons matching reference */}
        <div className="flex justify-center text-[#383838] font-bold items-center gap-4 sm:gap-8">
          <FlowerIcon className="rotate-270 scale-x-[-1]" />
          <h3 className="text-2xl sm:text-3xl font-serif tracking-wider uppercase text-[#222222]">
            CLIENT DIARIES & LOOKBOOK
          </h3>
          <FlowerIcon className="rotate-90" />
        </div>

        <p className="text-[#697586] text-sm sm:text-base mt-2 text-center max-w-xl">
          Real weddings, festive celebrations and everyday grace. Tag us <span className="text-[#F5A3B7] font-semibold">{SHOP_INFO.instagram}</span> to be featured!
        </p>

        {/* Lookbook Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 w-full mt-10">
          {lookbookPhotos.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-md bg-gray-100"
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-white">
                <InstagramIcon className="w-4 h-4 text-[#F5A3B7] mb-1" />
                <p className="text-[11px] font-semibold line-clamp-1">{item.caption}</p>
                <span className="text-[9px] text-gray-300">{item.customer}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Customer Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-14">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FAF5F7] p-6 rounded-3xl border border-[#F5E0E5]/60 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex text-[#FFA500]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFA500]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{t.review}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <span className="text-xs text-gray-500">{t.location}</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#F5A3B7] shadow-xs">
                  <Heart className="w-3.5 h-3.5 fill-[#F5A3B7]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#252525] hover:bg-[#111111] text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg transition-all hover:scale-105"
          >
            <InstagramIcon className="w-4 h-4 text-[#F5A3B7]" />
            <span>FOLLOW @ZAINABCOLLECTION_RAJWADA</span>
          </a>
        </div>

      </div>
    </section>
  );
}
