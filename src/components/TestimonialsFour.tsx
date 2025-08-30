"use client";
import Image from "next/image";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";

const TestimonialsFour: React.FC = () => {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    fade: true,
    arrows: false, // We'll use custom arrows
    pauseOnHover: false,
  };
  return (
    <section className='testimonials-four py-120 position-relative z-1'>
      <Image
        width={1920}
        height={787}
        src='/assets/images/bg/mash-gradient-bg5.png'
        alt='Gradient BG'
        className='position-absolute tw-start-0 top-0 w-100 h-100 z-n1'
      />
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg-6'>
            <div>
              <div className='tw-mb-10'>
                <h4 className='tw-mb-2 fw-bold line-clamp-1 font-caveat text-capitalize text-crm'>
                  with the world's favorite CRM
                </h4>
                <h2 className='splitTextStyleOne text-white text-capitalize'>
                  improve customer relationships today
                </h2>
                <p className='splitTextStyleOne text-neutral-300 tw-mt-8 max-w-570-px fw-normal tw-text-lg'>
                  Sassly-CRM in the past allowing you to focus more on your
                  business simply enjoy your newfound legal time to reflect
                  leaving pen
                </p>
              </div>
              <div className='tw-mt-12 d-flex align-items-center tw-gap-405 flex-sm-nowrap flex-wrap'>
                <div className='tw-rounded-xl bg-white-06 tw-py-205 tw-px-5 d-flex align-items-center tw-gap-4'>
                  <span>
                    <Image
                      width={59}
                      height={59}
                      src='/assets/images/icons/testimonials-four-icon1.png'
                      alt='Icon'
                    />
                  </span>
                  <div>
                    <div className='d-flex align-items-center tw-gap-05'>
                      <span className='text-orange tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-orange tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-orange tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-orange tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-orange tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                    </div>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-text-xs text-white fw-bold'>4.3</span>
                      <span className='tw-text-xs text-white fw-normal'>
                        score, 9 reviews
                      </span>
                    </div>
                  </div>
                </div>
                <div className='tw-rounded-xl bg-white-06 tw-py-205 tw-px-5 d-flex align-items-center tw-gap-4'>
                  <span>
                    <Image
                      width={64}
                      height={61}
                      src='/assets/images/icons/testimonials-four-icon2.png'
                      alt='Icon'
                    />
                  </span>
                  <div>
                    <div className='d-flex align-items-center tw-gap-05'>
                      <span className='text-green tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-green tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-green tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-green tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                      <span className='text-green tw-text-lg'>
                        <i className='ph-fill ph-star' />
                      </span>
                    </div>
                    <div className='d-flex align-items-center tw-gap-2'>
                      <span className='tw-text-xs text-white fw-bold'>4.3</span>
                      <span className='tw-text-xs text-white fw-normal'>
                        score, 9 reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='testimonials-four-slider swiper position-relative'>
              <Slider ref={sliderRef} {...settings} className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='bg-white tw-rounded-2xl common-shadow-twentySix box-layer tw-mb-12'>
                    <div className='box-layer-two tw-p-54-px tw-rounded-2xl bg-white'>
                      <span className='tw-mb-5 animate-left-right animation-delay-3 tw-duration-200'>
                        <Image
                          width={103}
                          height={41}
                          src='/assets/images/thumbs/website-owner-img1.png'
                          alt='Logo'
                          className='animate__flipInY'
                        />
                      </span>
                      <p className='text-heading h3 fw-medium font-body tw-leading-153 animate-left-right animation-delay-2 tw-duration-200'>
                        “Sasstech hires great people from a widely variety of
                        backgrounds, which simply makes our compan stronger, and
                        we couldn't be prouder of that.”
                      </p>
                      <span className='d-block tw-h-px bg-neutral-200 tw-my-6' />
                      <div className='d-flex align-items-center justify-content-between animate-left-right animation-delay-3'>
                        <div className='d-flex align-items-center tw-gap-6 tw-duration-200'>
                          <div className='tw-h-84-px tw-w-84-px rounded-circle'>
                            <Image
                              width={84}
                              height={84}
                              src='/assets/images/thumbs/testimonials-short-img1.png'
                              alt='Image'
                              className='w-100 h-100 object-fit-cover'
                            />
                          </div>
                          <div>
                            <h6 className='tw-mb-2'>Robiul Hasan</h6>
                            <span className='text-neutral-600'>
                              <span className='fw-semibold text-blue'>CEO</span>
                              and Founder
                            </span>
                          </div>
                        </div>
                        <div>
                          <Image
                            width={100}
                            height={18}
                            src='/assets/images/icons/ratings.svg'
                            alt='Rating'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='bg-white tw-rounded-2xl common-shadow-twentySix box-layer tw-mb-12'>
                    <div className='box-layer-two tw-p-54-px tw-rounded-2xl bg-white'>
                      <span className='tw-mb-5 animate-left-right animation-delay-3 tw-duration-200'>
                        <Image
                          width={80}
                          height={25}
                          src='/assets/images/thumbs/website-owner-img2.png'
                          alt='Logo'
                          className='animate__flipInY'
                        />
                      </span>
                      <p className='text-heading h3 fw-medium font-body tw-leading-153 animate-left-right animation-delay-2 tw-duration-200'>
                        “Sasstech hires great people from a wide range of
                        backgrounds, which simply strengthens our company, and
                        we couldn't be prouder of that,” the company says.
                      </p>
                      <span className='d-block tw-h-px bg-neutral-200 tw-my-6' />
                      <div className='d-flex align-items-center justify-content-between animate-left-right animation-delay-3'>
                        <div className='d-flex align-items-center tw-gap-6 tw-duration-200'>
                          <div className='tw-h-84-px tw-w-84-px rounded-circle'>
                            <Image
                              width={84}
                              height={84}
                              src='/assets/images/thumbs/testimonials-short-img2.png'
                              alt='Image'
                              className='w-100 h-100 object-fit-cover'
                            />
                          </div>
                          <div>
                            <h6 className='tw-mb-2'>John Doe</h6>
                            <span className='text-neutral-600'>
                              <span className='fw-semibold text-blue'>CEO</span>
                              and Founder
                            </span>
                          </div>
                        </div>
                        <div>
                          <Image
                            width={100}
                            height={18}
                            src='/assets/images/icons/ratings.svg'
                            alt='Rating'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='bg-white tw-rounded-2xl common-shadow-twentySix box-layer tw-mb-12'>
                    <div className='box-layer-two tw-p-54-px tw-rounded-2xl bg-white'>
                      <span className='tw-mb-5 animate-left-right animation-delay-3 tw-duration-200'>
                        <Image
                          width={120}
                          height={38}
                          src='/assets/images/thumbs/website-owner-img3.png'
                          alt='Logo'
                          className='animate__flipInY'
                        />
                      </span>
                      <p className='text-heading h3 fw-medium font-body tw-leading-153 animate-left-right animation-delay-2 tw-duration-200'>
                        "Sasstech brings together talented individuals from
                        diverse backgrounds, strengthening our company in the
                        best way possible.
                      </p>
                      <span className='d-block tw-h-px bg-neutral-200 tw-my-6' />
                      <div className='d-flex align-items-center justify-content-between animate-left-right animation-delay-3'>
                        <div className='d-flex align-items-center tw-gap-6 tw-duration-200'>
                          <div className='tw-h-84-px tw-w-84-px rounded-circle'>
                            <Image
                              width={84}
                              height={84}
                              src='/assets/images/thumbs/testimonials-short-img3.png'
                              alt='Image'
                              className='w-100 h-100 object-fit-cover'
                            />
                          </div>
                          <div>
                            <h6 className='tw-mb-2'>James anderson</h6>
                            <span className='text-neutral-600'>
                              <span className='fw-semibold text-blue'>CEO</span>
                              and Founder
                            </span>
                          </div>
                        </div>
                        <div>
                          <Image
                            width={100}
                            height={18}
                            src='/assets/images/icons/ratings.svg'
                            alt='Rating'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div className='tw-w-84-px tw-h-84-px rounded-circle bg-white d-flex flex-column tw-gap-2 justify-content-center align-items-center position-absolute tw-end-0 top-50 translate-middle-y z-2 common-shadow-twentyFour tw-me-16'>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                type='button'
                className='tw-text-lg tw-leading-none text-heading hover-text-main-600 tw-px-2 tw-pt-2'
                id='testimonials-four-next'
              >
                <i className='ph-bold ph-caret-up' />
              </button>
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                type='button'
                className='tw-text-lg tw-leading-none text-heading hover-text-main-600 tw-px-2 tw-pb-2'
                id='testimonials-four-prev'
              >
                <i className='ph-bold ph-caret-down' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFour;
