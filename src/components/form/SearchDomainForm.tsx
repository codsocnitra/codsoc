"use client";
import React from "react";

const SearchDomainForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const domain = formData.get("domain") as string;
    const tld = formData.get("tld") as string;
    if (domain && tld) {
      const fullDomain = `${domain}${tld}`;
      console.log(`Searching for domain: ${fullDomain}`);
      // Here you can add the logic to handle the search, e.g., API call
    } else {
      console.error("Please enter a valid domain name and TLD.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='d-flex tw-gap-6 flex-column flex-sm-row'
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration={600}
    >
      <div className='position-relative flex-grow-1'>
        <input
          name='domain'
          type='text'
          className='tw-py-405 tw-px-705 tw-pe-100-px bg-neutral-100 tw-rounded-xl border-transparent placeholder-neutral-600 placeholder-18-px w-100'
          placeholder='Enter your desire domain name'
        />
        <select
          name='tld'
          className='select-domain form-control form-select w-auto border-0 tw-py-1 tw-pe-305 shadow-none form-select-arrow-end position-absolute tw-end-0 top-50 translate-middle-y bg-transparent tw-me-705 fw-semibold'
        >
          <option value='.com'>.com</option>
          <option value='.cloud'>.cloud</option>
          <option value='.shop'>.shop</option>
          <option value='.online'>.online</option>
          <option value='.info'>.info</option>
        </select>
      </div>
      <button
        type='submit'
        className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-15 tw-py-505 fw-semibold'
        data-block='button'
      >
        <span className='button__flair' />
        <span className='button__label'>Search</span>
      </button>
    </form>
  );
};

export default SearchDomainForm;
