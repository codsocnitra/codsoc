const CounterUpTwo: React.FC = () => {
  return (
    <section className='pt-120'>
      <div className='container'>
        <div className='text-center mx-auto tw-pb-15 max-w-548-px'>
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
            Trueted CRM tools by the happy users
          </h2>
        </div>
        <div className='border-top border-bottom d-flex justify-content-center flex-sm-nowrap flex-wrap tw-gap-148-px'>
          <div className='text-center tw-pt-13 tw-pb-9 d-flex flex-column justify-content-center align-items-center tw-transition tw-duration-200'>
            <h2 className='h1 text-main-600'>
              <span className='counter'>282+</span>
            </h2>
            <span className='h6 text-uppercase tw-text-base tw-mt-5 d-sm-block d-none'>
              worldwide clients
            </span>
          </div>
          <div className='d-flex'>
            <div className='tw-w-1-px h-100 bg-neutral-200' />
          </div>
          <div className='text-center tw-pt-13 tw-pb-9 d-flex flex-column justify-content-center align-items-center tw-transition tw-duration-200'>
            <h2 className='h1 text-main-600'>
              <span className='counter'>95%</span>
            </h2>
            <span className='h6 text-uppercase tw-text-base tw-mt-5 d-sm-block d-none'>
              worldwide clients
            </span>
          </div>
          <div className='d-flex'>
            <div className='tw-w-1-px h-100 bg-neutral-200' />
          </div>
          <div className='text-center tw-pt-13 tw-pb-9 d-flex flex-column justify-content-center align-items-center tw-transition tw-duration-200'>
            <h2 className='h1 text-main-600'>
              <span className='counter'>282+</span>
            </h2>
            <span className='h6 text-uppercase tw-text-base tw-mt-5 d-sm-block d-none'>
              worldwide clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterUpTwo;
