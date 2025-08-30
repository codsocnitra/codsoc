import Image from "next/image";
import Link from "next/link";

const BannerTwo: React.FC = () => {
  return (
    <section className='banner-two position-relative z-1 gradient-bg-two'>
      <Image
        width={1920}
        height={195}
        src='/assets/images/shapes/cloud-shape.png'
        alt='Cloud Shape'
        className='position-absolute bottom-0 tw-start-0 w-100 z-n1'
      />
      <div className='banner-two__inner position-relative'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-6'>
              <div className='banner-two-content'>
                <div
                  className='bg-white-06 tw-py-3 tw-px-305 tw-rounded text-white fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <span className='tw-w-205 tw-h-205 bg-yellow rounded-circle' />
                  Up to <span className='text-yellow'>70%</span> off managed
                  cloud hosting
                </div>
                <h1 className='splitTextStyleOne text-white text-capitalize tw-leading-none'>
                  Organized cloud &amp;
                  <span className='text-yellow font-dm-serif fst-italic fw-normal'>
                    web hosting{" "}
                  </span>{" "}
                  for your business
                </h1>
                <p className='splitTextStyleOne text-neutral-300 tw-mt-8 max-w-388-px fw-medium'>
                  Touch the success! Domain and Secure Web Hosting from{" "}
                  <span className='text-yellow'>$4.99</span> per month
                </p>
                <div
                  className='d-flex align-items-center tw-gap-7 tw-mt-11 flex-wrap'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  <Link
                    href='/register'
                    className='hover-white hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-15 rounded-pill tw-py-505 fw-medium'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Clients Area</span>
                  </Link>
                  <p
                    className='text-neutral-300 max-w-388-px fw-medium'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    Starting at only{" "}
                    <span className='text-yellow'>$3.27/mo*</span>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='banner-two-thumb'>
                <Image
                  width={931}
                  height={602}
                  src='/assets/images/thumbs/banner-two-img.png'
                  alt='Image'
                  data-aos='zoom-in'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
