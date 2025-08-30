"use client";
import React from "react";

const ApplyCodeForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const voucherCode = formData.get("voucherCode");
    // Handle the voucher code submission logic here
    console.log("Voucher Code Submitted:", voucherCode);
  };
  return (
    <form onSubmit={handleSubmit} className='form-submit position-relative'>
      <input
        name='voucherCode'
        type='text'
        className='form-control tw-rounded-md tw-py-4 tw-px-6 text-neutral-600 bg-white shadow-none border border-transparent focus-border-main-600 placeholder-neutral-600 fw-bold tw-pe-140-px'
        placeholder='Enter voucher Code'
      />
      <button
        type='submit'
        className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke tw-gap-5 group active--translate-y-2 tw-px-6 tw-py-405 fw-medium btn-main hover-style-one position-absolute top-0 tw-end-0 h-100'
        data-block='button'
      >
        <span className='button__flair' />
        <span className='button__label'>Apply code</span>
      </button>
    </form>
  );
};

export default ApplyCodeForm;
