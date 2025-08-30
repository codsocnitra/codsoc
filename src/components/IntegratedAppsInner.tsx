import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntegratedAppsInner: React.FC = () => {
  return (
    <section className='pt-120 section-bg-two pb-120 overflow-hidden'>
      <div className='container max-w-1290-px'>
        <div className='row gy-5 align-items-center flex-wrap-reverse'>
          <div
            className='col-xl-6'
            data-aos='zoom-in'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={2000}
          >
            <div className='position-relative tw-p-12 text-center'>
              <Image
                width={486}
                height={487}
                src='/assets/images/shapes/rounded-circle.png'
                alt='Bg Round'
              />
              <Image
                width={517}
                height={591}
                src='/assets/images/shapes/round-icons-big.png'
                alt='Icons'
                className='position-absolute top-50 start-50 animation-rotate-right'
              />
              <Image
                width={488}
                height={496}
                src='/assets/images/shapes/round-icons-small.png'
                alt='Icons'
                className='position-absolute top-50 start-50 animation-rotate-left'
              />
              <div className='position-absolute top-50 start-50 translate-middle'>
                <h3>
                  <span className='counter'>2</span>k+
                </h3>
                <span className='text-heading'>Integration</span>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div>
              <div className='text-start mx-auto tw-mb-12'>
                <h3 className='splitTextStyleOne text-heading text-capitalize max-w-532-px'>
                  Integrated apps can create seamless workflows
                </h3>
                <p className='text-neutral-500 tw-mt-5 splitTextStyleOne max-w-570-px tw-text-lg'>
                  Create tasks with various custom statuses to focus more on
                  your keep track of the progress of each why in the simply
                  enjoy process for your business.
                </p>
                <div
                  className='tw-mt-9'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={900}
                >
                  <Link
                    href='/register'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn button--stroke tw-gap-5 group active--translate-y-2 tw-rounded-xl text-capitalize tw-px-8 tw-py-505 fw-medium btn-main hover-style-one'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>get started trial</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedAppsInner;
