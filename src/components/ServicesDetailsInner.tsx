"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ServicesDetailsInner: React.FC = () => {
  const accordionData = [
    {
      title: "What is Sassly?",
      content:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "Why should I choose Sassly?",
      content:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "Can I upgrade to a different plan at a later time?",
      content:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "What’s the cost of additional users?",
      content:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "What’s the commitment?",
      content:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
    {
      title: "What languages does Sassly AI support?",
      content:
        "GoDaddy offers more than just a platform to build your website, we offer everything you need to create an effective, memorable online presence. Already have a site? We offer hosting plans that will keep it fast, secure and online. Our professional",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(1); // default open second item

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className='service-details py-120'>
      <div className='container'>
        <div className='row gy-4'>
          <div className='col-xl-4 pe-lg-4'>
            <div className='d-flex flex-column tw-gap-4'>
              <Link
                href='#'
                className='bg-neutral-50 tw-py-3 tw-pe-205 tw-ps-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-bold d-flex align-items-center justify-content-between'
              >
                Cargo Domestic Service
                <span className='tw-px-205 tw-py-3 text-neutral-600 bg-white-1 group-hover-text-white tw-duration-300 d-flex'>
                  <i className='ph ph-arrow-right' />
                </span>
              </Link>
              <Link
                href='#'
                className='bg-neutral-50 tw-py-3 tw-pe-205 tw-ps-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-bold d-flex align-items-center justify-content-between'
              >
                Air Freight Services
                <span className='tw-px-205 tw-py-3 text-neutral-600 bg-white-1 group-hover-text-white tw-duration-300 d-flex'>
                  <i className='ph ph-arrow-right' />
                </span>
              </Link>
              <Link
                href='#'
                className='bg-neutral-50 tw-py-3 tw-pe-205 tw-ps-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-bold d-flex align-items-center justify-content-between'
              >
                Intermodal Shipping
                <span className='tw-px-205 tw-py-3 text-neutral-600 bg-white-1 group-hover-text-white tw-duration-300 d-flex'>
                  <i className='ph ph-arrow-right' />
                </span>
              </Link>
              <Link
                href='#'
                className='bg-neutral-50 tw-py-3 tw-pe-205 tw-ps-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-bold d-flex align-items-center justify-content-between'
              >
                Freeze product Shipping
                <span className='tw-px-205 tw-py-3 text-neutral-600 bg-white-1 group-hover-text-white tw-duration-300 d-flex'>
                  <i className='ph ph-arrow-right' />
                </span>
              </Link>
              <Link
                href='#'
                className='bg-neutral-50 tw-py-3 tw-pe-205 tw-ps-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-bold d-flex align-items-center justify-content-between'
              >
                Hot Shot Trucking
                <span className='tw-px-205 tw-py-3 text-neutral-600 bg-white-1 group-hover-text-white tw-duration-300 d-flex'>
                  <i className='ph ph-arrow-right' />
                </span>
              </Link>
              <Link
                href='#'
                className='bg-neutral-50 tw-py-3 tw-pe-205 tw-ps-6 text-main-two-600 hover-text-white hover-bg-main-600 group tw-text-lg fw-bold d-flex align-items-center justify-content-between'
              >
                Priority Transportation
                <span className='tw-px-205 tw-py-3 text-neutral-600 bg-white-1 group-hover-text-white tw-duration-300 d-flex'>
                  <i className='ph ph-arrow-right' />
                </span>
              </Link>
            </div>
            <div className='tw-py-10 tw-px-7 text-center bg-main-two-600 tw-mt-11'>
              <span className='tw-w-92-px tw-h-84-px d-inline-flex justify-content-center align-items-center tw-text-9 text-white bg-white-01 tw-rounded-sm'>
                <i className='ph ph-phone-call' />
              </span>
              <h5 className='text-white max-w-260-px mx-auto splitTextStyleOne tw-mt-5'>
                Looking for logistics service Provider?
              </h5>
              <div className='tw-mt-11'>
                <span className='text-uppercase text-white tw-mb-2'>
                  Call anytime
                </span>
                <a
                  href='tel:+(2)871382023'
                  className='hover-white btn btn-main hover-style-two button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-py-505 rounded-pill fw-bold w-100'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <span className='button__label'>+(2) 871 382 023</span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-xl-8 ps-xl-5'>
            <div>
              <Image
                width={846}
                height={473}
                src='/assets/images/thumbs/service-details-img.png'
                alt='Thumb'
              />
              <div className='tw-mt-8 d-flex flex-column tw-gap-12'>
                <div>
                  <h4 className='tw-mb-3 splitTextStyleOne'>
                    Cargo Transportation service
                  </h4>
                  <p className='text-neutral-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Placeat qui ducimus illum modi? perspiciatis accusamus
                    soluta perferendis, ad illum, nesciunt, reiciendis iusto et
                    cupidit Repudiandae provident to consectetur, sapiente,
                    libero iure necessitatibus corporis nulla voluptate,
                    quisquam aut perspiciatis? Fugiat labore aspernatur eius,
                    perspiciatis ut molestiae, delectus rem.
                  </p>
                </div>
                <div>
                  <h5 className='tw-mb-3 splitTextStyleOne'>
                    Sed ut perspiciatis unde omnis iste natus et
                  </h5>
                  <p className='text-neutral-600'>
                    Need something changed or is there something not quite
                    working the way you envisaged? Is your van a little old and
                    tired and need refreshing? Lorem Ipsum is simply dummy text
                    of the printing and typesetting industry. Lorem Ipsum has
                    been the industry’s standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived
                    not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
                <div className='d-grid d-md-flex tw-gap-9'>
                  <div className='position-relative max-w-390-px w-100'>
                    <Image
                      width={392}
                      height={273}
                      src='/assets/images/thumbs/service-details-video-img.jpg'
                      alt='Thumb'
                      className='w-100 h-100 object-fit-cover'
                    />
                    <a
                      href='https://www.youtube.com/watch?v=MFLVmAE4cqg'
                      className='play-button bg-light-animation tw-w-75-px tw-h-75-px d-inline-flex justify-content-center align-items-center bg-white text-main-600 hover-text-main-two-700 rounded-circle tw-text-xl position-absolute tw-start-50 tw--translate-middle top-50 z-1'
                    >
                      <i className='ph-fill ph-play' />
                    </a>
                  </div>
                  <div>
                    <h4 className='tw-mb-3 splitTextStyleOne'>
                      Why Security Important?
                    </h4>
                    <p className='text-neutral-600'>
                      Lorem ipsum dolor sit amet, consectetur adipisici sed do
                      eiusmod tempor incididunt ut labore et{" "}
                    </p>
                    <ul className='d-flex flex-column tw-gap-4 tw-mt-6'>
                      <li
                        className='d-flex align-items-center tw-gap-4'
                        data-aos='fade-up'
                        data-aos-duration={1000}
                        data-aos-delay={200}
                      >
                        <span className='text-main-600 d-flex'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <span className='text-neutral-600 fw-medium'>
                          Research beyond the business plan
                        </span>
                      </li>
                      <li
                        className='d-flex align-items-center tw-gap-4'
                        data-aos='fade-up'
                        data-aos-duration={1000}
                        data-aos-delay={400}
                      >
                        <span className='text-main-600 d-flex'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <span className='text-neutral-600 fw-medium'>
                          Marketing options and rates
                        </span>
                      </li>
                      <li
                        className='d-flex align-items-center tw-gap-4'
                        data-aos='fade-up'
                        data-aos-duration={1000}
                        data-aos-delay={400}
                      >
                        <span className='text-main-600 d-flex'>
                          <i className='ph-bold ph-check' />
                        </span>
                        <span className='text-neutral-600 fw-medium'>
                          The ability to turnaround consulting
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className='text-neutral-600'>
                  There are many variations of passages of lorem ipsum is simply
                  free text available in the market, but the majority time you
                  put aside to be in our office. Lorem ipsum dolor sit amet,
                  consectetLorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.
                </p>
                <p className='bg-white border-start border-4 border-main-600 common-shadow-five tw-text-lg fw-medium text-main-two-600 tw-py-405 tw-px-6'>
                  Business is the activity of making one's living or making
                  money by produ The NDIS Cing or buying and selling products
                  akes a lifetime
                </p>
                <div>
                  <h5 className='tw-mb-8'>Eligibility checklist :</h5>
                  <div className='row gy-4'>
                    <div className='col-sm-8'>
                      <Image
                        width={518}
                        height={218}
                        src='/assets/images/thumbs/service-details-img1.jpg'
                        alt='Thumb'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                    <div className='col-sm-4'>
                      <Image
                        width={300}
                        height={218}
                        src='/assets/images/thumbs/service-details-img2.jpg'
                        alt='Thumb'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                    <div className='col-sm-4'>
                      <Image
                        width={300}
                        height={273}
                        src='/assets/images/thumbs/service-details-img3.jpg'
                        alt='Thumb'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                    <div className='col-sm-8'>
                      <Image
                        width={520}
                        height={273}
                        src='/assets/images/thumbs/service-details-img4.jpg'
                        alt='Thumb'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                  </div>
                </div>
                <div className='accordion common-accordion style-two arrow-bg-orange_border'>
                  {accordionData.map((item, index) => (
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
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={openIndex === index}
                        >
                          {item.title}
                        </button>
                      </h5>

                      {openIndex === index && (
                        <div className='accordion-collapse show'>
                          <div className='accordion-body p-0 tw-mt-605 max-w-620-px'>
                            <p className='text-neutral-500 tw-leading-212'>
                              {item.content}
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
      </div>
    </section>
  );
};

export default ServicesDetailsInner;
