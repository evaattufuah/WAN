"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper"; // 👈 Import Swiper type

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images
import dandan from "@/app/assets/images/dandan.jpg";
import tourist from "@/app/assets/images/tourist3.jpg";
import lady from "@/app/assets/images/sunglassess.jpg";
import demon from "@/app/assets/images/Demon1.jpg";
import hero from "@/app/assets/images/heroAcademla.jpg";
import gland from "@/app/assets/images/famousengland.jpg";
import gojo from "@/app/assets/images/gojo.jpg";
import friends from "@/app/assets/images/friends-jumping.jpg";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null); // 👈 Type correctly

  const slides = [dandan, gland, gojo, friends, demon, tourist, hero, lady];

  // ✅ FIXED: Now TypeScript knows exactly what 'swiper' is
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <div className="relative">
      <Swiper
        slidesPerView={3}
        navigation
        pagination={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={850}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="w-full max-w-2xl"
        onSwiper={setSwiperInstance}
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover rounded-xl"
                priority={index === 0} // Only prioritize first image for performance
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots Indicator */}
      <div className="flex justify-center cursor-pointer gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-gray-700 scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay Text & CTA */}
      <div className="absolute bottom-16 left-6 text-white z-10 text-sm">
        <p className="mt-7 text-white z-10 text-4xl font-extrabold text-center">
          WAN 2.2
        </p>
        <br />
        <p className="mt-7 text-white z-10 text-2xl font-semibold cursor-pointer">
          WAN 2.2 Image generations
        </p>
        <br />
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          <div className="max-w-md">
            <p className="text-white z-10 text-sm leading-relaxed">
              Generate complex images with the brand new and powerful <br />
              WAN 2.2 model. Exceptional prompt adherence and <br />
              ultra-realistic textures.
            </p>
          </div>

          <div>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-amber-400 transition-all duration-300 shadow-lg">
              Try WAN 2.2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
