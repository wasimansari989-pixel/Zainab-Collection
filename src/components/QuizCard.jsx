import React from 'react';
import { Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

export default function QuizCard({ onStartQuiz }) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="relative w-full rounded-3xl overflow-hidden bg-[#F5E0E5] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        
        {/* Subtle Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/40 blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#fce5eb] blur-2xl pointer-events-none"></div>

        {/* Left Side: Illustration / Visual Graphic */}
        <div className="relative z-10 w-full md:w-5/12 flex justify-center">
          <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform md:-rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80"
              alt="Bridal Styling Consultation"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 text-white text-center">
              <span className="text-xs font-semibold tracking-wider uppercase block">
                Zainab Personal Styling
              </span>
              <span className="text-[11px] text-white/80">
                Bridal • Festive • Casual
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Quiz Action */}
        <div className="relative z-10 w-full md:w-7/12 text-[#383838] space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white/80 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#F5A3B7] tracking-wider uppercase shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Fashion Assistant</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#222222] leading-tight">
            Confused About What to Wear for the Upcoming Wedding or Festival?
          </h3>

          <p className="text-[#555555] text-sm sm:text-base leading-relaxed max-w-xl">
            Answer 3 quick questions about your occasion, preferred fabric, and budget. Our smart boutique stylist will match you with the exact outfit from our Rajwada store!
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <button
              type="button"
              onClick={onStartQuiz}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#252525] hover:bg-[#111111] text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-[#F5A3B7]" />
              <span>START 1-MINUTE STYLE QUIZ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs text-gray-500 font-medium">Takes less than 60 seconds</span>
          </div>
        </div>

      </div>
    </section>
  );
}
