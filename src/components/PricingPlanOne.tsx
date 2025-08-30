"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PricingPlanOne: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Monthly");

  const tabs = ["Monthly", "Annually"];
  return (
    <section className='pricing-plan py-120'>
      <div className='container'>
        <div className='max-w-672-px text-center mx-auto tw-mb-12'>
          <div
            className='bg-neutral-100 tw-py-3 tw-px-305 rounded-pill text-heading fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <span className='tw-w-205 tw-h-205 bg-yellow rounded-circle' />
            Up to <span className='text-yellow'>70%</span> off managed cloud
            hosting
          </div>
          <h2 className='splitTextStyleOne text-heading text-capitalize'>
            Pick your perfect
            <span className='font-dm-serif fst-italic fw-normal'>plan</span>
          </h2>
          <p className='text-neutral-500 tw-mt-5 splitTextStyleOne max-w-570-px mx-auto'>
            In today's competitive business, the demand for efficient In today's
            competitive cost-effective IT solutions has never been more critic.
            business
          </p>
          <div
            className='text-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <ul
              className='animate-background-wrapper z-1 position-relative nav nav-pills active-text-white d-inline-flex bg-white common-shadow-four tw-p-1 rounded-pill mb-0 tw-mt-7'
              role='tablist'
            >
              {tabs.map((tab) => (
                <li
                  className='nav-item flex-grow-1'
                  role='presentation'
                  key={tab}
                >
                  <button
                    className={`nav-link w-100 active-scale-094 rounded-pill tw-px-705 tw-py-205 bg-transparent fw-semibold text-neutral-600 hover-text-main-600 h-100 line-clamp-1 ${
                      activeTab === tab ? "active" : ""
                    }`}
                    type='button'
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='tab-content' id='pills-tabTwoContent'>
          <div
            className='tab-pane fade show active'
            id='pills-Monthly'
            role='tabpanel'
            aria-labelledby='pills-Monthly-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-xl-4 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='pricing-item position-relative border border-neutral-300 tw-p-7 tw-rounded-2xl bg-white bg-white tw-duration-300 hover-border-main-600'>
                  <Image
                    width={114}
                    height={9}
                    src='/assets/images/shapes/arrow-curve-main.png'
                    alt='Arrow'
                    className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705 opacity-05'
                  />
                  <div>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='fw-bold text-heading tw-mb-105'>
                        <span className='text-main-600'>85%</span> OFF
                      </span>
                      <h5 className='tw-mb-8'>Basic plan</h5>
                      <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-5'>
                        <h2 className='mb-0'>
                          $<span className='current-price'>1.99</span>
                          <span className='tw-text-xl pricing-duration'>
                            /Monthly
                          </span>{" "}
                        </h2>
                        <div className='form-check form-switch mb-0'>
                          <input
                            className='form-check-input pricing-item-toggle'
                            type='checkbox'
                            role='switch'
                          />
                        </div>
                      </div>
                      <span className='d-block fw-bold text-main-600 tw-mb-8'>
                        +2 months free
                      </span>
                    </div>
                    <Link
                      href='/pricing-plan'
                      className='text-heading fw-bold tw-text-base w-100 tw-px-6 tw-py-4 tw-rounded-md border border-main-600 hover-text-white hover-bg-main-600 text-center hover--translate-y-1 active--translate-y-scale-9'
                    >
                      See Plan &amp; Pricing
                    </Link>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='text-heading tw-mt-3'>
                        Renews at <span className='text-main-600'>$9.88</span>{" "}
                        /month
                      </span>
                      <span className='d-block tw-h-px bg-neutral-100 tw-my-6' />
                      <ul className='feature-list d-flex flex-column tw-gap-6'>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={14}
                              height={16}
                              src='/assets/images/icons/pricing-icon4.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unmetered bandwidth{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={17}
                              src='/assets/images/icons/pricing-icon5.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free SSL certificate{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={18}
                              src='/assets/images/icons/pricing-icon6.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free domain included{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon7.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unlimited free SSL{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='tw-mt-12 d-flex justify-content-center'>
                    <button
                      type='button'
                      className='see-all-btn d-flex align-items-center justify-content-center tw-gap-305 text-main-600 fw-bold hover-underline d-lg-flex align-items-center tw-gap-305'
                    >
                      See all features
                      <i className='ph-bold ph-caret-down' />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={700}
              >
                <div className='pricing-item position-relative border border-neutral-300 tw-p-7 tw-rounded-2xl bg-white bg-white tw-duration-300 hover-border-main-600'>
                  <Image
                    width={114}
                    height={91}
                    src='/assets/images/shapes/arrow-curve-main.png'
                    alt='Arrow'
                    className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705'
                  />
                  <div>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='fw-bold text-heading tw-mb-105'>
                        <span className='text-main-600'>85%</span> OFF
                      </span>
                      <h5 className='tw-mb-8'>Premium plan</h5>
                      <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-5'>
                        <h2 className='mb-0'>
                          $<span className='current-price'>10.99</span>
                          <span className='tw-text-xl pricing-duration'>
                            /Monthly
                          </span>{" "}
                        </h2>
                        <div className='form-check form-switch mb-0'>
                          <input
                            className='form-check-input pricing-item-toggle'
                            type='checkbox'
                            role='switch'
                          />
                        </div>
                      </div>
                      <span className='d-block fw-bold text-main-600 tw-mb-8'>
                        +2 months free
                      </span>
                    </div>
                    <Link
                      href='/pricing-plan'
                      className='text-heading fw-bold tw-text-base w-100 tw-px-6 tw-py-4 tw-rounded-md border border-main-600 hover-text-white hover-bg-main-600 text-center hover--translate-y-1 active--translate-y-scale-9'
                    >
                      See Plan &amp; Pricing
                    </Link>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='text-heading tw-mt-3'>
                        Renews at <span className='text-main-600'>$9.88</span>{" "}
                        /month
                      </span>
                      <span className='d-block tw-h-px bg-neutral-100 tw-my-6' />
                      <ul className='feature-list d-flex flex-column tw-gap-6'>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={14}
                              height={16}
                              src='/assets/images/icons/pricing-icon4.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unmetered bandwidth{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={17}
                              src='/assets/images/icons/pricing-icon5.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free SSL certificate{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={18}
                              src='/assets/images/icons/pricing-icon6.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free domain included{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon7.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unlimited free SSL{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='tw-mt-12 d-flex justify-content-center'>
                    <button
                      type='button'
                      className='see-all-btn d-flex align-items-center justify-content-center tw-gap-305 text-main-600 fw-bold hover-underline d-lg-flex align-items-center tw-gap-305'
                    >
                      See all features
                      <i className='ph-bold ph-caret-down' />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <div className='pricing-item position-relative border border-neutral-300 tw-p-7 tw-rounded-2xl bg-white bg-white tw-duration-300 hover-border-main-600'>
                  <Image
                    width={114}
                    height={91}
                    src='/assets/images/shapes/arrow-curve-main.png'
                    alt='Arrow'
                    className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705 opacity-05'
                  />
                  <div>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='fw-bold text-heading tw-mb-105'>
                        <span className='text-main-600'>85%</span> OFF
                      </span>
                      <h5 className='tw-mb-8'>Pro plan</h5>
                      <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-5'>
                        <h2 className='mb-0'>
                          $<span className='current-price'>20.99</span>
                          <span className='tw-text-xl pricing-duration'>
                            /Monthly
                          </span>{" "}
                        </h2>
                        <div className='form-check form-switch mb-0'>
                          <input
                            className='form-check-input pricing-item-toggle'
                            type='checkbox'
                            role='switch'
                          />
                        </div>
                      </div>
                      <span className='d-block fw-bold text-main-600 tw-mb-8'>
                        +2 months free
                      </span>
                    </div>
                    <Link
                      href='/pricing-plan'
                      className='text-heading fw-bold tw-text-base w-100 tw-px-6 tw-py-4 tw-rounded-md border border-main-600 hover-text-white hover-bg-main-600 text-center hover--translate-y-1 active--translate-y-scale-9'
                    >
                      See Plan &amp; Pricing
                    </Link>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='text-heading tw-mt-3'>
                        Renews at <span className='text-main-600'>$9.88</span>{" "}
                        /month
                      </span>
                      <span className='d-block tw-h-px bg-neutral-100 tw-my-6' />
                      <ul className='feature-list d-flex flex-column tw-gap-6'>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={14}
                              height={16}
                              src='/assets/images/icons/pricing-icon4.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unmetered bandwidth{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={17}
                              src='/assets/images/icons/pricing-icon5.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free SSL certificate{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={18}
                              src='/assets/images/icons/pricing-icon6.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free domain included{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon7.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unlimited free SSL{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='tw-mt-12 d-flex justify-content-center'>
                    <button
                      type='button'
                      className='see-all-btn d-flex align-items-center justify-content-center tw-gap-305 text-main-600 fw-bold hover-underline d-lg-flex align-items-center tw-gap-305'
                    >
                      See all features
                      <i className='ph-bold ph-caret-down' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-Annually'
            role='tabpanel'
            aria-labelledby='pills-Annually-tab'
            tabIndex={0}
          >
            <div className='row gy-4'>
              <div
                className='col-xl-4 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='pricing-item position-relative border border-neutral-300 tw-p-7 tw-rounded-2xl bg-white bg-white tw-duration-300 hover-border-main-600'>
                  <Image
                    width={114}
                    height={91}
                    src='/assets/images/shapes/arrow-curve-main.png'
                    alt='Arrow'
                    className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705 opacity-05'
                  />
                  <div>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='fw-bold text-heading tw-mb-105'>
                        <span className='text-main-600'>85%</span> OFF
                      </span>
                      <h5 className='tw-mb-8'>Basic plan</h5>
                      <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-5'>
                        <h2 className='mb-0'>
                          $<span className='current-price'>19</span>
                          <span className='tw-text-xl pricing-duration'>
                            /Yearly
                          </span>{" "}
                        </h2>
                        <div className='form-check form-switch mb-0'>
                          <input
                            className='form-check-input pricing-item-toggle'
                            type='checkbox'
                            role='switch'
                          />
                        </div>
                      </div>
                      <span className='d-block fw-bold text-main-600 tw-mb-8'>
                        +2 months free
                      </span>
                    </div>
                    <Link
                      href='/pricing-plan'
                      className='text-heading fw-bold tw-text-base w-100 tw-px-6 tw-py-4 tw-rounded-md border border-main-600 hover-text-white hover-bg-main-600 text-center hover--translate-y-1 active--translate-y-scale-9'
                    >
                      See Plan &amp; Pricing
                    </Link>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='text-heading tw-mt-3'>
                        Renews at <span className='text-main-600'>$9.88</span>{" "}
                        /month
                      </span>
                      <span className='d-block tw-h-px bg-neutral-100 tw-my-6' />
                      <ul className='feature-list d-flex flex-column tw-gap-6'>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={14}
                              height={16}
                              src='/assets/images/icons/pricing-icon4.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unmetered bandwidth{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={17}
                              src='/assets/images/icons/pricing-icon5.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free SSL certificate{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={18}
                              src='/assets/images/icons/pricing-icon6.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free domain included{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon7.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unlimited free SSL{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='tw-mt-12 d-flex justify-content-center'>
                    <button
                      type='button'
                      className='see-all-btn d-flex align-items-center justify-content-center tw-gap-305 text-main-600 fw-bold hover-underline d-lg-flex align-items-center tw-gap-305'
                    >
                      See all features
                      <i className='ph-bold ph-caret-down' />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={700}
              >
                <div className='pricing-item position-relative border border-neutral-300 tw-p-7 tw-rounded-2xl bg-white bg-white tw-duration-300 hover-border-main-600'>
                  <Image
                    width={114}
                    height={91}
                    src='/assets/images/shapes/arrow-curve-main.png'
                    alt='Arrow'
                    className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705'
                  />
                  <div>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='fw-bold text-heading tw-mb-105'>
                        <span className='text-main-600'>85%</span> OFF
                      </span>
                      <h5 className='tw-mb-8'>Premium plan</h5>
                      <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-5'>
                        <h2 className='mb-0'>
                          $<span className='current-price'>109</span>
                          <span className='tw-text-xl pricing-duration'>
                            /Yearly
                          </span>{" "}
                        </h2>
                        <div className='form-check form-switch mb-0'>
                          <input
                            className='form-check-input pricing-item-toggle'
                            type='checkbox'
                            role='switch'
                          />
                        </div>
                      </div>
                      <span className='d-block fw-bold text-main-600 tw-mb-8'>
                        +2 months free
                      </span>
                    </div>
                    <Link
                      href='/pricing-plan'
                      className='text-heading fw-bold tw-text-base w-100 tw-px-6 tw-py-4 tw-rounded-md border border-main-600 hover-text-white hover-bg-main-600 text-center hover--translate-y-1 active--translate-y-scale-9'
                    >
                      See Plan &amp; Pricing
                    </Link>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='text-heading tw-mt-3'>
                        Renews at <span className='text-main-600'>$9.88</span>{" "}
                        /month
                      </span>
                      <span className='d-block tw-h-px bg-neutral-100 tw-my-6' />
                      <ul className='feature-list d-flex flex-column tw-gap-6'>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={14}
                              height={16}
                              src='/assets/images/icons/pricing-icon4.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unmetered bandwidth{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={17}
                              src='/assets/images/icons/pricing-icon5.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free SSL certificate{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={18}
                              src='/assets/images/icons/pricing-icon6.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free domain included{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon7.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unlimited free SSL{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='tw-mt-12 d-flex justify-content-center'>
                    <button
                      type='button'
                      className='see-all-btn d-flex align-items-center justify-content-center tw-gap-305 text-main-600 fw-bold hover-underline d-lg-flex align-items-center tw-gap-305'
                    >
                      See all features
                      <i className='ph-bold ph-caret-down' />
                    </button>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-4 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <div className='pricing-item position-relative border border-neutral-300 tw-p-7 tw-rounded-2xl bg-white bg-white tw-duration-300 hover-border-main-600'>
                  <Image
                    width={114}
                    height={91}
                    src='/assets/images/shapes/arrow-curve-main.png'
                    alt='Arrow'
                    className='position-absolute tw-end-0 top-0 tw-mt-15 tw-me-16 tw-pe-705 opacity-05'
                  />
                  <div>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='fw-bold text-heading tw-mb-105'>
                        <span className='text-main-600'>85%</span> OFF
                      </span>
                      <h5 className='tw-mb-8'>Pro plan</h5>
                      <div className='d-flex align-items-center justify-content-between tw-gap-1 tw-mb-5'>
                        <h2 className='mb-0'>
                          $<span className='current-price'>209</span>
                          <span className='tw-text-xl pricing-duration'>
                            /Yearly
                          </span>{" "}
                        </h2>
                        <div className='form-check form-switch mb-0'>
                          <input
                            className='form-check-input pricing-item-toggle'
                            type='checkbox'
                            role='switch'
                          />
                        </div>
                      </div>
                      <span className='d-block fw-bold text-main-600 tw-mb-8'>
                        +2 months free
                      </span>
                    </div>
                    <Link
                      href='/pricing-plan'
                      className='text-heading fw-bold tw-text-base w-100 tw-px-6 tw-py-4 tw-rounded-md border border-main-600 hover-text-white hover-bg-main-600 text-center hover--translate-y-1 active--translate-y-scale-9'
                    >
                      See Plan &amp; Pricing
                    </Link>
                    <div className='tw-ps-205 tw-pt-205'>
                      <span className='text-heading tw-mt-3'>
                        Renews at <span className='text-main-600'>$9.88</span>{" "}
                        /month
                      </span>
                      <span className='d-block tw-h-px bg-neutral-100 tw-my-6' />
                      <ul className='feature-list d-flex flex-column tw-gap-6'>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={14}
                              height={16}
                              src='/assets/images/icons/pricing-icon4.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unmetered bandwidth{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={17}
                              src='/assets/images/icons/pricing-icon5.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free SSL certificate{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={18}
                              src='/assets/images/icons/pricing-icon6.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free domain included{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon7.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Unlimited free SSL{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={19}
                              height={19}
                              src='/assets/images/icons/pricing-icon1.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>Single website </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={18}
                              height={22}
                              src='/assets/images/icons/pricing-icon2.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            One-click WordPress installs{" "}
                          </span>
                        </li>
                        <li className='d-flex align-items-center tw-gap-305 fw-medium'>
                          <span>
                            <Image
                              width={16}
                              height={18}
                              src='/assets/images/icons/pricing-icon3.svg'
                              alt=''
                            />
                          </span>
                          <span className='text-heading'>
                            Free WordPress website transfer
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='tw-mt-12 d-flex justify-content-center'>
                    <button
                      type='button'
                      className='see-all-btn d-flex align-items-center justify-content-center tw-gap-305 text-main-600 fw-bold hover-underline d-lg-flex align-items-center tw-gap-305'
                    >
                      See all features
                      <i className='ph-bold ph-caret-down' />
                    </button>
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

export default PricingPlanOne;
