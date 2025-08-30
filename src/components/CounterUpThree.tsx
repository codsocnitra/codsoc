const CounterUpThree: React.FC = () => {
  return (
    <section className='section-bg-two py-120'>
      <div className='container'>
        <div className='max-w-780-px text-center mx-auto tw-mb-13'>
          <div
            className='bg-white tw-py-2 tw-px-305 rounded-pill fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max border border-spring-green'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='text-gradient-teal'>what we offering</div>
          </div>
          <h3 className='splitTextStyleOne text-heading text-capitalize text-capitalize'>
            Trusted by{" "}
            <span className='font-dm-serif fst-italic text-gradient-teal'>
              3+ million{" "}
            </span>{" "}
            website owners worldwide
          </h3>
        </div>
        <div className='border-top border-bottom d-flex align-items-center justify-content-between flex-sm-nowrap flex-wrap tw-gap-148-px'>
          <div className='text-center tw-pt-13 tw-pb-9 d-flex flex-column justify-content-center align-items-center tw-transition tw-duration-200'>
            <h2 className='h1'>
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
            <h2 className='h1'>
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
            <h2 className='h1'>
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

export default CounterUpThree;
