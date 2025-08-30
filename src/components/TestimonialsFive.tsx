"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const TestimonialsFive: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    dots: true,
    responsive: [
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
    ],
  };
  return (
    <section className='py-120 bg-black'>
      <div className='text-center mx-auto tw-pb-15 max-w-548-px'>
        <div
          className='bg-white tw-py-2 tw-px-7 rounded-pill text-main-600 fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine'
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          data-aos-duration={600}
        >
          {" "}
          what we offering
        </div>
        <h2 className='splitTextStyleOne text-white text-capitalize tw-leading-none'>
          Trusted CRM tools by the happy users
        </h2>
      </div>
      <div>
        <div className='swiper testimonials-five-slider'>
          <Slider {...settings} className='swiper-wrapper'>
            <div className='swiper-slide px-3'>
              <div>
                <div className='common-shadow-ten tw-rounded-2xl tw-p-60-px bg-white h-100 animation-item'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5 className='tw-mb-2 text-capitalize'>william camel</h5>
                      <span className='text-neutral-500 fw-medium'>
                        Head of Design at Zazoo{" "}
                      </span>
                    </div>
                    <div>
                      <Image
                        width={100}
                        height={18}
                        src='/assets/images/icons/ratings.svg'
                        alt='Star Rating'
                      />
                    </div>
                  </div>
                  <h4 className='max-w-288-px tw-mt-8 tw-mb-9'>
                    I had a great experience with printSpace!
                  </h4>
                  <p className='text-neutral-600 tw-text-2xl tw-leading-153'>
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usable
                  </p>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-3'>
              <div>
                <div className='common-shadow-ten tw-rounded-2xl tw-p-60-px bg-white h-100 animation-item'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5 className='tw-mb-2 text-capitalize'>Robiul Hasan</h5>
                      <span className='text-neutral-500 fw-medium'>
                        Head of Design at Zazoo{" "}
                      </span>
                    </div>
                    <div>
                      <Image
                        width={100}
                        height={18}
                        src='/assets/images/icons/ratings.svg'
                        alt='Star Rating'
                      />
                    </div>
                  </div>
                  <h4 className='max-w-288-px tw-mt-8 tw-mb-9'>
                    I had a great experience with printSpace!
                  </h4>
                  <p className='text-neutral-600 tw-text-2xl tw-leading-153'>
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usable
                  </p>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-3'>
              <div>
                <div className='common-shadow-ten tw-rounded-2xl tw-p-60-px bg-white h-100 animation-item'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5 className='tw-mb-2 text-capitalize'>John Doe</h5>
                      <span className='text-neutral-500 fw-medium'>
                        Head of Design at Zazoo{" "}
                      </span>
                    </div>
                    <div>
                      <Image
                        width={100}
                        height={18}
                        src='/assets/images/icons/ratings.svg'
                        alt='Star Rating'
                      />
                    </div>
                  </div>
                  <h4 className='max-w-288-px tw-mt-8 tw-mb-9'>
                    I had a great experience with printSpace!
                  </h4>
                  <p className='text-neutral-600 tw-text-2xl tw-leading-153'>
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usable
                  </p>
                </div>
              </div>
            </div>
            <div className='swiper-slide px-3'>
              <div>
                <div className='common-shadow-ten tw-rounded-2xl tw-p-60-px bg-white h-100 animation-item'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <div>
                      <h5 className='tw-mb-2 text-capitalize'>John Smith</h5>
                      <span className='text-neutral-500 fw-medium'>
                        Head of Design at Zazoo{" "}
                      </span>
                    </div>
                    <div>
                      <Image
                        width={100}
                        height={18}
                        src='/assets/images/icons/ratings.svg'
                        alt='Star Rating'
                      />
                    </div>
                  </div>
                  <h4 className='max-w-288-px tw-mt-8 tw-mb-9'>
                    I had a great experience with printSpace!
                  </h4>
                  <p className='text-neutral-600 tw-text-2xl tw-leading-153'>
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usable
                  </p>
                </div>
              </div>
            </div>
          </Slider>
          <div className='testimonials-five-slider-pagination pagination-style-four d-flex align-items-center justify-content-center tw-gap-6 tw-mt-15 tw-pb-3'></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFive;
