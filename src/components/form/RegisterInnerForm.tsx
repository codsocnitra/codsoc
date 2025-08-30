"use client";
import Link from "next/link";
import React from "react";

const RegisterInnerForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const username = formData.get("username");
    const confirmPassword = formData.get("confirmPassword");
    // Here you can handle the form submission, e.g., send data to an API
    console.log("Form submitted with:", {
      email,
      password,
      name,
      username,
      confirmPassword,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='form-submit d-flex flex-column tw-gap-6'
    >
      <div>
        <label
          htmlFor='name'
          className='fw-semibold text-heading d-block tw-mb-105'
        >
          Enter your name
        </label>
        <input
          name='name'
          type='text'
          className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 tw-rounded-lg shadow-none'
          id='name'
          placeholder='Enter your name'
        />
      </div>
      <div>
        <label
          htmlFor='username'
          className='fw-semibold text-heading d-block tw-mb-105'
        >
          Username
        </label>
        <input
          type='text'
          name='username'
          className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 tw-rounded-lg shadow-none'
          id='username'
          placeholder='Enter username'
        />
      </div>
      <div>
        <label
          htmlFor='enterEmail'
          className='fw-semibold text-heading d-block tw-mb-105'
        >
          Enter your email
        </label>
        <input
          type='email'
          name='email'
          className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 tw-rounded-lg shadow-none'
          id='enterEmail'
          placeholder='Enter your email'
        />
      </div>
      <div>
        <label
          htmlFor='createPassword'
          className='fw-medium text-base text-neutral-800 tw-mb-3'
        >
          {" "}
          Create password
        </label>
        <div className='position-relative'>
          <input
            type='password'
            name='password'
            className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 tw-rounded-lg shadow-none'
            id='createPassword'
            placeholder='Enter your name'
          />
          <span
            className='toggle-password position-absolute top-50 tw-end-0 tw-me-4 tw-text-xl text-neutral-600 tw--translate-y-50 ph-bold ph-eye-slash'
            id='#createPassword'
          />
        </div>
      </div>
      <div>
        <label
          htmlFor='confirmPassword'
          className='fw-medium text-base text-neutral-800 tw-mb-3'
        >
          Confirm Password
        </label>
        <div className='position-relative'>
          <input
            type='password'
            name='confirmPassword'
            className='form-control bg-neutral-100 border border-neutral-100 focus-border-main-600 text-heading fw-medium tw-px-6 tw-py-4 tw-rounded-lg shadow-none'
            id='confirmPassword'
            placeholder='Enter your name'
          />
          <span
            className='toggle-password position-absolute top-50 tw-end-0 tw-me-4 tw-text-xl text-neutral-600 tw--translate-y-50 ph-bold ph-eye-slash'
            id='#confirmPassword'
          />
        </div>
      </div>
      <div className='common-check d-flex align-items-center tw-gap-2'>
        <input className='form-check-input' type='checkbox' id='remember' />
        <div className='form-check-label text-neutral-600 fw-semibold'>
          <label htmlFor='remember'> I agree to sassly</label>
          <Link
            href='#'
            className='text-decoration-underline text-neutral-600 fw-semibold hover--translate-y-1 active-scale-09 hover-text-main-600'
          >
            Terms of Service.
          </Link>
        </div>
      </div>
      <div>
        <button
          type='submit'
          className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke  tw-gap-5 group active--translate-y-2 tw-px-4 tw-py-505 fw-medium btn-main hover-style-one w-100 rounded-pill'
          data-block='button'
        >
          <span className='button__flair' />
          <span className='button__label'>Create account</span>
        </button>
      </div>
    </form>
  );
};

export default RegisterInnerForm;
