import Image from "next/image";

const AboutFeaturesOne: React.FC = () => {
  return (
    <section className='about-features'>
      <div className='container'>
        <div className='text-center mx-auto tw-pb-15 max-w-910-px'>
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
          <p className='splitTextStyleOne text-neutral-500 max-w-602-px mx-auto fw-medium tw-mt-5'>
            Discover how Upshift not only simplifies your investment process but
            also empowers you to make smarter, data-driven decisions.
          </p>
        </div>
        <div className='row gy-4'>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='tw-rounded-2xl bg-neutral-50 bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-100 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={41}
                  height={41}
                  src='/assets/images/icons/about-features-two-icon1.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h4 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                Comprehensive Education
              </h4>
              <p className='splitTextStyleOne group-hover-text-white fw-medium text-neutral-500 tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your
              </p>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='tw-rounded-2xl bg-neutral-50 bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-100 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={41}
                  height={45}
                  src='/assets/images/icons/about-features-two-icon2.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h4 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                User-friendly Interface
              </h4>
              <p className='splitTextStyleOne group-hover-text-white fw-medium text-neutral-500 tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your
              </p>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={1000}
          >
            <div className='tw-rounded-2xl bg-neutral-50 bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-100 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={45}
                  height={45}
                  src='/assets/images/icons/about-features-two-icon3.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h4 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                Bookkeeping &amp; Cash Flow
              </h4>
              <p className='splitTextStyleOne group-hover-text-white fw-medium text-neutral-500 tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your
              </p>
            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={1200}
          >
            <div className='tw-rounded-2xl bg-neutral-50 bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-100 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={46}
                  height={46}
                  src='/assets/images/icons/about-features-two-icon4.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h4 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                Customized reminder alerts
              </h4>
              <p className='splitTextStyleOne group-hover-text-white fw-medium text-neutral-500 tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeaturesOne;
