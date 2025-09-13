"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import Image from "next/image";
import happy from "@/app/assets/images/happycouple.jpg";
import alex from "@/app/assets/images/alexander-rotker-l8p1aWZqHvE-unsplash.jpg";
import shoe from "@/app/assets/images/shoe-img.jpg";
import eva from "@/app/assets/images/evaa.jpg";
import beauty from "@/app/assets/images/onne-beauty-u8bTCVoJCP8-unsplash.jpg";
import pix from "@/app/assets/images/pix 3.avif";
import black from "@/app/assets/images/black-panther-nawpic-50.jpg";
import man from "@/app/assets/images/businessman.jpg";

export default function Carousel() {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Swiper
        effect="cards"
        grabCursor={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[Navigation, Autoplay, EffectCards]}
        className="w-[70%] h-[400px]"
      >
        <SwiperSlide>
          <Image
            src={alex}
            alt="Alexander"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={man}
            alt="Businessman"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={black}
            alt="Black Panther"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shoe}
            alt="Shoe"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={beauty}
            alt="Beauty"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={pix}
            alt="Pix"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={happy}
            alt="Famous England"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
            priority
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={eva}
            alt="Eva"
            width={800}
            height={450}
            className="w-full h-[450px] object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons - Positioned below the carousel */}
      <div className="flex justify-center ml-24 gap-4 mt-3">
        <button className="swiper-button-prev-custom w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-end hover:bg-white transition-all duration-200 border border-white">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="swiper-button-next-custom w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-all duration-200 border border-white cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-20 right-20 text-white z-10 max-w-md">
        <p className="text-4xl font-semibold text-end ml-12 cursor-pointer">
          Open Source
        </p>
        <p className="mt-3 text-2xl font-semibold cursor-pointer">
          FLUX.1 Krea
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:gap-8 mt-4">
          <p className="text-sm cursor-pointer">
            ultra-realistic textures. "We're making the weights to our FLUX.1
            <br />
            Krea model open-source. Download and run our model weights, <br />
            read the technical report, or generate with it in Krea Image."
          </p>
        </div>
      </div>
    </div>
  );
}
