"use client";
import Image from "next/image";
import React, { useState } from "react";

const AboutThree: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const accordionItems = [
    {
      title: "Automate everything",
      content:
        "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
    },
    {
      title: "Deploy AI",
      content:
        "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
    },
    {
      title: "Powerful reporting",
      content:
        "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
    },
  ];
  return (
    <section className='about-two py-120 position-relative z-1 overflow-hidden'>
      <Image
        width={419}
        height={640}
        src='/assets/images/bg/mash-gradient-bg3.png'
        alt='Gradient'
        className='position-absolute tw-start-0 top-0 z-n1'
      />
      <div className='container'>
        <div className='row gy-4 flex-wrap-reverse'>
          <div className='col-lg-6'>
            <div className='position-relative'>
              <div className='tw-ps-14 position-relative'>
                <Image
                  width={602}
                  height={668}
                  src='/assets/images/thumbs/about-four-thumb-1.png'
                  alt='Thumb'
                  className='w-100'
                />
                <Image
                  width={69}
                  height={64}
                  src='/assets/images/shapes/revenue-shape.png'
                  alt=''
                  className='flower animate__wobble__two position-absolute tw-start-0 bottom-100 tw--m-24-px z-n1'
                />
              </div>
              <div className='position-absolute bottom-0 tw-start-0 tw-mb-6'>
                <Image
                  width={115}
                  height={195}
                  src='/assets/images/thumbs/about-four-thumb-3.png'
                  alt='Thumb'
                  className='d-sm-block d-none tw-mb-4 animated-upDown'
                />
                <Image
                  width={221}
                  height={200}
                  src='/assets/images/thumbs/about-four-thumb-2.png'
                  alt='Thumb'
                  className='d-block common-shadow-twentyFour tw-rounded-2xl animated-upDown animation-delay-1'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='ps-xl-5'>
              <div className='tw-mb-10'>
                <h4 className='tw-mb-2 fw-bold line-clamp-1 font-caveat text-capitalize text-crm'>
                  with the world's favorite CRM
                </h4>
                <h2 className='splitTextStyleOne text-heading text-capitalize'>
                  improve <span className='text-crm'>customer</span>
                  relationships today
                </h2>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                  Sassly-CRM in the past allowing you to focus more on your
                  business simply enjoy your newfound legal time to reflect
                  leaving pen
                </p>
              </div>

              <div className='accordion common-accordion'>
                {accordionItems.map((item, index) => (
                  <div
                    key={index}
                    className='accordion-item tw-px-40-px tw-rounded-xl section-bg-one border-0 tw-mb-6'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    <h5 className='accordion-header'>
                      <button
                        className={`accordion-button tw-py-6 shadow-none px-0 bg-transparent h5 ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        type='button'
                      >
                        {item.title}
                      </button>
                    </h5>

                    {openIndex === index && (
                      <div className='accordion-collapse show'>
                        <div className='accordion-body ps-0 pt-0 pe-0 tw-pb-6'>
                          <p className='text-neutral-500'>{item.content}</p>
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

export default AboutThree;
