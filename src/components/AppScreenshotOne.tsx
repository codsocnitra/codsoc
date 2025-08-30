import Image from "next/image";

const AppScreenshotOne: React.FC = () => {
  return (
    <section className='app-screenshot position-relative gradient-bg-nine z-1 overflow-hidden'>
      <Image
        width={89}
        height={89}
        src='/assets/images/shapes/arrow-synchronize.png'
        alt='Arrow Synchronize Shape'
        className='position-absolute top-0 tw-start-0 tw-ms-17 tw-mt-160-px animation-rotate-center d-md-block d-none'
      />
      <Image
        width={425}
        height={1074}
        src='/assets/images/shapes/pattern-shape1.png'
        alt='Pattern Shape'
        className='position-absolute top-0 tw-start-0 z-n1'
      />
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
          <p className='splitTextStyleOne text-neutral-500 max-w-602-px tw-text-lg mx-auto fw-medium tw-mt-5'>
            Discover how Upshift not only simplifies your investment process but
            also empowers you to make smarter, data-driven decisions.
          </p>
        </div>
        <div className='text-center'>
          <Image
            width={1327}
            height={621}
            src='/assets/images/thumbs/app-download-thumb.png'
            alt='Screenshot Images'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={1200}
          />
        </div>
      </div>
    </section>
  );
};

export default AppScreenshotOne;
