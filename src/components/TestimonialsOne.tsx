"use client";
import Image from "next/image";
import React, { useState } from "react";

const TestimonialsOne: React.FC = () => {
  let [active, setActive] = useState<number>(2);
  return (
    <section className='testimonials py-120 bg-neutral-50 position-relative z-1'>
      <Image
        width={1919}
        height={1032}
        src='/assets/images/shapes/faq-bg.png'
        alt='tech'
        className='position-absolute tw-start-0 top-0 w-100 h-100 z-n1'
      />
      <div className='container'>
        <div className='max-w-602-px mx-auto text-center tw-mb-15'>
          <span className='tw-py-1 tw-px-705 bg-neutral-100 tw-text-sm fw-medium text-capitalize rounded-pill tw-mb-205'>
            Work Showcase
          </span>
          <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mb-9 d-flex gap-2'>
            <span className='d-inline-block fw-medium'>
              <span>What</span>{" "}
              <span className='fw-semibold'> Our Client </span>{" "}
              <span> Say</span> <span className='fw-semibold'>About Us</span>
            </span>
          </h3>
        </div>
        <div className='d-flex tw-gap-6 testimonials-item-wrapper flex-wrap'>
          {/* Testimonials Item Start */}
          <div
            className={`testimonials-item cursor-pointer bg-white tw-rounded-28-px border border-neutral-100 ${
              active === 1 && "active"
            }`}
          >
            <div className='current-content' onClick={() => setActive(1)}>
              <div className='tw-max-h-397-px overflow-hidden text-center'>
                <Image
                  width={300}
                  height={380}
                  src='/assets/images/thumbs/testimonials-img1.png'
                  alt='Image'
                />
              </div>
              <div className='tw-py-8 tw-px-4 text-center'>
                <h6 className='tw-mb-2'>Webcly jhonson</h6>
                <span className='text-neutral-600 fw-medium tw-text-sm'>
                  <span className='fw-semibold text-neutral-600'>
                    Tung Phan -
                  </span>
                  Ceo and Founder
                </span>
              </div>
            </div>
            <div className='hidden-content tw-px-56-px tw-py-76-px'>
              <div>
                <span className='tw-mb-6 animate-left-right animation-delay-02 tw-duration-200'>
                  <Image
                    width={100}
                    height={18}
                    src='/assets/images/icons/ratings.svg'
                    alt='tech'
                  />
                </span>
                <div className='border-bottom border-neutral-200 tw-pb-10 tw-mb-8'>
                  <p className='testimonials-item__desc h5 text-heading fw-medium tw-leading-153 animate-left-right animation-delay-03 tw-duration-200 line-clamp-4'>
                    “SassTech hires great people from a widely variety of
                    backgrounds, which simply makes our compan stronger, and we
                    couldn't be prouder of that. elevating your optimizing
                    Business Growth.”
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center tw-gap-6 animate-left-right animation-delay-04 tw-duration-200'>
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
                  <h6 className='tw-mb-2'>Webcly jhonson</h6>
                  <span className='text-neutral-600'>
                    <span className='fw-semibold text-neutral-600'>
                      Tung Phan -{" "}
                    </span>
                    and Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Item End */}
          {/* Testimonials Item Start */}
          <div
            className={`testimonials-item cursor-pointer bg-white tw-rounded-28-px border border-neutral-100 ${
              active === 2 && "active"
            }`}
          >
            <div className='current-content' onClick={() => setActive(2)}>
              <div className='tw-max-h-397-px overflow-hidden text-center'>
                <Image
                  width={300}
                  height={380}
                  src='/assets/images/thumbs/testimonials-img3.png'
                  alt='Image'
                />
              </div>
              <div className='tw-py-8 tw-px-4 text-center'>
                <h6 className='tw-mb-2'>James anderson </h6>
                <span className='text-neutral-600 fw-medium tw-text-sm'>
                  <span className='fw-semibold text-main-600'>CEO - </span> and
                  Founder
                </span>
              </div>
            </div>
            <div className='hidden-content tw-px-56-px tw-py-76-px'>
              <div>
                <span className='tw-mb-6 animate-left-right animation-delay-02 tw-duration-200'>
                  <Image
                    width={100}
                    height={18}
                    src='/assets/images/icons/ratings.svg'
                    alt='tech'
                  />
                </span>
                <div className='border-bottom border-neutral-200 tw-pb-10 tw-mb-8'>
                  <p className='testimonials-item__desc h5 text-heading fw-medium tw-leading-153 animate-left-right animation-delay-03 tw-duration-200 line-clamp-4'>
                    “SassTech hires great people from a widely variety of
                    backgrounds, which simply makes our compan stronger, and we
                    couldn't be prouder of that. elevating your optimizing
                    Business Growth.”
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center tw-gap-6 animate-left-right animation-delay-04 tw-duration-200'>
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
                    <span className='fw-semibold text-main-600'>CEO</span>
                    and Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Item End */}
          {/* Testimonials Item Start */}
          <div
            className={`testimonials-item cursor-pointer bg-white tw-rounded-28-px border border-neutral-100 ${
              active === 3 && "active"
            }`}
          >
            <div className='current-content' onClick={() => setActive(3)}>
              <div className='tw-max-h-397-px overflow-hidden text-center'>
                <Image
                  width={299}
                  height={378}
                  src='/assets/images/thumbs/testimonials-img2.png'
                  alt='Image'
                />
              </div>
              <div className='tw-py-8 tw-px-4 text-center'>
                <h6 className='tw-mb-2'>John Doe</h6>
                <span className='text-neutral-600 fw-medium tw-text-sm'>
                  <span className='fw-semibold text-neutral-600'>
                    Developer -
                  </span>
                  Web Developer
                </span>
              </div>
            </div>
            <div className='hidden-content tw-px-56-px tw-py-76-px'>
              <div>
                <span className='tw-mb-6 animate-left-right animation-delay-02 tw-duration-200'>
                  <Image
                    width={100}
                    height={18}
                    src='/assets/images/icons/ratings.svg'
                    alt='tech'
                  />
                </span>
                <div className='border-bottom border-neutral-200 tw-pb-10 tw-mb-8'>
                  <p className='testimonials-item__desc h5 text-heading fw-medium tw-leading-153 animate-left-right animation-delay-03 tw-duration-200 line-clamp-4'>
                    “SassTech hires great people from a widely variety of
                    backgrounds, which simply makes our compan stronger, and we
                    couldn't be prouder of that. elevating your optimizing
                    Business Growth.”
                  </p>
                </div>
              </div>
              <div className='d-flex align-items-center tw-gap-6 animate-left-right animation-delay-04 tw-duration-200'>
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
                  <h6 className='tw-mb-2'>Webcly jhonson</h6>
                  <span className='text-neutral-600 fw-medium tw-text-sm'>
                    <span className='fw-semibold text-neutral-600'>
                      Developer -
                    </span>
                    Web Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonials Item End */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOne;
