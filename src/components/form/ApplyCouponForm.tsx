"use client";
import React from "react";

const ApplyCouponForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const searchValue = formData.get("search");
    console.log("Search Value:", searchValue);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='d-flex tw-gap-5 form-submit flex-grow-1'
    >
      <div className='position-relative flex-grow-1'>
        <input
          type='text'
          name='search'
          className='tw-h-14 tw-rounded-lg bg-white tw-ps-12 border border-neutral-200 focus-border-main-600 text-heading focus-outline-0 w-100 tw-pe-6 common-shadow-twenty'
          placeholder='Email Address'
        />
        <span className='text-heading tw-text-lg position-absolute top-50 tw-start-0 tw--translate-y-50 tw-ms-5 d-flex'>
          <i className='ph ph-envelope-simple' />
        </span>
      </div>
      <button
        type='submit'
        className='hover-black btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-2 group active--translate-y-2 fw-semibold flex-shrink-0 hover--translate-y-1 active--translate-y-scale-9 tw-px-10'
        data-block='button'
      >
        <span className='button__flair' />
        <span className='button__label'>Apply Coupon</span>
      </button>
    </form>
  );
};

export default ApplyCouponForm;
