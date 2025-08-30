import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkProcessTwo: React.FC = () => {
  return (
    <section className='section-bg-two py-120'>
      <div className='container'>
        <div className='d-flex align-items-center justify-content-between flex-wrap tw-gap-4 tw-mb-14'>
          <h3 className='splitTextStyleOne text-heading text-capitalize max-w-532-px'>
            It actually work for cloud system based your app
          </h3>
          <p className='text-neutral-500 tw-mt-5 splitTextStyleOne max-w-570-px tw-text-lg tw-ps-5 border-start border-app-landing'>
            Create tasks with various custom statuses to focus more on your keep
            track of the progress of each why in the simply enjoy process for
            your business.
          </p>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='bg-white tw-py-12 tw-px-9 text-start hover-common-shadow-sixteen tw-rounded-2xl group group-item bg-hover-app-landing tw-transition tw-duration-200 h-100'>
              <span className='tw-mb-8'>
                <Image
                  width={100}
                  height={100}
                  src='/assets/images/icons/seamless-icon1.png'
                  alt='Icon'
                />
              </span>
              <h6 className='tw-mb-10 group-hover-text-white tw-transition tw-duration-200'>
                Hubspot Contacts Sync
              </h6>
              <p className='text-neutral-500 tw-text-base tw-mb-705 group-hover-text-white tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your of
                more on
              </p>
              <Link
                href='/intigration-details'
                className='fw-semibold text-main-600 d-inline-flex align-items-center tw-gap-3 hover-underline group-hover-text-white tw-transition tw-duration-200'
              >
                See integration
                <i className='ph-bold d-inline-flex tw-leading-none ph-arrow-right' />
              </Link>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='bg-white tw-py-12 tw-px-9 text-start hover-common-shadow-sixteen tw-rounded-2xl group group-item bg-hover-app-landing tw-transition tw-duration-200 h-100'>
              <span className='tw-mb-8'>
                <Image
                  width={100}
                  height={100}
                  src='/assets/images/icons/seamless-icon6.png'
                  alt='Icon'
                />
              </span>
              <h6 className='tw-mb-10 group-hover-text-white tw-transition tw-duration-200'>
                Github integration
              </h6>
              <p className='text-neutral-500 tw-text-base tw-mb-705 group-hover-text-white tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your of
                more on
              </p>
              <Link
                href='/intigration-details'
                className='fw-semibold text-main-600 d-inline-flex align-items-center tw-gap-3 hover-underline group-hover-text-white tw-transition tw-duration-200'
              >
                See integration
                <i className='ph-bold d-inline-flex tw-leading-none ph-arrow-right' />
              </Link>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='bg-white tw-py-12 tw-px-9 text-start hover-common-shadow-sixteen tw-rounded-2xl group group-item bg-hover-app-landing tw-transition tw-duration-200 h-100'>
              <span className='tw-mb-8'>
                <Image
                  width={100}
                  height={100}
                  src='/assets/images/icons/seamless-icon2.png'
                  alt='Icon'
                />
              </span>
              <h6 className='tw-mb-10 group-hover-text-white tw-transition tw-duration-200'>
                Spotify Online Platform
              </h6>
              <p className='text-neutral-500 tw-text-base tw-mb-705 group-hover-text-white tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your of
                more on
              </p>
              <Link
                href='/intigration-details'
                className='fw-semibold text-main-600 d-inline-flex align-items-center tw-gap-3 hover-underline group-hover-text-white tw-transition tw-duration-200'
              >
                See integration
                <i className='ph-bold d-inline-flex tw-leading-none ph-arrow-right' />
              </Link>
            </div>
          </div>
          <div className='col-xl-3 col-lg-4 col-sm-6'>
            <div className='bg-white tw-py-12 tw-px-9 text-start hover-common-shadow-sixteen tw-rounded-2xl group group-item bg-hover-app-landing tw-transition tw-duration-200 h-100'>
              <span className='tw-mb-8'>
                <Image
                  width={100}
                  height={100}
                  src='/assets/images/icons/seamless-icon3.png'
                  alt='Icon'
                />
              </span>
              <h6 className='tw-mb-10 group-hover-text-white tw-transition tw-duration-200'>
                Dropbox Streaming
              </h6>
              <p className='text-neutral-500 tw-text-base tw-mb-705 group-hover-text-white tw-transition tw-duration-200'>
                Web hosting provides everything idea online. From where your of
                more on
              </p>
              <Link
                href='/intigration-details'
                className='fw-semibold text-main-600 d-inline-flex align-items-center tw-gap-3 hover-underline group-hover-text-white tw-transition tw-duration-200'
              >
                See integration
                <i className='ph-bold d-inline-flex tw-leading-none ph-arrow-right' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTwo;
