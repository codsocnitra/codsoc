import Image from "next/image";
import Link from "next/link";

const FooterTwo: React.FC = () => {
  return (
    <footer className='footer position-relative z-1 mt-auto pt-120 overflow-hidden rounded-top-45-px gradient-bg-three'>
      {/* Footer Top Start */}
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between tw-pb-15 tw-mb-15 border-bottom border-white-01 tw-gap-6 flex-wrap'>
          <div className='max-w-570-px'>
            <h2 className='splitTextStyleOne text-white'>
              Save up to <span className='text-main-600'>85%</span> on your plan
              + get a{" "}
              <span className='font-dm-serif fst-italic fw-normal'>
                free domain
              </span>
            </h2>
          </div>
          <div data-aos='fade-up' data-aos-duration={600}>
            <Link
              href='#'
              className='hover-white hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke tw-gap-5 group active--translate-y-2 tw-px-11 rounded-pill tw-py-505 fw-medium'
              data-block='button'
            >
              <span className='button__flair' />
              <span className='button__label'>Get Started Today</span>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer Top End */}
      <div className='pb-120'>
        <div className='container container-two'>
          <div className='row row-cols-xl-5 row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-5'>
            <div className='col' data-aos='fade-up' data-aos-duration={600}>
              <div>
                <Link
                  href='/'
                  className='link hover--translate-y-1 active--translate-y-scale-9 tw-mb-6'
                >
                  <Image
                    width={149}
                    height={30}
                    src='/assets/images/logo/logo-white.png'
                    alt=''
                  />
                </Link>
                <p className='text-white max-w-330-px tw-text-lg'>
                  A new way to make the payments easy, reliable and 100% secure.
                  claritatem itamconse quat. Exerci tation ullamcorper.
                </p>
                <div className='d-flex align-items-center tw-gap-305 tw-mt-8'>
                  <Link
                    href='https://www.facebook.com'
                    className='tw-w-9 tw-h-9 bg-white tw-rounded-lg tw-text-lg d-flex justify-content-center align-items-center text-neutral-500 hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-facebook-logo' />
                  </Link>
                  <Link
                    href='https://www.facebook.com'
                    className='tw-w-9 tw-h-9 bg-white tw-rounded-lg tw-text-lg d-flex justify-content-center align-items-center text-neutral-500 hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-twitter-logo' />
                  </Link>
                  <Link
                    href='https://www.facebook.com'
                    className='tw-w-9 tw-h-9 bg-white tw-rounded-lg tw-text-lg d-flex justify-content-center align-items-center text-neutral-500 hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-linkedin-logo' />
                  </Link>
                  <Link
                    href='https://www.facebook.com'
                    className='tw-w-9 tw-h-9 bg-white tw-rounded-lg tw-text-lg d-flex justify-content-center align-items-center text-neutral-500 hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-instagram-logo' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={800}>
              <div>
                <h5 className='fw-medium text-white tw-mb-8'>Shopping</h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Buy a Domain
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Websites
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/contact'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Business Email
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      WordPress
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Hosting
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Web Security
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Logo
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Generator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={1000}>
              <div>
                <h5 className='fw-medium text-white tw-mb-8'>Information</h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Affiliate program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Referral program
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Wall of fame
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      System status
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={1000}>
              <div>
                <h5 className='fw-medium text-white tw-mb-8'>Company</h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      About Hostinger
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Our technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Newsroom
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Career
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Blog
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Student discount
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col' data-aos='fade-up' data-aos-duration={1000}>
              <div>
                <h5 className='fw-medium text-white tw-mb-8'>Resource</h5>
                <ul className='d-flex flex-column tw-gap-4'>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Webmail
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      ICANN Confirmation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Designers &amp; Developers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Redeem Code
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Product Catalog
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Customer Testimonials
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='#'
                      className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                    >
                      Business Name Generator
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        {/* bottom Footer */}
        <div className='border-top border-white-01 tw-py-8'>
          <div className='container container-two'>
            <div className='d-flex align-items-center justify-content-between tw-gap-4 flex-wrap'>
              <p className='text--white text-line-1 fw-normal'>
                Copyright @ {new Date().getFullYear()}{" "}
                <Link
                  href='https://themeforest.net/user/webnextpro'
                  className='fw-medium hover-underline hover--translate-y-1 active--translate-y-scale-9'
                >
                  WowTheme7{" "}
                </Link>{" "}
                All Rights Reserved
              </p>
              <ul className='d-flex align-items-center tw-gap-4'>
                <li>
                  <Link
                    href='#'
                    className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                  >
                    Faqs
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                  >
                    Setting
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='hover-arrow-start text--white hover-text-white hover-underline hover--translate-y-1 active--translate-y-scale-9'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
