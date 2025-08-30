"use client";
import Link from "next/link";
import React, { useState } from "react";

const FAQInner: React.FC = () => {
  const [openIndexOne, setOpenIndexOne] = useState<number | null>(1);
  const [openIndexTwo, setOpenIndexTwo] = useState<number | null>(1);
  const items = [
    {
      title: "What is Sassly?",
      answerText:
        "1200 GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "Why should I choose Sassly?",
      answerText:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "Can I upgrade to a different plan at a later time?",
      answerText:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "What’s the cost of additional users?",
      answerText:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "What’s the commitment?",
      answerText:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
  ];
  return (
    <>
      <section className='faq-two py-120'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-4'>
              <div>
                <h3 className='splitTextStyleOne text-heading text-capitalize'>
                  Frequently ask
                  <span className='font-dm-serif fst-italic fw-normal'>
                    Questions
                  </span>
                </h3>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-500-px tw-leading-212 fw-medium'>
                  Create tasks with various custom statuses to focus more on
                  your keep track of the progress of each why in
                </p>
                <div
                  className='tw-mt-9'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={900}
                >
                  <Link
                    href='/register'
                    className='hover-theme hover--translate-y-1 active--translate-y-scale-9 btn button--stroke tw-gap-5 group active--translate-y-2 tw-rounded-xl text-capitalize tw-px-8 tw-py-505 fw-medium btn-main-two hover-style-two'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='ps-xl-5'>
                <div className='accordion common-accordion style-two arrow-bg-orange_border'>
                  {items.map((item, index) => (
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
                            openIndexOne === index ? "" : "collapsed"
                          }`}
                          type='button'
                          onClick={() =>
                            setOpenIndexOne(
                              openIndexOne === index ? null : index
                            )
                          }
                          aria-expanded={openIndexOne === index}
                          aria-controls={`collapse-${index}`}
                        >
                          {item.title}
                        </button>
                      </h5>

                      {openIndexOne === index && (
                        <div
                          className='accordion-collapse show'
                          id={`collapse-${index}`}
                        >
                          <div className='accordion-body p-0 tw-mt-605 max-w-620-px'>
                            <p className='text-neutral-500 tw-leading-212'>
                              {item.answerText}
                            </p>
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
      <section className='pb-120'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-5'>
              <div>
                <h3 className='splitTextStyleOne text-heading text-capitalize'>
                  Navigating the Digital Marketing Landscape FAQs Unveiled
                </h3>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-500-px tw-leading-212 fw-medium'>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totamto aperiame eaque ipsa
                  quae ab illo inventore veritatis
                </p>
                <div
                  className='tw-mt-9'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={900}
                >
                  <Link
                    href='/register'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke tw-gap-5 group active--translate-y-2 tw-rounded-xl text-capitalize tw-px-8 tw-py-505 fw-medium btn-main hover-style-one'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>get started trial</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='ps-xl-5'>
                <div className='accordion common-accordion style-two style-two-three arrow-bg-orange_border'>
                  {items.map((item, index) => (
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
                            openIndexTwo === index ? "" : "collapsed"
                          }`}
                          type='button'
                          onClick={() =>
                            setOpenIndexTwo(
                              openIndexTwo === index ? null : index
                            )
                          }
                        >
                          {item.title}
                        </button>
                      </h5>
                      {openIndexTwo === index && (
                        <div className='accordion-collapse show'>
                          <div className='accordion-body p-0 tw-mt-605 max-w-620-px'>
                            <p className='text-neutral-500 tw-leading-212'>
                              {item.answerText}
                            </p>
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
    </>
  );
};

export default FAQInner;
