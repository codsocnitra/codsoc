"use client";
import Link from "next/link";
import React, { useState } from "react";

const FaqTwo: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const faqItems = [
    {
      question: "How does GoDaddy help small business owners succeed?",
      answer:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      question: "Why do I need a website for my business?",
      answer:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      question: "Why do I need a professional email?",
      answer:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      question: "What makes GoDaddy Web Hosting the world leader?",
      answer:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      question: "Why choose GoDaddy for WordPress?",
      answer:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
  ];
  return (
    <section className='faq-two py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-lg-4'>
            <div>
              <div
                className='bg-neutral-100 tw-py-3 tw-px-305 rounded-pill text-heading fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <span className='tw-w-205 tw-h-205 bg-yellow rounded-circle' />
                Up to <span className='text-yellow'>70%</span> off managed cloud
                hosting
              </div>{" "}
              <h2 className='splitTextStyleOne text-heading text-capitalize'>
                Frequently ask
                <span className='font-dm-serif fst-italic fw-normal'>
                  Questions
                </span>
              </h2>
              <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-350-px fw-medium'>
                In today's competitive business, the demand for efficient In
                today's competitive cost-effective
              </p>
              <div
                className='tw-mt-9'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={900}
              >
                <Link
                  href='#'
                  className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke tw-gap-5 group active--translate-y-2 tw-px-17 rounded-pill tw-py-505 fw-medium'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <span className='button__label'>Clients Area</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='ps-xl-5'>
              <div className='accordion common-accordion style-two'>
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className='accordion-item tw-py-8 tw-px-40-px tw-rounded-xl bg-transparent border-0 mb-0'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    <h5 className='accordion-header d-flex align-items-center justify-content-between tw-gap-3'>
                      <button
                        className={`accordion-button shadow-none p-0 line-clamp-3 bg-transparent h5 ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        type='button'
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        aria-expanded={openIndex === index}
                      >
                        {item.question}
                      </button>
                    </h5>

                    {openIndex === index && (
                      <div className='accordion-collapse show'>
                        <div className='accordion-body p-0 tw-mt-605 max-w-620-px'>
                          <p className='text-neutral-500'>{item.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTwo;
