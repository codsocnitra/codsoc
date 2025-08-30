"use client";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
const TestimonialsThree: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <section className='position-relative  z-1'>
      <div className='testimonials-three'>
        <div className='container  bg-main-three tw-rounded-2xl  tw-py-16 tw-px-11   tw-gap-74-px'>
          <div className='row '>
            <div className='col-md-5 text-center'>
              <Image
                width={413}
                height={415}
                src='/assets/images/thumbs/testimonials-three-thumbs.png'
                alt='Testimonials Thumb'
                data-aos='zoom-in'
                data-aos-duration={800}
              />
            </div>
            <div className='col-md-7'>
              <div className='testimonials-three-slider swiper'>
                <Slider {...settings} className='swiper-wrapper'>
                  <div
                    className='swiper-slide'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <div>
                      <span className='tw-mb-705'>
                        <Image
                          width={100}
                          height={18}
                          src='/assets/images/icons/ratings.svg'
                          alt=''
                        />
                      </span>
                      <p className='text-30-px fw-normal text-white max-w-672-px tw-leading-145'>
                        Sasstech hires great people from a widely variety of
                        backgrounds, which simply makes our company stronger,
                        and we couldn't be prouder of that. elevating your
                        optimizing Business Growth.
                      </p>
                      <span className='d-block w-100 tw-h-px tw-mt-12 tw-mb-4 bg-white-08' />
                      <div className='tw-px-705 tw-py-2 bg-white-06 d-inline-flex align-items-center tw-gap-6'>
                        <div className='tw-w-17 tw-h-17 rounded-circle overflow-hidden'>
                          <Image
                            width={70}
                            height={71}
                            src='/assets/images/thumbs/client-img.png'
                            alt='Client Thumb'
                          />
                        </div>
                        <div>
                          <h6 className='text-white fw-medium tw-mb-1'>
                            James anderson{" "}
                          </h6>
                          <div className='text-white fw-medium tw-text-base'>
                            <strong className='text-spring-green'>Ceo</strong>{" "}
                            and Founder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className='swiper-slide'
                    data-aos='fade-up'
                    data-aos-anchor-placement='top-bottom'
                    data-aos-duration={600}
                  >
                    <div>
                      <span className='tw-mb-705'>
                        <Image
                          width={100}
                          height={18}
                          src='/assets/images/icons/ratings.svg'
                          alt=''
                        />
                      </span>
                      <p className='text-30-px fw-normal text-white max-w-672-px tw-leading-145'>
                        Sasstech hires great people from a widely variety of
                        backgrounds, which simply makes our company stronger,
                        and we couldn't be prouder of that. elevating your
                        optimizing Business Growth.
                      </p>
                      <span className='d-block w-100 tw-h-px tw-mt-12 tw-mb-4 bg-white-08' />
                      <div className='tw-px-705 tw-py-2 bg-white-06 d-inline-flex align-items-center tw-gap-6'>
                        <div className='tw-w-17 tw-h-17 rounded-circle overflow-hidden'>
                          <Image
                            width={70}
                            height={71}
                            src='/assets/images/thumbs/client-img.png'
                            alt='Client Thumb'
                          />
                        </div>
                        <div>
                          <h6 className='text-white fw-medium tw-mb-1'>
                            James anderson{" "}
                          </h6>
                          <div className='text-white fw-medium tw-text-base'>
                            <strong className='text-spring-green'>Ceo</strong>{" "}
                            and Founder
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsThree;
