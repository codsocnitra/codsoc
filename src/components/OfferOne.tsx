import Image from "next/image";
import Link from "next/link";

const OfferOne: React.FC = () => {
  return (
    <section className='offer py-120 overflow-hidden'>
      <div className='container'>
        <div className='tw-mb-13'>
          <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205'>
            What We Offering
          </span>
          <div className='d-flex flex-lg-nowrap flex-wrap justify-content-between align-items-center'>
            <div className='max-w-672-px'>
              <h3 className='splitTextStyleOne tw-leading-104'>
                Provides Full-Cycle Custom IT Development Cervices.
              </h3>
            </div>
            <p className='splitTextStyleOne text-neutral-500 max-w-500-px'>
              In today's competitive business, the demand for efficient and
              cost-effective IT solutions has never been more critical.
            </p>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-lg-4'>
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='group-item position-relative tw-rounded-3xl overflow-hidden z-1 h-100 tw-pt-15 bg-pink-dark tw-px-40-px tw-pb-84-px tw-duration-300'>
                  <span className='tw-text-base fw-semibold tw-mb-2 text-pink'>
                    Excellent Performance
                  </span>
                  <h4 className='splitTextStyleOne tw-mb-5 max-w-218-px'>
                    {" "}
                    IT Management Service
                  </h4>
                  <Link
                    href='/service-details'
                    className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-arrow-up-right' />
                  </Link>
                  <Image
                    width={447}
                    height={170}
                    src='/assets/images/thumbs/offer-img1.png'
                    alt='Image'
                    className='tw-duration-300 position-absolute bottom-0 tw-end-0 z-n1'
                  />
                </div>
              </div>
              <div
                className='col-lg-12 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='group-item position-relative tw-rounded-3xl overflow-hidden z-1 h-100 tw-pt-15 bg-pink-lighter tw-px-40-px tw-pb-136-px tw-duration-300'>
                  <span className='tw-text-base fw-semibold tw-mb-2 text-pink'>
                    Excellent Performance
                  </span>
                  <h4 className='splitTextStyleOne fw-light tw-mb-5 max-w-330-px'>
                    <span className='d-inline-block fw-semibold'>
                      WowCommerce System Development
                    </span>
                  </h4>
                  <Link
                    href='/service-details'
                    className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-pink-light tw-text-2xl text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-arrow-up-right' />
                  </Link>
                  <Image
                    width={438}
                    height={219}
                    src='/assets/images/thumbs/offer-img2.png'
                    alt='Image'
                    className='tw-duration-300 position-absolute bottom-0 tw-end-0 z-n1'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='group-item position-relative tw-rounded-3xl overflow-hidden z-1 tw-pt-15 bg-main-50 tw-px-40-px tw-pb-84-px tw-duration-300 h-100'>
              <span className='text-main-600 fw-semibold tw-mb-2'>
                Excellent Performance
              </span>
              <h4 className='splitTextStyleOne tw-mb-5 max-w-218-px'>
                {" "}
                Website Design &amp; Development
              </h4>
              <Link
                href='/service-details'
                className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle text-white tw-text-2xl bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9'
              >
                <i className='ph-bold ph-arrow-up-right' />
              </Link>
              <Image
                width={419}
                height={373}
                src='/assets/images/thumbs/offer-img3.png'
                alt='Image'
                className='tw-duration-300 position-absolute bottom-0 tw-end-0 z-n1 tw-mx-4 tw-mb-12 d-md-block d-none'
              />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='row gy-4'>
              <div
                className='col-lg-12 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='group-item position-relative tw-rounded-3xl overflow-hidden z-1 tw-pt-15 h-100 bg-purple-light tw-px-40-px tw-pb-84-px tw-duration-300'>
                  <span className='tw-text-base fw-semibold tw-mb-2 text-purple'>
                    Excellent Performance
                  </span>
                  <h4 className='splitTextStyleOne tw-mb-5 max-w-218-px'>
                    {" "}
                    CRM Software Solution
                  </h4>
                  <Link
                    href='/service-details'
                    className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-arrow-up-right' />
                  </Link>
                  <Image
                    width={327}
                    height={281}
                    src='/assets/images/thumbs/offer-img4.png'
                    alt='Image'
                    className='tw-duration-300 position-absolute bottom-0 tw-end-0 z-n1'
                  />
                </div>
              </div>
              <div
                className='col-lg-12 col-sm-6'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='group-item position-relative tw-rounded-3xl overflow-hidden z-1 tw-pt-15 h-100 bg-paste-light tw-px-40-px tw-pb-136-px tw-duration-300'>
                  <span className='tw-text-base fw-semibold tw-mb-2 text-pink'>
                    Excellent Performance
                  </span>
                  <h4 className='splitTextStyleOne fw-light tw-mb-5 max-w-330-px'>
                    <span className='d-inline-block fw-semibold'>
                      WowCommerce System Development
                    </span>
                  </h4>
                  <Link
                    href='/service-details'
                    className='tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-paste tw-text-2xl text-white hover--translate-y-1 active--translate-y-scale-9'
                  >
                    <i className='ph-bold ph-arrow-up-right' />
                  </Link>
                  <Image
                    width={447}
                    height={222}
                    src='/assets/images/thumbs/offer-img5.png'
                    alt='Image'
                    className='tw-duration-300 position-absolute bottom-0 tw-end-0 z-n1'
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

export default OfferOne;
