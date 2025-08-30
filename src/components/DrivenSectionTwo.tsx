import Image from "next/image";
import Link from "next/link";
import React from "react";

const DrivenSectionTwo: React.FC = () => {
  return (
    <section className='py-120'>
      <div className='container'>
        <div>
          <Image
            width={1290}
            height={590}
            src='/assets/images/thumbs/driven-img.png'
            alt='Thumb'
          />
          <div className='max-w-780-px text-center mx-auto tw-mb-13'>
            <h3 className='splitTextStyleOne text-heading text-capitalize text-capitalize'>
              Driven your business today next level by sasstech
            </h3>
            <div className='d-grid d-md-flex align-items-center tw-gap-4 justify-content-center tw-mt-10'>
              <Link
                href='/register'
                className='hover--translate-y-1 active--translate-y-scale-9 btn button--stroke tw-gap-5 group active--translate-y-2 tw-rounded-xl text-capitalize tw-px-8 tw-py-505 fw-medium btn btn-main hover-style-one'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>get started trial</span>
              </Link>
              <Link
                href='/register'
                className='hover--translate-y-1 active--translate-y-scale-9 btn button--stroke tw-gap-5 group active--translate-y-2 tw-rounded-xl text-capitalize tw-px-8 tw-py-505 fw-medium btn-main-two hover-style-two'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>see pricing plan</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrivenSectionTwo;
