import Image from "next/image";
import Link from "next/link";
import FooterSearchFormOne from "./form/FooterSearchFormOne";

const FooterOne: React.FC = () => {
  return (
    <footer className='footer one bg-black position-relative z-1 mt-auto tw-pt-16 overflow-hidden'>
      {/* Footer Top Start */}
      <div className='container'>
        <div className='d-flex align-items-center tw-gap-505'>
          <div className='flex-grow-1'>
            <div className='d-flex align-items-center flex-lg-nowrap flex-wrap tw-gap-100-px tw-pb-13 border-bottom border-neutral-700'>
              {/* <div
                className='max-w-514-px w-100 d-flex align-items-center tw-gap-505'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <h3 className='h1 text-white tw-mb-0 fw-medium d-inline-flex align-items-center tw-gap-4 flex-shrink-0'>
                  <Image
                    width={22}
                    height={38}
                    src='/assets/images/icons/arrow-up-main.svg'
                    alt='tech'
                  />
                  88%
                </h3>
                <p className='text-neutral-300 max-w-194-px '>
                  Average revenue growth for per successful clients
                </p>
              </div> */}
              {/* <div
                className='max-w-514-px w-100 d-flex align-items-center tw-gap-505'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <h3 className='h1 text-white tw-mb-0 fw-medium d-inline-flex align-items-center tw-gap-4 flex-shrink-0'>
                  1.3m
                </h3>
                <div className='d-flex align-items-center tw-gap-2'>
                  <p className='text-neutral-300 max-w-194-px '>
                    Average revenue growth for per successful clients
                  </p>
                </div>
              </div> */}
            </div>
            {/* <div className='tw-pt-8 d-flex align-items-center tw-gap-8 flex-wrap'>
              <ul className='d-flex align-items-center tw-gap-8 flex-wrap'>
                <li
                  className='d-flex align-items-center tw-gap-3'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <span className='tw-w-5 tw-h-5 bg-main-600 text-white d-flex justify-content-center  align-items-center tw-text-xs rounded-circle'>
                    <i className='ph ph-check' />
                  </span>
                  <p className='text-white fw-medium'>
                    Various analysis options.
                  </p>
                </li>
                <li
                  className='d-flex align-items-center tw-gap-3'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <span className='tw-w-5 tw-h-5 bg-main-600 text-white d-flex justify-content-center  align-items-center tw-text-xs rounded-circle'>
                    <i className='ph ph-check' />
                  </span>
                  <p className='text-white fw-medium'>
                    Page Load (time, size, number of requests).
                  </p>
                </li>
              </ul>
              <div className='d-flex align-items-center justify-content-center tw-gap-405'>
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <a
                    href='https://play.google.com/store/apps'
                    className='hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <Image
                      width={167}
                      height={51}
                      src='/assets/images/icons/store1.png'
                      alt='tech'
                    />
                  </a>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <a
                    href='https://www.apple.com/app-store'
                    className='hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <Image
                      width={167}
                      height={51}
                      src='/assets/images/icons/store2.png'
                      alt='tech'
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className='flex-shrink-0 gradient-overlay d-md-block d-none'>
            <Image
              width={314}
              height={298}
              src='/assets/images/thumbs/footer-img.png'
              alt='tech'
            />
          </div> */}
        </div>
      </div>
      {/* Footer Top End */}
      <div className='py-120 '>
        <div className='container container-two'>
          <div className='row g-5'>
            <div
              className='col-lg-5 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={600}
            >
              <div>
                <Link
                  href='/'
                  className='link hover--translate-y-1 active--translate-y-scale-9 tw-mb-10'
                >
                  <Image
                    width={149}
                    height={30}
                    src='/assets/images/logo/logo.jpg'
                    alt='tech'
                  />
                </Link>
                {/* FooterSearchFormOne */}
                <FooterSearchFormOne />
                <p className='text-neutral-500 fw-semibold tw-mt-9'>
                  By subscribing, you're accept{" "}
                  <Link
                    href='#'
                    className='text-white text-decoration-underline hover-text-main-600 hover--translate-y-1 active--translate-y-scale-9'
                  >
                    {" "}
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
            <div
              className='col-lg-2 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div>
                <h5 className='fw-medium text--white tw-mb-8'>My account</h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Forum Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Help &amp; FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Pricing and plans
                    </Link>
                  </li> */}
                  {/* <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Cookies Policy
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* <div
              className='col-lg-2 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
              <div>
                <h5 className='fw-medium text--white tw-mb-8'>Service</h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      It Consultation{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      AI Machine Learning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Data Security
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Software Development
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Cyber Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div
              className='col-lg-3 col-sm-6 col-xs-6'
              data-aos='fade-up'
              data-aos-duration={1200}
            >
              <div>
                <h5 className='fw-medium text--white tw-mb-8'>Locations</h5>
                <div className='d-flex align-items-center tw-gap-5'>
                  <span className='d-flex tw-text-3xl text-main-600'>
                    <Image
                      width={20}
                      height={20}
                      src='/assets/images/icons/map.svg'
                      alt='tech'
                    />
                  </span>
                  <div>
                    <p className='text-neutral-400 d-block mb-1'>
                      Nitra Technical Campus <br />
                      P - Block, Sanjay Nagar, Raj Nagar Sector -23, Ghaziabad
                    </p>
                  </div>
                </div>
                <h5 className='fw-medium text--white tw-mt-10 tw-mb-6'>
                  Contact
                </h5>
                <a
                  href='mailto:support@gmail.com'
                  className='text-neutral-400 hover--translate-y-1 active--translate-y-scale-9'
                >
                  codsoc25@nitra.ac.in
                </a>
                <div className='d-flex align-items-center tw-gap-5 tw-mt-2'>
                  <span className='d-flex tw-text-3xl text-main-600'>
                    <Image
                      width={22}
                      height={22}
                      src='/assets/images/icons/phone.svg'
                      alt='tech'
                    />
                  </span>
                  <div>
                    <a
                      href='tel:+880(123)45688'
                      className='d-block mb-1 tw-text-2xl text-white hover-text-main-600 hover--translate-y-1 active--translate-y-scale-9'
                    >
                      +91 76520 93805
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        {/* bottom Footer */}
        <div className='border-top border-dashed border-neutral-600 border-0 tw-py-8'>
          <div className='container container-two'>
            <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
              <p className='text--white text-line-1 fw-normal'>
                © {new Date().getFullYear()}{" "}
                <a
                  href='#'
                  className='fw-medium hover-underline hover--translate-y-1 active--translate-y-scale-9'
                >
                  CodSoc'25
                </a>
                - Official Coding Society of Nitra Technical Campus. All rights reserved.
              </p>
              <ul className='d-grid d-sm-flex align-items-center tw-gap-6'>
                <li>
                  <a
                    href='https://www.facebook.com'
                    className='text--white tw-text-2xl hover--translate-y-1 active--translate-y-scale-9 d-flex align-items-center tw-gap-205 hover-text-white'
                  >
                    <span className='text-main-600 d-flex'>
                      <i className='ph-fill ph-facebook-logo' />
                    </span>
                    <span className='tw-text-base'>Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.twitter.com'
                    className='text--white tw-text-2xl hover--translate-y-1 active--translate-y-scale-9 d-flex align-items-center tw-gap-205 hover-text-white'
                  >
                    <span className='text-main-600 d-flex'>
                      <i className='ph-fill ph-twitter-logo' />
                    </span>
                    <span className='tw-text-base'>Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com'
                    className='text--white tw-text-2xl hover--translate-y-1 active--translate-y-scale-9 d-flex align-items-center tw-gap-205 hover-text-white'
                  >
                    <span className='text-main-600 d-flex'>
                      <i className='ph-fill ph-instagram-logo' />
                    </span>
                    <span className='tw-text-base'>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.pinterest.com'
                    className='text--white tw-text-2xl hover--translate-y-1 active--translate-y-scale-9 d-flex align-items-center tw-gap-205 hover-text-white'
                  >
                    <span className='text-main-600 d-flex'>
                      <i className='ph-fill ph-pinterest-logo' />
                    </span>
                    <span className='tw-text-base'>Pinterest</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
