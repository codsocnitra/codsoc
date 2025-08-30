import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductQty from "../helper/ProductQty";
import ApplyCouponForm from "./form/ApplyCouponForm";

const CartInner: React.FC = () => {
  return (
    <section className='bg-white py-120'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-11'>
            <div className='row gy-4'>
              <div className='col-lg-8 pe-lg-5'>
                <div className='table-responsive'>
                  <table className='table border border-neutral-200 min-w-max'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          className='fw-semibold tw-text-base important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'
                        >
                          Product
                        </th>
                        <th
                          scope='col'
                          className='fw-semibold tw-text-base important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'
                        >
                          Price
                        </th>
                        <th
                          scope='col'
                          className='fw-semibold tw-text-base important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'
                        >
                          Quantity
                        </th>
                        <th
                          scope='col'
                          className='fw-semibold tw-text-base important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'
                        >
                          Subtotal
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='delete-item'>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <div className='d-flex align-items-center tw-gap-4 group-item'>
                            <div className='position-relative max-w-74-px tw-h-84-px w-100'>
                              <Link
                                href='/shop-details'
                                className='d-flex justify-content-center align-items-center position-relative d-block'
                              >
                                <Image
                                  width={72}
                                  height={72}
                                  src='/assets/images/thumbs/cart-img1.png'
                                  alt='Thumb'
                                  className='group-hover-item-scale-12 tw-duration-300'
                                />
                              </Link>
                              <button
                                type='button'
                                className='text-danger tw-text-xl hover-scale-14 position-absolute top-0 tw-end-0 tw-duration-300 tw--mt-8-px tw--me-8-px delete-button'
                              >
                                <i className='ph-fill ph-x-circle' />
                              </button>
                            </div>
                            <Link
                              href='/shop-details'
                              className='fw-bold tw-text-lg text-heading hover-text-main-600 line-clamp-1'
                            >
                              Apple Watch
                            </Link>
                          </div>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $12.00
                          </span>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          {/* ProductQty */}
                          <ProductQty />
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $60.00
                          </span>
                        </td>
                      </tr>
                      <tr className='delete-item'>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <div className='d-flex align-items-center tw-gap-4 group-item'>
                            <div className='position-relative max-w-74-px tw-h-84-px w-100'>
                              <Link
                                href='/shop-details'
                                className='d-flex justify-content-center align-items-center position-relative d-block'
                              >
                                <Image
                                  width={46}
                                  height={71}
                                  src='/assets/images/thumbs/cart-img2.png'
                                  alt='Thumb'
                                  className='group-hover-item-scale-12 tw-duration-300'
                                />
                              </Link>
                              <button
                                type='button'
                                className='text-danger tw-text-xl hover-scale-14 position-absolute top-0 tw-end-0 tw-duration-300 tw--mt-8-px tw--me-8-px delete-button'
                              >
                                <i className='ph-fill ph-x-circle' />
                              </button>
                            </div>
                            <Link
                              href='/shop-details'
                              className='fw-bold tw-text-lg text-heading hover-text-main-600 line-clamp-1'
                            >
                              Sumsang Hand Set
                            </Link>
                          </div>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $34.00
                          </span>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          {/* ProductQty */}
                          <ProductQty />
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $68.00
                          </span>
                        </td>
                      </tr>
                      <tr className='delete-item'>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <div className='d-flex align-items-center tw-gap-4 group-item'>
                            <div className='position-relative max-w-74-px tw-h-84-px w-100'>
                              <Link
                                href='/shop-details'
                                className='d-flex justify-content-center align-items-center position-relative d-block'
                              >
                                <Image
                                  width={74}
                                  height={80}
                                  src='/assets/images/thumbs/cart-img3.png'
                                  alt='Thumb'
                                  className='group-hover-item-scale-12 tw-duration-300'
                                />
                              </Link>
                              <button
                                type='button'
                                className='text-danger tw-text-xl hover-scale-14 position-absolute top-0 tw-end-0 tw-duration-300 tw--mt-8-px tw--me-8-px delete-button'
                              >
                                <i className='ph-fill ph-x-circle' />
                              </button>
                            </div>
                            <Link
                              href='/shop-details'
                              className='fw-bold tw-text-lg text-heading hover-text-main-600 line-clamp-1'
                            >
                              Tata Brand Car
                            </Link>
                          </div>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $345.00
                          </span>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          {/* ProductQty */}
                          <ProductQty />
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $345.00
                          </span>
                        </td>
                      </tr>
                      <tr className='delete-item'>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <div className='d-flex align-items-center tw-gap-4 group-item'>
                            <div className='position-relative max-w-74-px tw-h-84-px w-100'>
                              <Link
                                href='/shop-details'
                                className='d-flex justify-content-center align-items-center position-relative d-block'
                              >
                                <Image
                                  width={50}
                                  height={78}
                                  src='/assets/images/thumbs/cart-img4.png'
                                  alt='Thumb'
                                  className='group-hover-item-scale-12 tw-duration-300'
                                />
                              </Link>
                              <button
                                type='button'
                                className='text-danger tw-text-xl hover-scale-14 position-absolute top-0 tw-end-0 tw-duration-300 tw--mt-8-px tw--me-8-px delete-button'
                              >
                                <i className='ph-fill ph-x-circle' />
                              </button>
                            </div>
                            <Link
                              href='/shop-details'
                              className='fw-bold tw-text-lg text-heading hover-text-main-600 line-clamp-1'
                            >
                              Sumsang Hand Set
                            </Link>
                          </div>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $34.00
                          </span>
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          {/* ProductQty */}
                          <ProductQty />
                        </td>
                        <td className='important-tw-py-5 important-tw-px-9 border-bottom border-neutral-200'>
                          <span className='fw-bold tw-text-lg text-heading'>
                            $68.00
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan={4}
                          className='important-tw-py-5 important-tw-px-9 border-top border-neutral-200 text-center'
                        >
                          <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
                            <button
                              type='button'
                              className='tw-py-3 tw-px-6 rounded-pill border border-neutral-200 text-neutral-600 fw-semibold tw-text-sm text-capitalize hover-bg-main-600 hover-text-white hover-border-main-600 tw-duration-300'
                            >
                              Return to Shop
                            </button>
                            <button
                              type='button'
                              className='tw-py-3 tw-px-6 rounded-pill border border-neutral-200 text-neutral-600 fw-semibold tw-text-sm text-capitalize hover-bg-main-600 hover-text-white hover-border-main-600 tw-duration-300'
                            >
                              Update Cart
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          colSpan={4}
                          className='important-tw-py-5 important-tw-px-9 border-top border-neutral-200 text-center'
                        >
                          <div className='d-flex align-items-center tw-gap-10'>
                            <span className='fw-bold tw-text-lg text-heading line-clamp-1'>
                              Coupon Code
                            </span>

                            {/* ApplyCouponForm */}
                            <ApplyCouponForm />
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='border border-neutral-200 tw-p-5'>
                  <h5 className='text-center tw-text-lg tw-mb-10'>
                    Calculate Shipping
                  </h5>
                  <div className='d-flex flex-column tw-gap-4'>
                    <div className='border tw-rounded tw-py-3 tw-px-5 text-heading d-flex align-items-center justify-content-between'>
                      <span className='fw-semibold tw-text-base text-capitalize'>
                        Bangladesh
                      </span>
                      <span className='fw-medium tw-text-base text-capitalize text-neutral-600'>
                        country
                      </span>
                    </div>
                    <div className='border tw-rounded tw-py-3 tw-px-5 text-heading d-flex align-items-center justify-content-between'>
                      <span className='fw-semibold tw-text-base text-capitalize'>
                        Mirpur Dohs
                      </span>
                      <span className='fw-medium tw-text-base text-capitalize text-neutral-600'>
                        Dhaka-1200
                      </span>
                    </div>
                    <div className='border tw-rounded tw-py-3 tw-px-5 text-heading d-flex align-items-center justify-content-between'>
                      <span className='fw-semibold tw-text-base text-capitalize'>
                        Postal Code
                      </span>
                      <span className='fw-medium tw-text-base text-capitalize text-neutral-600'>
                        3215
                      </span>
                    </div>
                    <div className='border tw-rounded tw-py-3 tw-px-5 text-heading d-flex align-items-center justify-content-between'>
                      <span className='fw-semibold tw-text-base text-capitalize'>
                        Bangladesh
                      </span>
                      <span className='fw-medium tw-text-base text-capitalize text-neutral-600'>
                        country
                      </span>
                    </div>
                  </div>
                  <div className='tw-mt-6'>
                    <Link
                      href='/checkout'
                      className='tw-rounded-md tw-py-3 tw-px-6 bg-neutral-200 text-heading fw-bold w-100 text-center hover-bg-main-600 hover-text-white active-scale-094 tw-duration-200'
                    >
                      Calculate Shipping
                    </Link>
                  </div>
                </div>
                <div className='border border-neutral-200 tw-p-5 tw-mt-10'>
                  <h5 className='text-center tw-text-lg tw-mb-10'>
                    Total Cart
                  </h5>
                  <div className='d-flex flex-column tw-gap-4'>
                    <div className='border tw-rounded tw-py-3 tw-px-5 text-heading d-flex align-items-center justify-content-between'>
                      <span className='fw-semibold tw-text-base text-uppercase'>
                        Subtotal
                      </span>
                      <span className='fw-medium tw-text-base text-capitalize text-heading'>
                        $345.00
                      </span>
                    </div>
                    <div className='border tw-rounded tw-py-3 tw-px-5 text-heading d-flex align-items-center justify-content-between'>
                      <span className='fw-semibold tw-text-base text-uppercase'>
                        Total
                      </span>
                      <span className='fw-semibold tw-text-base text-capitalize text-heading'>
                        $450.00
                      </span>
                    </div>
                  </div>
                  <div className='tw-mt-6'>
                    <Link
                      href='/checkout'
                      className='hover-theme hover--translate-y-1 bg-crm active--translate-y-scale-9 btn button--stroke  tw-gap-5 group active--translate-y-2 px-xxl-5 px-xl-4 px-3 tw-py-405 fw-medium btn-main-two hover-style-two w-100'
                      data-block='button'
                    >
                      <span className='button__flair' />
                      <span className='button__label'>Proceed to checkout</span>
                    </Link>
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

export default CartInner;
