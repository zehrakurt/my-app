"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Swiper stilleri
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredItems = [
  {
    id: 1,
    name: "Klasik Sütlü Trüf Çikolata",
    category: "Trüf Serisi",
    image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Çok Satan"
  },
  {
    id: 2,
    name: "Bitter & Ahududu Dolgulu Pralin",
    category: "Pralin Koleksiyonu",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600",
    badge: "Yeni"
  },
  {
    id: 3,
    name: "Karamel & Deniz Tuzu Tablet",
    category: "Tablet Serisi",
    image: "https://images.pexels.com/photos/867470/pexels-photo-867470.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Fındıklı Gurme Rocher",
    category: "Rocher Serisi",
    image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Popüler"
  },
  {
    id: 5,
    name: "Prestij Karışık Hediye Kutusu",
    category: "Hediye Kutuları",
    image: "https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Özel Kutu"
  }
];

export function FeaturedProducts() {
  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ddbd53] mb-3">ÖZEL SEÇKİ</h2>
            <h3 className="text-3xl md:text-3xl font-serif text-[#1c1c1c]">Öne Çıkan Lezzetler</h3>
          </div>
          <Link 
            href="/urunler" 
            className="hidden md:inline-flex items-center gap-2 text-gray-500 hover:text-[#ddbd53] font-medium transition-colors"
          >
            Tümünü Gör
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="featured-products-swiper !pb-14"
          >
            {featuredItems.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden mb-5 bg-gray-50 border border-gray-100 shadow-sm rounded-sm">
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#ddbd53] text-black text-[9px] font-bold uppercase tracking-widest px-2 py-1 z-10">
                        {product.badge}
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="text-center px-1">
                    <Link href="/urunler">
                      <h4 className="text-sm md:text-base font-medium text-[#1c1c1c] group-hover:text-[#ddbd53] transition-colors leading-snug">
                        {product.name}
                      </h4>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/urunler" 
            className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-black px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors"
          >
            Tüm Ürünleri Gör
          </Link>
        </div>

      </div>

      <style jsx global>{`
        .featured-products-swiper .swiper-button-next,
        .featured-products-swiper .swiper-button-prev {
          color: #000;
          background: rgba(221, 189, 83, 0.9);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transform: translateY(-20px);
        }
        .featured-products-swiper .swiper-button-next:after,
        .featured-products-swiper .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        .featured-products-swiper .swiper-button-next:hover,
        .featured-products-swiper .swiper-button-prev:hover {
          background: #000;
          color: #ddbd53;
        }
        .featured-products-swiper .swiper-pagination-bullet-active {
          background: #ddbd53;
        }
      `}</style>
    </section>
  );
}
