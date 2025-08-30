"use client";
import Link from "next/link";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ShopGallery = dynamic(() => import("../helper/ShopGallery"));

const ShopDetailsInner: React.FC = () => {
  let [count, setCount] = useState<number>(1);
  let [color, setColor] = useState<number>(1);
  let [size, setSize] = useState<number>(1);
  return (
    <>
      <section className='bg-white py-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-11'>
              <div className='row gy-5'>
                <div className='col-lg-6 pe-xxl-5'>
                  {/* ShopGallery */}
                  <ShopGallery />
                </div>
                <div className='col-lg-6'>
                  <div className='ps-lg-5'>
                    <div className='d-flex align-items-center tw-gap-5 tw-mb-3'>
                      <span className='bg-danger text-white tw-px-2 tw-py-05 tw-text-sm fw-bold tw-rounded'>
                        -5%
                      </span>
                      <div className='d-flex align-items-center tw-gap-2'>
                        <ul className='d-flex align-items-center tw-gap-1'>
                          <li className='text-star text-main-600 tw-text-base d-flex'>
                            <i className='ph-fill ph-star' />
                          </li>
                          <li className='text-star text-main-600 tw-text-base d-flex'>
                            <i className='ph-fill ph-star' />
                          </li>
                          <li className='text-star text-main-600 tw-text-base d-flex'>
                            <i className='ph-fill ph-star' />
                          </li>
                          <li className='text-star text-main-600 tw-text-base d-flex'>
                            <i className='ph-fill ph-star' />
                          </li>
                          <li className='text-star text-neutral-300 tw-text-base d-flex'>
                            <i className='ph-fill ph-star' />
                          </li>
                        </ul>
                        <span className='text-neutral-600 fw-medium'>
                          ( 2 Reviews )
                        </span>
                      </div>
                    </div>
                    <h3 className='tw-mb-4 text-44-px splitTextStyleOne'>
                      Smart Wirless Headphone
                    </h3>
                    <p className='text-neutral-600 splitTextStyleOne fw-medium'>
                      There are many variations of passages of Lorem Ipsum
                      available, but majority have suffered teration in some
                      form, by injected humour, or randomised
                    </p>
                    <div className='tw-mt-705'>
                      <div className='d-flex align-items-center tw-gap-7 flex-wrap'>
                        <h4 className='tw-text-3xl'>$600.00</h4>
                        <h6 className='text-main-600'>$,900.00</h6>
                      </div>
                      <div className='tw-my-8 d-flex align-items-center tw-gap-6 flex-wrap'>
                        <span className='fw-bold tw-text-base'>Color :</span>
                        <div className='d-flex align-items-center tw-gap-3'>
                          <button
                            onClick={() => setColor(1)}
                            type='button'
                            className='color-picker border border-neutral-300 tw-w-5 tw-h-5 rounded-circle d-flex justify-content-center align-items-center'
                          >
                            <span
                              className={`color-picker__color tw-w-3 tw-h-3 rounded-circle tw-duration-300 product-bg-1 ${
                                color === 1 && "active"
                              }`}
                            />
                          </button>
                          <button
                            onClick={() => setColor(2)}
                            type='button'
                            className='color-picker border border-neutral-300 tw-w-5 tw-h-5 rounded-circle d-flex justify-content-center align-items-center'
                          >
                            <span
                              className={`color-picker__color tw-w-3 tw-h-3 rounded-circle tw-duration-300 product-bg-2 ${
                                color === 2 && "active"
                              }`}
                            />
                          </button>
                          <button
                            onClick={() => setColor(3)}
                            type='button'
                            className='color-picker border border-neutral-300 tw-w-5 tw-h-5 rounded-circle d-flex justify-content-center align-items-center'
                          >
                            <span
                              className={`color-picker__color tw-w-3 tw-h-3 rounded-circle tw-duration-300 product-bg-3 ${
                                color === 3 && "active"
                              }`}
                            />
                          </button>
                          <button
                            onClick={() => setColor(4)}
                            type='button'
                            className='color-picker border border-neutral-300 tw-w-5 tw-h-5 rounded-circle d-flex justify-content-center align-items-center'
                          >
                            <span
                              className={`color-picker__color tw-w-3 tw-h-3 rounded-circle tw-duration-300 product-bg-4 ${
                                color === 4 && "active"
                              }`}
                            />
                          </button>
                          <button
                            onClick={() => setColor(5)}
                            type='button'
                            className='color-picker border border-neutral-300 tw-w-5 tw-h-5 rounded-circle d-flex justify-content-center align-items-center'
                          >
                            <span
                              className={`color-picker__color tw-w-3 tw-h-3 rounded-circle tw-duration-300 product-bg-5 ${
                                color === 5 && "active"
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                      <div className='tw-my-8 d-flex align-items-center tw-gap-6 flex-wrap'>
                        <span className='fw-bold tw-text-base'>Size :</span>
                        <div className='d-flex align-items-center tw-gap-3'>
                          <button
                            onClick={() => setSize(1)}
                            type='button'
                            className={`size-btn border border-neutral-300 tw-py-05 tw-px-205 tw-rounded text-heading fw-semibold ${
                              size === 1 && "bg-main-600 text-white"
                            }`}
                          >
                            XL
                          </button>
                          <button
                            onClick={() => setSize(2)}
                            type='button'
                            className={`size-btn border border-neutral-300 tw-py-05 tw-px-205 tw-rounded text-heading fw-semibold ${
                              size === 2 && "bg-main-600 text-white"
                            }`}
                          >
                            XXL
                          </button>
                          <button
                            onClick={() => setSize(3)}
                            type='button'
                            className={`size-btn border border-neutral-300 tw-py-05 tw-px-205 tw-rounded text-heading fw-semibold ${
                              size === 3 && "bg-main-600 text-white"
                            }`}
                          >
                            M
                          </button>
                          <button
                            onClick={() => setSize(4)}
                            type='button'
                            className={`size-btn border border-neutral-300 tw-py-05 tw-px-205 tw-rounded text-heading fw-semibold ${
                              size === 4 && "bg-main-600 text-white"
                            }`}
                          >
                            L
                          </button>
                          <button
                            onClick={() => setSize(5)}
                            type='button'
                            className={`size-btn border border-neutral-300 tw-py-05 tw-px-205 tw-rounded text-heading fw-semibold ${
                              size === 5 && "bg-main-600 text-white"
                            }`}
                          >
                            4XL
                          </button>
                        </div>
                      </div>
                      <div className='tw-my-8 d-flex align-items-center tw-gap-6 flex-wrap'>
                        <span className='fw-bold tw-text-base'>Quantity:</span>
                        <div className='d-flex align-items-center tw-gap-3'>
                          <div className='border border-neutral-400 tw-h-15 tw-rounded-md d-flex align-items-center py-4 tw-px-5 tw-gap-6'>
                            <button
                              onClick={() => {
                                count > 1 && setCount(count - 1);
                              }}
                              type='button'
                              className='text-heading hover-text-main-600 active-scale-09 tw-text-xl tw-leading-none decrement-btn'
                            >
                              <i className='ph-bold ph-minus' />
                            </button>
                            <input
                              value={count}
                              readOnly
                              type='text'
                              className='border-0 text-center focus-outline-0 text-heading fw-bold tw-w-11 input-value'
                            />
                            <button
                              onClick={() => {
                                setCount(count + 1);
                              }}
                              type='button'
                              className='text-heading hover-text-main-600 active-scale-09 tw-text-xl tw-leading-none increment-btn'
                            >
                              <i className='ph-bold ph-plus' />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className='tw-my-8 d-flex align-items-center tw-gap-6 flex-wrap'>
                        <Link
                          href='/cart'
                          className='btn btn-main hover-black hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-2 group active--translate-y-2 fw-medium flex-shrink-0 hover--translate-y-1 active--translate-y-scale-9 rounded-pill tw-py-5 max-w-420-px w-100'
                          data-block='button'
                        >
                          <span className='button__flair' />
                          <span className='text-white tw-text-xl tw-rounded d-flex justify-content-center align-items-center position-relative  tw-duration-500'>
                            <i className='ph ph-basket' />
                          </span>
                          <span className='button__label'>Add To Cart</span>
                        </Link>
                        <button
                          type='button'
                          className='tw-w-15 tw-h-15 bg-white common-shadow-fifteen d-flex justify-content-center align-items-center tw-text-2xl rounded-circle hover-bg-main-600 hover-text-white tw-duration-300'
                        >
                          <i className='ph ph-star' />
                        </button>
                      </div>
                      <div className='tw-mt-9'>
                        <p className='text-heading fw-medium tw-mb-605'>
                          Ground delivery charge{" "}
                          <span className='fw-bold'>$180.00</span>{" "}
                        </p>
                        <div className='d-flex flex-column tw-gap-205'>
                          <p className='text-heading fw-medium'>
                            {" "}
                            <span className='fw-bold'>SKU:</span>
                            N/A{" "}
                          </p>
                          <p className='text-heading fw-medium'>
                            {" "}
                            <span className='fw-bold'>Category:</span>Pizza{" "}
                          </p>
                          <p className='text-heading fw-medium'>
                            {" "}
                            <span className='fw-bold'>Tags:</span> Burgers,
                            Tacos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopDetailsInner;
