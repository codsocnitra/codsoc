"use client";
import React from "react";

const FooterSearchFormFour: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log("Email Submitted:", email);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='position-relative common-shadow-twentySeven rounded-pill'
    >
      <input
        name='email'
        type='email'
        className='form-control shadow-none bg-white border border-white focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 rounded-pill focus-outline-0 tw-ps-12 tw-pe-14'
        placeholder='Enter your e-mail'
      />
      <span className='text-neutral-600 tw-text-xl position-absolute tw-start-0 top-50 translate-middle-y tw-ms-5 tw-leading-none'>
        <i className='ph-bold ph-envelope-simple' />
      </span>
      <button
        type='submit'
        className='flex-grow-1 hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center d-flex justify-content-center tw-gap-5 group active--translate-y-2 rounded-pill fw-bold p-0 tw-w-11 tw-h-11 bg-main-600 tw-text-xl text-heading rounded-circle position-absolute tw-end-0 top-50 translate-middle-y tw-me-2'
        data-block='button'
      >
        <span className='button__flair' />
        <span className='button__label'>
          <i className='ph-bold ph-arrow-up-right' />
        </span>
      </button>
    </form>
  );
};

export default FooterSearchFormFour;
