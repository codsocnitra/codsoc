"use client";
import React from "react";

const BlogDetailsForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("number");
    const url = formData.get("url");
    const massage = formData.get("massage");
    const check = formData.get("check");
    // Process the form data as needed
    console.log({ name, email, number, url, massage, check });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='row gy-4'>
        <div className='col-sm-6'>
          <input
            name='name'
            type='text'
            className='tw-px-6 tw-py-4 bg-white tw-placeholder-text-main-two-600 focus-outline-0 w-100 tw-placeholder-transition-2 focus-tw-placeholder-text-hidden rounded-0 shadow-none flex-grow-1 border border-white focus-border-main-600 tw-duration-300'
            placeholder='Enter your name*'
          />
        </div>
        <div className='col-sm-6'>
          <input
            type='email'
            name='email'
            className='tw-px-6 tw-py-4 bg-white tw-placeholder-text-main-two-600 focus-outline-0 w-100 tw-placeholder-transition-2 focus-tw-placeholder-text-hidden rounded-0 shadow-none flex-grow-1 border border-white focus-border-main-600 tw-duration-300'
            placeholder='Enter your mail*'
          />
        </div>
        <div className='col-sm-6'>
          <input
            type='number'
            name='number'
            className='tw-px-6 tw-py-4 bg-white tw-placeholder-text-main-two-600 focus-outline-0 w-100 tw-placeholder-transition-2 focus-tw-placeholder-text-hidden rounded-0 shadow-none flex-grow-1 border border-white focus-border-main-600 tw-duration-300'
            placeholder='Enter your number*'
          />
        </div>
        <div className='col-sm-6'>
          <input
            type='url'
            name='url'
            className='tw-px-6 tw-py-4 bg-white tw-placeholder-text-main-two-600 focus-outline-0 w-100 tw-placeholder-transition-2 focus-tw-placeholder-text-hidden rounded-0 shadow-none flex-grow-1 border border-white focus-border-main-600 tw-duration-300'
            placeholder='Website*'
          />
        </div>
        <div className='col-sm-12'>
          <textarea
            name='massage'
            className='tw-px-6 tw-py-4 bg-white tw-placeholder-text-main-two-600 focus-outline-0 w-100 tw-placeholder-transition-2 focus-tw-placeholder-text-hidden rounded-0 shadow-none flex-grow-1 border border-white focus-border-main-600 tw-duration-300 tw-h-280-px'
            placeholder='Enter your Massage*'
            defaultValue={""}
          />
        </div>
        <div className='col-sm-12'>
          <div className='form-check common-check d-flex tw-gap-205 tw-my-4'>
            <input
              name='check'
              className='form-check-input'
              type='checkbox'
              id='comment-check'
            />
            <label
              className='form-check-label text-neutral-600 tw-text-sm fw-medium'
              htmlFor='comment-check'
            >
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
        </div>
        <div className='col-sm-12'>
          <button
            type='submit'
            className='hover-black btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 rounded-0 tw-px-13 tw-py-505 tw-mt-8'
            data-block='button'
          >
            <span className='button__flair' />
            <span className='button__label'>Send Messege</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default BlogDetailsForm;
