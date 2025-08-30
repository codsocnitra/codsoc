"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const FeaturesThree: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const items = [
    { label: "Action", href: "#" },
    { label: "Another action", href: "#" },
    { label: "Something else here", href: "#" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className='features-three py-120 position-relative z-1'>
      <Image
        width={272}
        height={640}
        src='/assets/images/shapes/gradient-blue-yellow.png'
        alt='Gradient'
        className='position-absolute tw-end-0 bottom-0 z-n1'
      />
      <div className='container'>
        <div className='d-block d-md-flex align-items-center justify-content-between tw-gap-6 tw-mb-12'>
          <div className='max-w-620-px'>
            <h2 className='splitTextStyleOne text-heading text-capitalize'>
              {" "}
              Task management
              <span className='font-dm-serif fst-italic fw-normal text-gradient-teal'>
                {" "}
                features{" "}
              </span>
              &amp; capabilities
            </h2>
          </div>
          <div
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <p className='splitTextStyleOne text-neutral-500 tw-mt-8 max-w-490-px fw-medium'>
              Sassly-CRM in the past allowing you to focus more on your business
              simply enjoy your newfound legal time to reflect leaving pen
            </p>
          </div>
        </div>
        <div className='row gy-4'>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={600}
          >
            <div className='tw-rounded-xl bg-goldenrod tw-p-7 h-100'>
              <div className='tw-pt-8 tw-pb-10 tw-ps-4'>
                <div className='position-relative h-100 d-flex flex-column'>
                  <span className='z-3 position-relative tw-px-11 tw-py-205 fw-bold text-white gradient-bg-six rounded-pill transform-rotate--14-deg'>
                    Project management
                  </span>
                  <span className='z-2 position-relative tw-px-11 tw-py-205 fw-bold text-heading bg-yellow rounded-pill'>
                    Performance tracking
                  </span>
                  <span className='z-1 position-relative tw-px-6 tw-py-205 fw-bold text-white gradient-bg-five rounded-pill transform-rotate-8-deg'>
                    Seamless integrations tools
                  </span>
                </div>
              </div>
              <div className='bg-white tw-rounded-lg common-shadow-twelve tw-py-5 tw-px-6'>
                <div className='d-flex align-items-center justify-content-between'>
                  <span className='fw-bold tw-text-sm'>Labels</span>
                  <div className='dropdown' ref={dropdownRef}>
                    <button
                      type='button'
                      className='text-neutral-400'
                      onClick={() => setOpen(!open)}
                      aria-expanded={open}
                    >
                      <i className='ph-fill ph-dots-three-outline' />
                    </button>

                    {open && (
                      <ul className='dropdown-menu border-0 min-w-max tw-p-4 common-shadow-eight show'>
                        {items.map((item, index) => (
                          <li className='p-0' key={index}>
                            <Link
                              href={item.href}
                              className='nav-submenu__link hover-bg-neutral-200 text-heading fw-semibold w-100 d-block tw-py-2 tw-px-305 tw-rounded'
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className='tw-mt-7'>
                  <div className='d-flex align-items-center justify-content-between tw-pb-3 tw-mb-3 border-bottom border-neutral-100'>
                    <label
                      htmlFor='Copywriting'
                      className='d-flex align-items-center tw-gap-405'
                    >
                      <span className='text-neutral-400 d-flex'>
                        <i className='ph-fill ph-tag' />
                      </span>
                      <span className='text-heading fw-medium tw-text-sm'>
                        Copywriting
                      </span>
                    </label>
                    <div className='form-check common-check-two'>
                      <input
                        className='form-check-input me-0 float-none tw-w-6 tw-h-6 tw-rounded shadow-none bg-main-50'
                        type='checkbox'
                        id='Copywriting'
                      />
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between tw-pb-3 tw-mb-3 border-bottom border-neutral-100'>
                    <label
                      htmlFor='UIDesign'
                      className='d-flex align-items-center tw-gap-405'
                    >
                      <span className='text-neutral-400 d-flex'>
                        <i className='ph-fill ph-tag' />
                      </span>
                      <span className='text-heading fw-medium tw-text-sm'>
                        UI Design
                      </span>
                    </label>
                    <div className='form-check common-check-two'>
                      <input
                        className='form-check-input me-0 float-none tw-w-6 tw-h-6 tw-rounded shadow-none bg-main-50'
                        type='checkbox'
                        id='UIDesign'
                      />
                    </div>
                  </div>
                  <div className='d-flex align-items-center justify-content-between'>
                    <label
                      htmlFor='Illustrations'
                      className='d-flex align-items-center tw-gap-405'
                    >
                      <span className='text-neutral-400 d-flex'>
                        <i className='ph-fill ph-tag' />
                      </span>
                      <span className='text-heading fw-medium tw-text-sm'>
                        Illustrations
                      </span>
                    </label>
                    <div className='form-check common-check-two'>
                      <input
                        className='form-check-input me-0 float-none tw-w-6 tw-h-6 tw-rounded shadow-none bg-main-50'
                        type='checkbox'
                        id='Illustrations'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between tw-gap-3 tw-mt-4'>
                <div className='d-flex align-items-center tw-gap-2'>
                  <div className='d-flex align-items-center'>
                    <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative z-2 border border-white border-3'>
                      <Image
                        width={35}
                        height={35}
                        src='/assets/images/thumbs/client-img1.png'
                        alt='Client Image'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                    <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px z-1 border border-white border-3'>
                      <Image
                        width={35}
                        height={35}
                        src='/assets/images/thumbs/client-img2.png'
                        alt='Client Image'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                    <div className='tw-w-9 tw-h-9 rounded-circle overflow-hidden tw-duration-300 hover-scale-14 tw-hover-z-9 position-relative tw--ms-10-px border border-white border-3'>
                      <Image
                        width={35}
                        height={35}
                        src='/assets/images/thumbs/client-img3.png'
                        alt='Client Image'
                        className='w-100 h-100 object-fit-cover'
                      />
                    </div>
                  </div>
                  <span className='text-neutral-600 tw-text-sm'>
                    + 15 people
                  </span>
                </div>
                <div>
                  <input type='file' id='uploadPhoto' hidden={true} />
                  <label
                    htmlFor='uploadPhoto'
                    className='tw-w-7 tw-h-7 rounded-circle d-flex justify-content-center align-items-center border border-neutral-300 border-dashed border-2 tw-text-sm bg-white text-neutral-300 cursor-pointer hover-bg-main-600 hover-text-white hover-border-main-600'
                  >
                    <i className='ph-bold ph-plus' />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4 col-sm-6'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={700}
          >
            <div className='row gy-4'>
              <div className='col-lg-12'>
                <div className='group-item tw-rounded-xl border border-neutral-200 tw-pt-12 tw-pb-15 tw-px-9 bg-neutral-50 hover-gradient-bg-five group animation-item tw-duration-300 position-relative z-1'>
                  <div className='d-flex align-items-center justify-content-between tw-gap-2'>
                    <h5 className='group-hover-text-white tw-duration-300 max-w-194-px splitTextStyleOne'>
                      Asynchronous Meetings
                    </h5>
                    <span className='group-hover-item-text-invert tw-duration-300 animate__heartBeat'>
                      <Image
                        width={48}
                        height={48}
                        src='/assets/images/icons/features-three-icon1.svg'
                        alt='Icon'
                      />
                    </span>
                  </div>
                  <p className='text-neutral-500 max-w-278-px tw-mt-10 group-hover-text-white tw-duration-300'>
                    We are committed to your success. Our platform is built to
                    drive
                  </p>
                </div>
              </div>
              <div className='col-lg-12'>
                <div className='group-item tw-rounded-xl border border-neutral-200 tw-pt-12 tw-pb-15 tw-px-9 bg-neutral-50 hover-gradient-bg-five group animation-item tw-duration-300 position-relative z-1'>
                  <div className='d-flex align-items-center justify-content-between tw-gap-2'>
                    <h5 className='group-hover-text-white tw-duration-300 max-w-194-px splitTextStyleOne'>
                      Monitoring your Time
                    </h5>
                    <span className='group-hover-item-text-invert tw-duration-300 animate__heartBeat'>
                      <Image
                        width={48}
                        height={48}
                        src='/assets/images/icons/features-three-icon2.svg'
                        alt='Icon'
                      />
                    </span>
                  </div>
                  <p className='text-neutral-500 max-w-278-px tw-mt-10 group-hover-text-white tw-duration-300'>
                    We are committed to your success. Our platform is built to
                    drive
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='col-lg-4'
            data-aos='fade-up'
            data-aos-anchor-placement='top-bottom'
            data-aos-duration={800}
          >
            <div className='row gy-4'>
              <div className='col-lg-12 col-sm-6'>
                <div className='group-item tw-rounded-xl border border-neutral-200 tw-pt-12 tw-pb-15 tw-px-9 bg-neutral-50 hover-gradient-bg-five group animation-item tw-duration-300 position-relative z-1'>
                  <div className='d-flex align-items-center justify-content-between tw-gap-2'>
                    <h5 className='group-hover-text-white tw-duration-300 max-w-194-px splitTextStyleOne'>
                      built-in Automation
                    </h5>
                    <span className='group-hover-item-text-invert tw-duration-300 animate__heartBeat'>
                      <Image
                        width={50}
                        height={50}
                        src='/assets/images/icons/features-three-icon3.svg'
                        alt='Icon'
                      />
                    </span>
                  </div>
                  <p className='text-neutral-500 max-w-278-px tw-mt-10 group-hover-text-white tw-duration-300'>
                    We are committed to your success. Our platform is built to
                    drive
                  </p>
                </div>
              </div>
              <div className='col-lg-12 col-sm-6'>
                <div className='group-item tw-rounded-xl border border-neutral-200 tw-pt-12 tw-pb-15 tw-px-9 bg-neutral-50 hover-gradient-bg-five group animation-item tw-duration-300 position-relative z-1'>
                  <div className='d-flex align-items-center justify-content-between tw-gap-2'>
                    <h5 className='group-hover-text-white tw-duration-300 max-w-194-px splitTextStyleOne'>
                      Remote-Friendly Collaboration
                    </h5>
                    <span className='group-hover-item-text-invert tw-duration-300 animate__heartBeat'>
                      <Image
                        width={46}
                        height={46}
                        src='/assets/images/icons/features-three-icon4.svg'
                        alt='Icon'
                      />
                    </span>
                  </div>
                  <p className='text-neutral-500 max-w-278-px tw-mt-10 group-hover-text-white tw-duration-300'>
                    We are committed to your success. Our platform is built to
                    drive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesThree;
