"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchDomainForm from "./form/SearchDomainForm";

const SearchDomainOne: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("FindNewDomain");
  const tabs = [
    {
      id: "FindNewDomain",
      label: "Find New Domain",
    },
    {
      id: "GeneratedomainusingAI",
      label: "Generate domain using AI",
    },
  ];
  return (
    <section
      className='search-domain position-relative z-1 tw--mt-170-px'
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration={800}
    >
      <Image
        width={247}
        height={220}
        src='/assets/images/shapes/hand-thumb.png'
        alt='Hand thumb'
        className='hand-thumb left-right-animation position-absolute tw-start-0 top-0 tw-mt-15'
      />
      <div className='container'>
        <div className='bg-white common-shadow-six tw-pt-10 tw-pb-16 tw-px-88-px'>
          <h3 className='text-center tw-mb-4 text-capitalize splitTextStyleOne'>
            Search and buy a{" "}
            <span className='text-yellow font-dm-serif fst-italic fw-normal'>
              domain
            </span>{" "}
            in minutes
          </h3>
          <div
            className='text-center'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <ul
              className='animate-background-wrapper z-1 position-relative nav nav-pills active-text-white d-inline-flex border border-neutral-200 rounded-pill tw-mb-6'
              role='tablist'
            >
              <li className='background inner' />

              {tabs.map((tab) => (
                <li
                  className='nav-item flex-grow-1'
                  role='presentation'
                  key={tab.id}
                >
                  <button
                    type='button'
                    className={`nav-link w-100 active-scale-094 rounded-pill tw-px-6 tw-py-305 bg-transparent fw-semibold text-heading hover-text-main-600 h-100 line-clamp-1 ${
                      activeTab === tab.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    role='tab'
                    aria-selected={activeTab === tab.id}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className={`tab-pane fade show ${
                activeTab === "FindNewDomain" ? "active" : ""
              } `}
              id='pills-FindNewDomain'
              role='tabpanel'
              aria-labelledby='pills-FindNewDomain-tab'
              tabIndex={0}
            >
              <div className='select-domain-wrapper '>
                {/* SearchDomainForm */}
                <SearchDomainForm />
                <div
                  className='overflow-x-max-lg-auto scroll-sm scroll-sm-horizontal pb-sm-0'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <div className='tw-mt-6 d-grid grid-col-5 min-w-max tw-pb-1'>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end border-start'
                      data-domain='.com'
                    >
                      <Image
                        width={70}
                        height={30}
                        src='/assets/images/thumbs/domain-img1.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.cloud'
                    >
                      <Image
                        width={74}
                        height={32}
                        src='/assets/images/thumbs/domain-img2.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $14.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.shop'
                    >
                      <Image
                        width={67}
                        height={29}
                        src='/assets/images/thumbs/domain-img3.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.online'
                    >
                      <Image
                        width={85}
                        height={29}
                        src='/assets/images/thumbs/domain-img4.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.info'
                    >
                      <Image
                        width={50}
                        height={26}
                        src='/assets/images/thumbs/domain-img5.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className='text-center text-heading fw-medium tw-mt-8'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  Already bought a domain?
                  <a
                    href='#'
                    className='fw-bold text-decoration-underline text-heading hover-text-main-600'
                  >
                    Transfer it?
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`tab-pane fade show ${
                activeTab === "GeneratedomainusingAI" ? "active" : ""
              } `}
              id='pills-GeneratedomainusingAI'
              role='tabpanel'
              aria-labelledby='pills-GeneratedomainusingAI-tab'
              tabIndex={0}
            >
              <div className='select-domain-wrapper '>
                {/* SearchDomainForm */}
                <SearchDomainForm />
                <div
                  className='overflow-x-max-lg-auto scroll-sm scroll-sm-horizontal pb-sm-0'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={600}
                >
                  <div className='tw-mt-6 d-grid grid-col-5 min-w-max tw-pb-1'>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end border-start'
                      data-domain='.com'
                    >
                      <Image
                        width={70}
                        height={30}
                        src='/assets/images/thumbs/domain-img1.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.cloud'
                    >
                      <Image
                        width={74}
                        height={32}
                        src='/assets/images/thumbs/domain-img2.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $14.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.shop'
                    >
                      <Image
                        width={67}
                        height={29}
                        src='/assets/images/thumbs/domain-img3.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.online'
                    >
                      <Image
                        width={85}
                        height={29}
                        src='/assets/images/thumbs/domain-img4.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                    <button
                      type='button'
                      className='domain-item-button text-center tw-py-205 tw-px-5 border-bottom hover-common-shadow-four animation-item border-top border-neutral-200 border-end'
                      data-domain='.info'
                    >
                      <Image
                        width={50}
                        height={26}
                        src='/assets/images/thumbs/domain-img5.png'
                        alt='Domain Logo'
                        className='animate__wobble'
                      />
                      <span className='d-block text-neutral-600 tw-mt-105 tw-mb-1'>
                        Starting price
                      </span>
                      <span className='d-block text-neutral-700 tw-mt-1 tw-text-sm fw-semibold'>
                        $13.34/Yearly
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className='text-center text-heading fw-medium tw-mt-8'
                  data-aos='fade-up'
                  data-aos-anchor-placement='top-bottom'
                  data-aos-duration={800}
                >
                  Already bought a domain?
                  <a
                    href='#'
                    className='fw-bold text-decoration-underline text-heading hover-text-main-600'
                  >
                    Transfer it?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='text-center tw-mt-11 text-heading fw-medium d-flex align-items-center tw-gap-4 justify-content-center flex-wrap'
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          data-aos-duration={800}
        >
          <span>
            Our Customers say <span className='fw-bold tw-ms-2'>Great</span>{" "}
          </span>
          <Image
            width={100}
            height={18}
            src='/assets/images/icons/ratings.svg'
            alt=''
          />
          <span>4.1 out of 5 based on 16,158 reviews</span>
          <div className='d-flex align-items-center tw-gap-05'>
            <Image
              width={19}
              height={18}
              src='/assets/images/icons/trustpilot-star.svg'
              alt=''
            />
            <span className='fw-bold'>Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchDomainOne;
