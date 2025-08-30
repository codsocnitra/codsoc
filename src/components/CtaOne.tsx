import Image from "next/image";
import Link from "next/link";

const CtaOne: React.FC = () => {
  return (
    <section className='cta py-md-0 py-5'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-md-6 d-md-block d-none'>
            <div className='pe-lg-2'>
              <div className='position-relative'>
                <Image
                  width={581}
                  height={563}
                  src='/assets/images/thumbs/model-img.png'
                  alt='Model'
                />
                <Image
                  width={190}
                  height={86}
                  src='/assets/images/shapes/arrow-right-curve.png'
                  alt='Arrow shape'
                  className='position-absolute top-0 tw-end-0 tw-mt-160-px animate__wobble__two'
                />
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='ps-lg-4 max-w-532-px'>
              <span className='tw-py-1 tw-px-705 bg-main-600 text-white tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205'>
                Have A doubt ?
              </span>
              <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mb-5 d-flex gap-2'>
                <span className='d-inline-block fw-semibold'>
                  <span className='fw-normal'>Have</span> A Doubt? Speak With
                  Our <span className='fw-normal'> expert.</span>
                </span>
              </h3>
              <p className='text-neutral-600 tw-text-lg splitTextStyleOne'>
                Leave your contacts and feel  free to consultation from
              </p>
              <Link
                href='/register'
                className='hover-theme hover--translate-y-1 active--translate-y-scale-9 btn btn-main-two hover-style-two button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-9 rounded-0 tw-py-5 w-100 tw-mt-10'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Join the Society</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
