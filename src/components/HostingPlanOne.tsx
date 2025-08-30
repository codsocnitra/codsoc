"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const HostingPlanOne: React.FC = () => {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false, // set true if needed
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <section className='hosting-plan tw-pt-224-px pb-120 position-relative z-1 overflow-hidden'>
      <Image
        width={1920}
        height={1017}
        src='/assets/images/shapes/wave-shape.png'
        alt='Shape'
        className='position-absolute w-100 h-100 top-0 tw-start-0 z-n1'
      />
      <Image
        width={155}
        height={201}
        src='/assets/images/shapes/dots-circle-round.png'
        alt='Shape'
        className='position-absolute bottom-0 tw-start-0 tw-ms-80-px scale-animation d-lg-block d-none'
      />
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between tw-gap-6 tw-mb-12'>
          <div className='max-w-724-px'>
            <div
              className='bg-neutral-200 tw-py-3 tw-px-305 rounded-pill text-heading fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              {" "}
              <span className='tw-w-205 tw-h-205 bg-yellow rounded-circle' />
              Up to <span className='text-yellow'>70%</span> off managed cloud
              hosting
            </div>
            <h2 className='splitTextStyleOne text-heading text-capitalize'>
              {" "}
              Pick your perfect{" "}
              <span className='font-dm-serif fst-italic fw-normal'>
                {" "}
                web hosting{" "}
              </span>{" "}
              plan. We got'em all.
            </h2>
          </div>
          <div
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <Link
              href='/register'
              className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-lg-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-15 rounded-pill tw-py-505 fw-medium'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>Clients Area</span>
            </Link>
          </div>
        </div>
        <div className='position-relative'>
          <div className='bg-white common-shadow-seven tw-rounded-2xl overflow-hidden'>
            <div className='hosting-plan-slider swiper'>
              <Slider {...settings} className='swiper-wrapper' ref={sliderRef}>
                <div
                  className='swiper-slide h-100'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <div className='group hosting-plan-item tw-ps-48-px tw-pe-4 tw-pt-90-px tw-pb-9 hover-bg-main-600 h-100 d-flex flex-column justify-content-between animation-item tw-duration-300'>
                    <div>
                      <span>
                        <Image
                          width={70}
                          height={70}
                          src='/assets/images/icons/hosting-plan-icon1.png'
                          alt='Icon'
                          className='animate__swing'
                        />
                      </span>
                      <div className='tw-mt-10'>
                        <span className='tw-mb-3 d-block text-heading'>
                          <span className='tw-duration-200 group-hover-text-white'>
                            Starts at
                          </span>
                          <span className='text-purple tw-duration-200 group-hover-text-yellow fw-bold'>
                            $3.75/mo*
                          </span>
                        </span>
                        <h5 className='tw-mb-3 tw-duration-200 group-hover-text-white'>
                          Web hosting
                        </h5>
                        <p className='text-neutral-500 tw-text-base line-clamp-2 tw-duration-200 group-hover-text-white'>
                          Easy, affordable, and includes a free domain for a
                          year. Score!
                        </p>
                      </div>
                    </div>
                    <div className='tw-mt-705'>
                      <Link
                        href='#'
                        className='hover-white hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-py-305 fw-medium tw-rounded-md text-sm group-hover-bg-white tw-duration-400 group-hover-text-main-two-600 hosting-plan-btn'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className='swiper-slide h-100'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={700}
                >
                  <div className='group hosting-plan-item tw-ps-48-px tw-pe-4 tw-pt-90-px tw-pb-9 hover-bg-main-600 h-100 d-flex flex-column justify-content-between animation-item tw-duration-300'>
                    <div>
                      <span>
                        <Image
                          width={81}
                          height={81}
                          src='/assets/images/icons/hosting-plan-icon2.png'
                          alt='Icon'
                          className='animate__swing'
                        />
                      </span>
                      <div className='tw-mt-10'>
                        <span className='tw-mb-3 d-block text-heading'>
                          <span className='tw-duration-200 group-hover-text-white'>
                            Starts at
                          </span>
                          <span className='text-purple tw-duration-200 group-hover-text-yellow fw-bold'>
                            $3.75/mo*
                          </span>
                        </span>
                        <h5 className='tw-mb-3 tw-duration-200 group-hover-text-white'>
                          WordPress hosting
                        </h5>
                        <p className='text-neutral-500 tw-text-base line-clamp-2 tw-duration-200 group-hover-text-white'>
                          Easy, affordable, and includes a free domain for a
                          year. Score!
                        </p>
                      </div>
                    </div>
                    <div className='tw-mt-705'>
                      <Link
                        href='#'
                        className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-py-305 fw-medium tw-rounded-md text-sm group-hover-bg-white tw-duration-400 group-hover-text-main-two-600 hosting-plan-btn'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className='swiper-slide h-100'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <div className='group hosting-plan-item tw-ps-48-px tw-pe-4 tw-pt-90-px tw-pb-9 hover-bg-main-600 h-100 d-flex flex-column justify-content-between animation-item tw-duration-300'>
                    <div>
                      <span>
                        <Image
                          width={80}
                          height={60}
                          src='/assets/images/icons/hosting-plan-icon3.png'
                          alt='Icon'
                          className='animate__swing'
                        />
                      </span>
                      <div className='tw-mt-10'>
                        <span className='tw-mb-3 d-block text-heading'>
                          <span className='tw-duration-200 group-hover-text-white'>
                            Starts at
                          </span>
                          <span className='text-purple tw-duration-200 group-hover-text-yellow fw-bold'>
                            $3.75/mo*
                          </span>
                        </span>
                        <h5 className='tw-mb-3 tw-duration-200 group-hover-text-white'>
                          VPS hosting
                        </h5>
                        <p className='text-neutral-500 tw-text-base line-clamp-2 tw-duration-200 group-hover-text-white'>
                          Easy, affordable, and includes a free domain for a
                          year. Score!
                        </p>
                      </div>
                    </div>
                    <div className='tw-mt-705'>
                      <Link
                        href='#'
                        className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-py-305 fw-medium tw-rounded-md text-sm group-hover-bg-white tw-duration-400 group-hover-text-main-two-600 hosting-plan-btn'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className='swiper-slide h-100'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={900}
                >
                  <div className='group hosting-plan-item tw-ps-48-px tw-pe-4 tw-pt-90-px tw-pb-9 hover-bg-main-600 h-100 d-flex flex-column justify-content-between animation-item tw-duration-300'>
                    <div>
                      <span>
                        <Image
                          width={74}
                          height={75}
                          src='/assets/images/icons/hosting-plan-icon4.png'
                          alt='Icon'
                          className='animate__swing'
                        />
                      </span>
                      <div className='tw-mt-10'>
                        <span className='tw-mb-3 d-block text-heading'>
                          <span className='tw-duration-200 group-hover-text-white'>
                            Starts at
                          </span>
                          <span className='text-purple tw-duration-200 group-hover-text-yellow fw-bold'>
                            $3.75/mo*
                          </span>
                        </span>
                        <h5 className='tw-mb-3 tw-duration-200 group-hover-text-white'>
                          Dedicated hosting
                        </h5>
                        <p className='text-neutral-500 tw-text-base line-clamp-2 tw-duration-200 group-hover-text-white'>
                          Easy, affordable, and includes a free domain for a
                          year. Score!
                        </p>
                      </div>
                    </div>
                    <div className='tw-mt-705'>
                      <Link
                        href='#'
                        className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-py-305 fw-medium tw-rounded-md text-sm group-hover-bg-white tw-duration-400 group-hover-text-main-two-600 hosting-plan-btn'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className='swiper-slide h-100'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1000}
                >
                  <div className='group hosting-plan-item tw-ps-48-px tw-pe-4 tw-pt-90-px tw-pb-9 hover-bg-main-600 h-100 d-flex flex-column justify-content-between animation-item tw-duration-300'>
                    <div>
                      <span>
                        <Image
                          width={81}
                          height={81}
                          src='/assets/images/icons/hosting-plan-icon2.png'
                          alt='Icon'
                          className='animate__swing'
                        />
                      </span>
                      <div className='tw-mt-10'>
                        <span className='tw-mb-3 d-block text-heading'>
                          <span className='tw-duration-200 group-hover-text-white'>
                            Starts at
                          </span>
                          <span className='text-purple tw-duration-200 group-hover-text-yellow fw-bold'>
                            $3.75/mo*
                          </span>
                        </span>
                        <h5 className='tw-mb-3 tw-duration-200 group-hover-text-white'>
                          WordPress hosting
                        </h5>
                        <p className='text-neutral-500 tw-text-base line-clamp-2 tw-duration-200 group-hover-text-white'>
                          Easy, affordable, and includes a free domain for a
                          year. Score!
                        </p>
                      </div>
                    </div>
                    <div className='tw-mt-705'>
                      <Link
                        href='#'
                        className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-py-305 fw-medium tw-rounded-md text-sm group-hover-bg-white tw-duration-400 group-hover-text-main-two-600 hosting-plan-btn'
                        data-block='button'
                      >
                        <span className='button__flair' />
                        <span className='button__label'>Learn more</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          <div
            onClick={() => sliderRef.current?.slickPrev()}
            className='swiper-hosting-button-next click tw-w-14 tw-h-14 border border-neutral-200 rounded-circle text-main-600 tw-text-lg d-flex justify-content-center align-items-center hover-bg-main-600 hover-border-main-600 hover-text-white tw-transition tw-duration-200 position-absolute top-50 translate-middle-y tw-z-99 tw-start-100 tw-ms-705'
          >
            <i className='ph-bold ph-arrow-right' />
          </div>
          <div
            onClick={() => sliderRef.current?.slickNext()}
            className='swiper-hosting-button-prev click tw-w-14 tw-h-14 border border-neutral-200 rounded-circle text-main-600 tw-text-lg d-flex justify-content-center align-items-center hover-bg-main-600 hover-border-main-600 hover-text-white tw-transition tw-duration-200 position-absolute top-50 translate-middle-y tw-z-99 tw-end-100 tw-me-705'
          >
            <i className='ph-bold ph-arrow-left' />
          </div>
          <div className='swiper-hosting-pagination d-lg-none d-flex align-items-center justify-content-center tw-mt-605'></div>
        </div>
      </div>
    </section>
  );
};

export default HostingPlanOne;
