import Link from "next/link";
import React from "react";

const PricingPlanInner: React.FC = () => {
  return (
    <section className='pricing-plan-one py-120'>
      <div className='container'>
        <div className='max-w-672-px text-center mx-auto tw-mb-12'>
          <h3 className='splitTextStyleOne text-heading text-capitalize'>
            Seamless Integration for enhancing experience{" "}
          </h3>
          <p className='text-neutral-500 tw-mt-5 splitTextStyleOne max-w-570-px mx-auto'>
            Create tasks with various custom statuses to focus more on your keep
            track of the progress of each why in
          </p>
        </div>
        <div className='row gy-4'>
          <div
            className='col-xl-4 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='position-relative bg-neutral-100 tw-px-7 tw-py-16 bg-white hover-border-main-600'>
              <div>
                <div className='tw-ps-205'>
                  <h5 className='tw-mb-1'>Basic plan</h5>
                  <p className='text-neutral-500'>
                    Customized anything in anytime
                  </p>
                  <span className='d-block tw-h-px bg-neutral-200 tw-my-6' />
                  <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-10'>
                    <h3 className='mb-0'>
                      $1.99<span className='tw-text-xl fw-medium'>/Yearly</span>
                    </h3>
                  </div>
                </div>
                <Link
                  href='/login'
                  className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-md tw-py-6 fw-bold'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <div className='d-flex align-items-center tw-gap-2 z-1'>
                    <span className='button__label'>Start Free Trial</span>
                  </div>
                </Link>
                <span className='text-heading tw-mt-3 text-center d-block fw-medium'>
                  Renews at $9.88/month
                </span>
                <div className='tw-ps-205'>
                  <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Real-time tracking and notifications
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={620}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Real-time analytics
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={640}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Drag and drop templates
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={660}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Project Management
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={680}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        24/7 email and chat support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-xl-4 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='position-relative bg-neutral-100 tw-px-7 tw-py-16 bg-white hover-border-main-600'>
              <div>
                <div className='tw-ps-205'>
                  <h5 className='tw-mb-1'>Premium plan</h5>
                  <p className='text-neutral-500'>
                    Customized anything in anytime
                  </p>
                  <span className='d-block tw-h-px bg-neutral-200 tw-my-6' />
                  <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-10'>
                    <h3 className='mb-0'>
                      $9.99<span className='tw-text-xl fw-medium'>/Yearly</span>
                    </h3>
                  </div>
                </div>
                <Link
                  href='/login'
                  className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-md tw-py-6 fw-bold'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <div className='d-flex align-items-center tw-gap-2 z-1'>
                    <span className='button__label'>Start Free Trial</span>
                  </div>
                </Link>
                <span className='text-heading tw-mt-3 text-center d-block fw-medium'>
                  Renews at $9.88/month
                </span>
                <div className='tw-ps-205'>
                  <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Real-time tracking and notifications
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={620}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Real-time analytics
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={640}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Drag and drop templates
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={660}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Project Management
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={680}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        24/7 email and chat support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-xl-4 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={900}
          >
            <div className='position-relative bg-neutral-100 tw-px-7 tw-py-16 bg-white hover-border-main-600'>
              <div>
                <div className='tw-ps-205'>
                  <h5 className='tw-mb-1'>Pro plan</h5>
                  <p className='text-neutral-500'>
                    Customized anything in anytime
                  </p>
                  <span className='d-block tw-h-px bg-neutral-200 tw-my-6' />
                  <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-10'>
                    <h3 className='mb-0'>
                      $19.99
                      <span className='tw-text-xl fw-medium'>/Yearly</span>
                    </h3>
                  </div>
                </div>
                <Link
                  href='/login'
                  className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-md tw-py-6 fw-bold'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <div className='d-flex align-items-center tw-gap-2 z-1'>
                    <span className='button__label'>Start Free Trial</span>
                  </div>
                </Link>
                <span className='text-heading tw-mt-3 text-center d-block fw-medium'>
                  Renews at $9.88/month
                </span>
                <div className='tw-ps-205'>
                  <div className='d-flex flex-column tw-gap-5 tw-mt-10'>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Real-time tracking and notifications
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={620}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Real-time analytics
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={640}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Drag and drop templates
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={660}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
                        Project Management
                      </span>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-305'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={680}
                    >
                      <span className='tw-w-7 tw-h-7 bg-main-50 rounded-circle d-flex justify-content-center align-items-center tw-text-sm'>
                        <i className='text-gradient-teal ph-bold ph-check' />
                      </span>
                      <span className='text-heading fw-semibold tw-text-base'>
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

export default PricingPlanInner;
