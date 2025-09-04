import Image from "next/image";
import React from "react";

const AboutFeatures: React.FC = () => {
  return (
    <section className='about-features py-120 section-bg-two'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between flex-wrap tw-gap-6 tw-mb-12'>
          <div className='max-w-532-px'>
            <h3 className='splitTextStyleOne text-capitalize'>
              {" "}
              We aim to
            </h3>
            <p>
              CodSoc’25 was founded in 2025 as the official coding and innovation society of NITRA Technical Campus (NTC), Ghaziabad.
            </p>
          </div>
          <div
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <p className='splitTextStyleOne text-neutral-500 max-w-490-px fw-medium tw-ps-5 border-start border-app-landing border-2'>
              Our society acts as a bridge between academic learning and industry expectations, ensuring that every student develops practical knowledge, problem-solving ability, and teamwork skills.
            </p>
          </div>
        </div>
        <div className='row gy-4'>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='tw-rounded-2xl bg-white bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-200 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={48}
                  height={48}
                  src='/assets/images/icons/about-features-icon1.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h5 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                Promote coding culture across all years and branches.
              </h5>

            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='tw-rounded-2xl bg-white bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-200 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={42}
                  height={42}
                  src='/assets/images/icons/about-features-icon2.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h5 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                Encourage innovation through guided projects and hackathons.
              </h5>

            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={1000}
          >
            <div className='tw-rounded-2xl bg-white bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-200 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={48}
                  height={48}
                  src='/assets/images/icons/about-features-icon3.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h5 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                Build industry-ready skills with modern frameworks, AI/ML, and open-source exposure.
              </h5>

            </div>
          </div>
          <div
            className='col-xl-3 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={1200}
          >
            <div className='tw-rounded-2xl bg-white bg-hover-app-landing tw-py-14 tw-px-7 border border-neutral-200 group animation-item group-item tw-transition tw-duration-200 h-100'>
              <span className='tw-w-92-px tw-h-92-px rounded-circle d-flex align-items-center justify-content-center common-shadow-fifteen tw-mb-11'>
                <Image
                  width={42}
                  height={48}
                  src='/assets/images/icons/about-features-icon4.svg'
                  alt='Icon'
                  className='group-hover-item-text-invert tw-transition tw-duration-200 animate__heartBeat'
                />
              </span>
              <h5 className='splitTextStyleOne tw-mb-7 group-hover-text-white tw-transition tw-duration-200'>
                Connect students with opportunities at the national and international level.
              </h5>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
