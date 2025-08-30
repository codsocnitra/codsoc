"use client";
import React from "react";

const DeliveryInformationForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const fastName = formData.get("fastName");
    const lastName = formData.get("lastName");
    const address = formData.get("address");
    const city = formData.get("city");
    const houseNumber = formData.get("houseNumber");
    const apartment = formData.get("apartment");
    const zipCode = formData.get("zipCode");
    const phone = formData.get("phone");
    const additionalInfo = formData.get("additionalInfo");
    // Handle the form submission logic here, e.g., send to an API or update state
    console.log("Delivery Information submitted:", {
      fastName,
      lastName,
      address,
      city,
      houseNumber,
      apartment,
      zipCode,
      phone,
      additionalInfo,
    });
  };
  return (
    <form onSubmit={handleSubmit} className='form-submit'>
      <div className='row gy-4'>
        <div className='col-sm-6'>
          <div className='position-relative'>
            <input
              name='fastName'
              type='text'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
              placeholder='First Name'
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-fill ph-user' />
            </span>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='position-relative'>
            <input
              name='lastName'
              type='text'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
              placeholder='Last Name'
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-fill ph-user' />
            </span>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='position-relative'>
            <input
              name='address'
              type='text'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
              placeholder='Address here'
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-fill ph-map-pin' />
            </span>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='position-relative'>
            <select
              name='city'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
            >
              <option value='current City'>Current City</option>
              <option value='Old City'>Old City</option>
            </select>
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-bold ph-caret-down' />
            </span>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='position-relative'>
            <input
              name='houseNumber'
              type='text'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
              placeholder='House Number & street number'
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-bold ph-house' />
            </span>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='position-relative'>
            <input
              name='apartment'
              type='text'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
              placeholder='Apartment, suit, Unit etc'
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-fill ph-map-pin' />
            </span>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='position-relative'>
            <input
              name='zipCode'
              type='text'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
              placeholder='Zip Code'
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-fill ph-map-pin-simple' />
            </span>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='position-relative'>
            <input
              name='phone'
              type='text'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none'
              placeholder='Your Phone'
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-50 translate-middle-y tw-end-0 tw-me-6'>
              <i className='ph-fill ph-phone' />
            </span>
          </div>
        </div>
        <div className='col-sm-12'>
          <div className='position-relative'>
            <textarea
              name='additionalInfo'
              className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-neutral-500 fw-medium tw-px-6 tw-py-4 tw-pe-15 tw-rounded-lg shadow-none tw-min-h-210-px'
              placeholder='Write Something....'
              defaultValue={""}
            />
            <span className='tw-text-xl text-main-600 d-flex tw-leading-none position-absolute top-0 tw-mt-6 tw-end-0 tw-me-6'>
              <i className='ph-fill ph-user' />
            </span>
          </div>
        </div>
        <div className='col-sm-12'>
          <button
            type='submit'
            className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke  tw-gap-5 group active--translate-y-2 tw-px-4 tw-py-505 fw-medium btn-main hover-style-one w-100 tw-rounded-lg'
            data-block='button'
          >
            <span className='button__flair' />
            <span className='button__label'>Save All Information</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default DeliveryInformationForm;
