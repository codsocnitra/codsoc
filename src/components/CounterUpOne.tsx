const CounterUpOne: React.FC = () => {
  return (
    <section className='pt-120'>
      <div className='container'>
        <div className='tw-mb-10 max-w-570-px mx-auto text-center'>
          <h4 className='tw-mb-2 fw-bold line-clamp-1 font-caveat text-capitalize text-crm'>
            with the world's favorite CRM
          </h4>
          <h2 className='splitTextStyleOne text-heading text-capitalize'>
            Trueted CRM tools by the{" "}
            <span className='fw-normal'> happy users</span>
          </h2>
        </div>
        <div className='border-top border-bottom d-flex justify-content-center flex-sm-nowrap flex-wrap tw-gap-148-px'>
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
              <span className='counter'>95+</span>
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

export default CounterUpOne;
