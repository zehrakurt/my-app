import React from "react";
import Image from "next/image";
import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    name: "Klasik Sütlü Trüf Çikolata",
    price: "350 ₺",
    image: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Çok Satan"
  },
  {
    id: 2,
    name: "Bitter & Ahududu Dolgulu Pralin",
    price: "420 ₺",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=600",
    badge: "Yeni"
  },
  {
    id: 3,
    name: "Karamel & Deniz Tuzu Tablet",
    price: "280 ₺",
    image: "https://images.pexels.com/photos/867470/pexels-photo-867470.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Prestij Karışık Hediye Kutusu",
    price: "850 ₺",
    image: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=600",
    badge: "Özel Kutu"
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37] mb-3">ÖZEL SEÇKİ</h2>
            <h3 className="text-3xl md:text-4xl font-serif text-[#1c1c1c]">Öne Çıkan Lezzetler</h3>
          </div>
          <Link 
            href="/urunler" 
            className="hidden md:inline-flex items-center gap-2 text-gray-500 hover:text-[#d4af37] font-medium transition-colors"
          >
            Tümünü Gör
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-[1150px]:gap-8">
          {featuredItems.map((product) => (
            <div key={product.id} className="group relative">
              
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-[#d4af37] text-black text-xs font-bold uppercase tracking-[0.1em] py-1.5 px-3">
                    {product.badge}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-[800ms] ease-out"
                />
              </div>

              <div className="pt-5 text-center px-2">
                <Link href={`/urunler`}>
                  <h4 className="text-base min-[1150px]:text-lg font-medium text-[#1c1c1c] mb-1.5 group-hover:text-[#d4af37] transition-colors leading-snug">
                    {product.name}
                  </h4>
                </Link>
                <div className="text-gray-500 font-semibold text-sm min-[1150px]:text-base">
                  {product.price}
                </div>
              </div>
              
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/urunler" 
            className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-black px-8 py-3 border border-black hover:bg-black hover:text-white transition-colors"
          >
            Tüm Ürünleri Gör
          </Link>
        </div>

      </div>
    </section>
  );
}
