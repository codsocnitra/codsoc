"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";

const PlanExecuteOne: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    dots: true,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
      { breakpoint: 300, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <section className='position-relative gradient-bg-80-percent z-1'>
      <div className='plan-execute py-120'>
        <div className='container max-w-1570-px'>
          <div className='max-w-602-px text-center mx-auto tw-mb-13'>
            <div
              className='bg-white tw-py-3 tw-px-305 rounded-pill fw-medium text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max border border-spring-green'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={600}
            >
              <div className='text-gradient-teal'>
                Up to{" "}
                <span className='text-yellow text-stroke-yellow'>70%</span> off
                managed cloud hosting
              </div>
            </div>
            <h2 className='splitTextStyleOne text-heading text-capitalize text-capitalize'>
              Plan, execute and
              <span className='font-dm-serif fst-italic fw-normal text-gradient-teal'>
                track projects
              </span>
              of any size
            </h2>
          </div>
          <div className='plan-execute-slider one swiper'>
            <Slider {...settings} className='swiper-wrapper'>
              <div
                className='swiper-slide'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={600}
              >
                <div className='plan-execute-item'>
                  <div className='tw-rounded-2xl overflow-hidden'>
                    <Image
                      width={376}
                      height={394}
                      src='/assets/images/thumbs/plan-execute-img1.png'
                      alt='thumbnail'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='tw-mt-8 text-center'>
                    <h6 className='tw-mb-205'>Custom templates</h6>
                    <p className='text-neutral-600 max-w-278-px mx-auto'>
                      Web hosting provides everything you idea online. From
                      where your
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='swiper-slide'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={700}
              >
                <div className='plan-execute-item'>
                  <div className='tw-rounded-2xl overflow-hidden'>
                    <Image
                      width={390}
                      height={394}
                      src='/assets/images/thumbs/plan-execute-img3.png'
                      alt='thumbnail'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='tw-mt-8 text-center'>
                    <h6 className='tw-mb-205'>Collaboration tools</h6>
                    <p className='text-neutral-600 max-w-278-px mx-auto'>
                      Web hosting provides everything you idea online. From
                      where your
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='swiper-slide'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                <div className='plan-execute-item'>
                  <div className='tw-rounded-2xl overflow-hidden'>
                    <Image
                      width={388}
                      height={394}
                      src='/assets/images/thumbs/plan-execute-img2.png'
                      alt='thumbnail'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='tw-mt-8 text-center'>
                    <h6 className='tw-mb-205'>Operations teams</h6>
                    <p className='text-neutral-600 max-w-278-px mx-auto'>
                      Web hosting provides everything you idea online. From
                      where your
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='swiper-slide'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={900}
              >
                <div className='plan-execute-item'>
                  <div className='tw-rounded-2xl overflow-hidden'>
                    <Image
                      width={371}
                      height={395}
                      src='/assets/images/thumbs/plan-execute-img4.png'
                      alt='thumbnail'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='tw-mt-8 text-center'>
                    <h6 className='tw-mb-205'>Project Management</h6>
                    <p className='text-neutral-600 max-w-278-px mx-auto'>
                      Web hosting provides everything you idea online. From
                      where your
                    </p>
                  </div>
                </div>
              </div>
              <div
                className='swiper-slide'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={700}
              >
                <div className='plan-execute-item'>
                  <div className='tw-rounded-2xl overflow-hidden'>
                    <Image
                      width={390}
                      height={394}
                      src='/assets/images/thumbs/plan-execute-img3.png'
                      alt='thumbnail'
                      className='w-100 h-100 object-fit-cover'
                    />
                  </div>
                  <div className='tw-mt-8 text-center'>
                    <h6 className='tw-mb-205'>Collaboration tools</h6>
                    <p className='text-neutral-600 max-w-278-px mx-auto'>
                      Web hosting provides everything you idea online. From
                      where your
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
            <div className='plan-execute-pagination pagination-style-three pb-1 d-flex align-items-center justify-content-center tw-mt-15'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanExecuteOne;
