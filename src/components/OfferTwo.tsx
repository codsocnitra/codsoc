import Image from "next/image";

const OfferTwo: React.FC = () => {
  return (
    <section className='offer-five py-120'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-10'>
            <div className='row gy-5 flex-wrap-reverse'>
              <div className='col-md-6'>
                <div className='pe-lg-5 d-flex h-100'>
                  <Image
                    width={523}
                    height={652}
                    src='/assets/images/thumbs/offer-five-thumb.png'
                    alt='Thumbnail'
                    className='w-100'
                  />
                </div>
              </div>
              <div className='col-md-6'>
                <div>
                  <div className='max-w-780-px text-start mx-auto'>
                    <div
                      className='bg-white tw-py-2 tw-px-7 rounded-pill text-main-600 fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      what we offering
                    </div>
                    <h2 className='splitTextStyleOne text-heading text-capitalize tw-leading-none'>
                      Why should you choose Sassly mobile app.
                    </h2>
                    <p className='text-neutral-600 tw-text-lg tw-mt-605 splitTextStyleOne max-w-5 fw-medium tw-leading-145 max-w-570-px'>
                      Sassly-CRM in the past allowing you to focus more on your
                      business simply enjoy your newfound legal time to reflect
                      leaving pen
                    </p>
                  </div>
                  <div className='tw-mt-11 d-flex flex-column tw-gap-7'>
                    <div className='tw-rounded-3xl border border-neutral-100 tw-py-8 tw-px-9 hover-bg-neutral-100 tw-duration-300 d-flex align-items-start tw-gap-605'>
                      <div>
                        <Image
                          width={43}
                          height={43}
                          src='/assets/images/icons/offer-five-icon1.png'
                          alt='icon'
                        />
                      </div>
                      <div>
                        <h6 className='tw-mb-405 splitTextStyleOne'>
                          240K+ Download worldwide
                        </h6>
                        <p className='tw-text-lg text-neutral-600 max-w-278-px tw-leading-153 splitTextStyleOne'>
                          Analytics refers to the systematic collection
                          interpretation.
                        </p>
                      </div>
                    </div>
                    <div className='tw-rounded-3xl border border-neutral-100 tw-py-8 tw-px-9 hover-bg-neutral-100 tw-duration-300 d-flex align-items-start tw-gap-605'>
                      <div>
                        <Image
                          width={45}
                          height={45}
                          src='/assets/images/icons/offer-five-icon2.png'
                          alt='icon'
                        />
                      </div>
                      <div>
                        <h6 className='tw-mb-405 splitTextStyleOne'>
                          Average 5 star rating
                        </h6>
                        <p className='tw-text-lg text-neutral-600 max-w-278-px tw-leading-153 splitTextStyleOne'>
                          Analytics refers to the systematic collection
                          interpretation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferTwo;
