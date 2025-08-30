"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // 👈 Import Swiper type

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import Image from "next/image";

const bigImages: string[] = [
  "/assets/images/thumbs/shop-details-thumb1.png",
  "/assets/images/thumbs/shop-details-thumb2.png",
  "/assets/images/thumbs/shop-details-thumb3.png",
  "/assets/images/thumbs/shop-details-thumb4.png",
  "/assets/images/thumbs/shop-details-thumb5.png",
];

const smallImages: string[] = [
  "/assets/images/thumbs/shop-details-small-thumb1.png",
  "/assets/images/thumbs/shop-details-small-thumb2.png",
  "/assets/images/thumbs/shop-details-small-thumb3.png",
  "/assets/images/thumbs/shop-details-small-thumb4.png",
  "/assets/images/thumbs/shop-details-small-thumb5.png",
];

export default function ShopGallery() {
  const [thumbs, setThumbs] = useState<SwiperType | null>(null); // 👈 add type

  return (
    <>
      {/* -------- BIG SLIDER -------- */}
      <Swiper
        modules={[Navigation, Thumbs]}
        loop={true}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: thumbs }}
        className='shop-thumbs'
      >
        {bigImages.map((src, i) => (
          <SwiperSlide key={i}>
            <div className='border border-neutral-200 tw-rounded-2xl d-flex align-items-center justify-content-center overflow-hidden'>
              <Image
                width={468}
                height={600}
                src={src}
                alt={`Product ${i + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* -------- THUMB SLIDER -------- */}
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbs}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className='shop-small-thumbs tw-mt-6'
      >
        {smallImages.map((src, i) => (
          <SwiperSlide key={i} className='h-100'>
            <div className='border border-neutral-200 tw-rounded-2xl d-flex align-items-center justify-content-center overflow-hidden tw-h-92-px'>
              <Image width={94} height={90} src={src} alt={`Thumb ${i + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
