"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const pillarSlides = [
  {
    title: "İçerikler",
    description: "Gana'dan en iyi kakao çekirdekleri, Fransız Deniz Tuzu ve Akasya Nektarı gibi özenle seçilmiş egzotik malzemelerle hazırlandı.",
    image: "https://admin.itcstore.in/media/wysiwyg/Ingredients_New1.png",
    bgColor: "rgb(236, 224, 210)"
  },
  {
    title: "El Yapımı Süreç",
    description: "Usta çikolatacılarımız, enfes tatlar ve aromalar senfonisi yaratmak için her bir lokmada mükemmellik için çabalar.",
    image: "https://admin.itcstore.in/media/wysiwyg/Handcrafted_New1.png",
    bgColor: "rgb(246, 246, 246)"
  },
  {
    title: "Sanatsal Form ve Lezzet",
    description: "Biz sıradanlıktan uzağız. Çikolatalarımız, olağanüstü formlar ve lezzet repartuarlarıyla hayal gücümüzün sınırlarını zorluyor.",
    image: "https://admin.itcstore.in/media/wysiwyg/fabelle/artistic-form.png",
    bgColor: "rgb(246, 246, 246)"
  },
  {
    title: "Lüks Deneyim",
    description: "Doliva, benzersiz lezzetler ve eşsiz duyumlarla büyüleyerek duyuları memnun eder ve saf bir keyif anı yaratır.",
    image: "https://admin.itcstore.in/media/wysiwyg/Luxurious_new2.png",
    bgColor: "rgb(226, 224, 225)"
  }
];

export function AboutContent() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#ddbd53] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=1920" 
          alt="Doliva Master Chocolatier" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-serif text-4xl md:text-7xl text-white mb-6 tracking-tight">
            Doliva Hikayesi
          </h1>
          <div className="w-24 h-[1px] bg-[#ddbd53] opacity-80" />
        </div>
      </section>

      {/* 2. BREADCRUMBS */}
      <nav className="py-6 border-b border-gray-100 italic">
        <div className="max-w-7xl mx-auto px-4 text-center text-[10px] uppercase tracking-[0.3em] text-gray-400">
          <Link href="/" className="hover:text-[#ddbd53]">ANASAYFA</Link>
          <span className="mx-3">/</span>
          <span className="text-black">HAKKIMIZDA</span>
        </div>
      </nav>

      {/* 3. INTRODUCTION (Simplified) */}
      <section className="max-w-[1000px] mx-auto px-4 py-16 md:pt-24 md:pb-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-[#1c1c1c] leading-tight mb-8">
          Tutku ve Ustalığın Buluşma Noktası
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-light">
          Doliva olarak, en kaliteli malzemeleri büyük bir titizlikle seçiyor ve usta ellerde gerçek birer sanat eserine dönüştürüyoruz. Bizim için her bir çikolata, paylaşılan mutlu bir anın ve eşsiz bir lezzet yolculuğunun başlangıcıdır.
        </p>
      </section>

      {/* NEW: TEXT-FOCUSED PHILOSOPHY SECTION */}
      <section className="max-w-[800px] mx-auto px-4 pb-20 md:pb-32 text-center">
        <div className="space-y-6 text-gray-600 leading-relaxed font-light italic">
          <p>
            "Gerçek lüks, ayrıntılarda gizlidir. Biz Doliva'da, her bir kakao çekirdeğinin karakterini anlamak ve onu en saf haliyle sunmak için zamanı durduruyoruz. Üretim sürecimiz bir acele değil, bir olgunlaşma serüvenidir."
          </p>
          <p>
            Geleneksel yöntemleri modern bir estetik anlayışıyla harmanlayan mutfağımızda, sadece damaklara değil, ruha da hitap eden bir deneyim tasarlıyoruz. El yapımı her bir parçamızın arkasında, mükemmel dengeyi bulana kadar yapılan yüzlerce deneme ve sarsılmaz bir kalite disiplini yatmaktadır. Sizin için hazırladığımız her kutu, bu disiplinin ve tatlı bir tutkunun en somut yansımasıdır.
          </p>
        </div>
      </section>

      {/* 4. SWIPER SLIDER SECTION */}
      <section className="pb-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="about-pillar-swiper !pb-12"
          >
            {pillarSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="w-full min-h-[455px] text-center transition-all duration-300 hover:shadow-lg" 
                  style={{ backgroundColor: slide.bgColor }}
                >
                  <div className="flex justify-center items-center mb-6 pt-6 h-[230px]">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-[230px] h-[230px] object-contain"
                    />
                  </div>
                  <div className="px-6 pb-8">
                    <h3 className="text-[20px] font-medium mb-3 text-black">{slide.title}</h3>
                    <p className="text-gray-600 text-sm max-w-[280px] mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* 5. BRAND FOOTNOTE (Removed LMG Grup per request) */}
      <section className="py-16 border-t border-gray-100 italic text-center">
        {/* Footnote removed */}
      </section>

      <style jsx global>{`
        .about-pillar-swiper .swiper-button-next,
        .about-pillar-swiper .swiper-button-prev {
          color: #111;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .about-pillar-swiper .swiper-button-next:after,
        .about-pillar-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .about-pillar-swiper .swiper-pagination-bullet-active {
          background: #ddbd53;
        }
      `}</style>

    </div>
  );
}
