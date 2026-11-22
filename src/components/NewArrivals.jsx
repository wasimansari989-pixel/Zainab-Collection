import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FlowerIcon from './FlowerIcon';
import ProductCard from './ProductCard';

export default function NewArrivals({
  products,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
  onSeeAll
}) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 280;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, 2));
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: index * 320, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  return (
    <section id="new-arrivals" className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* Title with Flanking Mirrored Floral Icons matching reference */}
        <div className="flex justify-center text-[#383838] font-bold items-center gap-4 sm:gap-8">
          <FlowerIcon className="rotate-270 scale-x-[-1]" />
          <h3 className="text-2xl sm:text-3xl font-serif tracking-wider uppercase text-[#222222]">
            NEW ARRIVALS
          </h3>
          <FlowerIcon className="rotate-90" />
        </div>

        {/* See All Subtitle Link */}
        <button
          type="button"
          onClick={onSeeAll}
          className="text-[#697586] text-[15px] sm:text-[17px] hover:text-[#F5A3B7] transition-colors mt-1 font-medium cursor-pointer"
        >
          See all
        </button>

        {/* Carousel Container */}
        <div className="relative w-full max-w-[1240px] mt-6 sm:mt-8">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Scroll new arrivals left"
            className="hidden md:flex justify-center items-center bg-[#DEDAE5]/80 hover:bg-[#DEDAE5] rounded-full h-10 w-10 absolute -left-5 top-1/2 -translate-y-1/2 z-20 shadow-md transition-all cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          {/* Horizontal Scroll Area */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hidden flex gap-5 sm:gap-6 py-4 px-2 sm:px-4 scroll-smooth snap-x snap-mandatory"
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="w-[260px] sm:w-[280px] md:w-[290px] shrink-0 snap-start"
              >
                <ProductCard
                  product={item}
                  isLiked={wishlistIds.includes(item.id)}
                  onToggleWishlist={onToggleWishlist}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Scroll new arrivals right"
            className="hidden md:flex justify-center items-center bg-[#DEDAE5]/80 hover:bg-[#DEDAE5] rounded-full h-10 w-10 absolute -right-5 top-1/2 -translate-y-1/2 z-20 shadow-md transition-all cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Carousel Dot Indicators */}
        <div className="flex gap-2.5 mt-6">
          {[0, 1, 2].map((i) => (
            <button
              type="button"
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "bg-[#383838] w-6" : "bg-[#DFE1E3] hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
