import React from "react";
import Image from "next/image";
import Link from "next/link";

export function AboutSnippet() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gray-50 rounded-[2.5rem] transform -rotate-3 z-0"></div>
            <div className="relative z-10 aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-none overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1548907040-4baa42d10919?auto=format&fit=crop&q=80&w=800" 
                alt="El yapımı premium çikolata"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[800ms] ease-out"
              />
            </div>
            
            {/* Absolute positioning element for a stylish badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-[#d4af37] text-black p-6 rounded-none w-32 h-32 flex flex-col items-center justify-center shadow-xl z-20 border-4 border-white transform rotate-12">
              <span className="font-serif text-3xl font-bold">%100</span>
              <span className="text-xs uppercase tracking-wider mt-1 font-semibold">El Yapımı</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-4">HİKAYEMİZ</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1c1c1c] mb-6 leading-tight">
              Gerçek Çikolata <br />
              <span className="text-[#d4af37] italic">Aşkı</span>
            </h3>
            
            <div className="space-y-6 text-gray-500 text-[15px] leading-relaxed mb-10">
              <p>
                Kakao çekirdeğinden başlayan yolculuğumuzu, tutku ve ustalıkla şekillendiriyoruz. Her bir çikolatamız, yılların verdiği tecrübe ve en kaliteli malzemelerle, size unutulmaz bir deneyim sunmak için özenle hazırlanıyor.
              </p>
              <p>
                Belçika çikolatasının eşsiz kıvamını, yerel ve taze kuruyemişlerle harmanlıyor, hiçbir koruyucu madde kullanmadan tamamen doğal yöntemlerle üretiyoruz.
              </p>
            </div>

            <Link 
              href="/hakkimizda" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-black text-white text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#d4af37] hover:text-black transition-colors duration-300 group"
            >
              Hikayemizi Keşfedin
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
