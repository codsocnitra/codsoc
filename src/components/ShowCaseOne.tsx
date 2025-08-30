"use client";

import Image from "next/image";
import Link from "next/link";
import Slider, { Settings } from "react-slick";

const ShowCaseOne: React.FC = () => {
  const slickSettings: Settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    infinite: true,
    centerMode: true,
    arrows: false,
    centerPadding: "0px",
    swipeToSlide: true,
    cssEase: "ease",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className='show-case py-120 bg-main-two-600 overflow-hidden'>
      <div className='max-w-602-px mx-auto text-center tw-mb-15'>
        <span className='tw-py-1 tw-px-705 bg-white-13 text-white tw-text-sm fw-medium text-capitalize rounded-pill tw-mb-205'>
          Work Showcase
        </span>
        <h3 className='fw-light tw-leading-104 tw-mb-9 text-white'>
          <span className='splitTextStyleOne d-inline-block fw-medium'>
            <span className='fw-semibold'>Comprehensive IT Solution </span>{" "}
            <span> Growth</span>{" "}
            <span className='fw-semibold'>&amp; Efficiency</span>
          </span>
        </h3>
      </div>
      <div className='show-case-slider swiper'>
        <Slider {...slickSettings} className='swiper-wrapper'>
          <div
            className='swiper-slide'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='group-item'>
              <div className='position-relative'>
                <Link
                  href='/project-details'
                  className='w-100 h-100 tw-max-h-410-px overflow-hidden tw-rounded-28-px'
                >
                  <Image
                    width={590}
                    height={513}
                    src='/assets/images/thumbs/show-case-img1.png'
                    alt='tech'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <Link
                  href='/project-details'
                  className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9 position-absolute top-0 tw-end-0 tw-me-8 tw-mt-8 hidden opacity-0 group-hover-item-opacity-1 group-hover-item-visible tw-scale-04 group-hover-item-scale-1'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </Link>
              </div>
              <div className='tw-mt-8'>
                <span className='tw-text-base fw-medium text-white'>
                  Excellent Performance
                </span>
                <h5 className='text-white tw-mt-1'>
                  <Link
                    href='/project-details'
                    className='hover-text-main-600 text-white line-clamp-1 hover--translate-y-1'
                  >
                    Mobile Application Development
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div
            className='swiper-slide'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='group-item'>
              <div className='position-relative'>
                <Link
                  href='/project-details'
                  className='w-100 h-100 tw-max-h-410-px overflow-hidden tw-rounded-28-px'
                >
                  <Image
                    width={590}
                    height={514}
                    src='/assets/images/thumbs/show-case-img2.png'
                    alt='tech'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <Link
                  href='/project-details'
                  className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9 position-absolute top-0 tw-end-0 tw-me-8 tw-mt-8 hidden opacity-0 group-hover-item-opacity-1 group-hover-item-visible tw-scale-04 group-hover-item-scale-1'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </Link>
              </div>
              <div className='tw-mt-8'>
                <span className='tw-text-base fw-medium text-white'>
                  Excellent Performance
                </span>
                <h5 className='text-white tw-mt-1'>
                  <Link
                    href='/project-details'
                    className='hover-text-main-600 text-white line-clamp-1 hover--translate-y-1'
                  >
                    Cloud Computing System
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div
            className='swiper-slide'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='group-item'>
              <div className='position-relative'>
                <Link
                  href='/project-details'
                  className='w-100 h-100 tw-max-h-410-px overflow-hidden tw-rounded-28-px'
                >
                  <Image
                    width={590}
                    height={514}
                    src='/assets/images/thumbs/show-case-img3.png'
                    alt='tech'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <Link
                  href='/project-details'
                  className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9 position-absolute top-0 tw-end-0 tw-me-8 tw-mt-8 hidden opacity-0 group-hover-item-opacity-1 group-hover-item-visible tw-scale-04 group-hover-item-scale-1'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </Link>
              </div>
              <div className='tw-mt-8'>
                <span className='tw-text-base fw-medium text-white'>
                  Excellent Performance
                </span>
                <h5 className='text-white tw-mt-1'>
                  <Link
                    href='/project-details'
                    className='hover-text-main-600 text-white line-clamp-1 hover--translate-y-1'
                  >
                    Mobile Application Development
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div
            className='swiper-slide'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='group-item'>
              <div className='position-relative'>
                <Link
                  href='/project-details'
                  className='w-100 h-100 tw-max-h-410-px overflow-hidden tw-rounded-28-px'
                >
                  <Image
                    width={590}
                    height={514}
                    src='/assets/images/thumbs/show-case-img4.png'
                    alt='tech'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <Link
                  href='/project-details'
                  className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9 position-absolute top-0 tw-end-0 tw-me-8 tw-mt-8 hidden opacity-0 group-hover-item-opacity-1 group-hover-item-visible tw-scale-04 group-hover-item-scale-1'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </Link>
              </div>
              <div className='tw-mt-8'>
                <span className='tw-text-base fw-medium text-white'>
                  Excellent Performance
                </span>
                <h5 className='text-white tw-mt-1'>
                  <Link
                    href='/project-details'
                    className='hover-text-main-600 text-white line-clamp-1 hover--translate-y-1'
                  >
                    Creative UI/UX Designing
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div
            className='swiper-slide'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='group-item'>
              <div className='position-relative'>
                <Link
                  href='/project-details'
                  className='w-100 h-100 tw-max-h-410-px overflow-hidden tw-rounded-28-px'
                >
                  <Image
                    width={590}
                    height={514}
                    src='/assets/images/thumbs/show-case-img3.png'
                    alt='tech'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <Link
                  href='/project-details'
                  className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9 position-absolute top-0 tw-end-0 tw-me-8 tw-mt-8 hidden opacity-0 group-hover-item-opacity-1 group-hover-item-visible tw-scale-04 group-hover-item-scale-1'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </Link>
              </div>
              <div className='tw-mt-8'>
                <span className='tw-text-base fw-medium text-white'>
                  Excellent Performance
                </span>
                <h5 className='text-white tw-mt-1'>
                  <Link
                    href='/project-details'
                    className='hover-text-main-600 text-white line-clamp-1 hover--translate-y-1'
                  >
                    Mobile Application Development
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div
            className='swiper-slide'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='group-item'>
              <div className='position-relative'>
                <Link
                  href='/project-details'
                  className='w-100 h-100 tw-max-h-410-px overflow-hidden tw-rounded-28-px'
                >
                  <Image
                    width={590}
                    height={514}
                    src='/assets/images/thumbs/show-case-img2.png'
                    alt='tech'
                    className='w-100 h-100 object-fit-cover group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <Link
                  href='/project-details'
                  className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9 position-absolute top-0 tw-end-0 tw-me-8 tw-mt-8 hidden opacity-0 group-hover-item-opacity-1 group-hover-item-visible tw-scale-04 group-hover-item-scale-1'
                >
                  <i className='ph-bold ph-arrow-up-right' />
                </Link>
              </div>
              <div className='tw-mt-8'>
                <span className='tw-text-base fw-medium text-white'>
                  Excellent Performance
                </span>
                <h5 className='text-white tw-mt-1'>
                  <Link
                    href='/project-details'
                    className='hover-text-main-600 text-white line-clamp-1 hover--translate-y-1'
                  >
                    Cloud Computing System
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ShowCaseOne;
