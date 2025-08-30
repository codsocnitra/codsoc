"use client";
import React from "react";

const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    // Here you can handle the form submission, e.g., send data to an API
    console.log("Form submitted:", { name, email, message });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='tw-mt-70-px d-flex flex-column tw-gap-12 form-submit'
    >
      <div className='position-relative'>
        <input
          name='name'
          type='text'
          className='focus-outline-0 bg-transparent border-0 tw-pb-5 tw-ps-9 w-100 border-bottom border-neutral-200 focus-border-main-600'
          placeholder='Your Name*'
        />
        <span className='tw-text-xl d-flex text-neutral-500 position-absolute top-0 tw-start-0'>
          <i className='ph-bold ph-user' />
        </span>
      </div>
      <div className='position-relative'>
        <input
          name='email'
          type='email'
          className='focus-outline-0 bg-transparent border-0 tw-pb-5 tw-ps-9 w-100 border-bottom border-neutral-200 focus-border-main-600'
          placeholder='Email Address*'
        />
        <span className='tw-text-xl d-flex text-neutral-500 position-absolute top-0 tw-start-0'>
          <i className='ph-bold ph-envelope' />
        </span>
      </div>
      <div className='position-relative'>
        <textarea
          name='message'
          className='focus-outline-0 bg-transparent border-0 tw-pb-5 tw-ps-9 w-100 border-bottom border-neutral-200 focus-border-main-600 tw-h-108-px'
          placeholder='Enter Your Message here'
          defaultValue={""}
        />
        <span className='tw-text-xl d-flex text-neutral-500 position-absolute top-0 tw-start-0'>
          <i className='ph-bold ph-note-pencil' />
        </span>
      </div>
      <div>
        <button
          type='submit'
          className='hover-black btn btn-main hover--translate-y-1 active--translate-y-scale-9 hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 rounded-0'
          data-block='button'
        >
          <span className='button__flair' />
          <span className='text-white tw-text-2xl group-hover-text-white tw-duration-500 position-relative'>
            <i className='ph-bold ph-paper-plane-tilt' />
          </span>
          <span className='button__label'>Get In Touch</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
