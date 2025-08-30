import Link from "next/link";
import Image from "next/image";

const IntegrateAppsOne: React.FC = () => {
  return (
    <section className='pt-120 pb-120 overflow-hidden position-relative'>
      <Image
        width={1918}
        height={862}
        src='/assets/images/bg/mash-gradient-bg6.png'
        alt='Gradient BG'
        className='position-absolute tw-start-0 top-0 w-100 h-100 z-n1'
      />
      <div className='container max-w-1290-px'>
        <div className='row gy-5 align-items-center flex-wrap-reverse'>
          <div
            className='col-xl-6'
            data-aos='zoom-in'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={2000}
          >
            <div className='position-relative tw-p-12 text-center'>
              <Image
                width={486}
                height={487}
                src='/assets/images/shapes/rounded-circle.png'
                alt='Bg Round'
              />
              <Image
                width={517}
                height={591}
                src='/assets/images/shapes/round-icons-big.png'
                alt='Icons'
                className='position-absolute top-50 start-50 animation-rotate-right'
              />
              <Image
                width={488}
                height={496}
                src='/assets/images/shapes/round-icons-small.png'
                alt='Icons'
                className='position-absolute top-50 start-50 animation-rotate-left'
              />
              <div className='position-absolute top-50 start-50 translate-middle'>
                <h3>
                  <span className='counter'>2 K+</span>
                </h3>
                <span className='text-heading'>Integration</span>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div>
              <div className='text-start mx-auto tw-mb-12'>
                <div className='tw-mb-10'>
                  <h4 className='tw-mb-2 fw-bold line-clamp-1 font-caveat text-capitalize text-orange'>
                    with the world's favorite CRM
                  </h4>
                  <h2 className='splitTextStyleOne text-heading text-capitalize max-w-532-px'>
                    Simple set up,easy to stay organized
                  </h2>
                  <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                    Sassly-CRM in the past allowing you to focus more on your
                    business simply enjoy your newfound legal time to reflect
                    leaving pen
                  </p>
                </div>
                <div
                  className='tw-mt-9'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={900}
                >
                  <Link
                    href='/pricing-plan'
                    className='hover--translate-y-1 active--translate-y-scale-9 btn button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-10 tw-py-505 fw-bold rounded-pill btn-main hover-style-one common-shadow-inset-one'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>See all Integrations</span>
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

export default IntegrateAppsOne;
