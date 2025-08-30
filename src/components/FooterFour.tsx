import Image from "next/image";
import Link from "next/link";
import FooterSearchFormFour from "./form/FooterSearchFormFour";

const FooterFour: React.FC = () => {
  return (
    <section className='footer-four'>
      <div className=' pt-120 tw-mx-48-px position-relative gradient-bg-bottom-top'>
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
                Build a modern and creative website with cropland
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
                {/* FooterSearchFormFour */}
                <FooterSearchFormFour />
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
    </section>
  );
};

export default FooterFour;
