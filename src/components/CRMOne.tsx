"use client";
import Image from "next/image";
import React, { useState } from "react";

const CRMOne: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);
  const accordionData = [
    {
      title: "Automate everything",
      content:
        "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
      image: "/assets/images/thumbs/faq-thumb2.png",
    },
    {
      title: "Deploy AI",
      content:
        "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
      image: "/assets/images/thumbs/faq-thumb1.png",
    },
    {
      title: "Powerful reporting",
      content:
        "ERP provides a complete leave management system for your HR. Upcoming holidays and remaining leave balances.",
      image: "/assets/images/thumbs/faq-thumb3.png",
    },
  ];
  return (
    <section className='about-four-three position-relative z-1 overflow-hidden'>
      <div className='gradient-bg-top-bottom pb-120 tw-mx-48-px'>
        <Image
          width={281}
          height={640}
          src='/assets/images/bg/mash-gradient-bg4.png'
          alt='Gradient'
          className='position-absolute tw-end-0 bottom-100 z-n1'
        />
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-6'>
              <div className='pe-xl-5'>
                <div className='tw-mb-10'>
                  <h4 className='tw-mb-2 fw-bold line-clamp-1 font-caveat text-capitalize text-crm'>
                    with the world's favorite CRM
                  </h4>
                  <h2 className='splitTextStyleOne text-heading text-capitalize'>
                    Perfectly-timed and personal outreach
                  </h2>
                  <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                    Sassly-CRM in the past allowing you to focus more on your
                    business simply enjoy your newfound legal time to reflect
                    leaving pen
                  </p>
                </div>
                <div className='accordion common-accordion'>
                  {accordionData.map((item, index) => (
                    <div
                      key={index}
                      className='accordion-item tw-px-40-px tw-rounded-xl bg-white border-0 tw-mb-6'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={800}
                    >
                      <h5 className='accordion-header'>
                        <button
                          className={`accordion-button tw-py-6 shadow-none px-0 bg-transparent h5 ${
                            openIndex === index ? "" : "collapsed"
                          }`}
                          type='button'
                          onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                          }
                          aria-expanded={openIndex === index}
                          data-img={item.image}
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
            <div className='col-lg-6'>
              <div className='position-relative'>
                <div className='tw-ps-14 position-relative'>
                  <Image
                    width={563}
                    height={699}
                    src='/assets/images/thumbs/about-four-three-thumb1.png'
                    alt='Thumb'
                    className='w-100'
                  />
                </div>
                <div className='position-absolute bottom-0 tw-start-0 tw-mb-6'>
                  <Image
                    width={250}
                    height={113}
                    src='/assets/images/thumbs/about-four-three-thumb2.png'
                    alt='Thumb'
                    className='common-shadow-twentyFour tw-rounded-2xl tw-mb-4 animated-upDown'
                  />
                  <Image
                    width={83}
                    height={83}
                    src='/assets/images/thumbs/robot-img.png'
                    alt='Thumb'
                    className='d-block tw-ms-8 tw-rounded-2xl animated-upDown animation-delay-1'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMOne;
