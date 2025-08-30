import Image from "next/image";
import Link from "next/link";

const BannerFive: React.FC = () => {
  return (
    <section className='banner-five'>
      <div className='tw-pt-100-px tw-mx-48-px position-relative gradient-bg-seven rounded-top-30-px z-1'>
        <Image
          width={1833}
          height={675}
          src='/assets/images/shapes/wave-line-shadow.png'
          alt='Wave Line shape'
          className='position-absolute tw-start-0 w-100 bottom-0 z-n1 pb-120'
        />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xxl-10'>
              <div className='text-center'>
                <div className='max-w-780-px text-center mx-auto'>
                  <div
                    className='bg-white tw-py-2 tw-px-7 rounded-pill text-main-600 fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyEight'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    what we offering
                  </div>
                  <h1 className='splitTextStyleOne text-heading text-capitalize tw-leading-none'>
                    Invest with confidence Grow your future{" "}
                  </h1>
                  <p className='text-neutral-600 tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px'>
                    In today's competitive business, the demand for efficient
                    and cost-effective IT solutions has never been more
                    critical.
                  </p>
                  <div className='d-flex align-items-center justify-content-center tw-gap-405 tw-mt-10'>
                    <div
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={800}
                    >
                      <Link
                        href='https://play.google.com/store/apps'
                        className='hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight'
                      >
                        <Image
                          width={198}
                          height={63}
                          src='/assets/images/icons/store-two1.png'
                          alt='App Store'
                        />
                      </Link>
                    </div>
                    <div
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={800}
                    >
                      <Link
                        href='https://www.apple.com/app-store'
                        className='hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight'
                      >
                        <Image
                          width={199}
                          height={62}
                          src='/assets/images/icons/store-two2.png'
                          alt='Google Store'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='tw-mt-14 d-inline-flex'>
                  <Image
                    width={1176}
                    height={716}
                    src='/assets/images/thumbs/banner-five-thumb.png'
                    alt='Thumbnail'
                    data-aos='zoom-in'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={1200}
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

export default BannerFive;
