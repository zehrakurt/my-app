"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const videos = [
  { id: 1, src: "/v1.mp4" },
  { id: 2, src: "/v2.mp4" },
  { id: 3, src: "/v3.mp4" },
  { id: 4, src: "/v4.mp4" },
  { id: 5, src: "/v5.mp4" },
  { id: 6, src: "/v2.mp4" },
];

export function VideoShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl text-[#1c1c1c] leading-tight mb-4 tracking-tight">
            Doliva Yolunda Sihir Yaratın
          </h2>
          <div className="w-20 h-1 bg-[#ddbd53]"></div>
        </div>

        <Swiper
          modules={[FreeMode, Autoplay]}
          freeMode={true}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5.2 },
          }}
          className="!overflow-visible"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="relative w-full h-[450px] md:h-[490px] cursor-pointer group rounded-sm overflow-hidden bg-gray-100"
                onMouseEnter={(e) => {
                  const v = e.currentTarget.querySelector('video');
                  if (v) v.play();
                }}
                onMouseLeave={(e) => {
                  const v = e.currentTarget.querySelector('video');
                  if (v) {
                    v.pause();
                    v.currentTime = 0; // İsteğe bağlı: Başa sarar
                  }
                }}
                onTouchStart={(e) => {
                  const v = e.currentTarget.querySelector('video');
                  if (v) {
                    if (v.paused) {
                      v.play();
                    } else {
                      v.pause();
                    }
                  }
                }}
              >
                {/* Play Icon Overlay (Sadece hover değilken veya görsel amaçlı) */}
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/10 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/60 bg-white/10 backdrop-blur-sm">
                    <svg width="24" height="24" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-0.5">
                      <path d="M15.9523 39.531V14.6036L36.7767 26.7112L15.9523 39.531Z" fill="#FFFFFF" />
                    </svg>
                  </div>
                </div>

                {/* Video Element */}
                <video
                  className="w-full h-full object-cover"
                  playsInline
                  muted
                  loop
                  preload="auto"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {/* Brand Watermark */}
                <div className="absolute bottom-4 right-4 z-20">
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium border border-white/20 px-2 py-0.5 backdrop-blur-sm">
                    DOLİVA
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
