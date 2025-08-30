"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const ServicesOne: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true, // pagination
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
      { breakpoint: 300, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className='services py-120 position-relative z-1 gradient-bg-two'>
      <Image
        width={87}
        height={97}
        src='/assets/images/shapes/rope-shape.png'
        alt='Rope'
        className='position-absolute tw-start-0 tw-ms-80-px tw-mt-16 top-0 z-n1'
      />
      <Image
        width={719}
        height={565}
        src='/assets/images/shapes/matherboard-shape.png'
        alt='Shape'
        className='position-absolute top-0 tw-start-0 tw-mt-160-px tw-ms-128-px d-lg-block d-none z-n1 opacity-1'
      />
      <div className='container max-w-1552-px'>
        <div className='max-w-672-px text-center mx-auto tw-mb-12'>
          <div className='bg-white-06 tw-py-3 tw-px-305 rounded-pill text-white fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max  aos-animate'>
            <span className='tw-w-205 tw-h-205 bg-yellow rounded-circle' />
            Up to <span className='text-yellow'>70%</span> off managed cloud
            hosting
          </div>
          <h2 className='splitTextStyleOne text-white'>
            Speed.{" "}
            <span className='font-dm-serif fst-italic fw-normal'>
              {" "}
              Reliability
            </span>
            . Efficiency.
          </h2>
          <p className='text-neutral-300 tw-mt-5 splitTextStyleOne max-w-570-px mx-auto'>
            In today's competitive business, the demand for efficient In today's
            competitive cost-effective IT solutions has never been more critic.
            business
          </p>
        </div>
        <div className='service-slider one swiper'>
          <Slider {...settings} className='swiper-wrapper'>
            <div
              className='swiper-slide tw-pb-105'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div className='square-bg-shape position-relative tw-rounded-2xl z-1 animation-item  tw-h-424-px'>
                <div className='service-item bg-white hover-bg-main-600 group group-item tw-py-16 tw-ps-10 tw-pe-4 tw-rounded-2xl h-100 d-flex flex-column justify-content-center tw-duration-200'>
                  <span className='tw-mb-13 group-hover-item-text-invert'>
                    <Image
                      width={55}
                      height={55}
                      src='/assets/images/icons/service-icon1.svg'
                      alt='Icon'
                      className='animate__heartBeat'
                    />
                  </span>
                  <div>
                    <div className='group-hover-item-d-none tw-mb-4'>
                      <span className='tw-py-1 tw-px-305 rounded-pill bg-main-50 text-uppercase text-neutral-500 tw-text-xs fw-semibold group-hover-text-white tw-duration-200 group-hover-bg-main-two-600'>
                        Easy Invoicing
                      </span>
                    </div>
                    <h5 className='group-hover-text-white tw-duration-200 max-w-250-px'>
                      Local data centers. Around the world.
                    </h5>
                    <p className='text-neutral-300 tw-mt-3 line-clamp-2 d-none group-hover-item-d-block'>
                      Web hosting provides everything you idea online. From
                      where your website
                    </p>
                    <a
                      href='#'
                      className='d-flex align-items-center tw-gap-205 text-main-600 fw-bold d-lg-flex align-items-center tw-gap-305 group-hover-text-white tw-duration-200 tw-mt-6 tw-transition-0'
                    >
                      Learn More
                      <i className='ph ph-arrow-right tw-text-sm' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='swiper-slide tw-pb-105'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={700}
            >
              <div className='square-bg-shape position-relative tw-rounded-2xl z-1 animation-item  tw-h-424-px'>
                <div className='service-item bg-white hover-bg-main-600 group group-item tw-py-16 tw-ps-10 tw-pe-4 tw-rounded-2xl h-100 d-flex flex-column justify-content-center tw-duration-200'>
                  <span className='tw-mb-13 group-hover-item-text-invert'>
                    <Image
                      width={54}
                      height={54}
                      src='/assets/images/icons/service-icon2.svg'
                      alt='Icon'
                      className='animate__heartBeat'
                    />
                  </span>
                  <div>
                    <div className='group-hover-item-d-none tw-mb-4'>
                      <span className='tw-py-1 tw-px-305 rounded-pill bg-main-50 text-uppercase text-neutral-500 tw-text-xs fw-semibold group-hover-text-white tw-duration-200 group-hover-bg-main-two-600'>
                        Easy Invoicing
                      </span>
                    </div>
                    <h5 className='group-hover-text-white tw-duration-200 max-w-250-px'>
                      Full speed ahead. Whatever the traffic.
                    </h5>
                    <p className='text-neutral-300 tw-mt-3 line-clamp-2 d-none group-hover-item-d-block'>
                      Web hosting provides everything you idea online. From
                      where your website
                    </p>
                    <a
                      href='#'
                      className='d-flex align-items-center tw-gap-205 text-main-600 fw-bold d-lg-flex align-items-center tw-gap-305 group-hover-text-white tw-duration-200 tw-mt-6 tw-transition-0'
                    >
                      Learn More
                      <i className='ph ph-arrow-right tw-text-sm' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='swiper-slide tw-pb-105'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={800}
            >
              <div className='square-bg-shape position-relative tw-rounded-2xl z-1 animation-item  tw-h-424-px'>
                <div className='service-item bg-white hover-bg-main-600 group group-item tw-py-16 tw-ps-10 tw-pe-4 tw-rounded-2xl h-100 d-flex flex-column justify-content-center tw-duration-200'>
                  <span className='tw-mb-13 group-hover-item-text-invert'>
                    <Image
                      width={53}
                      height={48}
                      src='/assets/images/icons/service-icon3.svg'
                      alt='Icon'
                      className='animate__heartBeat'
                    />
                  </span>
                  <div>
                    <div className='group-hover-item-d-none tw-mb-4'>
                      <span className='tw-py-1 tw-px-305 rounded-pill bg-main-50 text-uppercase text-neutral-500 tw-text-xs fw-semibold group-hover-text-white tw-duration-200 group-hover-bg-main-two-600'>
                        Easy Invoicing
                      </span>
                    </div>
                    <h5 className='group-hover-text-white tw-duration-200 max-w-250-px'>
                      Live and kicking. 24/7.
                    </h5>
                    <p className='text-neutral-300 tw-mt-3 line-clamp-2 d-none group-hover-item-d-block'>
                      Web hosting provides everything you idea online. From
                      where your website
                    </p>
                    <a
                      href='#'
                      className='d-flex align-items-center tw-gap-205 text-main-600 fw-bold d-lg-flex align-items-center tw-gap-305 group-hover-text-white tw-duration-200 tw-mt-6 tw-transition-0'
                    >
                      Learn More
                      <i className='ph ph-arrow-right tw-text-sm' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='swiper-slide tw-pb-105'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={900}
            >
              <div className='square-bg-shape position-relative tw-rounded-2xl z-1 animation-item  tw-h-424-px'>
                <div className='service-item bg-white hover-bg-main-600 group group-item tw-py-16 tw-ps-10 tw-pe-4 tw-rounded-2xl h-100 d-flex flex-column justify-content-center tw-duration-200'>
                  <span className='tw-mb-13 group-hover-item-text-invert'>
                    <Image
                      width={57}
                      height={51}
                      src='/assets/images/icons/service-icon4.svg'
                      alt='Icon'
                      className='animate__heartBeat'
                    />
                  </span>
                  <div>
                    <div className='group-hover-item-d-none tw-mb-4'>
                      <span className='tw-py-1 tw-px-305 rounded-pill bg-main-50 text-uppercase text-neutral-500 tw-text-xs fw-semibold group-hover-text-white tw-duration-200 group-hover-bg-main-two-600'>
                        Easy Invoicing
                      </span>
                    </div>
                    <h5 className='group-hover-text-white tw-duration-200 max-w-250-px'>
                      Website migration. Made simple.
                    </h5>
                    <p className='text-neutral-300 tw-mt-3 line-clamp-2 d-none group-hover-item-d-block'>
                      Web hosting provides everything you idea online. From
                      where your website
                    </p>
                    <a
                      href='#'
                      className='d-flex align-items-center tw-gap-205 text-main-600 fw-bold d-lg-flex align-items-center tw-gap-305 group-hover-text-white tw-duration-200 tw-mt-6 tw-transition-0'
                    >
                      Learn More
                      <i className='ph ph-arrow-right tw-text-sm' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='swiper-slide tw-pb-105'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={1000}
            >
              <div className='square-bg-shape position-relative tw-rounded-2xl z-1 animation-item  tw-h-424-px'>
                <div className='service-item bg-white hover-bg-main-600 group group-item tw-py-16 tw-ps-10 tw-pe-4 tw-rounded-2xl h-100 d-flex flex-column justify-content-center tw-duration-200'>
                  <span className='tw-mb-13 group-hover-item-text-invert'>
                    <Image
                      width={53}
                      height={48}
                      src='/assets/images/icons/service-icon3.svg'
                      alt='Icon'
                      className='animate__heartBeat'
                    />
                  </span>
                  <div>
                    <div className='group-hover-item-d-none tw-mb-4'>
                      <span className='tw-py-1 tw-px-305 rounded-pill bg-main-50 text-uppercase text-neutral-500 tw-text-xs fw-semibold group-hover-text-white tw-duration-200 group-hover-bg-main-two-600'>
                        Easy Invoicing
                      </span>
                    </div>
                    <h5 className='group-hover-text-white tw-duration-200 max-w-250-px'>
                      Live and kicking. 24/7.
                    </h5>
                    <p className='text-neutral-300 tw-mt-3 line-clamp-2 d-none group-hover-item-d-block'>
                      Web hosting provides everything you idea online. From
                      where your website
                    </p>
                    <a
                      href='#'
                      className='d-flex align-items-center tw-gap-205 text-main-600 fw-bold d-lg-flex align-items-center tw-gap-305 group-hover-text-white tw-duration-200 tw-mt-6 tw-transition-0'
                    >
                      Learn More
                      <i className='ph ph-arrow-right tw-text-sm' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className='service-slider-pagination pagination-style-two d-lg-non d-flex align-items-center justify-content-center tw-mt-605'></div>
      </div>
    </section>
  );
};

export default ServicesOne;
