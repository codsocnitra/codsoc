"use client";
import React from "react";

const ShopSearchForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get("search") as string;
    // Handle the voucher code submission logic here
    console.log("Search Query Submitted:", searchQuery);
  };
  return (
    <form onSubmit={handleSubmit} className='position-relative'>
      <input
        type='text'
        name='search'
        className='tw-ps-4 tw-pe-12 tw-py-4 bg-white tw-placeholder-text-main-two-600 focus-outline-0 w-100 tw-placeholder-transition-2 focus-tw-placeholder-text-hidden tw-rounded-md shadow-none flex-grow-1 border border-neutral-200 focus-border-main-600 tw-duration-300'
        placeholder='Search here...'
      />
      <button
        type='submit'
        className='position-absolute top-50 tw--translate-y-50 tw-end-0 text-main-two-600 tw-text-lg d-flex tw-me-5'
      >
        <i className='ph-bold ph-magnifying-glass' />
      </button>
    </form>
  );
};

export default ShopSearchForm;
