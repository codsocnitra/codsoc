"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BannerFour: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("data");
  const tabs = [
    {
      id: "data",
      label: "data",
      img: "/assets/images/thumbs/banner-dashboard.png",
    },
    {
      id: "Automation",
      label: "Automation",
      img: "/assets/images/thumbs/banner-dashboard_2.png",
    },
    {
      id: "Pipeline",
      label: "Pipeline",
      img: "/assets/images/thumbs/banner-dashboard.png",
    },
    {
      id: "Productivity",
      label: "Productivity",
      img: "/assets/images/thumbs/banner-dashboard_2.png",
    },
    {
      id: "Reporting",
      label: "Reporting",
      img: "/assets/images/thumbs/banner-dashboard.png",
    },
  ];
  return (
    <section className='banner-two position-relative z-1 pb-0'>
      <Image
        width={1920}
        height={1012}
        src='/assets/images/bg/mash-gradient-bg1.png'
        alt='Cloud Shape'
        className='position-absolute top-0 tw-start-0 w-100 z-n1 banner-gradient-bg'
      />
      <div className='banner-two__inner position-relative'>
        <div className='container'>
          <div className='text-center'>
            <span className='text-capitalize font-caveat fw-bold tw-mb-6 h3'>
              With the world's favorite CRM
            </span>
            <div>
              <div className='position-relative d-inline-block'>
                <h1 className='splitTextStyleOne text-capitalize fw-bold tw-leading-none tw-pb-205'>
                  {" "}
                  The next gen of CRM.
                </h1>
                <div className='text-end svg-line d-sm-block d-none'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={489}
                    height={18}
                    viewBox='0 0 489 18'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M207.684 1.72387C184.71 2.31462 162.007 3.04101 139.867 3.83514C108.526 4.95854 77.1964 6.12068 46.056 7.96073C36.2537 8.5418 26.2994 8.90979 16.5584 9.63613C10.4436 10.0913 2.33552 10.7401 1.27144 10.8757C0.714878 10.9531 0.472071 11.0695 0.393613 11.1082C-0.158042 11.3794 -0.0573853 11.6407 0.253993 11.8441C0.379035 11.9313 0.695229 12.1444 1.57297 12.1735C60.274 14.1588 120.299 10.285 179.071 9.87824C280.993 9.18096 386.003 11.9507 487.115 17.9938C487.998 18.0423 488.856 17.8001 488.979 17.4418C489.126 17.0931 488.489 16.7542 487.606 16.7057C386.322 10.6529 281.14 7.87347 179.022 8.58044C124.249 8.95813 68.3944 12.3575 13.5451 11.1953C14.8053 11.0985 16.0411 11.0016 17.1689 10.9144C26.8707 10.1881 36.7833 9.8298 46.5464 9.24873C77.6205 7.40868 108.886 6.24654 140.186 5.13282C179.022 3.73826 219.55 2.53737 260.397 1.97567C275.01 2.06283 289.574 2.15003 304.137 2.25656C335.643 2.48899 367.296 3.16691 398.728 4.07725C408.192 4.3581 417.656 4.64861 427.12 4.9004C430.258 4.98757 438.349 5.23932 439.477 5.21995C440.875 5.20058 441.144 4.73577 441.169 4.65829C441.242 4.48397 441.193 4.24185 440.507 4.03847C440.433 4.00942 439.992 3.91251 439.011 3.85441C381.86 0.426099 320.834 -0.145196 260.446 0.677985C196.749 0.319659 132.806 0.164636 69.2697 0C68.3601 0 67.6172 0.290577 67.6098 0.648903C67.6049 1.00723 68.338 1.29782 69.2476 1.3075C115.253 1.42371 161.492 1.53986 207.684 1.72387Z'
                      fill='#FF7E3E'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <p className='splitTextStyleOne text-neutral-600 tw-text-lg tw-mt-405 tw-mt-8 max-w-672-px mx-auto fw-medium'>
              Sassly-CRM in the past allowing you to focus more on your business
              or simply enjoy your newfound legal time to reflect leaving
              pen-and-paper.
            </p>
            <div
              className='d-inline-flex align-items-center tw-gap-5 tw-mt-8 flex-wrap'
              data-aos='fade-up'
              data-aos-anchor-placement='top-bottom'
              data-aos-duration={800}
            >
              <Link
                href='#'
                className='flex-grow-1 banner_four_btn hover--translate-y-1 active--translate-y-scale-9 btn btn-main-two hover-style-two button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-10 rounded-pill tw-py-505 fw-bold'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Schedule a Demo</span>
              </Link>
              <Link
                href='#'
                className='flex-grow-1 banner_four_btn_outline hover--translate-y-1 active--translate-y-scale-9 btn btn-orange-outline hover-style-five hover-text-white button--stroke align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-10 rounded-pill tw-py-505 fw-bold bg-white'
                data-block='button'
              >
                <span className='button__flair' />
                <span className='button__label'>Contact Sales</span>
              </Link>
            </div>
            <div className='tw-mt-132-px'>
              {/* Tab Buttons */}
              <ul
                className='nav nav-pills d-inline-flex flex-wrap align-items-center tw-mb-8 tw-gap-4 active-bg-blue active-text-white'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={800}
              >
                {tabs.map((tab) => (
                  <li className='nav-item' key={tab.id}>
                    <button
                      className={`nav-link tw-py-105 text-capitalize tw-px-5 common-shadow-twentyThree bg-white text-heading fw-medium tw-text-base tw-rounded-md active-triangle-arrow position-relative ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                      type='button'
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Tab Content */}
              <div
                className='tab-content'
                data-aos='fade-up'
                data-aos-anchor-placement='top-bottom'
                data-aos-duration={1000}
              >
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${
                      activeTab === tab.id ? "show active" : ""
                    }`}
                  >
                    <div className='shadow-lg tw-p-405 tw-rounded-3xl bg-white-gradient common-shadow-eleven backdrop-blur-20 border border-white-02'>
                      <div className='common-shadow-twentyTwo tw-rounded-xl'>
                        <Image
                          width={1290}
                          height={726}
                          src={tab.img}
                          alt='Dashboard Thumb'
                          className='w-100 h-100'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
