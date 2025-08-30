import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
const AboutTwo: React.FC = () => {
  return (
    <section className='about-two py-120 position-relative z-1 overflow-hidden'>
      <Image
        width={119}
        height={116}
        src='/assets/images/shapes/squre-box-shape.png'
        alt='Square shape'
        className='position-absolute top-50 tw-start-0 tw-ms-128-px animate__wobble__two z-n1 d-lg-block d-none'
      />
      <div className='container'>
        <div className='row gy-4 flex-wrap-reverse'>
          {/* About two thumbs slider start */}
          <div className='col-lg-5'>
            <div
              className='tw-rounded-lg background-img tw-px-7 bg-img position-relative max-w-570-px'
              style={{
                backgroundImage:
                  "url('/assets/images/thumbs/about-two-img-bg.png')",
              }}
            >
              <Image
                width={51}
                height={62}
                src='/assets/images/shapes/finger-shape.png'
                alt='Shape'
                className='flower animate__wobble__two position-absolute tw-end-100 bottom-100 tw--m-24-px z-n1'
              />
              <div className='d-flex tw-gap-6  h-675px'>
                {/* First Slider start */}
                <div className='swiper_ overflow-hidden about-two-thumbs-slider-one w-50 h-100'>
                  <div className='swiper-wrapper_ transition-timing-linear tw-gap-6 h-100'>
                    <Marquee direction='down'>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={284}
                            src='/assets/images/thumbs/about-slide-img1.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={279}
                            src='/assets/images/thumbs/about-slide-img2.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={258}
                            src='/assets/images/thumbs/about-slide-img3.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={284}
                            src='/assets/images/thumbs/about-slide-img1.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={280}
                            src='/assets/images/thumbs/about-slide-img2.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={258}
                            src='/assets/images/thumbs/about-slide-img3.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={284}
                            src='/assets/images/thumbs/about-slide-img1.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={280}
                            src='/assets/images/thumbs/about-slide-img2.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={258}
                            src='/assets/images/thumbs/about-slide-img3.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                    </Marquee>
                  </div>
                </div>
                {/* First Slider end */}
                {/* Second Slider start */}
                <div className='swiper_ overflow-hidden about-two-thumbs-slider-two w-50 '>
                  <div className='swiper-wrapper_ transition-timing-linear tw-gap-6'>
                    <Marquee direction='up'>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={284}
                            src='/assets/images/thumbs/about-slide-img1.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={280}
                            src='/assets/images/thumbs/about-slide-img2.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={258}
                            src='/assets/images/thumbs/about-slide-img3.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={284}
                            src='/assets/images/thumbs/about-slide-img1.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={280}
                            src='/assets/images/thumbs/about-slide-img2.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={258}
                            src='/assets/images/thumbs/about-slide-img3.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={284}
                            src='/assets/images/thumbs/about-slide-img1.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={280}
                            src='/assets/images/thumbs/about-slide-img2.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                      <div className='swiper-slide_inner my-4 '>
                        <div className='tw-rounded-2xl overflow-hidden'>
                          <Image
                            width={224}
                            height={258}
                            src='/assets/images/thumbs/about-slide-img3.png'
                            alt='Image'
                            className='w-100 h-100 object-fit-cover'
                          />
                        </div>
                      </div>
                    </Marquee>
                  </div>
                </div>
                {/* Second Slider end */}
              </div>
            </div>
          </div>
          {/* About two thumbs slider End */}
          {/* About two content start */}
          <div className='col-lg-7 ps-lg-5'>
            <div>
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
                Sasstech makes you a better
                <span className='font-dm-serif fst-italic fw-normal'>
                  {" "}
                  elevating
                </span>{" "}
                your team's
              </h2>
              <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-570-px fw-medium tw-text-lg'>
                In today's competitive business, the demand for efficient In
                today's competitive cost-effective IT solutions has never been
                more critic. business
              </p>
              <div className='tw-mt-8'>
                <div className='d-flex align-items-center tw-gap-16'>
                  <div className='d-flex flex-column tw-gap-305'>
                    <div
                      className='d-flex align-items-center tw-gap-405 animation-item'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-11 tw-h-10 text-heading bg-neutral-200 tw-rounded-md d-flex justify-content-center align-items-center tw-text-xl'>
                        <i className='animate__heartBeat ph-bold ph-magnifying-glass' />
                      </span>
                      <Link
                        href='/pricing-plan'
                        className='fw-bold tw-text-lg text-heading hover-underline'
                      >
                        Domain
                      </Link>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-405 animation-item'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-11 tw-h-10 text-heading bg-neutral-200 tw-rounded-md d-flex justify-content-center align-items-center tw-text-xl'>
                        <i className='animate__heartBeat ph-bold ph-dresser' />
                      </span>
                      <Link
                        href='/pricing-plan'
                        className='fw-bold tw-text-lg text-heading hover-underline'
                      >
                        Web Hosting ₹ 79.00/mo
                      </Link>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-405 animation-item'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-11 tw-h-10 text-heading bg-neutral-200 tw-rounded-md d-flex justify-content-center align-items-center tw-text-xl'>
                        <i className='animate__heartBeat ph-bold ph-certificate' />
                      </span>
                      <Link
                        href='/pricing-plan'
                        className='fw-bold tw-text-lg text-heading hover-underline'
                      >
                        SSL Certificates
                      </Link>
                    </div>
                    <div
                      className='d-flex align-items-center tw-gap-405 animation-item'
                      data-aos='fade-up'
                      data-aos-anchor-placement='top-bottom'
                      data-aos-duration={600}
                    >
                      <span className='tw-w-11 tw-h-10 text-heading bg-neutral-200 tw-rounded-md d-flex justify-content-center align-items-center tw-text-xl'>
                        <i className='animate__heartBeat ph-bold ph-envelope' />
                      </span>
                      <Link
                        href='/pricing-plan'
                        className='fw-bold tw-text-lg text-heading hover-underline'
                      >
                        Professional Email
                      </Link>
                    </div>
                  </div>
                  <div className='d-flex align-items-center tw-gap-9 tw-ms-705 d-sm-flex d-none flex-shrink-0'>
                    <span className='tw-h-114-px tw-w-1-px bg-neutral-200' />
                    <span className='fw-bold tw-text-lg text-heading text-uppercase'>
                      OR
                    </span>
                  </div>
                  <div className='tw-ms-205 left-right-animation d-sm-flex d-none'>
                    <Image
                      width={73}
                      height={102}
                      src='/assets/images/shapes/curve-arrow-two.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div
                className='tw-mt-8 max-w-500-px'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <Link
                  href='/pricing-plan'
                  className='hover-black hover--translate-y-1 active--translate-y-scale-9 btn btn-main hover-style-one button--stroke d-lg-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-15 tw-rounded-md tw-py-505 fw-medium'
                  data-block='button'
                >
                  <span className='button__flair' />
                  <span className='button__label'>See Plan &amp; Pricing</span>
                </Link>
              </div>
            </div>
          </div>
          {/* About two content end */}
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
