"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Sevdiklerinize Özel",
    subtitle: "Zarif ve Şık Hediye Kutuları",
    buttonText: "Hediyelikler",
    link: "/urunler"
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/867470/pexels-photo-867470.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "El Yapımı Pralinler",
    subtitle: "Katkısız ve Doğal Kakao %100 Memnuniyet",
    buttonText: "Ürünleri İncele",
    link: "/urunler"
  },
  {
    id: 3,
    image: "/11.png",
    title: "Premium Çikolata Deneyimi",
    subtitle: "Ustalıkla Hazırlanmış Lezzetler",
    buttonText: "Hemen Keşfet",
    link: "/urunler"
  }
];

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[400px] bg-black overflow-hidden group">
      
      <div 
        className="flex w-full h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-full flex-shrink-0">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {slide.title && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-[#d4af37] mb-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  {slide.subtitle}
                </h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  {slide.title}
                </h2>
                <Link
                  href={slide.link}
                  className="bg-[#d4af37] text-black px-6 py-2.5 text-xs md:text-sm uppercase tracking-[0.2em] font-semibold hover:bg-white hover:text-black transition-colors duration-300 opacity-0 animate-fadeInUp"
                  style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
                >
                  {slide.buttonText}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-[#d4af37] text-white hover:text-black rounded-full transition-all duration-300 opacity-0 md:group-hover:opacity-100"
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-[#d4af37] text-white hover:text-black rounded-full transition-all duration-300 opacity-0 md:group-hover:opacity-100"
      >
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-[#d4af37] w-6" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}