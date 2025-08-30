"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FAQOne: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const accordionData = [
    {
      title: "Tailored solution",
      content:
        "We customize our technology to fit your specific need ensuring the best possible outcomes.",
      img: "/assets/images/thumbs/faq-thumb2.png",
    },
    {
      title: "Cutting-edge technology",
      content:
        "We customize our technology to fit your specific need ensuring the best possible outcomes.",
      img: "/assets/images/thumbs/faq-thumb1.png",
    },
    {
      title: "Discovery & Analysis",
      content:
        "We customize our technology to fit your specific need ensuring the best possible outcomes.",
      img: "/assets/images/thumbs/faq-thumb3.png",
    },
    {
      title: "Deployment & Support",
      content:
        "We customize our technology to fit your specific need ensuring the best possible outcomes.",
      img: "/assets/images/thumbs/faq-thumb4.png",
    },
  ];
  return (
    <section className='faq py-120 position-relative z-1 overflow-hidden'>
      <Image
        width={1919}
        height={1032}
        src='/assets/images/shapes/faq-bg.png'
        alt='tech'
        className='position-absolute tw-start-0 top-0 w-100 h-100 z-n1'
      />
      <div className='container'>
        <div className='tw-mb-8'>
          <span className='tw-py-1 tw-px-705 bg-white text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205'>
            tech solution
          </span>
          <div className='d-flex flex-lg-nowrap flex-wrap justify-content-between align-items-center'>
            <div className='max-w-672-px'>
              <h3 className='splitTextStyleOne fw-light tw-leading-104'>
                <span className='d-inline-block fw-semibold'>
                  The Complete{" "}
                </span>{" "}
                <span className='d-inline-block'> Platform </span>{" "}
                <span className='d-inline-block fw-semibold'>To </span>{" "}
                <span className='d-inline-block fw-semibold'> Power </span>{" "}
                <span className='d-inline-block fw-semibold'>Your </span>{" "}
                <span className='d-inline-block fw-semibold'>Operations</span>
              </h3>
            </div>
            <Link
              href='/register'
              className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>Sign up Now</span>
            </Link>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-5'>
            <p className='splitTextStyleOne text-neutral-600 max-w-500-px tw-mb-15'>
              In today's competitive business, the demand for efficient and
              cost-effective IT solutions has never been more critical.
            </p>
            <div
              className='accordion common-accordion accordion-border-left'
              id='accordionExample'
            >
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className='accordion-item tw-py-4 tw-px-40-px tw-rounded-xl bg-transparent border-0 mb-0'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <h5 className='accordion-header'>
                    <button
                      className={`accordion-button tw-pb-8 tw-pt-4 shadow-none px-0 bg-transparent h5 ${
                        activeIndex === index ? "" : "collapsed"
                      }`}
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                      type='button'
                    >
                      {item.title}
                    </button>
                  </h5>

                  {activeIndex === index && (
                    <div className='accordion-collapse show'>
                      <div className='accordion-body p-0'>
                        <p className='text-neutral-500'>{item.content}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='position-relative tw-pb-8 tw-ps-12 h-100'>
              <div className='bg-white tw-p-205 tw-rounded-3xl h-100 tw-min-h-400-px'>
                <Image
                  width={805}
                  height={543}
                  src='/assets/images/thumbs/faq-thumb1.png'
                  id='faqImage'
                  alt='Image'
                  className='w-100 h-100 object-fit-cover tw-rounded-2xl tw-duration-300'
                />
              </div>
              <Image
                width={155}
                height={61}
                src='/assets/images/thumbs/faq-img-1.png'
                alt='tech'
                className='position-absolute top-0 tw-end-0 tw-mt-9 tw--me-48-px'
              />
              <Image
                width={177}
                height={158}
                src='/assets/images/thumbs/faq-img-2.png'
                alt='tech'
                className='position-absolute bottom-0 tw-end-0 tw--me-32-px'
              />
              <Image
                width={244}
                height={205}
                src='/assets/images/thumbs/faq-img-3.png'
                alt='tech'
                className='position-absolute bottom-0 tw-start-0 tw--ms-24-px'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQOne;
