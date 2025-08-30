import Image from "next/image";
import Link from "next/link";

const AutomationOne: React.FC = () => {
  return (
    <section className='automation pt-120 position-relative z-1 tw-pb-94-px'>
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg-6'>
            <div className='automation-content'>
              <div
                className='bg-white tw-py-3 tw-px-305 rounded-pill fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max border border-spring-green'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='text-gradient-teal'>
                  Up to{" "}
                  <span className='text-yellow text-stroke-yellow'>70%</span>{" "}
                  off managed cloud hosting
                </div>
              </div>
              <h2 className='splitTextStyleOne text-heading text-capitalize'>
                Supercharge
                <span className='font-dm-serif fst-italic fw-normal text-gradient-teal'>
                  daily work
                </span>
                with built-in automation
              </h2>
              <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                Sassly-CRM in the past allowing you to focus more on your
                business simply enjoy your newfound legal time to reflect
                leaving pen
              </p>
              <div className='tw-mt-9 d-flex flex-column align-items-start tw-gap-6'>
                <div
                  className='tw-ps-5 tw-pe-12 tw-py-3 d-flex align-items-center tw-gap-4 bg-neutral-100 rounded-pill animation-item'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <Image
                    width={22}
                    height={22}
                    src='/assets/images/icons/check-star.png'
                    alt='Check Icon'
                    className='animate__bounce'
                  />
                  <span className='fw-bold text-heading'>
                    Workflow streamlining
                  </span>
                </div>
                <div
                  className='tw-ps-5 tw-pe-12 tw-py-3 d-flex align-items-center tw-gap-4 bg-neutral-100 rounded-pill animation-item'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <Image
                    width={22}
                    height={22}
                    src='/assets/images/icons/check-star.png'
                    alt='Check Icon'
                    className='animate__bounce'
                  />
                  <span className='fw-bold text-heading'>
                    Expedite onboarding with clear prioritization
                  </span>
                </div>
                <div
                  className='tw-ps-5 tw-pe-12 tw-py-3 d-flex align-items-center tw-gap-4 bg-neutral-100 rounded-pill animation-item'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1000}
                >
                  <Image
                    width={22}
                    height={22}
                    src='/assets/images/icons/check-star.png'
                    alt='Check Icon'
                    className='animate__bounce'
                  />
                  <span className='fw-bold text-heading'>
                    Collaborate on ideas 7x faster
                  </span>
                </div>
              </div>
              <div
                className='d-flex align-items-center tw-gap-7 tw-mt-12'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <Link
                  href='#'
                  className='hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-13 rounded-0 tw-py-6 fw-bold'
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
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='automation-thumb position-lg-absolute tw-end-0 bottom-0 me-lg-5 pe-xl-5 max-w-58-percent'>
              <Image
                width={876}
                height={758}
                src='/assets/images/thumbs/automation-thumb.png'
                alt='Thumb'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationOne;
