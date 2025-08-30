import Image from "next/image";
import Link from "next/link";
import FooterSearchFormFive from "./form/FooterSearchFormFive";

const FooterFive: React.FC = () => {
  return (
    <section className='footer-five'>
      <div className='tw-mx-48-px position-relative gradient-bg-70-top-bottom z-1 rounded-top-30-px'>
        <div className='row justify-content-center'>
          <div className='col-xxl-11'>
            <div className='bg-main-600 tw-rounded-28-px tw-py-100-px'>
              <div className='text-center mx-auto max-w-724-px'>
                <div
                  className='bg-white-13 tw-py-2 tw-px-7 rounded-pill text-white fw-semibold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  what we offering
                </div>
                <h2 className='text-56-px splitTextStyleOne text-white text-capitalize tw-leading-none fw-medium'>
                  Supercharge Your Growing Business
                </h2>
                <div
                  className='tw-mt-9'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1200}
                >
                  <Link
                    href='/register'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn btn-white hover-style-one button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-14 rounded-pill tw-py-505 fw-semibold common-shadow-inset-one'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Sign up Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-120 tw-mx-48-px position-relative'>
          <div className='container'>
            <div className='d-flex tw-gap-6 border-top border-bottom d-flex justify-content-between flex-lg-nowrap flex-wrap'>
              <div className='tw-pt-100-px tw-pb-80-px'>
                <Link
                  href='/'
                  className='link hover--translate-y-1 active--translate-y-scale-9 tw-mb-6'
                >
                  <Image
                    width={150}
                    height={30}
                    src='/assets/images/logo/logo-four.png'
                    alt=''
                  />
                </Link>
                <p className='max-w-250-px tw-text-lg text-neutral-600'>
                  Build a modern and creative website with crealand
                </p>
                <div className='tw-mt-6 d-flex flex-column gap-4'>
                  <div className='d-flex align-items-center tw-gap-205'>
                    <span>
                      <Image
                        width={22}
                        height={22}
                        src='/assets/images/icons/phone-icon.png'
                        alt='Icon'
                      />
                    </span>
                    <span className='fw-semibold text-heading'>
                      +806 (000) 88 99
                    </span>
                  </div>
                  <div className='d-flex align-items-center tw-gap-205'>
                    <span>
                      <Image
                        width={20}
                        height={20}
                        src='/assets/images/icons/message-icon.png'
                        alt='Icon'
                      />
                    </span>
                    <span className='fw-semibold text-heading'>
                      contact@info.com
                    </span>
                  </div>
                </div>
              </div>
              <div className='d-lg-flex d-none'>
                <div className='tw-w-1-px h-100 bg-neutral-200' />
              </div>
              <div className='tw-pt-100-px tw-pb-80-px'>
                <div>
                  <h5 className='fw-semibold fw-bold text-heading tw-mb-8 text-uppercase'>
                    Our Location
                  </h5>
                  <ul className='d-flex flex-column tw-gap-4'>
                    <li>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/contact'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Tutorials
                      </Link>
                    </li>
                    <li className='mb-0'>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='d-lg-flex d-none'>
                <div className='tw-w-1-px h-100 bg-neutral-200' />
              </div>
              <div className='tw-pt-100-px tw-pb-80-px'>
                <div>
                  <h5 className='fw-semibold fw-bold text-heading tw-mb-8 text-uppercase'>
                    Contact info
                  </h5>
                  <ul className='d-flex flex-column tw-gap-4'>
                    <li>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Partners Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/contact'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Affiliate Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        Community
                      </Link>
                    </li>
                    <li className='mb-0'>
                      <Link
                        href='#'
                        className='hover-arrow-start text-heading hover-underline hover--translate-y-1 active--translate-y-scale-9'
                      >
                        HR Partner Program
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='d-lg-flex d-none'>
                <div className='tw-w-1-px h-100 bg-neutral-200' />
              </div>
              <div className='tw-pt-100-px tw-pb-80-px'>
                <div>
                  <h5 className='fw-semibold fw-bold text-heading tw-mb-8 text-uppercase'>
                    Newsletter
                  </h5>
                  {/* FooterSearchFormFive */}
                  <FooterSearchFormFive />
                </div>
              </div>
            </div>
          </div>
          <div className='footer-four-bottom tw-pb-6 tw-pt-7'>
            <div className='container'>
              <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
                <p className='fw-semibold text-heading'>
                  Copyright © {new Date().getFullYear()} by{" "}
                  <Link href='/' className='text-blue hover-underline'>
                    webnextpro
                  </Link>{" "}
                  . All Rights Reserved
                </p>
                <div className='d-flex align-items-center tw-gap-305'>
                  <button
                    type='button'
                    className='fw-bold p-0 tw-w-11 tw-h-11 border border-neutral-200 bg-white hover-bg-main-600 tw-text-xl text-heading hover-border-main-600 tw-duration-300 rounded-circle'
                  >
                    <i className='ph-fill ph-facebook-logo' />
                  </button>
                  <button
                    type='button'
                    className='fw-bold p-0 tw-w-11 tw-h-11 border border-neutral-200 bg-white hover-bg-main-600 tw-text-xl text-heading hover-border-main-600 tw-duration-300 rounded-circle'
                  >
                    <i className='ph-fill ph-twitter-logo' />
                  </button>
                  <button
                    type='button'
                    className='fw-bold p-0 tw-w-11 tw-h-11 border border-neutral-200 bg-white hover-bg-main-600 tw-text-xl text-heading hover-border-main-600 tw-duration-300 rounded-circle'
                  >
                    <i className='ph-fill ph-instagram-logo' />
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

export default FooterFive;
