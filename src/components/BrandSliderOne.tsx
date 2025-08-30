"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const BrandSliderOne: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 7 },
      },
      {
        breakpoint: 1200,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 575,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 300,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className='brand-slider-wrapper'>
      <div className='brand-slider swiper'>
        <Slider {...settings} className='swiper-wrapper align-items-center'>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img1.png'
                alt='Logo'
              />
            </div>
          </div>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={700}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img2.png'
                alt='Logo'
              />
            </div>
          </div>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img3.png'
                alt='Logo'
              />
            </div>
          </div>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img4.png'
                alt='Logo'
              />
            </div>
          </div>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={700}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img5.png'
                alt='Logo'
              />
            </div>
          </div>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img6.png'
                alt='Logo'
              />
            </div>
          </div>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img7.png'
                alt='Logo'
              />
            </div>
          </div>
          <div
            className='swiper-slide me-0 tw-py-4 border tw-border-dashed border-neutral-200 border-top-0 tw-h-114-px border-end-0 tw-px-4 d-flex justify-content-center align-items-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={700}
          >
            <div className='text-center'>
              <Image
                width={150}
                height={25}
                src='/assets/images/thumbs/brand-img3.png'
                alt='Logo'
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default BrandSliderOne;
