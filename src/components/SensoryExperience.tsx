"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const experiences = [
  {
    id: 1,
    title: "Göze Hitap Eden",
    description: "Zarif formlar, kusursuz parlaklık ve sanatsal dokunuşlar",
    image:
      "111.png",
  },
  {
    id: 2,
    title: "Dokuyu Hisset",
    description: "Kadifemsi yumuşaklık, hafif çıtırtı ve lüks bir his",
    image:
      "00.png",
  },
  {
    id: 3,
    title: "Kırılışı Duy",
    description:
      "Keskin, tatmin edici bir kırılma — saf mükemmelliğin sesi",
    image:
      "44444.png",
  },
  {
    id: 4,
    title: "Tadına Var",
    description: "Derin, eritici zenginlik ve unutulmaz bir lezzet deneyimi",
    image:
      "333333.png",
  },
];

export function SensoryExperience() {
  return (
    <section className="bg-[#30261D] py-16 md:py-24 mb-16 xl:mb-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative">
        {/* Decorative vertical gold line */}
        <div className="absolute left-[25px] lg:left-[32px] bottom-0 h-1/2 sm:h-2/3 md:h-[55%] 2xl:h-3/5 w-[1px] bg-[#ddbd53] z-[1]" />

        {/* Heading */}
        <div className="mb-12 xl:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl xl:text-5xl text-white leading-tight">
            Çok Duyulu Bir Deneyim
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          spaceBetween={32}
          slidesPerView={1.2}
          breakpoints={{
            480: { slidesPerView: 1.5 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2.8 },
            1280: { slidesPerView: 3.5 },
          }}
          className="!overflow-visible"
        >
          {experiences.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative block group cursor-pointer">
                {/* Text overlay */}
                <div className="relative z-[2] mb-6">
                  <h3 className="text-[#ddbd53] text-lg md:text-xl xl:text-2xl font-medium mb-3 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base max-w-[260px] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Image */}
                <div className="pl-8 md:pl-10 pt-2">
                  <div className="relative overflow-hidden rounded-sm border border-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#30261D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
