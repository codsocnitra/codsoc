import Image from "next/image";
import Link from "next/link";

const AboutFour: React.FC = () => {
  return (
    <section className='about-four-two py-120 position-relative z-1 overflow-hidden'>
      <Image
        width={419}
        height={640}
        src='/assets/images/bg/mash-gradient-bg3.png'
        alt='Gradient'
        className='position-absolute tw-start-0 top-0 z-n1'
      />
      <div className='container'>
        <div className='row gy-4 flex-wrap-reverse'>
          <div className='col-lg-6'>
            <div className='position-relative'>
              <div className='tw-ps-14 position-relative'>
                <Image
                  width={602}
                  height={599}
                  src='/assets/images/thumbs/about-four-two-thumb.png'
                  alt='Thumb'
                  className='w-100'
                />
              </div>
              <div className='position-absolute bottom-0 tw-start-0 d-flex w-100 justify-content-between align-items-end'>
                <Image
                  width={221}
                  height={200}
                  src='/assets/images/thumbs/about-four-thumb-2.png'
                  alt='Thumb'
                  className='d-block common-shadow-twentyFour tw-rounded-2xl animated-upDown'
                />
                <Image
                  width={83}
                  height={83}
                  src='/assets/images/thumbs/robot-img.png'
                  alt='Thumb'
                  className='d-block tw-ms-8 tw-rounded-2xl animated-upDown animation-delay-1'
                />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='ps-xl-5'>
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
              <div className='d-flex flex-column tw-gap-5'>
                <div
                  className='d-flex align-items-center tw-gap-5'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <span className='tw-w-8 tw-h-8 bg-neutral-200 text-heading d-flex justify-content-center align-items-center rounded-circle'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <p className='fw-bold text-heading tw-text-lg'>
                    Customizable pipeline views
                  </p>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-5'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={700}
                >
                  <span className='tw-w-8 tw-h-8 bg-neutral-200 text-heading d-flex justify-content-center align-items-center rounded-circle'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <p className='fw-bold text-heading tw-text-lg'>
                    Increase your lead-to-deal conversion rates.
                  </p>
                </div>
                <div
                  className='d-flex align-items-center tw-gap-5'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <span className='tw-w-8 tw-h-8 bg-neutral-200 text-heading d-flex justify-content-center align-items-center rounded-circle'>
                    <i className='ph-bold ph-check' />
                  </span>
                  <p className='fw-bold text-heading tw-text-lg'>
                    Streamline data and tracking between softwares
                  </p>
                </div>
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
                  <span className='button__label'>Start your free trial</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFour;
