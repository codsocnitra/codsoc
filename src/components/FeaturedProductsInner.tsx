import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProductsInner: React.FC = () => {
  return (
    <section className='shop py-120'>
      <div className='container'>
        <div className='max-w-672-px text-start tw-mb-12'>
          <span className='text-main-600 tw-text-lg fw-semibold'>
            Featured Product
          </span>
          <h3 className='splitTextStyleOne text-heading text-capitalize'>
            Featured Products
          </h3>
        </div>
        <div className='row gy-4 product-item-wrapper'>
          <div className='col-xl-3 col-md-4 col-sm-6 col-xs-6'>
            <div className='product-item group-item d-flex flex-column tw-gap-5 hover-common-shadow-four bg-white tw-pb-2 tw-rounded-2xl'>
              <div className='product-item__thumb position-relative overflow-hidden d-block border border-neutral-200 tw-rounded-2xl tw-min-h-290-px d-flex justify-content-center align-items-center'>
                <Link href='/shop-detail' className='d-block'>
                  <Image
                    width={210}
                    height={212}
                    src='/assets/images/thumbs/product-img1.png'
                    alt='Product Thumbnail'
                    className='group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <div className='d-flex flex-column tw-gap-3 position-absolute top-0 tw-end-0 tw-mt-4 tw-me-4 translate-x-100-16 group-hover-item-translate-x-0 tw-duration-500'>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-eye' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-star' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-arrows-down-up' />
                  </button>
                </div>
                <div className='position-absolute tw-start-0 bottom-0 tw-mb-4 tw-px-6 w-100 tw-scale-04 tw-invisible opacity-0 group-hover-item-opacity-1 group-hover-item-visible group-hover-item-scale-1 tw-duration-500'>
                  <Link
                    href='/cart'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-black hover-style-one button--stroke d-sm-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-3 tw-py-305 tw-text-sm fw-semibold rounded-pill w-100'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Add To Cart</span>
                  </Link>
                </div>
              </div>
              <div className='product-item__content text-center tw-px-2'>
                <ul className='d-inline-flex align-items-center tw-gap-1'>
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
                <h6 className='tw-text-base tw-my-205'>
                  <Link href='/shop-detail'>Smart wireless headphone</Link>
                </h6>
                <span className='text-heading fw-medium'>$112.00</span>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-4 col-sm-6 col-xs-6'>
            <div className='product-item group-item d-flex flex-column tw-gap-5 hover-common-shadow-four bg-white tw-pb-2 tw-rounded-2xl'>
              <div className='product-item__thumb position-relative overflow-hidden d-block border border-neutral-200 tw-rounded-2xl tw-min-h-290-px d-flex justify-content-center align-items-center'>
                <Link href='/shop-detail' className='d-block'>
                  <Image
                    width={198}
                    height={201}
                    src='/assets/images/thumbs/product-img2.png'
                    alt='Product Thumbnail'
                    className='group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <div className='d-flex flex-column tw-gap-3 position-absolute top-0 tw-end-0 tw-mt-4 tw-me-4 translate-x-100-16 group-hover-item-translate-x-0 tw-duration-500'>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-eye' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-star' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-arrows-down-up' />
                  </button>
                </div>
                <div className='position-absolute tw-start-0 bottom-0 tw-mb-4 tw-px-6 w-100 tw-scale-04 tw-invisible opacity-0 group-hover-item-opacity-1 group-hover-item-visible group-hover-item-scale-1 tw-duration-500'>
                  <Link
                    href='/cart'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-black hover-style-one button--stroke d-sm-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-3 tw-py-305 tw-text-sm fw-semibold rounded-pill w-100'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Add To Cart</span>
                  </Link>
                </div>
              </div>
              <div className='product-item__content text-center tw-px-2'>
                <ul className='d-inline-flex align-items-center tw-gap-1'>
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
                <h6 className='tw-text-base tw-my-205'>
                  <Link href='/shop-detail'>Go pro hero action camera</Link>
                </h6>
                <span className='text-heading fw-medium'>$112.00</span>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-4 col-sm-6 col-xs-6'>
            <div className='product-item group-item d-flex flex-column tw-gap-5 hover-common-shadow-four bg-white tw-pb-2 tw-rounded-2xl'>
              <div className='product-item__thumb position-relative overflow-hidden d-block border border-neutral-200 tw-rounded-2xl tw-min-h-290-px d-flex justify-content-center align-items-center'>
                <Link href='/shop-detail' className='d-block'>
                  <Image
                    width={111}
                    height={177}
                    src='/assets/images/thumbs/product-img3.png'
                    alt='Product Thumbnail'
                    className='group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <div className='d-flex flex-column tw-gap-3 position-absolute top-0 tw-end-0 tw-mt-4 tw-me-4 translate-x-100-16 group-hover-item-translate-x-0 tw-duration-500'>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-eye' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-star' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-arrows-down-up' />
                  </button>
                </div>
                <div className='position-absolute tw-start-0 bottom-0 tw-mb-4 tw-px-6 w-100 tw-scale-04 tw-invisible opacity-0 group-hover-item-opacity-1 group-hover-item-visible group-hover-item-scale-1 tw-duration-500'>
                  <Link
                    href='/cart'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-black hover-style-one button--stroke d-sm-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-3 tw-py-305 tw-text-sm fw-semibold rounded-pill w-100'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Add To Cart</span>
                  </Link>
                </div>
              </div>
              <div className='product-item__content text-center tw-px-2'>
                <ul className='d-inline-flex align-items-center tw-gap-1'>
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
                <h6 className='tw-text-base tw-my-205'>
                  <Link href='/shop-detail'>Colorful apple Ipad</Link>
                </h6>
                <span className='text-heading fw-medium'>$112.00</span>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-4 col-sm-6 col-xs-6'>
            <div className='product-item group-item d-flex flex-column tw-gap-5 hover-common-shadow-four bg-white tw-pb-2 tw-rounded-2xl'>
              <div className='product-item__thumb position-relative overflow-hidden d-block border border-neutral-200 tw-rounded-2xl tw-min-h-290-px d-flex justify-content-center align-items-center'>
                <Link href='/shop-detail' className='d-block'>
                  <Image
                    width={188}
                    height={190}
                    src='/assets/images/thumbs/product-img4.png'
                    alt='Product Thumbnail'
                    className='group-hover-item-scale-12 tw-duration-300'
                  />
                </Link>
                <div className='d-flex flex-column tw-gap-3 position-absolute top-0 tw-end-0 tw-mt-4 tw-me-4 translate-x-100-16 group-hover-item-translate-x-0 tw-duration-500'>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-eye' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-star' />
                  </button>
                  <button
                    type='button'
                    className='tw-w-10 tw-h-10 bg-neutral-200 text-heading hover-bg-main-600 hover-text-white tw-text-lg d-flex justify-content-center align-items-center tw-rounded-md tw-duration-200 active-scale-09'
                  >
                    <i className='ph-bold ph-arrows-down-up' />
                  </button>
                </div>
                <div className='position-absolute tw-start-0 bottom-0 tw-mb-4 tw-px-6 w-100 tw-scale-04 tw-invisible opacity-0 group-hover-item-opacity-1 group-hover-item-visible group-hover-item-scale-1 tw-duration-500'>
                  <Link
                    href='/cart'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-black hover-style-one button--stroke d-sm-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-3 tw-py-305 tw-text-sm fw-semibold rounded-pill w-100'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Add To Cart</span>
                  </Link>
                </div>
              </div>
              <div className='product-item__content text-center tw-px-2'>
                <ul className='d-inline-flex align-items-center tw-gap-1'>
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
                <h6 className='tw-text-base tw-my-205'>
                  <Link href='/shop-detail'>Humidifiler white grow</Link>
                </h6>
                <span className='text-heading fw-medium'>$112.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsInner;
