import Image from "next/image";
const AboutOne: React.FC = () => {
  return (
    <section className='py-120 drag-rotate-element-section'>
      <div className='container'>
        <div className='tw-rounded-50-px gradient-bg-one tw-px-36-px tw-pt-9'>
          <div className='row gy-4'>
            <div className='col-lg-6'>
              <div className='tw-pe-12 position-relative'>
                <div className='row g-2'>
                  <div
                    className='col-sm-6'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    <div className='bg-main-600 tw-rounded-3xl tw-p-8 text-center h-100 d-flex flex-column justify-content-center align-items-center'>
                      <h3 className='text-white d-inline-flex align-items-center tw-gap-3 tw-mb-9'>
                        <span className='d-flex'>
                          <Image
                            width={22}
                            height={38}
                            src='/assets/images/icons/arrow-up.svg'
                            alt='tech'
                          />
                        </span>

                        <span>88%</span>
                      </h3>
                      <p className='text-white tw-text-sm'>
                        Average revenue growth for per successful clients
                      </p>
                    </div>
                  </div>
                  <div
                    className='col-sm-6'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    <div className='bg-main-two-600 tw-rounded-3xl tw-h-300-px d-flex flex-column justify-content-center align-items-center position-relative'>
                      <Image
                        width={277}
                        height={326}
                        src='/assets/images/thumbs/model.png'
                        alt='tech'
                        className='position-absolute tw-start-50 bottom-0 tw-translate-x-50'
                      />
                    </div>
                    <div className='bg-white tw-rounded-lg common-shadow-one border-bottom border-3 border-main-600 tw-px-4 tw-py-2 d-flex align-items-center tw-gap-3 z-1 position-absolute top-0 tw-end-0 tw-mt-194-px'>
                      <span className='bg-neutral-200 tw-w-10 tw-h-10 tw-rounded-xl d-flex justify-content-center align-items-center text-neutral-500'>
                        <i className='ph-bold ph-smiley' />
                      </span>
                      <div>
                        <h6>
                          <span>99%</span>
                        </h6>
                        <p className='fw-medium tw-text-sm text-neutral-500'>
                          Client Satisfaction
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className='col-sm-6'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    <div className='bg-main-two-600 tw-rounded-3xl tw-p-8 text-center d-flex flex-column justify-content-center align-items-center tw-h-300-px'>
                      <div className='circle-border d-inline-block'>
                        <svg
                          className='radial-progress'
                          data-percentage={78}
                          viewBox='0 0 80 80'
                        >
                          <circle
                            className='incomplete '
                            cx={40}
                            cy={40}
                            r={35}
                          />
                          <circle
                            className='complete circle_custom_1'
                            cx={40}
                            cy={40}
                            r={35}
                          />
                          <text
                            className='percentage'
                            x='50%'
                            y='57%'
                            transform='matrix(0, 1, -1, 0, 80, 0)'
                          >
                            78%
                          </text>
                        </svg>
                      </div>
                      <p className='text-white tw-text-sm tw-mt-5'>
                        Avarage revenew growth for per succesful clients
                      </p>
                    </div>
                  </div>
                  <div
                    className='col-sm-6'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={800}
                  >
                    <div className='myContainer position-relative d-flex flex-column justify-content-center align-items-center h-100 tw-gap-705 overflow-hidden'>
                      <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-1 fw-semibold text-white bg-main-two-600 rounded-pill'>
                        Cybersecurity
                      </span>
                      <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-4 tw-py-1 fw-semibold text-white bg-pink rounded-pill'>
                        Infrastructure Management
                      </span>
                      <span className='drag-rotate-element cursor-grab min-w-max z-1 tw-px-9 tw-py-1 fw-semibold text-white bg-main-600 rounded-pill'>
                        Operational Excellence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='common-shadow-three tw-rounded-40-px bg-white tw-ps-56-px tw-pe-6 tw-py-84-px'>
                <div className='tw-mb-14'>
                  <span className='tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205'>
                    About Us
                  </span>
                  <h3 className='splitTextStyleOne fw-light tw-leading-104'>
                    <span className='d-inline-block fw-semibold'>
                      Comprehensive
                    </span>
                    <span className='d-inline-block'>IT</span>
                    <span className='d-inline-block fw-semibold'>Solution</span>
                    <span className='d-inline-block'> Growth </span>
                    <span className='d-inline-block fw-semibold'>
                      {" "}
                      &amp; Efficiency
                    </span>
                  </h3>
                </div>
                <div className='d-flex flex-column tw-gap-10'>
                  <div
                    className='d-flex align-items-start tw-gap-26-px animation-item'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <span className='tw-w-14 d-flex justify-content-center align-items-center'>
                      <Image
                        width={54}
                        height={54}
                        src='/assets/images/icons/about-icon1.svg'
                        alt='tech'
                        className=' animate__bounce'
                      />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Innovation at our core</h6>
                      <p className='text-neutral-500 max-w-400-px'>
                        In today's competitive business, the demand for
                        efficient cost-effective IT solutions has never been
                        more critic.
                      </p>
                    </div>
                  </div>
                  <div
                    className='d-flex align-items-start tw-gap-26-px animation-item'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <span className='tw-w-14 d-flex justify-content-center align-items-center'>
                      <Image
                        width={42}
                        height={42}
                        src='/assets/images/icons/about-icon2.svg'
                        alt='tech'
                        className=' animate__bounce'
                      />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Simplifying complexity</h6>
                      <p className='text-neutral-500 max-w-400-px'>
                        In today's competitive business, the demand for
                        efficient cost-effective IT solutions has never been
                        more critic.
                      </p>
                    </div>
                  </div>
                  <div
                    className='d-flex align-items-start tw-gap-26-px animation-item'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <span className='tw-w-14 d-flex justify-content-center align-items-center'>
                      <Image
                        width={40}
                        height={40}
                        src='/assets/images/icons/about-icon3.svg'
                        alt='tech'
                        className=' animate__bounce'
                      />
                    </span>
                    <div>
                      <h6 className='tw-mb-4'>Empowering growth.</h6>
                      <p className='text-neutral-500 max-w-400-px'>
                        In today's competitive business, the demand for
                        efficient cost-effective IT solutions has never been
                        more critic.
                      </p>
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

export default AboutOne;
