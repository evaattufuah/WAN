"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dandan from "@/app/assets/images/dandan.jpg";
import tourist from "@/app/assets/images/tourist3.jpg";
import lady from "@/app/assets/images/sunglassess.jpg";
import demon from "@/app/assets/images/Demon1.jpg";
import hero from "@/app/assets/images/heroAcademla.avif";
import gland from "@/app/assets/images/famousengland.jpg";
import gojo from "@/app/assets/images/gojo.jpg";
import friends from "@/app/assets/images/friends-jumping.jpg";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const slides = [
    dandan,
    gland,
    gojo,
    friends,
    demon,
    tourist,
    hero,
    lady,
  ];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const goToSlide = (index) => {
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
        <SwiperSlide>
          <div>
            <Image
              src={dandan}
              alt="Slide 1"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <Image
              src={gland}
              alt="Slide 2"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={gojo}
              alt="Slide 3"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={friends}
              alt="Slide 4"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={demon}
              alt="Slide 5"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={tourist}
              alt="Slide 6"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Image
              src={hero}
              alt="Slide 7"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
              priority
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <Image
              src={lady}
              alt="Slide 9"
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>
        </SwiperSlide>
      </Swiper>

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
          />
        ))}
      </div>

      <div className="absolute bottom-16 left-6 text-white z-10 text-sm cursor-pointer">
        <p className="mt-7 text-white z-10 text-4xl font-extrabold text-center ">
          WAN 2.2
        </p>
        <br />
        <p className="mt-7 text-white z-10 text-2xl font-semibold cursor-pointer">
          WAN 2.2 Image generations
        </p>
        <br />
        <div className="flex gap-16">
          <div>
            <p className="text-white z-10 text-sm cursor-pointer ">
              Generate complex images with the brand new and powerful <br />
              WAN 2.2 model. Exceptional prompt adherence and <br />
              ultra-realistic textures.
            </p>
          </div>

          <div>
            <button className="bg-white cursor-pointer  text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-amber-400 transition">
              Try WAN 2.2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
