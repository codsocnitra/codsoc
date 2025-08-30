import Image from "next/image";
import Link from "next/link";

const FeaturesFour: React.FC = () => {
  return (
    <section className='features-four'>
      <div className='py-120 tw-mx-48-px position-relative'>
        <Image
          width={1822}
          height={1327}
          src='/assets/images/bg/mash-gradient-bg2.png'
          alt='Mash Gradient BG'
          className='w-100 h-100 position-absolute top-0 tw-start-0 z-n1'
        />
        <div className='max-w-1820-px mx-auto'>
          <div className='container'>
            <div className='tw-mb-12 max-w-570-px'>
              <h4 className='tw-mb-4 fw-bold line-clamp-1 font-caveat text-capitalize text-crm'>
                with the world's favorite CRM
              </h4>
              <h2 className='splitTextStyleOne text-heading text-capitalize'>
                improve customer relationships today
              </h2>
            </div>
            <div className='row g-32-px'>
              <div
                className='col-md-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={1000}
              >
                <div className='features-four-item bg-white tw-rounded-40-px tw-px-54-px tw-pt-16 tw-pb-180-px position-relative h-100'>
                  <h3 className='tw-mb-4 fw-semibold max-w-250-px splitTextStyleOne'>
                    Lead &amp; Contact Management
                  </h3>
                  <p className='text-neutral-600 tw-text-lg fw-medium'>
                    Sassly-CRM in the past allowing you to
                  </p>
                  <Link
                    href='#'
                    className='hover--translate-y-1 active--translate-y-scale-9 text-crm fw-bold tw-text-base text-blue text-decoration-underline tw-mt-12 hover-underline-none'
                  >
                    Transfer domain
                  </Link>
                  <Image
                    width={170}
                    height={180}
                    src='/assets/images/thumbs/features-four-thumb101.png'
                    alt='Thumbnail'
                    className='max-w-40-percent position-absolute top-0 tw-mt-5 tw-end-0 tw-me-5 common-shadow-twentyFive tw-rounded-2xl d-xl-block d-none'
                  />
                  <Image
                    width={160}
                    height={190}
                    src='/assets/images/thumbs/features-four-thumb102.png'
                    alt='Thumbnail'
                    className='max-w-40-percent position-absolute bottom-0 tw-start-45 tw-me-5 common-shadow-twentyFive tw-rounded-2xl'
                  />
                </div>
              </div>
              <div
                className='col-md-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={1200}
              >
                <div className='features-four-item bg-white tw-rounded-40-px tw-px-54-px tw-pt-16 tw-pb-180-px position-relative h-100'>
                  <h3 className='tw-mb-4 fw-semibold max-w-400-px splitTextStyleOne'>
                    Automate Workflows and Monitor your Sales.
                  </h3>
                  <p className='text-neutral-600 tw-text-lg fw-medium'>
                    Sassly-CRM in the past allowing you to
                  </p>
                  <Link
                    href='#'
                    className='hover--translate-y-1 active--translate-y-scale-9 text-crm fw-bold tw-text-base text-blue text-decoration-underline tw-mt-12 hover-underline-none'
                  >
                    Transfer domain
                  </Link>
                  <Image
                    width={266}
                    height={217}
                    src='/assets/images/thumbs/features-four-thumb2.png'
                    alt='Thumbnail'
                    className='max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-8 tw-rounded-2xl'
                  />
                </div>
              </div>
              <div
                className='col-md-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={1000}
              >
                <div className='features-four-item bg-white tw-rounded-40-px tw-px-54-px tw-pt-16 tw-pb-180-px position-relative h-100'>
                  <h3 className='tw-mb-4 fw-semibold max-w-400-px splitTextStyleOne'>
                    Artificial Intelligence
                  </h3>
                  <p className='text-neutral-600 tw-text-lg fw-medium'>
                    Sassly-CRM in the past allowing you to
                  </p>
                  <Link
                    href='#'
                    className='hover--translate-y-1 active--translate-y-scale-9 text-crm fw-bold tw-text-base text-blue text-decoration-underline tw-mt-12 hover-underline-none'
                  >
                    Transfer domain
                  </Link>
                  <Image
                    width={264}
                    height={245}
                    src='/assets/images/thumbs/features-four-thumb3.png'
                    alt='Thumbnail'
                    className='max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-10 tw-rounded-2xl'
                  />
                </div>
              </div>
              <div
                className='col-md-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={1200}
              >
                <div className='features-four-item bg-white tw-rounded-40-px tw-px-54-px tw-pt-16 tw-pb-180-px position-relative h-100'>
                  <h3 className='tw-mb-4 fw-semibold max-w-432-px splitTextStyleOne'>
                    involves organizing, tracking, and optimizing sales
                  </h3>
                  <p className='text-neutral-600 tw-text-lg fw-medium'>
                    Sassly-CRM in the past allowing you to
                  </p>
                  <Link
                    href='#'
                    className='hover--translate-y-1 active--translate-y-scale-9 text-crm fw-bold tw-text-base text-blue text-decoration-underline tw-mt-12 hover-underline-none'
                  >
                    Transfer domain
                  </Link>
                  <Image
                    width={262}
                    height={243}
                    src='/assets/images/thumbs/features-four-thumb4.png'
                    alt='Thumbnail'
                    className='max-w-40-percent position-absolute bottom-0 tw-end-0 tw-me-8 tw-rounded-2xl'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesFour;
