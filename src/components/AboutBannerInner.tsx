import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutBannerInner: React.FC = () => {
  return (
    <section className='about-banner tw-mt-15'>
      <div className='container max-w-1800-px'>
        <div className='section-bg-two tw-rounded-3xl tw-pb-84-px tw-pt-134-px'>
          <div className='container'>
            <div className='position-relative tw-pt-180-px tw-pb-200-px z-1'>
              <div className='row justify-content-center'>
                <div className='col-xxl-6 col-xl-7 col-sm-8'>
                  <div className='text-center'>
                    <Image
                      width={52}
                      height={32}
                      src='/assets/images/logo/logo.jpg'
                      alt='Favicon'
                    />
                    <h1 className='tw-mt-405'>
                      Who We Are
                    </h1>
                    {/* <div className='d-flex align-items-center tw-gap-4 justify-content-center tw-mt-12 flex-wrap'>
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
                        <span className='button__label'>get started trial</span>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown one'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img1.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown animation-delay-3 two'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img2.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown three'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img3.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown animation-delay-3 four'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img4.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown five'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img5.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown animation-delay-3 six'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img6.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown seven'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img7.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown animation-delay-3 eight'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img8.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown nine'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img9.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown animation-delay-3 ten'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img10.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown eleven'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img5.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
                <div className='positioned-image tw-rounded-3xl overflow-hidden common-shadow-fifteen d-inline-block position-absolute animation-upDown animation-delay-3 twelve'>
                  <Image
                    width={105}
                    height={109}
                    src='/assets/images/thumbs/about-banner-img1.jpg'
                    alt='Image'
                    className='tw-rounded-3xl w-100 h-100 object-fit-cover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBannerInner;
