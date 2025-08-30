import Image from "next/image";
import Link from "next/link";

const DegreeViewOne: React.FC = () => {
  return (
    <section className='degree-view tw-pt-9'>
      <div className='container'>
        <div className='max-w-672-px text-center mx-auto tw-mb-12'>
          <div
            className='bg-neutral-100 tw-py-3 tw-px-305 rounded-pill text-heading fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <span className='tw-w-205 tw-h-205 bg-yellow rounded-circle' />
            Up to <span className='text-yellow'>70%</span> off managed cloud
            hosting
          </div>
          <h2 className='splitTextStyleOne text-heading text-capitalize'>
            {" "}
            Get a 360-degree <br /> view of your{" "}
            <span className='font-dm-serif fst-italic fw-normal'>
              cloud
            </span>{" "}
            Spend
          </h2>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-8'>
            <div
              className='d-flex common-shadow-eight tw-rounded-3xl bg-white border border-neutral-100 flex-md-row flex-column'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div className='tw-rounded-3xl overflow-hidden flex-shrink-0'>
                <Image
                  width={357}
                  height={398}
                  src='/assets/images/thumbs/degree-view-img1.png'
                  alt='Thumb'
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
              <div className='tw-py-13 tw-pe-8 flex-grow-1 tw-ps-11'>
                <span className='tw-px-6 tw-py-1 bg-purple text-white rounded-pill fw-medium tw-mb-5'>
                  Hosting at should be
                </span>
                <h4 className='tw-mb-5'>
                  Web Hosting that's fast and reliable.
                </h4>
                <p className='text-neutral-500'>
                  Web hosting provides everything you need to get your idea
                  online. From where your website lives in the digital world, to
                  where your files and data are securely stored find and manage
                  it all in one place.
                </p>
              </div>
            </div>
            <div
              className='d-flex common-shadow-eight tw-rounded-3xl bg-white border border-neutral-100 flex-md-row flex-column tw-mt-8'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={700}
            >
              <div className='tw-rounded-3xl overflow-hidden flex-shrink-0'>
                <Image
                  width={357}
                  height={300}
                  src='/assets/images/thumbs/degree-view-img2.png'
                  alt='Thumb'
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
              <div className='tw-py-13 tw-pe-8 flex-grow-1 tw-ps-11'>
                <h4 className='tw-mb-5'>
                  {" "}
                  <span className='text-purple'>SSL</span> certificates help
                  secure User's important data.
                </h4>
                <div className='d-flex align-items-center tw-gap-405 tw-mt-8'>
                  <span className='tw-w-11 tw-h-10 text-heading bg-neutral-200 tw-rounded-md d-flex justify-content-center align-items-center tw-text-xl'>
                    <i className='ph-bold ph-magnifying-glass' />
                  </span>
                  <Link
                    href='/pricing-plan'
                    className='fw-bold tw-text-lg text-heading hover-underline max-w-278-px'
                  >
                    Helps your website search ranking with https
                  </Link>
                </div>
                <div className='tw-mt-8'>
                  <Link
                    href='/pricing-plan'
                    className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-inline-flex align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-705 tw-py-305 fw-medium tw-rounded-md text-sm group-hover-bg-white group-hover-text-main-two-600 hosting-plan-btn'
                    data-block='button'
                  >
                    <span className='button__flair' />
                    <span className='button__label'>Get Started</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-xl-4'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='d-flex common-shadow-eight tw-rounded-3xl bg-white border border-neutral-100 flex-column h-100'>
              <div className='tw-rounded-3xl overflow-hidden flex-shrink-0'>
                <Image
                  width={426}
                  height={340}
                  src='/assets/images/thumbs/degree-view-img3.png'
                  alt='Thumb'
                  className='w-100 h-100 object-fit-cover'
                />
              </div>
              <div className='tw-py-13 tw-pe-8 flex-grow-1 tw-ps-12'>
                <h4 className='tw-mb-5'>Give your website a good name</h4>
                <p className='text-neutral-500'>
                  Web hosting provides everything you need to idea online. From
                  where your website lives in the world, to where your files and
                  data are securely find and manage it all in one place.
                </p>
                <Link
                  href='/pricing-plan'
                  className='fw-bold tw-text-lg text-heading text-decoration-underline tw-mt-11 hover-text-main-600'
                >
                  Pick your Domain Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DegreeViewOne;
