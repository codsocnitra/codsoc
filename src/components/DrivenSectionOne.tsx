import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrivenSectionOne: React.FC = () => {
  return (
    <section>
      <div className='container'>
        <div>
          <Image
            width={1290}
            height={590}
            src='/assets/images/thumbs/driven-img.png'
            alt='Thumb'
          />
          <div className='max-w-780-px text-center mx-auto'>
            <div className='tw-mb-10 max-w-672-px mx-auto text-center'>
              <h4 className='tw-mb-2 fw-bold line-clamp-1 font-caveat text-capitalize text-crm'>
                with the world's favorite CRM
              </h4>
              <h2 className='splitTextStyleOne text-heading text-capitalize'>
                The <span className='fw-normal'>CRM</span> behind thousand of
                companies
              </h2>
            </div>
            <div className='d-flex align-items-center tw-gap-4 justify-content-center tw-mt-10'>
              <div
                className='d-inline-flex align-items-center tw-gap-5 tw-mt-8 flex-wrap'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <Link
                  href='#'
                  className='flex-grow-1 hover--translate-y-1 active--translate-y-scale-9 btn btn-main-two hover-style-two button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-10 rounded-pill tw-py-505 fw-bold'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <span className='button__label'>Schedule a Demo</span>
                </Link>
                <Link
                  href='#'
                  className='flex-grow-1 hover--translate-y-1 active--translate-y-scale-9 btn btn-orange-outline hover-style-five hover-text-white button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-10 rounded-pill tw-py-505 fw-bold bg-white'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <span className='button__label'>Contact Sales</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivenSectionOne;
