"use client";
import React from "react";

const FooterSearchFormOne: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Email Submitted:", email);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='d-flex flex-md-row flex-column tw-gap-5 form-submit'
    >
      <div className='position-relative flex-grow-1'>
        <input
          name='email'
          type='email'
          className='tw-h-14 tw-rounded-lg bg-white-08 tw-ps-12 border border-neutral-700 focus-border-main-600 text-white focus-outline-0 w-100 tw-pe-6'
          placeholder='Email Address'
        />
        <span className='text-white tw-text-lg position-absolute top-50 tw-start-0 tw--translate-y-50 tw-ms-5 d-flex'>
          <i className='ph ph-envelope-simple' />
        </span>
      </div>
      <button
        type='submit'
        className='btn btn-main hover-style-three button--stroke d-inline-flex align-items-center justify-content-center tw-gap-2 group active--translate-y-2 fw-semibold flex-shrink-0 hover--translate-y-1 active--translate-y-scale-9'
        data-block='button'
      >
        <span className='button__flair' />
        <span className='button__label'>Subscribe</span>
        <span className='text-white tw-text-sm tw-rounded d-flex justify-content-center align-items-center position-relative group-hover-text-main-600 tw-duration-500'>
          <i className='ph-bold ph-caret-right' />
        </span>
      </button>
    </form>
  );
};

export default FooterSearchFormOne;
