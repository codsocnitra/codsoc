import Image from "next/image";
import Link from "next/link";
import React from "react";

const PricingPlanInnerTwo: React.FC = () => {
  return (
    <section className='pricing-plan-two section-bg-two py-120'>
      <div className='container'>
        <div className='max-w-672-px text-center mx-auto tw-mb-12'>
          <div
            className='bg-white tw-py-2 tw-px-705 rounded-pill fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <span className='text-gradient-teal'> what we offering </span>
          </div>
          <h3 className='splitTextStyleOne text-heading text-capitalize'>
            Trusted by <span className='text-gradient-teal'>3+ million</span>{" "}
            website owners worldwide
          </h3>
          <p className='text-neutral-500 tw-mt-5 splitTextStyleOne max-w-570-px mx-auto fw-medium'>
            In today's competitive business, the demand for efficient In today's
            competitive cost-effective IT solutions has never been more critic.
            business
          </p>
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-4'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='tw-rounded-3xl overflow-hidden bg-white bg-hover-crm group group-item tw-px-11 tw-py-14 tw-transition tw-duration-200 position-relative'>
              <Image
                width={158}
                height={169}
                src='/assets/images/shapes/half-moon-shape.png'
                alt='Arrow'
                className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705 group-hover-item-text-invert'
              />
              <div>
                <h3 className='tw-mb-5 fw-semibold group-hover-text-white tw-transition tw-duration-200'>
                  $19<span className='tw-text-xl fw-medium'>/Month</span>
                </h3>
                <p className='text-heading fw-semibold tw-text-base group-hover-text-white tw-transition tw-duration-200'>
                  Smart Pricing for good services
                </p>
                <div className='tw-mt-10'>
                  <Link
                    href='/login'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-three button--stroke d-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-3xl tw-py-6 fw-bold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <div className='d-flex align-items-center tw-gap-2 z-1'>
                      <span className='button__label'>Choose Package</span>
                      <span className='icon'>
                        <i className='ph-bold ph-arrow-up-right' />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className='tw-mt-12'>
                  <h5 className='tw-mb-9 group-hover-text-white tw-transition tw-duration-200'>
                    Regular Plan
                  </h5>
                  <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Real-time tracking and notifications
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={620}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Real-time analytics
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={640}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Drag and drop templates
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={660}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Project Management
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={680}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        24/7 email and chat support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='tw-rounded-3xl overflow-hidden bg-white bg-hover-crm group group-item tw-px-11 tw-py-14 tw-transition tw-duration-200 position-relative'>
              <Image
                width={158}
                height={169}
                src='/assets/images/shapes/half-moon-shape.png'
                alt='Arrow'
                className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705 group-hover-item-text-invert'
              />
              <div>
                <h3 className='tw-mb-5 fw-semibold group-hover-text-white tw-transition tw-duration-200'>
                  $19<span className='tw-text-xl fw-medium'>/Month</span>
                </h3>
                <p className='text-heading fw-semibold tw-text-base group-hover-text-white tw-transition tw-duration-200'>
                  Smart Pricing for good services
                </p>
                <div className='tw-mt-10'>
                  <Link
                    href='/login'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-three button--stroke d-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-3xl tw-py-6 fw-bold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <div className='d-flex align-items-center tw-gap-2 z-1'>
                      <span className='button__label'>Choose Package</span>
                      <span className='icon'>
                        <i className='ph-bold ph-arrow-up-right' />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className='tw-mt-12'>
                  <h5 className='tw-mb-9 group-hover-text-white tw-transition tw-duration-200'>
                    Regular Plan
                  </h5>
                  <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Real-time tracking and notifications
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={620}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Real-time analytics
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={640}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Drag and drop templates
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={660}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Project Management
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={680}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        24/7 email and chat support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={900}
          >
            <div className='tw-rounded-3xl overflow-hidden bg-white bg-hover-crm group group-item tw-px-11 tw-py-14 tw-transition tw-duration-200 position-relative'>
              <Image
                width={158}
                height={169}
                src='/assets/images/shapes/half-moon-shape.png'
                alt='Arrow'
                className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705 group-hover-item-text-invert'
              />
              <div>
                <h3 className='tw-mb-5 fw-semibold group-hover-text-white tw-transition tw-duration-200'>
                  $19<span className='tw-text-xl fw-medium'>/Month</span>
                </h3>
                <p className='text-heading fw-semibold tw-text-base group-hover-text-white tw-transition tw-duration-200'>
                  Smart Pricing for good services
                </p>
                <div className='tw-mt-10'>
                  <Link
                    href='/login'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-three button--stroke d-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-3xl tw-py-6 fw-bold'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <div className='d-flex align-items-center tw-gap-2 z-1'>
                      <span className='button__label'>Choose Package</span>
                      <span className='icon'>
                        <i className='ph-bold ph-arrow-up-right' />
                      </span>
                    </div>
                  </Link>
                </div>
                <div className='tw-mt-12'>
                  <h5 className='tw-mb-9 group-hover-text-white tw-transition tw-duration-200'>
                    Regular Plan
                  </h5>
                  <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Real-time tracking and notifications
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={620}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Real-time analytics
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={640}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Drag and drop templates
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={660}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        Project Management
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={680}
                    >
                      <span className='tw-w-105 tw-h-105 bg-main-600 rounded-circle' />
                      <span className='text-heading fw-semibold tw-text-base tw-transition tw-duration-200 group-hover-text-white'>
                        24/7 email and chat support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanInnerTwo;
