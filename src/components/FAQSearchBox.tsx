import React from "react";
import FAQSearchBoxForm from "./form/FAQSearchBoxForm";

const FAQSearchBox: React.FC = () => {
  return (
    <section className='pt-120 section-bg-two pb-120 overflow-hidden'>
      <div className='container max-w-1290-px'>
        <div className='row justify-content-center'>
          <div className='col-xl-8'>
            <div className='text-center'>
              <h3 className='tw-mb-6'>Hello, what can we help you find?</h3>
              <p className='fw-medium text-neutral-500'>
                Docly is a fully featured knowledge base theme for WordPress.
              </p>
              {/* FAQSearchBoxForm */}
              <FAQSearchBoxForm />
              <div className='d-inline-flex align-items-center tw-gap-6 tw-mt-8 flex-wrap'>
                <span className='fw-semibold tw-text-lg text-heading'>
                  Popular:
                </span>
                <div className='d-inline-flex align-items-center tw-gap-4 flex-wrap'>
                  <button
                    type='button'
                    className='tw-px-405 tw-py-105 bg-white tw-rounded-md text-neutral-500 tw-text-sm bg-white common-shadow-eighteen hover-bg-main-600 hover-text-white tw-transition tw-duration-200 fw-medium'
                  >
                    Coding
                  </button>
                  <button
                    type='button'
                    className='tw-px-405 tw-py-105 bg-white tw-rounded-md text-neutral-500 tw-text-sm bg-white common-shadow-eighteen hover-bg-main-600 hover-text-white tw-transition tw-duration-200 fw-medium'
                  >
                    Traveling
                  </button>
                  <button
                    type='button'
                    className='tw-px-405 tw-py-105 bg-white tw-rounded-md text-neutral-500 tw-text-sm bg-white common-shadow-eighteen hover-bg-main-600 hover-text-white tw-transition tw-duration-200 fw-medium'
                  >
                    aeroplane
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSearchBox;
