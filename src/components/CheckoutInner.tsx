import Link from "next/link";
import React from "react";
import DeliveryInformationForm from "./form/DeliveryInformationForm";
import ApplyCodeForm from "./form/ApplyCodeForm";

const CheckoutInner: React.FC = () => {
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-xxl-8 col-lg-7'>
            <div>
              <h6 className='tw-mb-8'>Delivery Information</h6>
              {/* DeliveryInformationForm */}
              <DeliveryInformationForm />
            </div>
          </div>
          <div className='col-xxl-4 col-lg-5'>
            <div>
              <h5 className='text-center tw-text-2xl tw-mb-10'>
                Order Summery
              </h5>
              <div className='bg-neutral-100 tw-py-16 tw-px-11 tw-rounded-lg'>
                <div className='d-flex flex-column tw-gap-7'>
                  <div className='tw-rounded-md tw-py-3 tw-px-6 text-neutral-600 d-flex align-items-center justify-content-between bg-white'>
                    <span className='fw-semibold tw-text-base text-capitalize'>
                      Subtotal
                    </span>
                    <span className='fw-bold tw-text-base text-capitalize text-heading'>
                      $345.00
                    </span>
                  </div>
                  <div className='tw-rounded-md tw-py-3 tw-px-6 text-neutral-600 d-flex align-items-center justify-content-between bg-white'>
                    <span className='fw-semibold tw-text-base text-capitalize'>
                      Shipping Fee
                    </span>
                    <span className='fw-bold tw-text-base text-capitalize text-heading'>
                      $34.00
                    </span>
                  </div>
                  <div>
                    {/* ApplyCodeForm */}
                    <ApplyCodeForm />
                  </div>
                </div>
                <div className='tw-my-8'>
                  <div className=' d-flex align-items-center justify-content-between'>
                    <span className='fw-semibold tw-text-xl text-capitalize'>
                      Total
                    </span>
                    <span className='fw-bold tw-text-base text-capitalize text-heading'>
                      $345.00
                    </span>
                  </div>
                </div>
                <div>
                  <div className='bg-white tw-rounded-xl tw-p-705 d-flex flex-column tw-gap-305'>
                    <div className='form-check common-check common-radio tw-gap-3 mb-0'>
                      <input
                        className='form-check-input bg-neutral-200'
                        name='paymentOption'
                        type='radio'
                        id='bankTransfer'
                      />
                      <label
                        className='form-check-label fw-medium text-heading'
                        htmlFor='bankTransfer'
                      >
                        Direct Bank transfer
                      </label>
                    </div>
                    <div className='form-check common-check common-radio tw-gap-3 mb-0'>
                      <input
                        className='form-check-input bg-neutral-200'
                        name='paymentOption'
                        type='radio'
                        id='CheckPayments'
                      />
                      <label
                        className='form-check-label fw-medium text-heading'
                        htmlFor='CheckPayments'
                      >
                        Check Payments
                      </label>
                    </div>
                    <div className='form-check common-check common-radio tw-gap-3 mb-0'>
                      <input
                        className='form-check-input bg-neutral-200'
                        name='paymentOption'
                        type='radio'
                        id='CashOnDelivery'
                      />
                      <label
                        className='form-check-label fw-medium text-heading'
                        htmlFor='CashOnDelivery'
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                </div>
                <div className='tw-mt-10'>
                  <Link
                    href='#'
                    className='hover-theme hover--translate-y-1 bg-crm active--translate-y-scale-9 btn button--stroke  tw-gap-5 group active--translate-y-2 px-xxl-5 px-xl-4 px-3 tw-py-405 fw-medium btn-main-two hover-style-two w-100'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Proceed to pay</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutInner;
