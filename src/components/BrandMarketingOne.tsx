import Image from "next/image";
import Link from "next/link";

const BrandMarketingOne: React.FC = () => {
  return (
    <section className='overflow-hidden '>
      <div className='brand-marketing py-120'>
        <div className='container'>
          <div className='row gy-5'>
            <div className='col-md-6'>
              <div className='ps-5 position-relative pe-lg-5 tw-pb-4 h-100'>
                <div className='tw-rounded-28-px overflow-hidden h-100'>
                  <Image
                    width={544}
                    height={608}
                    src='/assets/images/thumbs/brand-marketing-img.png'
                    alt='Image'
                    className='w-100 h-100 object-fit-cover'
                  />
                </div>
                <Image
                  width={51}
                  height={62}
                  src='/assets/images/shapes/finger-shape.png'
                  alt='Shape'
                  className='flower animate__wobble__two position-absolute tw-end-100 bottom-100 tw--m-24-px z-n1'
                />
                <span className='tw-w-705 tw-h-705 bg-yellow rounded-circle position-absolute tw-end-100 top-0 tw-mt-105-px opacity-50' />
                <div className='bg-white tw-rounded-lg tw-p-5 max-w-218-px position-absolute tw-start-0 bottom-0 w-100 tw--mt-8-px tw--me-8-px common-shadow-two z-1'>
                  <div className='d-inline-flex align-items-center tw-gap-1 bg-main-600 tw-py-05 tw-px-3 rounded-pill position-absolute top-0 tw-end-0 tw--mt-12-px tw--me-12-px'>
                    <span className='text-white fw-bold tw-text-sm'>4.9</span>
                    <span className='text-white d-flex'>
                      <Image
                        width={14}
                        height={13}
                        src='/assets/images/icons/star.svg'
                        alt=''
                      />
                    </span>
                  </div>
                  <Image
                    width={100}
                    height={18}
                    src='/assets/images/icons/ratings.svg'
                    alt=''
                  />
                  <div className='tw-mt-3 d-flex align-items-center justify-content-between max-w-154-px'>
                    <span className='tw-text-lg text-heading fw-semibold'>
                      Trust pilot
                    </span>
                    <Image
                      width={20}
                      height={20}
                      src='/assets/images/icons/verified-icon.svg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <div
                  className='bg-neutral-100 tw-py-3 tw-px-305 rounded-pill text-heading fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <span className='tw-w-205 tw-h-205 bg-yellow rounded-circle' />
                  Up to <span className='text-yellow'>70%</span> off managed
                  cloud hosting
                </div>
                <h2 className='splitTextStyleOne text-heading text-capitalize'>
                  Grow your brand with sass
                  <span className='font-dm-serif fst-italic fw-normal'>
                    Websites +
                  </span>{" "}
                  Marketing.
                </h2>
                <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                  In today's competitive business, the demand for efficient In
                  today's competitive cost-effective IT solutions has never been
                  more critic. business
                </p>
                <div className='tw-mt-11 d-flex flex-column tw-gap-8'>
                  <div
                    className='d-flex align-items-start tw-gap-5'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <span className='tw-h-505 tw-w-505 bg-main-600 text-white tw-text-sm d-flex justify-content-center align-items-center rounded-circle tw-mt-105 flex-shrink-0'>
                      <i className='ph ph-check' />
                    </span>
                    <p className='tw-text-lg fw-medium text-heading max-w-444-px flex-grow-1'>
                      Secure your files with regular automatic backups and
                      two-factor authentication
                    </p>
                  </div>
                  <div
                    className='d-flex align-items-start tw-gap-5'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={700}
                  >
                    <span className='tw-h-505 tw-w-505 bg-main-600 text-white tw-text-sm d-flex justify-content-center align-items-center rounded-circle tw-mt-105 flex-shrink-0'>
                      <i className='ph ph-check' />
                    </span>
                    <p className='tw-text-lg fw-medium text-heading max-w-444-px flex-grow-1'>
                      Encrypt your website traffic with unlimited SSL security
                      certificates
                    </p>
                  </div>
                  <div
                    className='d-flex align-items-start tw-gap-5'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    <span className='tw-h-505 tw-w-505 bg-main-600 text-white tw-text-sm d-flex justify-content-center align-items-center rounded-circle tw-mt-105 flex-shrink-0'>
                      <i className='ph ph-check' />
                    </span>
                    <p className='tw-text-lg fw-medium text-heading max-w-444-px flex-grow-1'>
                      Enjoy full protection from DDoS attacks with Cloudflare
                      protected nameservers
                    </p>
                  </div>
                </div>
                <div
                  className='tw-mt-12'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={900}
                >
                  <Link
                    href='/register'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke tw-gap-5 group active--translate-y-2 tw-px-17 rounded-pill tw-py-505 fw-medium'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Get Started</span>
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

export default BrandMarketingOne;
