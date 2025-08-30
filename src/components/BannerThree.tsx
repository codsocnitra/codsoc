import Image from "next/image";
import Link from "next/link";

const BannerThree: React.FC = () => {
  return (
    <section className='banner-three gradient-bg-five position-relative z-1 overflow-hidden'>
      <Image
        width={1033}
        height={800}
        src='/assets/images/shapes/cloud-sky.png'
        alt='Cloud Shape'
        className='position-absolute top-50 tw-end-0 left-right-scale-animation d-sm-block d-none z-n1'
      />
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg-6'>
            <div className='banner-three-content max-w-570-px'>
              <h1 className='splitTextStyleOne text-white text-capitalize tw-leading-none'>
                Simplify task{" "}
                <span className='text-gradient-teal font-dm-serif fst-italic fw-normal'>
                  {" "}
                  management{" "}
                </span>{" "}
                and prioritize work
              </h1>
              <p className='splitTextStyleOne text-white tw-text-lg tw-mt-8'>
                Sassly-<span className='text-yellow'>CRM</span> in the past
                allowing you to focus more on your business or simply enjoy your
                newfound legal time to reflect leaving
              </p>
              <div
                className='d-flex align-items-center tw-gap-7 tw-mt-11'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <Link
                  href='#'
                  className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 tw-rounded-md tw-py-6 fw-bold'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <div className='d-flex align-items-center tw-gap-2 z-1'>
                    <span className='button__label'>Start Free Trial</span>
                    <span className='icon'>
                      <Image
                        width={18}
                        height={16}
                        src='/assets/images/icons/download-cloud-icon.png'
                        alt='Icon'
                      />
                    </span>
                  </div>
                </Link>
              </div>
              <div className='d-flex align-items-center tw-gap-7 tw-mt-10'>
                <div
                  className='d-flex align-items-center tw-gap-205'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={700}
                >
                  <span className='tw-w-7 tw-h-7 bg-white-08 rounded-circle d-flex justify-content-center align-items-center tw-text-sm text-white'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-white'>3-Day Free Trial</span>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-205'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <span className='tw-w-7 tw-h-7 bg-white-08 rounded-circle d-flex justify-content-center align-items-center tw-text-sm text-white'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <span className='text-white'>No Credit Card</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='banner-three-thumb position-lg-absolute tw-end-0 bottom-0 max-w-58-percent'>
              <Image
                width={988}
                height={738}
                src='/assets/images/thumbs/banner-three-img.png'
                alt='Thumb'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerThree;
