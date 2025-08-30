import Image from "next/image";

const WorkProcessOne: React.FC = () => {
  return (
    <section className='work-process-five py-120'>
      <div className='container'>
        <div className='text-center mx-auto tw-pb-15'>
          <div
            className='bg-white tw-py-2 tw-px-7 rounded-pill text-main-600 fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            {" "}
            what we offering
          </div>
          <h2 className='splitTextStyleOne text-heading text-capitalize tw-leading-none'>
            Simplifying your investment journey
          </h2>
        </div>
        <div className='position-relative tw-mt-17 stair-bg tw-rounded-28-px'>
          <div className='tw-px-40-px d-flex tw-pt-14 gradient-bg-eight tw-rounded-28-px position-relative flex-md-nowrap flex-wrap tw-gap-6'>
            <div className='max-w-780-px mx-auto'>
              <div className='text-center '>
                <div
                  className='bg-transparent border border-blue text-blue tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyEight'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  what we offering
                </div>
                <h2 className='splitTextStyleOne text-heading text-capitalize tw-leading-none max-w-500-px mx-auto'>
                  Sign up and secure your account
                </h2>
                <p className='text-neutral-600 tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px'>
                  In today's competitive business, the demand for efficient and
                  cost-effective IT solutions has never been more critical.
                </p>
              </div>
              <div className='tw-mt-80-px d-flex justify-content-between position-relative z-1 tw-gap-2 tw-pb-10'>
                <span className='tw-w-100--40-px tw-h-px bg-white position-absolute tw-start-50 translate-middle-x top-0 z-n1 tw-mt-2' />
                <div className='text-center'>
                  <span className='tw-w-405 tw-h-405 bg-deep-green rounded-circle' />
                  <span className='text-heading fw-semibold d-block tw-mt-4 text-capitalize'>
                    Sign up
                  </span>
                </div>
                <div className='text-center'>
                  <span className='tw-w-405 tw-h-405 rounded-circle bg-white common-shadow-twentyEight' />
                  <span className='text-heading fw-semibold d-block tw-mt-4 text-capitalize'>
                    investment goals
                  </span>
                </div>
                <div className='text-center'>
                  <span className='tw-w-405 tw-h-405 rounded-circle bg-main-600' />
                  <span className='text-heading fw-semibold d-block tw-mt-4 text-capitalize'>
                    start investing
                  </span>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column justify-content-end'>
              <Image
                width={524}
                height={583}
                src='/assets/images/thumbs/work-process-five-thumb.png'
                alt='Thumbnail'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={1200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessOne;
