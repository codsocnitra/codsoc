"use client";
import React from "react";

const FAQSearchBoxForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");
    // Handle the search submission logic here
    console.log("Search Submitted:", search);
  };
  return (
    <form onSubmit={handleSubmit} className='position-relative tw-mt-11'>
      <input
        name='search'
        type='text'
        className='tw-px-10 tw-py-705 bg-white rounded-pill border-transparent focus-border-main-600 focus-outline-0 w-100 tw-pe-200-px common-shadow-seventeen'
        placeholder='Search What You Want To Know'
      />
      <button
        type='submit'
        className='btn hover-black btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-2 group active--translate-y-2 fw-semibold flex-shrink-0 tw-py-6 tw-px-12 rounded-pill position-sm-in-box'
        data-block='button'
      >
        <span className='button__label'>Search</span>
      </button>
    </form>
  );
};

export default FAQSearchBoxForm;
