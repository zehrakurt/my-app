"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const chocolatiers = [
  { id: 1, image: "/2.jpg" },
  { id: 2, image: "/4.jpg" },
  { id: 3, image: "/3.jpg" },
  { id: 4, image: "/6.jpg" },
  { id: 5, image: "/5.jpg" },
  { id: 6, image: "/1.jpg" },
  { id: 8, image: "/8.jpg" },
];

export function MasterChocolatiers() {
  return (
    <section className="relative py-[60px] md:pt-[104px] md:pb-[80px] xl:pb-[111px] bg-[#30261D] z-10 mb-16 xl:mb-20">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 mb-10 md:mb-[52px] relative z-20">
        {/* Decorative chocolate image */}
        <img
          src="https://admin.itcstore.in/media/wysiwyg/fabelle/master-chocolate-top.png"
          alt="Çikolata"
          className="w-[85px] md:w-[153px] absolute top-[-110px] md:top-[-175px] left-[10px] md:left-[-10px] z-30 pointer-events-none"
        />

        <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl text-white leading-tight mb-4">
          Usta Çikolatacılarımız
        </h2>
        <p className="text-white/70 text-sm md:text-base max-w-xl leading-relaxed font-light">
          Mükemmelliğe adanmış ustalarımız, beceri ve tutkuyla olağanüstü
          lezzetler yaratıyor.
        </p>
      </div>

      {/* Carousel */}
      <div className="pl-0">
        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={true}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView={1.8}
          breakpoints={{
            480: { slidesPerView: 2.5 },
            640: { slidesPerView: 3.5 },
            1024: { slidesPerView: 5.5 },
            1280: { slidesPerView: 6.5 },
          }}
          className="!overflow-visible !ease-linear"
        >
          {chocolatiers.map((person) => (
            <SwiperSlide key={person.id} className="!h-auto !ease-linear">
              <div className="relative group overflow-hidden rounded-sm border border-white/10">
                <img
                  src={person.image}
                  alt="Usta Çikolatacı"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
