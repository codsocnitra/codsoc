import Link from "next/link";
import Image from "next/image";
const RoadmapOne: React.FC = () => {
  return (
    <section className='py-120 section-bg-one'>
      <div className='container max-w-1440-px'>
        {/* what we do Start */}
        <div
          className='bg-main-two-600 tw-rounded-3xl overflow-hidden position-relative'
          id='roadmap-section'
        >
          <div className='tw-ps-74-px tw-pe-6 '>
            <div className='d-flex flex-xl-nowrap flex-wrap tw-gap-126-px'>
              <div className='max-w-432-px w-100 flex-shrink-0'>
                <div className='pt-120 tw-pb-9 position-relative'>
                  <Image
                    width={100}
                    height={82}
                    src='/assets/images/shapes/curve-arrow-white.png'
                    alt='Arrow'
                    className='position-absolute top-0 tw-end-0 animate__wobble__two'
                  />
                  {/* <span className='tw-py-1 tw-px-705 bg-white-13 text-white tw-text-sm fw-semibold text-capitalize rounded-pill tw-mb-3'>
                    What we do
                  </span> */}

                  <p className='splitTextStyleOne text-neutral-400 max-w-432-px'>
                    From competitive programming and open-source projects to hackathons and
                    industry-driven workshops, CodSoc’25 is a launchpad for innovation and collaboration.
                    Whether you’re a beginner curious about coding or an advanced programmer aiming for global
                    competitions, we create an environment where you can learn, build, and lead.
                  </p>
                  <div className='tw-mt-11 d-flex align-items-center tw-gap-42-px flex-wrap'>
                    <Link
                      href='/register'
                      className='hover-white hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-three button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-56-px tw-py-5 fw-semibold rounded-pill'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={800}
                      data-block='button'
                    >
                      <span className='button__flair' />
                      <span className='button__label'>Join Us</span>
                    </Link>
                    {/* <div
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={800}
                    >
                      <div className='d-flex align-items-center tw-gap-4'>
                        <div className='d-flex align-items-center'>
                          <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2'>
                            <Image
                              width={35}
                              height={35}
                              src='/assets/images/thumbs/client-img1.png'
                              alt='Client Image'
                              className='w-100 h-100 object-fit-cover'
                            />
                          </div>
                          <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px z-1'>
                            <Image
                              width={35}
                              height={35}
                              src='/assets/images/thumbs/client-img2.png'
                              alt='Client Image'
                              className='w-100 h-100 object-fit-cover'
                            />
                          </div>
                          <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px'>
                            <Image
                              width={35}
                              height={35}
                              src='/assets/images/thumbs/client-img3.png'
                              alt='Client Image'
                              className='w-100 h-100 object-fit-cover'
                            />
                          </div>
                        </div>
                        <span className='h5 counter text-white'>
                          <span>4 M+</span>
                        </span>
                      </div>
                      <p className='fw-bold tw-text-sm font-heading text-heading tw-mt-2 counter text-white'>
                        <span>5000+ Client reviews</span>
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className='flex-grow-1'>
                <div className='d-flex tw-gap-3 flex-wrap'>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-main-600 tw-mt-705'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      01
                    </span>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icons/roadmap-icon1.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      Brainstorming
                    </h6>
                  </div>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-dark-deep tw--mt-8-px'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      02
                    </span>
                    <Image
                      width={36}
                      height={44}
                      src='/assets/images/icons/roadmap-icon2.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      UX <br /> Research
                    </h6>
                  </div>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-sky-deep tw-mt-505'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      03
                    </span>
                    <Image
                      width={41}
                      height={41}
                      src='/assets/images/icons/roadmap-icon3.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      Product Designing
                    </h6>
                  </div>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-dark-deep tw--mt-28-px'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      04
                    </span>
                    <Image
                      width={34}
                      height={34}
                      src='/assets/images/icons/roadmap-icon4.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      Front-End Development
                    </h6>
                  </div>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-dark-deep tw-mt-8'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      05
                    </span>
                    <Image
                      width={37}
                      height={37}
                      src='/assets/images/icons/roadmap-icon5.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      Usability <br /> Testing
                    </h6>
                  </div>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-pink tw--mt-8-px'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      06
                    </span>
                    <Image
                      width={39}
                      height={39}
                      src='/assets/images/icons/roadmap-icon6.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      Back-End Development
                    </h6>
                  </div>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-main-600 tw-mt-4'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      07
                    </span>
                    <Image
                      width={40}
                      height={40}
                      src='/assets/images/icons/roadmap-icon7.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      SEO Optimization
                    </h6>
                  </div>
                  <div className='ball text-center rounded-circle tw-w-180-px tw-h-180-px tw-w-180-px d-flex flex-column justify-content-center align-items-center position-relative animation-item bg-sky-deep tw--mt-28-px'>
                    <span className='tw-h-6 tw-w-6 bg-sky rounded-circle text-white fw-medium tw-text-xs d-flex justify-content-center align-items-center position-absolute top-0 tw-start-0 tw-mt-6 tw-ms-2'>
                      08
                    </span>
                    <Image
                      width={52}
                      height={52}
                      src='/assets/images/icons/roadmap-icon8.svg'
                      alt='Icon'
                      className='animate__swing'
                    />
                    <h6 className='tw-text-base text-white tw-mt-4 fw-medium max-w-118-px mx-auto'>
                      Digital Marketing
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='tw-pb-9'>
            <Image
              width={1441}
              height={130}
              src='/assets/images/shapes/curve-line.png'
              alt='tech'
              className='w-100'
            />
          </div>
        </div>
        {/* what we do end */}
        {/* Global Increase Start */}
        {/* <div className='pt-120'>
          <h3 className='splitTextStyleOne fw-light tw-leading-104 tw-mb-14 text-center'>
            <span className='d-inline-block '>We Makes Globally</span>{" "}
            <span className='d-inline-block fw-semibold'>
              Growth &amp; Increase{" "}
            </span>{" "}
            <span className='d-inline-block '> Revenue</span>
          </h3>
          <div className='d-flex flex-wrap justify-content-center'>
            <div
              className='tw-min-h-184-px bg-main-600 tw-py-4 tw-px-4 rounded-pill text-center max-w-388-px w-100'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <h3 className='h1 counter text-white tw-mb-4 fw-medium'>27 K</h3>
              <p className='text-white max-w-228-px mx-auto'>
                Average revenue growth for per successful clients
              </p>
            </div>
            <div
              className='tw-min-h-184-px bg-main-600 tw-py-4 tw-px-4 rounded-pill max-w-514-px w-100 d-flex align-items-center tw-gap-505 justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <h3 className='h1 counter text-white tw-mb-4 fw-medium d-inline-flex align-items-center tw-gap-4'>
                <Image
                  width={22}
                  height={38}
                  src='/assets/images/icons/arrow-up-green.svg'
                  alt='tech'
                />

                <span>88%</span>
              </h3>
              <p className='text-white max-w-194-px '>
                Average revenue growth for per successful clients
              </p>
            </div>
            <div
              className='tw-min-h-184-px bg-white tw-py-4 tw-px-4 rounded-pill max-w-388-px w-100 d-flex align-items-center tw-gap-505 justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <h3 className='h1 counter text-main-600 fw-medium d-inline-flex align-items-center tw-gap-4'>
                <span>3x</span>
              </h3>
              <div className='d-flex align-items-center tw-gap-2'>
                <span className='text-main-two-600 tw-text-2xl fw-semibold '>
                  //
                </span>
                <p className='text-main-two-600 max-w-194-px '>
                  {" "}
                  Faster time to launch
                </p>
              </div>
            </div>
            <div
              className='tw-min-h-184-px bg-white tw-py-4 tw-px-4 rounded-pill max-w-490-px w-100 d-flex align-items-center tw-gap-505 justify-content-center border border-main-50'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <h3 className='h1 counter text-main-600 fw-medium d-inline-flex align-items-center tw-gap-4'>
                <span>50%</span>
              </h3>
              <p className='text-main-two-600 max-w-194-px '>
                Effective in financial growth than before growth
              </p>
            </div>
            <div
              className='tw-min-h-184-px bg-main-600 tw-py-4 tw-px-4 rounded-pill text-center max-w-288-px w-100 tw-mt-1 d-flex flex-column justify-content-center'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <h3 className='h1 counter text-white fw-medium'>
                <span>95%</span>
              </h3>
              <p className='text-white max-w-228-px mx-auto'>
                Average positive review
              </p>
            </div>
            <div
              className='tw-min-h-184-px bg-white tw-py-4 tw-px-4 rounded-pill max-w-514-px w-100 d-flex align-items-center tw-gap-505 justify-content-center border border-main-50'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <h3 className='h1 counter text-main-600 fw-medium d-inline-flex align-items-center tw-gap-4'>
                <span>5m</span>
              </h3>
              <div className='d-flex align-items-center tw-gap-2'>
                <p className='text-main-two-600 max-w-194-px '>
                  Average revenue growth for per successful clients
                </p>
              </div>
            </div>
          </div>
        </div> */}
        {/* Global Increase End */}
      </div>
    </section>
  );
};

export default RoadmapOne;
