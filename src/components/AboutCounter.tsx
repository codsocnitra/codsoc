import Image from "next/image";

const AboutCounter: React.FC = () => {
  return (
    <section className='about-counter py-120'>
      <div className='container'>
        <div className='max-w-830-px text-center tw-mb-12 mx-auto'>
          <div className='text-center tw-mb-3'>
            <Image
              width={48}
              height={48}
              src='/assets/images/icons/sparkle.png'
              alt='Icon'
            />
          </div>
          <h3 className='splitTextStyleOne text-capitaliz fw-semibold'>
            We,ve listed some fascinating
            <span className='fw-normal'>insights from our</span>
            data analytics
          </h3>
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='max-w-295-px tw-max-h-295-px text-center rounded-circle w-100 h-100 aspect-1 d-flex flex-column justify-content-center align-items-center hover-bg-neutral-100 tw-transition tw-duration-200'>
              <h3 className='h1'>
                <span className='counter'>3+</span>
              </h3>
              <span className='h6 text-uppercase tw-text-base tw-mt-5'>
                Events
              </span>
            </div>
          </div>
          <div
            className='col-lg-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={700}
          >
            <div className='max-w-295-px tw-max-h-295-px text-center rounded-circle w-100 h-100 aspect-1 d-flex flex-column justify-content-center align-items-center hover-bg-neutral-100 tw-transition tw-duration-200'>
              <h3 className='h1'>
                <span className='counter'>95%</span>
              </h3>
              <span className='h6 text-uppercase tw-text-base tw-mt-5'>
                presence
              </span>
            </div>
          </div>
          <div
            className='col-lg-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='max-w-295-px tw-max-h-295-px text-center rounded-circle w-100 h-100 aspect-1 d-flex flex-column justify-content-center align-items-center hover-bg-neutral-100 tw-transition tw-duration-200'>
              <h3 className='h1'>
                <span className='counter'>3+</span>
              </h3>
              <span className='h6 text-uppercase tw-text-base tw-mt-5'>
                programs
              </span>
            </div>
          </div>
          <div
            className='col-lg-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={900}
          >
            <div className='max-w-295-px tw-max-h-295-px text-center rounded-circle w-100 h-100 aspect-1 d-flex flex-column justify-content-center align-items-center hover-bg-neutral-100 tw-transition tw-duration-200'>
              <h3 className='h1'>
                <span className='counter'>300+</span>
              </h3>
              <span className='h6 text-uppercase tw-text-base tw-mt-5'>
                participants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
