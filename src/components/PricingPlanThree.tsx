"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const PricingPlanThree: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 300,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className='pricing-five py-120 bg-white'>
      <div className='container'>
        <div className='max-w-570-px text-start tw-mb-10'>
          <div
            className='bg-white tw-py-2 tw-px-7 rounded-pill text-main-600 fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            Pricing Plan
          </div>
          <h2 className='splitTextStyleOne text-heading text-capitalize tw-leading-none'>
            Affordable pricing plan for your business
          </h2>
        </div>
        <div className='swiper pricing-five-slider'>
          <Slider {...settings} className='swiper-wrapper'>
            <div
              className='swiper-slide'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div className='border border-neutral-200 tw-rounded-xl position-relative tw-p-44-px animation-item group-item group hover-border-main-600 tw-duration-200 d-flex align-items-center tw-gap-48-px'>
                <h3 className='position-absolute top-0 tw-end-0 tw-mt-10 tw-me-10'>
                  $129.<span className='tw-text-xl'>99</span>
                </h3>
                <span className='tw-w-16 tw-h-16 bg-main-50 tw-rounded-md d-flex justify-content-center align-items-center group-hover-bg-main-600 tw-duration-200 flex-shrink-0'>
                  <Image
                    width={26}
                    height={27}
                    src='/assets/images/icons/pricing-five-icon1.svg'
                    alt='Icon'
                    className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                  />
                </span>
                <div className='flex-grow-1'>
                  <span className='text-heading fw-medium tw-py-05 tw-px-6 border border-neutral-600 rounded-pill tw-text-sm'>
                    20% off
                  </span>
                  <h4 className='tw-mt-4'> Weekly package </h4>
                  <p className='text-neutral-600 tw-text-lg tw-mt-3 fw-medium max-w-432-px'>
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='swiper-slide'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div className='border border-neutral-200 tw-rounded-xl position-relative tw-p-44-px animation-item group-item group hover-border-main-600 tw-duration-200 d-flex align-items-center tw-gap-48-px'>
                <h3 className='position-absolute top-0 tw-end-0 tw-mt-10 tw-me-10'>
                  $329.<span className='tw-text-xl'>99</span>
                </h3>
                <span className='tw-w-16 tw-h-16 bg-main-50 tw-rounded-md d-flex justify-content-center align-items-center group-hover-bg-main-600 tw-duration-200 flex-shrink-0'>
                  <Image
                    width={26}
                    height={27}
                    src='/assets/images/icons/pricing-five-icon1.svg'
                    alt='Icon'
                    className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                  />
                </span>
                <div className='flex-grow-1'>
                  <span className='text-heading fw-medium tw-py-05 tw-px-6 border border-neutral-600 rounded-pill tw-text-sm'>
                    20% off
                  </span>
                  <h4 className='tw-mt-4'>Monthly package</h4>
                  <p className='text-neutral-600 tw-text-lg tw-mt-3 fw-medium max-w-432-px'>
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </p>
                </div>
              </div>
            </div>
            <div
              className='swiper-slide'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div className='border border-neutral-200 tw-rounded-xl position-relative tw-p-44-px animation-item group-item group hover-border-main-600 tw-duration-200 d-flex align-items-center tw-gap-48-px'>
                <h3 className='position-absolute top-0 tw-end-0 tw-mt-10 tw-me-10'>
                  $629.<span className='tw-text-xl'>99</span>
                </h3>
                <span className='tw-w-16 tw-h-16 bg-main-50 tw-rounded-md d-flex justify-content-center align-items-center group-hover-bg-main-600 tw-duration-200 flex-shrink-0'>
                  <Image
                    width={26}
                    height={27}
                    src='/assets/images/icons/pricing-five-icon1.svg'
                    alt='Icon'
                    className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                  />
                </span>
                <div className='flex-grow-1'>
                  <span className='text-heading fw-medium tw-py-05 tw-px-6 border border-neutral-600 rounded-pill tw-text-sm'>
                    20% off
                  </span>
                  <h4 className='tw-mt-4'>Yearly package</h4>
                  <p className='text-neutral-600 tw-text-lg tw-mt-3 fw-medium max-w-432-px'>
                    Subscription fee is $129.99 USD and automatically renews
                    each year.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
          <div className='pricing-five-slider-pagination pagination-style-four pagination-style-five d-flex align-items-center justify-content-center tw-gap-4 tw-mt-15 tw-pb-3'></div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanThree;
